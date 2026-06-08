---
title: "How to Finance Properties in the US as a Foreigner: 2026 Guide"
description: "How to finance properties in the US as a foreigner"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Financing options for foreigners in the US: DSCR loan, conventional, hard money, seller financing, private lending"
---

**Financing properties in the US as a foreigner** is possible through multiple options: DSCR loans (based on rental income, not personal income), hard money (short-term, high rate), private lending, seller financing, and conventional loans (if you have ITIN or SSN with credit history).

In this guide, we explain **how to finance properties in the US as a foreigner** in 2026: requirements, rates, terms, advantages of each option, and how Stripe can support your loan application.

## 1. Financing Options Overview

| Option | Ideal Profile | Rate (2026) | Down Payment | Term |
|--------|--------------|-------------|--------------|------|
| **Cash** | Any foreigner | 0% (no interest) | 100% | Immediate |
| **DSCR Loan** | Investor with rental property | 7-9% | 20-35% | 30 years |
| **Conventional Loan** | Foreigner with ITIN/SSN + US credit | 6-8% | 20-30% | 15-30 years |
| **Hard Money** | Flip, repair, short-term | 10-15% | 20-30% | 6-24 months |
| **Private Lending** | Relationship with lender | 8-12% | Negotiable | Negotiable |
| **Seller Financing** | Motivated seller | 5-10% | 10-30% | Negotiable |
| **Portfolio Loan** | Flexible local bank | 7-10% | 25-40% | 15-30 years |

### Are You Eligible?

```
Do you have SSN or ITIN?
├── Yes → Do you have US credit history?
│   ├── Yes → Conventional / Portfolio / DSCR
│   └── No → DSCR / Hard Money / Private
└── No → Do you have rental income?
    ├── Yes → DSCR Loan (best option)
    └── No → Hard Money / Cash / Seller Financing
```

```javascript
// Stripe does not originate loans, but generates income reports
// that banks and lenders use to approve DSCR loans

// Rental income report for the lender
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 31536000, // 12 months
    interval_end: Math.floor(Date.now() / 1000),
    columns: ['created', 'amount', 'description', 'status'],
  },
});

// Download this report and present it to the bank
```

## 2. DSCR Loan: The Best Option for Foreigners

### What Is a DSCR Loan?

DSCR stands for **Debt Service Coverage Ratio**. It is a loan based on the property's cash flow, NOT on your personal income. The lender evaluates:

```
DSCR = Net rental income / Monthly loan payment

Example:
Monthly rent: $3,500
Monthly payment (mortgage + insurance + tax): $2,800
DSCR = $3,500 / $2,800 = 1.25

Typical requirement: DSCR ≥ 1.0

If DSCR = 1.25, the loan is approved
If DSCR < 1.0, you need more down payment
```

### Requirements for Foreigners

| Requirement | Detail |
|-------------|--------|
| **Residency** | Any country (no SSN/ITIN required) |
| **Down payment** | Minimum 20-35% (higher without US history) |
| **Minimum DSCR** | 1.0-1.25 (depends on lender) |
| **Lease agreement** | If refinance, have tenants in place |
| **LLC EIN** | Needed to open bank account |
| **ITIN** | Recommended, not required |
| **US account deposits** | 2-12 months of reserves |

### Rates and Terms

| Profile | Rate | Down Payment | Minimum DSCR |
|---------|------|-------------|------------|
| **Excellent (DSCR > 1.5)** | 6.5-7.5% | 20% | 1.0 |
| **Good (DSCR 1.25-1.5)** | 7.5-8.5% | 25% | 1.1 |
| **Acceptable (DSCR 1.0-1.25)** | 8.5-9.5% | 30-35% | 1.25 |
| **No US history** | 8-10% | 30-35% | 1.25 |

### How Stripe Helps with DSCR

```
Stripe generates income reports that demonstrate DSCR:

1. Set up Stripe on your LLC
2. Collect rents through Stripe for 12 months
3. Download the transaction report
4. Present the report to the lender + tax returns

This is especially useful if:
- You don't have W-2 or personal tax returns in the US
- Your income comes from multiple properties
- You want to demonstrate consistent income
```

## 3. Conventional Loan

### Can a Foreigner Get One?

| Factor | Answer |
|--------|--------|
| **Do I need SSN?** | Yes, or at least ITIN with history |
| **Do I need US credit?** | Yes, minimum 620-660 FICO |
| **How much down payment?** | 20-30% minimum |
| **How long does it take?** | 30-60 days |
| **Is my income evaluated?** | Yes, you need W-2 or tax returns |
| **Can I use projected rent?** | No, only verifiable personal income |

### Disadvantages for Foreigners

- **Hard to qualify** without US credit history
- **Requires US income** (W-2, 1099 or tax returns)
- **Does not consider future rent** from the property
- **ITIN loans** exist but with higher rates and fewer options

### Alternative: ITIN Mortgage

Some lenders offer mortgages with ITIN (no SSN) for buyers who:

| Requirement | Detail |
|-------------|--------|
| **ITIN** | Mandatory |
| **Payment history** | 12-24 months of rent, utilities, etc. |
| **Down payment** | 20-30% |
| **Rate** | 7-10% (higher than conventional) |
| **Documentation** | Tax returns + bank statements |
| **Availability** | Limited (only certain states and lenders) |

## 4. Hard Money Loan

### What Is a Hard Money Loan?

Short-term, high-rate loan based on the property's value (not your credit). Ideal for flips, repairs, or quick purchases.

| Feature | Detail |
|---------|--------|
| **Rate** | 10-15% annual |
| **Points (origination)** | 2-5% of the loan |
| **Term** | 6-24 months |
| **LTV** | 60-75% of ARV (after repair value) |
| **Approval** | 3-7 days |
| **Credit** | Flexible (no US history required) |
| **Documentation** | Minimal |

### When to Use Hard Money

```
Ideal scenario:
- Buy a property for $200,000
- Need $50,000 in repairs
- ARV (value after repair): $350,000
- Hard money loan: 70% of ARV = $245,000
- Use $200,000 to buy + $45,000 for repairs
- Sell in 12 months for $350,000
- Pay off loan + interest (~$220,000)
- Profit: $130,000 before costs

NOT ideal scenario:
- Long-term rental property
- DSCR loan is better: rate 8% vs 12%, term 30 years
- Hard money only if temporary (flip or bridge)
```

### Hard Money vs DSCR Comparison

| Aspect | Hard Money | DSCR Loan |
|--------|-----------|-----------|
| **Rate** | 10-15% | 7-9% |
| **Term** | 6-24 months | 30 years |
| **Purpose** | Flip / Bridge / Repair | Long-term rental |
| **Approval** | 3-7 days | 2-4 weeks |
| **Down payment** | 20-30% | 20-35% |
| **Monthly payment** | Interest only (IO) | Amortized |

```javascript
// Stripe helps you demonstrate income to refinance
// from hard money to DSCR loan after repairs

// Rental income report after renovation
const rentalIncome = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 7776000 }, // last 90 days
});

// With 90 days of consistent rent, you can refinance
const totalRentals = rentalIncome.data.reduce((sum, session) => {
  return session.payment_status === 'paid' ? sum + session.amount_total : sum;
}, 0);

console.log(`Total collected in 90 days: $${(totalRentals / 100).toFixed(2)}`);
```

## 5. Seller Financing

### How Does It Work?

The seller acts as the bank: you pay them in installments, without needing a traditional bank.

| Concept | Detail |
|---------|--------|
| **Down payment** | 10-30% (negotiable) |
| **Rate** | 5-10% (negotiable, usually lower than bank) |
| **Term** | 5-20 years (or balloon at 5 years) |
| **Approval** | Days, not weeks |
| **Requirements** | Only what the seller asks for |
| **Property** | Generally free and clear |

### Advantages for Foreigners

| Advantage | Explanation |
|-----------|------------|
| **No bank** | No US credit, ITIN, or SSN required |
| **Flexible** | Terms negotiable directly with seller |
| **Fast** | Close in 1-2 weeks |
| **No points** | No origination fees |
| **No prepayment penalty** | Generally not applicable |

### Disadvantages

- **Seller must be motivated** (not always available)
- **Shorter term** than traditional loan
- **Balloon payment** common (lump sum at end)
- **Property must have equity** or be free of mortgage

## 6. Private Lending

### What Is Private Lending?

Private investors (individuals or funds) who lend money for real estate projects.

| Source | Typical Rate | Term | LTV |
|--------|------------|------|-----|
| **Family office** | 8-12% | 1-5 years | 60-75% |
| **Angel investor** | 10-15% | 1-3 years | 60-70% |
| **Peer-to-peer (crowdfunding)** | 8-11% | 1-5 years | 65-75% |
| **Investor syndicate** | 9-13% | 1-5 years | 60-70% |

### How to Find Private Lenders

```
1. Real estate investing groups (BiggerPockets, Facebook)
2. Local investor meetups
3. Referrals from real estate agents
4. Real estate attorneys (have contacts)
5. Crowdfunding platforms (Fundrise, CrowdStreet)

Typical requirements:
- Real estate experience (or partner with experience)
- Well-documented deal (pro forma, ARV, budget)
- Clear exit strategy (sale, refinance, rental)
- Personal contribution (20-30% of the deal)
```

## 7. Portfolio Loan

### What Is a Portfolio Loan?

A loan that the bank **does not sell to Fannie Mae/Freddie Mac** but keeps on its own balance sheet. This allows more flexibility.

| Benefit | Detail |
|---------|--------|
| **No loan limit** | Can exceed conforming loan limits |
| **Flexible documentation** | Accept bank statements instead of W-2 |
| **Multiple properties** | Single loan for several properties |
| **Foreigners** | Some local banks offer them |

### Typical Requirements

| Requirement | Detail |
|-------------|--------|
| **Down payment** | 25-40% |
| **Reserves** | 6-12 months of payments |
| **Bank relationship** | Helps to have an existing account |
| **Property** | Generally in the same state as the bank |
| **Rate** | 7-10% (premium over conventional) |

## 8. Financing by Property Type

| Property Type | Best Option | Down Payment | Estimated Rate |
|--------------|-------------|-------------|--------------|
| **SFR (single family)** | DSCR Loan | 20-30% | 7-9% |
| **Multifamily (2-4 units)** | DSCR / Conventional | 25-35% | 7-10% |
| **Condominium** | DSCR / Cash | 25-35% | 7-9.5% |
| **Commercial (5+ units)** | Commercial Loan | 30-40% | 6.5-9% |
| **Land** | Cash / Private | 50-100% | 10-15% |
| **Short-term rental (Airbnb)** | DSCR (short-term) | 30-40% | 8-11% |

### Short-Term Rental (Airbnb/VRBO) Financing

```
For short-term rental properties, DSCR is calculated differently:

Projected annual rent: $60,000
Estimated occupancy: 70%
Adjusted rent: $60,000 x 70% = $42,000

Monthly payment (PITI): $3,500
Annual payment: $42,000

DSCR = $42,000 / $42,000 = 1.0

Additional requirements:
- Down payment: 30-35% (higher than LTR)
- Rate: 8-11%
- Short-term rental experience (desirable)
- Pro forma with occupancy and rates
```

```javascript
// Stripe for short-term rental financing

// Stripe integrates with PMS (Property Management) systems
// and generates occupancy and income reports

// Set up Stripe for Airbnb/VRBO payments
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// Stripe Connect integrates with platforms like:
// - Hostaway
// - Guesty
// - Lodgify
// - Uplisting

// Stripe income reports support your DSCR application
```

## 9. Step by Step to Finance as a Foreigner

### Route 1: DSCR Loan (Recommended)

```
STEP 1: Choose property
- Search for properties with potential DSCR ≥ 1.25
- Calculate market rent vs. estimated monthly payment

STEP 2: Form LLC
- Create LLC in the property state
- Obtain EIN from the IRS

STEP 3: Open bank account
- At a US bank that accepts foreigners
- Deposit funds for down payment + reserves

STEP 4: Set up Stripe
- Connect Stripe with the LLC
- If you already have tenants, collect rents via Stripe

STEP 5: Find DSCR lender
- Compare at least 3 lenders
- Request pre-approval (soft credit pull)

STEP 6: Close the purchase
- Provide documentation (bank statements, Stripe reports)
- Sign and close in 2-4 weeks
```

### Route 2: Hard Money → Refinance to DSCR

```
STEP 1: Buy with hard money
- Ideal for properties needing repair
- Fast close (3-7 days)

STEP 2: Repair and rent
- Use the loan for renovation
- Get tenants quickly
- Set up Stripe to collect rent

STEP 3: Generate rental history
- Collect rent for 3-6 months via Stripe
- Demonstrate DSCR ≥ 1.0

STEP 4: Refinance to DSCR
- Find a DSCR lender
- Use the new value (ARV) for appraisal
- Cash out or lower the rate
```

### Route 3: Cash → Refinance (Delayed Financing)

```
STEP 1: Buy with cash
- Offers stronger negotiating power
- Fast close, no financing contingencies

STEP 2: Rent and generate history
- Set up Stripe to collect rent
- Generate 6-12 months of history

STEP 3: Delayed Financing Exception
- FHA allows cash-out refinance within 6 months of cash purchase
- You can recover up to 75% of the purchase value
- No seasoning period required
```

## 10. Lender Comparison for Foreigners

| Lender | Specialty | Down Payment | Rate | Process |
|--------|-----------|-------------|------|---------|
| **Visio Lending** | DSCR (no ITIN required) | 25-35% | 7.5-9% | 100% online |
| **Lima One Capital** | DSCR + Hard Money | 20-30% | 7-10% | Fast |
| **Asset Avenue** | DSCR + Portfolio | 25-30% | 7.5-9.5% | Online |
| **CoreVest** | DSCR (multifamily) | 25-30% | 7-9% | Traditional |
| **RCN Capital** | Fix & Flip | 20-30% | 9-13% | Fast |
| **LendingOne** | DSCR + Short-term | 25-35% | 7.5-10% | Online |
| **Kiavi** | DSCR + Fix & Flip | 20-30% | 7.5-9.5% | Online |

### Tips for Choosing a Lender

```
1. Look for lenders specialized in foreign investors
2. Ask if they accept ITIN (better than not requiring it)
3. Compare APRs (includes points and origination fees)
4. Check prepayment penalties (avoid > 3 years)
5. Ask about DSCR on short-term rental properties
6. Read reviews on BiggerPockets or Google
7. Get pre-approval before making offers
```

## 11. Frequently Asked Questions

### Can I finance a property in the US without an SSN?

Yes. The most common option for foreigners without SSN is the **DSCR Loan**, which does not require SSN/ITIN. There are also **seller financing** and **hard money** options without US credit verification.

### How much down payment does a foreigner need?

It depends on the loan type: DSCR loan (20-35%), conventional with ITIN (20-30%), hard money (20-30%), seller financing (10-30%). In general, expect minimum 25-30%.

### Can I use income from my home country to qualify?

It depends on the lender. Most DSCR lenders only consider the property's rent. For conventional loans, some accept international income with additional documentation (translated tax returns, employer letters).

### Which is better: DSCR or Conventional?

For foreigners, **DSCR is almost always better**: no US credit history required, considers only the property's rent, and the process is simpler. Conventional is only better if you have excellent US credit and the rate is lower.

### Does Stripe help me get a loan?

Yes. Stripe generates rental income reports that DSCR lenders accept as proof of cash flow. You can also use Stripe to demonstrate 6-12 months of rental history before refinancing.

### Can I buy 100% financed?

Very difficult for foreigners. The maximum is usually 70-80% LTV (20-30% down). Some lenders offer 85% LTV with high DSCR and good history, but this is the exception.

## 12. Checklist for Foreigner Financing

- [ ] Define budget and strategy (LTR, STR, flip)
- [ ] Choose state and property with good DSCR potential
- [ ] Form LLC in the purchase state
- [ ] Obtain EIN from the IRS
- [ ] Open a US bank account
- [ ] Set up Stripe on the LLC
- [ ] Gather funds for down payment (25-35%)
- [ ] Prepare reserves (3-12 months of payments)
- [ ] Request pre-approval from 2-3 DSCR lenders
- [ ] Compare rates, points, and prepayment penalties
- [ ] Make offer with pre-approval
- [ ] Close purchase (2-4 weeks)
- [ ] Set up rent collection in Stripe
- [ ] Set up automatic mortgage payments

## Conclusion

**Financing properties in the US as a foreigner** is completely feasible with the right option. The **DSCR Loan** is the best alternative for income-generating investors: no SSN required, based on property cash flow, and offers 30-year terms with competitive rates.

For short-term projects (flips, repairs), **hard money** or **private lending** are fast options. **Seller financing** and **portfolio loans** offer additional flexibility. The combination of LLC + Stripe + DSCR loan is the most solid strategy to scale your US real estate portfolio.

At **Sotomayor Consulting International**, we assist you throughout the financing process: from LLC formation and EIN procurement, to connecting with DSCR lenders, configuring Stripe for income reports, and preparing loan documentation. Contact us for a personalized consultation.
