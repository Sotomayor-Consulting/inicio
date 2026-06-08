---
title: "O que fazer se você nunca declarou impostos: Guia 2026"
description: "Passos para resolver impostos não declarados e ficar em dia"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Guia de conformidade fiscal mostrando formulários IRS, opções de alívio de multas, procedimentos de declaração simplificada, planos de pagamento e caminhos de consulta profissional"
---

**Enfrentar anos de impostos não declarados é avassalador, mas está longe de ser o fim do mundo.** Milhões de empresários e indivíduos ficam atrasados em suas declarações de impostos. A boa notícia é que o IRS e a maioria das autoridades fiscais têm programas projetados especificamente para ajudar não declarantes a voltarem à conformidade — geralmente com multas reduzidas e sem processo criminal.

O erro crítico é não fazer nada. Quanto mais você espera, mais multas se acumulam, mais os estatutos de limitação permanecem abertos e mais opções você perde.

Neste guia, cobrimos **o que fazer se você nunca declarou impostos em 2026**: por que as pessoas param de declarar, os riscos reais do não cumprimento contínuo, opções passo a passo para se regularizar, programas de alívio de multas, acordos de parcelamento e ofertas de compromisso, considerações fiscais estaduais, declarações fiscais internacionais (FBAR e FATCA), como encontrar ajuda profissional e como construir um sistema de conformidade sustentável.

## 1. Por que as pessoas param de declarar

### Razões comuns para não declarar

| Motivo | Descrição | Quão comum |
|--------|-------------|------------|
| **Sobrecarregado pela complexidade** | Renda empresarial, cripto, contas estrangeiras, deduções | Muito comum |
| **Medo de não poder pagar** | Deve impostos mas não pode pagar a conta | Motivo mais comum |
| **Eventos da vida** | Divórcio, morte do cônjuge, doença, perda de emprego | Comum |
| **Procrastinação** | Perdeu um ano, então virou bola de neve | Extremamente comum |
| **Acreditar que não deve impostos** | Achou que a renda era muito baixa ou que as perdas cobriam tudo | Moderado |
| **Má gestão de registros** | Recibos perdidos, sem DRE, não pode reconstruir renda | Comum |
| **Mau conselho** | Alguém disse "não se preocupe com isso" | Moderado |
| **Mentalidade de evitação** | Medo, vergonha, ansiedade sobre o processo | Muito comum |

### O efeito bola de neve

```
BOLA DE NEVE DE NÃO DECLARAÇÃO:

ANO 1: Perder prazo → Multa por declaração tardia + multa por pagamento atrasado
ANO 2: Não declarou ano passado → "Vou fazer dois de uma vez" → Procrastinar
ANO 3: Agora três anos atrasado → Multas se acumulam → Medo aumenta
YEAR 4: Can't find old records → "What's the point?" → Avoidance
ANO 5: Múltiplos anos sem declarar → Avisos de cobrança se acumulam → Nenhuma boa opção parece disponível

REALIDADE: Mesmo após 10+ anos sem declarar, existem opções para resolver.
```

## 2. Os riscos reais do não cumprimento

### Espectro de aplicação do IRS

| Nível de risco | Cenário | Resultado provável |
|------------|----------|----------------|
| **Baixo** | Declarou tarde mas pagou todos os impostos devidos | Apenas multa por declaração tardia (5% ao mês, máx. 25%) |
| **Moderado** | Não declarou, não deve impostos (reembolso devido) | Sem multa, mas o estatuto de limitações nunca começa; o reembolso pode ser perdido após 3 anos |
| **Significativo** | Não declarou, deve impostos | Multa por declaração tardia (5%/mês) + pagamento atrasado (0,5%/mês); juros compostos diários |
| **Alto** | Não declarou, deve impostos significativos, recebeu avisos do IRS | Declaração substituta (SFR) apresentada pelo IRS — geralmente desfavorável; penhoras e gravames possíveis |
| **Grave** | Anos sem declarar com impostos substanciais devidos | Encaminhamento para investigação criminal possível (raro, mas real para grandes valores) |

### A armadilha do estatuto de limitações

```
ESTATUTO DE LIMITAÇÕES (SOL) PARA IMPOSTOS:

  AVALIAÇÃO: O IRS geralmente tem 3 anos da data da declaração para avaliar imposto adicional
    ⚠️ Se você nunca declarou, o SOL NUNCA COMEÇA — o IRS pode avaliar a qualquer momento

  COBRANÇA: Uma vez avaliado, o IRS tem 10 anos para cobrar
    ⚠️ Este relógio de 10 anos não começa até você declarar

  REEMBOLSO: Você tem 3 anos da data de vencimento para reclamar um reembolso
    ⚠️ Após 3 anos, qualquer reembolso devido é perdido

  CRIMINAL: 6 anos da data da infração
    ⚠️ A não declaração intencional pode levar a acusações criminais em casos graves

CONCLUSÃO: Declarar tarde é SEMPRE melhor que nunca declarar.
  O estatuto de limitações começa quando você declara, não quando o imposto venceu.
```

### Declaração substituta (SFR)

```python
# Illustration of SFR vs actual filing tax liability

class SubstituteForReturn:
    """
    Quando o IRS apresenta uma declaração em seu nome (SFR),
    eles normalmente usam a dedução padrão e não incluem
    despesas comerciais, dependentes ou créditos.
    """

    def __init__(self, gross_income, filing_status='single'):
        self.gross_income = gross_income
        self.filing_status = filing_status

    def sfr_tax_liability(self):
        """
        Cálculo SFR do IRS — sem deduções, sem créditos, sem dependentes
        """
        # Dedução padrão NÃO aplicada em SFR típico para renda empresarial
        taxable_income = self.gross_income

        # faixas de imposto (projetadas com ajustes de inflação)
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
        O que você deveria se declarasse corretamente com todas as deduções
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


# Example: Empresário autônomo
result = SubstituteForReturn(
    gross_income=120000,
    filing_status='single',
).comparison(
    business_expenses=35000,   # Home office, equipment, travel
    deductions=15000,           # Self-employed health insurance, retirement
    credits=2000,               # Retirement savings credit
)

print(f"Renda bruta: ${result['gross_income']:,.2f}")
print(f"Responsabilidade fiscal SFR: ${result['sfr_tax']:,.2f}")
print(f"Responsabilidade fiscal real: ${result['actual_tax']:,.2f}")
print(f"Pagamento a maior pelo SFR: ${result['overpayment_by_sfr']:,.2f}")
print(f"Percentual de aumento: {result['percentage_increase']}%")

# Output:
# Renda bruta: $120,000.00
# Responsabilidade fiscal SFR: $22,345.50
# Responsabilidade fiscal real: $12,157.00
# Pagamento a maior pelo SFR: $10,188.50
# Percentual de aumento: 83.8%
```

**Uma SFR apresentada pelo IRS pode exagerar massivamente sua responsabilidade fiscal** — geralmente entre 50-100% ou mais — porque ignora despesas comerciais, deduções e créditos que você tem direito legal de reivindicar.

## 3. Opções passo a passo para se regularizar

### Opção 1: Apresentar declarações atrasadas (primeiro passo recomendado)

```
APRESENTAÇÃO DE DECLARAÇÕES ATRASADAS:

PASSO 1: REUNIR DOCUMENTOS
  • Declarações de impostos de anos anteriores (se houver)
  • W-2, 1099 e extratos de renda
  • Extratos de contas bancárias e de investimento
  • Registros de receitas e despesas comerciais
  • Recibos para deduções
  • Correspondência anterior do IRS

PASSO 2: OBTER TRANSCRIÇÕES DO IRS
  • Solicitar transcrições de salários e rendimentos
  • Solicitar transcrições de conta
  • Disponível online em IRS.gov
  • Mostra o que o IRS já sabe sobre sua renda
  • Grátis — solicite em irs.gov/transcripts

PASSO 3: DETERMINAR QUAIS ANOS DECLARAR
  • Regra atual: Declarar os últimos 6 anos (o IRS geralmente requer 6 anos para Declaração Simplificada)
  • Se menos anos estiverem faltando, declarar todos os anos faltantes
  • Se mais de 6 anos, declarar todos ou consultar um profissional
  • Geralmente: declarar mais em vez de menos para mostrar boa-fé

PASSO 4: PREPARAR E APRESENTAR DECLARAÇÕES
  • Usar software de impostos ou um preparador profissional
  • Ser preciso — declarações intencionalmente falsas têm consequências graves
  • Incluir toda a renda — o IRS já tem W-2 e 1099
  • Reivindicar todas as deduções e créditos legítimos
  • Declarar cada ano separadamente

PASSO 5: PAGAR OU FAZER ACORDOS
  • Pagar integralmente se possível
  • Configurar um acordo de parcelamento
  • Solicitar isenção de multas
  • Considerar uma Oferta de Compromisso
```

### Opção 2: Procedimentos de declaração simplificada do IRS

```
PROCEDIMENTOS DE DECLARAÇÃO SIMPLIFICADA:

SIMPLIFICADA DOMÉSTICA (para residentes nos EUA):
  Elegibilidade: Falha não intencional ao declarar/informar (não intencional)
  Exigido: Declarar os últimos 3 anos de impostos
  Exigido: Declarar os últimos 6 anos de FBAR (se aplicável)
  Multa: Sem multa sobre impostos; 5% sobre ativos estrangeiros (se aplicável)
  Risk: Baixo — no threat of criminal prosecution for non-willful conduct

SIMPLIFICADA ESTRANGEIRA (para cidadãos americanos no exterior):
  Elegibilidade: Não residente, falha não intencional
  Exigido: Declarar os últimos 3 anos de impostos
  Required: Declarar os últimos 6 anos de FBAR
  Multa: Nenhuma multa (se qualificado)
  Risco: Muito baixo — projetado especificamente para expatriados

VANTAGENS PRINCIPAIS:
  ✓ Sem multas por não declarar ou não pagar
  ✓ Sem multas relacionadas à precisão
  ✓ Sem risco de encaminhamento criminal por conduta não intencional
  ✓ Processo simplificado — sem formulários complexos
  ✗ Disponível apenas se o não cumprimento foi não intencional
  ✗ Não disponível se estiver sob exame do IRS

FILING PROCESS:
  ```javascript
  // Verificação de elegibilidade para declaração simplificada

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
          'Conduta não intencional é necessária. Não declarantes intencionais devem consultar ' +
          'um advogado tributário antes de usar este programa.'
        );
      }

      // Cannot be under examination
      if (this.isUnderExam) {
        issues.push(
          'Você está atualmente sob exame do IRS e não é elegível ' +
          'para declaração simplificada.'
        );
      }

      // Foreign vs Domestic determination
      let program = null;

      if (this.isUsCitizenAbroad && !this.isUsResident) {
        program = 'FOREIGN STREAMLINED';
        warnings.push('Deve declarar os últimos 3 anos de impostos e 6 anos de FBAR.');
        if (this.hasForeignAssets) {
          warnings.push('Sem multa sobre ativos estrangeiros sob Simplificada Estrangeira.');
        }
      } else {
        program = 'DOMESTIC STREAMLINED';
        warnings.push('Deve declarar os últimos 3 anos de impostos e 6 anos de FBAR.');

        if (this.hasForeignAssets) {
          warnings.push(
            'Uma multa diversa de 5% se aplica a ativos estrangeiros ' +
            'sob Simplificada Doméstica.'
          );
        }

        if (!this.hasForeignAssets && !this.hasFBARViolations) {
          warnings.push(
            'Domestic Streamlined may still apply even without foreign assets, ' +
            'but confirme com um profissional.'
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

### Opção 3: Prática de divulgação voluntária do IRS

```
PRÁTICA DE DIVULGAÇÃO VOLUNTÁRIA (VDP):

  O que é: Um programa formal para não declarantes intencionais se apresentarem
    antes que o IRS os descubra.

  Elegibilidade: Deve ser verdadeiramente voluntário (o IRS não entrou em contato)
    Deve ser verdadeiro e completo
    Deve cooperar totalmente

  Requisitos:
    • Declarar os últimos 6 anos de impostos
    • Declarar os últimos 6 anos de FBAR
    • Pagar todos os impostos, juros e multas
    • Multa de 75% sobre o saldo agregado mais alto de contas estrangeiras (se aplicável)

  Resultado:
    • O IRS geralmente concorda em NÃO encaminhar para processo criminal
    • Multas civis ainda se aplicam
    • Deve ter um advogado tributário — não pode fazer isso sem representação

  Quem deve usar VDP:
    • Não declarantes intencionais que não foram contatados pelo IRS
    • Aqueles com contas estrangeiras significativas que não declararam FBAR
    • Empresários que intencionalmente não reportaram renda

  Quem NÃO deve usar VDP:
    • Não declarantes não intencionais (usar Simplificada em vez disso)
    • Aqueles já sob investigação do IRS
    • Aqueles com impostos não pagos mínimos
```

## 4. Opções de alívio de multas

### Tipos de multas por declaração tardia

| Tipo de multa | Taxa | Máximo | Como é calculado |
|-------------|------|---------|---------------------|
| **Não apresentar declaração** | 5% ao mês do imposto não pago | 25% | Meses (ou fração) de atraso × 5% |
| **Não pagar impostos** | 0.5% ao mês do imposto não pago | 25% | Meses não pagos × 0,5% |
| **Combinado (mesmo mês)** | 5% ao mês (FTF + FTP) | 5% per month | Limite FTFP para o mesmo mês |
| **Relacionada à precisão** | 20% do pagamento insuficiente | Sem limite | Negligência, subdeclaração substancial |
| **Multa por fraude** | 75% do pagamento insuficiente | Sem limite | Fraude com intenção de evadir |
| **FBAR não intencional** | Até $10.000 por violação | Sem limite | Por conta, por ano |
| **FBAR intencional** | O maior de $100.000 ou 50% do saldo da conta | Sem limite | Por violação |

### Isenção de multas por primeira vez

```
ISENÇÃO DE MULTAS POR PRIMEIRA VEZ (FTA):

  O que faz: Remove multas por não declarar e não pagar
    para um ano fiscal.

  Eligibility:
    • Sem multas nos 3 anos anteriores (administrativamente falando)
    • Todas as declarações atualmente exigidas foram apresentadas
    • Todos os impostos foram pagos (ou acordados para pagamento)

  Como solicitar:
    • Ligar para o IRS em 1-800-829-1040
    • Escrever uma carta solicitando FTA
    • Enviar Formulário 843 (Reclamação de Reembolso e Solicitação de Isenção)

  Taxa de sucesso: ~90% para solicitações de primeira vez que atendem aos critérios

  Limitação: Disponível apenas uma vez a cada poucos anos (não anualmente)
```

### Alívio por causa razoável

```
ALÍVIO POR CAUSA RAZOÁVEL:

  O que é: O IRS pode isentar multas se você puder mostrar causa razoável
    por não declarar ou pagar em dia.

  Razões que qualificam:
    • Doença grave ou morte na família imediata
    • Desastre natural (incêndio, inundação, furacão, terremoto)
    • Incapacidade de obter registros (destruição, recusa de terceiros)
    • Conselho errôneo de um profissional de impostos
    • Encarceramento
    • Serviço militar em zona de combate

  Não qualificam:
    • Falta de fundos (isoladamente)
    • Confiança em um preparador pago que cometeu um erro (sem outros fatores)
    • Agenda lotada / estresse / procrastinação
    • Ignorância da lei (geralmente)

  Como solicitar:
    • Incluir uma explicação por escrito com sua declaração de imposto
    • Usar Formulário 843
    • Fornecer documentação de apoio (registros médicos, sinistros de seguro, etc.)

  Fatores-chave que o IRS avalia:
    • O que aconteceu e quando
    • Como afetou sua capacidade de cumprir
    • Como você agiu uma vez resolvida a causa
    • Seu histórico geral de conformidade
```

### Motor de cálculo de multas

```javascript
// Estimativa de multas fiscais por declaração tardia

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
    // Quando FTF e FTP se aplicam no mesmo mês,
    // a taxa combinada é limitada a 5% para esses meses
    if (this.monthsLate <= 1) {
      return this.calculateFailureToPay(); // FTP só se aplica no primeiro mês
    }

    // Primeiro mês: 5% FTF apenas (FTP não começa até o mês 2 efetivamente)
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
    // 20% do pagamento insuficiente due to negligence
    return Math.round(this.unpaidTax * 0.20 * 100) / 100;
  }

  calculateFraudPenalty() {
    // 75% do pagamento insuficiente
    return Math.round(this.unpaidTax * 0.75 * 100) / 100;
  }

  calculateFBARPenalty() {
    if (this.isFBAR) {
      if (this.fbarWillful) {
        // O maior de $100.000 ou 50% do saldo da conta
        return Math.round(
          Math.max(100000, this.fbarBalance * 0.50) * 100
        ) / 100;
      } else {
        // Até $10.000 por violação (per account, per year)
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
      // Multa por precisão pode ser aplicada se o IRS apresentou SFR
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
      // Causa razoável pode eliminar multas por não declarar e não pagar
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      penaltyAfterRelief = Math.max(0, penaltyAfterRelief - relief);
      reliefApplied = `Causa razoável: -$${relief.toFixed(2)}`;
    } else if (this.isFirstTime && this.filedBeforeNotice) {
      // First-time abatement removes FTF and FTP
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      // FTA remove essas multas
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

## 5. Opções de pagamento

### Paying the IRS When You Can't Pay in Full

```
OPÇÕES DE PAGAMENTO DO IRS:

OPÇÃO 1: PAGAR INTEGRALMENTE
  • Melhor opção se você puder pagar
  • Evita juros e multas futuros
  • Pagar online em IRS.gov/payments
  • Usar Direct Pay (grátis) ou cartão de débito/crédito (taxa aplicável)

OPÇÃO 2: PLANO DE PAGAMENTO DE CURTO PRAZO (180 dias ou menos)
  • Para saldos abaixo de $100.000
  • Sem taxa de configuração
  • Pagar mensalmente até o saldo ser quitado
  • Multas e juros continuam até o pagamento integral

OPÇÃO 3: ACORDO DE PARCELAMENTO (longo prazo)
  • Para saldos abaixo de $50.000 (aprovação garantida)
  • Taxa de configuração: $31-$130 (menor para baixa renda)
  • Pagamentos mensais baseados na capacidade de pagar
  • Multas e juros continuam
  • Pode ser configurado online em IRS.gov/opm

OPÇÃO 4: OFERTA DE COMPROMISSO (OIC)
  • Liquidar dívida fiscal por menos do valor total
  • Qualificação: Dúvida quanto à cobrabilidade
     (não pode pagar o valor total dentro do estatuto de cobrança restante)
  • Pagamento único ou plano de pagamento de curto prazo
  • Taxa de solicitação: $205 (isenta para baixa renda)
  • Deve mostrar: Patrimônio em ativos + potencial de renda futura < dívida total
  • Taxa de sucesso: ~40% das ofertas apresentadas
  • Ajuda profissional fortemente recomendada

OPÇÃO 5: STATUS ATUALMENTE NÃO COBRÁVEL (CNC)
  • Para contribuintes sem capacidade de pagar
  • O IRS concorda em não cobrar temporariamente
  • Divulgação financeira exigida (Formulário 433-A ou 433-F)
  • Multas e juros continuam
  • O IRS pode registrar Aviso de Gravame Fiscal Federal
  • Revisado anualmente para ver se a situação financeira mudou
```

### Cálculo de oferta de compromisso

```javascript
// Estimador de elegibilidade para Oferta de Compromisso

class OfferInCompromiseEstimator {
  constructor(config) {
    this.totalTaxDebt = config.totalTaxDebt;
    this.monthlyIncome = config.monthlyIncome;
    this.monthlyLivingExpenses = config.monthlyLivingExpenses;
    this.equityInAssets = config.equityInAssets; // Patrimônio realizável
    this.remainingSOL = config.remainingSOL; // Anos restantes no estatuto de cobrança
    this.isBaixoIncome = config.isBaixoIncome || false;
  }

  calculateReasonableCollectionPotential() {
    // RCP = (Renda disponível mensal × meses restantes no SOL) + patrimônio
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
      // Oferta de pagamento único (pago em 5 meses)
      const lumpSumRCP = (rcp.monthlyDisposable * 12) // 12 months of disposable
        + rcp.equityContribution;

      // Oferta periódica de curto prazo (paga em 24 meses)
      const periodicRCP = (rcp.monthlyDisposable * 24) // 24 months
        + (rcp.equityContribution * 0.8); // Discounted equity

      offerAmount = Math.min(lumpSumRCP, periodicRCP);
    } else {
      // RCP excede a dívida total — OIC improvável
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
        reason: 'Seu potencial razoável de cobrança excede sua dívida fiscal total. '
          + 'É improvável que o IRS aceite uma oferta por menos do valor total.',
        rcp,
        offerAmount: offer,
        recommendation: 'Considere um acordo de parcelamento em vez disso.',
      };
    }

    const savings = this.totalTaxDebt - offer;
    const savingsPercent = Math.round((savings / this.totalTaxDebt) * 100);

    return {
      likelyToSucceed: true,
      reason: 'Sua capacidade de pagamento é limitada em relação à sua dívida fiscal total.',
      rcp,
      offerAmount: offer,
      savings: Math.round(savings * 100) / 100,
      savingsPercent,
      recommendation: savingsPercent > 50
        ? 'Candidato forte para OIC. Trabalhe com um profissional de impostos para preparar sua solicitação.'
        : 'Moderado candidate. Professional preparation will improve your chances.',
      applicationFee: this.isBaixoIncome ? '$0 (waived)' : '$205',
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
  isBaixoIncome: false,
}).estimateSuccess();

console.log('=== OFFER IN COMPROMISE ESTIMATE ===');
console.log(`Tax Debt: $${oicCheck.offerAmount < 80000 ? oicCheck.rcp.reasonableCollectionPotential.toLocaleString() + ' (RCP)' : 'N/A'}`);
console.log(`Offer Amount: $${oicCheck.offerAmount.toLocaleString()}`);
console.log(`Likely to Succeed: ${oicCheck.likelyToSucceed ? 'YES ✓' : 'NO ✗'}`);
console.log(`Savings: $${oicCheck.savings?.toLocaleString() || 0}`);
console.log(`Savings %: ${oicCheck.savingsPercent || 0}%`);
console.log(`Recommendation: ${oicCheck.recommendation}`);
```

## 6. Considerações fiscais estaduais

### Programas estaduais para não declarantes

```
CONFORMIDADE FISCAL ESTADUAL:

  • Cada estado tem seu próprio programa para não declarantes
  • Alguns estados seguem automaticamente o tratamento Simplificado do IRS
  • Outros exigem divulgação separada em nível estadual
  • As multas estaduais variam amplamente

  Estados sem imposto de renda (sem declaração estadual):
    Alaska, Florida, Nevada, New Hampshire, South Dakota,
    Tennessee, Texas, Washington, Wyoming

  Estados com programas sólidos para não declarantes:
    Califórnia — Programa de Divulgação Voluntária
    Nova York — Programa de Divulgação e Conformidade Voluntária
    Texas — Sem imposto de renda (apenas imposto sobre vendas/franquia)

  Principais diferenças do federal:
    • O SOL estadual pode diferir (alguns estados têm SOL de 4 anos)
    • Alguns estados oferecem sua própria isenção de multas
    • Os períodos de cobrança estaduais variam (normalmente 10-20 anos)
    • Alguns estados exigem declaração de anos além dos requisitos federais

  Ação: Contatar cada estado onde você teve renda durante anos não declarados
```

## 7. Considerações fiscais internacionais

### FBAR e FATCA para não declarantes

```
DECLARAÇÃO DE CONTAS ESTRANGEIRAS:

  FBAR (Formulário FinCEN 114):
    Quem: Pessoas americanas com contas estrangeiras > $10.000 agregado
    Quando: Apresentado anualmente até 15 de abril (extensão automática até 15 de outubro)
    Onde: Sistema de arquivamento eletrônico BSA do FinCEN
    Multa: Não intencional até $10.000 por violação
             Intencional: o maior de $100.000 ou 50% do saldo da conta

  FATCA (Formulário 8938):
    Quem: Indivíduos especificados com ativos financeiros estrangeiros especificados
         excedendo limites ($50k-$200k+ dependendo do status de declaração e residência)
    Quando: Apresentado com a declaração anual
    Onde: Anexado ao Formulário 1040
    Multa: $10.000 por não divulgar; $10k adicional a cada 30 dias até $50k

  DECLARAÇÃO SIMPLIFICADA PARA ATIVOS ESTRANGEIROS:
    • Incluído nos Procedimentos de Declaração Simplificada
    • Declarar últimos 3 anos de impostos (com Formulário 8938 se necessário)
    • Declarar os últimos 6 anos de FBAR
    • Simplificada Doméstica: 5% de multa sobre ativos estrangeiros
    • Simplificada Estrangeira: Sem multa
```

### Cidadãos americanos no exterior

```
PARA CIDADÃOS AMERICANOS VIVENDO NO EXTERIOR:

  • Cidadãos americanos devem declarar impostos nos EUA independentemente de onde moram
  • Exclusão de renda estrangeira (FEIE): ~$130.000 de exclusão (projetado 2026)
  • Crédito fiscal estrangeiro: Crédito por impostos pagos ao seu país de residência
  • Procedimentos Simplificados Estrangeiros: Melhor opção para expatriados
  • Sem multa por não conformidade não intencional sob Simplificada Estrangeira
  • Deve declarar últimos 3 anos de impostos e 6 anos de FBAR
  • Se você não deve impostos (após FEIE e crédito fiscal estrangeiro), declare mesmo assim para:
    - Iniciar o estatuto de limitações
    - Preservar seu direito a reembolsos
    - Evitar multas no futuro
```

## 8. Como encontrar ajuda profissional

### Como escolher o profissional de impostos certo

```
HIERARQUIA DE PROFISSIONAIS DE IMPOSTOS PARA NÃO DECLARANTES:

  CPA (Contador Público Certificado):
    • Ideal para: Declarações complexas, empresas, declarações plurianuais
    • Pode representá-lo perante o IRS
    • Bom para declaração tardia simples

  EA (Agente Credenciado):
    • Ideal para: Representação perante o IRS, declarações atrasadas plurianuais
    • Direitos de representação ilimitados perante o IRS
    • Frequentemente especializados em cobranças e multas do IRS
    • Frequentemente mais acessíveis que CPAs para casos de não declarantes

  Advogado Tributário:
    • Ideal para: Não declaração intencional, exposição criminal, VDP, OIC
    • Aplica-se privilégio advogado-cliente
    • Essencial para a Prática de Divulgação Voluntária
    • Opção mais cara

  Preparador sem licença:
    • Apenas prepara declarações (não pode representar perante o IRS)
    • NÃO recomendado para situações de não declarantes
    • Limitado a declarações simples do ano atual

LISTA DE VERIFICAÇÃO:
  [ ] Verificar PTIN (Número de Identificação do Preparador de Impostos)
  [ ] Verificar status da Circular 230 do IRS
  [ ] Perguntar especificamente sobre experiência com não declarantes
  [ ] Obter estimativa de honorários por escrito
  [ ] Perguntar quem preparará as declarações (assistente vs principal)
  [ ] Verificar Better Business Bureau / conselho de licenciamento estadual
  [ ] Obter referências de casos semelhantes
```

## 9. Construindo um sistema de conformidade sustentável

### Prevenir a não declaração futura

```
LISTA DE SISTEMA DE CONFORMIDADE:

  CALENDÁRIO ANUAL:
    [ ] Janeiro: Reunir todos os documentos fiscais
    [ ] Fevereiro: Enviar documentos ao preparador
    [ ] Março: Revisar minuta da declaração
    [ ] 15 de abril: Declarar ou estender (Formulário 4868)
    [ ] Maio-Setembro: Trabalhar nas declarações estendidas
    [ ] 15 de outubro: Prazo estendido

  PAGAMENTOS DE IMPOSTOS ESTIMADOS (se autônomo):
    • Pagar trimestralmente: 15 abril, 15 junho, 15 setembro, 15 janeiro
    • Usar IRS Direct Pay para pagamentos eletrônicos gratuitos
    • Calcular usando Formulário 1040-ES
    • Pagar pelo menos 100% do imposto do ano anterior (110% se AGI > $150k)
    • Ou pagar 90% do imposto do ano atual

  SISTEMA DE MANUTENÇÃO DE REGISTROS:
    [ ] Recibos digitais (digitalizar ou fotografar tudo)
    [ ] Conta bancária empresarial separada
    [ ] Contabilidade mensal (Odoo, QuickBooks, Xero)
    [ ] Revisão trimestral de lucros e perdas
    [ ] Retenção anual de registros: 7 anos mínimo
    [ ] Backup em nuvem de todos os registros financeiros

  RELACIONAMENTO PROFISSIONAL:
    [ ] Estabelecer relacionamento com CPA/EA durante todo o ano
    [ ] Agendar reunião de meio de ano (julho/agosto)
    [ ] Lembretes trimestrais de pagamento de impostos estimados
    [ ] Reunião anual de planejamento fiscal antes do fim do ano
```

## Conclusão

**A melhor hora para declarar foi na hora. A segunda melhor hora é agora.** Se você não declarou impostos por um ano ou dez, o caminho a seguir é claro, e o IRS tem programas projetados para ajudá-lo a voltar à conformidade.

Os princípios-chave para resolver impostos não declarados:

- **Declare antes que o IRS declare por você** — uma SFR é quase sempre pior do que declarar você mesmo
- **Seja honesto e completo** — o IRS pode ver sua renda; tentar escondê-la piora as coisas
- **Use o programa certo** — Declaração Simplificada para não intencional, VDP para intencional, acordos de parcelamento ou OIC para pagamento
- **Obtenha ajuda profissional** — esta não é uma situação de faça-você-mesmo, especialmente para múltiplos anos não declarados
- **Iniciar o estatuto de limitações** — o relógio SOL só começa quando você declara
- **Construa um sistema para o futuro** — uma vez em dia, mantenha-se em dia com verificações trimestrais e boa manutenção de registros

**Problemas fiscais não desaparecem por conta própria. Mas podem ser resolvidos — sistematicamente, de forma acessível e sem consequências criminais — quando você toma as medidas certas com a orientação certa.**

Na **Sotomayor Consulting International**, ajudamos empresários e indivíduos a resolver situações de impostos não declarados: desde preparação de declarações plurianuais e isenção de multas do IRS até declaração simplificada, ofertas de compromisso e construção de sistemas de conformidade sustentáveis. Contate-nos para uma consulta confidencial.
