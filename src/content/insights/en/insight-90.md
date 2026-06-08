---
title: "How to Generate Passive Income with Properties in the US: 2026 Guide"
description: "How to generate passive income with properties in the US"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Passive income spectrum with properties: REITs, crowdfunding, turnkey, LTR, STR, with Stripe and automatic money flow icons"
---

**Generating passive income with properties in the US** is every investor's dream: rents that arrive automatically every month without you lifting a finger. The reality is that there are different levels of "passivity," from completely passive (REITs, crowdfunding) to semi-passive (turnkey properties with property manager, long-term rentals).

In this guide, we explain **how to generate passive income with properties in the US** in 2026: from the most passive strategy to the most active, with examples, real numbers, and how Stripe automates rent collection.

## 1. The Passivity Spectrum

### From 100% Passive to 100% Active

| Strategy | Passivity Level | Monthly Income (per $100K) | Time Required | Risk |
|----------|----------------|---------------------------|---------------|------|
| **REITs** | ✅ 100% passive | $500-800 (dividends) | 0 hours/month | Medium |
| **Crowdfunding** | ✅ 95% passive | $700-1,200 | 0.5 hours/month | Medium-High |
| **Turnkey LTR (with PM)** | ✅ 90% passive | $600-1,000 | 1-2 hours/month | Low-Medium |
| **Turnkey STR (with PM)** | ⚠️ 80% passive | $800-1,500 | 2-4 hours/month | Medium |
| **LTR with own PM** | ⚠️ 70% passive | $700-1,100 | 3-5 hours/month | Low |
| **STR with own PM** | ⚠️ 60% passive | $900-1,800 | 5-10 hours/month | Medium |
| **House hacking** | ❌ 50% passive | $500-1,000 (free housing) | 5-15 hours/month | Low |
| **Flip (active)** | ❌ 0% passive | Variable (lump sum) | 40+ hours/week | High |

### There Is No 100% Passive Income

```
Reality about passive income:

✅ REAL PASSIVE INCOME:
- REITs: the management team does everything
- Crowdfunding: the sponsor does everything
- Turnkey + PM: you only review statements

⚠️ SEMI-PASSIVE INCOME:
- LTR with PM: strategic decisions + taxes
- STR with PM: more management (dynamic pricing, reviews)
- LLC management: annual reports, registered agent

❌ ACTIVE INCOME (not passive):
- Being a landlord without PM
- Doing repairs yourself
- Managing tenants directly
- Flipping properties

Goal: reach 90%+ passivity
Using: turnkey properties + property manager + Stripe
```

```javascript
// Stripe: Automation is key for passive income

// Stripe can collect rent automatically each month
// Without you having to do anything

// Set up monthly subscription for tenant
const subscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}', // Tenant ID
  items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Monthly Rent - Orlando Condo' },
      unit_amount: 350000, // $3,500/month
      recurring: { interval: 'month' },
    },
  }],
  payment_behavior: 'default_incomplete',
});

// Stripe collects automatically each month
// You only review the monthly report
```

## 2. REITs (Real Estate Investment Trusts)

### The Most Passive Option

| Aspect | Detail |
|--------|--------|
| **What it is** | Company that owns and operates income-generating real estate. You buy shares and receive dividends. |
| **Minimum investment** | $0 (you can buy 1 share) |
| **Typical yield** | 4-12% annual in dividends |
| **Liquidity** | High (sold on stock exchange) |
| **Taxes** | 15-30% on dividends (depends on your country) |
| **Passivity** | 100% (management team does everything) |

### Recommended REITs for 2026

| REIT | Sector | Dividend Yield | Market Cap |
|------|--------|---------------|------------|
| **Realty Income (O)** | Retail/commercial | 5.5% | $45B+ |
| **Equity Residential (EQR)** | Apartments | 4.2% | $25B+ |
| **Prologis (PLD)** | Logistics/industrial | 3.2% | $100B+ |
| **VICI Properties (VICI)** | Entertainment | 5.8% | $35B+ |
| **Digital Realty (DLR)** | Data centers | 3.5% | $50B+ |

### Advantages and Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| ✅ 100% passive | ❌ No control over properties |
| ✅ High liquidity | ❌ Subject to market volatility |
| ✅ Low minimum investment | ❌ Dividends taxed as ordinary income |
| ✅ Diversification | ❌ No tax depreciation (for foreigners) |
| ✅ No LLC needed | ❌ No leverage (no mortgage) |

```javascript
// Stripe does not invest in REITs directly
// But you can use Stripe to receive dividends

// Set up Stripe Connect to receive brokerage payments
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  capabilities: {
    transfers: { requested: true },
  },
});

// Dividends arrive automatically
// Stripe generates tax reports (1099-DIV)
```

## 3. Real Estate Crowdfunding

### Collective Investment in Projects

| Aspect | Detail |
|--------|--------|
| **What it is** | Platforms where multiple investors pool money to finance real estate projects |
| **Minimum investment** | $500-$25,000 (per platform) |
| **Typical yield** | 8-15% annual |
| **Term** | 6-36 months (per project) |
| **Passivity** | 95% (sponsor manages everything) |

### Popular Platforms 2026

| Platform | Minimum | Yield | Project Type |
|----------|---------|-------|-------------|
| **Fundrise** | $10 | 8-12% | Diversified portfolio |
| **CrowdStreet** | $25,000 | 12-18% | Commercial projects |
| **RealtyMogul** | $5,000 | 8-14% | Multifamily, commercial |
| **YieldStreet** | $5,000 | 9-15% | Real estate debt |
| **Groundfloor** | $10 | 7-12% | Short-term loans |

### How It Works

```
1. Register on the platform
2. Review available projects
3. Invest in those that interest you
4. The project sponsor buys, manages and sells
5. You receive periodic payments (monthly or at end)

Example with Fundrise:
- Invest $5,000 in an apartment fund
- The fund buys 3 apartment complexes
- You receive quarterly dividends (~$100-150)
- Upon sale (5-7 years), you receive capital gain
- Estimated total: 9-12% annual compound
```

## 4. Turnkey Properties (LTR with Property Manager)

### The Most Popular Option for Passive Income

| Aspect | Detail |
|--------|--------|
| **What it is** | Properties ready to rent (rehabbed, with tenant or ready to place) + property manager who handles them |
| **Typical investment** | $100,000-400,000 per property |
| **Net yield** | 6-10% annual (cash-on-cash) |
| **Passivity** | 90% (you only review reports and taxes) |

### The Passive Income Flow with Turnkey

```
You invest → Buy rehabbed property
  → Property Manager places tenant
  → Tenant pays rent to Stripe (automatic)
  → PM takes their fee (8-12%)
  → PM pays mortgage, insurance, tax (if applicable)
  → PM sends profit to your bank account
  → You receive monthly report
  → Your CPA prepares 1040-NR annually

YOUR WORK:
- Review monthly report (10 minutes)
- Pay annual taxes (with your CPA)
- Strategic decisions (sale, refinance)
- Total: 1-2 hours per month
```

### Real Numerical Example

```
Turnkey property in Orlando, FL:
- Purchase price: $250,000
- Down payment (30%): $75,000
- DSCR loan: $175,000 at 8%

INCOME:
- Monthly rent: $2,800
- Vacancy (5%): -$140
- Effective income: $2,660

EXPENSES (managed by PM):
- Mortgage (P&I): $1,284
- Property tax: $250
- Insurance: $150
- HOA: $100
- Property manager (10%): $266
- Maintenance (10%): $266
- Total expenses: $2,316

MONTHLY CASH FLOW:
$2,660 - $2,316 = $344/month

YIELD:
- Annual cash flow: $4,128
- Cash on cash: $4,128 / $75,000 = 5.5%
- + Appreciation (3-5% annual in Florida)
- + Tax depreciation (~$6,000/year)
- + Mortgage paydown (amortization)
- Estimated total return: 10-15% annual
```

```javascript
// Stripe: Set up automatic collection with PM

// The property manager uses Stripe to collect from tenant
// Stripe sends payment to the LLC
// Stripe generates monthly report

// Monthly income report
const monthlyReport = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});

// You just open the report and review
// That's passive income!
```

## 5. Short-Term Rentals (STR) Passive

### STR with Property Manager

| Aspect | LTR | STR (with PM) |
|--------|-----|--------------|
| **Gross income** | $2,800/month | $4,500/month |
| **Operating expenses** | 50-60% | 55-70% |
| **Net income** | $344/month | $600-1,000/month |
| **Passivity** | 90% | 80% |
| **PM management** | Low (stable tenant) | High (check-in/out, cleaning) |
| **Stripe** | Monthly subscription | Per-booking payment |

### Cost of Passivity in STR

```
For fully passive STR, you need:

1. STR-SPECIALIZED PROPERTY MANAGER
   - Manages bookings (Airbnb, VRBO, Booking.com)
   - Coordinates cleaning between guests
   - Handles check-in/out
   - Dynamic pricing
   - Cost: 20-30% of revenue (vs 8-12% for LTR)

2. MANAGEMENT SOFTWARE
   - PM must use software like Hostaway, Guesty, Uplisting
   - Integration with Stripe for payments
   - Synchronized calendar across platforms

3. PROFESSIONAL MAINTENANCE
   - Reliable cleaning team
   - Backup handyman
   - Automatic supplies (Amazon Subscribe & Save)

EXAMPLE:
- STR in Orlando: $350/night, 70% occupancy
- Monthly income: $350 x 30 x 70% = $7,350
- Less platform fees (15%): $1,102
- Less PM (25%): $1,837
- Less cleaning, supplies, utilities: $1,500
- Net monthly: ~$2,900
- vs LTR: ~$2,800 gross, $344 net
```

## 6. House Hacking: Live Free + Income

### The Entry Strategy

| Aspect | Detail |
|--------|--------|
| **What it is** | Buy a multifamily property (2-4 units), live in one unit and rent out the others |
| **Investment** | Low (FHA or DSCR mortgage) |
| **Passivity** | 50% (you are neighbor to your tenants) |
| **Benefit** | Free housing + cash flow |

### House Hacking Example

```
Duplex in Tampa, FL:
- Price: $350,000
- FHA down payment (3.5%): $12,250 (if resident)
- DSCR down payment (25%): $87,500 (if foreigner)
- Monthly mortgage: $2,400 (PITI)

INCOME:
- Unit A (you live): $0
- Unit B (rent): $2,000/month

FLOW:
- Mortgage: $2,400
- Rent Unit B: -$2,000
- Your housing cost: $400/month (vs $1,500+ rent)

SAVING: $1,100/month in housing
CASH FLOW: -$400/month (but you live almost free)

After 1 year:
- Refinance or buy another property
- Unit A also gets rented when you move out
```

### House Hacking as a Platform

```
Scaling strategy:

YEAR 1: Buy duplex, live in unit A, rent B
  - Save $1,100/month in housing
  - Pay less mortgage

YEAR 2: Refinance or save for second property
  - Buy triplex, live in one, rent two
  - Rent both units of original duplex

YEAR 3: Repeat
  - After 5 properties, you have real passive income
  - You no longer need to live in the properties
```

## 7. Rent-to-Rent

### No-Capital Strategy

| Aspect | Detail |
|--------|--------|
| **What it is** | Rent a property long-term and sublet it short-term (STR) |
| **Investment** | Low (deposit + first month) |
| **Risk** | High (lease must allow subletting) |
| **Passivity** | 70% (with STR PM) |

### How It Works

```
1. Find a landlord who allows subletting
2. Sign annual lease: $2,000/month
3. Furnish the property (investment: $5,000-15,000)
4. List on Airbnb: $200/night
5. Occupancy: 60% → $3,600/month
6. Monthly profit: $3,600 - $2,000 - expenses = $800-1,200

ADVANTAGES:
- No mortgage, no property tax, no owner's insurance
- Low initial investment
- Can scale fast

DISADVANTAGES:
- Need landlord permission
- Risk of non-renewal
- Lower margin than owning
```

## 8. Private Lending

### Be the Bank

| Aspect | Detail |
|--------|--------|
| **What it is** | Lend money to other real estate investors with the property as collateral |
| **Minimum investment** | $50,000+ |
| **Yield** | 9-15% annual |
| **Term** | 6-24 months |
| **Passivity** | 95% (you just collect interest) |

### How It Works

```
You lend $100,000 to a flipper (12% interest)
→ The flipper buys, repairs and sells a property
→ Pays you monthly interest: $1,000/month
→ Upon sale (12 months), returns your $100,000
→ Total profit: $12,000 in 12 months (12% ROI)

REQUIREMENTS:
- Due diligence on the investor
- First mortgage on the property
- Loan agreement signed by attorney
- Title and title insurance

RISKS:
- If flipper doesn't sell, you foreclose
- If property depreciates, you lose capital
- Legal process if default
```

## 9. Triple Net Lease (NNN)

### The Holy Grail of Passive Income

| Aspect | Detail |
|--------|--------|
| **What it is** | Commercial property where the tenant pays EVERYTHING: rent + insurance + taxes + maintenance |
| **Tenant types** | National chains (Starbucks, Walgreens, CVS, McDonald's) |
| **Yield** | 4-8% annual |
| **Term** | 10-25 years |
| **Passivity** | 99% (almost absolute) |

### NNN Advantages

```
✅ COMPLETELY PASSIVE:
- Tenant pays everything (insurance, tax, maintenance)
- You just collect the rent check each month
- No maintenance calls
- No problem tenants (they are corporations)

✅ LONG-TERM CONTRACTS:
- 10-25 years with renewal options
- Annual rent increases (2-3%)
- Investment-grade tenants

✅ Stripe:
- Automatic monthly payments
- Stripe can generate invoices
- Tax reports

DISADVANTAGES:
- High investment ($500K-$5M+)
- Low yield (4-8%)
- Illiquidity (hard to sell fast)
- Vacant tenant risk (if chain goes bankrupt)
```

```javascript
// Stripe for NNN: Automatic commercial rent collection

// Set up recurring invoice for corporate tenant
const invoice = await stripe.invoices.create({
  customer: '{{CORPORATE_TENANT_ID}}',
  auto_advance: true,
  collection_method: 'charge_automatically',
  pending_invoice_items: [{
    price: '{{PRICE_ID_NNN_RENT}}',
    quantity: 1,
  }],
  due_date: Math.floor(Date.now() / 1000) + 2592000, // 30 days
});

// Stripe collects automatically each month
// Without your intervention
```

## 10. How to Automate with Stripe

### The Passive Income Stack

| Component | Function | Automation |
|-----------|----------|-----------|
| **Stripe** | Rent collection | ✅ 100% automatic |
| **Stripe Tax** | Tax calculation | ✅ Automatic |
| **Stripe Reporting** | Monthly reports | ✅ Automatic generation |
| **Property Manager** | Tenant management | ✅ They do everything |
| **CPA** | Annual filing | ✅ Annual |
| **Registered Agent** | LLC compliance | ✅ Annual |
| **Automatic payments** | Mortgage, insurance, tax | ✅ Automated clearing house |

### Your Monthly Routine (1-2 hours)

```
DAY 1: REVIEW INCOME (15 minutes)
- Open Stripe Dashboard
- Review last month's income
- Verify all payments were collected
- Download monthly report

DAY 15: REVIEW PM REPORT (30 minutes)
- Review occupancy (STR) or tenant status (LTR)
- Approve major expenses (if applicable)
- Review DSCR for each property

END OF MONTH: UPDATE RECORDS (15 minutes)
- Update income/expense spreadsheet
- Verify mortgage and insurance payments
- Archive reports for taxes

TOTAL: 1-2 hours per month for 3-5 properties
```

```javascript
// Stripe: Your best ally for passive income

// 1. Stripe collects automatically
await stripe.subscriptions.create({
  customer: '{{TENANT}}',
  items: [{ price: '{{MONTHLY_RENT_PRICE}}' }],
  payment_behavior: 'default_incomplete',
});

// 2. Stripe reconciles automatically
const balance = await stripe.balance.retrieve();
console.log(`Available balance: $${balance.available[0].amount / 100}`);

// 3. Stripe reports automatically
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});

// 4. Stripe integrates with PM software
// Hostaway, Guesty, Lodgify, Uplisting
// Everything synced automatically
```

## 11. Frequently Asked Questions

### How much money do I need to generate $1,000/month in passive income?

It depends on the strategy: REITs ($150,000-300,000 in dividends at 4-8%), crowdfunding ($100,000-150,000 at 8-12%), turnkey LTR ($150,000-250,000 in down payments), STR ($100,000-200,000). General rule: $100,000 invested generates $500-1,500/month depending on strategy.

### Which strategy is most passive?

REITs (100% passive) followed by crowdfunding (95%) and NNN leases (99%). Turnkey with property manager is 90% passive. STR with PM is 80% passive. House hacking is 50% passive.

### Does Stripe replace the property manager?

No. Stripe automates collection, but the PM manages tenants, repairs, and day-to-day operations. Stripe + PM = the perfect combination for passive income.

### Can I generate passive income without being an owner?

Yes: REITs, crowdfunding, and private lending do not require direct ownership. But control and tax benefits (depreciation) are lower.

### How long does it take to reach significant passive income?

With the right strategy (turnkey + PM + Stripe), you can have your first property generating passive income in 3-6 months from starting. To replace a $5,000/month income, you need 5-10 properties (2-5 years).

### Do taxes affect passive income?

Yes. Foreigners pay 10-37% on net income (with W-8ECI) or 30% on gross (without W-8ECI). Depreciation significantly reduces the tax. Consult a CPA to maximize your net income.

## 12. Passive Income Checklist

### SELECT STRATEGY:
- [ ] Define available budget
- [ ] Choose desired passivity level
- [ ] Evaluate risk tolerance
- [ ] Decide between LTR, STR, REIT, crowdfunding or NNN
- [ ] Research target markets

### IMPLEMENT AUTOMATION:
- [ ] Form LLC for each property
- [ ] Open separate bank account
- [ ] Set up Stripe for automatic collection
- [ ] Set up Stripe Subscriptions for monthly rent
- [ ] Connect Stripe with PM software
- [ ] Set up Stripe Tax (if applicable)
- [ ] Set up automatic payments (mortgage, insurance, tax)

### DELEGATE MANAGEMENT:
- [ ] Hire property manager (LTR 8-12% or STR 20-30%)
- [ ] Hire CPA for annual taxes
- [ ] Hire registered agent for LLC
- [ ] Set up automatic monthly reports
- [ ] Review reports 1-2 hours/month

### OPTIMIZE:
- [ ] File W-8ECI to avoid 30% withholding
- [ ] Maximize depreciation (cost segregation)
- [ ] Review DSCR annually
- [ ] Refinance when rates drop
- [ ] Reinvest cash flow into new properties
- [ ] Scale: from 1 property to 5+ in 2-3 years

## Conclusion

**Generating passive income with properties in the US** is completely achievable with the right combination of strategy, structure, and automation. The key is in three pillars:

1. **Right strategy**: turnkey LTR or STR with property manager for maximum passivity
2. **Legal structure**: LLC per property for protection
3. **Automation**: Stripe for automatic collection, reporting, and taxes

Passive income is not "zero work," but "minimum strategic work." With Stripe automating collections, a property manager handling day-to-day operations, and a CPA taking care of taxes, your work is reduced to 1-2 hours per month reviewing reports and making decisions.

At **Sotomayor Consulting International**, we help you build your passive income portfolio: from selecting turnkey properties and forming LLCs to setting up Stripe for automatic collection and connecting you with trusted property managers. Contact us for a personalized consultation.
