---
title: "Cómo Generar Ingresos Pasivos con Propiedades en EE. UU.: Guía 2026"
description: "Cómo generar ingresos pasivos con propiedades en EE. UU."
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Espectro de ingresos pasivos con propiedades: REITs, crowdfunding, turnkey, LTR, STR, con iconos de Stripe y flujo de dinero automático"
---

**Generar ingresos pasivos con propiedades en EE. UU.** es el sueño de todo inversor: rentas que llegan automáticamente cada mes sin que tengas que levantar un dedo. La realidad es que existen diferentes niveles de "pasividad", desde completamente pasivo (REITs, crowdfunding) hasta semi-pasivo (turnkey properties con property manager, long-term rentals).

En esta guía, explicamos **cómo generar ingresos pasivos con propiedades en EE. UU.** en 2026: desde la estrategia más pasiva hasta la más activa, con ejemplos, números reales, y cómo Stripe automatiza el cobro de rentas.

## 1. El Espectro de la Pasividad

### De 100% Pasivo a 100% Activo

| Estrategia | Nivel de Pasividad | Ingreso Mensual (por $100K) | Tiempo Requerido | Riesgo |
|-----------|-------------------|---------------------------|-----------------|--------|
| **REITs** | ✅ 100% pasivo | $500-800 (dividendos) | 0 horas/mes | Medio |
| **Crowdfunding inmobiliario** | ✅ 95% pasivo | $700-1,200 | 0.5 horas/mes | Medio-Alto |
| **Turnkey LTR (con PM)** | ✅ 90% pasivo | $600-1,000 | 1-2 horas/mes | Bajo-Medio |
| **Turnkey STR (con PM)** | ⚠️ 80% pasivo | $800-1,500 | 2-4 horas/mes | Medio |
| **LTR con PM propio** | ⚠️ 70% pasivo | $700-1,100 | 3-5 horas/mes | Bajo |
| **STR con PM propio** | ⚠️ 60% pasivo | $900-1,800 | 5-10 horas/mes | Medio |
| **House hacking** | ❌ 50% pasivo | $500-1,000 (vivienda gratis) | 5-15 horas/mes | Bajo |
| **Flip (activo)** | ❌ 0% pasivo | Variable (lump sum) | 40+ horas/semana | Alto |

### No Existe el Ingreso 100% Pasivo

```
Realidad sobre el ingreso pasivo:

✅ INGRESO PASIVO REAL:
- REITs: el equipo gestor hace todo
- Crowdfunding: el sponsor hace todo
- Turnkey + PM: solo revisas estados de cuenta

⚠️ INGRESO SEMI-PASIVO:
- LTR con PM: decisiones estratégicas + taxes
- STR con PM: más gestión (precios dinámicos, reseñas)
- LLC management: annual reports, registered agent

❌ INGRESO ACTIVO (no pasivo):
- Ser landlord sin PM
- Hacer reparaciones tú mismo
- Gestionar inquilinos directamente
- Flip properties

Objetivo: llegar a 90%+ pasividad
Usando: turnkey properties + property manager + Stripe
```

```javascript
// Stripe: La automatización es clave para ingresos pasivos

// Stripe puede cobrar rentas automáticamente cada mes
// Sin que tengas que hacer nada

// Configurar suscripción mensual para inquilino
const subscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}', // ID del inquilino
  items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Alquiler mensual - Orlando Condo' },
      unit_amount: 350000, // $3,500/mes
      recurring: { interval: 'month' },
    },
  }],
  payment_behavior: 'default_incomplete',
});

// Stripe cobra automáticamente cada mes
// Tú solo revisas el reporte mensual
```

## 2. REITs (Real Estate Investment Trusts)

### La Opción Más Pasiva

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Empresa que posee y opera bienes raíces que generan ingresos. Compras acciones y recibes dividendos. |
| **Inversión mínima** | $0 (puedes comprar 1 acción) |
| **Rendimiento típico** | 4-12% anual en dividendos |
| **Liquidez** | Alta (se vende en bolsa) |
| **Impuestos** | 15-30% sobre dividendos (depende de tu país) |
| **Pasividad** | 100% (todo lo hace el equipo gestor) |

### REITs Recomendados para 2026

| REIT | Sector | Dividend Yield | Market Cap |
|------|--------|---------------|------------|
| **Realty Income (O)** | Retail/comercial | 5.5% | $45B+ |
| **Equity Residential (EQR)** | Apartamentos | 4.2% | $25B+ |
| **Prologis (PLD)** | Logística/industrial | 3.2% | $100B+ |
| **VICI Properties (VICI)** | Entretenimiento | 5.8% | $35B+ |
| **Digital Realty (DLR)** | Data centers | 3.5% | $50B+ |

### Ventajas y Desventajas

| Ventajas | Desventajas |
|----------|------------|
| ✅ 100% pasivo | ❌ No controlas las propiedades |
| ✅ Alta liquidez | ❌ Sujeto a volatilidad del mercado |
| ✅ Inversión mínima baja | ❌ Dividendos gravados como ingreso ordinario |
| ✅ Diversificación | ❌ No hay depreciación fiscal (para extranjeros) |
| ✅ No necesitas LLC | ❌ No hay apalancamiento (no usas hipoteca) |

```javascript
// Stripe: Stripe no invierte en REITs directamente
// Pero puedes usar Stripe para recibir los dividendos

// Configurar Stripe Connect para recibir pagos de corretaje
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  capabilities: {
    transfers: { requested: true },
  },
});

// Los dividendos llegan automáticamente
// Stripe genera reportes para taxes (1099-DIV)
```

## 3. Crowdfunding Inmobiliario

### Inversión Colectiva en Proyectos

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Plataformas donde múltiples inversores se unen para financiar proyectos inmobiliarios |
| **Inversión mínima** | $500-$25,000 (según plataforma) |
| **Rendimiento típico** | 8-15% anual |
| **Plazo** | 6-36 meses (por proyecto) |
| **Pasividad** | 95% (el sponsor gestiona todo) |

### Plataformas Populares 2026

| Plataforma | Mínimo | Rendimiento | Tipo de Proyecto |
|-----------|--------|------------|-----------------|
| **Fundrise** | $10 | 8-12% | Cartera diversificada |
| **CrowdStreet** | $25,000 | 12-18% | Proyectos comerciales |
| **RealtyMogul** | $5,000 | 8-14% | Multifamiliar, comercial |
| **YieldStreet** | $5,000 | 9-15% | Deuda inmobiliaria |
| **Groundfloor** | $10 | 7-12% | Préstamos de corto plazo |

### Cómo Funciona

```
1. Te registras en la plataforma
2. Revisas los proyectos disponibles
3. Inviertes en los que te interesan
4. El sponsor del proyecto compra, gestiona y vende
5. Recibes pagos periódicos (mensuales o al final)

Ejemplo con Fundrise:
- Inviertes $5,000 en un fondo de apartamentos
- El fondo compra 3 complejos de apartamentos
- Recibes dividendos trimestrales (~$100-150)
- Al vender (5-7 años), recibes ganancia de capital
- Total estimado: 9-12% anual compuesto
```

## 4. Turnkey Properties (LTR con Property Manager)

### La Opción Más Popular para Ingreso Pasivo

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Propiedades listas para alquilar (rehabilitadas, con inquilino o listas para poner) + property manager que las gestiona |
| **Inversión típica** | $100,000-400,000 por propiedad |
| **Rendimiento neto** | 6-10% anual (cash-on-cash) |
| **Pasividad** | 90% (solo revisas reportes y taxes) |

### El Flujo de Ingreso Pasivo con Turnkey

```
Tú inviertes → Compras propiedad rehabilitada
  → Property Manager coloca inquilino
  → Inquilino paga renta a Stripe (automático)
  → PM cobra su fee (8-12%)
  → PM paga hipoteca, seguro, tax (si aplica)
  → PM envía ganancia a tu cuenta bancaria
  → Tú recibes reporte mensual
  → Tu CPA prepara 1040-NR anual

TU TRABAJO:
- Revisar reporte mensual (10 minutos)
- Pagar taxes anuales (con tu CPA)
- Decisiones estratégicas (venta, refinanciar)
- Total: 1-2 horas por mes
```

### Ejemplo Numérico Real

```
Propiedad turnkey en Orlando, FL:
- Precio de compra: $250,000
- Down payment (30%): $75,000
- Préstamo DSCR: $175,000 al 8%

INGRESOS:
- Renta mensual: $2,800
- Vacancia (5%): -$140
- Ingreso efectivo: $2,660

GASTOS (gestionados por PM):
- Hipoteca (P&I): $1,284
- Property tax: $250
- Seguro: $150
- HOA: $100
- Property manager (10%): $266
- Mantenimiento (10%): $266
- Total gastos: $2,316

FLUJO DE CAJA MENSUAL:
$2,660 - $2,316 = $344/mes

RENDIMIENTO:
- Cash flow anual: $4,128
- Cash on cash: $4,128 / $75,000 = 5.5%
- + Apreciación (3-5% anual en Florida)
- + Depreciación fiscal (~$6,000/año)
- + Pago de hipoteca (amortización)
- Retorno total estimado: 10-15% anual
```

```javascript
// Stripe: Configurar cobro automático con PM

// El property manager usa Stripe para cobrar al inquilino
// Stripe envía el pago a la LLC
// Stripe genera reporte mensual

// Reporte mensual de ingresos
const monthlyReport = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});

// Tú solo abres el reporte y revisas
// ¡Eso es ingreso pasivo!
```

## 5. Short-Term Rentals (STR) Pasivos

### STR con Property Manager

| Aspecto | LTR | STR (con PM) |
|---------|-----|-------------|
| **Ingreso bruto** | $2,800/mes | $4,500/mes |
| **Gastos operativos** | 50-60% | 55-70% |
| **Ingreso neto** | $344/mes | $600-1,000/mes |
| **Pasividad** | 90% | 80% |
| **Gestión del PM** | Baja (inquilino estable) | Alta (check-in/out, limpieza) |
| **Stripe** | Suscripción mensual | Pago por reserva |

### Costo de la Pasividad en STR

```
Para tener STR completamente pasivo, necesitas:

1. PROPERTY MANAGER ESPECIALIZADO EN STR
   - Gestiona reservas (Airbnb, VRBO, Booking.com)
   - Coordina limpieza entre huéspedes
   - Maneja check-in/out
   - Precios dinámicos
   - Costo: 20-30% de ingresos (vs 8-12% en LTR)

2. SOFTWARE DE GESTIÓN
   - El PM debe usar software como Hostaway, Guesty, Uplisting
   - Integración con Stripe para pagos
   - Calendario sincronizado entre plataformas

3. MANTENIMIENTO PROFESIONAL
   - Team de limpieza confiable
   - Handyman de respaldo
   - Suministros automáticos (Amazon Subscribe & Save)

EJEMPLO:
- STR en Orlando: $350/noche, ocupación 70%
- Ingreso mensual: $350 x 30 x 70% = $7,350
- Menos fees de plataforma (15%): $1,102
- Menos PM (25%): $1,837
- Menos limpieza, suministros, utilities: $1,500
- Neto mensual: ~$2,900
- vs LTR: ~$2,800 bruto, $344 neto
```

## 6. House Hacking: Vive Gratis + Ingreso

### La Estrategia de Entrada

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Comprar una propiedad multifamiliar (2-4 unidades), vivir en una unidad y alquilar las otras |
| **Inversión** | Baja (hipoteca FHA o DSCR) |
| **Pasividad** | 50% (eres vecino de tus inquilinos) |
| **Beneficio** | Vivienda gratis + flujo de caja |

### Ejemplo de House Hacking

```
Duplex en Tampa, FL:
- Precio: $350,000
- Down payment FHA (3.5%): $12,250 (si eres residente)
- Down payment DSCR (25%): $87,500 (si eres extranjero)
- Hipoteca mensual: $2,400 (PITI)

INGRESOS:
- Unidad A (vives tú): $0
- Unidad B (alquilas): $2,000/mes

FLUJO:
- Hipoteca: $2,400
- Renta Unidad B: -$2,000
- Tu costo de vivienda: $400/mes (vs $1,500+ de alquiler)

AHORRO: $1,100/mes en vivienda
FLUJO DE CAJA: -$400/mes (pero vives gratis prácticamente)

Después de 1 año:
- Refinanciar o comprar otra propiedad
- La Unidad A también se alquila cuando te mudas
```

### House Hacking como Plataforma

```
Estrategia de escalado:

AÑO 1: Compra duplex, vive en unidad A, alquila B
  - Ahorras $1,100/mes en vivienda
  - Pagas menos hipoteca

AÑO 2: Refinancia o ahorra para segunda propiedad
  - Compra triplex, vive en una, alquila dos
  - Alquilas ambas unidades del duplex original

AÑO 3: Repite
  - Después de 5 propiedades, tienes ingreso pasivo real
  - Ya no necesitas vivir en las propiedades
```

## 7. Rent-to-Rent (Alquilar y Subalquilar)

### Estrategia Sin Capital

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Alquilar una propiedad a largo plazo y subalquilarla a corto plazo (STR) |
| **Inversión** | Baja (depósito + primer mes) |
| **Riesgo** | Alto (el contrato debe permitir subarriendo) |
| **Pasividad** | 70% (con PM para STR) |

### Cómo Funciona

```
1. Encuentras un propietario que acepte subarriendo
2. Firmas contrato de alquiler anual: $2,000/mes
3. Amueblas la propiedad (inversión: $5,000-15,000)
4. La pones en Airbnb: $200/noche
5. Ocupación: 60% → $3,600/mes
6. Ganancia mensual: $3,600 - $2,000 - gastos = $800-1,200

VENTAJAS:
- Sin hipoteca, sin property tax, sin seguro de propietario
- Inversión inicial baja
- Puedes escalar rápido

DESVENTAJAS:
- Necesitas permiso del propietario
- Riesgo de que el propietario no renueve
- Menos margen que ser dueño
```

## 8. Notas Privadas (Private Lending)

### Ser el Banco

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Prestar dinero a otros inversores inmobiliarios con la propiedad como garantía |
| **Inversión mínima** | $50,000+ |
| **Rendimiento** | 9-15% anual |
| **Plazo** | 6-24 meses |
| **Pasividad** | 95% (solo cobras intereses) |

### Cómo Funciona

```
Tú prestas $100,000 a un flipper (interés 12%)
→ El flipper compra, repara y vende una propiedad
→ Te paga intereses mensuales: $1,000/mes
→ Al vender (12 meses), te devuelve los $100,000
→ Ganancia total: $12,000 en 12 meses (12% ROI)

REQUISITOS:
- Due diligence del inversionista
- Primera hipoteca sobre la propiedad
- Loan agreement firmado por abogado
- Título y seguro de título

RIESGOS:
- Si el flipper no vende, ejecutas la hipoteca
- Si la propiedad se deprecia, pierdes capital
- Proceso legal si hay default
```

## 9. Triple Net Lease (NNN)

### El Santo Grial del Ingreso Pasivo

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Propiedad comercial donde el inquilino paga TODO: renta + insurance + taxes + maintenance |
| **Tipo de inquilinos** | Cadenas nacionales (Starbucks, Walgreens, CVS, McDonald's) |
| **Rendimiento** | 4-8% anual |
| **Plazo** | 10-25 años |
| **Pasividad** | 99% (casi absoluta) |

### Ventajas del NNN

```
✅ COMPLETAMENTE PASIVO:
- El inquilino paga todo (seguro, tax, mantenimiento)
- Tú solo cobras el rent check cada mes
- Sin llamadas de mantenimiento
- Sin inquilinos problema (son corporaciones)

✅ CONTRATOS LARGO PLAZO:
- 10-25 años con opciones de renovación
- Incrementos de renta anual (2-3%)
- Inquilinos con grado de inversión

✅ Stripe:
- Pagos automáticos mensuales
- Stripe puede generar invoices
- Reportes para taxes

DESVENTAJAS:
- Alta inversión ($500K-$5M+)
- Bajo rendimiento (4-8%)
- Iliquidez (difícil vender rápido)
- Riesgo de tenant vacante (si la cadena quiebra)
```

```javascript
// Stripe para NNN: Cobro automático de renta comercial

// Configurar invoice recurrente para el inquilino corporativo
const invoice = await stripe.invoices.create({
  customer: '{{CORPORATE_TENANT_ID}}',
  auto_advance: true,
  collection_method: 'charge_automatically',
  pending_invoice_items: [{
    price: '{{PRICE_ID_NNN_RENT}}',
    quantity: 1,
  }],
  due_date: Math.floor(Date.now() / 1000) + 2592000, // 30 días
});

// Stripe cobra automáticamente cada mes
// Sin intervención tuya
```

## 10. Cómo Automatizar con Stripe

### El Stack de Ingreso Pasivo

| Componente | Función | Automatización |
|-----------|---------|---------------|
| **Stripe** | Cobro de rentas | ✅ 100% automático |
| **Stripe Tax** | Cálculo de impuestos | ✅ Automático |
| **Stripe Reporting** | Reportes mensuales | ✅ Generación automática |
| **Property Manager** | Gestión de inquilinos | ✅ Ellos hacen todo |
| **CPA** | Declaración anual | ✅ Anual |
| **Registered Agent** | Compliance LLC | ✅ Anual |
| **Pagos automáticos** | Hipoteca, seguro, tax | ✅ Automated clearing house |

### Tu Rutina Mensual (1-2 horas)

```
DÍA 1: REVISAR INGRESOS (15 minutos)
- Abrir Stripe Dashboard
- Revisar ingresos del mes anterior
- Verificar que todos los pagos se cobraron
- Descargar reporte mensual

DÍA 15: REVISAR REPORTE DEL PM (30 minutos)
- Revisar ocupación (STR) o estado inquilinos (LTR)
- Aprobar gastos mayores (si aplica)
- Revisar DSCR de cada propiedad

FIN DE MES: ACTUALIZAR REGISTROS (15 minutos)
- Actualizar spreadsheet de ingresos/gastos
- Verificar pagos de hipoteca y seguros
- Archivar reportes para taxes

TOTAL: 1-2 horas por mes para 3-5 propiedades
```

```javascript
// Stripe: Tu mejor aliado para ingresos pasivos

// 1. Stripe cobra automáticamente
await stripe.subscriptions.create({
  customer: '{{TENANT}}',
  items: [{ price: '{{MONTHLY_RENT_PRICE}}' }],
  payment_behavior: 'default_incomplete',
});

// 2. Stripe concilia automáticamente
const balance = await stripe.balance.retrieve();
console.log(`Balance disponible: $${balance.available[0].amount / 100}`);

// 3. Stripe reporta automáticamente
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});

// 4. Stripe se integra con PM software
// Hostaway, Guesty, Lodgify, Uplisting
// Todo sincronizado automáticamente
```

## 11. Preguntas Frecuentes

### ¿Cuánto dinero necesito para generar $1,000/mes en ingresos pasivos?

Depende de la estrategia: REITs ($150,000-300,000 en dividendos al 4-8%), crowdfunding ($100,000-150,000 al 8-12%), turnkey LTR ($150,000-250,000 en down payments), STR ($100,000-200,000). La regla general: $100,000 invertidos generan $500-1,500/mes según la estrategia.

### ¿Qué estrategia es más pasiva?

REITs (100% pasivo) seguido de crowdfunding (95%) y NNN leases (99%). Turnkey con property manager es 90% pasivo. STR con PM es 80% pasivo. House hacking es 50% pasivo.

### ¿Stripe reemplaza al property manager?

No. Stripe automatiza el cobro, pero el PM gestiona inquilinos, reparaciones, y el día a día. Stripe + PM = la combinación perfecta para ingresos pasivos.

### ¿Puedo generar ingresos pasivos sin ser propietario?

Sí: REITs, crowdfunding, y private lending no requieren que seas propietario directo. Pero el control y los beneficios fiscales (depreciación) son menores.

### ¿Cuánto tiempo toma alcanzar ingresos pasivos significativos?

Con la estrategia adecuada (turnkey + PM + Stripe), puedes tener tu primera propiedad generando ingresos pasivos en 3-6 meses desde que empiezas. Para reemplazar un ingreso de $5,000/mes, necesitas 5-10 propiedades (2-5 años).

### ¿Los impuestos afectan el ingreso pasivo?

Sí. Los extranjeros pagan 10-37% sobre ingresos netos (con W-8ECI) o 30% sobre brutos (sin W-8ECI). La depreciación reduce significativamente el impuesto. Consulta con un CPA para maximizar tu ingreso neto.

## 12. Checklist para Ingresos Pasivos

### SELECCIONAR ESTRATEGIA:
- [ ] Definir presupuesto disponible
- [ ] Elegir nivel de pasividad deseado
- [ ] Evaluar tolerancia al riesgo
- [ ] Decidir entre LTR, STR, REIT, crowdfunding o NNN
- [ ] Investigar mercados objetivo

### IMPLEMENTAR AUTOMATIZACIÓN:
- [ ] Formar LLC para cada propiedad
- [ ] Abrir cuenta bancaria separada
- [ ] Configurar Stripe para cobros automáticos
- [ ] Configurar Stripe Subscriptions para rentas mensuales
- [ ] Conectar Stripe con el software del PM
- [ ] Configurar Stripe Tax (si aplica)
- [ ] Configurar pagos automáticos (hipoteca, seguro, tax)

### DELEGAR GESTIÓN:
- [ ] Contratar property manager (LTR 8-12% o STR 20-30%)
- [ ] Contratar CPA para taxes anuales
- [ ] Contratar registered agent para LLC
- [ ] Configurar reportes automáticos mensuales
- [ ] Revisar reportes 1-2 horas/mes

### OPTIMIZAR:
- [ ] Presentar W-8ECI para evitar retención del 30%
- [ ] Maximizar depreciación (cost segregation)
- [ ] Revisar DSCR anualmente
- [ ] Refinanciar cuando las tasas bajen
- [ ] Reinvertir flujo de caja en nuevas propiedades
- [ ] Escalar: de 1 propiedad a 5+ en 2-3 años

## Conclusión

**Generar ingresos pasivos con propiedades en EE. UU.** es completamente alcanzable con la combinación correcta de estrategia, estructura y automatización. La clave está en tres pilares:

1. **Estrategia adecuada**: turnkey LTR o STR con property manager para máxima pasividad
2. **Estructura legal**: LLC por propiedad para protección
3. **Automatización**: Stripe para cobros automáticos, reporting y taxes

El ingreso pasivo no es "cero trabajo", sino "mínimo trabajo estratégico". Con Stripe automatizando los cobros, un property manager gestionando el día a día, y un CPA ocupándose de los taxes, tu trabajo se reduce a 1-2 horas al mes revisando reportes y tomando decisiones.

En **Sotomayor Consulting International**, te ayudamos a construir tu portafolio de ingresos pasivos: desde la selección de propiedades turnkey y formación de LLCs hasta la configuración de Stripe para cobros automáticos y la conexión con property managers de confianza. Contáctanos para una consultoría personalizada.
