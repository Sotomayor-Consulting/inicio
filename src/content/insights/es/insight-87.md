---
title: "Cómo Estructurar Propiedades para Protección Patrimonial: Guía 2026"
description: "Cómo estructurar propiedades para protección patrimonial"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Estructura piramidal de protección patrimonial: propiedades individuales → LLCs → Holding → Trust, con escudos de protección en cada nivel"
---

**Estructurar propiedades para protección patrimonial** es el proceso de organizar tus activos inmobiliarios en una arquitectura legal que minimice riesgos, blinde tu patrimonio personal y optimice impuestos. La estructura correcta separa cada propiedad en su propia LLC, agrupa las LLCs bajo una holding, y usa trusts estratégicos para sucesión.

En esta guía, explicamos **cómo estructurar propiedades para protección patrimonial** en 2026: desde la LLC individual hasta estructuras multicapa con holdings internacionales y trusts irrevocables.

## 1. Principios de la Protección Patrimonial

### Los 3 Pilares

| Pilar | Descripción |
|-------|-------------|
| **Separación** | Cada propiedad en una entidad legal distinta |
| **Blindaje** | Las entidades no tienen relación entre sí (ni garantías cruzadas) |
| **Planificación sucesoria** | Los activos pasan a herederos sin impuesto ni probate |

### La Regla de Oro

```
NUNCA mezcles estos elementos:

❌ Dos propiedades en una misma LLC
   → Si te demandan por la Propiedad A, también pierdes la Propiedad B

❌ Una LLC con propiedades + efectivo + negocio
   → Todo está expuesto a cualquier demanda

❌ Tu nombre personal en alguna parte de la cadena
   → Perforas el velo corporativo y pierdes protección

✅ Cada propiedad inmobiliaria en su propia LLC
✅ La LLC no tiene otros activos significativos
✅ Tú no eres miembro directo de la LLC (usas holding o trust)
```

```javascript
// Stripe: Cada propiedad debe tener su propia cuenta Stripe
// o al menos sus propios productos/precios separados

// Ejemplo: Dos propiedades, dos configuraciones Stripe separadas

// Propiedad A: Orlando Condo LLC
const accountA = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: { name: 'Orlando Condo LLC', tax_id: 'XX-XXXXXXX' },
});

// Propiedad B: Tampa House LLC  
const accountB = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: { name: 'Tampa House LLC', tax_id: 'XX-XXXXXXX' },
});

// NUNCA uses una sola cuenta Stripe para ambas propiedades
```

## 2. Estructura Nivel 1: Una Propiedad

### La Estructura Básica Recomendada

```
Para UNA sola propiedad en EE. UU.:

             Tú (Extranjero)
                  |
            ┌─────┴─────┐
            │            │
      Holding        Trust
    Internacional   Revocable
    (Panamá/BVI)   (EE. UU.)
            │            │
            └─────┬─────┘
                  │
        Florida Property LLC
                  │
            ┌─────┴─────┐
            │            │
       Propiedad    Stripe (EIN)
                    (cuenta LLC)
```

### ¿Por Qué Esta Estructura?

| Componente | Función | Protección |
|-----------|---------|------------|
| **Florida Property LLC** | Opera la propiedad, cobra rentas | Limita responsabilidad a esta propiedad |
| **Holding Internacional** | Es dueña de la LLC | Elimina el estate tax (> $60K) |
| **Trust Revocable** | Dueño de la holding | Evita probate, define sucesión |
| **Stripe (EIN de LLC)** | Cobra rentas | No mezcla ingresos personales |

### Costo de esta Estructura

| Componente | Costo Inicial | Costo Anual |
|-----------|-------------|-------------|
| **LLC en Florida** | $150-400 | $138.75 |
| **Holding en Panamá** | $1,000-2,000 | $500-1,500 |
| **Trust en EE. UU.** | $2,000-5,000 | $0-500 |
| **CPA internacional** | $0 | $1,000-3,000 |
| **Registered Agent (LLC)** | $0 | $100-300 |
| **Total** | **$3,150-7,400** | **$1,739-5,439** |

## 3. Estructura Nivel 2: Múltiples Propiedades

### La Arquitectura Multicapa Recomendada

```
Para MÚLTIPLES propiedades en EE. UU.:

                        Tú (Extranjero)
                             |
                        Trust Familiar
                     (Irrevocable o Revocable)
                             |
                   ┌─────────┴─────────┐
                   │                   │
             Holding Principal    Holding Principal
             (Internacional)     (Protección)
                   │                   │
             ┌─────┴─────┐       ┌─────┴─────┐
             │           │       │           │
        LLC Holding  LLC Holding           ...
        (US)         (US)
             │           │
        ┌────┴────┐  ┌──┴────┐
        │         │  │       │
   Prop A LLC  Prop B LLC  Prop C LLC
   (Florida)   (Florida)   (Florida)
        │         │         │
   ┌────┴──┐  ┌──┴───┐  ┌──┴───┐
   │Stripe│  │Stripe│  │Stripe│
   │ Acct │  │ Acct │  │ Acct │
```

### Principios de esta Arquitectura

```
1. CADA PROPIEDAD en su propia LLC
   - Si te demandan por una, las demás están protegidas
   - Sin garantías cruzadas entre LLCs

2. LLCs INTERMEDIAS (LLC Holding US) agrupan propiedades
   - Por estado (ej: Florida Holdings LLC)
   - Por tipo (ej: Short-Term Rentals LLC)
   - Simplifica administración y taxes

3. HOLDING INTERNACIONAL dueña de las LLCs Holding US
   - Elimina estate tax
   - Añade capa de privacidad
   - Dificulta que embarguen tus activos

4. TRUST FAMILIAR en tu país o en EE. UU.
   - Dueño de la holding internacional
   - Define cómo se distribuyen los activos
   - Evita probate internacional

5. STRIPE SEPARADO por cada LLC operativa
   - Cada propiedad cobra sus rentas independientemente
   - Reportes de ingresos individuales
```

### Ejemplo con 3 Propiedades

```
Inversor extranjero con 3 propiedades en Florida:

Sin estructura (error común):
- Propiedades a nombre personal
- Todas expuestas a cualquier demanda
- Estate tax del 40% sobre TODO
- Riesgo: si un inquilino demanda, pierdes las 3

Con estructura multicapa:
- Prop A: Orlando Condo LLC
- Prop B: Tampa House LLC  
- Prop C: Miami Beach LLC
- Las 3 LLCs pertenecen a: Florida Holdings LLC
- Florida Holdings LLC pertenece a: Panama Holding Corp
- Panama Holding Corp pertenece a: Trust Familiar

Protección:
- Demanda en Prop A → solo afecta a Orlando Condo LLC
- Prop B y Prop C intactas
- Estate tax: $0 (holding internacional)
- Sucesión: el trust define herederos sin probate
```

## 4. LLC por Propiedad vs. LLC Colectiva

### Comparación Detallada

| Aspecto | LLC Individual por Propiedad | LLC Colectiva (varias propiedades) |
|---------|------------------------------|-----------------------------------|
| **Protección** | ✅ Máxima (aislamiento total) | ❌ Una demanda expone todas |
| **Costo anual** | $138.75 + RA c/u | $138.75 + RA (solo una) |
| **Complejidad** | Alta (múltiples filings) | Baja (un filing) |
| **Préstamos** | Individuales (más fácil) | Puede agrupar propiedades |
| **Venta** | Vendes la LLC (sin FIRPTA si estructuras bien) | Difícil vender una propiedad |
| **Seguros** | Póliza individual | Póliza colectiva (más cara) |
| **Stripe** | Cuenta separada | Una cuenta (mezcla ingresos) |

### Cuándo Usar Cada Opción

```
LLC INDIVIDUAL (recomendado para la mayoría):
- Tienes 2+ propiedades
- Quieres máxima protección
- Planeas vender propiedades individualmente
- Las propiedades tienen diferente perfil de riesgo

LLC COLECTIVA (solo para casos específicos):
- Tienes 1 propiedad
- Son propiedades de muy bajo riesgo (ej: terreno)
- Las propiedades son parte de un mismo proyecto (ej: edificio multifamiliar completo)
- El ahorro de costos justifica el riesgo adicional
```

```javascript
// Stripe: Configuración para LLC individual

// Cada LLC operativa tiene su propia cuenta Stripe
// Pero puedes usar Stripe Connect para ver todo desde un dashboard

// Cuentas individuales conectadas
const accounts = await stripe.accounts.list({ limit: 10 });

// Dashboard unificado via Stripe Connect
// Solo visible para la holding o el administrador

// Reporte consolidado (opcional)
const consolidatedReport = await stripe.reporting.reportRuns.create({
  report_type: 'connected_accounts',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});
```

## 5. Holding Internacional: El Blindaje Definitivo

### ¿Por Qué una Holding Internacional?

| Beneficio | Explicación |
|-----------|-------------|
| **Estate tax** | Las acciones de la holding NO son activos en EE. UU. |
| **Privacidad** | El dueño real no aparece en registros públicos de EE. UU. |
| **Protección contra embargos** | Embargar acciones de una holding extranjera es muy difícil |
| **Flexibilidad fiscal** | Puedes acumular ganancias en la holding sin distribuir |
| **Sucesión** | Las acciones se heredan según la ley del país de la holding |

### Jurisdicciones Recomendadas

| Jurisdicción | Costo Anual | Privacidad | Estate Tax | Reputación |
|-------------|-------------|-----------|-----------|-----------|
| **Panamá** | $500-1,500 | ✅ Alta | ❌ No aplica | ✅ Buena |
| **Países Bajos** | $2,000-5,000 | ⚠️ Media | ❌ No aplica | ✅ Excelente |
| **BVI** | $1,000-2,500 | ✅ Alta | ❌ No aplica | ✅ Buena |
| **Islas Caimán** | $2,000-4,000 | ✅ Alta | ❌ No aplica | ✅ Excelente |
| **Uruguay** | $1,500-3,000 | ⚠️ Media | ❌ No aplica | ✅ Buena |
| **Delaware (US)** | $300-500 | ⚠️ Baja | ✅ Expuesto | ✅ Excelente |

> IMPORTANTE: Una holding en Delaware NO protege del estate tax porque es una entidad estadounidense. Para protección contra estate tax, la holding debe estar fuera de EE. UU.

### Cómo Flu ye el Dinero

```
Inquilino paga renta → Stripe (LLC operativa)
  → LLC paga gastos (hipoteca, tax, seguro, management)
  → LLC transfiere ganancia a Holding Holding US
  → Holding US transfiere a Holding Internacional
  → Holding Internacional distribuye (o retiene)
  → Tú recibes dividendos en tu país

VENTAJA FISCAL:
- La LLC paga income tax en EE. UU. (sobre rentas)
- La holding internacional NO paga tax en EE. UU.
- Solo pagas impuestos cuando distribuyes a ti mismo
- Puedes diferir impuestos manteniendo ganancias en la holding
```

## 6. Trusts en la Estructura

### Trust Revocable vs. Irrevocable

| Aspecto | Trust Revocable | Trust Irrevocable |
|---------|----------------|------------------|
| **Control** | Tú controlas (puedes cambiar) | Pierdes control (no puedes cambiar) |
| **Protección** | ❌ Baja (los activos son tuyos) | ✅ Alta (los activos no son tuyos) |
| **Estate tax** | ❌ Expuesto | ✅ Protegido |
| **Probate** | ✅ Lo evita | ✅ Lo evita |
| **Costo** | $2,000-5,000 | $3,000-10,000 |
| **Uso** | Sucesión simple | Protección + sucesión |

### Estructura con Trust

```
OPCIÓN A: Trust Revocable (para sucesión)
- Tú creas un trust en tu país o en EE. UU.
- El trust es dueño de la holding internacional
- Al fallecer, el trust transfiere según tus instrucciones
- Sin probate, sin estate tax

OPCIÓN B: Trust Irrevocable (protección total)
- Creas un trust irrevocable (en Islas Cook, Nevis, etc.)
- El trust es dueño de la holding internacional
- Tú eres beneficiario, no propietario
- Los acreedores no pueden alcanzar los activos
- Tampoco el IRS (si está bien estructurado)

OPCIÓN C: Trust Doméstico + Holding
- Trust en tu país dueño de la holding
- La holding dueña de las LLCs US
- Declaras los ingresos en tu país
- El trust simplifica la sucesión local
```

### Ejemplo: Trust Irrevocable en Islas Cook

```
Costo:
- Formación: $5,000-10,000
- Mantenimiento anual: $1,500-3,000

Protección:
- Las leyes de Islas Cook NO reconocen sentencias extranjeras
- Un acreedor tendría que litigar en Islas Cook
- Período de statute of limitations: 1 año (vs 4+ en EE. UU.)
- Casi imposible de perforar

Para quién:
- Patrimonios > $1M en activos US
- Profesiones de alto riesgo (médicos, abogados)
- Dueños de negocios en EE. UU.
- Inversores con múltiples propiedades
```

## 7. Seguros como Capa Adicional

### La Combinación Estructura + Seguro

| Capa | Protege Contra | Costo |
|------|---------------|-------|
| **LLC** | Demandas menores (hasta el valor de la propiedad) | $138.75/año |
| **Liability insurance (póliza LLC)** | $1-2M por incidente | $500-2,000/año |
| **Umbrella policy** | $1-5M adicionales | $300-1,000/año |
| **Trust irrevocable** | Embargo de acreedores | $1,500-5,000/año |
| **Holding internacional** | Estate tax + embargo internacional | $500-2,000/año |

### Recomendación por Perfil

```
Perfil Bajo Riesgo (1 propiedad, < $300K):
- LLC + Liability insurance ($1M)
- Trust revocable (opcional)
- Costo: ~$1,000/año

Perfil Medio (2-3 propiedades, $300K-$1M):
- LLC por propiedad + Liability insurance
- Umbrella policy ($2M)
- Holding internacional
- Trust revocable
- Costo: ~$3,000-5,000/año

Perfil Alto (4+ propiedades, > $1M):
- LLC por propiedad + Liability insurance
- Umbrella policy ($5M)
- Holding internacional
- Trust irrevocable (offshore)
- Costo: ~$7,000-15,000/año
```

## 8. Errores Comunes al Estructurar

### Lo que NO Debes Hacer

| Error | Por Qué es Peligroso |
|-------|---------------------|
| **Ser miembro directo de la LLC** | Te conviertes en el objetivo de demandas |
| **Garantías cruzadas entre LLCs** | Un banco puede ejecutar contra todas si una falla |
| **Una LLC para todas las propiedades** | Una demanda expone todo tu portafolio |
| **No separar Stripe por LLC** | Mezcla ingresos, pierdes protección |
| **Holding en Delaware (no internacional)** | No protege del estate tax |
| **No tener seguro + LLC** | La LLC sola no es suficiente |
| **No mantener la LLC al día** | Annual report vencido = entidad disuelta |
| **Firmar contratos a nombre personal** | Perforas el velo corporativo |

### Ejemplo de Estructura Incorrecta

```
❌ ESTRUCTURA INCORRECTA:

Tú (Nombre Personal)
  ├── Propiedad A ($400K) - a tu nombre
  ├── Propiedad B ($350K) - en "My LLC" (una sola LLC)
  └── Cuenta bancaria personal con $100K

Riesgos:
- Demandan por Propiedad A → pierdes A + B + cuenta
- Estate tax: 40% sobre $750K = $300K
- No hay privacidad (tu nombre en registros públicos)
- Probate en EE. UU. (costoso y lento)
```

```
✅ ESTRUCTURA CORRECTA:

Trust Familiar (tu país)
  └── Panama Holding Corp
        ├── Florida Holdings LLC
        │     ├── Orlando Condo LLC → Prop A
        │     └── Tampa House LLC → Prop B
        └── Cuenta bancaria de la holding

Beneficios:
- Demandan por Prop A → solo afecta a Orlando Condo LLC
- Estate tax: $0
- Privacidad total
- Sin probate en EE. UU.
```

## 9. Planificación Sucesoria Integrada

### Cómo Heredan tus Propiedades

```
Sin estructura:
- Tus propiedades están a tu nombre personal
- Al fallecer, pasan por probate en Florida
- Probate: 6-18 meses, $5,000-20,000 en costos
- Si tienes > $60K, IRS cobra 40% de estate tax
- Tus herederos reciben menos de la mitad

Con estructura (Trust + Holding + LLCs):
- Trust es dueño de la holding internacional
- Al fallecer, el trust transfiere según tus instrucciones
- Sin probate (el trust no muere)
- Sin estate tax (holding no es activo US)
- Tus herederos reciben el 100%

Documentos necesarios:
1. Trust instrument (dónde y cómo se distribuye)
2. Last will (voluntad, captura cualquier activo fuera del trust)
3. Power of attorney (quién administra si incapacitas)
4. Healthcare directive (decisiones médicas)
5. Carta de instrucciones (lista de activos, passwords, contactos)
```

### Tabla de Sucesión por Estructura

| Estructura | Probate | Estate Tax US | Costo Sucesión | Tiempo |
|-----------|---------|--------------|---------------|--------|
| **Nombre personal** | ✅ Sí | ✅ 40% (> $60K) | $5,000-20,000 | 6-18 meses |
| **LLC sola** | ✅ Sí | ✅ 40% | $5,000-20,000 | 6-18 meses |
| **LLC + Holding internacional** | ❌ No | ❌ $0 | $1,000-3,000 | 1-3 meses |
| **LLC + Holding + Trust** | ❌ No | ❌ $0 | $500-2,000 | 2-6 semanas |

## 10. Costos Vs. Beneficios

### Análisis de Retorno de Inversión

```
Escenario: Inversor con 3 propiedades valoradas en $1,500,000

COSTO ANUAL DE LA ESTRUCTURA:
- 3 LLCs ($138.75 c/u): $416
- Registered Agent ($150 c/u): $450
- Holding Internacional: $1,000
- Trust mantenimiento: $200
- CPA (taxes + estructura): $2,500
- Total: ~$4,566/año

BENEFICIOS:
- Estate tax evitado: $1,500,000 x 40% = $600,000
- Protección contra demanda: potencialmente millones
- Privacidad: no tiene precio
- Sucesión sin probate: ahorra $10,000+
- Ahorro fiscal (W-8ECI + depreciación): $5,000-15,000/año

ROI:
- Inversión anual: $4,566
- Beneficio potencial: $600,000+ (solo estate tax)
- ROI: 13,000%+ en el momento del fallecimiento
- ROI anual (solo ahorro fiscal): 100-300%
```

| Nivel de Estructura | Costo Anual | Protección | Para Quién |
|--------------------|------------|-----------|------------|
| **Básico** (LLC sola) | $500-1,000 | ⚠️ Parcial | 1 propiedad, < $200K |
| **Intermedio** (LLC + Holding) | $2,000-4,000 | ✅ Alta | 2-3 propiedades, $200K-$1M |
| **Avanzado** (LLC + Holding + Trust) | $4,000-8,000 | ✅ Máxima | 4+ propiedades, > $1M |

## 11. Preguntas Frecuentes

### ¿Necesito una LLC por cada propiedad?

Sí, es la recomendación estándar para máxima protección. Cada LLC aísla el riesgo a esa propiedad. Si tienes propiedades de bajo valor, puedes considerar agruparlas, pero el riesgo es que una demanda afecte a todas.

### ¿Una LLC me protege de todo?

No. La LLC protege tus bienes personales de demandas relacionadas con la propiedad. Pero no protege contra: lesiones personales del dueño, deudas personales, divorcio, o impuestos federales. Por eso se combina con seguro y trust.

### ¿Puedo usar una holding en Delaware?

Sí, pero no protege del estate tax. Para protección contra estate tax (> $60K), la holding debe estar fuera de EE. UU. Una holding en Delaware solo añade una capa de privacidad, pero los activos subyacentes siguen siendo estadounidenses.

### ¿Cuánto cuesta mantener esta estructura?

Para 3 propiedades: ~$4,500-6,000/año incluyendo LLCs, holding, trust, registered agent y CPA. El beneficio en protección y ahorro fiscal supera ampliamente el costo.

### ¿Stripe funciona con esta estructura?

Sí. Cada LLC operativa tiene su propia cuenta Stripe con su EIN. Stripe Connect puede consolidar reportes para la holding. Stripe Tax calcula impuestos por cada LLC. La holding recibe transferencias desde las LLCs.

### ¿Puedo vender propiedades dentro de la estructura?

Sí. Vender la LLC (membership interest) es una forma de transferir la propiedad sin pagar transfer taxes ni FIRPTA en algunos casos. Es una estrategia común de salida.

## 12. Checklist de Estructuración

- [ ] Definir número de propiedades y valor total
- [ ] Crear LLC individual por cada propiedad
- [ ] Obtener EIN del IRS para cada LLC
- [ ] Abrir cuenta bancaria separada por LLC
- [ ] Configurar Stripe por LLC (EIN individual)
- [ ] Contratar seguro de liability por LLC ($1-2M)
- [ ] Formar holding internacional (Panamá, BVI, Países Bajos)
- [ ] Transferir membership de LLCs a la holding
- [ ] Crear trust familiar (revocable o irrevocable)
- [ ] Designar beneficiarios del trust
- [ ] Redactar last will y power of attorney
- [ ] Contratar umbrella policy (por encima de LLCs)
- [ ] Implementar sistema contable separado por entidad
- [ ] Revisar estructura anualmente con CPA y abogado
- [ ] No mezclar finanzas personales con ninguna entidad

## Conclusión

**Estructurar propiedades para protección patrimonial** es la diferencia entre tener un portafolio blindado y estar expuesto a perderlo todo por una demanda. La arquitectura correcta separa cada propiedad en su propia LLC, las agrupa bajo una holding internacional (para evitar estate tax), y coloca un trust como propietario final (para sucesión sin probate).

El costo de la estructura es mínimo comparado con el beneficio: proteger millones de dólares por unos pocos miles al año. Y la tranquilidad de saber que tu patrimonio está blindado, que tus herederos recibirán todo sin demoras ni impuestos, y que tus inversiones están organizadas profesionalmente no tiene precio.

En **Sotomayor Consulting International**, diseñamos la estructura de protección patrimonial ideal para tu portafolio: desde la creación de LLCs por propiedad, formación de holding internacional, constitución de trusts, hasta la integración con Stripe, seguros y planificación sucesoria integral. Contáctanos para una consultoría personalizada.
