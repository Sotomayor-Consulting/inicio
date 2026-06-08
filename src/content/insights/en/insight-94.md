---
title: "How to Charge Clients in Different Countries: 2026 Guide"
description: "How to charge clients in different countries"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Global map with multiple currencies and payment methods: USD, EUR, BRL, MXN, Pix, OXXO, iDEAL, with Stripe as processing hub and automatic conversion"
---

**Charging clients in different countries** is one of the biggest challenges for entrepreneurs selling globally. Each country has its currency, preferred payment methods, tax regulations, and purchasing power.

In this guide, we explain **how to charge clients in different countries** in 2026: from multi-currency setup in Stripe to local payment methods, international taxes, and currency conversion.

## 1. Why Charging in Local Currency Matters

### The Impact of Showing Local Prices

| Strategy | Conversion Rate | Cart Abandonment |
|----------|---------------|------------------|
| USD-only pricing | 2-3% | 70-80% |
| Local currency pricing | 5-10% | 40-50% |
| Local currency + local payment method | 10-20% | 20-30% |

**Key insight:** Showing the price in the customer's local currency can double or triple your sales.

### Why Customers Prefer to Pay in Their Currency

```
REASONS:
✅ They know exactly how much they're paying
✅ Avoid hidden bank conversion fees
✅ Trust: a price in their currency feels "local"
✅ Budgeting: they can compare with local alternatives
✅ Local payment methods: Pix, OXXO, iDEAL only work
   when checkout is configured for that country

Stripe handles all this automatically:
→ Detects customer's country by IP
→ Shows price in their currency (if you set local prices)
→ Shows local payment methods
→ Translates checkout to local language
```

```javascript
// Stripe: Automatic local pricing

// Create USD price with local options
const price = await stripe.prices.create({
  currency: 'usd',
  unit_amount: 9900, // $99 USD base
  product: '{{PRODUCT_ID}}',
  recurring: { interval: 'month' },
  currency_options: {
    eur: { unit_amount: 9900 },    // €99 for Europe
    mxn: { unit_amount: 180000 },  // $1,800 MXN for Mexico
    brl: { unit_amount: 35000 },   // R$350 for Brazil
    gbp: { unit_amount: 8500 },    // £85 for UK
    cop: { unit_amount: 180000 },  // $180,000 COP for Colombia
    ars: { unit_amount: 1800000 }, // $18,000 ARS for Argentina
  },
});

// Stripe automatically charges in the customer's local currency
```

## 2. Multi-Currency Setup in Stripe

### How It Works

| Component | What It Does | How to Configure |
|-----------|-------------|------------------|
| **Stripe Payments** | Accepts +135 currencies | Enabled by default |
| **Stripe Price API** | Defines per-currency prices | Create price with currency_options |
| **Stripe Checkout** | Shows local price + methods | Locale: auto |
| **Stripe Customer** | Stores preferred currency | customer.preferred_locales |
| **Stripe Invoicing** | Invoices in multiple currencies | Create invoice with currency |
| **Stripe Tax** | Calculates local taxes | automatic_tax: true |

### Step-by-Step: Configure Global Prices

```
1. Create product in Stripe Dashboard
2. Create base price in USD
3. Add currency_options for each country
4. Configure Stripe Tax for local taxes
5. Configure Checkout with locale: 'auto'
6. Stripe does the rest automatically

PRACTICAL EXAMPLE:

Product: Premium Subscription
Base price: $99 USD

Country  | Currency | Local Price | Factor
─────────┼──────────┼─────────────┼───────
US       | USD      | $99.00      | 1.00x
Europe   | EUR      | €99.00      | 1.00x (+VAT)
UK       | GBP      | £85.00      | 0.86x
Mexico   | MXN      | $1,800.00   | 0.70x
Brazil   | BRL      | R$350.00    | 0.57x
Colombia | COP      | $180,000    | 0.55x
Chile    | CLP      | $55,000     | 0.60x
Peru     | PEN      | S/280       | 0.65x
```

```javascript
// Stripe: Customer sees price in their currency automatically

const session = await stripe.checkout.sessions.create({
  line_items: [{
    price: '{{PRICE_ID_WITH_OPTIONS}}',
    quantity: 1,
  }],
  mode: 'subscription',
  locale: 'auto',                     // Stripe translates to customer's language
  automatic_tax: { enabled: true },   // Stripe calculates local taxes
  customer_creation: 'always',        // Save customer for future invoices
});
```

## 3. Payment Methods by Country

### What Each Country Prefers

| Country | Method #1 | Method #2 | Method #3 | Stripe Accepts |
|---------|----------|-----------|-----------|----------------|
| **United States** | Visa/Mastercard | ACH | Link | ✅ All |
| **United Kingdom** | Visa/Mastercard | Bacs Direct Debit | — | ✅ All |
| **Europe** | iDEAL (NL) | Card | SEPA | ✅ All |
| **Brazil** | Pix | Card | Boleto | ✅ All |
| **Mexico** | Card | OXXO | SPEI | ✅ All |
| **Colombia** | Card | PSE | Efecty | ✅ PSE and cards |
| **Argentina** | Card | Rapipago | Pago Fácil | ✅ Cards |
| **Chile** | Webpay | Card | Khipu | ✅ Webpay and cards |
| **Peru** | Card | PagoEfectivo | — | ✅ Cards |
| **Australia** | Card | BPay | — | ✅ All |

### How to Configure Local Payment Methods

```
IN STRIPE DASHBOARD:
1. Settings → Payment methods
2. Activate the methods you need:
   - Pix (Brazil)
   - OXXO (Mexico)
   - SPEI (Mexico)
   - iDEAL (Netherlands)
   - Bancontact (Belgium)
   - PSE (Colombia)
   - Webpay (Chile)
   - SEPA (Europe)
3. Stripe shows them automatically based on customer's country

Stripe activates all relevant payment methods per country.
You don't have to do anything else.
```

```javascript
// Stripe: Dynamic payment methods by country

// Stripe detects customer's country and shows appropriate methods
const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  payment_method_types: [
    'card',       // Global
    'link',       // Global
    'pix',        // Brazil
    'oxxo',       // Mexico
    'spei',       // Mexico
    'ideal',      // Netherlands
    'bancontact', // Belgium
    'sepa_debit', // Europe
    'p24',        // Poland
    'eps',        // Austria
    'sofort',     // Germany/Austria
    'boleto',     // Brazil
  ],
  locale: 'auto',
});
```

## 4. International Invoicing with Stripe Invoicing

### Invoices in Multiple Currencies

| Feature | Stripe Invoicing |
|---------|-----------------|
| Supported currencies | +50 currencies |
| Automatic conversion | ✅ (to USD at your rate) |
| Local taxes | ✅ Stripe Tax integrated |
| Automatic sending | ✅ Email or link |
| Recurring payments | ✅ Subscription invoices |
| Custom memo | ✅ Notes, terms, invoice numbers |
| Payment records | ✅ Automatic |

### Example: Invoice a European Client

```javascript
// Create invoice in EUR for European customer
const invoice = await stripe.invoices.create({
  customer: '{{EU_CUSTOMER_ID}}',
  currency: 'eur',
  collection_method: 'charge_automatically',
  automatic_tax: { enabled: true },        // Automatic VAT
  pending_invoice_items: [{
    price: '{{PRICE_ID_EUR}}',              // Price in EUR
    quantity: 1,
  }],
  days_until_due: 30,
  custom_fields: [{
    name: 'VAT ID',
    value: '{{CUSTOMER_VAT_ID}}',
  }],
});

// Stripe sends the invoice to the customer
// Stripe charges automatically
// Stripe calculates and remits VAT
```

### Invoicing for Non-Stripe Customers

```
NOT ALL CLIENTS WANT TO PAY BY CARD:

OPTION 1: STRIPE INVOICING (RECOMMENDED)
- Send a payment link by email
- Client pays by card, ACH, or local method
- Stripe records the payment automatically

OPTION 2: STRIPE CHECKOUT LINKS
- Generate a payment link
- Send via WhatsApp, email, Slack
- Client opens, pays, done

OPTION 3: WIRE TRANSFER (MANUAL)
- For large amounts (+$10,000)
- Stripe doesn't process wires
- Wise or direct bank transfer

OPTION 4: STRIPE + WISE
- Stripe for recurring payments
- Wise for large one-time payments
- Ideal combination for variable amounts
```

## 5. Global Subscriptions with Stripe Billing

### Different Prices by Country for SaaS

| Country | Monthly Price | Adjustment vs USD | Reason |
|---------|--------------|-------------------|--------|
| **United States** | $99 USD | 1.00x | Primary market |
| **Europe** | €99 EUR | 1.10x (VAT incl.) | VAT 17-27% |
| **Brazil** | R$350 | 0.57x | Purchasing power + Pix |
| **Mexico** | $1,800 MXN | 0.70x | Strategic market |
| **Colombia** | $180,000 COP | 0.55x | Purchasing power |
| **India** | ₹4,000 | 0.50x | Mass market |

### How to Implement Per-Country Pricing

```javascript
// Stripe Billing: One product, multiple per-country prices

// Create the product
const product = await stripe.products.create({
  name: 'Premium Plan',
});

// Create USD price (base)
const usdPrice = await stripe.prices.create({
  product: product.id,
  currency: 'usd',
  unit_amount: 9900,
  recurring: { interval: 'month' },
});

// Create local prices for each country
const localPrices = await stripe.prices.create({
  product: product.id,
  currency: 'usd', // Billing currency stays USD
  unit_amount: 9900,
  recurring: { interval: 'month' },
  currency_options: {
    brl: { unit_amount: 35000 },     // R$350
    mxn: { unit_amount: 180000 },    // $1,800 MXN
    eur: { unit_amount: 9900 },      // €99
    gbp: { unit_amount: 8500 },      // £85
    cop: { unit_amount: 180000 },    // $180,000 COP
  },
});

// Stripe automatically assigns the correct price
// based on the customer's currency/location
```

### Global Dunning Management

```
WHAT HAPPENS WHEN A PAYMENT FAILS?

Stripe Billing handles automatically:
✅ Smart retries (3-5 attempts)
✅ Email to customer in their language
✅ Payment method update
✅ Automatic downgrade/cancellation

RECOVERY RATE BY COUNTRY:
- US: 60-70% (ACH + card)
- Europe: 50-60% (SEPA + card)
- Brazil: 70-80% (Pix never fails)
- LATAM general: 40-50% (card)

IMPROVE YOUR COLLECTIONS:
1. Activate Stripe Smart Retries
2. Configure dunning emails in multiple languages
3. Offer local payment methods (Pix, OXXO)
4. Upcoming expiration reminders
```

## 6. Currency Conversion and FX

### How Stripe Handles Conversion

| Scenario | Stripe Does | Exchange Rate | You Receive |
|----------|------------|---------------|-------------|
| **Customer pays in USD** | Nothing (already USD) | N/A | Exact USD |
| **Customer pays in EUR** | Converts EUR → USD | Stripe rate (0.5-1% markup) | Converted USD |
| **Customer pays in BRL** | Converts BRL → USD | Stripe rate | Converted USD |
| **Local currency price** | Charges in local currency, converts to USD | Stripe rate | Converted USD |

### FX Optimization

```
STRATEGY TO MINIMIZE FX LOSSES:

1. INVOICE IN USD WHENEVER POSSIBLE
   → No conversion = no loss
   → US clients expect USD
   → International clients accept USD

2. USE CURRENCY_OPTIONS IN STRIPE
   → Customer sees price in their currency
   → Stripe charges in local currency
   → Stripe converts to USD
   → Stripe's markup is lower than the customer's bank

3. WISE + STRIPE FOR LARGE AMOUNTS
   → Stripe: recurring payments (card)
   → Wise: large one-time payments (wire)
   → Wise has better rate (0.4-0.8% vs 1-3% banks)

4. ACCUMULATE BALANCE AND CONVERT WHEN FX IS FAVORABLE
   → Stripe holds USD automatically
   → Accumulate until exchange rate improves
   → Wise withdraws and converts at optimal moment
```

```javascript
// Stripe: Control conversion timing

// Stripe holds the balance in original currency until you decide
const balance = await stripe.balance.retrieve();

// Each currency has its own available amount
balance.available.forEach(currency => {
  console.log(`${currency.currency.toUpperCase()}: $${currency.amount / 100}`);
});

// Stripe converts automatically to USD when withdrawing
// Or you can hold balances in multiple currencies with Stripe Treasury
```

## 7. International Taxes by Country

### Stripe Tax: Global Tax Automation

| Region | Tax | Rate | Stripe Tax Calculates |
|--------|-----|------|-----------------------|
| **United States** | Sales Tax | 0-10% (by state) | ✅ Yes (with registration) |
| **Europe** | VAT | 17-27% (by country) | ✅ Yes (with registration) |
| **United Kingdom** | VAT | 20% | ✅ Yes |
| **Australia** | GST | 10% | ✅ Yes |
| **Brazil** | ICMS/ISS | 7-18% | ⚠️ Partial (integration) |
| **Mexico** | IVA | 16% | ⚠️ Partial |
| **Colombia** | IVA | 19% | ⚠️ Partial |
| **Chile** | IVA | 19% | ⚠️ Partial |

### How to Configure Global Taxes

```
STEP 1: REGISTER IN EACH COUNTRY
→ Stripe Tax does NOT register your company automatically
→ You must register for VAT in EU, GST in UK, Sales Tax in US
→ Stripe Tax calculates and collects the correct tax

STEP 2: ACTIVATE STRIPE TAX
→ Settings → Tax → Enable
→ Configure tax behavior (exclusive/inclusive)
→ Stripe detects customer location

STEP 3: STRIPE REPORTS
→ Stripe generates reports for each jurisdiction
→ Your CPA uses those reports to file
→ Stripe does NOT remit taxes for you

IMPORTANT FOR LATAM:
→ Stripe Tax works best for US, EU, UK, Australia
→ For LATAM (Brazil, Mexico, Colombia), consult your local CPA
→ Stripe can calculate but may not remit in all cases
```

```javascript
// Stripe Tax: Calculate tax for each country

const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  automatic_tax: { enabled: true },
  customer_details: {
    address: {
      country: 'DE', // Customer in Germany
    },
  },
});

// Stripe calculates: $99 + 19% VAT (Germany) = €117.81
console.log(`Total: ${session.amount_total / 100} ${session.currency}`);
console.log(`Tax: ${session.total_details.amount_tax / 100}`);
```

## 8. Stripe Connect for Paying Third Parties

### When You Need to Pay Sellers, Contractors, or Partners

| Scenario | Stripe Connect | Flow |
|----------|---------------|------|
| **Marketplace** | Connect + Platform fees | Charge buyer, pay seller |
| **SaaS Platform** | Connect + Destination charges | Charge client, pay contractor |
| **Agency** | Connect + Transfers | Charge client, pay freelancer |
| **E-commerce** | Connect + Split payments | Charge buyer, split between sellers |

### Pay People in Different Countries

```javascript
// Stripe Connect: Pay contractors in different countries

// Each contractor has their connected account in their country
const contractorBR = await stripe.accounts.create({
  type: 'express',
  country: 'BR', // Contractor in Brazil
  business_type: 'individual',
});

const contractorCO = await stripe.accounts.create({
  type: 'express',
  country: 'CO', // Contractor in Colombia
  business_type: 'individual',
});

const contractorMX = await stripe.accounts.create({
  type: 'express',
  country: 'MX', // Contractor in Mexico
  business_type: 'individual',
});

// Pay everyone from one platform
await stripe.transfers.create({
  amount: 150000, // $1,500
  currency: 'usd',
  destination: contractorBR.id,
});

// Stripe handles: currency conversion, local compliance, 1099/1042-S reports
```

## 9. Pricing Strategies by Country

### How to Define Local Prices

```
FACTORS FOR ADJUSTING PRICES BY COUNTRY:

1. PURCHASING POWER (PPP)
   → GDP per capita adjusted by PPP
   → Example: Brazil PPP = 0.57x vs US
   → Brazil price = $99 x 0.57 = R$317

2. LOCAL TAXES
   → VAT in Europe (17-27%)
   → Sales Tax in US (0-10%)
   → IVA in LATAM (16-19%)
   → Stripe Tax calculates automatically

3. LOCAL COMPETITION
   → Are there cheaper local alternatives?
   → How much do competitors charge?
   → Adjust to be competitive

4. CUSTOMER ACQUISITION COST (CAC)
   → CAC in US vs LATAM vs Europe
   → Adjust prices based on cost of selling in each country

5. PAYMENT METHOD
   → Pix in Brazil = 0% chargeback, +35% conversion
   → Card in LATAM = 2-5% chargeback
   → Offer discount for Pix/SPEI (2-5%)
```

### Example Price Matrix

```
SAAS PLAN: $99/month base

COUNTRY  | CURRENCY | LOCAL PRICE | FACTOR | TAX   | FINAL PRICE
─────────┼──────────┼─────────────┼────────┼───────┼─────────────
US       | USD      | $99.00      | 1.00x  | 0%    | $99.00
DE       | EUR      | €99.00      | 1.00x  | 19%   | €117.81
UK       | GBP      | £85.00      | 0.86x  | 20%   | £102.00
BR       | BRL      | R$317.00    | 0.57x  | 0%*   | R$317.00
MX       | MXN      | $1,800.00   | 0.70x  | 16%   | $2,088.00
CO       | COP      | $180,000    | 0.55x  | 19%   | $214,200
CL       | CLP      | $55,000     | 0.60x  | 19%   | $65,450

*Digital services from foreign company to Brazilian consumer
may have IOF or other taxes
```

## 10. Common Mistakes When Charging Globally

### What NOT to Do

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| **Single USD price** | Low conversions (70% abandonment) | Local pricing by country |
| **Ignoring local payment methods** | Lose 35-50% of the market | Pix, OXXO, iDEAL, PSE |
| **Not configuring Stripe Tax** | Fines for uncollected VAT/GST | Stripe Tax automatic |
| **Bad FX conversion** | Lose 2-5% on each transaction | Stripe + Wise |
| **No dunning management** | Lose 30-50% of subscriptions | Stripe Smart Retries |
| **Mixing currencies in invoices** | Confusion, payment delays | One currency per invoice |
| **Ignoring chargebacks** | Losses, account at risk | Stripe Radar + 3D Secure |
| **No per-country terms of service** | Legal risk | Multi-language terms |

## 11. Recommended Tech Stack

### Your Stack for Global Charging

```
┌──────────────────────────────────────┐
│         STRIPE PAYMENTS               │
│  Accepts +135 currencies, +40 methods │
│  Pix, OXXO, iDEAL, PSE, SEPA, ACH    │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE BILLING                │
│  Global subscriptions, dunning        │
│  Per-country pricing, Smart Retries   │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE TAX                    │
│  VAT, GST, Sales Tax automatic        │
│  Reports by jurisdiction              │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         WISE / MERCURY                │
│  Optimal FX conversion                │
│  Withdraw to local bank               │
└──────────────────────────────────────┘

ALL INTEGRATED:
Stripe → Wise → Your local bank
Without lifting a finger
```

## 12. Action Plan for Global Charging

### Day 1-3: Initial Setup

```
□ Activate Stripe Payments (multi-currency)
□ Configure local payment methods (Pix, OXXO, iDEAL, etc.)
□ Create product and prices with currency_options
□ Configure Stripe Tax
```

### Day 4-7: Invoicing and Subscriptions

```
□ Configure Stripe Invoicing
□ Configure Stripe Billing for subscriptions
□ Define per-country prices (price matrix)
□ Configure automatic dunning
```

### Day 8-14: Optimization

```
□ Configure Stripe Radar (international anti-fraud)
□ Configure webhooks for payment notifications
□ Integrate Wise for FX conversion
□ Test complete payment flow in 3 countries
```

### Day 15-30: Launch

```
□ Train team on multi-currency
□ Create documentation for international clients
□ Launch campaign in new market
□ Monitor conversion and adjust prices
```

## 13. Checklist for Global Charging

### PAYMENT INFRASTRUCTURE:
- [ ] Stripe Payments activated (multi-currency)
- [ ] Local payment methods activated (Pix, OXXO, iDEAL, PSE, SEPA)
- [ ] Prices with currency_options by country
- [ ] Stripe Tax configured
- [ ] Stripe Radar active

### INVOICING:
- [ ] Stripe Invoicing configured
- [ ] Invoice templates per currency
- [ ] Stripe Billing for subscriptions
- [ ] Automatic dunning configured
- [ ] Invoice email in customer's language

### FX AND CONVERSION:
- [ ] Wise Business configured
- [ ] Conversion strategy defined
- [ ] Stripe Treasury (if applicable)
- [ ] Per-country pricing policy documented

### COMPLIANCE:
- [ ] Stripe Tax active for taxes
- [ ] VAT/GST registrations in countries you sell to
- [ ] Multi-language terms of service
- [ ] GDPR privacy policy
- [ ] International CPA reviewing structure

## Conclusion

**Charging clients in different countries** in 2026 is simpler than ever thanks to Stripe. With multi-currency configuration, local payment methods, Stripe Tax for taxes, and Wise for FX conversion, you can offer a local payment experience in every country without having physical presence there.

The key lies in three pillars:
1. **Local prices**: each country sees the price in their currency
2. **Local methods**: Pix, OXXO, iDEAL, PSE depending on the country
3. **Automatic taxes**: Stripe Tax calculates VAT, GST, sales tax

You don't need a bank in each country or a company in each market. With Stripe, your checkout adapts automatically to each customer, no matter where they are.

At **Sotomayor Consulting International**, we help you configure your global charging infrastructure: from Stripe multi-currency and local payment methods to per-country pricing strategy and international tax compliance. Contact us for a personalized consultation.
