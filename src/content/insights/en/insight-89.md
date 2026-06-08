---
title: "Real Estate as a Migration Vehicle to the US: 2026 Guide"
description: "Real estate as a migration vehicle to the US"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Map of the US with migration route: E-2, EB-5, L-1 visas, and how real estate investment opens migration pathways"
---

**Real estate as a migration vehicle to the US** is an increasingly used strategy by foreign investors seeking a work visa or residency through property investment. From the E-2 visa (treaty investor) to the EB-5 (immigrant investor), through the L-1 (intracompany transfer), real estate can be the key to living and working legally in the US.

In this guide, we explain **how to use real estate as a migration vehicle to the US** in 2026: which visas allow property investment, requirements, minimum amounts, timelines, and how to structure your investment to maximize your immigration chances.

## 1. Visas That Allow Real Estate Investment

### Overview

| Visa | Type | Minimum Amount | Timeline | Allows Work | Path to Green Card |
|------|------|--------------|----------|------------|-------------------|
| **E-2** | Non-immigrant | $100,000+ (recommended) | 2-5 years (renewable) | ✅ Yes | ❌ No direct |
| **EB-5** | Immigrant | $800,000-$1,050,000 | 2 years conditional → permanent | ✅ Yes | ✅ Yes |
| **L-1A** | Non-immigrant | No minimum (active company) | 1-7 years | ✅ Yes | ✅ Yes (EB-1C) |
| **B-1/B-2** | Visitor | No minimum | 6 months | ❌ No | ❌ No |
| **F-1 (OPT)** | Student | No minimum | 1-3 years | ⚠️ Limited | ⚠️ Possible (H-1B) |

### Can I Get a Visa Just by Buying a Property?

```
Short answer: NO.

Buying a residential property in the US does NOT give you
any visa rights. You need a valid visa to reside.

BUT: real estate CAN be the basis for:

1. E-2 VISA: If your country has a treaty, investing in an
   active business (e.g., property management, short-term rentals)
   that operates properties may qualify.

2. EB-5 VISA: Investing in a commercial real estate
   project that generates 10 jobs.

3. L-1 VISA: If your foreign company buys properties
   and transfers you to manage them.

4. PASSIVE INCOME (B-1): You can visit to oversee
   your investment, but not work actively.
```

```javascript
// Stripe can demonstrate active income
// for E-2 visa applications (operating business)

// Income report for visa application
const visaIncomeReport = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 31536000,
    interval_end: Math.floor(Date.now() / 1000),
    columns: ['created', 'amount', 'description', 'customer_email', 'status'],
  },
});

// Active income (not passive) proves an operating business
```

## 2. E-2 Visa: Treaty Investor

### What Is the E-2 Visa?

The E-2 visa allows citizens of treaty countries with the US to live and work in the country by investing in an active business. Real estate qualifies if you actively operate the properties (rentals, short-term rentals, property management).

### Countries with E-2 Treaty (Selection)

| Country | E-2 Treaty? | Recommended Amount | Notes |
|---------|------------|-------------------|-------|
| **Spain** | ✅ Yes | $100,000+ | Good option |
| **United Kingdom** | ✅ Yes | $100,000+ | Very common |
| **Canada** | ✅ Yes | $80,000+ | TN visa also available |
| **Mexico** | ✅ Yes | $100,000+ | |
| **Argentina** | ❌ No | N/A | Does not qualify |
| **Brazil** | ❌ No | N/A | Does not qualify |
| **Colombia** | ❌ No | N/A | Does not qualify |
| **Panama** | ❌ No | N/A | Does not qualify |
| **Chile** | ✅ Yes | $80,000+ | |
| **Uruguay** | ❌ No | N/A | Does not qualify |
| **Peru** | ❌ No | N/A | Does not qualify |
| **France** | ✅ Yes | $100,000+ | |
| **Germany** | ✅ Yes | $80,000+ | |
| **Italy** | ✅ Yes | $100,000+ | |
| **Netherlands** | ✅ Yes | $80,000+ | |

### E-2 Visa Requirements with Real Estate

```
KEY REQUIREMENTS:

1. SUBSTANTIAL INVESTMENT
   - No legal minimum amount, but $100,000+ is the practice
   - The investment must be "substantial" (proportional to the business)
   - Must be at risk (not a bank deposit)

2. ACTIVE BUSINESS (NOT PASSIVE)
   - Buying a house and renting it does NOT qualify (passive income)
   - Having a short-term rental business DOES qualify
   - Property management + renovations DOES qualify
   - Real estate development DOES qualify

3. NON-MARGINALITY
   - The business must generate enough income to live on
   - It cannot be "marginal" (cannot depend on another job)

4. CONTROL
   - You must own at least 50% of the business
   - Or have operational control

EXAMPLE THAT QUALIFIES:
- LLC operating 3 short-term rentals
- Contracts with platforms (Airbnb, VRBO)
- Stripe set up for collections
- Net income: $60,000+/year
- Investment: $200,000 (purchase + renovation)

EXAMPLE THAT DOES NOT QUALIFY:
- Buying a single-family home with a long-term tenant
- No operational activity
- Passive income only
- Investment: any amount
```

### Step by Step for E-2 Visa with Real Estate

```
1. VERIFY TREATY
   - Confirm your country has an E-2 treaty with the US

2. STRUCTURE THE BUSINESS
   - Form LLC with EIN
   - The business is NOT "holding properties" but "operating rentals"
   - Set up Stripe for collections

3. INVEST
   - Buy properties for short-term rental
   - Or property management business
   - Or property development/renovation

4. DEMONSTRATE ACTIVE BUSINESS
   - Lease agreements
   - Stripe income reports
   - Active marketing (Airbnb listings, website)
   - Employees (if applicable)

5. APPLY FOR VISA
   - Complete Form DS-160
   - Submit investment evidence
   - Business plan
   - Interview at US consulate/embassy

6. MAINTAIN
   - Renew E-2 every 2-5 years
   - Demonstrate business is still active
   - Pay taxes annually
```

## 3. EB-5 Visa: Immigrant Investor

### What Is the EB-5 Visa?

The EB-5 visa is a direct path to a Green Card (permanent residence) through an investment that creates at least 10 jobs in the US.

| Aspect | Direct EB-5 | Regional Center EB-5 |
|---------|-------------|---------------------|
| **Investment** | $1,050,000 (or $800,000 in TEA) | $800,000 (in TEA) |
| **Jobs** | 10 direct jobs (your employees) | 10 direct + indirect jobs |
| **Management** | You must actively manage the business | Passive management (fund) |
| **Real estate** | Hotel, complex, own development | Regional center real estate projects |
| **Risk** | Your business (more control) | The project (less control) |
| **Green Card timeline** | 2-3 years (conditional) | 2-3 years (conditional) |

### EB-5 and Real Estate: Examples

```
DIRECT EB-5 WITH REAL ESTATE:

Invest $1,050,000 in:
- A 20-room hotel in Florida
- Employ: 10+ people (front desk, cleaning, maintenance)
- You manage the hotel
- Requirement: create 10 direct full-time jobs

REGIONAL CENTER EB-5 WITH REAL ESTATE:

Invest $800,000 in:
- A regional center developing an apartment complex
- The regional center counts direct and indirect jobs
- You don't need to manage anything
- Risk: the project must succeed

EB-5 REQUIREMENTS:
1. The investment must be "at risk" (not guaranteed)
2. You must demonstrate lawful source of funds
3. The investment must be made within 2 years
4. You must create 10 full-time jobs
```

### Step by Step for EB-5

```
1. CHOOSE STRUCTURE
   - Direct EB-5 (more control, more investment)
   - Regional Center EB-5 (less control, less investment, more popular)

2. PREPARE SOURCE OF FUNDS
   - Demonstrate funds come from legal sources
   - Documentation: tax returns, deeds, contracts, bank statements
   - Certified translations

3. INVEST
   - Transfer funds to the EB-5 entity
   - The investment must be "at risk"

4. FILE I-526
   - Immigrant investor petition
   - Evidence of investment and job creation
   - Time: 12-24 months (may vary)

5. CONDITIONAL GREEN CARD
   - If I-526 is approved
   - Residence for 2 years

6. FILE I-829
   - After 2 years, demonstrate 10 jobs were created
   - If approved: permanent Green Card
   - Time: 12-24 months

TOTAL TIMELINE: 3-5 years for permanent Green Card
APPROXIMATE COST:
- Investment: $800,000-$1,050,000
- Legal fees: $30,000-75,000
- Administrative fees: $5,000-10,000
```

## 4. L-1 Visa: Intracompany Transfer

### What Is the L-1 Visa?

Allows foreign companies to transfer executives or managers to their US office. If your foreign company invests in US real estate and creates a subsidiary, you may qualify.

| Aspect | L-1A (Executive/Manager) | L-1B (Specialized Knowledge) |
|---------|-------------------------|------------------------------|
| **Maximum term** | 7 years | 5 years |
| **Path to Green Card** | ✅ Yes (EB-1C) | ⚠️ Limited |
| **Requirement** | 1 year in foreign company | 1 year in foreign company |
| **Real estate** | Property management subsidiary | Specialized technician |

### How to Use Real Estate for L-1 Visa

```
STRUCTURE:

Your company in your country (parent)
  └── New company in the US (subsidiary)
        └── Buys and operates properties
        └── You are transferred as manager

REQUIREMENTS:
1. The foreign company must exist and be active
2. You must have worked 1 year in the foreign company
3. The US subsidiary must be a real extension of the business
4. You must perform executive or managerial functions

EXAMPLE:
- You have a construction company in your country
- You open a subsidiary in Florida (US)
- The subsidiary buys land and develops properties
- You are transferred as general manager
- You can get L-1A → then EB-1C → Green Card
```

## 5. B-1/B-2: Visitor to Oversee Investments

### What You Can and Cannot Do with B-1/B-2

| Activity | Allowed | Not Allowed |
|----------|---------|-------------|
| **Buy properties** | ✅ Yes | |
| **Attend closings** | ✅ Yes | |
| **Meet with property manager** | ✅ Yes | |
| **Oversee repairs** | ✅ Yes | |
| **Collect rent** | | ❌ Unauthorized work |
| **Sign lease agreements** | | ❌ Unauthorized work |
| **Perform repairs yourself** | | ❌ Unauthorized work |
| **Sell properties** | ✅ Yes | |

### B-1/B-2 Limitations

```
MAXIMUM 6 MONTHS per visit
You CANNOT work (generate active income)
You CAN manage passive investments

For foreigners with US properties:
- You can visit to oversee your investment
- Meet with property manager and CPA
- Inspect properties
- But you CANNOT collect rent or do maintenance

If you need to stay longer: E-2, L-1 or EB-5
```

## 6. Student Visa (F-1) and Real Estate

### Can an International Student Invest in Real Estate?

| Aspect | Answer |
|---------|--------|
| **Can they buy properties?** | ✅ Yes |
| **Can they receive rent?** | ✅ Yes (passive income) |
| **Can they operate a real estate business?** | ❌ No (violates F-1 status) |
| **Can they use OPT for real estate?** | ⚠️ Depends (must relate to their career) |
| **Can they have an LLC?** | ✅ Yes (as a passive investor) |

### F-1 + Real Estate Strategy

```
Many international students buy properties
while studying, following this strategy:

1. Buy a property near the university
2. Live in one room, rent out the others (house hacking)
3. Rent from other rooms pays the mortgage
4. Upon graduation, sell or keep as investment

ADVANTAGES:
- Free or reduced housing during studies
- Build US credit history
- Property appreciates during studies
- Can continue investing after with OPT/STEM OPT

LIMITATIONS:
- Cannot actively work in the business
- Must use property manager if unable to manage
- Cannot use the property as Airbnb if it violates status
```

## 7. Structuring the Investment for Immigration

### What USCIS Looks For

```
USCIS (Citizenship and Immigration Services) evaluates:

1. INVESTMENT AT RISK
   - You cannot easily recover the capital
   - Stripe demonstrates operating income
   - The LLC has real operating expenses

2. ACTIVE BUSINESS (for E-2 and L-1)
   - Stripe transactions → recurring income
   - Operating expenses → management, marketing, repairs
   - Employees (if applicable)
   - Physical presence (office or properties)

3. JOB CREATION (for EB-5)
   - Employee payroll
   - W-2 and 1099 forms
   - Employment contracts

4. LAWFUL SOURCE OF FUNDS
   - Bank statements
   - Tax returns
   - Deeds of sold properties
   - Business contracts
```

```javascript
// Stripe to demonstrate business activity

// 1. Transaction report for USCIS
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 31536000,
    interval_end: Math.floor(Date.now() / 1000),
    columns: [
      'created',
      'amount',
      'description',
      'customer',
      'payment_intent',
      'status',
    ],
  },
});

// 2. Stripe Connect to demonstrate multi-LLC structure
// 3. Stripe Tax to demonstrate tax compliance

// Stripe Dashboard → Reports → Downloads
// Everything is recorded for the visa application
```

## 8. Visa Comparison: Which One Is Right for You?

### Comparison Table

| Factor | E-2 | EB-5 | L-1 | B-1/B-2 |
|--------|-----|------|-----|---------|
| **Minimum investment** | $100,000+ | $800,000+ | No minimum | $0 |
| **Timeline** | 2-5 years (renewable) | Permanent | 1-7 years | 6 months |
| **Green Card** | ❌ No | ✅ Yes | ✅ Via EB-1C | ❌ No |
| **Work allowed** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Limited countries** | ✅ Treaty only | ❌ All | ❌ All | ❌ All |
| **Processing time** | 2-4 months | 2-5 years | 4-8 months | 1-3 months |
| **Risk** | Low (recover investment) | High (investment at risk) | Low | None |
| **Passive real estate** | ❌ Does not qualify | ⚠️ Regional center | ❌ Does not qualify | ✅ Yes |
| **Active real estate** | ✅ Qualifies | ✅ Qualifies | ✅ Qualifies | ❌ No |

### Recommendation by Profile

```
PROFILE 1: MODERATE CAPITAL INVESTOR ($100K-$500K)
→ E-2 Visa (if your country has a treaty)
  - Invest in short-term rentals
  - Active property management business
  - Renewable indefinitely

PROFILE 2: HIGH CAPITAL INVESTOR ($800K+)
→ EB-5 Visa (path to Green Card)
  - Regional center or direct project investment
  - Permanent residence for you and your family
  - Risk: investment must create 10 jobs

PROFILE 3: BUSINESS OWNER WITH INTERNATIONAL COMPANY
→ L-1 Visa
  - Open US subsidiary for real estate
  - Intracompany transfer
  - Path to Green Card via EB-1C

PROFILE 4: INVESTOR WHO ONLY WANTS TO VISIT
→ B-1/B-2 Visa
  - No minimum investment
  - To oversee existing properties
  - Does not allow work or residence
```

## 9. Costs Associated with Each Visa

### Cost Breakdown

| Visa | Investment | Legal Fees | Government Fees | Estimated Total |
|------|-----------|-----------|----------------|----------------|
| **E-2** | $100,000+ | $5,000-15,000 | $205 (DS-160) | $105,205+ |
| **EB-5** | $800,000+ | $30,000-75,000 | $3,675 (I-526 + DS-260) | $833,675+ |
| **L-1** | Varies | $5,000-20,000 | $460 (I-129) | $5,460+ |
| **B-1/B-2** | $0 | $0-500 | $185 | $185-685 |

### Estimated Timeline per Visa

```
E-2 (treaty country):
- Preparation: 1-3 months
- Consular process: 2-4 weeks
- Total: 2-4 months

EB-5:
- Preparation (source of funds): 3-6 months
- I-526: 12-24 months
- Consular processing: 3-6 months
- Conditional Green Card: 2 years
- I-829 (permanent): 12-24 months
- Total: 3-5 years

L-1:
- Preparation: 1-3 months
- I-129: 2-4 months (regular) or 15 days (premium)
- Total: 3-6 months
```

## 10. Risks and Considerations

### Immigration Risks

| Risk | E-2 | EB-5 | L-1 |
|------|-----|------|-----|
| **Denial** | Low (if you invest substantially) | Medium (source of funds complex) | Low (if requirements met) |
| **Loss of investment** | Low (properties can be sold) | High (investment at risk) | Low |
| **Revocation** | Medium (if business stops operating) | Low (if Green Card obtained) | Medium (if subsidiary closes) |
| **Political change** | Low (treaty in force) | Low (established law) | Low |

### Important Considerations

```
1. REAL ESTATE ALONE DOES NOT GIVE A VISA
   - Buying a house does NOT entitle you to a visa
   - You need an ACTIVE business or qualified investment

2. DO NOT USE REAL ESTATE TO WORK WITHOUT A VISA
   - Managing properties (collecting, signing contracts) without a visa is illegal
   - Can result in deportation and entry ban

3. SOURCE OF FUNDS IS CRITICAL
   - USCIS investigates the source of funds
   - Especially in EB-5
   - Have all documentation ready

4. STRUCTURE MATTERS
   - For E-2: Operating LLC with Stripe
   - For EB-5: New commercial entity (not personal LLC)
   - For L-1: Subsidiary of your foreign company

5. ALWAYS CONSULT WITH AN IMMIGRATION ATTORNEY
   - This article is informational, not legal advice
   - Each case is unique
   - Immigration laws change frequently
```

## 11. Frequently Asked Questions

### Can I get a visa if I buy a house in the US?

No. Buying a residential property does not grant any immigration status. You need a valid visa to live in the US. Real estate is only a vehicle if structured as an active business (E-2), job-creating investment (EB-5), or extension of a foreign company (L-1).

### Which visa is easiest for a real estate investor?

The E-2 visa is the most accessible if your country has a treaty with the US: requires less investment ($100K+), fast process (2-4 months), and can be renewed indefinitely. The disadvantage is no direct path to a Green Card.

### How long can I stay in the US if I own properties?

With a B-1/B-2 visa: maximum 6 months per visit. Without a visa (ESTA/VWP): maximum 90 days. For longer stays you need E-2, L-1, EB-5 or another work visa.

### Can I use my LLC to apply for a visa?

Yes, if the LLC operates an active business (short-term rentals, property management, development). The LLC must demonstrate operating income, expenses, and real activity. Stripe is an excellent tool to demonstrate this income.

### Does Stripe help with my visa application?

Yes. Stripe generates transaction reports that demonstrate recurring income, business activity, and tax compliance. For E-2 and L-1 visas, these reports are valuable evidence that the business is actively operating.

### What happens if my E-2 visa is not renewed?

You must sell your properties or structure them so a property manager handles them. You can remain an owner without a visa, but you cannot reside in the US or actively manage. Always consider a contingency plan.

## 12. Checklist for Using Real Estate as a Migration Vehicle

### IF SEEKING E-2 VISA:
- [ ] Confirm your country has an E-2 treaty
- [ ] Form LLC with EIN
- [ ] Set up Stripe on the LLC
- [ ] Invest $100,000+ in active real estate business
- [ ] Demonstrate operating income (not passive)
- [ ] Have a detailed business plan
- [ ] Hire an immigration attorney
- [ ] Prepare investment evidence
- [ ] Apply for visa at US consulate

### IF SEEKING EB-5 VISA:
- [ ] Prepare source of funds documentation
- [ ] Choose between direct investment or regional center
- [ ] Invest $800,000-$1,050,000
- [ ] Demonstrate creation of 10 jobs
- [ ] File I-526
- [ ] Obtain conditional Green Card (2 years)
- [ ] File I-829 for permanent Green Card
- [ ] Hire immigration attorney specialized in EB-5

### IF SEEKING L-1 VISA:
- [ ] Have an active company in your country (1+ year)
- [ ] Open US subsidiary
- [ ] Buy/operate properties through the subsidiary
- [ ] Transfer as executive or manager
- [ ] File I-129
- [ ] Apply for EB-1C after 1 year for Green Card

### IF YOU ARE A PASSIVE INVESTOR:
- [ ] Obtain or maintain B-1/B-2 visa or ESTA
- [ ] Have a property manager handle the properties
- [ ] Visit maximum 6 months (B-2) or 90 days (ESTA)
- [ ] Do not actively work on the properties
- [ ] Comply with taxes (1040-NR) even if not residing

## Conclusion

**Real estate as a migration vehicle to the US** is a powerful but complex strategy. The key is understanding that buying a property does not entitle you to a visa: you need structure, substantial investment, and real business activity.

The E-2 visa is the most accessible entry door for investors from treaty countries, allowing you to live and work in the US with a moderate investment in an active real estate business. The EB-5 is the direct path to a Green Card, but requires significant investment and patience. The L-1 is ideal for entrepreneurs who already have a business in their country.

Stripe, with its income and transaction reports, is a valuable tool to demonstrate business activity to USCIS. The combination of operating LLC + Stripe + specialized immigration attorney is the formula to maximize your chances.

At **Sotomayor Consulting International**, we advise you at the intersection of real estate investment and migration: from structuring your real estate business and Stripe setup to connecting with immigration attorneys specialized in E-2, EB-5, and L-1 visas. Contact us for a personalized consultation.
