---
title: "Cómo usar Odoo en empresas internacionales: Guía 2026"
description: "ERP Odoo para negocios internacionales"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Dashboard de Odoo ERP mostrando ventas multiempresa, multimoneda, inventario internacional y módulos de contabilidad global"
---

**Odoo es el ERP de código abierto de más rápido crecimiento para empresas internacionales.** A diferencia de los ERPs tradicionales que cuestan cientos de miles y tardan años en implementarse, Odoo ofrece una plataforma modular, asequible y flexible que escala con tus operaciones globales — desde CRM y ventas hasta inventario, contabilidad y fabricación.

En esta guía cubrimos **cómo configurar y usar Odoo para empresas internacionales en 2026**, incluyendo configuración multiempresa, operaciones multimoneda, tributación internacional, integración de pagos Stripe, CRM multilingüe, inventario global y contabilidad transfronteriza.

## 1. Por qué Odoo para negocios internacionales

### Odoo vs ERPs tradicionales

| Feature | Odoo | SAP / Oracle / Microsoft Dynamics |
|---------|------|----------------------------------|
| **Costo de licencia** | Gratis (Community) o $20-$40/usuario/mes (Enterprise) | $100-$500+/usuario/mes |
| **Tiempo de implementación** | Semanas a meses | Meses a años |
| **Modularidad** | 70+ módulos, instala lo que necesitas | Monolítico, requiere personalización pesada |
| **Multiempresa** | Soporte nativo multiempresa | Disponible pero complejo |
| **Multimoneda** | Integrado, tasas en tiempo real | Generalmente requiere complementos |
| **Multilingüe** | 50+ idiomas en la interfaz | Idiomas limitados |
| **Localización fiscal** | 40+ paquetes contables por país | Licenciamiento por país |
| **Integraciones** | Stripe, PayPal, Shopify, Amazon, etc. | Requiere integración personalizada |
| **Personalización** | Low-code, backend Python | ABAP, lenguajes propietarios |
| **Nube o On-Premise** | Ambos (Odoo.sh o autoalojado) | Generalmente solo nube o on-prem con costo extra |

### Módulos internacionales de Odoo

```
MÓDULOS DE ODOO PARA NEGOCIOS INTERNACIONALES:

FUNCIONALIDADES INTERNACIONALES PRINCIPALES:
  • Multiempresa — Manage multiple legal entities in one system
  • Multimoneda — Real-time exchange rates, auto-conversion
  • Multilingüe — UI and documents in 50+ languages
  • Multialmacén — Inventario global entre países

VENTAS Y CRM:
  • CRM — Tuberías multilingües y multimoneda
  • Ventas — Cotizaciones, pedidos, enlaces de pago Stripe
  • E-commerce — Tienda multilingüe y multimoneda
  • Suscripciones — Facturación recurrente en cualquier moneda

FINANZAS Y CONTABILIDAD:
  • Contabilidad — Libro mayor multiempresa y multimoneda
  • Facturación — Factura automática en moneda e idioma del cliente
  • Impuestos — Configuraciones impositivas por país (VAT, IVA, GST)
  • Stripe Connect — Integración de procesamiento de pagos

OPERACIONES:
  • Inventario — Gestión de stock multialmacén y multipaís
  • Fabricación — Planificación de producción multisitio
  • Compras — Adquisiciones internacionales y gestión de proveedores
  • Envíos — Integración de envíos multicarrier e internacionales

RRHH Y SERVICIOS:
  • Empleados — Gestión de empleados multiempresa
  • Nómina — Configuraciones de nómina por país
  • Proyectos — Gestión de proyectos internacionales
  • Hojas de tiempo — Tarifas de facturación multimoneda
```

## 2. Configuración multiempresa en Odoo

### Arquitectura multiempresa

```
ESTRUCTURA MULTIEMPRESA DE ODOO:

EMPRESA A: US HOLDING (Matriz)
  • Moneda: USD
  • Impuesto: Sales Tax EE.UU.
  • Idioma: Inglés
  • Banco: Chase US
  • Cuenta Stripe: Stripe US

    ├── EMPRESA B: BRASIL OPERAÇÕES (Filial)
    │   • Moneda: BRL
    │   • Impuesto: Impuestos brasileños (ICMS, ISS, IPI)
    │   • Idioma: Portugués (BR)
    │   • Banco: Itaú Brasil
    │   • Cuenta Stripe: Stripe Brasil
    │   • Fiscal Localización fiscal: Brasilian accounting
    │
    ├── EMPRESA C: MÉXICO OPERACIONES (Filial)
    │   • Moneda: MXN
    │   • Impuesto: IVA, ISR
    │   • Idioma: Español (MX)
    │   • Banco: BBVA México
    │   • Cuenta Stripe: Stripe México
    │   • Fiscal Localización fiscal: Mexican accounting
    │
    └── EMPRESA D: EUROPE GMBH (Filial)
        • Moneda: EUR
        • Impuesto: VAT alemán
        • Idioma: Alemán
        • Banco: Deutsche Bank
        • Cuenta Stripe: Stripe UE (Irlanda)
        • Fiscal Localización fiscal: German accounting
```

### Configuración multiempresa

```
PASOS DE CONFIGURACIÓN MULTIEMPRESA:

1. HABILITAR MULTIEMPRESA
   Ajustes → Ajustes Generales → Multiempresas
   Habilitar "Gestionar múltiples empresas"
   Configurar moneda de consolidación (USD)

2. CREAR EMPRESAS
   Ajustes → Usuarios y Empresas → Empresas
   Crear cada entidad legal con:
   - Nombre de empresa, dirección, ID fiscal
   - Moneda, país, idioma
   - Configuración contable
   - Logo y marca

3. CONFIGURAR INTEREMPRESAS
   Instalar módulo "Reglas Interempresas"
   Configurar asientos automáticos entre empresas
   Configurar reglas de precios de transferencia
   Configurar facturación interempresas

4. ASIGNAR USUARIOS
   Cada usuario puede acceder a una o más empresas
   Configurar empresa predeterminada por usuario
   Configurar derechos de acceso por empresa

5. CONSOLIDACIÓN
   Instalar módulo "Consolidación"
   Configurar mapeo de cuentas de consolidación
   Consolidar automáticamente filiales en matriz
   Generar estados financieros consolidados
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

## 3. Operaciones multimoneda

### Configuración de moneda

```python
# Odoo multi-currency setup

from odoo import api, fields, models

class MultiCurrencyConfig(models.Model):
    _inherit = 'res.config.settings'

    def configure_multi_currency(self):
        """
        Habilitar y configurar multimoneda
        """
        # Habilitar múltiples monedas
        self.env['res.currency']._activate_currencies()

        # Configurar actualización automática de tasas
        self.env['res.currency.rate']._update_rates_auto()

        # Configurar redondeo de moneda por empresa
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

### Flujo de ventas multimoneda

```
VENTAS MULTIMONEDA EN ODOO:

1. CREAR COTIZACIÓN
   - Seleccionar cliente (trae moneda automáticamente)
   - O seleccionar moneda manualmente
   - Precios se convierten automáticamente desde tarifa
   - Impuesto se calcula automáticamente en moneda local

2. CONFIRMAR PEDIDO
   - Crear factura en moneda del cliente
   - Generar enlace de pago Stripe en moneda local
   - Enviar factura + enlace de pago por email

3. RECIBIR PAGO
   - Cliente paga vía Stripe en su moneda
   - Stripe convierte a tu moneda de liquidación
   - Odoo registra el pago con tasa de cambio
   - Ganancia/pérdida FX realizada se calcula automáticamente

4. CONTABILIDAD
   - Asiento contable en moneda del cliente
   - Conversión automática a moneda de la empresa
   - Cuenta de diferencia FX actualizada
   - Liquidación interempresas si aplica
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

## 4. Tributación internacional en Odoo

### Configuración de impuestos por país

| Country | Sistema impositivo | Odoo Fiscal Localización fiscal Package | Integración Stripe Tax |
|---------|-----------|----------------------------------|----------------------|
| **Estados Unidos** | Sales Tax (nivel estatal) | Paquete contable US | Stripe Tax calcula automáticamente |
| **Brasil** | ICMS, ISS, IPI, PIS, COFINS | Brasilian Localización fiscal (completed) | Configuración manual |
| **México** | IVA, ISR, IEPS | Mexican Localización fiscal | CFDI vía tercero |
| **Colombia** | IVA (19%), ICA, RETEIVA | Colombian Localización fiscal | Compatible DIAN |
| **Argentina** | IVA (21%), IIBB | Argentine Localización fiscal | Integración SIFEN |
| **Chile** | IVA (19%) | Chilean Localización fiscal | Compatible SII |
| **Unión Europea** | VAT (tasas específicas por país) | Reporte VAT UE | Stripe Tax calcula automáticamente |
| **Reino Unido** | VAT (20%) | Paquete contable UK | Stripe Tax calcula automáticamente |

### Configuración de impuestos internacionales

```python
# Odoo international tax automation

from odoo import api, fields, models

class InternationalTaxConfig(models.Model):
    _name = 'international.tax.config'
    _description = 'International Tax Configuration'

    @api.model
    def configure_taxes_for_company(self, company_id, country_code):
        """
        Configurar impuestos automáticamente según el país
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

## 5. CRM y ventas multilingüe

### Configuración de idioma

```
CONFIGURACIÓN DE IDIOMA EN ODOO:

IDIOMAS DE INTERFAZ:
  - 50+ idiomas disponibles para la interfaz de Odoo
  - Cada usuario configura su idioma preferido
  - Traducciones gestionadas por módulo
  - Traducciones comunitarias de Odoo Translators

IDIOMAS DE DOCUMENTOS:
  - Facturas, cotizaciones, contratos en el idioma del cliente
  - Idioma detectado desde partner/país
  - Traducir automáticamente nombres y descripciones de productos
  - Plantillas de email multilingüe

IDIOMAS DE CONTENIDO:
  - Descripciones de productos e-commerce por idioma
  - Páginas web en múltiples idiomas
  - Artículos de blog y base de conocimiento
  - Flujo de trabajo de traducción automatizado
```

### Automatización de ventas multilingüe

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

## 6. Inventario y almacenes internacionales

### Configuración multialmacén

```
CONFIGURACIÓN MULTIALMACÉN DE ODOO:

ALMACÉN A: US FULFILLMENT (Miami)
  • Ubicación: USA
  • Moneda: USD
  • Operaciones: Recepción + Envío
  • Rutas: Doméstico US, exportación internacional

ALMACÉN B: BRAZIL DISTRIBUTION (São Paulo)
  • Location: Brasil
  • Moneda: BRL
  • Operaciones: Despacho de importación + Distribución
  • Routes: Brasil domestic (ICMS per state)

WAREHOUSE C: MEXICO LOGISTICS (México City)
  • Location: México
  • Moneda: MXN
  • Operaciones: Cross-dock + Distribución
  • Routes: México domestic (CFDI required)

ALMACÉN D: EUROPE HUB (Róterdam)
  • Ubicación: Países Bajos
  • Moneda: EUR
  • Operaciones: Importación UE + Distribución
  • Rutas: Intra-UE, despacho aduanero

REGLAS DE INVENTARIO GLOBAL:
  • Reorden automática según plazos de entrega por almacén
  • Transferencias entre almacenes con costos landed
  • Tracking por país (ANATEL, NOM, marcado CE)
  • Valoración de inventario multimoneda (FIFO, Promedio)
```

### Automatización de inventario internacional

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

## 7. Contabilidad y consolidación internacional

### Contabilidad multiempresa

```
CONTABILIDAD INTERNACIONAL EN ODOO:

CONFIGURACIÓN POR EMPRESA:
  • Plan de cuentas (específico por país)
  • Configuración de impuestos (VAT, IVA, ICMS, etc.)
  • Ejercicio fiscal (calendario o personalizado)
  • Moneda (moneda local por entidad)
  • Cuentas bancarias (banco local por país)
  • Stripe Connect (cuenta Stripe por país)

CONSOLIDACIÓN:
  • Matriz ve todas las filiales
  • Transacciones interempresas conciliadas automáticamente
  • Conversión de moneda a tasa de cierre
  • PyG, Balance General y Flujo de Caja consolidados
  • Eliminación de saldos interempresas

REPORTES:
  • Reportes GAAP locales por país
  • Reportes consolidados IFRS
  • Reportes fiscales por jurisdicción
  • Reportes gerenciales en USD
  • Consolidación de grupo en tiempo real
```

### Automatización de conciliación interempresas

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

### Conciliación de pagos internacionales con Stripe

```python
# Odoo Stripe reconciliation automation

from odoo import api, fields, models

class StripeReconciliation(models.Model):
    _name = 'stripe.reconciliation'
    _description = 'Stripe Payment Reconciliation'

    @api.model
    def auto_reconcile_stripe_payments(self, company_id):
        """
        Conciliar pagos Stripe automáticamente with Odoo invoices
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

## 8. Integración Stripe + Odoo

### Stripe Connect para multiempresa

```
STRIPE CONNECT EN ODOO:

ARQUITECTURA:
  • Plataforma: Odoo (central)
  • Stripe Connect: Una cuenta de plataforma
  • Cuentas conectadas: Cuentas Stripe por país
  • Cada filial tiene su propia cuenta Stripe
  • Los pagos van a Stripe local → cuenta bancaria local

BENEFICIOS:
  • Clientes pagan en moneda local
  • Fondos se liquidan en cuentas bancarias locales
  • Conversión FX automática vía Stripe
  • Reportes unificados en Odoo
  • Manejo de impuestos por país
```

### Implementación de Stripe + Odoo

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

## 9. Hoja de ruta de implementación de Odoo

### Despliegue internacional por fases

```
IMPLEMENTACIÓN INTERNACIONAL DE ODOO:

FASE 1: FUNDACIÓN (Semanas 1-4)
  [ ] Install Odoo (Nube o On-Premise)
  [ ] Configurar empresa base
  [ ] Configurar plan de cuentas (específico por país)
  [ ] Configurar módulos básicos: Ventas, CRM, Contabilidad
  [ ] Configurar integración Stripe (país base)
  [ ] Importar clientes, productos y facturas abiertas

FASE 2: MULTIEMPRESA (Semanas 5-8)
  [ ] Habilitar modo multiempresa
  [ ] Crear empresas filiales
  [ ] Instalar localizaciones fiscales por país
  [ ] Configurar monedas y tasas de cambio
  [ ] Configurar reglas interempresas
  [ ] Configurar Stripe Connect para cada país

FASE 3: OPERACIONES (Semanas 9-12)
  [ ] Configurar inventario multialmacén
  [ ] Configurar transportistas internacionales
  [ ] Instalar módulo de costos landed
  [ ] Configurar impuestos por país
  [ ] Configurar integración Stripe Tax
  [ ] Implementar multilingüe en CRM y Ventas

FASE 4: FINANZAS (Semanas 13-16)
  [ ] Configurar cuentas bancarias por empresa
  [ ] Configurar conciliación Stripe automatizada
  [ ] Implementar facturación interempresas
  [ ] Configurar cuentas de consolidación
  [ ] Configurar reportes multimoneda
  [ ] Capacitar al equipo financiero en flujos internacionales

FASE 5: ESCALAR (Semanas 17-20)
  [ ] Habilitar e-commerce (multilingüe, multimoneda)
  [ ] Configurar facturación de suscripciones
  [ ] Configurar compras y adquisiciones automatizadas
  [ ] Implementar RRHH y nómina por país
  [ ] Crear reportes y dashboards personalizados
  [ ] Integrar con logística de terceros (3PL)
```

### Recomendaciones de módulos por región

| Región | Módulos esenciales de Odoo | Localización fiscal Package |
|--------|----------------------|---------------------|
| **Estados Unidos** | Ventas, Contabilidad, CRM, Inventario, Stripe | Contabilidad US |
| **Brasil** | Ventas, Contabilidad, CRM, Inventario, Fiscal | Brasilian Localización fiscal (NFe, NFSe, SPED) |
| **México** | Ventas, Contabilidad, CRM, Inventario, CFDI | Mexican Localización fiscal (CFDI 4.0) |
| **Colombia** | Ventas, Contabilidad, CRM, Inventario, DIAN | Colombian Localización fiscal |
| **Argentina** | Ventas, Contabilidad, CRM, Inventario, SIFEN | Argentine Localización fiscal |
| **Chile** | Ventas, Contabilidad, CRM, Inventario, SII | Chilean Localización fiscal |
| **Unión Europea** | Ventas, Contabilidad, CRM, Inventario, VAT | Reporte VAT UE + country packages |

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

## 10. Personalización de Odoo para necesidades internacionales

### Personalizaciones clave

```
PERSONALIZACIONES COMUNES DE ODOO PARA NEGOCIOS INTERNACIONALES:

1. CAMPOS PERSONALIZADOS
   - ID fiscal por país (RFC, CNPJ, NIT, RUT, CUIT)
   - Códigos SA (Sistema Armonizado) para productos
   - País de origen para inventario
   - Incoterms en pedidos de venta y compra

2. FLUJOS DE TRABAJO PERSONALIZADOS
   - Generación de documentación de exportación (factura comercial, lista de empaque)
   - Flujos de aprobación por país
   - Aprobación multinivel para transferencias interempresas
   - Localización fiscal-specific validation (Brasil NFe, México CFDI)

3. REPORTES PERSONALIZADOS
   - Documentación de exportación (certificado de origen, conocimiento de embarque)
   - Reportes fiscales por país
   - Estados financieros consolidados del grupo
   - Análisis de ventas y márgenes multimoneda

4. AUTOMATIZACIONES
   - Generar automáticamente documentos de exportación al entregar
   - Enviar facturas automáticamente por email según país
   - Actualizar tasas de cambio automáticamente diario
   - Conciliar pagos Stripe automáticamente
   - Crear facturas interempresas automáticamente
```

### Personalización low-code en Odoo

```python
# Odoo customization for international business

from odoo import api, fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    # International tax IDs
    l10n_mx_rfc = fields.Char('RFC (México)')
    l10n_br_cnpj = fields.Char('CNPJ (Brasil)')
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

    # Regiónal classifications
    l10n_br_ncm = fields.Char('NCM (Brasil)')
    l10n_mx_taric = fields.Char('TARIC (México)')
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

## Conclusión

**Odoo es el ERP más práctico y asequible para empresas internacionales en 2026.** Sus capacidades nativas multiempresa, multimoneda y multilingüe lo convierten en una plataforma ideal para empresas que operan a través de fronteras — ya sea una empresa estadounidense expandiéndose a Latinoamérica, un negocio europeo entrando a nuevos mercados, o una empresa global gestionando filiales en todo el mundo.

Los principios clave para el éxito internacional con Odoo:

- **Comienza con la localización fiscal** — instala paquetes contables específicos por país antes de cualquier otra configuración
- **Configura multiempresa primero** — configura tu jerarquía empresarial antes de ingresar transacciones
- **Conecta Stripe por país** — usa Stripe Connect para que cada filial procese pagos localmente
- **Automatiza interempresas** — usa las reglas interempresas de Odoo para eliminar la conciliación manual
- **Capacita localmente** — cada filial debe tener Odoo configurado en su idioma y moneda

**Odoo te brinda capacidades ERP empresariales a una fracción del costo de los sistemas tradicionales.** Combinado con Stripe para pagos y las localizaciones fiscales adecuadas, se convierte en una plataforma completa de gestión empresarial internacional.

En **Sotomayor Consulting International**, ayudamos a empresas a implementar Odoo para operaciones internacionales: desde configuración multiempresa y localización fiscal hasta integración Stripe y desarrollo de módulos personalizados. Contáctanos para una consulta personalizada.
