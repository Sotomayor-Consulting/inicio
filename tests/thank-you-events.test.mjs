import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const pagePath = new URL(
  "../src/pages/crea-tu-llc-en-usa/gracias-por-tu-registro/index.html",
  import.meta.url,
);
const html = await readFile(pagePath, "utf8");

function registrationFor(search) {
  const match = html.match(
    /function sotoGetConfirmedRegistration\(\) \{[\s\S]*?\n    \}/,
  );
  assert.ok(match, "La compuerta de registro confirmado debe existir");
  const context = { URLSearchParams, window: { location: { search } } };
  vm.runInNewContext(`${match[0]}; result = sotoGetConfirmedRegistration();`, context);
  return context.result;
}

assert.equal(registrationFor(""), null, "Una visita directa no registra conversión");
assert.equal(
  registrationFor("?registration_confirmed=1"),
  null,
  "La confirmación sin lead_id no registra conversión",
);
const confirmedRegistration = registrationFor(
  "?registration_confirmed=yes&lead_id=lead-123&registration_event_id=evt-456",
);
assert.equal(confirmedRegistration.lead_id, "lead-123", "La redirección conserva el lead_id");
assert.equal(confirmedRegistration.event_id, "evt-456", "La redirección conserva el event_id");
assert.equal(
  registrationFor("?registration_confirmed=true&lead_id=lead-789").event_id,
  "soto_CompleteRegistration_lead-789",
  "Un registro confirmado sin event_id mantiene una clave estable",
);

assert.match(html, /sotoTrack\('ViewContent'/, "La carga conserva ViewContent");
assert.match(html, /if \(confirmedRegistration\) \{\s*sotoTrack\('CompleteRegistration'/, "CompleteRegistration queda condicionado");
assert.doesNotMatch(html, /sotoTrack\('SubmitForm'/, "La carga no debe emitir SubmitForm");
assert.match(html, /sotoTrack\('Contact', \{[\s\S]*?event_stage:'schedule_intent'/, "El clic de agenda es Contact/intención");
assert.doesNotMatch(html, /sotoTrack\('Schedule'/, "La página de gracias no confirma una cita");
assert.doesNotMatch(html, /sotoTrack\('PageView'/, "No se añade un PageView duplicado al dataLayer");

console.log("thank-you event sequencing: 11 assertions passed");
