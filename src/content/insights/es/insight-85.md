---
title: "Cómo Financiar Propiedades en EE. UU. siendo Extranjero: Guía 2026"
description: "Cómo financiar propiedades en EE. UU. siendo extranjero"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Opciones de financiamiento para extranjeros en EE. UU.: DSCR loan, conventional, hard money, seller financing, private lending"
---

**Financiar propiedades en EE. UU. siendo extranjero** es posible a través de múltiples opciones: DSCR loans (basados en renta, no en ingresos personales), hard money (corto plazo, alta tasa), private lending, seller financing, y conventional loans (si tienes ITIN o SSN con historial crediticio).

En esta guía, explicamos **cómo financiar propiedades en EE. UU. siendo extranjero** en 2026: requisitos, tasas, plazos, ventajas de cada opción, y cómo Stripe puede respaldar tu solicitud de préstamo.

## 1. Panorama General de Opciones de Financiamiento

| Opción | Perfil Ideal | Tasa (2026) | Down Payment | Plazo |
|--------|-------------|-------------|--------------|-------|
| **Cash (efectivo)** | Cualquier extranjero | 0% (sin interés) | 100% | Inmediato |
| **DSCR Loan** | Inversor con propiedad en alquiler | 7-9% | 20-35% | 30 años |
| **Conventional Loan** | Extranjero con ITIN/SSN + crédito US | 6-8% | 20-30% | 15-30 años |
| **Hard Money** | Flip, reparación, corto plazo | 10-15% | 20-30% | 6-24 meses |
| **Private Lending** | Relación con prestamista | 8-12% | Negociable | Negociable |
| **Seller Financing** | Vendedor motivado | 5-10% | 10-30% | Negociable |
| **Portfolio Loan** | Banco local con flexibilidad | 7-10% | 25-40% | 15-30 años |

### ¿Eres Elegible?

```
¿Tienes SSN o ITIN?
├── Sí → ¿Tienes historial crediticio en EE. UU.?
│   ├── Sí → Conventional / Portfolio / DSCR
│   └── No → DSCR / Hard Money / Private
└── No → ¿Tienes ingresos por alquiler?
    ├── Sí → DSCR Loan (mejor opción)
    └── No → Hard Money / Cash / Seller Financing
```

```javascript
// Stripe: Stripe no origina préstamos, pero genera reportes de ingresos
// que los bancos y lenders usan para aprobar DSCR loans

// Reporte de ingresos por alquiler para el lender
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 31536000, // 12 meses
    interval_end: Math.floor(Date.now() / 1000),
    columns: ['created', 'amount', 'description', 'status'],
  },
});

// Luego descargas este reporte y lo presentas al banco
```

## 2. DSCR Loan: La Mejor Opción para Extranjeros

### ¿Qué es un DSCR Loan?

DSCR significa **Debt Service Coverage Ratio**. Es un préstamo basado en el flujo de caja de la propiedad, NO en tus ingresos personales. El lender evalúa:

```
DSCR = Ingreso neto por alquiler / Pago mensual del préstamo

Ejemplo:
Renta mensual: $3,500
Pago mensual (hipoteca + seguros + tax): $2,800
DSCR = $3,500 / $2,800 = 1.25

Requisito típico: DSCR ≥ 1.0

Si DSCR = 1.25, el préstamo se aprueba
Si DSCR < 1.0, necesitas más down payment
```

### Requisitos para Extranjeros

| Requisito | Detalle |
|-----------|---------|
| **Residencia** | Cualquier país (sin SSN/ITIN requerido) |
| **Down payment** | Mínimo 20-35% (mayor sin historial US) |
| **DSCR mínimo** | 1.0-1.25 (depende del lender) |
| **Contrato de arrendamiento** | Si es refinance, tener inquilinos |
| **EIN de LLC** | Necesario para abrir cuenta bancaria |
| **ITIN** | Recomendado, no obligatorio |
| **Depósitos en cuenta US** | 2-12 meses de reservas |

### Tasas y Términos

| Perfil | Tasa | Down Payment | DSCR Mínimo |
|--------|------|-------------|------------|
| **Excelente (DSCR > 1.5)** | 6.5-7.5% | 20% | 1.0 |
| **Bueno (DSCR 1.25-1.5)** | 7.5-8.5% | 25% | 1.1 |
| **Aceptable (DSCR 1.0-1.25)** | 8.5-9.5% | 30-35% | 1.25 |
| **Sin historial en US** | 8-10% | 30-35% | 1.25 |

### Cómo Stripe Ayuda con DSCR

```
Stripe genera reportes de ingresos que demuestran el DSCR:

1. Configuras Stripe en tu LLC
2. Cobras rentas por Stripe durante 12 meses
3. Descargas el reporte de transacciones
4. Presentas el reporte al lender + tax returns

Esto es especialmente útil si:
- No tienes W-2 ni tax returns personales en EE. UU.
- Tus ingresos vienen de múltiples propiedades
- Quieres demostrar consistencia de ingresos
```

## 3. Conventional Loan (Préstamo Tradicional)

### ¿Puede un Extranjero Obtenerlo?

| Factor | Respuesta |
|--------|-----------|
| **¿Necesito SSN?** | Sí, o al menos ITIN con historial |
| **¿Necesito crédito US?** | Sí, mínimo 620-660 FICO |
| **¿Cuánto down payment?** | 20-30% mínimo |
| **¿Cuánto tiempo toma?** | 30-60 días |
| **¿Se evalúa mi ingreso?** | Sí, necesitas W-2 o tax returns |
| **¿Puedo usar renta proyectada?** | No, solo ingresos personales comprobables |

### Desventajas para Extranjeros

- **Difícil de calificar** sin historial crediticio en EE. UU.
- **Requiere ingresos en EE. UU.** (W-2, 1099 o tax returns)
- **No considera renta futura** de la propiedad
- **ITIN loans** existen pero con tasas más altas y menos opciones

### Alternativa: ITIN Mortgage

Algunos lenders ofrecen hipotecas con ITIN (sin SSN) para compradores que:

| Requisito | Detalle |
|-----------|---------|
| **ITIN** | Obligatorio |
| **Historial de pagos** | 12-24 meses de renta, utilities, etc. |
| **Down payment** | 20-30% |
| **Tasa** | 7-10% (más alta que conventional) |
| **Documentación** | Tax returns + bank statements |
| **Disponibilidad** | Limitada (solo ciertos estados y lenders) |

## 4. Hard Money Loan

### ¿Qué es un Hard Money Loan?

Préstamo a corto plazo, alta tasa, basado en el valor de la propiedad (no en tu crédito). Ideal para flips, reparaciones, o compras rápidas.

| Característica | Detalle |
|---------------|---------|
| **Tasa** | 10-15% anual |
| **Puntos (origination)** | 2-5% del préstamo |
| **Plazo** | 6-24 meses |
| **LTV** | 60-75% del ARV (after repair value) |
| **Aprobación** | 3-7 días |
| **Crédito** | Flexible (no requiere historial US) |
| **Documentación** | Mínima |

### Cuándo Usar Hard Money

```
Escenario ideal:
- Compras una propiedad en $200,000
- Necesitas $50,000 en reparaciones
- ARV (valor después de reparar): $350,000
- Hard money loan: 70% de ARV = $245,000
- Usas $200,000 para comprar + $45,000 para reparar
- Vendes en 12 meses por $350,000
- Pagas el préstamo + intereses ($220,000 aprox)
- Ganancia: $130,000 antes de costos

Escenario NO ideal:
- Propiedad para alquiler a largo plazo
- DSCR loan es mejor: tasa 8% vs 12%, plazo 30 años
- Hard money solo si es temporal (flip o bridge)
```

### Comparación Hard Money vs DSCR

| Aspecto | Hard Money | DSCR Loan |
|---------|-----------|-----------|
| **Tasa** | 10-15% | 7-9% |
| **Plazo** | 6-24 meses | 30 años |
| **Propósito** | Flip / Bridge / Reparación | Alquiler a largo plazo |
| **Aprobación** | 3-7 días | 2-4 semanas |
| **Down payment** | 20-30% | 20-35% |
| **Pago mensual** | Solo intereses (IO) | Amortizado |

```javascript
// Stripe: Stripe te ayuda a demostrar ingresos para refinanciar
// de hard money a DSCR loan después de las reparaciones

// Reporte de rentas después de renovar
const rentalIncome = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 7776000 }, // últimos 90 días
});

// Con 90 días de rentas consistentes, puedes refinanciar
const totalRentals = rentalIncome.data.reduce((sum, session) => {
  return session.payment_status === 'paid' ? sum + session.amount_total : sum;
}, 0);

console.log(`Total cobrado en 90 días: $${(totalRentals / 100).toFixed(2)}`);
```

## 5. Seller Financing

### ¿Cómo Funciona?

El vendedor actúa como banco: tú le pagas a él en cuotas, sin necesidad de un banco tradicional.

| Concepto | Detalle |
|---------|---------|
| **Down payment** | 10-30% (negociable) |
| **Tasa** | 5-10% (negociable, suele ser menor que banco) |
| **Plazo** | 5-20 años (o balloon a los 5 años) |
| **Aprobación** | Días, no semanas |
| **Requisitos** | Solo lo que pida el vendedor |
| **Propiedad** | Generalmente libre de hipoteca |

### Ventajas para Extranjeros

| Ventaja | Explicación |
|---------|------------|
| **Sin banco** | No necesitas crédito US, ITIN, ni SSN |
| **Flexible** | Términos negociables directamente con el vendedor |
| **Rápido** | Cierre en 1-2 semanas |
| **Sin puntos** | No hay origination fees |
| **Sin prepayment penalty** | Generalmente no aplica |

### Desventajas

- **Vendedor debe estar motivado** (no siempre disponible)
- **Plazo más corto** que un préstamo tradicional
- **Balloon payment** común (pago global al final)
- **Propiedad debe tener equity** o estar libre de hipoteca

## 6. Private Lending

### ¿Qué es el Private Lending?

Inversores privados (personas o fondos) que prestan dinero para proyectos inmobiliarios.

| Fuente | Tasa Típica | Plazo | LTV |
|--------|------------|-------|-----|
| **Family office** | 8-12% | 1-5 años | 60-75% |
| **Angel investor** | 10-15% | 1-3 años | 60-70% |
| **Peer-to-peer (crowdfunding)** | 8-11% | 1-5 años | 65-75% |
| **Sindicato de inversores** | 9-13% | 1-5 años | 60-70% |

### Cómo Encontrar Private Lenders

```
1. Grupos de real estate investing (BiggerPockets, Facebook)
2. Meetups locales de inversores
3. Referidos de agentes de bienes raíces
4. Abogados de bienes raíces (tienen contactos)
5. Crowdfunding inmobiliario (Fundrise, CrowdStreet)

Requisitos típicos:
- Experiencia en real estate (o socio con experiencia)
- Deal bien documentado (pro forma, ARV, presupuesto)
- Exit strategy clara (venta, refinancia, alquiler)
- Contribución personal (20-30% del deal)
```

## 7. Portfolio Loan

### ¿Qué es un Portfolio Loan?

Un préstamo que el banco **no vende a Fannie Mae/Freddie Mac** sino que lo mantiene en su propio balance. Esto permite más flexibilidad.

| Beneficio | Detalle |
|-----------|---------|
| **Sin límite de cantidad** | Puede exceder conforming loan limits |
| **Documentación flexible** | Aceptan bank statements en vez de W-2 |
| **Propiedades múltiples** | Un solo préstamo para varias propiedades |
| **Extranjeros** | Algunos bancos locales los ofrecen |

### Requisitos Típicos

| Requisito | Detalle |
|-----------|---------|
| **Down payment** | 25-40% |
| **Reservas** | 6-12 meses de pagos |
| **Relación con el banco** | Ayuda tener cuenta existente |
| **Propiedad** | Generalmente en el mismo estado del banco |
| **Tasa** | 7-10% (premium sobre conventional) |

## 8. Financiamiento por Tipo de Propiedad

| Tipo de Propiedad | Mejor Opción | Down Payment | Tasa Estimada |
|------------------|-------------|-------------|--------------|
| **SFR (casa unifamiliar)** | DSCR Loan | 20-30% | 7-9% |
| **Multifamiliar (2-4 units)** | DSCR / Conventional | 25-35% | 7-10% |
| **Condominio** | DSCR / Cash | 25-35% | 7-9.5% |
| **Comercial (5+ units)** | Commercial Loan | 30-40% | 6.5-9% |
| **Terreno (land)** | Cash / Private | 50-100% | 10-15% |
| **Short-term rental (Airbnb)** | DSCR (short-term) | 30-40% | 8-11% |

### Short-Term Rental (Airbnb/VRBO) Financing

```
Para propiedades de alquiler temporal, el DSCR se calcula diferente:

Renta proyectada anual: $60,000
Ocupación estimada: 70%
Renta ajustada: $60,000 x 70% = $42,000

Pago mensual (PITI): $3,500
Pago anual: $42,000

DSCR = $42,000 / $42,000 = 1.0

Requisitos adicionales:
- Down payment: 30-35% (más alto que LTR)
- Tasa: 8-11%
- Experiencia en short-term rentals (deseable)
- Pro forma con ocupación y tarifas
```

```javascript
// Stripe para short-term rental financing

// Stripe se integra con sistemas de PMS (Property Management)
// y genera reportes de ocupación e ingresos

// Configurar Stripe para pagos de Airbnb/VRBO
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// Stripe Connect se integra con plataformas como:
// - Hostaway
// - Guesty
// - Lodgify
// - Uplisting

// El reporte de ingresos de Stripe respalda tu solicitud DSCR
```

## 9. Paso a Paso para Financiar como Extranjero

### Ruta 1: DSCR Loan (Recomendada)

```
PASO 1: Elegir propiedad
- Buscar propiedades con DSCR potencial ≥ 1.25
- Calcular renta de mercado vs. pago mensual estimado

PASO 2: Formar LLC
- Crear LLC en el estado de la propiedad
- Obtener EIN del IRS

PASO 3: Abrir cuenta bancaria
- En un banco US que acepte extranjeros
- Depositar fondos para down payment + reservas

PASO 4: Configurar Stripe
- Conectar Stripe con la LLC
- Si ya tienes inquilinos, cobrar rentas por Stripe

PASO 5: Buscar lender DSCR
- Comparar al menos 3 lenders
- Solicitar pre-approval (soft credit pull)

PASO 6: Cerrar la compra
- Proveer documentación (bank statements, Stripe reports)
- Firmar y cerrar en 2-4 semanas
```

### Ruta 2: Hard Money → Refinanciar a DSCR

```
PASO 1: Comprar con hard money
- Ideal para propiedades que necesitan reparación
- Cierre rápido (3-7 días)

PASO 2: Reparar y alquilar
- Usa el préstamo para renovar
- Consigue inquilinos rápidamente
- Configura Stripe para cobrar rentas

PASO 3: Generar historial de rentas
- Cobra rentas 3-6 meses por Stripe
- Demuestra DSCR ≥ 1.0

PASO 4: Refinanciar a DSCR
- Busca un DSCR lender
- Usa el nuevo valor (ARV) para la tasación
- Saca efectivo o baja la tasa
```

### Ruta 3: Cash → Refinanciar (Delayed Financing)

```
PASO 1: Comprar en efectivo
- Ofrece mayor poder de negociación
- Cierre rápido, sin contingencias de financiamiento

PASO 2: Alquilar y generar historial
- Configurar Stripe para cobrar rentas
- Generar 6-12 meses de historial

PASO 3: Delayed Financing Exception
- FHA permite cash-out refinance dentro de 6 meses de compra en efectivo
- Puedes recuperar hasta el 75% del valor de compra
- Sin período de "seasoning" requerido
```

## 10. Comparación de Lenders para Extranjeros

| Lender | Especialidad | Down Payment | Tasa | Proceso |
|--------|-------------|-------------|------|---------|
| **Visio Lending** | DSCR (no requiere ITIN) | 25-35% | 7.5-9% | 100% online |
| **Lima One Capital** | DSCR + Hard Money | 20-30% | 7-10% | Rápido |
| **Asset Avenue** | DSCR + Portfolio | 25-30% | 7.5-9.5% | Online |
| **CoreVest** | DSCR (multifamiliar) | 25-30% | 7-9% | Tradicional |
| **RCN Capital** | Fix & Flip | 20-30% | 9-13% | Rápido |
| **LendingOne** | DSCR + Short-term | 25-35% | 7.5-10% | Online |
| **Kiavi** | DSCR + Fix & Flip | 20-30% | 7.5-9.5% | Online |

### Consejos para Elegir Lender

```
1. Busca lenders especializados en inversores extranjeros
2. Pregunta si aceptan ITIN (mejor que no requerirlo)
3. Compara APRs (incluye puntos y origination fees)
4. Verifica prepayment penalties (evita > 3 años)
5. Pregunta por DSCR en propiedades de short-term rental
6. Lee reviews en BiggerPockets o Google
7. Pide un pre-approval antes de hacer ofertas
```

## 11. Preguntas Frecuentes

### ¿Puedo financiar una propiedad en EE. UU. sin SSN?

Sí. La opción más común para extranjeros sin SSN es el **DSCR Loan**, que no requiere SSN/ITIN obligatoriamente. También existen **seller financing** y **hard money** sin verificación de crédito US.

### ¿Cuánto down payment necesita un extranjero?

Depende del tipo de préstamo: DSCR loan (20-35%), conventional con ITIN (20-30%), hard money (20-30%), seller financing (10-30%). En general, espera mínimo 25-30%.

### ¿Puedo usar ingresos de mi país para calificar?

Depende del lender. La mayoría de DSCR lenders solo consideran la renta de la propiedad. Para conventional loans, algunos aceptan ingresos internacionales con documentación adicional (traducción de tax returns, cartas de empleador).

### ¿Qué es mejor: DSCR o Conventional?

Para extranjeros, **DSCR es casi siempre mejor**: no requiere historial crediticio US, considera solo la renta de la propiedad, y el proceso es más simple. Conventional solo es mejor si tienes excelente crédito US y la tasa es más baja.

### ¿Stripe me ayuda a conseguir un préstamo?

Sí. Stripe genera reportes de ingresos por rentas que los lenders DSCR aceptan como prueba de flujo de caja. También puedes usar Stripe para demostrar 6-12 meses de historial de alquiler antes de refinanciar.

### ¿Puedo comprar 100% financiado?

Muy difícil para extranjeros. El máximo suele ser 70-80% LTV (20-30% down). Algunos lenders ofrecen 85% LTV con DSCR alto y buen historial, pero es la excepción.

## 12. Checklist para Financiar como Extranjero

- [ ] Definir presupuesto y estrategia (LTR, STR, flip)
- [ ] Elegir estado y propiedad con buen DSCR potencial
- [ ] Formar LLC en el estado de compra
- [ ] Obtener EIN del IRS
- [ ] Abrir cuenta bancaria en EE. UU.
- [ ] Configurar Stripe en la LLC
- [ ] Reunir fondos para down payment (25-35%)
- [ ] Preparar reservas (3-12 meses de pagos)
- [ ] Solicitar pre-approval en 2-3 lenders DSCR
- [ ] Comparar tasas, puntos y prepayment penalties
- [ ] Hacer oferta con pre-approval
- [ ] Cerrar compra (2-4 semanas)
- [ ] Configurar cobro de rentas en Stripe
- [ ] Pagar hipoteca automáticamente

## Conclusión

**Financiar propiedades en EE. UU. siendo extranjero** es completamente factible con la opción adecuada. El **DSCR Loan** es la mejor alternativa para inversores que generan rentas: no requiere SSN, se basa en el flujo de caja de la propiedad, y ofrece plazos de 30 años con tasas competitivas.

Para proyectos de corto plazo (flips, reparaciones), el **hard money** o **private lending** son opciones rápidas. El **seller financing** y **portfolio loans** ofrecen flexibilidad adicional. La combinación de LLC + Stripe + DSCR loan es la estrategia más sólida para escalar tu portafolio inmobiliario en EE. UU.

En **Sotomayor Consulting International**, te asesoramos en todo el proceso de financiamiento: desde la formación de LLC y obtención de EIN, hasta la conexión con lenders DSCR, configuración de Stripe para reportes de ingresos, y preparación de documentación para préstamos. Contáctanos para una consultoría personalizada.
