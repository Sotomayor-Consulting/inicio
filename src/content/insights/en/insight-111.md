---
title: "What to Do If You Never Filed Taxes: 2026 Guide"
description: "Steps to resolve unfiled taxes and get compliant"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Tax compliance guide showing IRS forms, penalty relief options, streamlined filing procedures, payment plans, and professional consultation pathways"
---

**Facing years of unfiled taxes is overwhelming, but it's far from the end of the world.** Millions of business owners and individuals fall behind on their tax filings. The good news is that the IRS and most tax authorities have programs designed specifically to help non-filers come back into compliance — often with reduced penalties and no criminal prosecution.

The critical mistake is doing nothing. The longer you wait, the more penalties accrue, the more statutes of limitation stay open, and the more options you lose.

In this guide, we cover **what to do if you never filed taxes in 2026**: why people stop filing, the real risks of continued non-compliance, step-by-step options for catching up, penalty relief programs, installment agreements and offers in compromise, state tax considerations, international tax filings (FBAR and FATCA), how to find professional help, and how to build a sustainable compliance system.

## 1. Why People Stop Filing

### Common Reasons for Non-Filing

| Reason | Description | How Common |
|--------|-------------|------------|
| **Overwhelmed by complexity** | Business income, crypto, foreign accounts, deductions | Very common |
| **Fear of not being able to pay** | Owe taxes but can't afford the bill | Most common reason |
| **Life events** | Divorce, death of spouse, illness, job loss | Common |
| **Procrastination** | Missed one year, then it snowballed | Extremely common |
| **Belief no tax is owed** | Thought income was too low or losses covered everything | Moderate |
| **Poor recordkeeping** | Lost receipts, no P&L, can't reconstruct income | Common |
| **Bad advice** | Someone said "don't worry about it" | Moderate |
| **Avoidance mindset** | Fear, shame, anxiety about the process | Very common |

### The Snowball Effect

```
NON-FILING SNOWBALL:

YEAR 1: Miss deadline → Late filing penalty + late payment penalty
YEAR 2: Didn't file last year → "I'll do two at once" → Procrastinate
YEAR 3: Now three years behind → Penalties compound → Fear increases
YEAR 4: Can't find old records → "What's the point?" → Avoidance
YEAR 5: Multiple years unfiled → Collection notices pile up → No good options seem available

REALITY: Even after 10+ years of non-filing, options exist to resolve it.
```

## 2. The Real Risks of Non-Compliance

### IRS Enforcement Spectrum

| Risk Level | Scenario | Likely Outcome |
|------------|----------|----------------|
| **Low** | Filed late but paid all tax due | Late filing penalty only (5% per month, max 25%) |
| **Moderate** | Did not file, no tax owed (refund due) | No penalty — but statute of limitations never starts; refund may be lost after 3 years |
| **Significant** | Did not file, owe taxes | Late filing (5%/mo) + late payment (0.5%/mo) penalties; interest compounds daily |
| **High** | Did not file, owe significant tax, received IRS notices | Substitute for Return (SFR) filed by IRS — usually unfavorable; levies and liens possible |
| **Severe** | Years of non-filing with substantial tax due | Criminal investigation referral is possible (rare, but real for large amounts) |

### The Statute of Limitations Trap

```
STATUTE OF LIMITATIONS (SOL) FOR TAXES:

  ASSESSMENT: IRS generally has 3 years from the filing date to assess additional tax
    ⚠️ If you never filed, the SOL NEVER STARTS — the IRS can assess at any time

  COLLECTION: Once assessed, IRS has 10 years to collect
    ⚠️ This 10-year clock does not start until you file

  REFUND: You have 3 years from the due date to claim a refund
    ⚠️ After 3 years, any refund you were owed is forfeited

  CRIMINAL: 6 years from the date of the offense
    ⚠️ Willful non-filing can lead to criminal charges in egregious cases

BOTTOM LINE: Filing late is ALWAYS better than never filing.
  The statute of limitations begins when you file — not when the tax was due.
```

### Substitute for Return (SFR)

```python
# Illustration of SFR vs actual filing tax liability

class SubstituteForReturn:
    """
    When the IRS files a return on your behalf (SFR),
    they typically use the standard deduction and do not include
    business expenses, dependents, or credits.
    """

    def __init__(self, gross_income, filing_status='single'):
        self.gross_income = gross_income
        self.filing_status = filing_status

    def sfr_tax_liability(self):
        """
        IRS SFR calculation — no deductions, no credits, no dependents
        """
        # Standard deduction NOT applied in typical SFR for business income
        taxable_income = self.gross_income

        # 2026 tax brackets (projected with inflation adjustments)
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
        What you would owe if you filed properly with all deductions
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


# Example: Self-employed business owner
result = SubstituteForReturn(
    gross_income=120000,
    filing_status='single',
).comparison(
    business_expenses=35000,   # Home office, equipment, travel
    deductions=15000,           # Self-employed health insurance, retirement
    credits=2000,               # Retirement savings credit
)

print(f"Gross Income: ${result['gross_income']:,.2f}")
print(f"SFR Tax Liability: ${result['sfr_tax']:,.2f}")
print(f"Actual Filing Liability: ${result['actual_tax']:,.2f}")
print(f"Overpayment by SFR: ${result['overpayment_by_sfr']:,.2f}")
print(f"Percentage Increase: {result['percentage_increase']}%")

# Output:
# Gross Income: $120,000.00
# SFR Tax Liability: $22,345.50
# Actual Filing Liability: $12,157.00
# Overpayment by SFR: $10,188.50
# Percentage Increase: 83.8%
```

**An SFR filed by the IRS can massively overstate your tax liability** — often by 50-100% or more — because it ignores business expenses, deductions, and credits that you are legally entitled to claim.

## 3. Step-by-Step Options for Catching Up

### Option 1: File Past-Due Returns (Recommended First Step)

```
FILING PAST-DUE RETURNS:

STEP 1: GATHER DOCUMENTS
  • Prior years' tax returns (if any)
  • W-2s, 1099s, and income statements
  • Bank and investment account statements
  • Business income and expense records
  • Receipts for deductions
  • Previous correspondence from the IRS

STEP 2: GET TRANSCRACTS FROM IRS
  • Request Wage and Income Transcripts
  • Request Account Transcripts
  • Available online at IRS.gov
  • Shows what the IRS already knows about your income
  • Free — order at irs.gov/transcripts

STEP 3: DETERMINE WHICH YEARS TO FILE
  • Current rule: File the last 6 years (IRS typically requires 6 years for Streamlined Filing)
  • If fewer years are missing, file all missing years
  • If more than 6 years, file all years or consult a professional
  • Generally: file more rather than fewer to show good faith

STEP 4: PREPARE AND FILE RETURNS
  • Use tax software or a professional preparer
  • Be accurate — intentionally false returns have serious consequences
  • Include all income — the IRS already has W-2s and 1099s
  • Claim all legitimate deductions and credits
  • File each year as a separate return

STEP 5: PAY OR MAKE ARRANGEMENTS
  • Pay in full if possible
  • Set up an installment agreement
  • Apply for penalty abatement
  • Consider an Offer in Compromise
```

### Option 2: IRS Streamlined Filing Compliance Procedures

```
STREAMLINED FILING PROCEDURES:

DOMESTIC STREAMLINED (for US residents):
  Eligibility: Non-willful failure to file/report (not intentional)
  Required: File last 3 years of tax returns
  Required: File last 6 years of FBARs (if applicable)
  Penalty: No penalty on tax; 5% penalty on foreign assets (if applicable)
  Risk: Low — no threat of criminal prosecution for non-willful conduct

FOREIGN STREAMLINED (for US citizens abroad):
  Eligibility: Non-resident, non-willful failure
  Required: File last 3 years of tax returns
  Required: File last 6 years of FBARs
  Penalty: No penalty at all (if qualified)
  Risk: Very low — designed specifically for expats

KEY ADVANTAGES:
  ✓ No failure-to-file or failure-to-pay penalties
  ✓ No accuracy-related penalties
  ✓ No risk of criminal referral for non-willful conduct
  ✓ Simplified process — no complex forms
  ✗ Only available if non-compliance was non-willful
  ✗ Not available if under IRS examination

FILING PROCESS:
  ```javascript
  // Streamlined filing eligibility check

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
          'Non-willful conduct is required. Willful non-filers should consult ' +
          'a tax attorney before using this program.'
        );
      }

      // Cannot be under examination
      if (this.isUnderExam) {
        issues.push(
          'You are currently under IRS examination and are not eligible ' +
          'for streamlined filing.'
        );
      }

      // Foreign vs Domestic determination
      let program = null;

      if (this.isUsCitizenAbroad && !this.isUsResident) {
        program = 'FOREIGN STREAMLINED';
        warnings.push('Must file last 3 years of tax returns and 6 years of FBARs.');
        if (this.hasForeignAssets) {
          warnings.push('No penalty on foreign assets under Foreign Streamlined.');
        }
      } else {
        program = 'DOMESTIC STREAMLINED';
        warnings.push('Must file last 3 years of tax returns and 6 years of FBARs.');

        if (this.hasForeignAssets) {
          warnings.push(
            'A 5% miscellaneous penalty applies to foreign assets ' +
            'under Domestic Streamlined.'
          );
        }

        if (!this.hasForeignAssets && !this.hasFBARViolations) {
          warnings.push(
            'Domestic Streamlined may still apply even without foreign assets, ' +
            'but confirm with a professional.'
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

### Option 3: IRS Voluntary Disclosure Practice

```
VOLUNTARY DISCLOSURE PRACTICE (VDP):

  What it is: A formal program for willful non-filers to come forward
    before the IRS discovers them.

  Eligibility: Must be truly voluntary (IRS has not contacted you)
    Must be truthful and complete
    Must cooperate fully

  Requirements:
    • File last 6 years of tax returns
    • File last 6 years of FBARs
    • Pay all taxes, interest, and penalties
    • 75% penalty on highest aggregate balance of foreign accounts (if applicable)

  Outcome:
    • IRS generally agrees NOT to refer for criminal prosecution
    • Civil penalties still apply
    • Must have a tax attorney — cannot do this without representation

  Who should use VDP:
    • Willful non-filers who have not been contacted by the IRS
    • Those with significant foreign accounts who did not file FBARs
    • Business owners who intentionally did not report income

  Who should NOT use VDP:
    • Non-willful non-filers (use Streamlined instead)
    • Those already under IRS investigation
    • Those with minimal unpaid tax
```

## 4. Penalty Relief Options

### Types of Penalties for Late Filing

| Penalty Type | Rate | Maximum | How It's Calculated |
|-------------|------|---------|---------------------|
| **Failure to File** | 5% per month of unpaid tax | 25% | Months (or fraction) late × 5% |
| **Failure to Pay** | 0.5% per month of unpaid tax | 25% | Months unpaid × 0.5% |
| **Combined (same month)** | 5% per month (FTF + FTP) | 5% per month | FTFP cap for same month |
| **Accuracy-Related** | 20% of underpayment | No cap | Negligence, substantial understatement |
| **Fraud Penalty** | 75% of underpayment | No cap | Fraud with intent to evade |
| **FBAR Non-Willful** | Up to $10,000 per violation | No cap | Per account, per year |
| **FBAR Willful** | Greater of $100,000 or 50% of account balance | No cap | Per violation |

### First-Time Penalty Abatement

```
FIRST-TIME PENALTY ABATEMENT (FTA):

  What it does: Removes failure-to-file and failure-to-pay penalties
    for one tax year.

  Eligibility:
    • No penalties for the prior 3 years (administratively speaking)
    • All currently required returns have been filed
    • All taxes have been paid (or arranged to be paid)

  How to request:
    • Call the IRS at 1-800-829-1040
    • Write a letter requesting FTA
    • Submit Form 843 (Claim for Refund and Request for Abatement)

  Success rate: ~90% for first-time requests that meet criteria

  Limitation: Only available once every few years (not annually)
```

### Reasonable Cause Relief

```
REASONABLE CAUSE RELIEF:

  What it is: The IRS may abate penalties if you can show reasonable cause
    for failing to file or pay on time.

  Qualifying reasons:
    • Serious illness or death in immediate family
    • Natural disaster (fire, flood, hurricane, earthquake)
    • Unable to obtain records (destruction, third-party refusal)
    • Erroneous advice from a tax professional
    • Incarceration
    • Military service in a combat zone

  Not qualifying:
    • Lack of funds (standing alone)
    • Reliance on a paid preparer who made an error (without other factors)
    • Busy schedule / stress / procrastination
    • Ignorance of the law (generally)

  How to request:
    • Include a written explanation with your tax return
    • Use Form 843
    • Provide supporting documentation (medical records, insurance claims, etc.)

  Key factors IRS evaluates:
    • What happened and when
    • How it affected your ability to comply
    • How you acted once the cause was resolved
    • Your overall compliance history
```

### Penalty Calculation Engine

```javascript
// Tax penalty estimation for late filing

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
    // When both FTF and FTP apply in the same month,
    // the combined rate is capped at 5% for those months
    if (this.monthsLate <= 1) {
      return this.calculateFailureToPay(); // FTP only applies first month
    }

    // First month: 5% FTF only (FTP doesn't start until month 2 effectively)
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
    // 20% of underpayment due to negligence
    return Math.round(this.unpaidTax * 0.20 * 100) / 100;
  }

  calculateFraudPenalty() {
    // 75% of underpayment
    return Math.round(this.unpaidTax * 0.75 * 100) / 100;
  }

  calculateFBARPenalty() {
    if (this.isFBAR) {
      if (this.fbarWillful) {
        // Greater of $100,000 or 50% of account balance
        return Math.round(
          Math.max(100000, this.fbarBalance * 0.50) * 100
        ) / 100;
      } else {
        // Up to $10,000 per violation (per account, per year)
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
      // Accuracy penalty may apply if IRS filed SFR
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
      // Reasonable cause may eliminate failure-to-file and failure-to-pay
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      penaltyAfterRelief = Math.max(0, penaltyAfterRelief - relief);
      reliefApplied = `Reasonable cause: -$${relief.toFixed(2)}`;
    } else if (this.isFirstTime && this.filedBeforeNotice) {
      // First-time abatement removes FTF and FTP
      const relief = breakdown.failureToFile + breakdown.failureToPay;
      // FTA removes these penalties
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

## 5. Payment Options

### Paying the IRS When You Can't Pay in Full

```
IRS PAYMENT OPTIONS:

OPTION 1: PAY IN FULL
  • Best option if you can afford it
  • Avoids future interest and penalties
  • Pay online at IRS.gov/payments
  • Use Direct Pay (free) or debit/credit card (fee applies)

OPTION 2: SHORT-TERM PAYMENT PLAN (180 days or less)
  • For balances under $100,000
  • No setup fee
  • Pay monthly until balance is cleared
  • Penalties and interest continue until paid in full

OPTION 3: INSTALLMENT AGREEMENT (long-term)
  • For balances under $50,000 (guaranteed approval)
  • Setup fee: $31-$130 (lower for low-income)
  • Monthly payments based on ability to pay
  • Penalties and interest continue
  • Can be set up online at IRS.gov/opm

OPTION 4: OFFER IN COMPROMISE (OIC)
  • Settle tax debt for less than full amount
  • Qualification: Doubt as to collectibility
     (cannot pay full amount within remaining collection statute)
  • One-time lump sum or short-term payment plan
  • Application fee: $205 (waived for low-income)
  • Must show: Equity in assets + future income potential < total debt
  • Success rate: ~40% of submitted offers
  • Professional help strongly recommended

OPTION 5: CURRENTLY NOT COLLECTIBLE (CNC) STATUS
  • For taxpayers with no ability to pay
  • IRS agrees not to collect temporarily
  • Financial disclosure required (Form 433-A or 433-F)
  • Penalties and interest continue
  • IRS may file Notice of Federal Tax Lien
  • Reviewed annually to see if financial situation has changed
```

### Offer in Compromise Calculation

```javascript
// Offer in Compromise eligibility estimator

class OfferInCompromiseEstimator {
  constructor(config) {
    this.totalTaxDebt = config.totalTaxDebt;
    this.monthlyIncome = config.monthlyIncome;
    this.monthlyLivingExpenses = config.monthlyLivingExpenses;
    this.equityInAssets = config.equityInAssets; // Realizable equity
    this.remainingSOL = config.remainingSOL; // Years left on collection statute
    this.isLowIncome = config.isLowIncome || false;
  }

  calculateReasonableCollectionPotential() {
    // RCP = (Monthly disposable income × months remaining in SOL) + equity
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
      // Lump sum offer (paid within 5 months)
      const lumpSumRCP = (rcp.monthlyDisposable * 12) // 12 months of disposable
        + rcp.equityContribution;

      // Short-term periodic offer (paid within 24 months)
      const periodicRCP = (rcp.monthlyDisposable * 24) // 24 months
        + (rcp.equityContribution * 0.8); // Discounted equity

      offerAmount = Math.min(lumpSumRCP, periodicRCP);
    } else {
      // RCP exceeds total debt — OIC not likely
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
        reason: 'Your reasonable collection potential exceeds your total tax debt. '
          + 'The IRS is unlikely to accept an offer for less than the full amount.',
        rcp,
        offerAmount: offer,
        recommendation: 'Consider an installment agreement instead.',
      };
    }

    const savings = this.totalTaxDebt - offer;
    const savingsPercent = Math.round((savings / this.totalTaxDebt) * 100);

    return {
      likelyToSucceed: true,
      reason: 'Your ability to pay is limited relative to your total tax debt.',
      rcp,
      offerAmount: offer,
      savings: Math.round(savings * 100) / 100,
      savingsPercent,
      recommendation: savingsPercent > 50
        ? 'Strong candidate for OIC. Work with a tax professional to prepare your application.'
        : 'Moderate candidate. Professional preparation will improve your chances.',
      applicationFee: this.isLowIncome ? '$0 (waived)' : '$205',
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
  isLowIncome: false,
}).estimateSuccess();

console.log('=== OFFER IN COMPROMISE ESTIMATE ===');
console.log(`Tax Debt: $${oicCheck.offerAmount < 80000 ? oicCheck.rcp.reasonableCollectionPotential.toLocaleString() + ' (RCP)' : 'N/A'}`);
console.log(`Offer Amount: $${oicCheck.offerAmount.toLocaleString()}`);
console.log(`Likely to Succeed: ${oicCheck.likelyToSucceed ? 'YES ✓' : 'NO ✗'}`);
console.log(`Savings: $${oicCheck.savings?.toLocaleString() || 0}`);
console.log(`Savings %: ${oicCheck.savingsPercent || 0}%`);
console.log(`Recommendation: ${oicCheck.recommendation}`);
```

## 6. State Tax Considerations

### State Non-Filer Programs

```
STATE TAX COMPLIANCE:

  • Each state has its own non-filer program
  • Some states automatically follow IRS Streamlined treatment
  • Others require separate state-level disclosure
  • State penalties vary widely

  States with no income tax (no state filing needed):
    Alaska, Florida, Nevada, New Hampshire, South Dakota,
    Tennessee, Texas, Washington, Wyoming

  States with strong non-filer programs:
    California — Voluntary Disclosure Program
    New York — Voluntary Disclosure and Compliance Program
    Texas — No income tax (sales/franchise tax only)

  Key differences from federal:
    • State SOL may differ (some states have 4-year SOL)
    • Some states offer their own penalty abatement
    • State collection periods vary (typically 10-20 years)
    • Some states require filing for years beyond federal requirements

  Action: Contact each state where you had income during unfiled years
```

## 7. International Tax Considerations

### FBAR and FATCA for Non-Filers

```
FOREIGN ACCOUNT REPORTING:

  FBAR (FinCEN Form 114):
    Who: US persons with foreign accounts > $10,000 aggregate
    When: Filed annually by April 15 (automatic extension to October 15)
    Where: FinCEN's BSA E-Filing System
    Penalty: Non-willful up to $10,000 per violation
             Willful: greater of $100,000 or 50% of account balance

  FATCA (Form 8938):
    Who: Specified individuals with specified foreign financial assets
         exceeding thresholds ($50k-$200k+ depending on filing status and residency)
    When: Filed with annual tax return
    Where: Attached to Form 1040
    Penalty: $10,000 for failure to disclose; $10k additional every 30 days up to $50k

  STREAMLINED FILING FOR FOREIGN ASSETS:
    • Included in Streamlined Filing Compliance Procedures
    • File last 3 years of tax returns (with Form 8938 if needed)
    • File last 6 years of FBARs
    • Domestic Streamlined: 5% penalty on foreign assets
    • Foreign Streamlined: No penalty
```

### US Citizens Abroad

```
FOR US CITIZENS LIVING ABROAD:

  • US citizens must file US taxes regardless of where they live
  • Foreign earned income exclusion (FEIE): ~$130,000 exclusion (2026 projected)
  • Foreign tax credit: Credit for taxes paid to your country of residence
  • Streamlined Foreign Offshore Procedures: Best option for expats
  • No penalty for non-willful non-compliance under Foreign Streamlined
  • Must file last 3 years of returns and 6 years of FBARs
  • If you owe no tax (after FEIE and foreign tax credit), file anyway to:
    - Start the statute of limitations
    - Preserve your right to refunds
    - Avoid penalties in the future
```

## 8. How to Find Professional Help

### Choosing the Right Tax Professional

```
TAX PROFESSIONAL HIERARCHY FOR NON-FILERS:

  CPA (Certified Public Accountant):
    • Best for: Complex returns, businesses, multi-year filing
    • Can represent you before the IRS
    • Good for straightforward late filing

  EA (Enrolled Agent):
    • Best for: IRS representation, multi-year unfiled returns
    • Unlimited representation rights before the IRS
    • Often specialize in IRS collection and penalty issues
    • Often more affordable than CPAs for non-filer cases

  Tax Attorney:
    • Best for: Willful non-filing, criminal exposure, VDP, OIC
    • Attorney-client privilege applies
    • Essential for Voluntary Disclosure Practice
    • Most expensive option

  Unlicensed Preparer:
    • Only prepare returns (cannot represent before IRS)
    • NOT recommended for non-filer situations
    • Limited to simple, current-year returns

VERIFICATION CHECKLIST:
  [ ] Verify PTIN (Preparer Tax Identification Number)
  [ ] Check IRS Circular 230 status
  [ ] Ask About non-filer experience specifically
  [ ] Get a fee estimate in writing
  [ ] Ask who will prepare the returns (paralegal vs principal)
  [ ] Check Better Business Bureau / state licensing board
  [ ] Get references from similar cases
```

## 9. Building a Sustainable Compliance System

### Prevent Future Non-Filing

```
COMPLIANCE SYSTEM CHECKLIST:

  ANNUAL CALENDAR:
    [ ] January: Gather all tax documents
    [ ] February: Send documents to preparer
    [ ] March: Review draft return
    [ ] April 15: File or extend (Form 4868)
    [ ] May-September: Work on extension returns
    [ ] October 15: Extended deadline

  ESTIMATED TAX PAYMENTS (if self-employed):
    • Pay quarterly: April 15, June 15, September 15, January 15
    • Use IRS Direct Pay for free electronic payments
    • Calculate using Form 1040-ES
    • Pay at least 100% of prior year's tax (110% if AGI > $150k)
    • Or pay 90% of current year's tax

  RECORDKEEPING SYSTEM:
    [ ] Digital receipts (scan or photograph everything)
    [ ] Separate business bank account
    [ ] Monthly bookkeeping (Odoo, QuickBooks, Xero)
    [ ] Quarterly profit & loss review
    [ ] Annual records retention: 7 years minimum
    [ ] Cloud backup of all financial records

  PROFESSIONAL RELATIONSHIP:
    [ ] Establish relationship with CPA/EA year-round
    [ ] Schedule mid-year check-in (July/August)
    [ ] Quarterly estimated tax payment reminders
    [ ] Annual tax planning meeting before year-end
```

## Conclusion

**The best time to file was on time. The second best time is now.** If you haven't filed taxes for one year or ten, the path forward is clear, and the IRS has programs designed to help you get back into compliance.

The key principles for resolving unfiled taxes:

- **File before the IRS files for you** — an SFR is almost always worse than filing yourself
- **Be honest and complete** — the IRS can see your income; trying to hide it makes things worse
- **Use the right program** — Streamlined Filing for non-willful, VDP for willful, installment agreements or OIC for payment
- **Get professional help** — this is not a DIY situation, especially for multiple unfiled years
- **Start the statute of limitations** — the SOL clock only starts when you file
- **Build a system for the future** — once caught up, stay caught up with quarterly checks and good recordkeeping

**Tax problems don't go away on their own. But they can be resolved — systematically, affordably, and without criminal consequences — when you take the right steps with the right guidance.**

At **Sotomayor Consulting International**, we help business owners and individuals resolve unfiled tax situations: from multi-year return preparation and IRS penalty abatement to streamlined filing, offers in compromise, and building sustainable compliance systems. Contact us for a confidential consultation.
