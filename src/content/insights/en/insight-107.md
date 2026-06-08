---
title: "How to Use Odoo for International Businesses: 2026 Guide"
description: "Odoo international business ERP"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Odoo ERP dashboard showing multi-company, multi-currency sales, international inventory, and global accounting modules"
---

**Odoo is the fastest-growing open-source ERP for international businesses.** Unlike legacy ERPs that cost hundreds of thousands and take years to implement, Odoo provides a modular, affordable, and flexible platform that scales with your global operations — from CRM and sales to inventory, accounting, and manufacturing.

In this guide, we cover **how to configure and use Odoo for international businesses in 2026**, including multi-company setup, multi-currency operations, international taxation, Stripe payment integration, multilingual CRM, global inventory, and cross-border accounting.

## 1. Why Odoo for International Business

### Odoo vs Legacy ERPs

| Feature | Odoo | SAP / Oracle / Microsoft Dynamics |
|---------|------|----------------------------------|
| **License Cost** | Free (Community) or $20-$40/user/mo (Enterprise) | $100-$500+/user/mo |
| **Implementation Time** | Weeks to months | Months to years |
| **Modularity** | 70+ modules, install what you need | Monolithic, heavy customization required |
| **Multi-Company** | Native multi-company support | Available but complex |
| **Multi-Currency** | Built-in, real-time rates | Usually requires add-ons |
| **Multi-Language** | 50+ languages in UI | Limited languages |
| **Localization** | 40+ country-specific accounting packages | Per-country licensing |
| **Integrations** | Stripe, PayPal, Shopify, Amazon, etc. | Custom integration required |
| **Customization** | Low-code, Python backend | ABAP, proprietary languages |
| **Cloud or On-Premise** | Both (Odoo.sh or self-hosted) | Usually cloud-only or on-prem at extra cost |

### Odoo's International Modules

```
ODOO MODULES FOR INTERNATIONAL BUSINESS:

CORE INTERNATIONAL FEATURES:
  • Multi-Company — Manage multiple legal entities in one system
  • Multi-Currency — Real-time exchange rates, auto-conversion
  • Multi-Language — UI and documents in 50+ languages
  • Multi-Warehouse — Global inventory across countries

SALES & CRM:
  • CRM — Multi-language, multi-currency pipelines
  • Sales — Quotations, orders, Stripe payment links
  • E-commerce — Multi-language, multi-currency storefront
  • Subscription — Recurring billing in any currency

FINANCE & ACCOUNTING:
  • Accounting — Multi-company, multi-currency general ledger
  • Invoicing — Auto-invoice in customer's currency and language
  • Tax — Country-specific tax configurations (VAT, IVA, GST)
  • Stripe Connect — Payment processing integration

OPERATIONS:
  • Inventory — Multi-warehouse, multi-country stock management
  • Manufacturing — Multi-site production planning
  • Purchase — International procurement and supplier management
  • Shipping — Multi-carrier, international shipping integration

HR & SERVICES:
  • Employees — Multi-company employee management
  • Payroll — Country-specific payroll configurations
  • Project — International project management
  • Timesheets — Multi-currency billing rates
```

## 2. Setting Up Multi-Company in Odoo

### Multi-Company Architecture

```
ODOO MULTI-COMPANY STRUCTURE:

COMPANY A: US HOLDING (Parent)
  • Currency: USD
  • Tax: US Sales Tax
  • Language: English
  • Bank: Chase US
  • Stripe Account: US Stripe

    ├── COMPANY B: BRASIL OPERAÇÕES (Subsidiary)
    │   • Currency: BRL
    │   • Tax: Brazilian taxes (ICMS, ISS, IPI)
    │   • Language: Portuguese (BR)
    │   • Bank: Itaú Brazil
    │   • Stripe Account: Brazil Stripe
    │   • Fiscal Localization: Brazilian accounting
    │
    ├── COMPANY C: MÉXICO OPERACIONES (Subsidiary)
    │   • Currency: MXN
    │   • Tax: IVA, ISR
    │   • Language: Spanish (MX)
    │   • Bank: BBVA Mexico
    │   • Stripe Account: Mexico Stripe
    │   • Fiscal Localization: Mexican accounting
    │
    └── COMPANY D: EUROPE GMBH (Subsidiary)
        • Currency: EUR
        • Tax: German VAT
        • Language: German
        • Bank: Deutsche Bank
        • Stripe Account: EU Stripe (Ireland)
        • Fiscal Localization: German accounting
```

### Multi-Company Configuration

```
MULTI-COMPANY SETUP STEPS:

1. ENABLE MULTI-COMPANY
   Settings → General Settings → Multi-Companies
   Enable "Manage multiple companies"
   Set consolidation currency (USD)

2. CREATE COMPANIES
   Settings → Users & Companies → Companies
   Create each legal entity with:
   - Company name, address, tax ID
   - Currency, country, language
   - Accounting configuration
   - Logo and branding

3. CONFIGURE INTER-COMPANY
   Install "Inter-Company Rules" module
   Set up auto-journal entries between companies
   Configure transfer pricing rules
   Set up inter-company invoicing

4. ASSIGN USERS
   Each user can access one or more companies
   Set default company per user
   Configure access rights per company

5. CONSOLIDATION
   Install "Consolidation" module
   Set up consolidation accounts mapping
   Auto-consolidate subsidiaries into parent
   Generate consolidated financial statements
```

```python
# Odoo multi-company automation (Python)

from odoo import api, fields, models

class InterCompanyInvoice(models.Model):
    _name = 'inter.company.invoice'
    _description = 'Inter-Company Invoice Automation'

    @api.model
    def auto_create_intercompany_invoice(self, source_company_id, target_company_id, amount, currency_id):
        """
        Auto-create invoice between subsidiaries
        """
        source_company = self.env['res.company'].browse(source_company_id)
        target_company = self.env['res.company'].browse(target_company_id)

        # Get exchange rate
        rate = self.env['res.currency.rate'].search([
            ('currency_id', '=', currency_id),
            ('company_id', '=', source_company_id),
        ], limit=1)

        # Create invoice in source company
        invoice_vals = {
            'company_id': source_company_id,
            'partner_id': target_company.partner_id.id,
            'currency_id': currency_id,
            'move_type': 'out_invoice',
            'invoice_line_ids': [(0, 0, {
                'name': f'Inter-company services - {target_company.name}',
                'quantity': 1,
                'price_unit': amount,
                'account_id': source_company.intercompany_income_account_id.id,
            })],
        }

        invoice = self.env['account.move'].with_context(
            force_company=source_company_id
        ).create(invoice_vals)

        invoice.action_post()

        # Auto-reconcile with target company
        target_invoice_vals = {
            'company_id': target_company_id,
            'partner_id': source_company.partner_id.id,
            'currency_id': currency_id,
            'move_type': 'in_invoice',
            'invoice_line_ids': [(0, 0, {
                'name': f'Inter-company services - {source_company.name}',
                'quantity': 1,
                'price_unit': amount,
                'account_id': target_company.intercompany_expense_account_id.id,
            })],
        }

        target_invoice = self.env['account.move'].with_context(
            force_company=target_company_id
        ).create(target_invoice_vals)

        target_invoice.action_post()

        return {
            'source_invoice': invoice.id,
            'target_invoice': target_invoice.id,
            'amount': amount,
            'currency': currency_id,
        }
```

## 3. Multi-Currency Operations

### Currency Configuration

```python
# Odoo multi-currency setup

from odoo import api, fields, models

class MultiCurrencyConfig(models.Model):
    _inherit = 'res.config.settings'

    def configure_multi_currency(self):
        """
        Enable and configure multi-currency
        """
        # Enable multiple currencies
        self.env['res.currency']._activate_currencies()

        # Set up auto-rate update
        self.env['res.currency.rate']._update_rates_auto()

        # Configure currency rounding per company
        companies = self.env['res.company'].search([])
        for company in companies:
            company.currency_rounding = 0.01
            company.currency_id = self._get_base_currency(company.country_id)

        return True

    def _get_base_currency(self, country):
        country_currency_map = {
            'US': 'USD', 'BR': 'BRL', 'MX': 'MXN',
            'CO': 'COP', 'AR': 'ARS', 'CL': 'CLP',
            'DE': 'EUR', 'ES': 'EUR', 'FR': 'EUR',
            'UK': 'GBP', 'PT': 'EUR',
        }
        return country_currency_map.get(country.code, 'USD')
```

### Multi-Currency Sales Flow

```
MULTI-CURRENCY SALES IN ODOO:

1. CREATE QUOTATION
   - Select customer (auto-pulls currency)
   - Or manually select currency
   - Prices auto-convert from pricelist
   - Tax auto-calculated in local currency

2. CONFIRM SALE ORDER
   - Create invoice in customer's currency
   - Generate Stripe Payment Link in local currency
   - Send invoice + payment link via email

3. RECEIVE PAYMENT
   - Customer pays via Stripe in their currency
   - Stripe converts to your settlement currency
   - Odoo records payment with exchange rate
   - Realized FX gain/loss auto-calculated

4. ACCOUNTING
   - Journal entry in customer's currency
   - Auto-conversion to company currency
   - FX difference account updated
   - Inter-company settlement if applicable
```

```javascript
// Odoo + Stripe multi-currency payment

const odooStripePayment = {
  // Create Stripe payment link from Odoo invoice
  createPaymentLink: async (invoice) => {
    // Invoice data from Odoo API
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{
        price_data: {
          currency: invoice.currency.toLowerCase(),
          product_data: {
            name: `Invoice ${invoice.number}`,
            description: invoice.lineItems.map(i => i.name).join(', '),
          },
          unit_amount: Math.round(invoice.amount_total * 100),
        },
        quantity: 1,
      }],
      after_completion: {
        type: 'redirect',
        redirect: { url: `https://company.com/invoice/${invoice.id}/paid` },
      },
      metadata: {
        odoo_invoice_id: invoice.id,
        odoo_company_id: invoice.companyId,
        odoo_partner_id: invoice.partnerId,
      },
    });

    // Update Odoo invoice with payment link
    await odoo.updateInvoice(invoice.id, {
      x_stripe_payment_link: paymentLink.url,
      x_stripe_payment_link_id: paymentLink.id,
    });

    return paymentLink.url;
  },

  // Handle Stripe webhook → update Odoo
  handlePaymentSuccess: async (session) => {
    const odooInvoiceId = session.metadata.odoo_invoice_id;
    const odooCompanyId = session.metadata.odoo_company_id;

    // Register payment in Odoo
    await odoo.registerPayment({
      invoiceId: odooInvoiceId,
      companyId: odooCompanyId,
      amount: session.amount_total / 100,
      currency: session.currency.toUpperCase(),
      paymentMethod: session.payment_method_types[0],
      stripeChargeId: session.payment_intent,
      receivedAt: new Date(),
    });

    // Auto-reconcile in Odoo accounting
    await odoo.reconcileInvoice(odooInvoiceId);

    return { reconciled: true, invoiceId: odooInvoiceId };
  },
};
```

## 4. International Taxation in Odoo

### Tax Configuration by Country

| Country | Tax System | Odoo Fiscal Localization Package | Stripe Tax Integration |
|---------|-----------|----------------------------------|----------------------|
| **United States** | Sales Tax (state-level) | US Accounting Package | Stripe Tax auto-calculates |
| **Brazil** | ICMS, ISS, IPI, PIS, COFINS | Brazilian Localization (completed) | Manual configuration |
| **Mexico** | IVA, ISR, IEPS | Mexican Localization | CFDI via 3rd party |
| **Colombia** | IVA (19%), ICA, RETEIVA | Colombian Localization | DIAN-compliant |
| **Argentina** | IVA (21%), IIBB | Argentine Localization | SIFEN integration |
| **Chile** | IVA (19%) | Chilean Localization | SII-compliant |
| **European Union** | VAT (country-specific rates) | EU VAT Reporting | Stripe Tax auto-calculates |
| **United Kingdom** | VAT (20%) | UK Accounting Package | Stripe Tax auto-calculates |

### Setting Up International Taxes

```python
# Odoo international tax automation

from odoo import api, fields, models

class InternationalTaxConfig(models.Model):
    _name = 'international.tax.config'
    _description = 'International Tax Configuration'

    @api.model
    def configure_taxes_for_company(self, company_id, country_code):
        """
        Auto-configure taxes based on country
        """
        tax_templates = {
            'US': self._get_us_taxes,
            'BR': self._get_brazil_taxes,
            'MX': self._get_mexico_taxes,
            'CO': self._get_colombia_taxes,
            'DE': self._get_eu_vat_taxes,
            'ES': self._get_eu_vat_taxes,
            'UK': self._get_uk_vat_taxes,
        }

        configurator = tax_templates.get(country_code, self._get_default_taxes)
        taxes = configurator(company_id)

        for tax_data in taxes:
            existing = self.env['account.tax'].search([
                ('name', '=', tax_data['name']),
                ('company_id', '=', company_id),
            ])
            if not existing:
                self.env['account.tax'].create(tax_data)

        return {'configured': len(taxes), 'company_id': company_id}

    def _get_brazil_taxes(self, company_id):
        return [
            {
                'name': 'ICMS 18%',
                'amount_type': 'percent',
                'amount': 18.0,
                'description': 'Imposto sobre Circulação de Mercadorias',
                'tax_group_id': self._get_tax_group('icms').id,
            },
            {
                'name': 'ISS 5%',
                'amount_type': 'percent',
                'amount': 5.0,
                'description': 'Imposto Sobre Serviços',
                'tax_group_id': self._get_tax_group('iss').id,
            },
            {
                'name': 'PIS 1.65%',
                'amount_type': 'percent',
                'amount': 1.65,
                'description': 'Programa de Integração Social',
                'tax_group_id': self._get_tax_group('pis').id,
            },
            {
                'name': 'COFINS 7.6%',
                'amount_type': 'percent',
                'amount': 7.6,
                'description': 'Contribuição para o Financiamento da Seguridade Social',
                'tax_group_id': self._get_tax_group('cofins').id,
            },
        ]

    def _get_mexico_taxes(self, company_id):
        return [
            {
                'name': 'IVA 16%',
                'amount_type': 'percent',
                'amount': 16.0,
                'description': 'Impuesto al Valor Agregado',
                'tax_group_id': self._get_tax_group('iva').id,
            },
            {
                'name': 'IVA 0% (Exportación)',
                'amount_type': 'percent',
                'amount': 0.0,
                'description': 'IVA tasa cero para exportaciones',
                'tax_group_id': self._get_tax_group('iva').id,
            },
        ]

    def _get_eu_vat_taxes(self, company_id):
        return [
            {
                'name': 'VAT 21%',
                'amount_type': 'percent',
                'amount': 21.0,
                'description': 'Standard VAT rate',
                'tax_group_id': self._get_tax_group('vat').id,
            },
            {
                'name': 'VAT 10% (Reduced)',
                'amount_type': 'percent',
                'amount': 10.0,
                'description': 'Reduced VAT rate',
                'tax_group_id': self._get_tax_group('vat').id,
            },
            {
                'name': 'VAT 0% (Intra-EU)',
                'amount_type': 'percent',
                'amount': 0.0,
                'description': 'Intra-EU supply (reverse charge)',
                'tax_group_id': self._get_tax_group('vat').id,
            },
        ]

    @api.model
    def calculate_taxes_with_stripe(self, order, customer_country):
        """
        Use Stripe Tax API for real-time tax calculation
        """
        stripe_tax = self.env['stripe.tax.api'].calculate([
            {
                'amount': order.amount_untaxed * 100,
                'currency': order.currency.name.lower(),
                'customer_country': customer_country,
            }
        ])

        # Create or update tax in Odoo
        tax = self.env['account.tax'].search([
            ('name', '=', f"Stripe Tax - {stripe_tax['tax_rate']}%"),
            ('company_id', '=', order.company_id.id),
        ], limit=1)

        if not tax:
            tax = self.env['account.tax'].create({
                'name': f"Stripe Tax - {stripe_tax['tax_rate']}%",
                'amount': stripe_tax['tax_rate'],
                'company_id': order.company_id.id,
            })

        return tax
```

## 5. Multi-Language CRM and Sales

### Language Configuration

```
ODOO LANGUAGE SETUP:

INTERFACE LANGUAGES:
  - 50+ languages available for Odoo UI
  - Each user sets their preferred language
  - Translations managed per module
  - Community translations from Odoo Translators

DOCUMENT LANGUAGES:
  - Invoices, quotes, contracts in customer's language
  - Language detected from partner/country
  - Auto-translate product names and descriptions
  - Multi-language email templates

CONTENT LANGUAGES:
  - E-commerce product descriptions per language
  - Website pages in multiple languages
  - Blog posts and knowledge base articles
  - Automated translation workflow
```

### Multi-Language Sales Automation

```python
# Odoo multi-language sales automation

from odoo import api, fields, models

class MultiLanguageSaleOrder(models.Model):
    _inherit = 'sale.order'

    def _get_language_from_partner(self):
        """Detect language from customer"""
        country_language_map = {
            'BR': 'pt_BR', 'PT': 'pt_PT',
            'MX': 'es_MX', 'CO': 'es_CO', 'ES': 'es_ES',
            'US': 'en_US', 'UK': 'en_GB',
            'DE': 'de_DE', 'FR': 'fr_FR', 'IT': 'it_IT',
        }
        lang = country_language_map.get(self.partner_id.country_id.code)
        return lang or self.partner_id.lang or 'en_US'

    def action_confirm_with_language(self):
        """Confirm sale order and generate docs in customer's language"""
        # Set document language to customer's language
        lang = self._get_language_from_partner()

        # Generate invoice in customer's language
        invoice = self._create_invoices()
        invoice.write({
            'lang': lang,
        })

        # Generate Stripe payment link in customer's currency
        payment_link = self._create_stripe_payment_link()

        # Send email in customer's language
        template = self.env.ref('sale.email_template_edi_sale')
        template.with_context(lang=lang).send_mail(self.id)

        return {
            'invoice_id': invoice.id,
            'payment_link': payment_link,
            'language': lang,
        }

    def _create_stripe_payment_link(self):
        """Create Stripe payment link in order currency"""
        stripe_api = self.env['stripe.api']
        return stripe_api.create_payment_link(
            amount=self.amount_total,
            currency=self.currency_id.name.lower(),
            description=f"Order {self.name}",
            metadata={
                'odoo_order_id': self.id,
                'odoo_partner_id': self.partner_id.id,
                'odoo_company_id': self.company_id.id,
            },
        )
```

## 6. International Inventory and Warehouses

### Multi-Warehouse Configuration

```
ODOO MULTI-WAREHOUSE SETUP:

WAREHOUSE A: US FULFILLMENT (Miami)
  • Location: USA
  • Currency: USD
  • Operations: Receiving + Shipping
  • Routes: US domestic, international export

WAREHOUSE B: BRAZIL DISTRIBUTION (São Paulo)
  • Location: Brazil
  • Currency: BRL
  • Operations: Import clearance + Distribution
  • Routes: Brazil domestic (ICMS per state)

WAREHOUSE C: MEXICO LOGISTICS (Mexico City)
  • Location: Mexico
  • Currency: MXN
  • Operations: Cross-dock + Distribution
  • Routes: Mexico domestic (CFDI required)

WAREHOUSE D: EUROPE HUB (Rotterdam)
  • Location: Netherlands
  • Currency: EUR
  • Operations: EU import + Distribution
  • Routes: Intra-EU, customs clearance

GLOBAL INVENTORY RULES:
  • Auto-reorder based on lead times per warehouse
  • Inter-warehouse transfers with landed costs
  • Country-specific tracking (ANATEL, NOM, CE marking)
  • Multi-currency inventory valuation (FIFO, Average)
```

### International Inventory Automation

```python
# Odoo international inventory automation

from odoo import api, fields, models

class InternationalInventory(models.Model):
    _name = 'international.inventory'
    _description = 'International Inventory Management'

    @api.model
    def create_inter_warehouse_transfer(self, from_warehouse, to_warehouse, product_id, quantity):
        """
        Auto-create transfer between international warehouses
        """
        # Create transfer
        picking = self.env['stock.picking'].create({
            'picking_type_id': from_warehouse.int_type_id.id,
            'location_id': from_warehouse.lot_stock_id.id,
            'location_dest_id': to_warehouse.lot_stock_id.id,
            'move_ids': [(0, 0, {
                'product_id': product_id,
                'product_uom_qty': quantity,
                'product_uom': self.env['product.product'].browse(product_id).uom_id.id,
                'location_id': from_warehouse.lot_stock_id.id,
                'location_dest_id': to_warehouse.lot_stock_id.id,
            })],
        })

        # Validate transfer
        picking.action_confirm()
        picking.action_assign()
        picking.move_ids.quantity = quantity
        picking.move_ids.picked = True
        picking.button_validate()

        # Calculate landed costs (customs, freight, insurance)
        landed_cost = self._calculate_landed_cost(product_id, from_warehouse, to_warehouse)

        # Record landed cost
        self.env['stock.landed.cost'].create({
            'picking_ids': [(4, picking.id)],
            'cost_lines': [(0, 0, {
                'product_id': product_id,
                'price_unit': landed_cost,
                'split_method': 'equal',
            })],
        })

        return {
            'picking_id': picking.id,
            'landed_cost': landed_cost,
        }

    def _calculate_landed_cost(self, product_id, from_ware, to_ware):
        """Calculate landed cost including duties and taxes"""
        product = self.env['product.product'].browse(product_id)

        # Country-specific duty rates (simplified)
        duty_rates = {
            'BR': 0.15,  # 15% import duty
            'MX': 0.12,  # 12% import duty
            'CO': 0.10,  # 10% import duty
            'AR': 0.20,  # 20% import duty
        }

        duty_rate = duty_rates.get(to_ware.country_id.code, 0.05)
        duty_amount = product.standard_price * duty_rate

        # Freight estimate
        freight = 50.0  # Simplified

        # Insurance
        insurance = product.standard_price * 0.01

        return duty_amount + freight + insurance
```

## 7. International Accounting and Consolidation

### Multi-Company Accounting

```
ODOO INTERNATIONAL ACCOUNTING:

PER-COMPANY SETUP:
  • Chart of accounts (country-specific)
  • Tax configuration (VAT, IVA, ICMS, etc.)
  • Fiscal year (calendar or custom)
  • Currency (local currency per entity)
  • Bank accounts (local bank per country)
  • Stripe Connect (per-country Stripe account)

CONSOLIDATION:
  • Parent company sees all subsidiaries
  • Inter-company transactions auto-reconciled
  • Currency conversion at closing rate
  • Consolidated P&L, Balance Sheet, Cash Flow
  • Elimination of inter-company balances

REPORTING:
  • Local GAAP reports per country
  • IFRS consolidated reports
  • Tax reports per jurisdiction
  • Management reports in USD
  • Real-time group consolidation
```

### Inter-Company Reconciliation Automation

```python
# Odoo inter-company reconciliation

from odoo import api, fields, models

class InterCompanyReconciliation(models.Model):
    _name = 'inter.company.reconciliation'
    _description = 'Inter-Company Auto-Reconciliation'

    @api.model
    def auto_reconcile_intercompany(self):
        """
        Auto-reconcile inter-company transactions
        """
        companies = self.env['res.company'].search([('parent_id', '!=', False)])

        for company in companies:
            # Get inter-company receivables
            receivables = self.env['account.move.line'].search([
                ('company_id', '=', company.id),
                ('account_id.internal_type', '=', 'receivable'),
                ('partner_id', 'in', company.parent_id.partner_id.ids),
                ('reconciled', '=', False),
                ('parent_state', '=', 'posted'),
            ])

            # Get inter-company payables from parent
            payables = self.env['account.move.line'].search([
                ('company_id', '=', company.parent_id.id),
                ('account_id.internal_type', '=', 'payable'),
                ('partner_id', '=', company.partner_id.id),
                ('reconciled', '=', False),
                ('parent_state', '=', 'posted'),
            ])

            # Match and reconcile
            for receivable in receivables:
                matching_payable = payables.filtered(
                    lambda p: abs(p.balance + receivable.balance) < 0.01
                )

                if matching_payable:
                    (receivable + matching_payable[:1]).reconcile()

        return {'reconciled': True}
```

### International Payment Reconciliation with Stripe

```python
# Odoo Stripe reconciliation automation

from odoo import api, fields, models

class StripeReconciliation(models.Model):
    _name = 'stripe.reconciliation'
    _description = 'Stripe Payment Reconciliation'

    @api.model
    def auto_reconcile_stripe_payments(self, company_id):
        """
        Auto-reconcile Stripe payments with Odoo invoices
        """
        company = self.env['res.company'].browse(company_id)

        # Get Stripe API configured for this company
        stripe_api = self.env['stripe.api'].search([
            ('company_id', '=', company_id),
        ], limit=1)

        if not stripe_api:
            return {'error': 'Stripe API not configured for this company'}

        # Fetch recent Stripe charges
        charges = stripe_api.fetch_charges(days_back=7)

        reconciled_count = 0
        for charge in charges:
            # Find matching Odoo invoice
            invoice_ref = charge.get('metadata', {}).get('odoo_invoice_id')
            if not invoice_ref:
                continue

            invoice = self.env['account.move'].browse(int(invoice_ref))
            if not invoice.exists():
                continue

            if invoice.payment_state == 'paid':
                continue

            # Register payment in Odoo
            payment = self.env['account.payment'].create({
                'payment_type': 'inbound',
                'partner_type': 'customer',
                'partner_id': invoice.partner_id.id,
                'amount': charge['amount'] / 100,
                'currency_id': self._get_currency_id(charge['currency']),
                'payment_method_id': self._get_stripe_method_id(company_id),
                'ref': f"Stripe: {charge['id']}",
                'company_id': company_id,
            })

            payment.action_post()

            # Reconcile with invoice
            (invoice + payment). reconcile()

            reconciled_count += 1

        return {
            'reconciled': reconciled_count,
            'company': company.name,
            'date': fields.Date.today(),
        }

    def _get_stripe_method_id(self, company_id):
        method = self.env['account.payment.method'].search([
            ('code', '=', 'stripe'),
            ('company_id', '=', company_id),
        ], limit=1)
        if not method:
            method = self.env['account.payment.method'].create({
                'name': 'Stripe',
                'code': 'stripe',
                'payment_type': 'inbound',
                'company_id': company_id,
            })
        return method.id
```

## 8. Stripe + Odoo Integration

### Stripe Connect for Multi-Company

```
STRIPE CONNECT IN ODOO:

ARCHITECTURE:
  • Platform: Odoo (central)
  • Stripe Connect: One platform account
  • Connected accounts: Per-country Stripe accounts
  • Each subsidiary has its own Stripe account
  • Payments go to local Stripe → local bank account

BENEFITS:
  • Customers pay in local currency
  • Funds settle in local bank accounts
  • Automatic FX conversion via Stripe
  • Unified reporting in Odoo
  • Per-country tax handling
```

### Stripe + Odoo Implementation

```javascript
// Odoo + Stripe Connect integration

const odooStripeConnect = {
  // Create Stripe Connect account for subsidiary
  createConnectAccount: async (company) => {
    const account = await stripe.accounts.create({
      type: 'standard',
      country: company.country,
      email: company.email,
      business_type: company.businessType,
      company: {
        name: company.name,
        address: {
          line1: company.address,
          city: company.city,
          state: company.state,
          postal_code: company.zip,
          country: company.country,
        },
        tax_id: company.taxId,
      },
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      metadata: {
        odoo_company_id: company.id,
      },
    });

    // Store account ID in Odoo
    await odoo.updateCompany(company.id, {
      x_stripe_connect_account_id: account.id,
    });

    // Generate onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://company.com/stripe/refresh',
      return_url: `https://company.com/stripe/complete?company=${company.id}`,
      type: 'account_onboarding',
    });

    return {
      accountId: account.id,
      onboardingUrl: accountLink.url,
    };
  },

  // Process payment through correct Stripe account
  createPaymentIntent: async (order) => {
    // Get company's Stripe account
    const company = await odoo.getCompany(order.companyId);
    const stripeAccountId = company.x_stripe_connect_account_id;

    // Create payment intent on connected account
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.amountTotal * 100),
      currency: order.currency.toLowerCase(),
      metadata: {
        odoo_order_id: order.id,
        odoo_company_id: order.companyId,
      },
      application_fee_amount: Math.round(order.amountTotal * 100 * 0.02), // 2% platform fee
      transfer_data: {
        destination: stripeAccountId,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  },
};
```

## 9. Odoo Implementation Roadmap

### Phased International Rollout

```
ODOO INTERNATIONAL IMPLEMENTATION:

PHASE 1: FOUNDATION (Weeks 1-4)
  [ ] Install Odoo (Cloud or On-Premise)
  [ ] Configure base company
  [ ] Set up chart of accounts (country-specific)
  [ ] Configure basic modules: Sales, CRM, Accounting
  [ ] Set up Stripe integration (base country)
  [ ] Import customers, products, and open invoices

PHASE 2: MULTI-COMPANY (Weeks 5-8)
  [ ] Enable multi-company mode
  [ ] Create subsidiary companies
  [ ] Install country-specific fiscal localizations
  [ ] Configure currencies and exchange rates
  [ ] Set up inter-company rules
  [ ] Configure Stripe Connect for each country

PHASE 3: OPERATIONS (Weeks 9-12)
  [ ] Set up multi-warehouse inventory
  [ ] Configure international shipping carriers
  [ ] Install landed costs module
  [ ] Set up country-specific tax configurations
  [ ] Configure Stripe Tax integration
  [ ] Implement multi-language in CRM and Sales

PHASE 4: FINANCE (Weeks 13-16)
  [ ] Configure per-company bank accounts
  [ ] Set up automated Stripe reconciliation
  [ ] Implement inter-company invoicing
  [ ] Configure consolidation accounts
  [ ] Set up multi-currency reporting
  [ ] Train finance team on international workflows

PHASE 5: SCALE (Weeks 17-20)
  [ ] Enable e-commerce (multi-language, multi-currency)
  [ ] Configure subscription billing
  [ ] Set up automated purchase and procurement
  [ ] Implement HR and payroll per country
  [ ] Build custom reports and dashboards
  [ ] Integrate with third-party logistics (3PL)
```

### Module Recommendations by Region

| Region | Essential Odoo Modules | Localization Package |
|--------|----------------------|---------------------|
| **United States** | Sales, Accounting, CRM, Inventory, Stripe | US Accounting |
| **Brazil** | Sales, Accounting, CRM, Inventory, Fiscal | Brazilian Localization (NFe, NFSe, SPED) |
| **Mexico** | Sales, Accounting, CRM, Inventory, CFDI | Mexican Localization (CFDI 4.0) |
| **Colombia** | Sales, Accounting, CRM, Inventory, DIAN | Colombian Localization |
| **Argentina** | Sales, Accounting, CRM, Inventory, SIFEN | Argentine Localization |
| **Chile** | Sales, Accounting, CRM, Inventory, SII | Chilean Localization |
| **European Union** | Sales, Accounting, CRM, Inventory, VAT | EU VAT Reporting + country packages |

```python
# Odoo module auto-installer for international companies

from odoo import api, fields, models

class InternationalModuleInstaller(models.Model):
    _name = 'international.module.installer'
    _description = 'Auto-Install Modules for International Setup'

    @api.model
    def install_modules_for_region(self, region_code, company_id):
        """
        Auto-install recommended modules for a region
        """
        region_modules = {
            'US': ['account', 'sale', 'crm', 'stock', 'payment_stripe', 'payment'],
            'BR': ['account', 'sale', 'crm', 'stock', 'l10n_br', 'l10n_br_avista', 'payment_stripe'],
            'MX': ['account', 'sale', 'crm', 'stock', 'l10n_mx', 'l10n_mx_edi', 'payment_stripe'],
            'CO': ['account', 'sale', 'crm', 'stock', 'l10n_co', 'l10n_co_edi', 'payment_stripe'],
            'EU': ['account', 'sale', 'crm', 'stock', 'l10n_eu_service', 'payment_stripe'],
        }

        modules = region_modules.get(region_code, region_modules['US'])

        installed = []
        for module_name in modules:
            module = self.env['ir.module.module'].search([
                ('name', '=', module_name),
                ('state', '=', 'uninstalled'),
            ], limit=1)
            if module:
                module.button_install()
                installed.append(module_name)

        return {
            'region': region_code,
            'company_id': company_id,
            'installed': installed,
            'count': len(installed),
        }
```

## 10. Odoo Customization for International Needs

### Key Customizations

```
COMMON ODOO CUSTOMIZATIONS FOR INTERNATIONAL BUSINESS:

1. CUSTOM FIELDS
   - Tax ID per country (RFC, CNPJ, NIT, RUT, CUIT)
   - Harmonized System (HS) codes for products
   - Country of origin for inventory
   - Incoterms on sales and purchase orders

2. CUSTOM WORKFLOWS
   - Export documentation generation (commercial invoice, packing list)
   - Country-specific approval workflows
   - Multi-level approval for inter-company transfers
   - Localization-specific validation (Brazil NFe, Mexico CFDI)

3. CUSTOM REPORTS
   - Export documentation (certificate of origin, bill of lading)
   - Country-specific tax reports
   - Consolidated group financial statements
   - Multi-currency sales and margin analysis

4. AUTOMATIONS
   - Auto-generate export documents on delivery
   - Auto-send invoices via email per country
   - Auto-update exchange rates daily
   - Auto-reconcile Stripe payments
   - Auto-create inter-company invoices
```

### Low-Code Customization in Odoo

```python
# Odoo customization for international business

from odoo import api, fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    # International tax IDs
    l10n_mx_rfc = fields.Char('RFC (Mexico)')
    l10n_br_cnpj = fields.Char('CNPJ (Brazil)')
    l10n_co_nit = fields.Char('NIT (Colombia)')
    l10n_ar_cuit = fields.Char('CUIT (Argentina)')
    l10n_cl_rut = fields.Char('RUT (Chile)')

    # International trade
    hs_code_ids = fields.One2many('product.hs.code', 'partner_id', 'HS Codes')
    incoterm_id = fields.Many2one('incoterm', 'Preferred Incoterm')
    export_license = fields.Char('Export License Number')

    # Multi-currency billing
    invoice_currency_id = fields.Many2one(
        'res.currency',
        string='Invoice Currency',
        help='Preferred currency for invoicing this partner',
    )


class ProductProduct(models.Model):
    _inherit = 'product.product'

    # International trade fields
    hs_code = fields.Char('HS Code', help='Harmonized System Code for customs')
    country_of_origin_id = fields.Many2one('res.country', 'Country of Origin')
    customs_value = fields.Monetary(
        'Customs Value',
        currency_field='currency_id',
        help='Value for customs declaration (CIF)',
    )

    # Regional classifications
    l10n_br_ncm = fields.Char('NCM (Brazil)')
    l10n_mx_taric = fields.Char('TARIC (Mexico)')
    l10n_co_arancel = fields.Char('Arancel (Colombia)')


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.model
    def create(self, vals):
        """Auto-detect currency from partner country"""
        partner = self.env['res.partner'].browse(vals.get('partner_id'))

        if partner.invoice_currency_id:
            vals['currency_id'] = partner.invoice_currency_id.id
        elif partner.country_id and not vals.get('currency_id'):
            country_currency = {
                'US': 'USD', 'BR': 'BRL', 'MX': 'MXN',
                'CO': 'COP', 'AR': 'ARS', 'CL': 'CLP',
            }
            currency_code = country_currency.get(partner.country_id.code)
            if currency_code:
                currency = self.env['res.currency'].search([
                    ('name', '=', currency_code)
                ], limit=1)
                if currency:
                    vals['currency_id'] = currency.id

        return super(SaleOrder, self).create(vals)

    def action_confirm(self):
        """On confirmation, create Stripe payment link"""
        result = super(SaleOrder, self).action_confirm()

        for order in self:
            # Create Stripe payment link
            stripe_api = self.env['stripe.api'].search([
                ('company_id', '=', order.company_id.id),
            ], limit=1)

            if stripe_api and order.amount_total > 0:
                payment_link = stripe_api.create_payment_link(
                    amount=order.amount_total,
                    currency=order.currency_id.name.lower(),
                    description=f"Order {order.name}",
                    metadata={
                        'odoo_order_id': order.id,
                        'odoo_partner_id': order.partner_id.id,
                    },
                )

                order.write({
                    'x_stripe_payment_link': payment_link.get('url'),
                })

        return result
```

## Conclusion

**Odoo is the most practical and affordable ERP for international businesses in 2026.** Its native multi-company, multi-currency, and multi-language capabilities make it an ideal platform for companies operating across borders — whether you're a US company expanding into Latin America, a European business entering new markets, or a global enterprise managing subsidiaries worldwide.

The key principles for Odoo international success:

- **Start with fiscal localization** — install country-specific accounting packages before any other configuration
- **Configure multi-company first** — set up your company hierarchy before entering transactions
- **Connect Stripe per country** — use Stripe Connect so each subsidiary processes payments locally
- **Automate inter-company** — use Odoo's inter-company rules to eliminate manual reconciliation
- **Train locally** — each subsidiary should have Odoo configured in their language and currency

**Odoo gives you enterprise ERP capabilities at a fraction of the cost of legacy systems.** Combined with Stripe for payments and the right fiscal localizations, it becomes a complete international business management platform.

At **Sotomayor Consulting International**, we help businesses implement Odoo for international operations: from multi-company setup and fiscal localization to Stripe integration and custom module development. Contact us for a personalized consultation.
