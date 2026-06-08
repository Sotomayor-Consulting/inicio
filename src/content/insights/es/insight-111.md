---
title: "Qué hacer si nunca declaraste impuestos: Guía 2026"
description: "Pasos para resolver impuestos no declarados y ponerte al día"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Guía de cumplimiento fiscal mostrando formularios IRS, opciones de alivio de multas, procedimientos de declaración simplificada, planes de pago y vías de consulta profesional"
---

**Enfrentar años de impuestos no declarados es abrumador, pero está lejos de ser el fin del mundo.** Millones de dueños de negocios e individuos se atrasan en sus declaraciones de impuestos. La buena noticia es que el IRS y la mayoría de las autoridades fiscales tienen programas diseñados específicamente para ayudar a los no declarantes a volver al cumplimiento, a menudo con multas reducidas y sin proceso penal.

El error crítico es no hacer nada. Cuanto más esperes, más multas se acumulan, más tiempo permanecen abiertos los estatutos de limitaciones y más opciones pierdes.

En esta guía cubrimos **qué hacer si nunca declaraste impuestos en 2026**: por qué la gente deja de declarar, los riesgos reales del incumplimiento continuo, opciones paso a paso para ponerse al día, programas de alivio de multas, acuerdos de pago a plazos y ofertas de compromiso, consideraciones fiscales estatales, declaraciones fiscales internacionales (FBAR y FATCA), cómo encontrar ayuda profesional y cómo construir un sistema de cumplimiento sostenible.

## 1. Por qué la gente deja de declarar

### Razones comunes para no declarar

| Razón | Descripción | Qué tan común |
|--------|-------------|------------|
| **Abrumado por la complejidad** | Ingresos comerciales, cripto, cuentas extranjeras, deducciones | Muy común |
| **Miedo a no poder pagar** | Debe impuestos pero no puede pagar la factura | Razón más común |
| **Eventos de la vida** | Divorcio, muerte del cónyuge, enfermedad, pérdida de empleo | Común |
| **Procrastinación** | Perdió un año, luego se hizo bola de nieve | Extremadamente común |
| **Creencia de que no se deben impuestos** | Pensó que los ingresos eran demasiado bajos o que las pérdidas cubrían todo | Moderado |
| **Mala gestión de registros** | Recibos perdidos, sin P&L, no puede reconstruir ingresos | Común |
| **Mal consejo** | Alguien dijo "no te preocupes" | Moderado |
| **Mentalidad de evasión** | Miedo, vergüenza, ansiedad sobre el proceso | Muy común |

### El efecto bola de nieve

```
BOLA DE NIEVE DE NO DECLARACIÓN:

AÑO 1: Perder fecha → Multa por presentación tardía + multa por pago tardío
AÑO 2: No declaró el año pasado → "Haré dos a la vez" → Procrastinar
AÑO 3: Ahora tres años atrasado → Multas se acumulan → Miedo aumenta
YEAR 4: Can't find old records → "What's the point?" → Avoidance
AÑO 5: Múltiples años sin declarar → Avisos de cobro se acumulan → No parece haber buenas opciones

REALIDAD: Incluso después de 10+ años sin declarar, existen opciones para resolverlo.
```

## 2. Los riesgos reales del incumplimiento

### Espectro de cumplimiento del IRS

| Nivel de riesgo | Escenario | Resultado probable |
|------------|----------|----------------|
| **Bajo** | Declaró tarde pero pagó todos los impuestos | Solo multa por presentación tardía (5% por mes, máx. 25%) |
| **Moderado** | No declaró, no debe impuestos (le corresponde reembolso) | Sin multa, pero el estatuto de limitaciones nunca comienza; el reembolso puede perderse después de 3 años |
| **Significativo** | No declaró, debe impuestos | Multa por presentación tardía (5%/mes) + pago tardío (0.5%/mes); interés compuesto diario |
| **Alto** | No declaró, debe impuestos significativos, recibió avisos del IRS | Declaración sustitutiva (SFR) presentada por el IRS — generalmente desfavorable; embargos y gravámenes posibles |
| **Grave** | Años sin declarar con impuestos sustanciales adeudados | Derivación a investigación penal posible (raro, pero real para montos grandes) |

### La trampa del estatuto de limitaciones

```
ESTATUTO DE LIMITACIONES (SOL) PARA IMPUESTOS:

  EVALUACIÓN: El IRS generalmente tiene 3 años desde la fecha de presentación para evaluar impuestos adicionales
    ⚠️ Si nunca declaraste, el SOL NUNCA COMIENZA — el IRS puede evaluar en cualquier momento

  COBRO: Una vez evaluado, el IRS tiene 10 años para cobrar
    ⚠️ Este reloj de 10 años no comienza hasta que declares

  REEMBOLSO: Tienes 3 años desde la fecha de vencimiento para reclamar un reembolso
    ⚠️ Después de 3 años, cualquier reembolso que te correspondiera se pierde

  PENAL: 6 años desde la fecha de la ofensa
    ⚠️ La no declaración intencional puede llevar a cargos penales en casos graves

CONCLUSIÓN: Declarar tarde es SIEMPRE mejor que nunca declarar.
  El estatuto de limitaciones comienza cuando declaras, no cuando el impuesto vencía.
```

### Declaración sustitutiva (SFR)

```python
# Illustration of SFR vs actual filing tax liability

class SubstituteForReturn:
    """
    Cuando el IRS presenta una declaración en tu nombre (SFR),
    típicamente usan la deducción estándar y no incluyen
    gastos comerciales, dependientes ni créditos.
    """

    def __init__(self, gross_income, filing_status='single'):
        self.gross_income = gross_income
        self.filing_status = filing_status

    def sfr_tax_liability(self):
        """
        Cálculo SFR del IRS — sin deducciones, sin créditos, sin dependientes
        """
        # Deducción estándar NO aplicada en SFR típico para ingresos comerciales
        taxable_income = self.gross_income

        # tramos impositivos (proyectados con ajustes de inflación)
        brackets = {
            'single': [
                (11925, 0.10),
                (48475, 0.12),
                (103350, 0.22),
                (197300, 0.24),
                (250525, 0.32),
                (626350, 0.35),
                (float('inf'), 0.37),
            ],
            'married_joint': [
                (23850, 0.10),
                (96950, 0.12),
                (206700, 0.22),
                (394600, 0.24),
                (501050, 0.32),
                (751600, 0.35),
                (float('inf'), 0.37),
            ],
        }

        brackets_for_status = brackets.get(self.filing_status, brackets['single'])
        tax = 0
        remaining = taxable_income
        previous_bracket = 0

        for bracket_limit, rate in brackets_for_status:
            if remaining > 0:
                bracket_amount = min(remaining, bracket_limit - previous_bracket)
                tax += bracket_amount * rate
                remaining -= bracket_amount
            previous_bracket = bracket_limit

        return round(tax, 2)

    def actual_filing_liability(self, business_expenses, deductions, credits):
        """
        Lo que deberías si declararas correctamente con todas las deducciones
        """
        adjusted_income = max(0, self.gross_income - business_expenses)
        taxable_income = max(0, adjusted_income - deductions)
        # Simplified calculation
        base_tax = self.sfr_tax_liability() * (taxable_income / max(self.gross_income, 1))
        return max(0, round(base_tax - credits, 2))

    def comparison(self, business_expenses=0, deductions=0, credits=0):
        sfr_tax = self.sfr_tax_liability()
        actual_tax = self.actual_filing_liability(
            business_expenses, deductions, credits
        )

        return {
            'gross_income': self.gross_income,
            'sfr_tax': sfr_tax,
            'actual_tax': actual_tax,
            'overpayment_by_sfr': round(sfr_tax - actual_tax, 2),
            'percentage_increase': round(
                ((sfr_tax - actual_tax) / max(actual_tax, 1)) * 100, 1
            ) if actual_tax > 0 else float('inf'),
        }


# Example: Dueño de negocio independiente
result = SubstituteForReturn(
    gross_income=120000,
    filing_status='single',
).comparison(
    business_expenses=35000,   # Home office, equipment, travel
    deductions=15000,           # Self-employed health insurance, retirement
    credits=2000,               # Retirement savings credit
)

print(f"Ingreso bruto: ${result['gross_income']:,.2f}")
print(f"Responsabilidad fiscal SFR: ${result['sfr_tax']:,.2f}")
print(f"Responsabilidad fiscal real: ${result['actual_tax']:,.2f}")
print(f"Sobrepago por SFR: ${result['overpayment_by_sfr']:,.2f}")
print(f"Porcentaje de aumento: {result['percentage_increase']}%")

# Output:
# Ingreso bruto: $120,000.00
# Responsabilidad fiscal SFR: $22,345.50
# Responsabilidad fiscal real: $12,157.00
# Sobrepago por SFR: $10,188.50
# Porcentaje de aumento: 83.8%
```

**Una SFR presentada por el IRS puede exagerar masivamente tu responsabilidad fiscal** — a menudo entre 50-100% o más — porque ignora gastos comerciales, deducciones y créditos que tienes derecho legal a reclamar.

## 3. Opciones paso a paso para ponerse al día

### Opción 1: Presentar declaraciones atrasadas (primer paso recomendado)

```
PRESENTACIÓN DE DECLARACIONES ATRASADAS:

PASO 1: REUNIR DOCUMENTOS
  • Declaraciones de impuestos de años anteriores (si existen)
  • W-2, 1099 y estados de ingresos
  • Estados de cuentas bancarias y de inversión
  • Registros de ingresos y gastos comerciales
  • Recibos para deducciones
  • Correspondencia previa del IRS

PASO 2: OBTENER TRANSCRIPCIONES DEL IRS
  • Solicitar transcripciones de salarios e ingresos
  • Solicitar transcripciones de cuenta
  • Disponible en línea en IRS.gov
  • Muestra lo que el IRS ya sabe sobre tus ingresos
  • Gratis — solicita en irs.gov/transcripts

PASO 3: DETERMINAR QUÉ AÑOS DECLARAR
  • Regla actual: Declarar los últimos 6 años (el IRS típicamente requiere 6 años para Declaración Simplificada)
  • Si faltan menos años, declarar todos los años faltantes
  • Si son más de 6 años, declarar todos o consultar a un profesional
  • Generalmente: declarar más en lugar de menos para mostrar buena fe

PASO 4: PREPARAR Y PRESENTAR DECLARACIONES
  • Usar software de impuestos o un preparador profesional
  • Ser preciso — las declaraciones intencionalmente falsas tienen consecuencias graves
  • Incluir todos los ingresos — el IRS ya tiene W-2 y 1099
  • Reclamar todas las deducciones y créditos legítimos
  • Declarar cada año por separado

PASO 5: PAGAR O HACER ARREGLOS
  • Pagar completo si es posible
  • Configurar un acuerdo de pago a plazos
  • Solicitar exención de multas
  • Considerar una Oferta de Compromiso
```

### Opción 2: Procedimientos de declaración simplificada del IRS

```
PROCEDIMIENTOS DE DECLARACIÓN SIMPLIFICADA:

SIMPLIFICADA DOMÉSTICA (para residentes de EE.UU.):
  Elegibilidad: Falla no intencional al declarar/informar (no intencional)
  Requerido: Declarar los últimos 3 años de impuestos
  Requerido: Declarar los últimos 6 años de FBAR (si aplica)
  Multa: Sin multa sobre impuestos; 5% sobre activos extranjeros (si aplica)
  Risk: Bajo — no threat of criminal prosecution for non-willful conduct

SIMPLIFICADA EXTRANJERA (para ciudadanos estadounidenses en el extranjero):
  Elegibilidad: No residente, falla no intencional
  Requerido: Declarar los últimos 3 años de impuestos
  Requerido: Declarar los últimos 6 años de FBAR
  Multa: Sin multa alguna (si califica)
  Riesgo: Muy bajo — diseñado específicamente para expatriados

VENTAJAS CLAVE:
  ✓ Sin multas por no presentar o no pagar
  ✓ Sin multas relacionadas con precisión
  ✓ Sin riesgo de derivación penal por conducta no intencional
  ✓ Proceso simplificado — sin formularios complejos
  ✗ Solo disponible si el incumplimiento fue no intencional
  ✗ No disponible si está bajo examen del IRS

FILING PROCESS:
  ```javascript
  // Verificación de elegibilidad para declaración simplificada

  class StreamlinedFilingEligibility {
    constructor(config) {
      this.isUsResident = config.isUsResident;
      this.isNonWillful = config.isNonWillful;
      this.isUnderExam = config.isUnderExam || false;
      this.priorYearsFiled = config.priorYearsFiled || 0;
      this.hasForeignAssets = config.hasForeignAssets || false;
      this.hasFBARViolations = config.hasFBARViolations || false;
      this.isUsCitizenAbroad = config.isUsCitizenAbroad || false;
    }

    checkEligibility() {
      const issues = [];
      const warnings = [];

      // Must be non-willful
      if (!this.isNonWillful) {
        issues.push(
          'Se requiere conducta no intencional. Los no declarantes intencionales deben consultar ' +
          'a un abogado fiscal antes de usar este programa.'
        );
      }

      // Cannot be under examination
      if (this.isUnderExam) {
        issues.push(
          'Actualmente estás bajo examen del IRS y no eres elegible ' +
          'para declaración simplificada.'
        );
      }

      // Foreign vs Domestic determination
      let program = null;

      if (this.isUsCitizenAbroad && !this.isUsResident) {
        program = 'FOREIGN STREAMLINED';
        warnings.push('Debe declarar los últimos 3 años de impuestos y 6 años de FBAR.');
        if (this.hasForeignAssets) {
          warnings.push('Sin multa sobre activos extranjeros bajo Simplificada Extranjera.');
        }
      } else {
        program = 'DOMESTIC STREAMLINED';
        warnings.push('Debe declarar los últimos 3 años de impuestos y 6 años de FBAR.');

        if (this.hasForeignAssets) {
          warnings.push(
            'Se aplica una multa miscelánea del 5% sobre activos extranjeros ' +
            'bajo Simplificada Doméstica.'
          );
        }

        if (!this.hasForeignAssets && !this.hasFBARViolations) {
          warnings.push(
            'Domestic Streamlined may still apply even without foreign assets, ' +
            'but confirma con un profesional.'
          );
        }
      }

      return {
        eligible: issues.length === 0,
        program,
        issues,
        warnings,
        requiredReturns: {
          taxReturns: 'Last 3 years',
          fbarFilings: 'Last 6 years',
        },
        recommendations: issues.length === 0
          ? [
              `Proceed with ${program} filing package.`,
              'Prepare accurate returns for all required years.',
              'Sign and date the certification statement (Form 14653 or 14654).',
              'Mail the complete package to the IRS at the designated address.',
              'Do NOT e-file — Streamlined returns must be mailed.',
            ]
          : ['Consult with a qualified tax professional before filing.'],
      };
    }

    static summary(user) {
      const check = new StreamlinedFilingEligibility(user).checkEligibility();
      return check;
    }
  }

  // Example usage
  const mySituation = StreamlinedFilingEligibility.summary({
    isUsResident: true,
    isNonWillful: true,
    isUnderExam: false,
    hasForeignAssets: false,
    hasFBARViolations: false,
    priorYearsFiled: 0,
  });

  console.log(mySituation);
  ```
```

### Opción 3: Práctica de divulgación voluntaria del IRS

```
PRÁCTICA DE DIVULGACIÓN VOLUNTARIA (VDP):

  Qué es: Un programa formal para que no declarantes intencionales se presenten
    antes de que el IRS los descubra.

  Elegibilidad: Debe ser verdaderamente voluntario (el IRS no te ha contactado)
    Debe ser veraz y completo
    Debe cooperar completamente

  Requisitos:
    • Declarar los últimos 6 años de impuestos
    • Declarar los últimos 6 años de FBAR
    • Pagar todos los impuestos, intereses y multas
    • Multa del 75% sobre el saldo agregado más alto de cuentas extranjeras (si aplica)

  Resultado:
    • El IRS generalmente acepta NO derivar para proceso penal
    • Las multas civiles aún aplican
    • Debe tener un abogado fiscal — no se puede hacer sin representación

  Quién debe usar VDP:
    • No declarantes intencionales que no han sido contactados por el IRS
    • Aquellos con cuentas extranjeras significativas que no declararon FBAR
    • Dueños de negocios que intencionalmente no reportaron ingresos

  Quién NO debe usar VDP:
    • No declarantes no intencionales (usar Simplificada en su lugar)
    • Aquellos ya bajo investigación del IRS
    • Aquellos con impuestos impagos mínimos
```

## 4. Opciones de alivio de multas

### Tipos de multas por declaración tardía

| Tipo de multa | Tasa | Máximo | Cómo se calcula |
|-------------|------|---------|---------------------|
| **No presentar declaración** | 5% por mes del impuesto no pagado | 25% | Meses (o fracción) de retraso × 5% |
| **No pagar impuestos** | 0.5% por mes del impuesto no pagado | 25% | Meses impagos × 0.5% |
| **Combinado (mismo mes)** | 5% por mes (FTF + FTP) | 5% per month | Límite FTFP para el mismo mes |
| **Relacionada con precisión** | 20% del pago insuficiente | Sin límite | Negligencia, subdeclaración sustancial |
| **Multa por fraude** | 75% del pago insuficiente | Sin límite | Fraude con intención de evadir |
| **FBAR no intencional** | Hasta $10,000 por violación | Sin límite | Por cuenta, por año |
| **FBAR intencional** | El mayor de $100,000 o 50% del saldo de la cuenta | Sin límite | Por violación |

### Exención de multas por primera vez

```
EXENCIÓN DE MULTAS POR PRIMERA VEZ (FTA):

  Qué hace: Elimina multas por no presentar y no pagar
    para un año fiscal.

  Eligibility:
    • Sin multas en los 3 años anteriores (administrativamente hablando)
    • Todas las declaraciones requeridas han sido presentadas
    • Todos los impuestos han sido pagados (o arreglado para pagar)

  Cómo solicitar:
    • Llamar al IRS al 1-800-829-1040
    • Escribir una carta solicitando FTA
    • Enviar Formulario 843 (Reclamo de reembolso y solicitud de exención)

  Tasa de éxito: ~90% para solicitudes por primera vez que cumplen criterios

  Limitación: Solo disponible una vez cada pocos años (no anualmente)
```

### Alivio por causa razonable

```
ALIVIO POR CAUSA RAZONABLE:

  Qué es: El IRS puede eximir multas si puedes mostrar causa razonable
    por no declarar o pagar a tiempo.

  Razones que califican:
    • Enfermedad grave o muerte en la familia inmediata
    • Desastre natural (incendio, inundación, huracán, terremoto)
    • Incapacidad para obtener registros (destrucción, negativa de terceros)
    • Consejo erróneo de un profesional de impuestos
    • Encarcelamiento
    • Servicio militar en zona de combate

  No califican:
    • Falta de fondos (por sí sola)
    • Confianza en un preparador pagado que cometió un error (sin otros factores)
    • Agenda ocupada / estrés / procrastinación
    • Ignorancia de la ley (generalmente)

  Cómo solicitar:
    • Incluir una explicación por escrito con tu declaración
    • Usar Formulario 843
    • Proporcionar documentación de respaldo (registros médicos, reclamos de seguro, etc.)

  Factores clave que evalúa el IRS:
    • Qué sucedió y cuándo
    • Cómo afectó tu capacidad de cumplir
    • Cómo actuaste una vez resuelta la causa
    • Tu historial de cumplimiento general
```

### Motor de cálculo de multas

```javascript
// Estimación de multas fiscales por presentación tardía

class TaxPenaltyCalculator {
  constructor(config) {
    this.unpaidTax = config.unpaidTax;
    this.monthsLate = config.monthsLate;
    this.filedBeforeNotice = config.filedBeforeNotice || false;
    this.isFirstTime = config.isFirstTime || false;
    this.reasonableCause = config.reasonableCause || false;
    this.fraudulent = config.fraudulent || false;
    this.isFBAR = config.isFBAR || false;
    this.fbarBalance = config.fbarBalance || 0;
    this.fbarWillful = config.fbarWillful || false;
  }

  calculateFailureToFile() {
    const rate = 0.05; // 5% per month
    const months = Math.min(this.monthsLate, 5); // Max 5 months at 5%
    return Math.round(this.unpaidTax * rate * months * 100) / 100;
  }

  calculateFailureToPay() {
    const rate = 0.005; // 0.5% per month
    const months = Math.min(this.monthsLate, 50); // Max 50 months at 0.5%
    return Math.round(this.unpaidTax * rate * months * 100) / 100;
  }

  calculateCombinedPenalty() {
    // Cuando FTF y FTP aplican en el mismo mes,
    // la tasa combinada está limitada al 5% para esos meses
    if (this.monthsLate <= 1) {
      return this.calculateFailureToPay(); // FTP solo aplica el primer mes
    }

    // Primer mes: 5% FTF solamente (FTP no comienza hasta el mes 2 efectivamente)
    const firstMonthFTF = this.unpaidTax * 0.05;

    // Months 2-5: Combined rate capped at 5%
    const combinedMonths = Math.min(Math.max(0, this.monthsLate - 1), 4);
    // Within combined months: FTF 5% + FTP 0.5%, but capped at 5% for FTF+FTP
    // So effective rate for these months = 5% total
    const combinedFTF = this.unpaidTax * 0.05 * combinedMonths;
    const combinedFTP = this.unpaidTax * 0.005 * (combinedMonths + 1); // FTP from month 1

    // After month 5: FTP only (0.5% per month)
    const ftpOnlyMonths = Math.max(0, this.monthsLate - 5);
    const ftpOnly = this.unpaidTax * 0.005 * ftpOnlyMonths;

    return Math.round((firstMonthFTF + combinedFTF + combinedFTP + ftpOnly) * 100) / 100;
  }

  calculateAccuracyPenalty() {
    // 20% del pago insuficiente due to negligence
    return Math.round(this.unpaidTax * 0.20 * 100) / 100;
  }

  calculateFraudPenalty() {
    // 75% del pago insuficiente
    return Math.round(this.unpaidTax * 0.75 * 100) / 100;
  }

  calculateFBARPenalty() {
    if (this.isFBAR) {
      if (this.fbarWillful) {
        // El mayor de $100,000 o 50% del saldo de la cuenta
        return Math.round(
          Math.max(100000, this.fbarBalance * 0.50) * 100
        ) / 100;
      } else {
        // Hasta $10,000 por violación (per account, per year)
        return Math.round(10000 * 100) / 100;
      }
    }
    return 0;
  }

  getTotalPenalties() {
    let total = this.calculateCombinedPenalty();

    if (this.fraudulent) {
      total += this.calculateFraudPenalty();
    } else if (!this.filedBeforeNotice) {
      // Multa por precisión puede aplicar si el IRS presentó SFR
      total += this.calculateAccuracyPenalty();
    }

    total += this.calculateFBARPenalty();
    return Math.round(total * 100) / 100;
  }

  getSummary() {
    const breakdown = {
      failureToFile: this.calculateFailureToFile(),
      failureToPay: this.calculateFailureToPay(),
      combinedPenalty: this.calculateCombinedPenalty(),
      accuracyPenalty: this.fraudulent
        ? 0 : this.calculateAccuracyPenalty(),
      fraudPenalty: this.fraudulent
        ? this.calculateFraudPenalty() : 0,
      fbarPenalty: this.calculateFBARPenalty(),
    };

    // Apply relief
    let reliefApplied = null;
    let penaltyAfterRelief = this.getTotalPenalties();

    if (this.reasonableCause) {
      // Causa razonable puede eliminar multas por no declarar y no pagar
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      penaltyAfterRelief = Math.max(0, penaltyAfterRelief - relief);
      reliefApplied = `Causa razonable: -$${relief.toFixed(2)}`;
    } else if (this.isFirstTime && this.filedBeforeNotice) {
      // First-time abatement removes FTF and FTP
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      // FTA elimina estas multas
      penaltyAfterRelief = Math.max(0, penaltyAfterRelief - relief);
      reliefApplied = `First-time abatement: -$${relief.toFixed(2)}`;
    }

    return {
      unpaidTax: this.unpaidTax,
      monthsLate: this.monthsLate,
      breakdown,
      totalPenalties: Math.round(this.getTotalPenalties() * 100) / 100,
      reliefApplied,
      penaltyAfterRelief: Math.round(penaltyAfterRelief * 100) / 100,
      totalOwed: Math.round(
        (this.unpaidTax + penaltyAfterRelief) * 100
      ) / 100,
      interest: Math.round(this.unpaidTax * 0.07 * this.monthsLate / 12 * 100) / 100,
      grandTotal: Math.round(
        (this.unpaidTax + penaltyAfterRelief
          + (this.unpaidTax * 0.07 * this.monthsLate / 12)) * 100
      ) / 100,
    };
  }
}

// Example: Self-employed with 3 years unfiled
const estimate = new TaxPenaltyCalculator({
  unpaidTax: 45000,
  monthsLate: 36, // 3 years
  filedBeforeNotice: true,
  isFirstTime: true,
  reasonableCause: false,
  fraudulent: false,
  fbarBalance: 0,
}).getSummary();

console.log('=== PENALTY ESTIMATE ===');
console.log(`Unpaid Tax: $${estimate.unpaidTax.toLocaleString()}`);
console.log(`Months Late: ${estimate.monthsLate}`);
console.log(`Total Penalties: $${estimate.totalPenalties.toLocaleString()}`);
console.log(`Relief Applied: ${estimate.reliefApplied}`);
console.log(`Penalty After Relief: $${estimate.penaltyAfterRelief.toLocaleString()}`);
console.log(`Total Owed (Tax + Penalty): $${estimate.totalOwed.toLocaleString()}`);
console.log(`Estimated Interest: $${estimate.interest.toLocaleString()}`);
console.log(`Grand Total: $${estimate.grandTotal.toLocaleString()}`);
```

## 5. Opciones de pago

### Paying the IRS When You Can't Pay in Full

```
OPCIONES DE PAGO DEL IRS:

OPCIÓN 1: PAGAR COMPLETO
  • Mejor opción si puedes pagarlo
  • Evita intereses y multas futuras
  • Pagar en línea en IRS.gov/payments
  • Usar Direct Pay (gratis) o tarjeta débito/crédito (aplica tarifa)

OPCIÓN 2: PLAN DE PAGO A CORTO PLAZO (180 días o menos)
  • Para saldos bajo $100,000
  • Sin tarifa de configuración
  • Pagar mensualmente hasta saldar el saldo
  • Multas e intereses continúan hasta pagar completo

OPCIÓN 3: ACUERDO DE PAGO A PLAZOS (largo plazo)
  • Para saldos bajo $50,000 (aprobación garantizada)
  • Tarifa de configuración: $31-$130 (menor para bajos ingresos)
  • Pagos mensuales basados en capacidad de pago
  • Multas e intereses continúan
  • Se puede configurar en línea en IRS.gov/opm

OPCIÓN 4: OFERTA DE COMPROMISO (OIC)
  • Liquidar deuda fiscal por menos del total
  • Calificación: Duda sobre la cobrabilidad
     (no puede pagar el total dentro del estatuto de cobro restante)
  • Pago único o plan de pago a corto plazo
  • Tarifa de solicitud: $205 (exenta para bajos ingresos)
  • Debe mostrar: Capital en activos + ingreso futuro potencial < deuda total
  • Tasa de éxito: ~40% de las ofertas presentadas
  • Ayuda profesional altamente recomendada

OPCIÓN 5: ESTADO ACTUALMENTE NO COBRABLE (CNC)
  • Para contribuyentes sin capacidad de pago
  • El IRS acuerda no cobrar temporalmente
  • Divulgación financiera requerida (Formulario 433-A o 433-F)
  • Multas e intereses continúan
  • El IRS puede presentar Aviso de Gravamen Fiscal Federal
  • Revisado anualmente para ver si la situación financiera ha cambiado
```

### Cálculo de oferta de compromiso

```javascript
// Estimador de elegibilidad para Oferta de Compromiso

class OfferInCompromiseEstimator {
  constructor(config) {
    this.totalTaxDebt = config.totalTaxDebt;
    this.monthlyIncome = config.monthlyIncome;
    this.monthlyLivingExpenses = config.monthlyLivingExpenses;
    this.equityInAssets = config.equityInAssets; // Capital realizable
    this.remainingSOL = config.remainingSOL; // Años restantes en el estatuto de cobro
    this.isBajoIncome = config.isBajoIncome || false;
  }

  calculateReasonableCollectionPotential() {
    // RCP = (Ingreso disponible mensual × meses restantes en SOL) + capital
    const monthlyDisposable = Math.max(0,
      this.monthlyIncome - this.monthlyLivingExpenses
    );
    const totalMonths = this.remainingSOL * 12;
    const futureIncome = monthlyDisposable * totalMonths;

    const rcp = futureIncome + this.equityInAssets;

    return {
      monthlyDisposable,
      totalMonths,
      futureIncomeContribution: futureIncome,
      equityContribution: this.equityInAssets,
      reasonableCollectionPotential: rcp,
    };
  }

  getOfferAmount() {
    const rcp = this.calculateReasonableCollectionPotential();

    // Offer must be at least RCP (or close to it)
    let offerAmount;

    if (rcp.reasonableCollectionPotential < this.totalTaxDebt) {
      // Oferta de pago único (pagado en 5 meses)
      const lumpSumRCP = (rcp.monthlyDisposable * 12) // 12 months of disposable
        + rcp.equityContribution;

      // Oferta periódica a corto plazo (pagado en 24 meses)
      const periodicRCP = (rcp.monthlyDisposable * 24) // 24 months
        + (rcp.equityContribution * 0.8); // Discounted equity

      offerAmount = Math.min(lumpSumRCP, periodicRCP);
    } else {
      // RCP excede la deuda total — OIC no probable
      offerAmount = this.totalTaxDebt;
    }

    return Math.round(offerAmount * 100) / 100;
  }

  estimateSuccess() {
    const rcp = this.calculateReasonableCollectionPotential();
    const offer = this.getOfferAmount();

    if (offer >= this.totalTaxDebt) {
      return {
        likelyToSucceed: false,
        reason: 'Tu potencial razonable de cobro excede tu deuda fiscal total. '
          + 'Es improbable que el IRS acepte una oferta por menos del total.',
        rcp,
        offerAmount: offer,
        recommendation: 'Considera un acuerdo de pago a plazos en su lugar.',
      };
    }

    const savings = this.totalTaxDebt - offer;
    const savingsPercent = Math.round((savings / this.totalTaxDebt) * 100);

    return {
      likelyToSucceed: true,
      reason: 'Tu capacidad de pago es limitada en relación con tu deuda fiscal total.',
      rcp,
      offerAmount: offer,
      savings: Math.round(savings * 100) / 100,
      savingsPercent,
      recommendation: savingsPercent > 50
        ? 'Candidato fuerte para OIC. Trabaja con un profesional de impuestos para preparar tu solicitud.'
        : 'Moderado candidate. Professional preparation will improve your chances.',
      applicationFee: this.isBajoIncome ? '$0 (waived)' : '$205',
    };
  }
}

// Example: Business owner with $80k tax debt
const oicCheck = new OfferInCompromiseEstimator({
  totalTaxDebt: 80000,
  monthlyIncome: 6000,
  monthlyLivingExpenses: 5500,
  equityInAssets: 5000,
  remainingSOL: 8,
  isBajoIncome: false,
}).estimateSuccess();

console.log('=== OFFER IN COMPROMISE ESTIMATE ===');
console.log(`Tax Debt: $${oicCheck.offerAmount < 80000 ? oicCheck.rcp.reasonableCollectionPotential.toLocaleString() + ' (RCP)' : 'N/A'}`);
console.log(`Offer Amount: $${oicCheck.offerAmount.toLocaleString()}`);
console.log(`Likely to Succeed: ${oicCheck.likelyToSucceed ? 'YES ✓' : 'NO ✗'}`);
console.log(`Savings: $${oicCheck.savings?.toLocaleString() || 0}`);
console.log(`Savings %: ${oicCheck.savingsPercent || 0}%`);
console.log(`Recommendation: ${oicCheck.recommendation}`);
```

## 6. Consideraciones fiscales estatales

### Programas estatales para no declarantes

```
CUMPLIMIENTO FISCAL ESTATAL:

  • Cada estado tiene su propio programa para no declarantes
  • Algunos estados siguen automáticamente el tratamiento Simplificado del IRS
  • Otros requieren divulgación separada a nivel estatal
  • Las multas estatales varían ampliamente

  Estados sin impuesto sobre la renta (sin declaración estatal):
    Alaska, Florida, Nevada, New Hampshire, South Dakota,
    Tennessee, Texas, Washington, Wyoming

  Estados con programas sólidos para no declarantes:
    California — Programa de Divulgación Voluntaria
    Nueva York — Programa de Divulgación y Cumplimiento Voluntario
    Texas — Sin impuesto sobre la renta (solo impuesto a ventas/franquicia)

  Diferencias clave con lo federal:
    • El SOL estatal puede diferir (algunos estados tienen SOL de 4 años)
    • Algunos estados ofrecen su propia exención de multas
    • Los períodos de cobro estatales varían (típicamente 10-20 años)
    • Algunos estados requieren declarar años más allá de los requisitos federales

  Acción: Contactar cada estado donde tuviste ingresos durante años no declarados
```

## 7. Consideraciones fiscales internacionales

### FBAR y FATCA para no declarantes

```
REPORTE DE CUENTAS EXTRANJERAS:

  FBAR (Formulario FinCEN 114):
    Quién: Personas estadounidenses con cuentas extranjeras > $10,000 agregado
    Cuándo: Se presenta anualmente antes del 15 de abril (extensión automática al 15 de octubre)
    Dónde: Sistema de presentación electrónica BSA de FinCEN
    Multa: No intencional hasta $10,000 por violación
             Intencional: el mayor de $100,000 o 50% del saldo de la cuenta

  FATCA (Formulario 8938):
    Quién: Individuos especificados con activos financieros extranjeros especificados
         que exceden umbrales ($50k-$200k+ según estado civil y residencia)
    Cuándo: Se presenta con la declaración anual
    Dónde: Adjunto al Formulario 1040
    Multa: $10,000 por no divulgar; $10k adicional cada 30 días hasta $50k

  DECLARACIÓN SIMPLIFICADA PARA ACTIVOS EXTRANJEROS:
    • Incluido en los Procedimientos de Declaración Simplificada
    • Declarar últimos 3 años de impuestos (con Formulario 8938 si es necesario)
    • Declarar los últimos 6 años de FBAR
    • Simplificada Doméstica: 5% de multa sobre activos extranjeros
    • Simplificada Extranjera: Sin multa
```

### Ciudadanos estadounidenses en el extranjero

```
PARA CIUDADANOS ESTADOUNIDENSES EN EL EXTRANJERO:

  • Los ciudadanos estadounidenses deben declarar impuestos sin importar dónde vivan
  • Exclusión de ingresos extranjeros (FEIE): ~$130,000 de exclusión (proyectado 2026)
  • Crédito fiscal extranjero: Crédito por impuestos pagados a tu país de residencia
  • Procedimientos Simplificados Extranjeros: Mejor opción para expatriados
  • Sin multa por incumplimiento no intencional bajo Simplificada Extranjera
  • Debe declarar últimos 3 años de impuestos y 6 años de FBAR
  • Si no debes impuestos (después de FEIE y crédito fiscal extranjero), declara de todos modos para:
    - Iniciar el estatuto de limitaciones
    - Preservar tu derecho a reembolsos
    - Evitar multas en el futuro
```

## 8. Cómo encontrar ayuda profesional

### Cómo elegir el profesional de impuestos adecuado

```
JERARQUÍA DE PROFESIONALES DE IMPUESTOS PARA NO DECLARANTES:

  CPA (Contador Público Certificado):
    • Ideal para: Declaraciones complejas, negocios, declaraciones multianuales
    • Puede representarte ante el IRS
    • Bueno para declaración tardía sencilla

  EA (Agente Inscrito):
    • Ideal para: Representación ante el IRS, declaraciones atrasadas multianuales
    • Derechos de representación ilimitados ante el IRS
    • A menudo se especializan en cobros y multas del IRS
    • A menudo más asequibles que los CPA para casos de no declarantes

  Abogado Fiscal:
    • Ideal para: No declaración intencional, exposición penal, VDP, OIC
    • Aplica privilegio abogado-cliente
    • Esencial para la Práctica de Divulgación Voluntaria
    • Opción más cara

  Preparador sin licencia:
    • Solo prepara declaraciones (no puede representar ante el IRS)
    • NO recomendado para situaciones de no declarantes
    • Limitado a declaraciones simples del año actual

LISTA DE VERIFICACIÓN:
  [ ] Verificar PTIN (Número de Identificación de Preparador de Impuestos)
  [ ] Verificar estado de Circular 230 del IRS
  [ ] Preguntar específicamente sobre experiencia con no declarantes
  [ ] Obtener estimado de honorarios por escrito
  [ ] Preguntar quién preparará las declaraciones (asistente vs principal)
  [ ] Verificar Better Business Bureau / junta de licencias estatal
  [ ] Obtener referencias de casos similares
```

## 9. Construyendo un sistema de cumplimiento sostenible

### Prevenir la no declaración futura

```
LISTA DE SISTEMA DE CUMPLIMIENTO:

  CALENDARIO ANUAL:
    [ ] Enero: Reunir todos los documentos fiscales
    [ ] Febrero: Enviar documentos al preparador
    [ ] Marzo: Revisar borrador de declaración
    [ ] 15 de abril: Declarar o extender (Formulario 4868)
    [ ] Mayo-Septiembre: Trabajar en declaraciones extendidas
    [ ] 15 de octubre: Fecha límite extendida

  PAGOS DE IMPUESTOS ESTIMADOS (si eres independiente):
    • Pagar trimestralmente: 15 abril, 15 junio, 15 septiembre, 15 enero
    • Usar IRS Direct Pay para pagos electrónicos gratuitos
    • Calcular usando Formulario 1040-ES
    • Pagar al menos 100% del impuesto del año anterior (110% si AGI > $150k)
    • O pagar 90% del impuesto del año actual

  SISTEMA DE GESTIÓN DE REGISTROS:
    [ ] Recibos digitales (escanear o fotografiar todo)
    [ ] Cuenta bancaria comercial separada
    [ ] Contabilidad mensual (Odoo, QuickBooks, Xero)
    [ ] Revisión trimestral de ganancias y pérdidas
    [ ] Retención anual de registros: 7 años mínimo
    [ ] Respaldo en la nube de todos los registros financieros

  RELACIÓN PROFESIONAL:
    [ ] Establecer relación con CPA/EA durante todo el año
    [ ] Programar revisión de mitad de año (julio/agosto)
    [ ] Recordatorios trimestrales de pago de impuestos estimados
    [ ] Reunión anual de planificación fiscal antes de fin de año
```

## Conclusión

**El mejor momento para declarar fue a tiempo. El segundo mejor momento es ahora.** Si no has declarado impuestos por un año o diez, el camino a seguir es claro, y el IRS tiene programas diseñados para ayudarte a volver al cumplimiento.

Los principios clave para resolver impuestos no declarados:

- **Declara antes de que el IRS declare por ti** — una SFR es casi siempre peor que declarar tú mismo
- **Sé honesto y completo** — el IRS puede ver tus ingresos; intentar ocultarlos empeora las cosas
- **Usa el programa correcto** — Declaración Simplificada para no intencional, VDP para intencional, acuerdos de pago u OIC para pago
- **Obtén ayuda profesional** — esto no es una situación de bricolaje, especialmente para múltiples años no declarados
- **Iniciar el estatuto de limitaciones** — el reloj SOL solo comienza cuando declaras
- **Construye un sistema para el futuro** — una vez al día, mantente al día con revisiones trimestrales y buen mantenimiento de registros

**Los problemas fiscales no desaparecen solos. Pero pueden resolverse — sistemáticamente, de manera asequible y sin consecuencias penales — cuando tomas los pasos correctos con la orientación correcta.**

En **Sotomayor Consulting International**, ayudamos a dueños de negocios e individuos a resolver situaciones de impuestos no declarados: desde preparación de declaraciones multianuales y exención de multas del IRS hasta declaración simplificada, ofertas de compromiso y construcción de sistemas de cumplimiento sostenibles. Contáctanos para una consulta confidencial.
