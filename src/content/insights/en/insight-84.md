---
title: "What Taxes a Foreigner Pays in Real Estate: 2026 Guide"
description: "What taxes a foreigner pays in real estate"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Tax cycle for foreigner in real estate: purchase, holding, rental and sale with IRS, FIRPTA and property tax icons"
---

**The taxes a foreigner pays in real estate in the US** cover the entire investment cycle: from purchase (transfer taxes), holding (property tax, income tax on rent), to sale (FIRPTA, capital gains, depreciation recapture). Additionally, there is estate tax for estates exceeding $60,000 in US assets.

In this guide, we explain **all taxes a foreigner pays when investing in US real estate** in 2026: rates, deadlines, forms, reduction strategies, and the role of Stripe in income reporting.

## 1. Purchase Taxes

### Transfer Tax

| State/County | Rate | Who Pays | Example ($500K) |
|--------------|------|----------|-----------------|
| **Florida** | 0.7% (doc stamp) + $0.35/$100 (intangibles) | Seller or negotiable | $3,500-5,000 |
| **Texas** | 0.5-1.5% (state + county) | Seller | $2,500-7,500 |
| **New York** | 1.825-2.075% (city + state) | Seller | $9,125-10,375 |
| **California** | 0.11% (county varies) | Seller | $550 |
| **Delaware** | 3% (state + county) | Seller | $15,000 |

### Recording Fees and Other Costs

| Item | Typical Cost |
|------|-------------|
| **Recording fee** | $50-200 |
| **Title search** | $200-400 |
| **Title insurance** | $1,500-3,000 (per $500K) |
| **Survey** | $500-1,000 |
| **Attorney fees** | $1,000-3,000 |

> Important: Foreigners do not pay special taxes for buying. Closing costs are the same as for residents, typically 3-5% of the purchase price.

```javascript
// Stripe is not used for buying properties
// Stripe is used to collect rents ONCE you own the property

// But Stripe can help you save for closing costs:
const savingsGoal = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Savings for property purchase' },
      unit_amount: 500000, // $5,000
    },
    quantity: 1,
  },
}]);
```

## 2. Property Tax

### What Is Property Tax?

It is an annual tax based on the property's assessed value. ALL property owners pay it, whether residents or foreigners.

| State | Average Effective Rate | Per $400K per Year |
|-------|----------------------|-------------------|
| **Florida** | 0.83% | $3,320 |
| **Texas** | 1.60% | $6,400 |
| **New York** | 1.40% | $5,600 |
| **California** | 0.77% | $3,080 |
| **Illinois** | 2.08% | $8,320 |
| **Massachusetts** | 1.12% | $4,480 |

### How It Is Calculated

```
Assessed value x Millage rate = Annual property tax

Example in Florida:
Property value: $400,000
Homestead exemption: NOT applicable (it is investment, not residence)
Assessed value: $400,000
Millage rate: 20 mills (2% or 0.02)
Property tax: $400,000 x 0.02 = $8,000/year

Property tax is paid to the county tax collector.
Generally paid in November (annual) or in two installments.

Tax deduction: Property tax is 100% deductible
on your tax return (Schedule E).
```

### What Happens If You Don't Pay?

| Consequence | Timeline |
|-------------|----------|
| **Late penalty** | 3-5% additional |
| **Interest** | 1-1.5% monthly |
| **Tax lien** | 2 years of non-payment |
| **Tax deed sale (auction)** | After tax lien |

## 3. Income Tax on Rent (For Foreigners)

### Income Tax Rate

| Income Type | Rate | Basis |
|-------------|------|-------|
| **Net rent (with W-8ECI)** | 10-37% (marginal rate) | Net income = income - expenses - depreciation |
| **Gross rent (without W-8ECI)** | 30% flat | Gross rent (no deductions) |

### 2026 Marginal Tax Rates (Non-Resident Alien)

| Net Taxable Income | Rate |
|--------------------|------|
| $0 - $11,600 | 10% |
| $11,601 - $47,150 | 12% |
| $47,151 - $100,525 | 22% |
| $100,526 - $191,950 | 24% |
| $191,951 - $243,725 | 32% |
| $243,726 - $609,350 | 35% |
| $609,351+ | 37% |

### Calculation Example

```
Property: $400,000, 100% financed with DSCR loan
Annual rent: $42,000 ($3,500/month)
Operating expenses: $12,000 (insurance, tax, maintenance)
Mortgage interest: $18,000
Depreciation: $10,909

Tax calculation:

Without W-8ECI (30% withholding on gross):
  - Withholding: $42,000 x 30% = $12,600
  - Final tax: $12,600 (no refund)

With W-8ECI (marginal rate on net):
  - Gross income: $42,000
  - Expenses: -$12,000
  - Interest: -$18,000
  - Depreciation: -$10,909
  - Net income: $1,091
  - Tax (10%): $109

Savings with W-8ECI: $12,491/year
```

```javascript
// Stripe: Calculate estimated tax on rental income

// Stripe Tax can automatically calculate taxes
await stripe.tax.settings.update({
  defaults: {
    tax_behavior: 'exclusive',
  },
});

// Stripe Dashboard → Taxes → Reports
// Stripe generates gross and net income reports

// Example: Annual revenue report
const revenue = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200,
    interval_end: 1704067199,
  },
});
```

## 4. Taxes on Sale

### FIRPTA (Foreign Investment in Real Property Tax Act)

| Item | Detail |
|------|--------|
| **Mandatory withholding** | 15% of TOTAL sale price |
| **Who withholds** | Buyer (via title company) |
| **Deadline to remit to IRS** | 20 days after closing |
| **Forms** | 8288 + 8288-A |
| **Exemption** | < $300,000 and buyer uses as residence |

### Tax Breakdown on Sale

```
Assume you bought for $400,000 and sell for $600,000
after 5 years of renting.

Tax calculation:

1. DEPRECIATION RECAPTURE (25% maximum)
   Depreciation taken over 5 years: $10,909 x 5 = $54,545
   Tax: $54,545 x 25% = $13,636

2. CAPITAL GAINS (0-20% + 3.8% NIIT if applicable)
   Sale price: $600,000
   Adjusted basis: $400,000 - $54,545 = $345,455
   Gain: $600,000 - $345,455 = $254,545
   Capital gain: $254,545 - $54,545 = $200,000
   Tax (20%): $40,000

3. FIRPTA WITHHOLDING (on account)
   Withheld at closing: $600,000 x 15% = $90,000
   Actual tax: $13,636 + $40,000 = $53,636
   Refund requested: $90,000 - $53,636 = $36,364

4. STATE TAX (if applicable)
   Florida: 0% (no state income tax)
   California: up to 13.3% of gain
```

### How to Reduce Taxes When Selling

| Strategy | How It Works | Savings |
|----------|-------------|---------|
| **1031 Exchange** | Reinvest in another property | Defer all tax |
| **Installment sale** | Sell on installments | Defer tax |
| **Wait 1+ years** | Lower capital gains rate | 20% vs 37% |
| **Sell at a loss** | Offset other gains | Variable |
| **Donate to charity** | Avoid tax + deduction | 100% of tax |

## 5. Estate Tax

### The Most Dangerous Tax for Foreigners

| Aspect | US Citizen/Resident | Non-Resident Alien |
|--------|-------------------|-------------------|
| **Exemption** | $13.61M (2026) | $60,000 |
| **Maximum rate** | 40% | 40% |
| **Taxed assets** | Worldwide estate | Only US assets |
| **Spouse** | Unlimited marital deduction | Limited |

### How Estate Tax Is Calculated

```
Example: Foreigner with properties in Florida valued at $2,000,000

Without planning:
- Exemption: $60,000
- Taxable base: $1,940,000
- Estate tax: $1,940,000 x 40% = $776,000
- Your heirs pay: $776,000 to the IRS

With planning (LLC + holding):
- The LLC owns the properties
- The LLC is owned by an international holding
- The foreigner is a shareholder of the holding
- Holding shares are NOT "US assets"
- Estate tax: $0

Another option: Irrevocable Trust
- Assets in trust are not owned by the foreigner
- Estate tax: $0
```

### Assets That Trigger Estate Tax

| US Asset | Subject to Estate Tax? |
|----------|----------------------|
| **Property in personal name** | ✅ Yes |
| **Property in LLC** | ⚠️ Depends (if you are a direct member) |
| **LLC shares in foreign holding** | ❌ No |
| **Bank account** | ❌ No (portfolio interest) |
| **US stocks** | ✅ Yes (if held directly) |
| **Stripe (LLC account)** | ⚠️ If LLC is US, yes |
| **Life insurance** | ❌ No (if paid from your country) |

> For foreigners with more than $60,000 in US assets, estate tax is the most important tax to plan for. Without structure, the IRS can take up to 40% of the estate.

## 6. State vs. Federal Taxes

### Summary by State

| State | State Income Tax | Property Tax | Transfer Tax (purchase) | State Estate Tax |
|-------|----------------|-------------|---------------------|-----------------|
| **Florida** | 0% | 0.8-1.2% | 0.7% | No |
| **Texas** | 0% | 1.6-2.2% | 0.5-1.5% | No |
| **Wyoming** | 0% | 0.5-0.7% | 0% | No |
| **Nevada** | 0% | 0.6-0.9% | 0.5% | No |
| **California** | 1-13.3% | 0.7-0.8% | 0.11% | No |
| **New York** | 4-10.9% | 1.4% | 1.825% | Yes (up to 16%) |
| **Massachusetts** | 5% | 1.1% | 0.5% | Yes (up to 16%) |

### Federal Taxes (Apply in All States)

| Tax | Rate | When |
|-----|------|------|
| **Income tax (rent)** | 10-37% | Annually |
| **Capital gains (sale)** | 0-20% + 3.8% NIIT | Upon sale |
| **Depreciation recapture** | 25% maximum | Upon sale |
| **FIRPTA** | 15% (withholding) | Upon sale |
| **Estate tax** | 18-40% | Upon death |

## 7. Tax Treaties

### Countries with Treaty with the US

| Country | Treaty? | Relevant Article | Main Benefit |
|---------|---------|-----------------|--------------|
| **Spain** | ✅ Yes | Art. 6 (real estate) + Art. 13 | Tax credit for taxes paid |
| **United Kingdom** | ✅ Yes | Art. 6 + Art. 13 | IRS allows deductions without W-8ECI |
| **Canada** | ✅ Yes | Art. 6 | FIRPTA exemption if sale < $1M |
| **Germany** | ✅ Yes | Art. 6 | Reduced dividend rate |
| **France** | ✅ Yes | Art. 6 | Tax credit |
| **Brazil** | ❌ No | N/A | Pays full rates |
| **Argentina** | ❌ No | N/A | Pays full rates |
| **Colombia** | ❌ No | N/A | Pays full rates |
| **Mexico** | ✅ Yes | Art. 6 | Reduced royalty rate |
| **UAE** | ❌ No | N/A | Pays full rates |

### How to Use a Tax Treaty

```
If your country has a treaty with the US:

1. Identify the treaty article that applies to your case
   - Real estate gains: Article 13
   - Real estate income: Article 6
   - Interest/Dividends: Articles 10-11

2. File Form 8833 (disclosure) with your 1040-NR
   - You must inform the IRS that you are using a treaty
   - Without this form, the IRS applies standard rates

3. Example with Spain-US treaty:
   - Florida rental income: Taxed in the US
   - Also must declare in Spain (personal obligation)
   - But you can credit taxes paid in the US
   - No double taxation

4. FIRPTA exemption:
   - Canada treaty allows selling up to $1M without withholding
   - Other treaties: do not exempt FIRPTA
```

## 8. Taxes by Structure

### Structure Comparison

| Structure | Income Tax (Rent) | FIRPTA (Sale) | Estate Tax | Complexity |
|-----------|-------------------|---------------|-----------|------------|
| **Personal name** | 10-37% | 15% withholding | ✅ Up to 40% (> $60K) | Low |
| **LLC (single member)** | 10-37% (pass-through) | 15% withholding | ✅ Up to 40% | Low |
| **LLC + Foreign holding** | 10-37% | 15% withholding | ❌ Protected | Medium |
| **Irrevocable Trust** | 10-37% (trust rates) | 15% withholding | ❌ Protected | High |
| **C-Corp** | 21% corporate | 15% withholding | ❌ Protected | High |

### The Recommended Structure for Foreigners

```
For foreign investors with over $60K in US assets:

RECOMMENDED STRUCTURE:
1. LLC in Florida (operates property, collects rent via Stripe)
2. International holding (Panama / Netherlands) owns the LLC
3. You are a shareholder of the holding, not of the LLC

BENEFITS:
- Income tax: Paid on rent (same as personal)
- FIRPTA: Still applies (the LLC sells)
- Estate tax: ❌ NOT APPLICABLE (holding shares are not US assets)
- Stripe: The LLC has Stripe, the holding receives dividends

ADDITIONAL COST:
- Holding: $500-2,000/year
- International accountant: $1,000-3,000/year
```

```javascript
// Stripe in LLC + Holding structure
// The operating LLC has Stripe

const account = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: {
    name: 'Florida Properties LLC', // Operating LLC
    structure: 'llc',
    tax_id: 'XX-XXXXXXX',
  },
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// The LLC can transfer profits to the holding
const transfer = await stripe.transfers.create({
  amount: 1000000, // $10,000
  currency: 'usd',
  destination: '{{CONNECTED_ACCOUNT_HOLDING}}',
  description: 'Profit distribution to holding',
});
```

## 9. Tax Calendar for Foreigners

### Key Dates

| Date | Obligation |
|------|-----------|
| **January 15** | Q4 estimated payment (if applicable) |
| **April 15** | 1040-NR deadline (if you were in the US) |
| **June 15** | 1040-NR deadline (if you were NOT in the US) |
| **June 15** | Q2 estimated payment |
| **September 15** | Q3 estimated payment |
| **October 15** | 1040-NR extension (if requested) |
| **November** | Property tax (varies by county) |
| **December** | Review structure for next year |

### Annual Checklist

```
JANUARY:
- [ ] Receive 1099-K from Stripe (if applicable)
- [ ] Receive bank interest 1099
- [ ] Review property tax

FEBRUARY-MARCH:
- [ ] Gather deductible expenses
- [ ] Calculate depreciation
- [ ] Prepare 1040-NR with CPA

APRIL-JUNE:
- [ ] File 1040-NR
- [ ] Pay taxes
- [ ] Request extension if needed

JULY-DECEMBER:
- [ ] Pay estimated taxes (if applicable)
- [ ] Review legal structure
- [ ] Plan sales or 1031 exchanges
```

## 10. Tax Reduction Strategies

### Strategy Summary

| Strategy | Tax Reduced | Potential Savings |
|----------|-------------|------------------|
| **Depreciation** | Income tax (rent) | $2,000-10,000/year |
| **W-8ECI** | Income tax (avoids 30% withholding) | 30% of gross income |
| **Cost Segregation** | Income tax (accelerates depreciation) | $10,000-50,000 year 1 |
| **1031 Exchange** | Capital gains (sale) | Unlimited (deferred) |
| **LLC + Holding** | Estate tax | Up to 40% of estate |
| **Irrevocable Trust** | Estate tax | Up to 40% of estate |
| **Tax treaty** | Income tax + FIRPTA | Variable |
| **Life insurance** | Estate tax | Exempt |

### Total Savings Example

```
Foreign investor with:
- Florida property: $500,000
- Annual rent: $48,000
- Total US assets: $2,000,000
- Plans to sell in 5 years
- Has heirs in home country

WITHOUT PLANNING:
- Annual income tax (5 years): $24,000
- FIRPTA on sale: $75,000 withheld
- Capital gains tax: $20,000
- Estate tax upon death: $776,000
- TOTAL: ~$895,000 in taxes

WITH PLANNING:
- Annual income tax (with depreciation + W-8ECI): $500/year
- FIRPTA: $75,000 withheld, $50,000 refunded
- Capital gains: $20,000
- Estate tax: $0 (via holding)
- TOTAL: ~$45,500 in taxes

SAVINGS: ~$849,500
```

## 11. Frequently Asked Questions

### How much tax does a foreigner pay on a rental property?

It depends on whether you file W-8ECI. Without W-8ECI: 30% on gross income. With W-8ECI: 10-37% on net income (after expenses and depreciation). In practice, with depreciation many foreigners pay 0-5% effective rate.

### What happens if I don't pay property tax?

The county can place a lien on the property (tax lien) and eventually auction it (tax deed sale). Never skip property tax payments.

### Do foreigners pay taxes in two countries?

It depends on your country of residence. If your country has a treaty with the US, you can credit US taxes against your local tax. Without a treaty, double taxation may occur.

### How do I avoid US estate tax?

The most common way is structuring your investment through an international holding company or an irrevocable trust. Shares of a foreign holding company are not considered US assets and are not subject to estate tax.

### Does Stripe report my rental income to my home country's IRS?

No. Stripe only reports to the US IRS (via 1099-K). You are responsible for declaring in your country according to local tax obligations.

### Do I need a US CPA?

Yes, absolutely. A CPA specialized in international taxation is essential to navigate FIRPTA, depreciation, W-8ECI, tax treaties, and estate tax.

## 12. Foreigner Tax Checklist

- [ ] Obtain ITIN (if you don't have SSN)
- [ ] File W-8ECI (to avoid 30% withholding on rent)
- [ ] Configure Stripe with the LLC's EIN
- [ ] Pay annual property tax
- [ ] File 1040-NR + Schedule E every year
- [ ] Calculate and take annual depreciation
- [ ] Pay quarterly estimated taxes (if applicable)
- [ ] File FIRPTA on sale (forms 8288 + 8288-A)
- [ ] Request 8288-B if withholding is excessive
- [ ] Structure to avoid estate tax (holding or trust)
- [ ] Review tax treaty with your country
- [ ] Hire a CPA specialized in international taxation

## Conclusion

**The taxes a foreigner pays in real estate in the US** are multiple but manageable with proper structure and planning. Property tax is mandatory for everyone, income tax on rent is optimized with depreciation and W-8ECI, FIRPTA applies upon sale, and estate tax is the biggest risk for estates over $60,000.

The key lies in three pillars: correct structure (LLC + holding for estate tax), proper forms (W-8ECI, 1040-NR), and a specialized CPA who maximizes depreciation and navigates tax treaties.

Stripe, configured with your EIN and W-8ECI, simplifies rent collection and generates the reports needed for your annual return.

At **Sotomayor Consulting International**, we advise you on all taxes a foreigner pays in real estate: from ITIN procurement and W-8ECI filing to holding structuring for estate tax, 1040-NR filing, and FIRPTA compliance. Contact us for a personalized consultation.
