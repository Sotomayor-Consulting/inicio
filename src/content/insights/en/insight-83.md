---
title: "How Rental Income Is Taxed in the US: Complete Guide 2026"
description: "How rental income is taxed in the US"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Calculator and IRS tax forms with rental property icons, dollars, and depreciation graph"
---

**Rental income in the US** is taxed at the federal and state level, with specific rules for foreign non-resident investors. Understanding how rental property taxes work is essential to comply with the IRS, optimize your tax burden, and avoid penalties.

In this guide, we explain **how rental income is taxed in the US** in 2026: income, deductions, depreciation, forms for foreigners, FIRPTA, and tax optimization strategies with Stripe.

## 1. Who Pays Tax on Rental Income in the US?

### Resident vs. Non-Resident

| Type | Tax Definition | Taxation |
|------|---------------|----------|
| **Tax resident (Green Card or 183+ days)** | Taxed like any US citizen | Worldwide income |
| **Non-resident (foreigner without presence)** | Only US-sourced income taxed | Only US income |
| **Non-resident (with presence but < 183 days)** | Only US-sourced income taxed | Only US income |

### Are You Considered Non-Resident?

`
Substantial Presence Test:

You are a tax resident if:
- You were in the US 31+ days this year, AND
- 183+ days over 3 years (current x 1 + prior x 1/3 + 2nd prior x 1/3)

If you don't meet it: you are a non-resident → only US income taxed

For foreign investors:
- If you visit Florida 2-3 times a year (< 120 total days)
- You are not a tax resident
- You only pay tax on your US rental properties
- You use Form 1040-NR
`

## 2. What Counts as Rental Income?

### Taxable Income

| Item | Taxable? | Note |
|------|----------|------|
| **Monthly rent** | Yes | Main income |
| **Security deposit** | No | Until you keep it |
| **Late payment fees** | Yes | Considered income |
| **Utilities paid by tenant** | Yes | If over base rent |
| **Vacation rental (Airbnb)** | Yes | Same rules |
| **Seasonal rental** | Yes | Same rules |
| **Subsidies (Section 8)** | Yes | Taxable income |

### What Is NOT Income?

`
NOT considered taxable income:
- Security deposit (until used for damages)
- Expense reimbursements (tenant pays you back)
- Personal loans
- Inheritance or gifts (unrelated to the property)
`

`javascript
// Stripe: Rental income report for your tax return
// Stripe generates reports by tax period

// Get total income for the tax year
const balanceTransactions = await stripe.balanceTransactions.list({
  created: {
    gte: 1672531200, // 1 Jan 2026
    lte: 1704067199, // 31 Dec 2026
  },
});

// Calculate gross rental income
const grossRent = balanceTransactions.data
  .filter(t => t.type === 'payment')
  .reduce((sum, t) => sum + t.amount, 0);

console.log(Gross rental income 2026: {grossRent / 100});
`

## 3. Rental Deductions

### Allowed Deductions

| Deduction | Description | Example |
|-----------|-------------|---------|
| **Mortgage interest** | Loan interest on the property | ,000/year |
| **Depreciation** | Building wear and tear (27.5 years) | ,909/year |
| **Property tax** | Real estate taxes | ,000/year |
| **Insurance** | All premiums | ,500/year |
| **Repairs and maintenance** | Fixes, painting, plumbing | ,000/year |
| **Property manager** | Management fees (8-12%) | ,600/year |
| **HOA / Condo fees** | Association dues | ,400/year |
| **Utilities** | If paid by owner | ,200/year |
| **Travel** | Travel to manage the property | ,000/year |
| **Legal and accounting** | Lawyer, CPA | ,500/year |
| **Marketing** | Advertising, photos, listing | /year |
| **Improvements (not repairs)** | Depreciated, not deducted directly | Per useful life |

### Repairs vs. Capital Improvements

| Type | Definition | Tax Treatment |
|------|-----------|---------------|
| **Repair** | Maintains operating condition | 100% deductible this year |
| **Improvement** | Adds value, extends useful life | Depreciated (27.5 years or more) |

`
Examples:

REPAIRS (immediate deduction):
- Fixing a leak ()
- Painting a room ()
- Repairing AC ()
- Replacing a broken window ()

IMPROVEMENTS (depreciation):
- New roof (,000 → 27.5 years)
- New kitchen (,000 → 27.5 years)
- Pool (,000 → 27.5 years)
- Solar system (,000 → 5 years)
`

## 4. Depreciation (The Biggest Tax Benefit)

### What Is Depreciation?

Depreciation is the most valuable deduction for rental properties. It recognizes that the building wears out over time, allowing you to deduct a portion each year without spending cash.

| Property Type | Useful Life | Annual Depreciation |
|--------------|------------|-------------------|
| **Residential (rental)** | 27.5 years | 3.636% of building value |
| **Commercial** | 39 years | 2.564% of building value |
| **Land improvements** | 15 years | 6.667% |
| **Equipment (furniture)** | 5-7 years | 14.29-20% |

### Depreciation Calculation

`
Example:
Property purchased for: ,000
Land value: ,000 (not depreciable)
Building value: ,000 (depreciable)

Annual depreciation:
,000 / 27.5 = ,909/year

Tax benefit:
- Without depreciation: Net income ,000 → Tax ,300 (22%)
- With depreciation: Net income ,091 → Tax  (22%)
- Tax savings: ,400/year WITHOUT spending a cent
`

`javascript
// Stripe Tax: Stripe can help with tax calculations
// but depreciation is handled by your CPA

// Stripe Dashboard → Reports → Tax summary
// Stripe generates gross income reports for your CPA

// Export data for your CPA
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200, // 1 Jan 2026
    interval_end: 1704067199,   // 31 Dec 2026
  },
});
`

### Depreciation Recapture

`
When selling the property:

If you depreciated ,000 over 5 years:
- When you sell, the IRS "recaptures" the depreciation
- Recaptured depreciation is taxed at 25% (max)
- Remaining gain is taxed as capital gains (0-20%)

Example:
Purchase price: ,000
Depreciation taken: ,000
Sale price: ,000

Total gain: ,000
  - Depreciation recapture: ,000 → 25% = ,500
  - Capital gain: ,000 → 20% = ,000
  - Total tax: ,500

Without depreciation:
  - Capital gain: ,000 → 20% = ,000

Worth it? Yes, because you deferred taxes for years.
`

## 5. Passive Activity Loss Rules (PAL)

### What Is a Passive Activity?

Rental properties are considered a "passive activity" unless you qualify as a real estate professional.

| Type | Definition | Loss Deduction |
|------|-----------|---------------|
| **Passive activity** | Rental (default) | Only against passive income |
| **Real estate professional** | 750+ hours/year + 50% of your time | Can deduct against active income |

### Limitations for Foreigners

`
Rule: Passive losses can only offset passive income.

If your property generates a tax loss (thanks to depreciation):
- You cannot use that loss against your salary in your home country
- The loss is "suspended" until:
  a) You have passive income from another source
  b) You sell the property (all suspended losses are released)

Exception: If you qualify as a Real Estate Professional
- Must work 750+ hours/year in real estate
- Must pass the material participation test
- Difficult for foreigners without US presence

Strategy: Don't rely on losses to reduce other income.
Depreciation is still valuable as tax deferral.
`

## 6. Tax Forms for Foreigners

### Main Forms

| Form | Who Uses It | Purpose |
|------|------------|---------|
| **1040-NR** | Non-resident alien | Annual tax return |
| **Schedule E** | All rental property owners | Report income and expenses |
| **1042-S** | Payer to foreigner | Report withheld income |
| **W-8BEN** | Foreigner | Certify non-resident status |
| **W-8ECI** | Foreigner | Income connected to US business |
| **8288-B** | Buyer from foreigner | FIRPTA withholding exemption |
| **ITIN application (W-7)** | Foreigner without SSN | Apply for ITIN |

### Form 1040-NR for Foreign Investors

`
Form 1040-NR (simplified version):

Section A: US-sourced income
  ├── Rental income: Schedule E
  ├── Bank interest: If applicable
  └── Capital gain: Form 8949 + Schedule D

Section B: Deductions
  ├── Rental-related deductions (Schedule E)
  └── Standard deduction: NOT available for NR

Section C: Tax
  ├── Marginal rate (10-37%) for rents
  ├── FIRPTA: 15% withheld when selling
  └── Tax credits: If applicable

Key dates:
- April 15: Deadline (if you were in the US)
- June 15: If no income subject to withholding
- Extension: October 15 (Form 4868)
`

### ITIN: How to Get It

`
ITIN (Individual Taxpayer Identification Number):
- Alternative to SSN for foreigners
- Required to file taxes
- Does not authorize US work

Process:
1. Complete Form W-7 (IRS)
2. Attach original or certified passport
3. Submit with your first tax return (1040-NR)
4. Wait 7-11 weeks

Submission options:
- Mail to IRS
- In person at IRS Taxpayer Assistance Center
- Through Certifying Acceptance Agent (recommended for foreigners)

Recommendation: Get ITIN BEFORE selling a US property.
`

## 7. Withholding for Non-Residents

### Withholding at Source

| Income Type | Withholding Rate | Form |
|------------|-----------------|------|
| **Rental income (gross)** | 30% (without W-8ECI) | 1042-S |
| **Net rental income (with W-8ECI)** | 0% (you file 1040-NR) | W-8ECI |
| **Bank interest** | 0% (portfolio interest exemption) | W-8BEN |
| **Dividends** | 30% (or lower with treaty) | W-8BEN |
| **Capital gain (sale)** | 15% (FIRPTA) | 8288-B |

### W-8ECI vs. W-8BEN: The Key Decision

`
Option 1: W-8BEN (30% withholding on gross income)
├── Stripe withholds 30% from EACH rent payment
├── You don't file taxes annually
├── The 30% is your final tax (no refund)
├── NO deduction of expenses
└── NO depreciation

Option 2: W-8ECI (you file 1040-NR yourself)
├── Stripe withholds 0% at source
├── YOU MUST file taxes annually (1040-NR)
├── You pay tax only on NET income
├── You can deduct expenses, depreciation, interest
└── Generally you pay LESS than with W-8BEN

RECOMMENDATION: Use W-8ECI if your rental property
has significant expenses (mortgage, depreciation).
`

`javascript
// Stripe: Configure W-8ECI to avoid 30% withholding

// Stripe Dashboard → Settings → Tax
// Add W-8ECI so Stripe does not withhold 30%

// Stripe will verify your tax status
// Once approved, Stripe does not withhold at source

// Stripe Tax: Calculate taxes with your tax settings
const taxSettings = await stripe.tax.settings.retrieve();
// Verify withholding is configured correctly
`

## 8. FIRPTA: Tax When Selling

### What Is FIRPTA?

FIRPTA (Foreign Investment in Real Property Tax Act) requires the buyer to withhold 15% of the sale price if the seller is a non-resident foreigner.

| Item | Detail |
|------|--------|
| **Withholding** | 15% of the TOTAL sale price |
| **Who withholds** | Buyer (escrow / title company) |
| **Deadline** | 20 days after closing to IRS |
| **Form** | 8288 + 8288-A |
| **Exemption** | < ,000 and buyer uses as residence |

### How to Request Reduction or Exemption

`
You can request a Withholding Certificate (Form 8288-B)
to reduce or eliminate withholding if:

1. Property sells for LESS than ,000
   AND the buyer uses it as residence (not investment)
   → Automatic exemption

2. Actual gain is less than 15% of the price
   → Request reduction (Form 8288-B)
   → Must submit before closing
   → IRS takes 30-60 days to process

3. You sell at a loss
   → You can request  withholding

Example:
Sale price: ,000
Cost basis: ,000
Actual gain: ,000

Without certificate: ,000 withholding (15% of )
With certificate: ,000 withholding (15% of )
`

### Step by Step to Sell as a Foreigner

`
1. BEFORE LISTING:
   - Hire FIRPTA-specialized CPA
   - Get ITIN (if you don't have one)
   - Review structure (LLC vs personal)

2. WHEN SIGNING CONTRACT:
   - Inform buyer you are foreign
   - Buyer will withhold 15% of price
   - Submit 8288-B if reduction applies

3. AT CLOSING:
   - Title company withholds 15% and sends to IRS
   - You receive 8288-A as proof

4. AFTER CLOSING:
   - Report sale on 1040-NR
   - Calculate actual gain tax
   - Request refund of excess withholding
   - IRS refunds in 6-12 months
`

## 9. State Taxes

### States With No Income Tax

| State | State Income Tax | Approx. Property Tax |
|-------|----------------|--------------------|
| **Florida** | 0% | 0.8-1.2% |
| **Texas** | 0% | 1.6-2.2% |
| **Wyoming** | 0% | 0.5-0.7% |
| **Nevada** | 0% | 0.6-0.9% |
| **Tennessee** | 0% | 0.6-0.9% |

### States With Income Tax

| State | Max Rate | Note |
|-------|---------|------|
| **California** | 13.3% | High, but strong appreciation |
| **New York** | 10.9% | Higher property tax |
| **Illinois** | 4.95% | High property tax (~2%) |
| **Massachusetts** | 5% | Medium property tax |

> For foreign investors: Florida and Texas are the most popular states because they have no state income tax. You only pay property tax (~1% of value annually).

## 10. Tax Optimization Strategies

### Legal Strategies

| Strategy | Description | Potential Savings |
|----------|------------|-----------------|
| **Depreciation** | Deduct 3.636% of building value yearly | ,000-15,000/year |
| **Cost Segregation Study** | Accelerate component depreciation (5-15 years) | ,000-50,000 first year |
| **1031 Exchange** | Defer capital gains by selling and reinvesting | Unlimited |
| **Self-directed IRA** | Invest in properties from your IRA | Full deferral |
| **LLC + S-Corp election** | Save self-employment tax | ,000-5,000/year |
| **Bonus depreciation** | Accelerated equipment depreciation | Variable |
| **Travel deductions** | Travel to manage properties | ,000-10,000/year |

### Cost Segregation Study

`
What is it? A study that identifies property components
that can be depreciated faster (5, 7, or 15 years).

Example:
Property: ,000 (building , land )

Without cost segregation:
- Annual depreciation: ,909 ( / 27.5)
- 10 years: ,090

With cost segregation (,000 identified at 5 years):
- 5-year components (): ,000/year
- Remaining building (): ,818/year
- Total yearly: ,818
- 10 years: ,180

Additional savings: ,090 over 10 years
Study cost: ,000-8,000
`

`javascript
// Stripe: Reports for your CPA
// Stripe Dashboard → Reports → Export transactions

// Export for accounting (CSV)
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
`

## 11. Common Rental Tax Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| **Not filing taxes** | Fines, interest, IRS seizure | Always file |
| **Not using W-8ECI** | Stripe withholds 30% of ALL income | Submit W-8ECI |
| **Not depreciating** | You overpay taxes | Always depreciate |
| **Improvement vs repair error** | IRS can audit and reclassify | Consult CPA |
| **No ITIN** | Can't file or recover FIRPTA | Apply for ITIN |
| **Mixing personal and LLC accounts** | Lose LLC protection | Separate accounts |
| **Not reporting sale (FIRPTA)** | Buyer reports anyway, IRS investigates | Report the sale |
| **Not paying estimated taxes** | Penalties for underpayment | Pay quarterly estimates |

## 12. Frequently Asked Questions

### Do I have to file US taxes if my property generates a loss?

Yes, you must file even if you have a loss. The IRS requires annual filing if you have US-sourced income. The loss carries forward to future years.

### What tax rate do I pay on rental income?

Net rental income is taxed at marginal rates of 10-37% (same as US citizens). Long-term capital gains are taxed at 0-20%.

### Does Stripe report my income to the IRS?

Yes. Stripe issues Form 1099-K if your income exceeds ,000 (or the applicable threshold). Stripe reports all transactions to the IRS.

### Can I deduct travel from my country to Florida?

Yes, if the primary purpose of the trip is to manage your property. You can deduct flights, hotel, meals (50%), and local transportation.

### What happens if I don't file?

The IRS can seize your property, impose penalties of 25-75% of unpaid tax, and Stripe may freeze your account.

### Do I need a US CPA?

Yes, especially if you are a foreigner. A CPA specializing in international tax can save you thousands and prevent IRS problems.

## 13. Tax Compliance Checklist

- [ ] Apply for ITIN (if you don't have SSN)
- [ ] Submit W-8ECI (if applicable, to avoid 30% withholding)
- [ ] Configure Stripe correctly (no withholding)
- [ ] Maintain separate accounting (LLC)
- [ ] Document all deductible expenses
- [ ] Calculate depreciation annually
- [ ] File 1040-NR + Schedule E each year
- [ ] Pay estimated taxes (if applicable)
- [ ] Report sale under FIRPTA
- [ ] Hire specialized CPA
- [ ] Keep records for 7 years
- [ ] Review double taxation treaties (if applicable)

## Conclusion

**Rental income in the US** is taxed favorably for foreign investors if you understand the rules. Depreciation is your greatest ally: it allows you to generate tax losses without spending cash, drastically reducing your tax bill.

The key is submitting the correct forms (W-8ECI to avoid 30% withholding, 1040-NR to file, Schedule E to detail income and expenses) and working with a CPA specializing in international tax.

Stripe, configured with your LLC EIN and W-8ECI, allows you to collect rents without withholding and generates the reports your CPA needs for your annual return.

At **Sotomayor Consulting International**, we help you with US rental property tax compliance: from obtaining ITIN and submitting W-8ECI to preparing 1040-NR with Schedule E, depreciation, and FIRPTA compliance. Contact us for personalized consulting.
