---
title: "What to Review Before Investing in the US as a Foreigner: 2026 Guide"
description: "What to review before investing in the US as a foreigner"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Pre-investment checklist for foreigners in the US: legal structure, taxes, financing, location, insurance, Stripe"
---

**Investing in the US as a foreigner** requires reviewing a series of critical factors before committing capital: from legal and tax structure to financing, location, insurance, local restrictions, and exit strategy. A mistake in any of these points can cost thousands of dollars.

In this guide, we present **what to review before investing in the US as a foreigner** in 2026: a complete checklist with 10 critical areas every investor must evaluate before buying.

## 1. Review Your Investor Profile

### Initial Self-Assessment

| Question | Why It Matters |
|----------|---------------|
| **Do you have SSN or ITIN?** | Determines financing options and tax forms |
| **Do you have US credit history?** | Affects rate and loan type |
| **What is your total budget?** | Defines property range and down payment |
| **Investment timeline?** | Short (flip) vs. long (rental) changes everything |
| **From which country are you investing?** | Affects tax treaties, structure and banking |
| **Do you have real estate experience?** | Determines need for partner or property manager |
| **Goal: income, appreciation or both?** | Defines location, property type and financing |

### Calculate Your Real Capacity

```
CASH AVAILABLE:
- Savings for down payment: $__________
- Closing costs (3-5% of price): $__________
- Reserves (3-12 months): $__________
- Repairs/renovations: $__________
- Total needed: $__________

PROJECTED MONTHLY INCOME:
- Estimated rent: $__________
- Vacancy (5-10%): -$__________
- Net rent: $__________

PROJECTED MONTHLY EXPENSES:
- Mortgage (P&I): $__________
- Property tax: $__________
- Insurance: $__________
- HOA: $__________
- Property management (8-12%): $__________
- Maintenance (10% of rent): $__________
- Total expenses: $__________

DSCR = Net rent / Total expenses (with mortgage)
DSCR = $__________ / $__________ = __________
✓ You need DSCR ≥ 1.0, ideal ≥ 1.25
```

```javascript
// Stripe: Use Stripe to project income
// if you already have similar properties operating

// Analyze historical transactions
const transactions = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 31536000 },
});

const totalIncome = transactions.data
  .filter(t => t.payment_status === 'paid')
  .reduce((sum, t) => sum + t.amount_total, 0);

const avgMonthly = (totalIncome / 100) / 12;
console.log(`Average monthly income: $${avgMonthly.toFixed(2)}`);
```

## 2. Review the Legal Structure

### Structure Options

| Structure | Protection | Privacy | Estate Tax | Annual Cost | Complexity |
|-----------|-----------|---------|-----------|-------------|-----------|
| **Personal name** | ❌ None | ❌ Public | ✅ Exposed | $0 | Minimal |
| **LLC only** | ✅ Limited | ✅ LLC is owner | ⚠️ Exposed (> $60K) | $500-1,000 | Low |
| **LLC + International holding** | ✅ High | ✅ High | ❌ Protected | $2,000-4,000 | Medium |
| **LLC + Holding + Trust** | ✅ Maximum | ✅ Maximum | ❌ Protected | $4,000-8,000 | High |

### Pre-Purchase Legal Checklist

```
Before making an offer, review:

STRUCTURE:
- [ ] Do I need an LLC in this state?
- [ ] Do I form the LLC before or after buying?
- [ ] Do I need an international holding for estate tax?
- [ ] What does the tax treaty with my country say?

DOCUMENTATION:
- [ ] Do I have an IRS EIN?
- [ ] Do I have ITIN or SSN?
- [ ] Do I have a US bank account?
- [ ] Do I have a registered agent for the LLC?
```

## 3. Review the State and Location

### State Comparison

| Factor | Florida | Texas | New York | California |
|--------|---------|-------|----------|------------|
| **State income tax** | 0% | 0% | 4-10.9% | 1-13.3% |
| **Property tax** | 0.8-1.2% | 1.6-2.2% | 1.4% | 0.77% |
| **Transfer tax (purchase)** | 0.7% | 0.5-1.5% | 1.825% | 0.11% |
| **Short-term rental** | ✅ Allowed* | ✅ Allowed* | ⚠️ Restricted | ⚠️ Restricted |
| **LLC protection** | ✅ Good | ✅ Good | ✅ Good | ⚠️ Medium |
| **Hurricane insurance** | High | Medium | Low | Low |
| **Cost of living** | Medium | Low | High | Very high |

### Micro-Location: What to Review in the Neighborhood

```
When evaluating a specific property, review:

1. ZONING
   - Residential, commercial or mixed use?
   - Does it allow short-term rental?
   - Are there HOA restrictions?

2. RENTAL DEMAND
   - Vacancy rate in the area
   - Average rent by property type
   - Short-term rental occupancy (AirDNA, Mashvisor)
   - Proximity to employers, schools, transportation

3. NATURAL RISKS
   - Flood zone? (FEMA flood map)
   - Hurricane zone?
   - History of natural disasters?

4. INFRASTRUCTURE
   - Property age (roof, HVAC, plumbing, electrical)
   - School quality (affects resale value)
   - Future development (new construction, employers)
```

```javascript
// Stripe: To validate demand, you can create
// a landing page with Stripe to measure interest

// But more practical: use Stripe with existing property data
// Income report by zip code
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    columns: ['created', 'amount', 'description', 'customer'],
    interval_start: Math.floor(Date.now() / 1000) - 7776000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});
```

## 4. Review Financing

### Loan Options by Profile

| Your Profile | Best Option | Down Payment | Rate (2026) |
|-------------|-------------|-------------|-------------|
| **No SSN/ITIN, no US credit** | DSCR Loan | 25-35% | 7-9% |
| **With ITIN, no US credit** | DSCR Loan / ITIN Mortgage | 20-30% | 7-10% |
| **With SSN, good US credit** | Conventional / DSCR | 20-25% | 6-8% |
| **Cash available** | Cash (then refinance) | 100% | 0% |
| **Flip/short-term** | Hard Money | 20-30% | 10-15% |

### Key Questions for the Lender

```
Before accepting a loan, ask:

1. RATE AND COSTS
   - What is the fixed vs. adjustable rate?
   - How many origination points?
   - Full APR (includes all fees)?

2. REQUIREMENTS
   - Do you accept ITIN or only SSN?
   - What is the minimum DSCR required?
   - How many months of reserves?

3. RESTRICTIONS
   - Is there a prepayment penalty? For how long?
   - Does it allow cash-out refinance?
   - Does it allow short-term rental?

4. TIMING
   - How long until closing?
   - How long for pre-approval?
```

### Monthly Payment Calculator

```
For a $400,000 property with DSCR loan:

Price: $400,000
Down payment (30%): $120,000
Loan amount: $280,000
Rate: 8%
Term: 30 years

Monthly payment (P&I): $2,055
Property tax (1%): $333/month
Insurance: $333/month
Total PITI: $2,721/month

Rent needed for DSCR 1.25:
$2,721 x 1.25 = $3,401/month in rent

If the property rents for $3,500/month:
DSCR = $3,500 / $2,721 = 1.29 ✓
```

## 5. Review Taxes

### Taxes Affecting Your Investment

| Tax | When | Rate | Who |
|-----|------|------|-----|
| **Property tax** | Annual | 0.8-2.2% (per state) | All owners |
| **Income tax (rents)** | Annual (1040-NR) | 10-37% | Foreigners with rents |
| **FIRPTA** | Upon sale | 15% withholding | Foreigners |
| **Capital gains** | Upon sale | 0-20% | Everyone |
| **Depreciation recapture** | Upon sale | Up to 25% | Everyone |
| **Estate tax** | Upon death | 18-40% | Foreigners > $60K |

### Key Tax Questions

```
Before investing, review with your CPA:

1. TAX STRUCTURE
   - Should I file W-8ECI to avoid 30% withholding?
   - What deductions apply (depreciation, repairs, interest)?
   - Do I need to pay quarterly estimated taxes?

2. TAX TREATY
   - Does my country have a treaty with the US?
   - Does the treaty reduce FIRPTA or capital gains?
   - Can I credit US taxes paid?

3. ESTATE TAX
   - Do my US assets exceed $60,000?
   - Do I need an international holding or trust?
   - What happens to my heirs?

4. PLANNING
   - Should I do cost segregation?
   - Is a 1031 exchange better when selling?
   - When should I start filing?
```

## 6. Review Insurance

### Minimum Required Insurance

| Type of Insurance | Mandatory | Annual Cost |
|-----------------|-----------|-------------|
| **Property insurance (dwelling)** | ✅ Yes (if mortgaged) | $1,500-8,000 |
| **Hurricane/windstorm** | ✅ Yes (in risk zones) | $1,000-5,000 additional |
| **Flood insurance** | ⚠️ If in flood zone (FEMA) | $400-2,000 |
| **Liability insurance** | ✅ Highly recommended | $500-2,000 |
| **Umbrella policy** | ⚠️ Recommended (2+ properties) | $300-1,000 |

### Recommended Coverage by Property Type

```
SINGLE FAMILY (LTR):
- Property insurance: Replacement cost
- Liability: $1-2M
- Hurricane deductible: 2% (no more than 5%)

CONDOMINIUM:
- Walls-in coverage (interior)
- HOA master policy covers exterior
- Liability: $500K-1M
- Loss assessment coverage

SHORT-TERM RENTAL (Airbnb):
- Property insurance: Special STR coverage
- Liability: $2M+ (higher risk)
- Loss of income: Covers cancellations
- Hurricane: Required

COMMERCIAL:
- Property insurance: Replacement cost
- Liability: $2-5M
- Business interruption
- Workers comp (if you have employees)
```

```javascript
// Stripe: Automate insurance payments
// so your policy never lapses

const insuranceSubscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}',
  items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Property Insurance - Florida LLC',
        description: 'Annual policy paid monthly',
      },
      unit_amount: 35000, // $350/month
      recurring: { interval: 'month' },
    },
  }],
});
```

## 7. Review Local Legal Restrictions

### What You Must Investigate

| Restriction | Where to Check | Why It Matters |
|------------|---------------|----------------|
| **Zoning** | County zoning department | Determines permitted use |
| **HOA restrictions** | Community CC&Rs | May prohibit rentals |
| **Short-term rental laws** | City/County ordinances | Some areas prohibit Airbnb |
| **Rent control** | Local laws | Limits rent increases |
| **Business license** | City/county | Required for renting |
| **Homestead exemption** | Property appraiser | Only for residence, not investment |

### Example: Short-Term Rental Restrictions in Florida

```
CITIES WITH RESTRICTIONS IN FLORIDA 2026:

Miami Beach:
- Prohibited in residential zones (less than 6 months + 1 day)
- Fines up to $20,000 per violation
- Mandatory registration

Orlando:
- Allowed with registration
- Limit of 2 units per owner in residential areas
- Tourist Development Tax: 6%

Tampa:
- Allowed with registration
- No day limits
- Safety inspection required

Fort Lauderdale:
- Allowed only in commercial zones
- Prohibited in most residential zones

Key West:
- 28-day minimum rental per stay
- Mandatory registration
- Limited license cap
```

## 8. Review Property Management

### Self-Manage vs. Hire

| Aspect | Self-Manage | Property Manager |
|--------|------------|-----------------|
| **Cost** | 0% (your time) | 8-12% of rent |
| **Control** | Total | Limited |
| **Time** | 5-15 hours/week | ~1 hour/week |
| **Language** | Need English | They handle it |
| **Availability** | 24/7 (emergencies) | 24/7 (professional) |
| **Tenants** | You find them | They find them |
| **Maintenance** | You coordinate | They coordinate |
| **Legal** | You handle evictions | They have attorneys |

### Questions for a Property Manager

```
Before hiring a property manager, ask:

EXPERIENCE:
- How many years in business?
- How many properties do you manage?
- Do you work with foreign owners?
- Do you have a Florida real estate license?

SERVICES:
- Does it include marketing and listing?
- How do you screen tenants? (background check, credit check)
- How do you handle emergency repairs?
- How often do you inspect the property?

COSTS:
- What is the management percentage?
- Do you charge a leasing fee (1 month rent)?
- Do you charge a markup on repairs?
- Is there an eviction fee?

REPORTS:
- Do you provide monthly income/expense reports?
- Do you integrate with Stripe for collections?
- Do you provide documentation for taxes?
```

## 9. Review the Exit Strategy

### Exit Options

| Strategy | Timeline | Taxes | Complexity |
|----------|---------|-------|-----------|
| **Sell on the market** | 3-12 months | FIRPTA + capital gains | Low |
| **1031 Exchange** | 45-180 days | Defer taxes | Medium |
| **Sell the LLC (membership interest)** | 30-60 days | Potentially no FIRPTA | High |
| **Refinance (cash-out)** | 30-60 days | No tax (not a sale) | Low |
| **Rent and hold** | 5+ years | Depreciation + appreciation | Low |
| **Donate to heirs** | Upon death | Estate tax | High |

### Exit Questions

```
Before buying, ask yourself:

1. When do you plan to sell?
   - Less than 2 years: better flip or hard money
   - 2-5 years: DSCR with refinance plan
   - 5+ years: buy & hold with depreciation

2. How does FIRPTA affect your exit?
   - 15% withheld on total sale price
   - You can request reduction (8288-B)
   - 1031 Exchange defers the tax

3. Will you sell the property or the LLC?
   - Sell property: FIRPTA 15%
   - Sell LLC: might not apply FIRPTA
   - Sell holding: outside US jurisdiction

4. How does the sale affect your structure?
   - If you sell one LLC, structure stays intact
   - If you sell all, you can dissolve the structure
   - If you change states, you need a new LLC
```

## 10. Review Documentation and Timeline

### Documents You Need

```
PERSONAL DOCUMENTATION:
- [ ] Valid passport
- [ ] ITIN or SSN (IRS letter)
- [ ] Proof of address in your country
- [ ] Bank references
- [ ] Proof of income (if applicable)

STRUCTURE DOCUMENTATION:
- [ ] LLC certificate of formation
- [ ] IRS EIN (CP 575 letter)
- [ ] LLC Operating Agreement
- [ ] Registered Agent agreement
- [ ] LLC bank account
- [ ] Stripe account configured

PURCHASE DOCUMENTATION:
- [ ] Pre-approval letter from lender
- [ ] Bank statements (available funds)
- [ ] Proof of funds source
- [ ] Purchase contract reviewed by attorney

TAX DOCUMENTATION:
- [ ] W-7 (ITIN application)
- [ ] W-8ECI (for bank/lender)
- [ ] W-9 of the LLC
- [ ] Tax treaty (if applicable)
```

### Typical Timeline for a Foreigner

```
MONTH 1: PREPARATION
- Week 1-2: Define budget and strategy
- Week 2-3: Form LLC and obtain EIN
- Week 3-4: Apply for ITIN (if you don't have one)
- Week 4: Open bank account

MONTH 2: SEARCH AND PRE-APPROVAL
- Week 1-2: Get pre-approval from lender
- Week 2-3: Search properties with local agent
- Week 3-4: Visit properties (virtual or in person)

MONTH 3: OFFER AND DUE DILIGENCE
- Week 1: Make offer
- Week 2: Due diligence (inspection, title, HOA docs)
- Week 3: Finalize financing
- Week 4: Close purchase

MONTH 4: POST-CLOSING
- Week 1: Set up Stripe
- Week 2: Hire property manager (if applicable)
- Week 3: List property for rent
- Week 4: First tenants
```

## 11. Frequently Asked Questions Pre-Investment

### How much money do I need to start?

Minimum $100,000-150,000 for a $400,000 property (25-30% down + closing costs + reserves). If you have less, consider cheaper markets (Midwest, inland Texas).

### Can I invest without visiting the US?

Yes, it is common. You can do virtual due diligence (video tour, local inspector, trusted agent). However, visiting at least once is recommended.

### How long does the whole process take?

2-4 months from deciding to invest to closing the purchase. Forming LLC and getting ITIN takes 4-8 weeks. Searching and closing takes another 4-8 weeks.

### What if I don't speak English?

You need a team that speaks your language: bilingual agent, CPA who speaks Spanish/Portuguese, bilingual property manager. Many professionals in Florida serve Latin American investors.

### Is Stripe mandatory for collecting rent?

Not mandatory, but it is the best option: automatically accepts tenant payments, generates reports for taxes, integrates with property management, and prevents mixing rents with personal finances.

### What is the most common beginner mistake?

Buying without legal structure (no LLC), without understanding FIRPTA, without considering estate tax, and without enough reserves for emergencies (repairs, vacancy, hurricanes).

## 12. Definitive Pre-Investment Checklist

### PHASE 1: PLANNING (1 month before)
- [ ] Define total budget (purchase + costs + reserves)
- [ ] Choose strategy (LTR, STR, flip, buy & hold)
- [ ] Select target state and city
- [ ] Research state taxes (property tax, income tax)
- [ ] Consult with international CPA
- [ ] Consult with real estate attorney

### PHASE 2: LEGAL STRUCTURE (2 months before)
- [ ] Form LLC in the investment state
- [ ] Obtain IRS EIN (CP 575)
- [ ] Apply for ITIN (W-7) if you don't have one
- [ ] Open US bank account in LLC's name
- [ ] Set up Stripe on the LLC
- [ ] Evaluate need for international holding
- [ ] Evaluate need for trust

### PHASE 3: FINANCING (6 weeks before)
- [ ] Request pre-approval from 2-3 lenders
- [ ] Compare rates, points, and prepayment penalties
- [ ] Have funds ready in US account
- [ ] Prepare source of funds documentation

### PHASE 4: SEARCH AND DUE DILIGENCE (3-4 weeks)
- [ ] Hire local real estate agent
- [ ] Verify zoning and HOA restrictions
- [ ] Request property inspection
- [ ] Check flood zone (FEMA map)
- [ ] Get insurance quotes (property, hurricane, flood, liability)
- [ ] Verify rental demand in the area
- [ ] Calculate projected DSCR

### PHASE 5: CLOSING (1-2 weeks)
- [ ] Review purchase contract with attorney
- [ ] Confirm lender funding
- [ ] Transfer funds to title/escrow
- [ ] Sign closing documents
- [ ] Register LLC as owner
- [ ] Activate Stripe for rent collection

### PHASE 6: POST-CLOSING (first month)
- [ ] Hire property manager (or set up self-management)
- [ ] List property for rent
- [ ] Set up automatic mortgage payment
- [ ] Set up automatic insurance payment
- [ ] File W-8ECI to avoid 30% withholding
- [ ] Set tax reminder (1040-NR + Schedule E)

## Conclusion

**Reviewing all these factors before investing in the US** makes the difference between a successful investment and an expensive lesson. A prepared investor reviews their legal structure, available financing, applicable taxes, necessary insurance, local restrictions, property management, exit strategy, and has all documentation in order.

Real estate investment in the US offers incredible opportunities for foreigners, but success lies in the details you review before committing your capital. Take the necessary time to evaluate each point in this guide.

At **Sotomayor Consulting International**, we accompany you at every step of your investment: from initial planning and legal structure to Stripe setup, lender connections, property selection, and ongoing advisory. Contact us for a personalized consultation.
