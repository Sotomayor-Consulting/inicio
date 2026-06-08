---
title: "Como usar Odoo em empresas internacionais: Guia 2026"
description: "ERP Odoo para negócios internacionais"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Dashboard do Odoo ERP mostrando vendas multiempresa, multimoeda, inventário internacional e módulos de contabilidade global"
---

**O Odoo é o ERP de código aberto que mais cresce para negócios internacionais.** Diferente dos ERPs legados que custam centenas de milhares e levam anos para implementar, o Odoo oferece uma plataforma modular, acessível e flexível que escala com suas operações globais — de CRM e vendas a inventário, contabilidade e fabricação.

Neste guia, cobrimos **como configurar e usar o Odoo para negócios internacionais em 2026**, incluindo configuração multiempresa, operações multimoeda, tributação internacional, integração de pagamentos Stripe, CRM multilíngue, inventário global e contabilidade transfronteiriça.

## 1. Por que Odoo para negócios internacionais

### Odoo vs ERPs legados

| Feature | Odoo | SAP / Oracle / Microsoft Dynamics |
|---------|------|----------------------------------|
| **Custo de licença** | Gratuito (Community) ou $20-$40/usuário/mês (Enterprise) | $100-$500+/usuário/mês |
| **Tempo de implementação** | Semanas a meses | Meses a anos |
| **Modularidade** | 70+ módulos, instale o que precisa | Monolítico, requer personalização pesada |
| **Multiempresa** | Suporte nativo multiempresa | Disponível mas complexo |
| **Multimoeda** | Integrado, taxas em tempo real | Geralmente requer complementos |
| **Multilíngue** | 50+ idiomas na interface | Idiomas limitados |
| **Localização fiscal** | 40+ pacotes contábeis por país | Licenciamento por país |
| **Integrações** | Stripe, PayPal, Shopify, Amazon, etc. | Requer integração personalizada |
| **Personalização** | Low-code, backend Python | ABAP, linguagens proprietárias |
| **Nuvem ou On-Premise** | Ambos (Odoo.sh ou auto-hospedado) | Geralmente só nuvem ou on-prem com custo extra |

### Módulos internacionais do Odoo

```
MÓDULOS DO ODOO PARA NEGÓCIOS INTERNACIONAIS:

FUNCIONALIDADES INTERNACIONAIS PRINCIPAIS:
  • Multiempresa — Manage multiple legal entities in one system
  • Multimoeda — Real-time exchange rates, auto-conversion
  • Multilíngue — UI and documents in 50+ languages
  • Multiarmazém — Inventário global entre países

VENDAS E CRM:
  • CRM — Funis multilíngues e multimoeda
  • Vendas — Cotações, pedidos, links de pagamento Stripe
  • E-commerce — Loja multilíngue e multimoeda
  • Assinaturas — Faturamento recorrente em qualquer moeda

FINANÇAS E CONTABILIDADE:
  • Contabilidade — Razão geral multiempresa e multimoeda
  • Faturamento — Fatura automática na moeda e idioma do cliente
  • Impostos — Configurações tributárias por país (VAT, IVA, GST)
  • Stripe Connect — Integração de processamento de pagamentos

OPERAÇÕES:
  • Inventário — Gestão de estoque multiarmazém e multipaís
  • Fabricação — Planejamento de produção multissite
  • Compras — Aquisições internacionais e gestão de fornecedores
  • Remessas — Integração de remessas multicarrier e internacionais

RH E SERVIÇOS:
  • Funcionários — Gestão de funcionários multiempresa
  • Folha de pagamento — Configurações de folha por país
  • Projetos — Gestão de projetos internacionais
  • Folhas de ponto — Tarifas de faturamento multimoeda
```

## 2. Configuração multiempresa no Odoo

### Arquitetura multiempresa

```
ESTRUTURA MULTIEMPRESA DO ODOO:

EMPRESA A: US HOLDING (Matriz)
  • Moeda: USD
  • Imposto: Sales Tax EUA
  • Idioma: Inglês
  • Banco: Chase US
  • Conta Stripe: Stripe US

    ├── EMPRESA B: BRASIL OPERAÇÕES (Filial)
    │   • Moeda: BRL
    │   • Imposto: Impostos brasileiros (ICMS, ISS, IPI)
    │   • Idioma: Português (BR)
    │   • Banco: Itaú Brasil
    │   • Conta Stripe: Stripe Brasil
    │   • Fiscal Localização fiscal: Brasilian accounting
    │
    ├── EMPRESA C: MÉXICO OPERACIONES (Filial)
    │   • Moeda: MXN
    │   • Imposto: IVA, ISR
    │   • Idioma: Espanhol (MX)
    │   • Banco: BBVA México
    │   • Conta Stripe: Stripe México
    │   • Fiscal Localização fiscal: Mexican accounting
    │
    └── EMPRESA D: EUROPE GMBH (Filial)
        • Moeda: EUR
        • Imposto: VAT alemão
        • Idioma: Alemão
        • Banco: Deutsche Bank
        • Conta Stripe: Stripe UE (Irlanda)
        • Fiscal Localização fiscal: German accounting
```

### Configuração multiempresa

```
PASSOS DE CONFIGURAÇÃO MULTIEMPRESA:

1. HABILITAR MULTIEMPRESA
   Configurações → Configurações Gerais → Multiempresas
   Habilitar "Gerenciar múltiplas empresas"
   Definir moeda de consolidação (USD)

2. CRIAR EMPRESAS
   Configurações → Usuários e Empresas → Empresas
   Criar cada entidade legal com:
   - Nome da empresa, endereço, ID fiscal
   - Moeda, país, idioma
   - Configuração contábil
   - Logotipo e marca

3. CONFIGURAR INTEREMPRESAS
   Instalar módulo "Regras Interempresas"
   Configurar lançamentos automáticos entre empresas
   Configurar regras de preços de transferência
   Configurar faturamento interempresas

4. ATRIBUIR USUÁRIOS
   Cada usuário pode acessar uma ou mais empresas
   Definir empresa padrão por usuário
   Configurar direitos de acesso por empresa

5. CONSOLIDAÇÃO
   Instalar módulo "Consolidação"
   Configurar mapeamento de contas de consolidação
   Consolidar automaticamente filiais na matriz
   Gerar demonstrações financeiras consolidadas
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

## 3. Operações multimoeda

### Configuração de moeda

```python
# Odoo multi-currency setup

from odoo import api, fields, models

class MultiCurrencyConfig(models.Model):
    _inherit = 'res.config.settings'

    def configure_multi_currency(self):
        """
        Habilitar e configurar multimoeda
        """
        # Habilitar múltiplas moedas
        self.env['res.currency']._activate_currencies()

        # Configurar atualização automática de taxas
        self.env['res.currency.rate']._update_rates_auto()

        # Configurar arredondamento de moeda por empresa
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

### Fluxo de vendas multimoeda

```
VENDAS MULTIMOEDA NO ODOO:

1. CRIAR COTAÇÃO
   - Selecionar cliente (puxa moeda automaticamente)
   - Ou selecionar moeda manualmente
   - Preços convertem automaticamente da tabela de preços
   - Imposto calculado automaticamente na moeda local

2. CONFIRMAR PEDIDO
   - Criar fatura na moeda do cliente
   - Gerar link de pagamento Stripe na moeda local
   - Enviar fatura + link de pagamento por email

3. RECEBER PAGAMENTO
   - Cliente paga via Stripe na sua moeda
   - Stripe converte para sua moeda de liquidação
   - Odoo registra o pagamento com taxa de câmbio
   - Ganho/perda FX realizada calculada automaticamente

4. CONTABILIDADE
   - Lançamento contábil na moeda do cliente
   - Conversão automática para moeda da empresa
   - Conta de diferença FX atualizada
   - Liquidação interempresas se aplicável
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

## 4. Tributação internacional no Odoo

### Configuração de impostos por país

| Country | Sistema tributário | Odoo Fiscal Localização fiscal Package | Integração Stripe Tax |
|---------|-----------|----------------------------------|----------------------|
| **Estados Unidos** | Sales Tax (nível estadual) | Pacote contábil US | Stripe Tax calcula automaticamente |
| **Brasil** | ICMS, ISS, IPI, PIS, COFINS | Brasilian Localização fiscal (completed) | Configuração manual |
| **México** | IVA, ISR, IEPS | Mexican Localização fiscal | CFDI via terceiro |
| **Colômbia** | IVA (19%), ICA, RETEIVA | Colômbian Localização fiscal | Compatível DIAN |
| **Argentina** | IVA (21%), IIBB | Argentine Localização fiscal | Integração SIFEN |
| **Chile** | IVA (19%) | Chilean Localização fiscal | Compatível SII |
| **União Europeia** | VAT (taxas específicas por país) | Relatório VAT UE | Stripe Tax calcula automaticamente |
| **Reino Unido** | VAT (20%) | Pacote contábil UK | Stripe Tax calcula automaticamente |

### Configuração de impostos internacionais

```python
# Odoo international tax automation

from odoo import api, fields, models

class InternationalTaxConfig(models.Model):
    _name = 'international.tax.config'
    _description = 'International Tax Configuration'

    @api.model
    def configure_taxes_for_company(self, company_id, country_code):
        """
        Configurar impostos automaticamente com base no país
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

## 5. CRM e vendas multilíngue

### Configuração de idioma

```
CONFIGURAÇÃO DE IDIOMA NO ODOO:

IDIOMAS DA INTERFACE:
  - 50+ idiomas disponíveis para interface do Odoo
  - Cada usuário define seu idioma preferido
  - Traduções gerenciadas por módulo
  - Traduções comunitárias do Odoo Translators

IDIOMAS DE DOCUMENTOS:
  - Faturas, cotações, contratos no idioma do cliente
  - Idioma detectado do parceiro/país
  - Traduzir automaticamente nomes e descrições de produtos
  - Modelos de email multilíngue

IDIOMAS DE CONTEÚDO:
  - Descrições de produtos e-commerce por idioma
  - Páginas do site em vários idiomas
  - Artigos de blog e base de conhecimento
  - Fluxo de trabalho de tradução automatizado
```

### Automação de vendas multilíngue

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

## 6. Inventário e armazéns internacionais

### Configuração multiarmazém

```
CONFIGURAÇÃO MULTIARMAZÉM DO ODOO:

ARMAZÉM A: US FULFILLMENT (Miami)
  • Localização: EUA
  • Moeda: USD
  • Operações: Recebimento + Remessa
  • Rotas: Doméstico EUA, exportação internacional

ARMAZÉM B: BRAZIL DISTRIBUTION (São Paulo)
  • Location: Brasil
  • Moeda: BRL
  • Operações: Desembaraço de importação + Distribuição
  • Routes: Brasil domestic (ICMS per state)

WAREHOUSE C: MEXICO LOGISTICS (México City)
  • Location: México
  • Moeda: MXN
  • Operações: Cross-dock + Distribuição
  • Routes: México domestic (CFDI required)

ARMAZÉM D: EUROPE HUB (Roterdã)
  • Localização: Países Baixos
  • Moeda: EUR
  • Operações: Importação UE + Distribuição
  • Rotas: Intra-UE, desembaraço aduaneiro

REGRAS DE INVENTÁRIO GLOBAL:
  • Reordem automática baseada em prazos de entrega por armazém
  • Transferências entre armazéns com custos landed
  • Rastreamento por país (ANATEL, NOM, marcação CE)
  • Valoração de inventário multimoeda (FIFO, Média)
```

### Automação de inventário internacional

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

## 7. Contabilidade e consolidação internacional

### Contabilidade multiempresa

```
CONTABILIDADE INTERNACIONAL NO ODOO:

CONFIGURAÇÃO POR EMPRESA:
  • Plano de contas (específico por país)
  • Configuração de impostos (VAT, IVA, ICMS, etc.)
  • Exercício fiscal (calendário ou personalizado)
  • Moeda (moeda local por entidade)
  • Contas bancárias (banco local por país)
  • Stripe Connect (conta Stripe por país)

CONSOLIDAÇÃO:
  • Matriz vê todas as filiais
  • Transações interempresas conciliadas automaticamente
  • Conversão cambial à taxa de fechamento
  • P&L, Balanço Patrimonial e Fluxo de Caixa consolidados
  • Eliminação de saldos interempresas

RELATÓRIOS:
  • Relatórios GAAP locais por país
  • Relatórios consolidados IFRS
  • Relatórios fiscais por jurisdição
  • Relatórios gerenciais em USD
  • Consolidação de grupo em tempo real
```

### Automação de conciliação interempresas

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

### Conciliação de pagamentos internacionais com Stripe

```python
# Odoo Stripe reconciliation automation

from odoo import api, fields, models

class StripeReconciliation(models.Model):
    _name = 'stripe.reconciliation'
    _description = 'Stripe Payment Reconciliation'

    @api.model
    def auto_reconcile_stripe_payments(self, company_id):
        """
        Conciliar pagamentos Stripe automaticamente with Odoo invoices
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

## 8. Integração Stripe + Odoo

### Stripe Connect para multiempresa

```
STRIPE CONNECT NO ODOO:

ARQUITETURA:
  • Plataforma: Odoo (central)
  • Stripe Connect: Uma conta de plataforma
  • Contas conectadas: Contas Stripe por país
  • Cada filial tem sua própria conta Stripe
  • Pagamentos vão para Stripe local → conta bancária local

BENEFÍCIOS:
  • Clientes pagam em moeda local
  • Fundos são liquidados em contas bancárias locais
  • Conversão FX automática via Stripe
  • Relatórios unificados no Odoo
  • Gestão de impostos por país
```

### Implementação Stripe + Odoo

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

## 9. Roteiro de implementação do Odoo

### Implantação internacional por fases

```
IMPLEMENTAÇÃO INTERNACIONAL DO ODOO:

FASE 1: FUNDAÇÃO (Semanas 1-4)
  [ ] Install Odoo (Nuvem ou On-Premise)
  [ ] Configurar empresa base
  [ ] Configurar plano de contas (específico por país)
  [ ] Configurar módulos básicos: Vendas, CRM, Contabilidade
  [ ] Configurar integração Stripe (país base)
  [ ] Importar clientes, produtos e faturas abertas

FASE 2: MULTIEMPRESA (Semanas 5-8)
  [ ] Habilitar modo multiempresa
  [ ] Criar empresas filiais
  [ ] Instalar localizações fiscais por país
  [ ] Configurar moedas e taxas de câmbio
  [ ] Configurar regras interempresas
  [ ] Configurar Stripe Connect para cada país

FASE 3: OPERAÇÕES (Semanas 9-12)
  [ ] Configurar inventário multiarmazém
  [ ] Configurar transportadoras internacionais
  [ ] Instalar módulo de custos landed
  [ ] Configurar impostos por país
  [ ] Configurar integração Stripe Tax
  [ ] Implementar multilíngue no CRM e Vendas

FASE 4: FINANÇAS (Semanas 13-16)
  [ ] Configurar contas bancárias por empresa
  [ ] Configurar conciliação Stripe automatizada
  [ ] Implementar faturamento interempresas
  [ ] Configurar contas de consolidação
  [ ] Configurar relatórios multimoeda
  [ ] Treinar equipe financeira em fluxos internacionais

FASE 5: ESCALAR (Semanas 17-20)
  [ ] Habilitar e-commerce (multilíngue, multimoeda)
  [ ] Configurar faturamento de assinaturas
  [ ] Configurar compras e aquisições automatizadas
  [ ] Implementar RH e folha de pagamento por país
  [ ] Criar relatórios e dashboards personalizados
  [ ] Integrar com logística terceirizada (3PL)
```

### Recomendações de módulos por região

| Região | Módulos essenciais do Odoo | Localização fiscal Package |
|--------|----------------------|---------------------|
| **Estados Unidos** | Vendas, Contabilidade, CRM, Inventário, Stripe | Contabilidade US |
| **Brasil** | Vendas, Contabilidade, CRM, Inventário, Fiscal | Brasilian Localização fiscal (NFe, NFSe, SPED) |
| **México** | Vendas, Contabilidade, CRM, Inventário, CFDI | Mexican Localização fiscal (CFDI 4.0) |
| **Colômbia** | Vendas, Contabilidade, CRM, Inventário, DIAN | Colômbian Localização fiscal |
| **Argentina** | Vendas, Contabilidade, CRM, Inventário, SIFEN | Argentine Localização fiscal |
| **Chile** | Vendas, Contabilidade, CRM, Inventário, SII | Chilean Localização fiscal |
| **União Europeia** | Vendas, Contabilidade, CRM, Inventário, VAT | Relatório VAT UE + country packages |

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

## 10. Personalização do Odoo para necessidades internacionais

### Personalizações-chave

```
PERSONALIZAÇÕES COMUNS DO ODOO PARA NEGÓCIOS INTERNACIONAIS:

1. CAMPOS PERSONALIZADOS
   - ID fiscal por país (RFC, CNPJ, NIT, RUT, CUIT)
   - Códigos SH (Sistema Harmonizado) para produtos
   - País de origem para inventário
   - Incoterms em pedidos de venda e compra

2. FLUXOS DE TRABALHO PERSONALIZADOS
   - Geração de documentação de exportação (fatura comercial, lista de embalagem)
   - Fluxos de aprovação por país
   - Aprovação multinível para transferências interempresas
   - Localização fiscal-specific validation (Brasil NFe, México CFDI)

3. RELATÓRIOS PERSONALIZADOS
   - Documentação de exportação (certificado de origem, conhecimento de embarque)
   - Relatórios fiscais por país
   - Demonstrações financeiras consolidadas do grupo
   - Análise de vendas e margens multimoeda

4. AUTOMAÇÕES
   - Gerar automaticamente documentos de exportação na entrega
   - Enviar faturas automaticamente por email por país
   - Atualizar taxas de câmbio automaticamente diariamente
   - Conciliar pagamentos Stripe automaticamente
   - Criar faturas interempresas automaticamente
```

### Personalização low-code no Odoo

```python
# Odoo customization for international business

from odoo import api, fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    # International tax IDs
    l10n_mx_rfc = fields.Char('RFC (México)')
    l10n_br_cnpj = fields.Char('CNPJ (Brasil)')
    l10n_co_nit = fields.Char('NIT (Colômbia)')
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

    # Regiãoal classifications
    l10n_br_ncm = fields.Char('NCM (Brasil)')
    l10n_mx_taric = fields.Char('TARIC (México)')
    l10n_co_arancel = fields.Char('Arancel (Colômbia)')


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

## Conclusão

**O Odoo é o ERP mais prático e acessível para negócios internacionais em 2026.** Suas capacidades nativas multiempresa, multimoeda e multilíngue o tornam uma plataforma ideal para empresas que operam além-fronteiras — seja uma empresa americana expandindo para a América Latina, um negócio europeu entrando em novos mercados, ou uma empresa global gerenciando filiais em todo o mundo.

Os princípios-chave para o sucesso internacional com Odoo:

- **Comece com a localização fiscal** — instale pacotes contábeis específicos por país antes de qualquer outra configuração
- **Configure multiempresa primeiro** — configure sua hierarquia empresarial antes de inserir transações
- **Conecte Stripe por país** — use Stripe Connect para que cada filial processe pagamentos localmente
- **Automatize interempresas** — use as regras interempresas do Odoo para eliminar a conciliação manual
- **Treine localmente** — cada filial deve ter o Odoo configurado em seu idioma e moeda

**O Odoo oferece capacidades ERP empresariais a uma fração do custo dos sistemas legados.** Combinado com Stripe para pagamentos e as localizações fiscais adequadas, torna-se uma plataforma completa de gestão empresarial internacional.

Na **Sotomayor Consulting International**, ajudamos empresas a implementar Odoo para operações internacionais: desde configuração multiempresa e localização fiscal até integração Stripe e desenvolvimento de módulos personalizados. Entre em contato para uma consulta personalizada.
