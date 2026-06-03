---
title: "How to Handle Refunds Correctly in Stripe: Guide 2026"
description: "How to handle refunds correctly in Stripe"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Stripe refund process with arrows showing money return"
---

**Refunds** are an inevitable part of any online business. Handling them correctly not only protects your reputation but also reduces the risk of disputes and chargebacks, keeps your customers happy, and preserves the health of your Stripe account.

In this guide, we explain **how to handle refunds correctly in Stripe** in 2026: when to refund, how to do it, timelines, fees, and best practices.

## 1. What Is a Refund in Stripe?

### Definition

A refund is the return of funds to the customer for a completed transaction. Stripe processes the refund directly to the customer's original card or payment method.

### Types of Refunds

| Type | Description | Timeframe |
|------|-------------|-----------|
| **Full refund** | Returns the complete transaction amount | Up to 120 days |
| **Partial refund** | Returns only part of the amount | Up to 120 days |
| **Refund outside Stripe** | Refund processed outside the platform (not recommended) | N/A |

### Refund vs Dispute

| Aspect | Refund | Dispute / Chargeback |
|--------|--------|----------------------|
| **Who initiates it** | The merchant (you) | The customer (through their bank) |
| **Cost** | Free (no additional fee) | $15 Stripe fee |
| **Control** | Full — you decide | Forced — Stripe decides |
| **Impact** | Positive for the customer | Negative for your account |
| **Time** | Instant to 5-10 days | 60-90 days |

> **Golden rule:** If a customer is unsatisfied, **refund them yourself** before the customer disputes. A voluntary refund costs $0; a chargeback costs $15 and risks your account.

## 2. Refund Policy

### Elements of a Clear Policy

| Element | Description |
|---------|-------------|
| **Refund timeframe** | 7, 14, 30, or 60 days to request |
| **Conditions** | Unused product, original packaging, etc. |
| **Process** | Steps the customer should follow |
| **Refund method** | Always to the original payment method |
| **Exceptions** | Digital products, custom services |
| **Processing time** | 5-10 business days to see the refund |

### Examples by Business Type

| Business Type | Recommended Policy |
|---------------|-------------------|
| **E-commerce (physical)** | 30 days, unused, original packaging |
| **Digital products** | 14 days, or no refund if already downloaded |
| **SaaS / Subscriptions** | Cancel anytime, prorated refund |
| **Online courses** | 7 days if less than 30% consumed |
| **Professional services** | 50% if work started, 100% if not |

### Refund Policy for Digital Products

Digital products have special considerations:

| Challenge | Solution |
|-----------|----------|
| **Can't be "returned"** | Offer trial period or free sample |
| **Easy to copy** | Refund without question if within timeframe |
| **Unsatisfied customer** | Offer solution before refund: support, update, etc. |

> **Recommendation:** For digital products, offer a full refund within the first 7-14 days no questions asked. This builds trust and reduces disputes.

## 3. How to Issue a Refund in Stripe

### Method 1: Stripe Dashboard (Manual)

```
1. Stripe Dashboard → Payments → Find the transaction
2. Click "..." → Refund
3. Select: Full refund or Partial refund
4. Optional: Reason for refund (visible only to you)
5. Confirm → Stripe processes the refund
```

**Time:** 2 minutes

### Method 2: Stripe API (Automated)

```javascript
const stripe = require('stripe')('sk_test_...');

// Full refund
const refund = await stripe.refunds.create({
  payment_intent: 'pi_1234567890',
});

// Partial refund
const partialRefund = await stripe.refunds.create({
  payment_intent: 'pi_1234567890',
  amount: 2500, // $25.00 in cents
});
```

### Method 3: Refund from Transactions Dashboard

| Step | Action |
|------|--------|
| 1 | Stripe Dashboard → Transactions |
| 2 | Find payment by name, email, or amount |
| 3 | Click on the transaction |
| 4 | "Refund" button in the top right corner |

## 4. Refund Timeframes

### Stripe Refund Window

| Period | Available | Fee |
|--------|-----------|-----|
| **0-120 days** | ✅ Full or partial refund | No additional cost |
| **120+ days** | ❌ Not available via Stripe | Must transfer manually |
| **Chargeback** | ❌ Stripe handles the dispute | $15 + disputed amount |

### When the Customer Sees the Refund

| Payment Method | Estimated Time |
|----------------|----------------|
| **Credit card** | 5-10 business days |
| **Debit card** | 3-5 business days |
| **Apple Pay / Google Pay** | 5-10 business days |
| **Local payment method** | 7-14 business days |

> **Note:** Stripe processes the refund immediately, but the customer's bank determines when it appears in their account.

## 5. Refund Fees and Costs

### Does Stripe Charge for Refunds?

| Item | Cost |
|------|------|
| **Voluntary refund** | ✅ No additional cost |
| **Original Stripe fee** | ❌ Not returned |
| **Chargeback** | $15 (non-refundable even if you win) |

### Refund Cost Example

**Original transaction:**
- Sale: $100.00
- Stripe fee (2.9% + $0.30): -$3.20
- Net received: $96.80

**Refund:**
- Amount returned: -$100.00
- Stripe fee: $3.20 (not returned)
- **Total loss: $3.20** (the fee)

> **Bottom line:** Stripe does not refund its fee when you process a refund. This is the cost of processing the original payment.

### Refund vs Chargeback Comparison

| Item | Refund | Chargeback |
|------|--------|------------|
| **Amount returned** | $100.00 | $100.00 |
| **Stripe fee** | $3.20 (non-recoverable) | $3.20 (non-recoverable) |
| **Additional fee** | $0 | $15.00 |
| **Total lost** | $3.20 | $18.20 |
| **Account risk** | None | High |

## 6. Partial Refunds

### When to Use Partial Refunds

| Situation | Example |
|-----------|---------|
| **Partial return** | Customer returns only one item from a multi-item order |
| **Retroactive discount** | You offer 50% off as a goodwill gesture |
| **Incorrect charge** | You charged $150, should have charged $100 |
| **Shipping adjustment** | Shipping was more expensive than expected |
| **Penalty fee** | Customer canceled after the deadline |

### How to Issue a Partial Refund

```javascript
const stripe = require('stripe')('sk_test_...');

// Partial refund of $25.00
const refund = await stripe.refunds.create({
  payment_intent: 'pi_1234567890',
  amount: 2500, // $25.00 in cents
  metadata: {
    reason: 'Partial product return',
    order_id: 'ORD-12345',
  },
});
```

## 7. Refunds and Accounting

### How to Record Refunds

| Accounting Element | Description |
|-------------------|-------------|
| **Original revenue** | Recorded when payment was received |
| **Refund** | Credit note or negative adjustment |
| **Stripe fee** | Non-recoverable expense |
| **Net** | Original revenue - refund - fee |

### Stripe Reports for Refunds

1. Stripe Dashboard → Reports → Transaction summary
2. Filter by type: "Refund"
3. Export to CSV for your accounting
4. Reconcile monthly

### Refunds and Invoicing

| Scenario | Recommended Action |
|----------|-------------------|
| **Full refund** | Issue credit note and void the original invoice |
| **Partial refund** | Issue credit note for the partial amount |
| **Same currency** | Stripe handles conversion automatically |
| **Different currency** | Stripe converts at the original exchange rate |

## 8. Strategies to Minimize Refunds

### Prevention Before the Sale

| Strategy | Impact |
|---------|--------|
| **Detailed descriptions** | Reduces returns from wrong expectations |
| **Real photos and videos** | Customer knows exactly what they're buying |
| **Size/measurement chart** | Critical for clothing and physical products |
| **Customer reviews** | Help set realistic expectations |
| **Free sample / demo** | Customer tries before buying |

### Handling Refund Requests

```
Customer requests refund
       ↓
1. Listen and understand the reason
2. Offer alternative solutions:
   ├── Exchange for another product
   ├── Store credit
   ├── Discount on next purchase
   └── Additional support / training
3. If they insist on refund → Refund without delay
```

### Automated Refunds

Set up automatic rules for simple refunds:

```javascript
// Example: Automatic refund if customer requests within 7 days
app.post('/refund-request', async (req, res) => {
  const { orderId, email } = req.body;
  const order = await getOrder(orderId);

  if (daysSince(order.createdAt) <= 7) {
    const refund = await stripe.refunds.create({
      payment_intent: order.paymentIntentId,
    });
    await sendRefundConfirmation(email, refund);
    res.json({ status: 'refunded', refund });
  } else {
    res.json({ status: 'requires_review' });
  }
});
```

## 9. Common Refund Mistakes

### Mistake #1: Refunding Outside Stripe

| Incorrect | Correct |
|-----------|---------|
| "I'll send you the money via PayPal" | "We process the refund to your card" |
| "I'll do a bank transfer" | "Stripe returns the money to the original method" |

**Why it's bad:** If you refund outside Stripe, the customer can still dispute the original charge with their bank and generate a chargeback.

### Mistake #2: Delaying the Refund

| Scenario | Consequence |
|----------|-------------|
| **Refund in 24 hours** | Satisfied customer, no dispute risk |
| **Refund in 7 days** | Frustrated customer, possible complaint |
| **Refund in 15+ days** | High risk of chargeback |

### Mistake #3: Not Communicating the Refund

```
Customer requests refund → You process it → Do you notify them?
                                ├── Yes → Customer reassured
                                └── No → Customer thinks you ignored them → Dispute
```

### Mistake #4: Refunding Without Clear Policy

| Problem | Solution |
|---------|----------|
| **Customer doesn't know the timeframe** | Publish policy on your website and checkout |
| **Confusing terms** | Use simple language, not legalese |
| **Undocumented exceptions** | Include all cases in the policy |

## 10. Quick Step-by-Step

### Summary in 5 Steps

| Step | Action | Time |
|------|--------|------|
| **1** | Define and publish your refund policy | 1 hour |
| **2** | Set up the refund process in Stripe | 15 min |
| **3** | Train your team on refunds | 30 min |
| **4** | Implement automated refunds if applicable | 2 hours |
| **5** | Monitor and adjust based on data | Monthly |

### Checklist for a Correct Refund

- [ ] Verify the customer is within the refund timeframe
- [ ] Confirm the refund reason
- [ ] Process the refund to the original payment method
- [ ] Notify the customer that the refund was processed
- [ ] Indicate the estimated time to see the refund
- [ ] Record the refund in your accounting
- [ ] Analyze the root cause to prevent future refunds

### Refund Confirmation Email Template

> **Subject:** Your refund has been processed - [Store Name]
>
> Hi [Name],
>
> We have processed your refund of $[amount] for [product/order].
>
> The refund has been sent to your original payment method and should appear in your account within 5-10 business days, depending on your bank.
>
> If you have any questions, reply to this email.
>
> Thank you for your understanding,
> [Store Name]

## Conclusion

**Handling refunds correctly** is essential to maintaining a healthy relationship with your customers and with Stripe. A well-handled refund can turn an unsatisfied customer into a loyal one. The key is to have a clear policy, process refunds without delay, and communicate openly with the customer.

At **Sotomayor Consulting International**, we advise online businesses on optimizing their payment and refund processes, including Stripe setup and US company formation. Contact us for personalized consulting.
