---
title: "Cómo Cobrar Clientes en Diferentes Países: Guía 2026"
description: "Cómo cobrar clientes en diferentes países"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Mapa global con múltiples monedas y métodos de pago: USD, EUR, BRL, MXN, Pix, OXXO, iDEAL, con Stripe como centro de procesamiento y conversión automática"
---

**Cobrar clientes en diferentes países** es uno de los mayores desafíos para emprendedores que venden globalmente. Cada país tiene su moneda, sus métodos de pago preferidos, sus regulaciones fiscales y su poder adquisitivo.

En esta guía, explicamos **cómo cobrar clientes en diferentes países** en 2026: desde la configuración multi-moneda en Stripe hasta los métodos de pago locales, impuestos internacionales y conversión de divisas.

## 1. Por Qué es Importante Cobrar en la Moneda Local

### El Impacto de Mostrar Precios Locales

| Estrategia | Tasa de Conversión | Abandono de Carrito |
|-----------|-------------------|-------------------|
| Precio solo en USD | 2-3% | 70-80% |
| Precio en moneda local | 5-10% | 40-50% |
| Precio local + método de pago local | 10-20% | 20-30% |

**Dato clave:** Mostrar el precio en la moneda local del cliente puede duplicar o triplicar tus ventas.

### Por Qué los Clientes Prefieren Pagar en su Moneda

```
RAZONES:
✅ Saben exactamente cuánto están pagando
✅ Evitan cargos ocultos de conversión del banco
✅ Confianza: un precio en su moneda se siente "local"
✅ Presupuesto: pueden comparar con alternativas locales
✅ Métodos de pago locales: Pix, OXXO, iDEAL solo funcionan
   cuando el checkout está configurado para ese país

Stripe maneja todo esto automáticamente:
→ Detecta el país del cliente por IP
→ Mustra el precio en su moneda (si configuras precios locales)
→ Mustra métodos de pago locales
→ Traduce el checkout al idioma local
```

```javascript
// Stripe: Precios locales automáticos

// Crear precio en USD con opciones locales
const price = await stripe.prices.create({
  currency: 'usd',
  unit_amount: 9900, // $99 USD base
  product: '{{PRODUCT_ID}}',
  recurring: { interval: 'month' },
  currency_options: {
    eur: { unit_amount: 9900 },    // €99 para Europa
    mxn: { unit_amount: 180000 },  // $1,800 MXN para México
    brl: { unit_amount: 35000 },   // R$350 para Brasil
    gbp: { unit_amount: 8500 },    // £85 para Reino Unido
    cop: { unit_amount: 180000 },  // $180,000 COP para Colombia
    ars: { unit_amount: 1800000 }, // $18,000 ARS para Argentina
  },
});

// Stripe automáticamente cobra en la moneda local del cliente
```

## 2. Configuración Multi-Moneda en Stripe

### Cómo Funciona

| Componente | Qué Hace | Cómo Configurarlo |
|-----------|---------|------------------|
| **Stripe Payments** | Acepta pagos en +135 monedas | Activado por defecto |
| **Stripe Price API** | Define precios por moneda | Crear price con currency_options |
| **Stripe Checkout** | Mustra precio local + métodos | Locale: auto |
| **Stripe Customer** | Almacena moneda preferida | customer.preferred_locales |
| **Stripe Invoicing** | Facturas en múltiples monedas | Crear invoice con currency |
| **Stripe Tax** | Calcula impuestos locales | automatic_tax: true |

### Paso a Paso: Configurar Precios Globales

```
1. Crear producto en Stripe Dashboard
2. Crear precio base en USD
3. Agregar currency_options para cada país
4. Configurar Stripe Tax para impuestos locales
5. Configurar Checkout con locale: 'auto'
6. Stripe hace el resto automáticamente

EJEMPLO PRÁCTICO:

Producto: Suscripción Premium
Precio base: $99 USD

País     | Moneda | Precio Local | Factor
─────────┼────────┼──────────────┼───────
EE. UU.  | USD    | $99.00       | 1.00x
Europa   | EUR    | €99.00       | 1.00x (+VAT)
UK       | GBP    | £85.00       | 0.86x
México   | MXN    | $1,800.00    | 0.70x
Brasil   | BRL    | R$350.00     | 0.57x
Colombia | COP    | $180,000     | 0.55x
Chile    | CLP    | $55,000      | 0.60x
Perú     | PEN    | S/280        | 0.65x
```

```javascript
// Stripe: El cliente ve el precio en su moneda automáticamente

const session = await stripe.checkout.sessions.create({
  line_items: [{
    price: '{{PRICE_ID_WITH_OPTIONS}}',
    quantity: 1,
  }],
  mode: 'subscription',
  locale: 'auto',                     // Stripe traduce al idioma del cliente
  automatic_tax: { enabled: true },   // Stripe calcula impuestos locales
  customer_creation: 'always',        // Guarda el cliente para futuras facturas
});
```

## 3. Métodos de Pago por País

### Los Métodos que Cada País Prefiere

| País | Método #1 | Método #2 | Método #3 | Stripe lo Acepta |
|------|----------|-----------|-----------|-----------------|
| **EE. UU.** | Visa/Mastercard | ACH | Link | ✅ Todos |
| **Reino Unido** | Visa/Mastercard | Bacs Direct Debit | — | ✅ Todos |
| **Europa** | iDEAL (NL) | Tarjeta | SEPA | ✅ Todos |
| **Brasil** | Pix | Tarjeta | Boleto | ✅ Todos |
| **México** | Tarjeta | OXXO | SPEI | ✅ Todos |
| **Colombia** | Tarjeta | PSE | Efecty | ✅ PSE y tarjetas |
| **Argentina** | Tarjeta | Rapipago | Pago Fácil | ✅ Tarjetas |
| **Chile** | Webpay | Tarjeta | Khipu | ✅ Webpay y tarjetas |
| **Perú** | Tarjeta | PagoEfectivo | — | ✅ Tarjetas |
| **Australia** | Tarjeta | BPay | — | ✅ Todos |

### Cómo Configurar Métodos de Pago Locales

```
EN STRIPE DASHBOARD:
1. Settings → Payment methods
2. Activar los métodos que necesitas:
   - Pix (Brasil)
   - OXXO (México)
   - SPEI (México)
   - iDEAL (Países Bajos)
   - Bancontact (Bélgica)
   - PSE (Colombia)
   - Webpay (Chile)
   - SEPA (Europa)
3. Stripe los muestra automáticamente según el país del cliente

Stripe active todos los métodos de pago relevantes según el país.
No tienes que hacer nada más.
```

```javascript
// Stripe: Métodos de pago dinámicos por país

// Stripe detecta el país del cliente y muestra los métodos adecuados
const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  payment_method_types: [
    'card',       // Global
    'link',       // Global
    'pix',        // Brasil
    'oxxo',       // México
    'spei',       // México
    'ideal',      // Países Bajos
    'bancontact', // Bélgica
    'sepa_debit', // Europa
    'p24',        // Polonia
    'eps',        // Austria
    'sofort',     // Alemania/Austria
    'boleto',     // Brasil
  ],
  locale: 'auto',
});
```

## 4. Facturación Internacional con Stripe Invoicing

### Facturas en Múltiples Monedas

| Característica | Stripe Invoicing |
|---------------|-----------------|
| Monedas soportadas | +50 monedas |
| Conversión automática | ✅ (a USD a tu tipo de cambio) |
| Impuestos locales | ✅ Stripe Tax integrado |
| Envío automático | ✅ Email o link |
| Pagos recurrentes | ✅ Subscription invoices |
| Memo personalizado | ✅ Notas, términos, números de factura |
| Records de pago | ✅ Automáticos |

### Ejemplo: Facturar a Cliente en Europa

```javascript
// Crear factura en EUR para cliente europeo
const invoice = await stripe.invoices.create({
  customer: '{{EU_CUSTOMER_ID}}',
  currency: 'eur',
  collection_method: 'charge_automatically',
  automatic_tax: { enabled: true },        // VAT automático
  pending_invoice_items: [{
    price: '{{PRICE_ID_EUR}}',              // Precio en EUR
    quantity: 1,
  }],
  days_until_due: 30,
  custom_fields: [{
    name: 'VAT ID',
    value: '{{CUSTOMER_VAT_ID}}',
  }],
});

// Stripe envía la factura al cliente
// Stripe cobra automáticamente
// Stripe calcula y remite el VAT
```

### Facturación para Clientes sin Stripe

```
NO TODOS TUS CLIENTES QUIEREN PAGAR CON TARJETA:

OPCIÓN 1: STRIPE INVOICING (RECOMENDADO)
- Envías un link de pago por email
- El cliente paga con tarjeta, ACH, o método local
- Stripe registra el pago automáticamente

OPCIÓN 2: STRIPE CHECKOUT LINKS
- Generas un link de pago
- Lo envías por WhatsApp, email, Slack
- El cliente abre, paga, y listo

OPCIÓN 3: WIRE TRANSFER (MANUAL)
- Para montos grandes (+$10,000)
- Stripe no procesa wires
- Wise o banco directo

OPCIÓN 4: STRIPE + WISE
- Stripe para pagos recurrentes
- Wise para pagos únicos grandes
- Combinación ideal para montos variables
```

## 5. Suscripciones Globales con Stripe Billing

### Precios Diferentes por País para SaaS

| País | Precio Mensual | Ajuste vs USD | Razón |
|------|---------------|--------------|-------|
| **EE. UU.** | $99 USD | 1.00x | Mercado principal |
| **Europa** | €99 EUR | 1.10x (VAT incl.) | VAT entre 17-27% |
| **Brasil** | R$350 | 0.57x | Poder adquisitivo + Pix |
| **México** | $1,800 MXN | 0.70x | Mercado estratégico |
| **Colombia** | $180,000 COP | 0.55x | Poder adquisitivo |
| **India** | ₹4,000 | 0.50x | Mercado masivo |

### Cómo Implementar Precios por País

```javascript
// Stripe Billing: Un producto, múltiples precios por país

// Crear el producto
const product = await stripe.products.create({
  name: 'Premium Plan',
});

// Crear precio en USD (base)
const usdPrice = await stripe.prices.create({
  product: product.id,
  currency: 'usd',
  unit_amount: 9900,
  recurring: { interval: 'month' },
});

// Crear precios locales para cada país
const localPrices = await stripe.prices.create({
  product: product.id,
  currency: 'usd', // La moneda de facturación sigue siendo USD
  unit_amount: 9900,
  recurring: { interval: 'month' },
  currency_options: {
    brl: { unit_amount: 35000 },     // R$350
    mxn: { unit_amount: 180000 },    // $1,800 MXN
    eur: { unit_amount: 9900 },      // €99
    gbp: { unit_amount: 8500 },      // £85
    cop: { unit_amount: 180000 },    // $180,000 COP
  },
});

// Stripe automáticamente asigna el precio correcto
// según la moneda/localización del cliente
```

### Dunning Management Global

```
¿QUÉ PASA CUANDO UN PAGO FALLA?

Stripe Billing maneja automáticamente:
✅ Reintentos inteligentes (3-5 intentos)
✅ Email al cliente en su idioma
✅ Actualización de método de pago
✅ Downgrade/ cancelación automática

TASA DE RECUPERACIÓN POR PAÍS:
- EE. UU.: 60-70% (ACH + tarjeta)
- Europa: 50-60% (SEPA + tarjeta)
- Brasil: 70-80% (Pix no falla)
- LATAM general: 40-50% (tarjeta)

MEJORA TUS COBROS:
1. Activar Stripe Smart Retries
2. Configurar email de dunning en múltiples idiomas
3. Ofrecer métodos de pago locales (Pix, OXXO)
4. Recordatorios de vencimiento próximos
```

## 6. Conversión de Divisas y FX

### Cómo Maneja Stripe la Conversión

| Escenario | Stripe Hace | Tasa de Cambio | Tú Recibes |
|-----------|------------|---------------|-------------|
| **Cliente paga en USD** | Nada (ya está en USD) | N/A | USD exacto |
| **Cliente paga en EUR** | Convierte EUR → USD | Tasa Stripe (0.5-1% markup) | USD convertido |
| **Cliente paga en BRL** | Convierte BRL → USD | Tasa Stripe | USD convertido |
| **Precio en moneda local** | Cobra en moneda local, convierte a USD | Tasa Stripe | USD convertido |

### Optimización de FX

```
ESTRATEGIA PARA MINIMIZAR PÉRDIDAS POR FX:

1. FACTURAR EN USD SIEMPRE QUE SEA POSIBLE
   → Sin conversión = sin pérdida
   → Clientes en EE. UU. esperan USD
   → Clientes internacionales aceptan USD

2. USAR CURRENCY_OPTIONS EN STRIPE
   → El cliente ve el precio en su moneda
   → Stripe cobra en la moneda local
   → Stripe convierte a USD
   → El markup de Stripe es menor que el del banco del cliente

3. WISE + STRIPE PARA MONTOS GRANDES
   → Stripe: pagos recurrentes (tarjeta)
   → Wise: pagos únicos grandes (wire)
   → Wise tiene mejor tasa (0.4-0.8% vs 1-3% bancos)

4. ACUMULAR SALDO Y CONVERTIR CUANDO EL FX SEA FAVORABLE
   → Stripe retiene USD automáticamente
   → Acumula saldo hasta que el tipo de cambio mejore
   → Wise retira y convierte en el momento óptimo
```

```javascript
// Stripe: Controla la conversión

// Stripe retiene el saldo en la moneda original hasta que decidas
const balance = await stripe.balance.retrieve();

// Cada moneda tiene su propio disponible
balance.available.forEach(currency => {
  console.log(`${currency.currency.toUpperCase()}: $${currency.amount / 100}`);
});

// Stripe convierte automáticamente a USD al retirar
// O puedes mantener saldo en múltiples monedas con Stripe Treasury
```

## 7. Impuestos Internacionales por País

### Stripe Tax: Automatización de Impuestos Globales

| Región | Impuesto | Tasa | Stripe Tax lo Calcula |
|--------|---------|------|----------------------|
| **EE. UU.** | Sales Tax | 0-10% (según estado) | ✅ Sí (con registro) |
| **Europa** | VAT | 17-27% (según país) | ✅ Sí (con registro) |
| **Reino Unido** | VAT | 20% | ✅ Sí |
| **Australia** | GST | 10% | ✅ Sí |
| **Brasil** | ICMS/ISS | 7-18% | ⚠️ Parcial (integración) |
| **México** | IVA | 16% | ⚠️ Parcial |
| **Colombia** | IVA | 19% | ⚠️ Parcial |
| **Chile** | IVA | 19% | ⚠️ Parcial |

### Cómo Configurar Impuestos Globales

```
PASO 1: REGISTRARTE EN CADA PAÍS
→ Stripe Tax NO registra tu empresa automáticamente
→ Debes registrar VAT en UE, GST en UK, Sales Tax en EE. UU.
→ Stripe Tax calcula y cobra el impuesto correcto

PASO 2: ACTIVAR STRIPE TAX
→ Settings → Tax → Enable
→ Configurar tax behavior (exclusive/inclusive)
→ Stripe detecta la ubicación del cliente

PASO 3: STRIPE REPORTA
→ Stripe genera reportes para cada jurisdicción
→ Tu CPA usa esos reportes para declarar
→ Stripe NO remite los impuestos por ti

IMPORTANTE PARA LATAM:
→ Stripe Tax funciona mejor para EE. UU., UE, UK, Australia
→ Para LATAM (Brasil, México, Colombia), consulta con tu CPA local
→ Stripe puede calcular pero no necesariamente remitir
```

```javascript
// Stripe Tax: Calcula el impuesto para cada país

const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  automatic_tax: { enabled: true },
  customer_details: {
    address: {
      country: 'DE', // Cliente en Alemania
    },
  },
});

// Stripe calcula: $99 + 19% VAT (Alemania) = €117.81
console.log(`Total: ${session.amount_total / 100} ${session.currency}`);
console.log(`Impuesto: ${session.total_details.amount_tax / 100}`);
```

## 8. Stripe Connect para Pagar a Terceros

### Cuando Necesitas Pagar a Sellers, Contractors o Partners

| Escenario | Stripe Connect | Flujo |
|-----------|---------------|-------|
| **Marketplace** | Connect + Platform fees | Cobras al comprador, pagas al seller |
| **Plataforma SaaS** | Connect + Destination charges | Cobras al cliente, pagas al contractor |
| **Agencia** | Connect + Transfers | Cobras al cliente, pagas al freelancer |
| **E-commerce** | Connect + Split payments | Cobras al comprador, divides entre sellers |

### Pagar a Personas en Diferentes Países

```javascript
// Stripe Connect: Paga a contractors en diferentes países

// Cada contractor tiene su cuenta conectada en su país
const contractorBR = await stripe.accounts.create({
  type: 'express',
  country: 'BR', // Contractor en Brasil
  business_type: 'individual',
});

const contractorCO = await stripe.accounts.create({
  type: 'express',
  country: 'CO', // Contractor en Colombia
  business_type: 'individual',
});

const contractorMX = await stripe.accounts.create({
  type: 'express',
  country: 'MX', // Contractor en México
  business_type: 'individual',
});

// Pagas a todos desde una plataforma
await stripe.transfers.create({
  amount: 150000, // $1,500
  currency: 'usd',
  destination: contractorBR.id,
});

// Stripe maneja: conversión de moneda, compliance local, reportes 1099/1042-S
```

## 9. Estrategias de Precios por País

### Cómo Definir Precios Locales

```
FACTORES PARA AJUSTAR PRECIOS POR PAÍS:

1. PODER ADQUISITIVO (PPP)
   → GDP per cápita ajustado por PPP
   → Ejemplo: Brasil PPP = 0.57x vs EE. UU.
   → Precio Brasil = $99 x 0.57 = R$317

2. IMPUESTOS LOCALES
   → VAT en Europa (17-27%)
   → Sales Tax en EE. UU. (0-10%)
   → IVA en LATAM (16-19%)
   → Stripe Tax calcula automáticamente

3. COMPETENCIA LOCAL
   → ¿Hay alternativas locales más baratas?
   → ¿Cuánto cobran los competidores?
   → Ajusta para ser competitivo

4. COSTO DE ADQUISICIÓN DE CLIENTE (CAC)
   → CAC en EE. UU. vs LATAM vs Europa
   → Ajusta precios según el costo de vender en cada país

5. MÉTODO DE PAGO
   → Pix en Brasil = 0% chargeback, +35% conversión
   → Tarjeta en LATAM = 2-5% chargeback
   → Ofrece descuento por Pix/SPEI (2-5%)
```

### Ejemplo de Matriz de Precios

```
SAAS PLAN: $99/mes base

PAÍS     | MONEDA | PRECIO LOCAL | FACTOR | TAX   | PRECIO FINAL
─────────┼────────┼──────────────┼────────┼───────┼─────────────
US       | USD    | $99.00       | 1.00x  | 0%    | $99.00
DE       | EUR    | €99.00       | 1.00x  | 19%   | €117.81
UK       | GBP    | £85.00       | 0.86x  | 20%   | £102.00
BR       | BRL    | R$317.00     | 0.57x  | 0%*   | R$317.00
MX       | MXN    | $1,800.00    | 0.70x  | 16%   | $2,088.00
CO       | COP    | $180,000     | 0.55x  | 19%   | $214,200
CL       | CLP    | $55,000      | 0.60x  | 19%   | $65,450

*Servicios digitales de empresa extranjera a consumidor
en Brasil pueden tener IOF u otros impuestos
```

## 10. Errores Comunes al Cobrar Globalmente

### Lo que NO Debes Hacer

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| **Un solo precio en USD** | Bajas conversiones (70% abandono) | Precios locales por país |
| **Ignorar métodos de pago locales** | Pierdes 35-50% del mercado | Pix, OXXO, iDEAL, PSE |
| **No configurar Stripe Tax** | Multas por VAT/GST no cobrado | Stripe Tax automático |
| **Mala conversión FX** | Pierdes 2-5% en cada transacción | Stripe + Wise |
| **No manejar dunning** | Pierdes 30-50% de suscripciones | Stripe Smart Retries |
| **Mezclar monedas en facturas** | Confusión, retrasos en pagos | Una moneda por factura |
| **Ignorar chargebacks** | Pérdidas, cuenta en riesgo | Stripe Radar + 3D Secure |
| **No tener términos de servicio por país** | Riesgo legal | Términos multi-idioma |

## 11. Stack Tecnológico Recomendado

### Tu Stack para Cobrar Globalmente

```
┌──────────────────────────────────────┐
│         STRIPE PAYMENTS               │
│  Acepta +135 monedas, +40 métodos     │
│  Pix, OXXO, iDEAL, PSE, SEPA, ACH    │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE BILLING                │
│  Suscripciones globales, dunning      │
│  Precios por país, Smart Retries      │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE TAX                    │
│  VAT, GST, Sales Tax automáticos      │
│  Reportes por jurisdicción            │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         WISE / MERCURY                │
│  Conversión FX óptima                 │
│  Retiro a banco local                 │
└──────────────────────────────────────┘

TODO INTEGRADO:
Stripe → Wise → Tu banco local
Sin mover un dedo
```

## 12. Plan de Acción para Cobrar Globalmente

### Día 1-3: Configuración Inicial

```
□ Activar Stripe Payments (multi-moneda)
□ Configurar métodos de pago locales (Pix, OXXO, iDEAL, etc.)
□ Crear producto y precios con currency_options
□ Configurar Stripe Tax
```

### Día 4-7: Facturación y Suscripciones

```
□ Configurar Stripe Invoicing
□ Configurar Stripe Billing para suscripciones
□ Definir precios por país (matriz de precios)
□ Configurar dunning automático
```

### Día 8-14: Optimización

```
□ Configurar Stripe Radar (anti-fraude internacional)
□ Configurar webhooks para notificaciones de pago
□ Integrar Wise para conversión FX
□ Probar flujo completo de pago en 3 países
```

### Día 15-30: Lanzamiento

```
□ Capacitar al equipo en multi-moneda
□ Crear documentación para clientes internacionales
□ Lanzar campaña en nuevo mercado
□ Monitorear conversión y ajustar precios
```

## 13. Checklist para Cobrar Globalmente

### INFRAESTRUCTURA DE PAGOS:
- [ ] Stripe Payments activado (multi-moneda)
- [ ] Métodos de pago locales activados (Pix, OXXO, iDEAL, PSE, SEPA)
- [ ] Precios con currency_options por país
- [ ] Stripe Tax configurado
- [ ] Stripe Radar activo

### FACTURACIÓN:
- [ ] Stripe Invoicing configurado
- [ ] Plantillas de factura por moneda
- [ ] Stripe Billing para suscripciones
- [ ] Dunning automático configurado
- [ ] Email de factura en idioma del cliente

### FX Y CONVERSIÓN:
- [ ] Wise Business configurado
- [ ] Estrategia de conversión definida
- [ ] Stripe Treasury (si aplica)
- [ ] Política de precios por país documentada

### COMPLIANCE:
- [ ] Stripe Tax activo para impuestos
- [ ] Registros VAT/GST en países donde vendes
- [ ] Términos de servicio multi-idioma
- [ ] Política de privacidad GDPR
- [ ] CPA internacional revisando estructura

## Conclusión

**Cobrar clientes en diferentes países** en 2026 es más simple que nunca gracias a Stripe. Con una configuración multi-moneda, métodos de pago locales, Stripe Tax para impuestos y Wise para conversión FX, puedes ofrecer una experiencia de pago local en cada país sin tener presencia física allí.

La clave está en tres pilares:
1. **Precios locales**: cada país ve el precio en su moneda
2. **Métodos locales**: Pix, OXXO, iDEAL, PSE según el país
3. **Impuestos automáticos**: Stripe Tax calcula VAT, GST, sales tax

No necesitas un banco en cada país ni una empresa en cada mercado. Con Stripe, tu checkout se adapta automáticamente a cada cliente, sin importar dónde esté.

En **Sotomayor Consulting International**, te ayudamos a configurar tu infraestructura de cobros globales: desde Stripe multi-moneda y métodos de pago locales hasta la estrategia de precios por país y compliance fiscal internacional. Contáctanos para una consultoría personalizada.
