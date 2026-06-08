---
title: "How to Invest in Florida as a Foreigner: Guide 2026"
description: "How to invest in Florida as a foreigner"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Map of Florida with icons of properties, LLC, dollars, airplane, and international flags around it"
---

**Investing in Florida as a foreigner** is one of the most popular international wealth diversification strategies. Florida offers unique advantages: no state income tax, foreign-friendly laws, a solid real estate market, and asset protection through tenancy by entirety.

In this guide, we explain **how to invest in Florida as a foreigner** in 2026: legal structures, financing, taxes, property management, asset protection, and Stripe's role in rent collection.

## 1. Why Invest in Florida?

### Advantages for Foreign Investors

| Advantage | Description |
|-----------|-------------|
| **No state income tax** | You pay no state income tax, only federal |
| **Asset protection** | Tenancy by entirety protects married couples |
| **Strong market** | Constant demand, historical appreciation |
| **No foreign restrictions** | You can buy as an individual or LLC |
| **Homestead exemption** | Protects primary residence from creditors |
| **Landlord-friendly laws** | Faster eviction than NY or California |
| **Climate and quality of life** | Attracts tenants and buyers year-round |
| **International connections** | 20+ international airports, direct flights |

### Key Investment Cities

| City | Average Price | Yield | Profile |
|------|--------------|-------|---------|
| **Miami** | $400-800K | 4-6% | Tourism, luxury, international |
| **Orlando** | $300-500K | 6-8% | Tourism, vacation rental |
| **Tampa** | $350-550K | 5-7% | Growth, tech jobs |
| **Jacksonville** | $250-400K | 6-9% | Highest yield, lower price |
| **Fort Lauderdale** | $350-600K | 4-6% | Beaches, yachts, lifestyle |
| **Naples** | $600K-1.5M | 3-5% | Luxury, retirement, golf |

> In 2026, Florida remains the #1 state for foreign investors in the US, accounting for over 20% of international home purchases.

## 2. Legal Structures for Investing in Florida

### Titling Options

| Structure | Recommended Use | Protection | Taxes |
|-----------|----------------|-----------|-------|
| **Personal name** | Direct purchase as foreigner | No protection | File as non-resident |
| **Florida LLC** | Rental properties | High (asset protection) | Pass-through |
| **Wyoming/NM LLC** | Anonymity + protection | High | Pass-through |
| **Revocable trust** | Estate planning | Medium | As individual |
| **Land trust** | Total anonymity | High | As individual |
| **Corporation (C-Corp)** | Large volumes | High | Double taxation |

### LLC for Foreign Investors

```javascript
// Stripe: Collect rent with Florida LLC
// Stripe requires EIN or ITIN

const account = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: {
    name: 'Florida Properties LLC',
    structure: 'llc',
    tax_id: 'XX-XXXXXXX', // IRS EIN
    address: {
      line1: '1000 Brickell Ave',
      city: 'Miami',
      state: 'FL',
      postal_code: '33131',
      country: 'US',
    },
  },
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// Stripe for monthly rent collection
const rentPayment = await stripe.paymentIntents.create({
  amount: 300000, // $3,000
  currency: 'usd',
  payment_method_types: ['card'],
  description: 'Monthly rent - Apt 3B',
  metadata: {
    property_id: 'MIA-APT-3B',
    tenant_id: 'TEN-001',
    month: '2026-06',
  },
});
```

### Florida LLC vs. Delaware LLC

| Aspect | Florida LLC | Delaware LLC |
|--------|------------|-------------|
| **Annual cost** | $138.75 (annual report) | $300 (franchise tax) + agent |
| **Anonymity** | No (members public) | Partial |
| **Protection** | Good | Good |
| **Court system** | Real estate specialized | Corporate, not real estate |
| **Taxes** | No state income tax | No state income tax (LLCs pay) |
| **Recommendation** | ✅ Best for FL properties | For holdings or VC investment |

### LLC Per Property vs. One LLC

```
Option 1: LLC per property
├── LLC #1: Miami Beach house
├── LLC #2: Orlando condo
├── LLC #3: Tampa townhouse
├── Cost: 3 LLCs x $139 = $417/year
└── Benefit: Isolates each property's risk

Option 2: One LLC for all
├── Florida Properties LLC
│   ├── Miami Beach house
│   ├── Orlando condo
│   └── Tampa townhouse
├── Cost: 1 LLC = $139/year
└── Risk: Lawsuit on one property exposes all

Recommendation: LLC per property if you have 3+ properties
or if any property has high risk (pool, vacation rental).
```

## 3. Financing for Foreigners

### Mortgage Options

| Loan Type | Foreigners | Requirements | Approx. Rate | Down Payment |
|-----------|-----------|-------------|-------------|-------------|
| **Conventional (FNMA)** | ❌ No | Residency + US credit | — | — |
| **Portfolio loan** | ✅ Yes | 30-50% down, 6-12 months liquidity | 7-9% | 30-50% |
| **DSCR loan** | ✅ Yes | Based on rents, not personal income | 7.5-9.5% | 25-35% |
| **Hard money** | ✅ Yes | Based on property value | 10-14% | 20-30% |
| **Private / Family office** | ✅ Yes | Direct negotiation | 6-10% | Variable |

### DSCR Loan for Foreign Investors

```
DSCR (Debt Service Coverage Ratio) = Rental income / Mortgage payment

DSCR > 1.0 = Property pays for itself
DSCR > 1.2 = Easy approval
DSCR < 1.0 = Need to contribute more capital

Advantages for foreigners:
- No SSN needed
- No ITIN needed
- No personal income needed
- Only rental potential counts
- Close in LLC (not personal name)

Typical requirements:
- 30-40% down payment
- 6-12 months liquid reserves
- Appraised property
- US bank account
```

### EIN and ITIN

```
EIN (Employer Identification Number):
- Required for business bank account
- Required for Stripe
- Required for tax filing
- Free, apply to IRS with SS-4
- Registered agent can apply if you have no SSN

ITIN (Individual Taxpayer Identification Number):
- Required if filing taxes as an individual
- Required for personal mortgages
- Process: IRS Form W-7
- Time: 7-11 weeks
```

## 4. Taxes for Foreign Investors in Florida

### Federal Taxes

| Tax | Rate | Applies To |
|-----|------|-----------|
| **Rental income** | Marginal rate (10-37%) | Non-resident aliens |
| **Capital gain (hold < 1 year)** | Marginal rate (up to 37%) | Short-term |
| **Capital gain (hold > 1 year)** | 0-20% + 3.8% (NIIT) | Long-term |
| **FIRPTA (sale)** | 15% withholding on sale price | Non-resident aliens |
| **Interest** | 30% (or treaty rate) | Bank accounts |

### FIRPTA (Foreign Investment in Real Property Tax Act)

```javascript
// FIRPTA: When selling, the buyer withholds 15%
// of the sale price and sends it to the IRS

/*
Example:
Sale price: $500,000
FIRPTA withholding: $75,000 (15%)

You can request a withholding certificate
if:
- Property sells for under $300,000
- Buyer will use it as residence
- No actual capital gain

Recommendation:
- Get ITIN before selling
- Hire a CPA specialized in FIRPTA
- Refund process can take 6-12 months
*/
```

### Florida Taxes

| Tax | Applies? | Note |
|-----|---------|------|
| **State income tax** | ❌ No | Florida has none |
| **Property tax** | ✅ Yes | ~0.8-1.2% of value annually |
| **Sales tax** | ✅ Yes | 6-7.5% on construction materials |
| **Estate tax** | ❌ None for foreigners with < $60K in US | LLC structure protects |
| **Intangible tax** | ❌ No | Eliminated in 2007 |

### 1031 Exchange

```
1031 Exchange: Defer capital gains by selling and reinvesting.

Requirements:
- Sell an investment property
- Buy another investment property of equal or greater value
- 45 days to identify new property
- 180 days to close
- Use a qualified intermediary

Applies to foreigners: Yes, but FIRPTA still applies.

Strategy:
- Sell Florida property
- Buy higher-value property
- Defer capital gains tax
- Repeat until death (step-up in basis)
```

## 5. Property Management

### Property Manager vs. Self-Management

| Aspect | Property Manager | Self-Management |
|--------|----------------|----------------|
| **Cost** | 8-12% of monthly rent | 0% |
| **Time** | 0% of your time | Weekly dedication |
| **Local presence** | Not needed in Florida | Need presence |
| **Maintenance** | They coordinate repairs | You coordinate |
| **Tenants** | Find, screen, contract | You do everything |
| **Legal** | Know local laws | Risk of non-compliance |
| **Stripe** | Use theirs or yours | You manage Stripe |

### Stripe for Rent Collection

```javascript
// Stripe: Ideal for monthly rent collection
// Set up recurring subscriptions

// Create monthly rent subscription
const subscription = await stripe.subscriptions.create({
  customer: 'cus_tenant_id',
  items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Monthly Rent - Apt 3B' },
      recurring: { interval: 'month' },
      unit_amount: 300000, // $3,000
    },
    quantity: 1,
  }],
  payment_behavior: 'default_incomplete',
  metadata: {
    property_id: 'MIA-APT-3B',
    tenant_name: 'John Doe',
  },
});

// Stripe sends receipt automatically
// Stripe handles invoices, retrying, and dunning
// Stripe Tax calculates taxes if applicable
```

### Insurance for Florida Properties

| Insurance | Description | Approx. Cost |
|-----------|-------------|-------------|
| **Homeowners / Landlord** | Structure + liability coverage | $1,500-4,000/year |
| **Hurricane insurance** | Separate deductible (2-10% of value) | Included or extra |
| **Flood insurance** | Mandatory in flood zones (NFIP) | $700-2,000/year |
| **Liability insurance** | Protects from tenant lawsuits | Included or $500 extra |
| **Loss of rent insurance** | If property becomes uninhabitable | $200-500/year |
| **Umbrella policy** | Additional coverage on top | $300-500/year per $1M |

> Hurricane insurance in Florida has increased 40%+ in the last 2 years. Budget $2,000-5,000/year for properties near the coast.

## 6. Asset Protection in Florida

### Tenancy by Entirety

```
Tenancy by Entirety: Protection available only for married couples.

How it works:
- Both spouses own 100%
- A creditor of one spouse cannot seize the property
- Only a joint debt of both spouses can reach it
- Automatic if property is in both spouses' names

Requirements:
- Must be legally married
- Property must be in Florida
- Does not apply to LLCs (only personal name)
- Upon divorce, converts to tenancy in common

Advantage: The strongest protection for marriages in the US.
```

### Florida LLC + Tenancy by Entirety

```
Recommended structure for married foreign couples:

YOU and YOUR SPOUSE (married)
  └── Florida LLC (both are members)
       └── Property

Tenancy by entirety doesn't apply directly in the LLC,
but the LLC already protects:
- Personal lawsuit: Does not touch the property
- Property lawsuit: Does not touch personal assets

Plus:
- Both control the LLC
- Succession protection: If one dies, the other continues
- No Florida probate for the LLC
```

### Homestead Exemption

```
Homestead Exemption in Florida:

Primary residence protection:
- Unlimited in value (no cap in Florida)
- Protects from creditors (except mortgage, taxes, HOA)
- Requires: Florida residency and using property as home

Does not apply to investment properties (only primary residence).

For foreign investors:
- If you move to Florida, your primary home is protected
- Your rental properties: need LLC
```

## 7. Estate Planning for Florida Properties

### Florida Probate for Foreigners

| Aspect | No Plan | With Plan |
|--------|---------|-----------|
| **Process** | Florida probate (6-12 months) | No probate |
| **Cost** | 3-5% of property value | $500-2,000 |
| **Time** | 6-18 months | 1-2 months |
| **Privacy** | Public | Private |
| **Foreign** | Complex if heirs live abroad | Simple |

### Succession Strategies

```
Option 1: LLC (recommended)
├── LLC owns the property
├── You are an LLC member
├── Upon death, your shares pass to heirs
├── No probate for the property
└── Stripe: update beneficial owner

Option 2: Revocable trust
├── Trust owns the property
├── You are trustee during life
├── Upon death, successor trustee manages
├── Avoids probate completely
└── Stripe: LLC inside the trust

Option 3: Land trust
├── Total anonymity
├── Land trust is not public
├── Designated beneficiary inherits
└── Similar to trust but specific for real estate
```

## 8. Common Mistakes When Investing in Florida

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| **Buying in personal name** | No asset protection | Use LLC |
| **Not budgeting for insurance** | Hurricane without coverage = total loss | Proper insurance from day 1 |
| **Ignoring FIRPTA** | 15% withholding when selling | Plan with CPA |
| **No EIN** | Can't open bank account or Stripe | Apply for EIN (SS-4) |
| **Buying without seeing** | Purchase without inspection | Inspection + video call |
| **Not considering HOA** | Restrictive rules, high fees | Read HOA before buying |
| **No estate plan** | Florida probate for foreigners | LLC + trust |
| **Underestimating maintenance** | Higher costs than other states | Budget 1-2% of value/year |
| **No property manager** | Problems with remote tenants | Hire local PM |

## 9. Step by Step to Invest in Florida

### Step 1: Planning

| Action | Detail |
|--------|--------|
| **Define budget** | Price + closing (3-5%) + repairs |
| **Choose city** | Based on yield, profile, risk |
| **Choose structure** | Florida LLC (recommended) |
| **Calculate taxes** | Property tax, income tax, FIRPTA |
| **Budget insurance** | Landlord + hurricane + flood |

### Step 2: Purchase

| Action | Detail |
|--------|--------|
| **Form LLC** | Florida LLC (www.sunbiz.org) |
| **Get EIN** | IRS Form SS-4 |
| **Open bank account** | Mercury, Relay, Bank of America |
| **Find property** | MLS, Zillow, local realtor |
| **Financing** | DSCR loan or cash |
| **Inspection** | General + termite + roof |
| **Closing** | Title company + attorney |

### Step 3: Operation

| Action | Detail |
|--------|--------|
| **Register Stripe** | With LLC EIN |
| **Insurance** | Active from closing |
| **Property manager** | Hire if not in FL |
| **Collect rent** | Stripe recurring |
| **File taxes** | International CPA (Form 1040-NR) |
| **Review annually** | Insurance, taxes, structure |

## 10. Frequently Asked Questions

### Do I need a visa to buy property in Florida?

No. Any foreigner can buy property in Florida without a visa. You only need identification (passport) for closing.

### Can I open a bank account in Florida without being there?

Yes, banks like Mercury and Relay allow 100% online account opening for US LLCs with an EIN.

### How much does it cost to maintain a Florida LLC?

The annual report costs $138.75. Plus registered agent ($50-200/year). Total: ~$200-350/year.

### Can I use Stripe to collect rent if I don't live in the US?

Yes. Stripe accepts US LLCs regardless of where the owner lives. You need EIN and a US bank account.

### How much is property tax in Florida?

Between 0.8% and 1.2% of assessed value. A $400K property pays approximately $3,200-4,800/year.

### Can I buy as an individual and later transfer to an LLC?

Yes, but it may trigger the due-on-sale clause on your mortgage. Better to buy directly with the LLC.

### What happens if I don't file US taxes?

The IRS can seize the property, impose fines, and your tenant can report you. Stripe also reports income to the IRS.

## 11. Florida Investment Checklist

- [ ] Define budget and target city
- [ ] Form Florida LLC
- [ ] Get EIN from IRS (Form SS-4)
- [ ] Open business bank account
- [ ] Register Stripe with LLC EIN
- [ ] Find property with local realtor
- [ ] Apply for financing (DSCR) or prepare cash
- [ ] Complete full inspection
- [ ] Purchase insurance: landlord + hurricane + flood
- [ ] Close with title company
- [ ] Hire property manager (if applicable)
- [ ] Set up rent collection in Stripe
- [ ] File taxes annually (international CPA)
- [ ] Designate Stripe successor
- [ ] Review legal structure annually

## Conclusion

**Investing in Florida as a foreigner** is accessible, profitable, and safe when you follow the right steps. The combination of a Florida LLC, EIN, business bank account, and Stripe allows you to operate completely from your home country with asset protection and tax compliance.

Florida remains the #1 destination for Latin American and European investors due to its legal stability, absence of state income tax, and solid real estate market. The key to success is the right structure (LLC), proper financing (DSCR), and professional management (property manager + Stripe).

At **Sotomayor Consulting International**, we help you invest in Florida from start to finish: from forming your LLC and obtaining your EIN to configuring Stripe for rent collection, asset protection, and estate planning. Contact us for personalized consulting.
