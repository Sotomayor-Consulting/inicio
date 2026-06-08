---
title: "Cómo Tributa el Alquiler en EE.UU.: Guía Completa 2026"
description: "Cómo tributa el alquiler en EE.UU."
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Calculadora y formularios de impuestos IRS con iconos de propiedad de alquiler, dólares y gráfico de depreciación"
---

**El alquiler en EE. UU. tributa** a nivel federal y estatal, con reglas específicas para inversores extranjeros no residentes. Entender cómo funcionan los impuestos sobre propiedades de alquiler es esencial para cumplir con el IRS, optimizar tu carga fiscal y evitar multas.

En esta guía, explicamos **cómo tributa el alquiler en EE. UU.** en 2026: ingresos, deducciones, depreciación, formularios para extranjeros, FIRPTA, y estrategias de optimización fiscal con Stripe.

## 1. ¿Quién Tributa por el Alquiler en EE. UU.?

### Residente vs. No Residente

| Tipo | Definición Fiscal | Tributación |
|------|------------------|-------------|
| **Residente fiscal (Green Card o 183+ días)** | Tributa como cualquier estadounidense | Ingreso mundial |
| **No residente (extranjero sin presencia)** | Solo tributa por ingresos de fuente estadounidense | Solo ingresos en EE. UU. |
| **No residente (con presencia pero < 183 días)** | Tributa solo por ingresos de EE. UU. | Solo ingresos en EE. UU. |

### ¿Eres Considerado No Residente?

```
Test de Presencia Sustancial (Substantial Presence Test):

Eres residente fiscal si:
- Estuviste en EE. UU. 31+ días este año, Y
- 183+ días en los últimos 3 años (sumando: año actual × 1 + año anterior × 1/3 + año anteanterior × 1/3)

Si no cumples: eres no residente → solo tributas por ingresos de EE. UU.

Para inversores extranjeros:
- Si visitas Florida 2-3 veces al año (< 120 días totales)
- No eres residente fiscal
- Tributas solo por tus propiedades de alquiler en EE. UU.
- Usas Form 1040-NR
```

## 2. ¿Qué se Considera Ingreso por Alquiler?

### Ingresos Gravables

| Concepto | ¿Tributa? | Nota |
|---------|-----------|------|
| **Renta mensual** | ✅ Sí | Ingreso principal |
| **Depósito de seguridad** | ❌ No | Hasta que no te lo quedes |
| **Multas por pago tardío** | ✅ Sí | Se considera ingreso |
| **Servicios públicos pagados por inquilino** | ✅ Sí | Si es sobre la renta base |
| **Alquiler vacacional (Airbnb)** | ✅ Sí | Se declara igual |
| **Alquiler de temporada** | ✅ Sí | Mismas reglas |
| **Subvenciones (Section 8)** | ✅ Sí | Ingreso tributable |

### ¿Qué NO es Ingreso?

```
NO se considera ingreso gravable:
- Depósito de seguridad (hasta que lo usas para daños)
- Reembolsos de gastos (si el inquilino te paga algo que tú pagaste)
- Préstamos personales
- Herencias o regalos (no relacionados con la propiedad)
```

```javascript
// Stripe: Reporte de ingresos por alquiler para tu declaración
// Stripe genera reportes por periodo fiscal

// Obtener ingresos totales del año fiscal
const balanceTransactions = await stripe.balanceTransactions.list({
  created: {
    gte: 1672531200, // 1 Jan 2026
    lte: 1704067199, // 31 Dec 2026
  },
});

// Calcular ingresos brutos por alquiler
const grossRent = balanceTransactions.data
  .filter(t => t.type === 'payment')
  .reduce((sum, t) => sum + t.amount, 0);

console.log(`Ingresos brutos por alquiler 2026: $${grossRent / 100}`);
```

## 3. Deducciones del Alquiler

### Deducciones Permitidas

| Deducción | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Interés hipotecario** | Interés del préstamo de la propiedad | $12,000/año |
| **Depreciación** | Desgaste del edificio (27.5 años) | $10,909/año |
| **Property tax** | Impuesto predial | $4,000/año |
| **Seguros** | Todas las primas | $2,500/año |
| **Reparaciones y mantenimiento** | Arreglos, pintura, fontanería | $2,000/año |
| **Property manager** | Honorarios de gestión (8-12%) | $3,600/año |
| **HOA / Condominio** | Cuotas de asociación | $2,400/año |
| **Servicios públicos** | Si los paga el propietario | $1,200/año |
| **Viajes** | Viajes para administrar la propiedad | $3,000/año |
| **Honorarios legales y contables** | Abogado, CPA | $1,500/año |
| **Marketing** | Publicidad, fotos, listing | $500/año |
| **Mejoras (no reparaciones)** | Se deprecian, no se deducen directo | Según vida útil |

### Reparaciones vs. Mejoras (Capital Improvements)

| Tipo | Definición | Tratamiento Fiscal |
|------|-----------|-------------------|
| **Reparación** | Mantener en condición operativa | Se deduce 100% este año |
| **Mejora** | Aumenta valor, extiende vida útil | Se deprecia (27.5 años o más) |

```
Ejemplos:

REPARACIONES (deducción inmediata):
- Arreglar una gotera ($300)
- Pintar una habitación ($500)
- Reparar el aire acondicionado ($800)
- Cambiar una ventana rota ($400)

MEJORAS (depreciación):
- Techo nuevo ($12,000 → 27.5 años)
- Cocina nueva ($15,000 → 27.5 años)
- Piscina ($25,000 → 27.5 años)
- Sistema solar ($20,000 → 5 años)
```

## 4. Depreciación (El Mayor Beneficio Fiscal)

### ¿Qué es la Depreciación?

La depreciación es la deducción más valiosa para propiedades de alquiler. Reconoce que el edificio se desgasta con el tiempo, permitiéndote deducir una parte cada año sin gastar efectivo.

| Tipo de Propiedad | Vida Útil | Depreciación Anual |
|------------------|-----------|-------------------|
| **Residencial (alquiler)** | 27.5 años | 3.636% del valor del edificio |
| **Comercial** | 39 años | 2.564% del valor del edificio |
| **Mejoras (land improvements)** | 15 años | 6.667% |
| **Equipamiento (mobiliario)** | 5-7 años | 14.29-20% |

### Cálculo de Depreciación

```
Ejemplo:
Propiedad comprada por: $400,000
Valor del terreno: $100,000 (no se deprecia)
Valor del edificio: $300,000 (sí se deprecia)

Depreciación anual:
$300,000 / 27.5 = $10,909/año

Beneficio fiscal:
- Sin depreciación: Ingreso neto de $15,000 → Impuesto de $3,300 (22%)
- Con depreciación: Ingreso neto de $4,091 → Impuesto de $900 (22%)
- Ahorro fiscal: $2,400/año SIN gastar un centavo
```

```javascript
// Stripe Tax: Stripe puede ayudarte a calcular impuestos
// pero la depreciación la calcula tu CPA

// Stripe Dashboard → Reportes → Resumen fiscal
// Stripe genera reportes de ingresos brutos que tu CPA usa

// Exportar datos para tu CPA
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200, // 1 Jan 2026
    interval_end: 1704067199,   // 31 Dec 2026
  },
});
```

### Depreciación Recuperada (Depreciation Recapture)

```
Al vender la propiedad:

Si depreciaste $50,000 durante 5 años:
- Cuando vendes, el IRS "recupera" la depreciación
- La depreciación recuperada se grava al 25% (máximo)
- El resto de la ganancia se grava como capital gains (0-20%)

Ejemplo:
Precio de compra: $400,000
Depreciación tomada: $50,000
Precio de venta: $500,000

Ganancia total: $100,000
  - Depreciación recuperada: $50,000 → 25% = $12,500
  - Ganancia de capital: $50,000 → 20% = $10,000
  - Impuesto total: $22,500

Sin depreciación:
  - Ganancia de capital: $100,000 → 20% = $20,000

¿Vale la pena? Sí, porque diferiste impuestos durante años.
```

## 5. Reglas de Actividad Pasiva (PAL Rules)

### ¿Qué es una Actividad Pasiva?

El alquiler de propiedades se considera una "actividad pasiva" a menos que seas un profesional inmobiliario (real estate professional).

| Tipo | Definición | Deducción de Pérdidas |
|------|-----------|----------------------|
| **Actividad pasiva** | Alquiler (default) | Solo contra ingresos pasivos |
| **Real estate professional** | 750+ horas/año + 50% de tu tiempo | Puede deducir contra ingresos activos |

### Limitaciones para Extranjeros

```
Regla: Las pérdidas pasivas solo se compensan con ingresos pasivos.

Si tu propiedad genera pérdida fiscal (gracias a la depreciación):
- No puedes usar esa pérdida contra tu salario en tu país
- La pérdida se "arrastra" (suspended) hasta que:
  a) Tengas ingresos pasivos de otra fuente
  b) Vendas la propiedad (se libera toda la pérdida)

Excepción: Si calificas como Real Estate Professional
- Debes trabajar 750+ horas/año en bienes raíces
- Debes pasar el "material participation test"
- Difícil para extranjeros sin presencia en EE. UU.

Estrategia: No dependas de las pérdidas para reducir otros ingresos.
La depreciación sigue siendo valiosa como diferimiento de impuestos.
```

## 6. Formularios de Impuestos para Extranjeros

### Formularios Principales

| Formulario | Quién lo Usa | Propósito |
|-----------|-------------|-----------|
| **1040-NR** | Extranjero no residente | Declaración anual de impuestos |
| **Schedule E** | Todos con propiedades de alquiler | Reportar ingresos y gastos |
| **1042-S** | Pagador a extranjero | Reportar ingresos sujetos a retención |
| **W-8BEN** | Extranjero | Certificar estatus de no residente |
| **W-8ECI** | Extranjero | Ingresos conectados a negocio en EE. UU. |
| **8288-B** | Comprador de propiedad a extranjero | Exención de retención FIRPTA |
| **ITIN application (W-7)** | Extranjero sin SSN | Solicitar ITIN |

### Form 1040-NR para Inversores Extranjeros

```
Form 1040-NR (versión simplificada):

Sección A: Ingresos de fuente estadounidense
  ├── Renta de propiedades: Schedule E
  ├── Intereses bancarios: Si aplica
  └── Ganancia de capital: Form 8949 + Schedule D

Sección B: Deducciones
  ├── Deducciones relacionadas a la renta (Schedule E)
  └── Deducción estándar: NO disponible para NR

Sección C: Impuesto
  ├── Tasa marginal (10-37%) para rentas
  ├── FIRPTA: 15% retenido al vender
  └── Créditos fiscales: Si aplican

Fechas clave:
- 15 de abril: Fecha límite (si estuviste en EE. UU.)
- 15 de junio: Si no tuviste ingresos con retención
- Extensión: 15 de octubre (Form 4868)
```

### ITIN: Cómo Obtenerlo

```
ITIN (Individual Taxpayer Identification Number):
- Alternativa al SSN para extranjeros
- Necesario para declarar impuestos
- No autoriza a trabajar en EE. UU.

Proceso:
1. Complete Form W-7 (IRS)
2. Adjunte pasaporte original o certificado
3. Envíe con su primera declaración de impuestos (1040-NR)
4. Espere 7-11 semanas

Opciones de envío:
- Por correo al IRS
- En persona en IRS Taxpayer Assistance Center
- Through Certifying Acceptance Agent (recomendado para extranjeros)

Recomendación: Solicita ITIN ANTES de vender una propiedad en EE. UU.
```

## 7. Retenciones para Extranjeros No Residentes

### Retención en la Fuente

| Tipo de Ingreso | Tasa de Retención | Formulario |
|----------------|-------------------|-----------|
| **Renta de propiedades (bruta)** | 30% (sin W-8ECI) | 1042-S |
| **Renta neta (con W-8ECI)** | 0% (declaras con 1040-NR) | W-8ECI |
| **Intereses bancarios** | 0% (portfolio interest exemption) | W-8BEN |
| **Dividendos** | 30% (o menos con treaty) | W-8BEN |
| **Ganancia de capital (venta)** | 15% (FIRPTA) | 8288-B |

### W-8ECI vs. W-8BEN: La Decisión Clave

```
Opción 1: W-8BEN (30% de retención sobre ingreso bruto)
├── Stripe retiene 30% de CADA renta
├── No declaras impuestos anualmente
├── El 30% es tu impuesto final (no hay devolución)
├── NO puedes deducir gastos
└── NO puedes depreciar

Opción 2: W-8ECI (declaras tú mismo con 1040-NR)
├── Stripe NO retiene (0% en origen)
├── DEBES declarar impuestos anualmente (1040-NR)
├── Pagas impuesto solo sobre la ganancia NETA
├── Puedes deducir gastos, depreciación, intereses
└── Generalmente pagas MENOS que con W-8BEN

RECOMENDACIÓN: Usa W-8ECI si tu propiedad de alquiler
tiene gastos significativos (hipoteca, depreciación).
```

```javascript
// Stripe: Configurar W-8ECI para evitar retención del 30%

// Stripe Dashboard → Configuración → Impuestos
// Agregar W-8ECI para que Stripe no retenga 30%

// Stripe verificará tu estatus fiscal
// Una vez aprobado, Stripe no retiene impuestos en origen

// Stripe Tax: Calcular impuestos con tu configuración fiscal
const taxSettings = await stripe.tax.settings.retrieve();
// Verificar que la retención esté configurada correctamente
```

## 8. FIRPTA: Impuesto al Vender

### ¿Qué es FIRPTA?

FIRPTA (Foreign Investment in Real Property Tax Act) exige que el comprador retenga el 15% del precio de venta si el vendedor es extranjero no residente.

| Concepto | Detalle |
|---------|---------|
| **Retención** | 15% del precio TOTAL de venta |
| **Quién retiene** | El comprador (escrow / title company) |
| **Plazo** | 20 días después del cierre al IRS |
| **Formulario** | 8288 + 8288-A |
| **Exención** | < $300,000 y comprador usará como residencia |

### Cómo Solicitar Reducción o Exención

```
Puedes solicitar un Withholding Certificate (Form 8288-B)
para reducir o eliminar la retención si:

1. La propiedad se vende por MENOS de $300,000
   Y el comprador la usará como residencia (no inversión)
   → Exención automática

2. La ganancia real es menor al 15% del precio
   → Solicita reducción (Form 8288-B)
   → Debes enviarlo antes del cierre
   → El IRS tarda 30-60 días en procesar

3. Vendes con pérdida
   → Puedes solicitar que la retención sea $0

Ejemplo:
Precio de venta: $500,000
Base de costo: $480,000
Ganancia real: $20,000

Sin certificado: Retención de $75,000 (15% de $500K)
Con certificado: Retención de $3,000 (15% de $20K)
```

### Paso a Paso para Vender Siendo Extranjero

```
1. ANTES de listar:
   - Contrata CPA especializado en FIRPTA
   - Solicita ITIN (si no tienes)
   - Revisa estructura (LLC vs personal)

2. AL FIRMAR CONTRATO:
   - Informa al comprador que eres extranjero
   - El comprador retendrá 15% del precio
   - Solicita 8288-B si aplica reducción

3. AL CERRAR:
   - Title company retiene 15% y envía al IRS
   - Recibes 8288-A como comprobante

4. DESPUÉS DEL CIERRE:
   - Declara la venta en 1040-NR
   - Calcula el impuesto real sobre la ganancia
   - Solicita reembolso del exceso retenido
   - El IRS devuelve en 6-12 meses
```

## 9. Impuestos Estatales (State Taxes)

### Estados Sin Impuesto a la Renta

| Estado | State Income Tax | Property Tax Aprox. |
|--------|----------------|-------------------|
| **Florida** | 0% | 0.8-1.2% |
| **Texas** | 0% | 1.6-2.2% |
| **Wyoming** | 0% | 0.5-0.7% |
| **Nevada** | 0% | 0.6-0.9% |
| **Tennessee** | 0% | 0.6-0.9% |

### Estados con Impuesto a la Renta

| Estado | Tasa Máxima | Nota |
|--------|------------|------|
| **California** | 13.3% | Alto, pero plusvalía fuerte |
| **Nueva York** | 10.9% | Más property tax |
| **Illinois** | 4.95% | Property tax alto (~2%) |
| **Massachusetts** | 5% | Property tax medio |

> Para inversores extranjeros: Florida y Texas son los estados más populares porque no tienen state income tax. Solo pagas property tax (~1% del valor anual).

## 10. Estrategias de Optimización Fiscal

### Estrategias Legales

| Estrategia | Descripción | Ahorro Potencial |
|-----------|------------|-----------------|
| **Depreciación** | Deduce 3.636% del valor del edificio cada año | $8,000-15,000/año |
| **Cost Segregation Study** | Acelera depreciación de componentes (5-15 años) | $20,000-50,000 el primer año |
| **1031 Exchange** | Diferir ganancia de capital al vender y reinvertir | Ilimitado |
| **Self-directed IRA** | Invertir en propiedades desde tu IRA | Diferimiento total |
| **LLC + S-Corp election** | Ahorrar self-employment tax | $2,000-5,000/año |
| **Bonus depreciation** | Depreciación acelerada (equipamiento) | Variable |
| **Travel deductions** | Viajes para administrar propiedades | $3,000-10,000/año |

### Cost Segregation Study

```
¿Qué es? Un estudio que identifica componentes de la propiedad
que se pueden depreciar más rápido (5, 7 o 15 años).

Ejemplo:
Propiedad: $400,000 (edificio $300K, terreno $100K)

Sin cost segregation:
- Depreciación anual: $10,909 ($300K / 27.5)
- 10 años: $109,090

Con cost segregation ($30,000 identificado a 5 años):
- Componentes 5 años ($30K): $6,000/año
- Edificio restante ($270K): $9,818/año
- Total anual: $15,818
- 10 años: $158,180

Ahorro adicional: $49,090 en 10 años
Costo del estudio: $3,000-8,000
```

```javascript
// Stripe: Reportes para tu CPA
// Stripe Dashboard → Reportes → Exportar transacciones

// Exportación para contabilidad (CSV)
const reportRun = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(new Date('2026-01-01').getTime() / 1000),
    interval_end: Math.floor(new Date('2026-12-31').getTime() / 1000),
    columns: [
      'created',
      'amount',
      'fee',
      'net',
      'description',
      'customer_id',
    ],
  },
});
```

## 11. Errores Comunes en Impuestos de Alquiler

| Error | Consecuencia | Solución |
|-------|-------------|---------|
| **No declarar ingresos** | Multas, intereses, el IRS embarga | Declara siempre |
| **No usar W-8ECI** | Stripe retiene 30% de TODOS los ingresos | Presenta W-8ECI |
| **No depreciar** | Pagas impuestos de más | Deprecia siempre |
| **Clasificar mejora como reparación** | IRS puede auditarte y re-clasificar | Consulta con CPA |
| **No tener ITIN** | No puedes declarar ni recuperar FIRPTA | Solicita ITIN |
| **Mezclar cuentas personales y LLC** | Pierdes protección de la LLC | Cuentas separadas |
| **No reportar venta (FIRPTA)** | El comprador reporta igual, IRS investiga | Declara la venta |
| **No pagar estimated taxes** | Multas por falta de pago | Paga estimados trimestrales |

## 12. Preguntas Frecuentes

### ¿Tengo que declarar impuestos en EE. UU. si mi propiedad genera pérdida?

Sí, debes declarar aunque tengas pérdida. El IRS requiere declaración anual si tienes ingresos de fuente estadounidense. La pérdida se arrastra a años futuros.

### ¿Qué tasa de impuesto pago sobre el alquiler?

La renta neta de propiedades de alquiler paga tasas marginales de 10-37% (igual que los estadounidenses). Las ganancias de capital a largo plazo pagan 0-20%.

### ¿Stripe reporta mis ingresos al IRS?

Sí. Stripe emite Form 1099-K si tus ingresos superan $5,000 (o el límite aplicable). Stripe reporta todas las transacciones al IRS.

### ¿Puedo deducir viajes desde mi país a Florida?

Sí, si el propósito principal del viaje es administrar tu propiedad. Puedes deducir vuelos, hotel, comidas (50%) y transporte local.

### ¿Qué pasa si no declaro?

El IRS puede embargar tu propiedad, imponer multas del 25-75% del impuesto no pagado, y Stripe puede congelar tu cuenta.

### ¿Necesito un CPA en EE. UU.?

Sí, especialmente si eres extranjero. Un CPA especializado en impuestos internacionales puede ahorrarte miles de dólares y evitar problemas con el IRS.

## 13. Checklist de Cumplimiento Fiscal

- [ ] Solicitar ITIN (si no tienes SSN)
- [ ] Presentar W-8ECI (si aplica, para evitar retención del 30%)
- [ ] Configurar Stripe correctamente (sin retención)
- [ ] Mantener contabilidad separada (LLC)
- [ ] Documentar todos los gastos deducibles
- [ ] Calcular depreciación anualmente
- [ ] Presentar 1040-NR + Schedule E cada año
- [ ] Pagar estimated taxes (si aplica)
- [ ] Reportar venta con FIRPTA
- [ ] Contratar CPA especializado
- [ ] Conservar registros por 7 años
- [ ] Revisar tratados de doble imposición (si aplica)

## Conclusión

**El alquiler en EE. UU. tributa** de manera favorable para inversores extranjeros si entiendes las reglas. La depreciación es tu mayor aliado: te permite generar pérdidas fiscales sin gastar efectivo, reduciendo drásticamente tu impuesto.

La clave está en presentar los formularios correctos (W-8ECI para evitar retención del 30%, 1040-NR para declarar, Schedule E para detallar ingresos y gastos) y trabajar con un CPA especializado en impuestos internacionales.

Stripe, configurado con tu EIN de LLC y W-8ECI, te permite cobrar rentas sin retenciones y genera los reportes que tu CPA necesita para tu declaración anual.

En **Sotomayor Consulting International**, te ayudamos con la declaración de impuestos de tus propiedades de alquiler en EE. UU.: desde la obtención de ITIN y presentación de W-8ECI hasta la preparación de 1040-NR con Schedule E, depreciación y cumplimiento FIRPTA. Contáctanos para una consultoría personalizada.
