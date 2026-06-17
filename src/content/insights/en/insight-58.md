---
title: "How to Connect Stripe with Shopify: Step by Step Guide 2026"
description: "How to connect Stripe with Shopify"
cardImage: "@/images/insights/como-conectar-stripe-con-shopify.png"
cardImageAlt: "Stripe and Shopify logos side by side with connection arrow"
---

**Stripe** and **Shopify** are two of the most powerful platforms for selling online. Stripe is Shopify's default payment processor, offering native integration, reduced fees, and simplified setup.

In this guide, we explain **how to connect Stripe with Shopify** in 2026, including configuration, troubleshooting, and tips to optimize your payments.

## 1. Why Use Stripe with Shopify?

### Advantages of Native Integration

- **Simplified setup:** Stripe is already integrated into Shopify — no plugins needed
- **Reduced fees:** Shopify Payments (Stripe) has lower fees than external processors
- **Optimized checkout:** Shopify Checkout uses Stripe as its default processor
- **Multi-currency support:** Accept payments in 135+ currencies
- **Native 3D Secure:** Built-in chargeback protection
- **Unified dashboard:** Manage payments directly from Shopify admin
- **Apple Pay and Google Pay:** Accept digital wallets without extra setup
### Shopify Payments vs Direct Stripe

- **Integration:** Native, no coding required -- Requires development
- **Transaction fee:** 2.4% + $0.30 (Shopify Basic) -- 2.9% + $0.30
- **Shopify fee:** No 2% third-party fee -- +2% on each transaction
- **Setup:** Clicks in admin -- Requires technical integration
- **Products:** Physical and digital -- Any type
> **Bottom line:** If you use Shopify, using Shopify Payments (Stripe integrated) is always more advantageous than an external processor.

## 2. Requirements to Connect Stripe to Shopify

### Basic Requirements

- **Shopify account:** Any plan (Basic, Standard, Advanced)
- **Supported country:** Stripe must be available in your country
- **Documents:** ID, proof of address, bank details
- **EIN or equivalent:** For US companies
- **Complete website:** Policies, contact, defined products
### Countries Where Shopify Payments (Stripe) Is Available

Shopify Payments uses Stripe as its processor. Available in:

**Americas:** US, Canada, Mexico, Brazil
**Europe:** UK, Ireland, Germany, France, Spain, Italy, Netherlands, Belgium, Austria, Switzerland, Sweden, Denmark, Norway, Finland, Portugal, Poland, Czech Republic
**Oceania:** Australia, New Zealand
**Asia:** Singapore, Japan, Hong Kong

> **If your country isn't listed:** You can use Stripe directly (via a US LLC) and integrate it into Shopify as an external gateway, but you'll pay Shopify's additional 2% fee.

## 3. Step by Step: Connect Stripe to Shopify

### Method 1: Shopify Payments (Recommended)

#### Step 1: Access Payment Settings

1. Log into your Shopify admin
2. Go to **Settings** → **Payments**
3. In the "Shopify Payments" section, click **Activate Shopify Payments**

#### Step 2: Fill in Company Details

- **Business type:** Individual or company
- **Full name:** As it appears on your ID
- **Address:** Business or residential address
- **Phone number:** Valid and verifiable
- **EIN/CPF/CNPJ:** Tax identification number
#### Step 3: Configure Payment Methods

- Select the card brands you want to accept (Visa, Mastercard, Amex, Discover)
- Configure 3D Secure (recommended: enabled for all transactions)
- Enable Apple Pay and Google Pay (free, increases conversion)

#### Step 4: Set Currency and Exchange

- **Base currency:** Your store's currency (e.g., USD, EUR)
- **Multiple currencies:** Shopify Markets lets you sell in up to 20 currencies
- **Auto conversion:** Shopify automatically converts with built-in spread
#### Step 5: Complete Verification

- Shopify may request additional documents
- Identity verification (selfie or video)
- Proof of address

**Estimated time:** 15-30 minutes for setup; 24-72 hours for approval

### Method 2: Stripe as an External Gateway

If Shopify Payments isn't available in your country, you can integrate Stripe directly.

#### Step 1: Have a Stripe Account

- Create a Stripe account (directly or via a US LLC)
- Complete identity verification
- Set up your bank account

#### Step 2: Install Stripe on Shopify

1. In Shopify admin, go to **Settings** → **Payments**
2. Under "Additional payment methods," click **Add payment method**
3. Search for "Stripe" and click **Activate**
4. Authorize the connection between Shopify and Stripe

#### Step 3: Configure the Gateway

- **Test mode:** Enable to test before going live
- **Payment description:** Name that appears on the customer's statement
- **Currency:** Set to your customers' currency
> **Important:** Using Stripe as an external gateway on Shopify adds an extra 2% fee on each transaction (Shopify Basic), unless you use Shopify Payments.

## 4. Advanced Settings

### Multiple Currencies (Shopify Markets)

Shopify Markets allows you to sell in different currencies:

**How to configure:**
1. Shopify admin → Settings → Markets
2. Add markets by country or region
3. Set prices in local currency
4. Stripe automatically processes in the correct currency

### 3D Secure

Shopify Payments (Stripe) includes native 3D Secure:

- **3DS Always on:** Maximum protection, but may reduce conversion
- **Conditional 3DS:** Only activates for high-risk transactions
- **3DS Off:** Less protection, more conversion
**Recommendation:** Leave 3DS set to "Conditional" (Shopify decides when to activate based on transaction risk).

### Webhooks and Notifications

Configure webhooks to receive real-time notifications:

1. Shopify admin → Settings → Notifications
2. Configure webhooks for:
   - `orders/paid` — order paid
   - `orders/fulfilled` — order shipped
   - `orders/cancelled` — order cancelled
   - `chargebacks/disputes` — disputes opened

## 5. Common Troubleshooting

### Issue 1: Shopify Payments Not Available in My Country

**Solution:**
- Use Stripe via a US LLC + external gateway integration
- Or use PayPal as your main processor
- Or use a local processor available in your country

### Issue 2: Payment Declined

**Possible causes:**
- Customer's card not authorized for international purchases
- Insufficient limit
- Fraud suspicion

**Solutions:**
- Verify 3D Secure is configured
- Enable Shopify Protect (fraud protection)
- Offer alternative payment methods

### Issue 3: Funds on Hold

**Causes:**
- New account (initial holding period)
- High risk identified
- Pending documentation

**Solutions:**
- Complete all documentation
- Maintain consistent sales volume
- Contact Shopify/Stripe support

### Issue 4: Stripe-Shopify Connection Error

**Solutions:**

- **"Connection expired":** Disconnect and reconnect Stripe
- **"Invalid API key":** Generate new keys in Stripe Dashboard
- **"Account not verified":** Complete verification in Stripe
- **"Incompatible country":** Verify both are in the same country
## 6. Shopify Payments vs Other Processors

### Fee Comparison

- **Shopify Payments (Stripe):** 2.4% + $0.30 -- 0% -- $2.70
- **Stripe (external):** 2.9% + $0.30 -- 2% -- $7.20
- **PayPal (external):** 2.99% + $0.49 -- 2% -- $7.48
- **Mercado Pago (external):** 3-6% -- 2% -- $5 - $8
> **Shopify Payments is always the cheapest option** for Shopify stores since it eliminates the 2% third-party processor fee.

### Shopify Plan and Transaction Fee

- **Basic ($29/month):** 2.4% + $0.30 -- 2.9% + $0.30 + 2% Shopify
- **Standard ($79/month):** 2.35% + $0.30 -- 2.9% + $0.30 + 1% Shopify
- **Advanced ($299/month):** 2.25% + $0.30 -- 2.9% + $0.30 + 0.6% Shopify
- **Plus ($2,300/month):** Negotiable -- Negotiable
## 7. Making Your Checkout Professional

### Checkout Customization

With Shopify Payments (Stripe), you can customize the checkout:

- **Custom checkout:** Limited -- ✅ Full
- **Additional fields:** ❌ -- ✅ Yes
- **Logo and colors:** ✅ Yes -- ✅ Yes
- **Custom domain:** ✅ Yes -- ✅ Yes
- **One-page checkout:** ✅ Yes -- ✅ Yes
### Conversion Optimization

- **One-page checkout:** +10-15% conversion
- **Multiple visible card brands:** +3-5% conversion
- **Apple Pay / Google Pay:** +5-10% conversion (mobile)
- **Optimized 3D Secure:** -20-30% chargebacks
- **Clear statement description:** -15-25% disputes
### Shop Pay (Checkout Accelerator)

Shop Pay is Shopify's accelerated checkout that stores customer data:

- **Customers save data:** 1-click payment
- **Conversion rate:** +10-15% vs standard checkout
- **Availability:** Included in all Shopify Payments plans
- **Security:** PCI DSS Level 1
## 8. Stripe on Shopify for Unsupported Countries

### Strategy with a US LLC

If Shopify Payments isn't available in your country:

1. **Form a US LLC** (Wyoming, Delaware, New Mexico)
2. **Get an EIN** from the IRS
3. **Open a Stripe account** with the LLC's details
4. **Set up a Shopify store** with a US address
5. **Connect Stripe as Shopify Payments** (now available since your company is US-based)

**Alternative:** Use Stripe as an external gateway (pays extra 2% fee).

### Alternative Platforms

If Shopify Payments + Stripe doesn't work for your case:

- **WooCommerce:** ✅ Yes (via plugin) -- WordPress users
- **BigCommerce:** ✅ Yes -- Growing businesses
- **Wix:** ✅ Yes (via Wix Payments) -- Simple stores
- **Squarespace:** ✅ Yes (via Squarespace Payments) -- Portfolios and stores
## 9. Tips to Maximize the Integration

### 1. Enable Shopify Protect

Shopify Protect is chargeback insurance for eligible orders:

- **Coverage:** Chargebacks up to $250 (US)
- **Cost:** 0.6% on protected orders
- **Eligibility:** Orders with Shop Pay, 3D Secure, and tracking

### 2. Configure the Statement Descriptor

The name that appears on the customer's statement should be recognizable:

- **Good:** "SOTOMAYOR CONSULTING"
- **Bad:** "PAYMENT-SOLUTIONS-LLC123"

**How to configure in Shopify Payments:** Admin → Settings → Payments → Shopify Payments → Manage → Statement descriptor

### 3. Monitor Your Chargeback Rate

- Ideal rate: below 0.5%
- Shopify limit: above 1% may trigger restrictions
- Dashboard: Shopify admin → Analytics → Reports → Chargebacks

### 4. Use Shopify Fraud Analysis

Shopify analyzes each order and assigns a risk score (0-100):

- **0-30:** Low risk — process normally
- **30-60:** Medium risk — review manually
- **60-100:** High risk — cancel or investigate
## 10. Quick Step-by-Step

### Summary in 5 Steps

- **1:** Create or access your Shopify account -- 5 min
- **2:** Go to Settings → Payments -- 2 min
- **3:** Activate Shopify Payments -- 10 min
- **4:** Fill in company and bank details -- 10 min
- **5:** Complete verification and wait for approval -- 24-72 hours
### Post-Setup Checklist

- [ ] Configure 3D Secure
- [ ] Enable Apple Pay and Google Pay
- [ ] Set up the statement descriptor
- [ ] Define currencies and markets
- [ ] Test a purchase in test mode
- [ ] Enable Shopify Protect
- [ ] Configure payment notifications

## Conclusion

**Connecting Stripe with Shopify** is a simple process when you use Shopify Payments (Stripe integrated). The setup takes less than 30 minutes and offers the best rates, optimized checkout, and unified management.

If Shopify Payments isn't available in your country, you can use Stripe as an external gateway or form a US LLC to access Shopify Payments.

At **Sotomayor Consulting International**, we advise entrepreneurs on setting up Stripe with Shopify, including US company formation for Shopify Payments access. Contact us for personalized consulting.
