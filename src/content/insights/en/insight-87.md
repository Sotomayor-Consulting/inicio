---
title: "How to Structure Properties for Asset Protection: 2026 Guide"
description: "How to structure properties for asset protection"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Pyramid structure of asset protection: individual properties → LLCs → Holding → Trust, with protection shields at each level"
---

**Structuring properties for asset protection** is the process of organizing your real estate assets into a legal architecture that minimizes risk, shields your personal wealth, and optimizes taxes. The correct structure separates each property into its own LLC, groups the LLCs under a holding, and uses strategic trusts for succession.

In this guide, we explain **how to structure properties for asset protection** in 2026: from the single LLC to multi-layer structures with international holdings and irrevocable trusts.

## 1. Principles of Asset Protection

### The 3 Pillars

| Pillar | Description |
|--------|-------------|
| **Separation** | Each property in a distinct legal entity |
| **Shielding** | Entities have no relationship (no cross-guarantees) |
| **Succession planning** | Assets pass to heirs without tax or probate |

### The Golden Rule

```
NEVER mix these elements:

❌ Two properties in one LLC
   → If sued over Property A, you also lose Property B

❌ One LLC with properties + cash + business
   → Everything is exposed to any lawsuit

❌ Your personal name anywhere in the chain
   → You pierce the corporate veil and lose protection

✅ Each rental property in its own LLC
✅ The LLC has no other significant assets
✅ You are not a direct member of the LLC (use holding or trust)
```

```javascript
// Stripe: Each property should have its own Stripe account
// or at least its own separate products/prices

// Example: Two properties, two separate Stripe setups

// Property A: Orlando Condo LLC
const accountA = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: { name: 'Orlando Condo LLC', tax_id: 'XX-XXXXXXX' },
});

// Property B: Tampa House LLC  
const accountB = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: { name: 'Tampa House LLC', tax_id: 'XX-XXXXXXX' },
});

// NEVER use a single Stripe account for both properties
```

## 2. Structure Level 1: One Property

### The Basic Recommended Structure

```
For ONE property in the US:

          You (Foreigner)
                |
          ┌─────┴─────┐
          │            │
       Holding      Trust
    International  Revocable
    (Panama/BVI)   (US)
          │            │
          └─────┬─────┘
                |
      Florida Property LLC
                |
          ┌─────┴─────┐
          │            │
      Property     Stripe (EIN)
                   (LLC account)
```

### Why This Structure?

| Component | Function | Protection |
|-----------|----------|------------|
| **Florida Property LLC** | Operates property, collects rent | Limits liability to this property |
| **International Holding** | Owns the LLC | Eliminates estate tax (> $60K) |
| **Revocable Trust** | Owns the holding | Avoids probate, defines succession |
| **Stripe (LLC EIN)** | Collects rent | No mixing of personal income |

### Cost of This Structure

| Component | Initial Cost | Annual Cost |
|-----------|-------------|-------------|
| **LLC in Florida** | $150-400 | $138.75 |
| **Holding in Panama** | $1,000-2,000 | $500-1,500 |
| **Trust in US** | $2,000-5,000 | $0-500 |
| **International CPA** | $0 | $1,000-3,000 |
| **Registered Agent (LLC)** | $0 | $100-300 |
| **Total** | **$3,150-7,400** | **$1,739-5,439** |

## 3. Structure Level 2: Multiple Properties

### The Recommended Multi-Layer Architecture

```
For MULTIPLE properties in the US:

                      You (Foreigner)
                           |
                     Family Trust
                  (Irrevocable or Revocable)
                           |
                  ┌─────────┴─────────┐
                  │                   │
            Principal Holding    Principal Holding
            (International)      (Protection)
                  │                   │
             ┌────┴────┐        ┌────┴────┐
             │         │        │         │
        LLC Holding  LLC Holding        ...
        (US)         (US)
             │         │
        ┌────┴────┐  ┌─┴─────┐
        │         │  │       │
   Prop A LLC  Prop B LLC  Prop C LLC
   (Florida)   (Florida)   (Florida)
        │         │         │
   ┌────┴──┐  ┌──┴───┐  ┌──┴───┐
   │Stripe│  │Stripe│  │Stripe│
   │ Acct │  │ Acct │  │ Acct │
```

### Principles of This Architecture

```
1. EACH PROPERTY in its own LLC
   - If sued for one, the others are protected
   - No cross-guarantees between LLCs

2. INTERMEDIATE LLCs (Holding LLC US) group properties
   - By state (e.g., Florida Holdings LLC)
   - By type (e.g., Short-Term Rentals LLC)
   - Simplifies administration and taxes

3. INTERNATIONAL HOLDING owns the US Holding LLCs
   - Eliminates estate tax
   - Adds privacy layer
   - Makes it hard to seize your assets

4. FAMILY TRUST in your country or the US
   - Owns the international holding
   - Defines how assets are distributed
   - Avoids international probate

5. SEPARATE STRIPE per operating LLC
   - Each property collects rent independently
   - Individual income reports
```

### Example with 3 Properties

```
Foreign investor with 3 Florida properties:

Without structure (common mistake):
- Properties in personal name
- All exposed to any lawsuit
- 40% estate tax on EVERYTHING
- Risk: if one tenant sues, you lose all 3

With multi-layer structure:
- Prop A: Orlando Condo LLC
- Prop B: Tampa House LLC  
- Prop C: Miami Beach LLC
- All 3 LLCs owned by: Florida Holdings LLC
- Florida Holdings LLC owned by: Panama Holding Corp
- Panama Holding Corp owned by: Family Trust

Protection:
- Lawsuit on Prop A → only affects Orlando Condo LLC
- Prop B and Prop C intact
- Estate tax: $0 (international holding)
- Succession: trust defines heirs without probate
```

## 4. LLC Per Property vs. Collective LLC

### Detailed Comparison

| Aspect | Individual LLC Per Property | Collective LLC (multiple properties) |
|--------|----------------------------|-------------------------------------|
| **Protection** | ✅ Maximum (total isolation) | ❌ One lawsuit exposes all |
| **Annual cost** | $138.75 + RA each | $138.75 + RA (only one) |
| **Complexity** | High (multiple filings) | Low (one filing) |
| **Loans** | Individual (easier) | Can bundle properties |
| **Sale** | Sell the LLC (no FIRPTA if structured well) | Hard to sell one property |
| **Insurance** | Individual policy | Collective policy (more expensive) |
| **Stripe** | Separate account | One account (mixes income) |

### When to Use Each Option

```
INDIVIDUAL LLC (recommended for most):
- You have 2+ properties
- You want maximum protection
- You plan to sell properties individually
- Properties have different risk profiles

COLLECTIVE LLC (specific cases only):
- You have 1 property
- Very low risk properties (e.g., land)
- Properties are part of the same project (e.g., multifamily building)
- Cost savings justify the additional risk
```

```javascript
// Stripe: Configuration for individual LLC

// Each operating LLC has its own Stripe account
// But you can use Stripe Connect to view everything from one dashboard

// Individual connected accounts
const accounts = await stripe.accounts.list({ limit: 10 });

// Unified dashboard via Stripe Connect
// Visible only to the holding or administrator

// Consolidated report (optional)
const consolidatedReport = await stripe.reporting.reportRuns.create({
  report_type: 'connected_accounts',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 2592000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});
```

## 5. International Holding: The Ultimate Shield

### Why an International Holding?

| Benefit | Explanation |
|---------|-------------|
| **Estate tax** | Holding shares are NOT US assets |
| **Privacy** | Real owner does not appear in US public records |
| **Asset seizure protection** | Seizing foreign holding shares is very difficult |
| **Tax flexibility** | You can accumulate profits in the holding without distributing |
| **Succession** | Shares are inherited per the holding country's law |

### Recommended Jurisdictions

| Jurisdiction | Annual Cost | Privacy | Estate Tax | Reputation |
|-------------|-------------|---------|-----------|-----------|
| **Panama** | $500-1,500 | ✅ High | ❌ N/A | ✅ Good |
| **Netherlands** | $2,000-5,000 | ⚠️ Medium | ❌ N/A | ✅ Excellent |
| **BVI** | $1,000-2,500 | ✅ High | ❌ N/A | ✅ Good |
| **Cayman Islands** | $2,000-4,000 | ✅ High | ❌ N/A | ✅ Excellent |
| **Uruguay** | $1,500-3,000 | ⚠️ Medium | ❌ N/A | ✅ Good |
| **Delaware (US)** | $300-500 | ⚠️ Low | ✅ Exposed | ✅ Excellent |

> IMPORTANT: A Delaware holding does NOT protect from estate tax because it is a US entity. For estate tax protection, the holding must be outside the US.

### How Money Flows

```
Tenant pays rent → Stripe (operating LLC)
  → LLC pays expenses (mortgage, tax, insurance, management)
  → LLC transfers profit to US Holding LLC
  → US Holding transfers to International Holding
  → International Holding distributes (or retains)
  → You receive dividends in your country

TAX ADVANTAGE:
- The LLC pays income tax in the US (on rents)
- The international holding pays NO US tax
- You only pay taxes when distributing to yourself
- You can defer taxes by keeping profits in the holding
```

## 6. Trusts in the Structure

### Revocable vs. Irrevocable Trust

| Aspect | Revocable Trust | Irrevocable Trust |
|--------|----------------|-------------------|
| **Control** | You control (can change) | You lose control (cannot change) |
| **Protection** | ❌ Low (assets are yours) | ✅ High (assets are not yours) |
| **Estate tax** | ❌ Exposed | ✅ Protected |
| **Probate** | ✅ Avoids it | ✅ Avoids it |
| **Cost** | $2,000-5,000 | $3,000-10,000 |
| **Use** | Simple succession | Protection + succession |

### Structure with Trust

```
OPTION A: Revocable Trust (for succession)
- You create a trust in your country or the US
- The trust owns the international holding
- Upon death, the trust transfers per your instructions
- No probate, no estate tax

OPTION B: Irrevocable Trust (total protection)
- You create an irrevocable trust (Cook Islands, Nevis, etc.)
- The trust owns the international holding
- You are a beneficiary, not an owner
- Creditors cannot reach the assets
- Neither can the IRS (if well structured)

OPTION C: Domestic Trust + Holding
- Trust in your country owns the holding
- The holding owns the US LLCs
- You declare income in your country
- The trust simplifies local succession
```

### Example: Irrevocable Trust in Cook Islands

```
Cost:
- Formation: $5,000-10,000
- Annual maintenance: $1,500-3,000

Protection:
- Cook Islands laws do NOT recognize foreign judgments
- A creditor would have to litigate in Cook Islands
- Statute of limitations: 1 year (vs 4+ in the US)
- Almost impossible to pierce

Who is it for:
- Estates > $1M in US assets
- High-risk professions (doctors, lawyers)
- Business owners in the US
- Investors with multiple properties
```

## 7. Insurance as an Additional Layer

### The Structure + Insurance Combination

| Layer | Protects Against | Cost |
|-------|-----------------|------|
| **LLC** | Minor lawsuits (up to property value) | $138.75/year |
| **Liability insurance (LLC policy)** | $1-2M per incident | $500-2,000/year |
| **Umbrella policy** | $1-5M additional | $300-1,000/year |
| **Irrevocable trust** | Creditor seizure | $1,500-5,000/year |
| **International holding** | Estate tax + international seizure | $500-2,000/year |

### Recommendation by Profile

```
Low Risk Profile (1 property, < $300K):
- LLC + Liability insurance ($1M)
- Revocable trust (optional)
- Cost: ~$1,000/year

Medium Risk Profile (2-3 properties, $300K-$1M):
- LLC per property + Liability insurance
- Umbrella policy ($2M)
- International holding
- Revocable trust
- Cost: ~$3,000-5,000/year

High Risk Profile (4+ properties, > $1M):
- LLC per property + Liability insurance
- Umbrella policy ($5M)
- International holding
- Irrevocable trust (offshore)
- Cost: ~$7,000-15,000/year
```

## 8. Common Structuring Mistakes

### What NOT to Do

| Mistake | Why It Is Dangerous |
|---------|-------------------|
| **Being a direct LLC member** | You become the lawsuit target |
| **Cross-guarantees between LLCs** | Bank can execute against all if one defaults |
| **One LLC for all properties** | One lawsuit exposes your entire portfolio |
| **Not separating Stripe by LLC** | Mixes income, loses protection |
| **Holding in Delaware (not international)** | Does not protect from estate tax |
| **Having insurance without LLC** | LLC alone is not enough |
| **Not maintaining the LLC** | Expired annual report = dissolved entity |
| **Signing contracts in personal name** | Pierces the corporate veil |

### Incorrect Structure Example

```
❌ INCORRECT STRUCTURE:

You (Personal Name)
  ├── Property A ($400K) - in your name
  ├── Property B ($350K) - in "My LLC" (single LLC)
  └── Personal bank account with $100K

Risks:
- Lawsuit on Property A → you lose A + B + account
- Estate tax: 40% on $750K = $300K
- No privacy (your name in public records)
- Probate in the US (costly and slow)
```

```
✅ CORRECT STRUCTURE:

Family Trust (your country)
  └── Panama Holding Corp
        ├── Florida Holdings LLC
        │     ├── Orlando Condo LLC → Prop A
        │     └── Tampa House LLC → Prop B
        └── Holding bank account

Benefits:
- Lawsuit on Prop A → only affects Orlando Condo LLC
- Estate tax: $0
- Total privacy
- No probate in the US
```

## 9. Integrated Succession Planning

### How Your Properties Are Inherited

```
Without structure:
- Your properties are in your personal name
- Upon death, they go through Florida probate
- Probate: 6-18 months, $5,000-20,000 in costs
- If > $60K, IRS takes 40% estate tax
- Your heirs receive less than half

With structure (Trust + Holding + LLCs):
- Trust owns the international holding
- Upon death, the trust transfers per your instructions
- No probate (the trust does not die)
- No estate tax (holding is not a US asset)
- Your heirs receive 100%

Required documents:
1. Trust instrument (where and how assets are distributed)
2. Last will (captures any asset outside the trust)
3. Power of attorney (who manages if incapacitated)
4. Healthcare directive (medical decisions)
5. Letter of instructions (asset list, passwords, contacts)
```

### Succession by Structure

| Structure | Probate | US Estate Tax | Succession Cost | Time |
|-----------|---------|--------------|----------------|------|
| **Personal name** | ✅ Yes | ✅ 40% (> $60K) | $5,000-20,000 | 6-18 months |
| **LLC only** | ✅ Yes | ✅ 40% | $5,000-20,000 | 6-18 months |
| **LLC + International holding** | ❌ No | ❌ $0 | $1,000-3,000 | 1-3 months |
| **LLC + Holding + Trust** | ❌ No | ❌ $0 | $500-2,000 | 2-6 weeks |

## 10. Costs vs. Benefits

### Return on Investment Analysis

```
Scenario: Investor with 3 properties valued at $1,500,000

ANNUAL STRUCTURE COST:
- 3 LLCs ($138.75 each): $416
- Registered Agent ($150 each): $450
- International Holding: $1,000
- Trust maintenance: $200
- CPA (taxes + structure): $2,500
- Total: ~$4,566/year

BENEFITS:
- Estate tax avoided: $1,500,000 x 40% = $600,000
- Lawsuit protection: potentially millions
- Privacy: priceless
- Succession without probate: saves $10,000+
- Tax savings (W-8ECI + depreciation): $5,000-15,000/year

ROI:
- Annual investment: $4,566
- Potential benefit: $600,000+ (estate tax alone)
- ROI: 13,000%+ at time of death
- Annual ROI (tax savings only): 100-300%
```

| Structure Level | Annual Cost | Protection | Who It Is For |
|----------------|------------|-----------|--------------|
| **Basic** (LLC only) | $500-1,000 | ⚠️ Partial | 1 property, < $200K |
| **Intermediate** (LLC + Holding) | $2,000-4,000 | ✅ High | 2-3 properties, $200K-$1M |
| **Advanced** (LLC + Holding + Trust) | $4,000-8,000 | ✅ Maximum | 4+ properties, > $1M |

## 11. Frequently Asked Questions

### Do I need an LLC for each property?

Yes, it is the standard recommendation for maximum protection. Each LLC isolates risk to that property. If you have low-value properties, you might consider grouping them, but the risk is that one lawsuit affects all.

### Does an LLC protect me from everything?

No. The LLC protects your personal assets from property-related lawsuits. But it does not protect against: owner personal injuries, personal debts, divorce, or federal taxes. That is why it is combined with insurance and a trust.

### Can I use a Delaware holding?

Yes, but it does not protect from estate tax. For estate tax protection (> $60K), the holding must be outside the US. A Delaware holding only adds a privacy layer, but the underlying assets remain US assets.

### How much does maintaining this structure cost?

For 3 properties: ~$4,500-6,000/year including LLCs, holding, trust, registered agent, and CPA. The benefit in protection and tax savings far exceeds the cost.

### Does Stripe work with this structure?

Yes. Each operating LLC has its own Stripe account with its EIN. Stripe Connect can consolidate reports for the holding. Stripe Tax calculates taxes per LLC. The holding receives transfers from the LLCs.

### Can I sell properties within the structure?

Yes. Selling the LLC (membership interest) is a way to transfer the property without paying transfer taxes or FIRPTA in some cases. It is a common exit strategy.

## 12. Structuring Checklist

- [ ] Define number of properties and total value
- [ ] Create individual LLC for each property
- [ ] Obtain EIN from IRS for each LLC
- [ ] Open separate bank account per LLC
- [ ] Set up Stripe per LLC (individual EIN)
- [ ] Get liability insurance per LLC ($1-2M)
- [ ] Form international holding (Panama, BVI, Netherlands)
- [ ] Transfer LLC memberships to the holding
- [ ] Create family trust (revocable or irrevocable)
- [ ] Designate trust beneficiaries
- [ ] Draft last will and power of attorney
- [ ] Get umbrella policy (above LLCs)
- [ ] Implement separate accounting system per entity
- [ ] Review structure annually with CPA and attorney
- [ ] Do not mix personal finances with any entity

## Conclusion

**Structuring properties for asset protection** is the difference between having a shielded portfolio and being exposed to losing everything from a lawsuit. The correct architecture separates each property into its own LLC, groups them under an international holding (to avoid estate tax), and places a trust as the ultimate owner (for probate-free succession).

The cost of the structure is minimal compared to the benefit: protecting millions of dollars for a few thousand per year. And the peace of mind that your wealth is shielded, your heirs will receive everything without delays or taxes, and your investments are professionally organized is priceless.

At **Sotomayor Consulting International**, we design the ideal asset protection structure for your portfolio: from creating LLCs per property, forming international holdings, establishing trusts, to integrating with Stripe, insurance, and comprehensive succession planning. Contact us for a personalized consultation.
