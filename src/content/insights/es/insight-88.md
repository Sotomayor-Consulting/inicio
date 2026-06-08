---
title: "Qué Revisar Antes de Invertir en EE. UU. siendo Extranjero: Guía 2026"
description: "Qué revisar antes de invertir en EE. UU. siendo extranjero"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Lista de verificación pre-inversión para extranjeros en EE. UU.: estructura legal, impuestos, financiamiento, ubicación, seguros, Stripe"
---

**Invertir en EE. UU. siendo extranjero** requiere revisar una serie de factores críticos antes de comprometer capital: desde la estructura legal y fiscal hasta el financiamiento, la ubicación, los seguros, las restricciones locales y la estrategia de salida. Un error en cualquiera de estos puntos puede costar miles de dólares.

En esta guía, presentamos **qué revisar antes de invertir en EE. UU. siendo extranjero** en 2026: una checklist completa con 10 áreas críticas que todo inversor debe evaluar antes de comprar.

## 1. Revisar tu Perfil como Inversor

### Autoevaluación Inicial

| Pregunta | Por Qué es Importante |
|----------|----------------------|
| **¿Tienes SSN o ITIN?** | Determina opciones de financiamiento y formularios fiscales |
| **¿Tienes historial crediticio en EE. UU.?** | Afecta tasa y tipo de préstamo |
| **¿Cuál es tu presupuesto total?** | Define rango de propiedades y down payment |
| **¿Plazo de inversión?** | Corto (flip) vs. largo (alquiler) cambia todo |
| **¿Desde qué país inviertes?** | Afecta tratados fiscales, estructura y banking |
| **¿Tienes experiencia en real estate?** | Determina si necesitas socio o property manager |
| **¿Objetivo: renta, apreciación o ambas?** | Define ubicación, tipo de propiedad y financiamiento |

### Calcula tu Capacidad Real

```
EFECTIVO DISPONIBLE:
- Ahorros para down payment: $__________
- Closing costs (3-5% del precio): $__________
- Reservas (3-12 meses): $__________
- Reparaciones/renovaciones: $__________
- Total necesario: $__________

INGRESOS MENSUALES PROYECTADOS:
- Renta estimada: $__________
- Vacancia (5-10%): -$__________
- Renta neta: $__________

GASTOS MENSUALES PROYECTADOS:
- Hipoteca (P&I): $__________
- Property tax: $__________
- Seguro: $__________
- HOA: $__________
- Property management (8-12%): $__________
- Mantenimiento (10% renta): $__________
- Total gastos: $__________

DSCR = Renta neta / Gastos totales (con hipoteca)
DSCR = $__________ / $__________ = __________
✓ Necesitas DSCR ≥ 1.0, ideal ≥ 1.25
```

```javascript
// Stripe: Usa Stripe para proyectar ingresos
// si ya tienes propiedades similares operando

// Analiza transacciones históricas
const transactions = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 31536000 },
});

const totalIncome = transactions.data
  .filter(t => t.payment_status === 'paid')
  .reduce((sum, t) => sum + t.amount_total, 0);

const avgMonthly = (totalIncome / 100) / 12;
console.log(`Ingreso mensual promedio: $${avgMonthly.toFixed(2)}`);
```

## 2. Revisar la Estructura Legal

### Opciones de Estructura

| Estructura | Protección | Privacidad | Estate Tax | Costo Anual | Complejidad |
|-----------|-----------|-----------|-----------|-------------|-------------|
| **Nombre personal** | ❌ Ninguna | ❌ Pública | ✅ Expuesto | $0 | Mínima |
| **LLC sola** | ✅ Limitada | ✅ Propietario es LLC | ⚠️ Expuesto (> $60K) | $500-1,000 | Baja |
| **LLC + Holding internacional** | ✅ Alta | ✅ Alta | ❌ Protegido | $2,000-4,000 | Media |
| **LLC + Holding + Trust** | ✅ Máxima | ✅ Máxima | ❌ Protegido | $4,000-8,000 | Alta |

### Checklist Legal Pre-Compra

```
Antes de hacer una oferta, revisa:

ESTRUCTURA:
- [ ] ¿Necesito LLC en este estado?
- [ ] ¿Formo la LLC antes o después de comprar?
- [ ] ¿Necesito holding internacional para estate tax?
- [ ] ¿Qué dice el tratado fiscal con mi país?

DOCUMENTACIÓN:
- [ ] ¿Tengo EIN del IRS?
- [ ] ¿Tengo ITIN o SSN?
- [ ] ¿Tengo cuenta bancaria en EE. UU.?
- [ ] ¿Tengo un agente registered agent para la LLC?
```

## 3. Revisar el Estado y la Ubicación

### Comparación por Estado

| Factor | Florida | Texas | Nueva York | California |
|--------|---------|-------|-----------|------------|
| **State income tax** | 0% | 0% | 4-10.9% | 1-13.3% |
| **Property tax** | 0.8-1.2% | 1.6-2.2% | 1.4% | 0.77% |
| **Transfer tax (compra)** | 0.7% | 0.5-1.5% | 1.825% | 0.11% |
| **Short-term rental** | ✅ Permitido* | ✅ Permitido* | ⚠️ Restringido | ⚠️ Restringido |
| **Protección LLC** | ✅ Buena | ✅ Buena | ✅ Buena | ⚠️ Media |
| **Seguro huracán** | Alto | Medio | Bajo | Bajo |
| **Costo de vida** | Medio | Bajo | Alto | Muy alto |

### Micro-Ubicación: Qué Revisar en el Vecindario

```
Al evaluar una propiedad específica, revisa:

1. ZONIFICACIÓN (ZONING)
   - ¿Uso residencial, comercial o mixto?
   - ¿Permite short-term rental?
   - ¿Hay restricciones de HOA?

2. DEMANDA DE ALQUILER
   - Tasa de vacancia en el área
   - Renta promedio por tipo de propiedad
   - Ocupación en short-term rental (AirDNA, Mashvisor)
   - Cercanía a empleadores, escuelas, transporte

3. RIESGOS NATURALES
   - ¿Flood zone? (FEMA flood map)
   - ¿Zona de huracán?
   - ¿Historial de desastres naturales?

4. INFRAESTRUCTURA
   - Edad de la propiedad (techo, HVAC, plomería, eléctrico)
   - Calidad de escuelas (afecta valor de reventa)
   - Desarrollo futuro (nuevas construcciones, empleadores)
```

```javascript
// Stripe: Para validar demanda, puedes crear
// una landing page con Stripe para medir interés

// Pero más práctico: usa Stripe con datos de propiedades existentes
// Reporte de ingresos por código postal
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    columns: ['created', 'amount', 'description', 'customer'],
    interval_start: Math.floor(Date.now() / 1000) - 7776000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});
```

## 4. Revisar el Financiamiento

### Opciones de Préstamo por Perfil

| Tu Perfil | Mejor Opción | Down Payment | Tasa (2026) |
|-----------|-------------|-------------|-------------|
| **Sin SSN/ITIN, sin crédito US** | DSCR Loan | 25-35% | 7-9% |
| **Con ITIN, sin crédito US** | DSCR Loan / ITIN Mortgage | 20-30% | 7-10% |
| **Con SSN, buen crédito US** | Conventional / DSCR | 20-25% | 6-8% |
| **Efectivo disponible** | Cash (luego refinancia) | 100% | 0% |
| **Flip/corto plazo** | Hard Money | 20-30% | 10-15% |

### Preguntas Clave al Lender

```
Antes de aceptar un préstamo, pregunta:

1. TASA Y COSTOS
   - ¿Cuál es la tasa fija vs. ajustable?
   - ¿Cuántos puntos de origination?
   - ¿APR completo (incluye todos los fees)?

2. REQUISITOS
   - ¿Aceptan ITIN o solo SSN?
   - ¿Cuál es el DSCR mínimo requerido?
   - ¿Cuántas reservas exigen (meses)?

3. RESTRICCIONES
   - ¿Hay prepayment penalty? ¿Por cuánto tiempo?
   - ¿Permite cash-out refinance?
   - ¿Permite short-term rental?

4. PLAZOS
   - ¿Cuánto tarda el cierre?
   - ¿Cuánto tiempo toma el pre-approval?
```

### Calculadora de Pago Mensual

```
Para una propiedad de $400,000 con DSCR loan:

Precio: $400,000
Down payment (30%): $120,000
Monto del préstamo: $280,000
Tasa: 8%
Plazo: 30 años

Pago mensual (P&I): $2,055
Property tax (1%): $333/mes
Seguro: $333/mes
Total PITI: $2,721/mes

Renta necesaria para DSCR 1.25:
$2,721 x 1.25 = $3,401/mes en renta

Si la propiedad alquila por $3,500/mes:
DSCR = $3,500 / $2,721 = 1.29 ✓
```

## 5. Revisar los Impuestos

### Impuestos que Afectan tu Inversión

| Impuesto | Cuándo | Tasa | Quién |
|----------|--------|------|-------|
| **Property tax** | Anual | 0.8-2.2% (según estado) | Todos los propietarios |
| **Income tax (rentas)** | Anual (1040-NR) | 10-37% | Extranjeros con rentas |
| **FIRPTA** | Al vender | 15% retención | Extranjeros |
| **Capital gains** | Al vender | 0-20% | Todos |
| **Depreciation recapture** | Al vender | Hasta 25% | Todos |
| **Estate tax** | Al fallecer | 18-40% | Extranjeros > $60K |

### Preguntas Fiscales Clave

```
Antes de invertir, revisa con tu CPA:

1. ESTRUCTURA FISCAL
   - ¿Debo presentar W-8ECI para evitar retención del 30%?
   - ¿Qué deductions aplican (depreciación, repairs, interest)?
   - ¿Debo pagar estimated taxes trimestrales?

2. TRATADO FISCAL
   - ¿Mi país tiene tratado con EE. UU.?
   - ¿El tratado reduce FIRPTA o capital gains?
   - ¿Puedo acreditar impuestos pagados en EE. UU.?

3. ESTATE TAX
   - ¿Mis activos en EE. UU. superan $60,000?
   - ¿Necesito holding internacional o trust?
   - ¿Qué pasa con mis herederos?

4. PLANIFICACIÓN
   - ¿Debo hacer cost segregation?
   - ¿Es mejor 1031 exchange al vender?
   - ¿Cuándo debo empezar a declarar?
```

## 6. Revisar los Seguros

### Seguros Mínimos Requeridos

| Tipo de Seguro | Obligatorio | Costo Anual |
|---------------|------------|-------------|
| **Property insurance (vivienda)** | ✅ Sí (si hay hipoteca) | $1,500-8,000 |
| **Hurricane/windstorm** | ✅ Sí (en zonas de riesgo) | $1,000-5,000 adicional |
| **Flood insurance** | ⚠️ Si está en flood zone (FEMA) | $400-2,000 |
| **Liability insurance** | ✅ Muy recomendado | $500-2,000 |
| **Umbrella policy** | ⚠️ Recomendado (2+ propiedades) | $300-1,000 |

### Cobertura Recomendada por Tipo de Propiedad

```
CASA UNIFAMILIAR (LTR):
- Property insurance: Valor de reconstrucción
- Liability: $1-2M
- Hurricane deductible: 2% (no más de 5%)

CONDOMINIO:
- Walls-in coverage (interior)
- Master policy del HOA cubre exterior
- Liability: $500K-1M
- Loss assessment coverage

SHORT-TERM RENTAL (Airbnb):
- Property insurance: Cobertura especial para STR
- Liability: $2M+ (mayor riesgo)
- Loss of income: Cubre cancelaciones
- Hurricane: Obligatorio

PROPIEDAD COMERCIAL:
- Property insurance: Valor de reconstrucción
- Liability: $2-5M
- Business interruption
- Workers comp (si tienes empleados)
```

```javascript
// Stripe: Automatiza el pago de seguros
// para que nunca se te venza la póliza

const insuranceSubscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}',
  items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Property Insurance - Florida LLC',
        description: 'Póliza anual pagada mensualmente',
      },
      unit_amount: 35000, // $350/mes
      recurring: { interval: 'month' },
    },
  }],
});
```

## 7. Revisar las Restricciones Legales Locales

### Lo que Debes Investigar

| Restricción | Dónde Revisar | Por Qué es Importante |
|------------|--------------|----------------------|
| **Zoning (zonificación)** | County zoning department | Determina uso permitido |
| **HOA restrictions** | CC&Rs de la comunidad | Puede prohibir alquileres |
| **Short-term rental laws** | Ciudad/County ordinances | Algunas áreas prohíben Airbnb |
| **Rent control** | Leyes locales | Limita incrementos de renta |
| **Business license** | City/county | Requerido para alquilar |
| **Homestead exemption** | Property appraiser | Solo para residencia, no inversión |

### Ejemplo: Restricciones de Short-Term Rental en Florida

```
CIUDADES CON RESTRICCIONES EN FLORIDA 2026:

Miami Beach:
- Prohibido en zonas residenciales (menos de 6 meses + 1 día)
- Multas de hasta $20,000 por infracción
- Registro obligatorio

Orlando:
- Permitido con registro
- Límite de 2 unidades por propietario en áreas residenciales
- Impuesto de turista (Tourist Development Tax): 6%

Tampa:
- Permitido con registro
- Sin límite de días
- Inspección de seguridad requerida

Fort Lauderdale:
- Permitido solo en zonas comerciales
- Prohibido en la mayoría de zonas residenciales

Key West:
- Límite de 28 días de alquiler por estancia
- Registro obligatorio
- Cupo limitado de licencias
```

## 8. Revisar el Property Management

### ¿Autogestionar o Contratar?

| Aspecto | Autogestión | Property Manager |
|---------|------------|-----------------|
| **Costo** | 0% (tu tiempo) | 8-12% de la renta |
| **Control** | Total | Limitado |
| **Tiempo** | 5-15 horas/semana | ~1 hora/semana |
| **Idioma** | Necesitas inglés | Ellos lo manejan |
| **Disponibilidad** | 24/7 (emergencias) | 24/7 (profesional) |
| **Inquilinos** | Tú los buscas | Ellos los encuentran |
| **Mantenimiento** | Tú coordinas | Ellos coordinan |
| **Legal** | Tú manejas desalojos | Ellos tienen abogados |

### Preguntas para un Property Manager

```
Antes de contratar un property manager, pregúntale:

EXPERIENCIA:
- ¿Cuántos años llevan en el negocio?
- ¿Cuántas propiedades administran?
- ¿Trabajan con propietarios extranjeros?
- ¿Tienen licencia de real estate en Florida?

SERVICIOS:
- ¿Incluye marketing y listing?
- ¿Cómo seleccionan inquilinos? (background check, credit check)
- ¿Cómo manejan reparaciones de emergencia?
- ¿Con qué frecuencia inspeccionan la propiedad?

COSTOS:
- ¿Cuál es el porcentaje de administración?
- ¿Cobran leasing fee (1 mes de renta)?
- ¿Cobran por reparaciones? (markup)
- ¿Hay cargo por desalojo?

REPORTES:
- ¿Dan reportes mensuales de ingresos/gastos?
- ¿Integran con Stripe para cobros?
- ¿Proveen documentación para taxes?
```

## 9. Revisar la Estrategia de Salida

### Opciones de Salida

| Estrategia | Plazo | Impuestos | Complejidad |
|-----------|-------|-----------|-------------|
| **Vender en el mercado** | 3-12 meses | FIRPTA + capital gains | Baja |
| **1031 Exchange** | 45-180 días | Diferir impuestos | Media |
| **Vender la LLC (membership interest)** | 30-60 días | Potencialmente sin FIRPTA | Alta |
| **Refinanciar (cash-out)** | 30-60 días | Sin impuesto (no es venta) | Baja |
| **Alquilar y hold (buy & hold)** | 5+ años | Depreciación + apreciación | Baja |
| **Donar a herederos** | Al fallecer | Estate tax | Alta |

### Preguntas de Salida

```
Antes de comprar, pregúntate:

1. ¿Cuándo planeas vender?
   - Menos de 2 años: mejor flip o hard money
   - 2-5 años: DSCR con plan de refinanciar
   - 5+ años: buy & hold con depreciación

2. ¿Cómo afecta FIRPTA tu salida?
   - 15% retenido sobre precio de venta total
   - Puedes solicitar reducción (8288-B)
   - 1031 Exchange difiere el impuesto

3. ¿Venderás la propiedad o la LLC?
   - Vender propiedad: FIRPTA 15%
   - Vender LLC: podría no aplicar FIRPTA
   - Vender holding: fuera de jurisdicción US

4. ¿Cómo afecta la venta a tu estructura?
   - Si vendes una LLC, la estructura sigue intacta
   - Si vendes todas, puedes disolver la estructura
   - Si cambias de estado, necesitas nueva LLC
```

## 10. Revisar la Documentación y el Cronograma

### Documentos que Necesitas Tener

```
DOCUMENTACIÓN PERSONAL:
- [ ] Pasaporte vigente
- [ ] ITIN o SSN (carta del IRS)
- [ ] Comprobante de domicilio en tu país
- [ ] Referencias bancarias
- [ ] Comprobante de ingresos (si aplica)

DOCUMENTACIÓN DE LA ESTRUCTURA:
- [ ] Certificado de formación de LLC
- [ ] EIN del IRS (carta CP 575)
- [ ] Operating Agreement de la LLC
- [ ] Registered Agent agreement
- [ ] Cuenta bancaria de la LLC
- [ ] Stripe account configurada

DOCUMENTACIÓN PARA LA COMPRA:
- [ ] Pre-approval letter del lender
- [ ] Bank statements (fondos disponibles)
- [ ] Prueba de origen de fondos
- [ ] Contrato de compra revisado por abogado

DOCUMENTACIÓN FISCAL:
- [ ] W-7 (solicitud de ITIN)
- [ ] W-8ECI (para el banco/lender)
- [ ] W-9 de la LLC
- [ ] Tratado fiscal (si aplica)
```

### Cronograma Típico para un Extranjero

```
MES 1: PREPARACIÓN
- Semana 1-2: Definir presupuesto y estrategia
- Semana 2-3: Formar LLC y obtener EIN
- Semana 3-4: Solicitar ITIN (si no lo tienes)
- Semana 4: Abrir cuenta bancaria

MES 2: BÚSQUEDA Y PRE-APPROVAL
- Semana 1-2: Conseguir pre-approval de lender
- Semana 2-3: Buscar propiedades con agente local
- Semana 3-4: Visitar propiedades (virtual o presencial)

MES 3: OFERTA Y DEBIDA DILIGENCIA
- Semana 1: Hacer oferta
- Semana 2: Due diligence (inspección, título, HOA docs)
- Semana 3: Finalizar financiamiento
- Semana 4: Cerrar compra

MES 4: POST-CIERRE
- Semana 1: Configurar Stripe
- Semana 2: Contratar property manager (si aplica)
- Semana 3: Listar propiedad para alquiler
- Semana 4: Primeros inquilinos
```

## 11. Preguntas Frecuentes Pre-Inversión

### ¿Cuánto dinero necesito para empezar?

Mínimo $100,000-150,000 para una propiedad de $400,000 (25-30% down + closing costs + reservas). Si tienes menos, considera mercados más baratos (Midwest, Texas inland).

### ¿Puedo invertir sin visitar EE. UU.?

Sí, es común. Puedes hacer due diligence virtual (video tour, inspector local, agente de confianza). Pero es recomendable visitar al menos una vez.

### ¿Cuánto tiempo toma todo el proceso?

2-4 meses desde que decides invertir hasta que cierras la compra. Formar LLC e ITIN toma 4-8 semanas. La búsqueda y cierre toman otras 4-8 semanas.

### ¿Qué pasa si no hablo inglés?

Necesitas un equipo que hable tu idioma: agente bilingüe, CPA que hable español/portugués, property manager bilingüe. Muchos profesionales en Florida atienden a inversores latinos.

### ¿Stripe es obligatorio para cobrar rentas?

No es obligatorio, pero es la mejor opción: acepta pagos de inquilinos automáticamente, genera reportes para taxes, se integra con property management, y evita que mezcles rentas con finanzas personales.

### ¿Cuál es el error más común de los principiantes?

Comprar sin estructura legal (sin LLC), sin entender FIRPTA, sin considerar estate tax, y sin tener reservas suficientes para imprevistos (reparaciones, vacancia, huracanes).

## 12. Checklist Definitiva Pre-Inversión

### FASE 1: PLANIFICACIÓN (1 mes antes)
- [ ] Definir presupuesto total (compra + costos + reservas)
- [ ] Elegir estrategia (LTR, STR, flip, buy & hold)
- [ ] Seleccionar estado y ciudad objetivo
- [ ] Investigar impuestos del estado (property tax, income tax)
- [ ] Consultar con CPA internacional
- [ ] Consultar con abogado de bienes raíces

### FASE 2: ESTRUCTURA LEGAL (2 meses antes)
- [ ] Formar LLC en el estado de inversión
- [ ] Obtener EIN del IRS (CP 575)
- [ ] Solicitar ITIN (W-7) si no lo tienes
- [ ] Abrir cuenta bancaria US a nombre de la LLC
- [ ] Configurar Stripe en la LLC
- [ ] Evaluar necesidad de holding internacional
- [ ] Evaluar necesidad de trust

### FASE 3: FINANCIAMIENTO (6 semanas antes)
- [ ] Solicitar pre-approval de 2-3 lenders
- [ ] Comparar tasas, puntos y prepayment penalties
- [ ] Tener fondos listos en cuenta US
- [ ] Preparar documentación de origen de fondos

### FASE 4: BÚSQUEDA Y DEBIDA DILIGENCIA (3-4 semanas)
- [ ] Contratar agente de bienes raíces local
- [ ] Verificar zoning y restricciones de HOA
- [ ] Solicitar inspección de propiedad
- [ ] Revisar flood zone (FEMA map)
- [ ] Cotizar seguros (property, hurricane, flood, liability)
- [ ] Verificar demanda de alquiler en la zona
- [ ] Calcular DSCR proyectado

### FASE 5: CIERRE (1-2 semanas)
- [ ] Revisar contrato de compra con abogado
- [ ] Confirmar funding del lender
- [ ] Transferir fondos a título/escrow
- [ ] Firmar documentos de cierre
- [ ] Registrar LLC como propietaria
- [ ] Activar Stripe para cobrar rentas

### FASE 6: POST-CIERRE (primer mes)
- [ ] Contratar property manager (o configurar autogestión)
- [ ] Listar propiedad para alquiler
- [ ] Configurar pago automático de hipoteca
- [ ] Configurar pago automático de seguros
- [ ] Presentar W-8ECI para evitar retención del 30%
- [ ] Agendar recordatorio de taxes (1040-NR + Schedule E)

## Conclusión

**Revisar todos estos factores antes de invertir en EE. UU.** marca la diferencia entre una inversión exitosa y una costosa lección. Un inversor preparado revisa su estructura legal, el financiamiento disponible, los impuestos aplicables, los seguros necesarios, las restricciones locales, el property management, la estrategia de salida, y tiene toda la documentación en orden.

La inversión en real estate en EE. UU. ofrece oportunidades increíbles para extranjeros, pero el éxito está en los detalles que revisas antes de comprometer tu capital. Tómate el tiempo necesario para evaluar cada punto de esta guía.

En **Sotomayor Consulting International**, te acompañamos en cada paso de tu inversión: desde la planificación inicial y estructura legal hasta la configuración de Stripe, conexión con lenders, selección de propiedades y asesoría continua. Contáctanos para una consultoría personalizada.
