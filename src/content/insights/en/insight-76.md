---
title: "Holding vs Operating Company: Differences and Structure 2026"
description: "Holding vs operating company"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Corporate structure diagram showing a holding company at the top with multiple operating companies below"
---

**Holding vs operating company** is a key distinction in corporate structuring. While the operating company runs the day-to-day business, the holding company is the owner entity that centralizes control, asset protection, and tax optimization.

In this guide, we explain **the differences between holding and operating company** in 2026: structure, tax benefits, asset protection, and how to implement with Stripe.

## 1. What is a Holding Company?

### Definition

A **holding company** is an entity that does not perform operational activities directly, but rather owns and controls other companies (subsidiaries) through share ownership. Its main function is to centralize ownership, protection, and tax planning.

### Characteristics

| Characteristic | Description |
|---------------|-------------|
| **Activity** | Doesn't operate directly, owns shares |
| **Income** | Dividends, capital gains, royalties |
| **Function** | Control, protection, tax planning |
| **Structure** | Above operating companies |
| **Risk** | Low (no exposed operations) |
| **Costs** | Low maintenance |

## 2. What is an Operating Company?

### Definition

An **operating company** is the entity that performs the actual commercial activity: sells products, provides services, hires employees, invoices clients. It has operational exposure and commercial risk.

### Characteristics

| Characteristic | Description |
|---------------|-------------|
| **Activity** | Operates the business directly |
| **Income** | Sales, services, products |
| **Function** | Execute business operations |
| **Structure** | Below the holding company |
| **Risk** | High (exposed to lawsuits, suppliers, clients) |
| **Costs** | High operational costs |

## 3. Direct Comparison

| Aspect | Holding | Operating Company |
|--------|---------|-------------------|
| **Purpose** | Own and control | Operate and generate income |
| **Activity** | Investment management | Sales of products/services |
| **Income** | Dividends, royalties | Client invoicing |
| **Legal risk** | Minimal | High |
| **Protection** | Protects owners | Needs protection |
| **Employees** | Few or none | Operational team |
| **Invoicing** | Doesn't invoice public | Invoices clients |
| **Taxes** | Reduced corporate rate | Standard corporate rate |
| **Stripe** | Doesn't need Stripe | Stripe for payments |
| **Maintenance cost** | $500-2,000/year | $1,000-5,000+/year |

## 4. Recommended Structure

### Typical Structure

```
Owners (individuals)
       │
       ▼
  ┌─────────────┐
  │   HOLDING   │  ← Owns subsidiaries
  │  (US or     │     Receives dividends, royalties
  │   offshore) │     No operations, no risk
  └─────────────┘
       │
       ├────────────────────────────────┐
       ▼                                ▼
┌─────────────────┐          ┌─────────────────┐
│  OPERATING 1    │          │  OPERATING 2    │
│  (US /          │          │  (LATAM /       │
│   country A)    │          │   country B)    │
│  ─ Invoices     │          │  ─ Invoices     │
│    clients      │          │    clients      │
│  ─ Has          │          │  ─ Has          │
│    employees    │          │    employees    │
│  ─ Stripe       │          │  ─ Stripe       │
│  ─ Risk         │          │  ─ Risk         │
└─────────────────┘          └─────────────────┘
```

### Practical Example

```
Holding: Sotomayor Holding LLC (Wyoming)
  ├── Sotomayor Consulting LLC (US) → Stripe → Global clients
  ├── Sotomayor LATAM S.A.S. (Colombia) → LATAM clients
  └── Sotomayor Europe Ltd (UK) → Europe clients
```

## 5. Benefits of the Holding Structure

### Asset Protection

| Benefit | Description |
|---------|-------------|
| **Risk isolation** | Each operating entity answers for itself |
| **Asset protection** | Holding owns IP, brands, patents |
| **Lawsuit shield** | They sue the operating company, not the holding |
| **Asset separation** | Strategic assets in holding, away from operational risk |

### Tax Benefits

| Benefit | Description |
|---------|-------------|
| **Tax consolidation** | Offset losses between operating companies |
| **Royalties** | Pay royalties from operating to holding (deductible) |
| **Dividends** | Dividends to holding at reduced rate |
| **Subsidiary sale** | Capital gains in holding with tax benefit |
| **International planning** | Structure by country according to tax rates |

### Example: IP Royalties

```javascript
// Operating company pays royalties to holding for IP use
// Holding receives income without operational risk

// Stripe collects in operating company
const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Software License',
      },
      unit_amount: 100000, // $1,000
    },
    quantity: 1,
  }],
});

// Operating company pays 5% royalty to holding
// $50 goes to holding as royalty (deductible for operating)
// $950 stays in operating (subject to local tax)
```

## 6. Holding with Stripe

### Stripe in the Operating Company

```javascript
// Stripe goes in the operating company, not the holding
// Operating company invoices, collects, and has client relationships

const account = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: {
    name: 'Operating Company LLC', // Not the holding
    tax_id: 'XX-XXXXXXX',
  },
});

// Payments go to operating company's bank account
// Operating company then distributes dividends/royalties to holding
```

### Stripe Connect for Multiple Operating Companies

```javascript
// Stripe Connect: Each operating company can have its own account
// Holding centralizes reporting

// Operating 1: US
const accountUS = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  business_type: 'company',
});

// Operating 2: Colombia
const accountCO = await stripe.accounts.create({
  type: 'express',
  country: 'CO',
  business_type: 'company',
});

// Stripe allows viewing all from a single Dashboard
```

## 7. Money Flow in the Structure

### How Money Circulates

```
Client → Stripe → Operating company bank account
                         │
                         ▼
                  ┌──────────────┐
                  │  OPERATING   │
                  │  ─ Pays      │
                  │    expenses  │
                  │  ─ Pays      │
                  │    royalties │
                  │    to holding│
                  │  ─ Pays      │
                  │    taxes     │
                  └──────┬───────┘
                         │ Royalties / Dividends
                         ▼
                  ┌──────────────┐
                  │   HOLDING    │
                  │  ─ Receives  │
                  │    royalties │
                  │  ─ Invests   │
                  │  ─ Protects  │
                  │    assets    │
                  └──────────────┘
```

### Royalties from Operating to Holding

```javascript
// Stripe: Doesn't directly handle inter-company royalties
// but you can use Transfers to simulate it

// 1. Stripe charges client → Operating account
// 2. Operating company transfers royalty to holding

const transfer = await stripe.transfers.create({
  amount: 5000, // $50 (5% royalty on $1,000)
  currency: 'usd',
  destination: 'ba_holding_account',
  transfer_group: 'ROYALTY-2026-01',
  metadata: {
    type: 'royalty',
    invoice_ref: 'INV-2026-001',
    ip_license: 'SOFTWARE-LICENSE-001',
  },
});
```

## 8. Recommended Use Cases

### For Digital Professional

| Structure | Recommendation |
|-----------|---------------|
| **Income < $100K/year** | Single operating LLC (Stripe Atlas) |
| **Income $100K-$500K/year** | Operating LLC + Holding LLC |
| **Income > $500K/year** | Delaware holding + operating companies by country |

### For SaaS / Technology

| Asset | Where It Goes |
|-------|--------------|
| **Source code** | Holding (licenses to operating) |
| **Trademark** | Holding |
| **Patents** | Holding |
| **Client contracts** | Operating company |
| **Employees** | Operating company |
| **Stripe** | Operating company |

### For Business with Partners

| Element | Holding | Operating |
|----------|---------|-----------|
| **Owners** | Partners own the holding | Holding owns the operating |
| **Investment** | Partners invest in holding | Holding capitalizes operating |
| **Exit** | They sell holding stake | Operating continues |
| **Protection** | Partners don't answer for operating debts | Operating assumes risks |

## 9. Legal and Tax Considerations

### Transfer Pricing

| Rule | Description |
|------|-------------|
| **Arm's length principle** | Transactions between holding and operating must be at market price |
| **Documentation** | Must document the pricing method |
| **Royalties** | Must be reasonable and justifiable (2-10% per industry) |
| **Penalties** | Incorrect transfer pricing → significant penalties |

### Recommended Jurisdictions

| Function | Jurisdiction | Reason |
|----------|-------------|--------|
| **Holding** | Delaware, Wyoming, Netherlands, Switzerland | Protection, tax treaties |
| **Operating US** | Wyoming, Florida, Texas | No state corporate tax |
| **Operating LATAM** | Founder's residence country | Local compliance |

### Substance Requirements

> Tax authorities require the holding company to have **economic substance**: office, board, real decisions in the jurisdiction. A holding without substance can be disregarded for tax purposes.

## 10. Frequently Asked Questions

### Do I need a holding company as a freelancer?

Generally not if billing under $100K/year. A single LLC is sufficient. A holding makes sense when you have multiple businesses or significant income.

### Can I have Stripe in the holding company?

Not recommended. Stripe should be in the operating company that has client relationships. The holding doesn't operate or invoice.

### Does the holding company pay taxes?

Depends on where it's incorporated and where it receives income. A Delaware holding with no US income pays no US tax but must file.

### How do I pay myself?

The holding pays you dividends or loans you money. The operating pays royalties to the holding. Don't pay yourself directly from the operating if you have a holding.

### How much does a holding cost to maintain?

$500-2,000/year including registration, registered agent, accounting, and filings. More if audited.

### Can I have a holding without an operating company?

Yes. A holding can hold only financial assets or IP without an operating company. But for active businesses, an operating company is needed.

## 11. Quick Step-by-Step

### Summary in 5 Steps

| Step | Action | Time |
|------|--------|------|
| **1** | Assess if you need a holding (income, multiple businesses, protection) | 1 week |
| **2** | Form the holding in adequate jurisdiction (Delaware, WY, Netherlands) | 2-4 weeks |
| **3** | Form operating company(ies) with Stripe | 1-2 weeks |
| **4** | Transfer IP (brands, patents, code) to the holding | 2-4 weeks |
| **5** | Establish royalty contracts and transfer pricing | 1-2 weeks |

### Holding + Operating Checklist

- [ ] Holding formed in adequate jurisdiction
- [ ] Operating company(ies) formed
- [ ] IP transferred to holding (brands, patents, code)
- [ ] License/royalty contract signed
- [ ] Transfer pricing documented
- [ ] Stripe in operating company(ies)
- [ ] Separate bank accounts for holding and operating
- [ ] Dividend/royalty flow defined
- [ ] Economic substance of holding (office, board)
- [ ] International tax advisor hired
- [ ] Tax filings for holding and operating
- [ ] Annual structure review

## Conclusion

**The difference between holding and operating company** is fundamental for entrepreneurs seeking to protect assets, optimize taxes, and scale with multiple businesses. The holding owns and protects strategic assets; the operating company runs the business and assumes operational risks.

Stripe integrates perfectly with the operating company to collect from clients, while the holding centralizes intellectual property, asset protection, and tax planning.

At **Sotomayor Consulting International**, we advise on holding and operating company structuring, including entity formation, IP transfer, royalty contracts, and corporate Stripe setup. Contact us for personalized consulting.
