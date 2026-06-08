---
title: "Como Cobrar Clientes em Diferentes Países: Guia 2026"
description: "Como cobrar clientes em diferentes países"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Mapa global com múltiplas moedas e métodos de pagamento: USD, EUR, BRL, MXN, Pix, OXXO, iDEAL, com Stripe como centro de processamento e conversão automática"
---

**Cobrar clientes em diferentes países** é um dos maiores desafios para empreendedores que vendem globalmente. Cada país tem sua moeda, seus métodos de pagamento preferidos, suas regulamentações fiscais e seu poder aquisitivo.

Neste guia, explicamos **como cobrar clientes em diferentes países** em 2026: desde a configuração multimoeda no Stripe até métodos de pagamento locais, impostos internacionais e conversão de divisas.

## 1. Por Que Cobrar na Moeda Local é Importante

### O Impacto de Mostrar Preços Locais

| Estratégia | Taxa de Conversão | Abandono de Carrinho |
|-----------|-------------------|---------------------|
| Preço apenas em USD | 2-3% | 70-80% |
| Preço na moeda local | 5-10% | 40-50% |
| Preço local + método de pagamento local | 10-20% | 20-30% |

**Dado-chave:** Mostrar o preço na moeda local do cliente pode duplicar ou triplicar suas vendas.

### Por Que os Clientes Preferem Pagar em sua Moeda

```
RAZÕES:
✅ Sabem exatamente quanto estão pagando
✅ Evitam taxas ocultas de conversão do banco
✅ Confiança: um preço na moeda deles parece "local"
✅ Orçamento: podem comparar com alternativas locais
✅ Métodos de pagamento locais: Pix, OXXO, iDEAL só funcionam
   quando o checkout está configurado para aquele país

Stripe gerencia tudo isso automaticamente:
→ Detecta o país do cliente por IP
→ Mostra o preço na moeda dele (se configurar preços locais)
→ Mostra métodos de pagamento locais
→ Traduz o checkout para o idioma local
```

```javascript
// Stripe: Preços locais automáticos

// Criar preço em USD com opções locais
const price = await stripe.prices.create({
  currency: 'usd',
  unit_amount: 9900, // $99 USD base
  product: '{{PRODUCT_ID}}',
  recurring: { interval: 'month' },
  currency_options: {
    eur: { unit_amount: 9900 },    // €99 para Europa
    mxn: { unit_amount: 180000 },  // $1.800 MXN para México
    brl: { unit_amount: 35000 },   // R$350 para Brasil
    gbp: { unit_amount: 8500 },    // £85 para Reino Unido
    cop: { unit_amount: 180000 },  // $180.000 COP para Colômbia
    ars: { unit_amount: 1800000 }, // $18.000 ARS para Argentina
  },
});

// Stripe automaticamente cobra na moeda local do cliente
```

## 2. Configuração Multimoeda no Stripe

### Como Funciona

| Componente | O que Faz | Como Configurar |
|-----------|----------|----------------|
| **Stripe Payments** | Aceita +135 moedas | Ativado por padrão |
| **Stripe Price API** | Define preços por moeda | Criar price com currency_options |
| **Stripe Checkout** | Mostra preço local + métodos | Locale: auto |
| **Stripe Customer** | Armazena moeda preferida | customer.preferred_locales |
| **Stripe Invoicing** | Faturas em múltiplas moedas | Criar invoice com currency |
| **Stripe Tax** | Calcula impostos locais | automatic_tax: true |

### Passo a Passo: Configurar Preços Globais

```
1. Criar produto no Stripe Dashboard
2. Criar preço base em USD
3. Adicionar currency_options para cada país
4. Configurar Stripe Tax para impostos locais
5. Configurar Checkout com locale: 'auto'
6. Stripe faz o resto automaticamente

EXEMPLO PRÁTICO:

Produto: Assinatura Premium
Preço base: $99 USD

País     | Moeda  | Preço Local | Fator
─────────┼────────┼─────────────┼───────
EUA      | USD    | $99,00      | 1,00x
Europa   | EUR    | €99,00      | 1,00x (+VAT)
UK       | GBP    | £85,00      | 0,86x
México   | MXN    | $1.800,00   | 0,70x
Brasil   | BRL    | R$350,00    | 0,57x
Colômbia | COP    | $180.000    | 0,55x
Chile    | CLP    | $55.000     | 0,60x
Peru     | PEN    | S/280       | 0,65x
```

```javascript
// Stripe: Cliente vê o preço na moeda dele automaticamente

const session = await stripe.checkout.sessions.create({
  line_items: [{
    price: '{{PRICE_ID_WITH_OPTIONS}}',
    quantity: 1,
  }],
  mode: 'subscription',
  locale: 'auto',                     // Stripe traduz para o idioma do cliente
  automatic_tax: { enabled: true },   // Stripe calcula impostos locais
  customer_creation: 'always',        // Salva cliente para futuras faturas
});
```

## 3. Métodos de Pagamento por País

### O que Cada País Prefere

| País | Método #1 | Método #2 | Método #3 | Stripe Aceita |
|------|----------|-----------|-----------|--------------|
| **EUA** | Visa/Mastercard | ACH | Link | ✅ Todos |
| **Reino Unido** | Visa/Mastercard | Bacs Direct Debit | — | ✅ Todos |
| **Europa** | iDEAL (NL) | Cartão | SEPA | ✅ Todos |
| **Brasil** | Pix | Cartão | Boleto | ✅ Todos |
| **México** | Cartão | OXXO | SPEI | ✅ Todos |
| **Colômbia** | Cartão | PSE | Efecty | ✅ PSE e cartões |
| **Argentina** | Cartão | Rapipago | Pago Fácil | ✅ Cartões |
| **Chile** | Webpay | Cartão | Khipu | ✅ Webpay e cartões |
| **Peru** | Cartão | PagoEfectivo | — | ✅ Cartões |
| **Austrália** | Cartão | BPay | — | ✅ Todos |

### Como Configurar Métodos de Pagamento Locais

```
NO STRIPE DASHBOARD:
1. Settings → Payment methods
2. Ativar os métodos necessários:
   - Pix (Brasil)
   - OXXO (México)
   - SPEI (México)
   - iDEAL (Países Baixos)
   - Bancontact (Bélgica)
   - PSE (Colômbia)
   - Webpay (Chile)
   - SEPA (Europa)
3. Stripe os mostra automaticamente segundo o país do cliente

Stripe ativa todos os métodos de pagamento relevantes por país.
Você não precisa fazer mais nada.
```

```javascript
// Stripe: Métodos de pagamento dinâmicos por país

// Stripe detecta o país do cliente e mostra os métodos adequados
const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  payment_method_types: [
    'card',       // Global
    'link',       // Global
    'pix',        // Brasil
    'oxxo',       // México
    'spei',       // México
    'ideal',      // Países Baixos
    'bancontact', // Bélgica
    'sepa_debit', // Europa
    'p24',        // Polônia
    'eps',        // Áustria
    'sofort',     // Alemanha/Áustria
    'boleto',     // Brasil
  ],
  locale: 'auto',
});
```

## 4. Faturamento Internacional com Stripe Invoicing

### Faturas em Múltiplas Moedas

| Característica | Stripe Invoicing |
|---------------|-----------------|
| Moedas suportadas | +50 moedas |
| Conversão automática | ✅ (para USD à sua taxa) |
| Impostos locais | ✅ Stripe Tax integrado |
| Envio automático | ✅ Email ou link |
| Pagamentos recorrentes | ✅ Subscription invoices |
| Memo personalizado | ✅ Notas, termos, números de fatura |
| Registros de pagamento | ✅ Automáticos |

### Exemplo: Faturar Cliente Europeu

```javascript
// Criar fatura em EUR para cliente europeu
const invoice = await stripe.invoices.create({
  customer: '{{EU_CUSTOMER_ID}}',
  currency: 'eur',
  collection_method: 'charge_automatically',
  automatic_tax: { enabled: true },        // VAT automático
  pending_invoice_items: [{
    price: '{{PRICE_ID_EUR}}',              // Preço em EUR
    quantity: 1,
  }],
  days_until_due: 30,
  custom_fields: [{
    name: 'VAT ID',
    value: '{{CUSTOMER_VAT_ID}}',
  }],
});

// Stripe envia a fatura ao cliente
// Stripe cobra automaticamente
// Stripe calcula e remete o VAT
```

### Faturamento para Clientes sem Stripe

```

```

## 5. Assinaturas Globais com Stripe Billing

### Preços Diferentes por País para SaaS

| País | Preço Mensal | Ajuste vs USD | Motivo |
|------|-------------|--------------|--------|
| **EUA** | $99 USD | 1,00x | Mercado principal |
| **Europa** | €99 EUR | 1,10x (VAT incl.) | VAT entre 17-27% |
| **Brasil** | R$350 | 0,57x | Poder aquisitivo + Pix |
| **México** | $1.800 MXN | 0,70x | Mercado estratégico |
| **Colômbia** | $180.000 COP | 0,55x | Poder aquisitivo |
| **Índia** | ₹4.000 | 0,50x | Mercado massivo |

### Como Implementar Preços por País

```javascript
// Stripe Billing: Um produto, múltiplos preços por país

// Criar o produto
const product = await stripe.products.create({
  name: 'Premium Plan',
});

// Criar preço em USD (base)
const usdPrice = await stripe.prices.create({
  product: product.id,
  currency: 'usd',
  unit_amount: 9900,
  recurring: { interval: 'month' },
});

// Criar preços locais para cada país
const localPrices = await stripe.prices.create({
  product: product.id,
  currency: 'usd', // A moeda de faturamento continua USD
  unit_amount: 9900,
  recurring: { interval: 'month' },
  currency_options: {
    brl: { unit_amount: 35000 },     // R$350
    mxn: { unit_amount: 180000 },    // $1.800 MXN
    eur: { unit_amount: 9900 },      // €99
    gbp: { unit_amount: 8500 },      // £85
    cop: { unit_amount: 180000 },    // $180.000 COP
  },
});

// Stripe automaticamente atribui o preço correto
// segundo a moeda/localização do cliente
```

## 6. Conversão de Moedas e FX

### Como o Stripe Gerencia a Conversão

| Cenário | Stripe Faz | Taxa de Câmbio | Você Recebe |
|---------|-----------|---------------|-------------|
| **Cliente paga em USD** | Nada (já está em USD) | N/A | USD exato |
| **Cliente paga em EUR** | Converte EUR → USD | Taxa Stripe (0,5-1% markup) | USD convertido |
| **Cliente paga em BRL** | Converte BRL → USD | Taxa Stripe | USD convertido |
| **Preço em moeda local** | Cobra em moeda local, converte para USD | Taxa Stripe | USD convertido |

### Otimização de FX

```
ESTRATÉGIA PARA MINIMIZAR PERDAS POR FX:

1. FATURAR EM USD SEMPRE QUE POSSÍVEL
   → Sem conversão = sem perda
   → Clientes nos EUA esperam USD
   → Clientes internacionais aceitam USD

2. USAR CURRENCY_OPTIONS NO STRIPE
   → Cliente vê o preço na moeda dele
   → Stripe cobra na moeda local
   → Stripe converte para USD
   → O markup do Stripe é menor que o do banco do cliente

3. WISE + STRIPE PARA VALORES GRANDES
   → Stripe: pagamentos recorrentes (cartão)
   → Wise: pagamentos únicos grandes (wire)
   → Wise tem melhor taxa (0,4-0,8% vs 1-3% bancos)

4. ACUMULAR SALDO E CONVERTER QUANDO O FX ESTIVER FAVORÁVEL
   → Stripe retém USD automaticamente
   → Acumula saldo até a taxa de câmbio melhorar
   → Wise retira e converte no momento ótimo
```

```javascript
// Stripe: Controle o timing da conversão

// Stripe retém o saldo na moeda original até você decidir
const balance = await stripe.balance.retrieve();

// Cada moeda tem seu próprio disponível
balance.available.forEach(currency => {
  console.log(`${currency.currency.toUpperCase()}: $${currency.amount / 100}`);
});

// Stripe converte automaticamente para USD ao sacar
// Ou você pode manter saldo em múltiplas moedas com Stripe Treasury
```

## 7. Impostos Internacionais por País

### Stripe Tax: Automação de Impostos Globais

| Região | Imposto | Taxa | Stripe Tax Calcula |
|--------|---------|------|-------------------|
| **EUA** | Sales Tax | 0-10% (por estado) | ✅ Sim (com registro) |
| **Europa** | VAT | 17-27% (por país) | ✅ Sim (com registro) |
| **Reino Unido** | VAT | 20% | ✅ Sim |
| **Austrália** | GST | 10% | ✅ Sim |
| **Brasil** | ICMS/ISS | 7-18% | ⚠️ Parcial (integração) |
| **México** | IVA | 16% | ⚠️ Parcial |
| **Colômbia** | IVA | 19% | ⚠️ Parcial |
| **Chile** | IVA | 19% | ⚠️ Parcial |

### Como Configurar Impostos Globais

```
PASSO 1: REGISTRAR-SE EM CADA PAÍS
→ Stripe Tax NÃO registra sua empresa automaticamente
→ Deve registrar VAT na UE, GST no UK, Sales Tax nos EUA
→ Stripe Tax calcula e cobra o imposto correto

PASSO 2: ATIVAR STRIPE TAX
→ Settings → Tax → Enable
→ Configurar tax behavior (exclusive/inclusive)
→ Stripe detecta a localização do cliente

PASSO 3: STRIPE REPORTA
→ Stripe gera relatórios para cada jurisdição
→ Seu CPA usa esses relatórios para declarar
→ Stripe NÃO remete os impostos por você

IMPORTANTE PARA LATAM:
→ Stripe Tax funciona melhor para EUA, UE, UK, Austrália
→ Para LATAM (Brasil, México, Colômbia), consulte seu CPA local
→ Stripe pode calcular mas não necessariamente remeter
```

```javascript
// Stripe Tax: Calcule o imposto para cada país

const session = await stripe.checkout.sessions.create({
  line_items: [{ price: '{{PRICE_ID}}', quantity: 1 }],
  automatic_tax: { enabled: true },
  customer_details: {
    address: {
      country: 'DE', // Cliente na Alemanha
    },
  },
});

// Stripe calcula: $99 + 19% VAT (Alemanha) = €117,81
console.log(`Total: ${session.amount_total / 100} ${session.currency}`);
console.log(`Imposto: ${session.total_details.amount_tax / 100}`);
```

## 8. Stripe Connect para Pagar Terceiros

### Quando Você Precisa Pagar Sellers, Contractors ou Parceiros

| Cenário | Stripe Connect | Fluxo |
|---------|---------------|-------|
| **Marketplace** | Connect + Platform fees | Cobra comprador, paga seller |
| **Plataforma SaaS** | Connect + Destination charges | Cobra cliente, paga contractor |
| **Agência** | Connect + Transfers | Cobra cliente, paga freelancer |
| **E-commerce** | Connect + Split payments | Cobra comprador, divide entre sellers |

### Pagar Pessoas em Diferentes Países

```javascript
// Stripe Connect: Pague contractors em diferentes países

// Cada contractor tem sua conta conectada em seu país
const contractorBR = await stripe.accounts.create({
  type: 'express',
  country: 'BR', // Contractor no Brasil
  business_type: 'individual',
});

const contractorCO = await stripe.accounts.create({
  type: 'express',
  country: 'CO', // Contractor na Colômbia
  business_type: 'individual',
});

const contractorMX = await stripe.accounts.create({
  type: 'express',
  country: 'MX', // Contractor no México
  business_type: 'individual',
});

// Pague todos a partir de uma plataforma
await stripe.transfers.create({
  amount: 150000, // $1.500
  currency: 'usd',
  destination: contractorBR.id,
});

// Stripe gerencia: conversão de moeda, compliance local, relatórios 1099/1042-S
```

## 9. Estratégias de Preços por País

### Como Definir Preços Locais

```
FATORES PARA AJUSTAR PREÇOS POR PAÍS:

1. PODER AQUISITIVO (PPP)
   → GDP per capita ajustado por PPP
   → Exemplo: Brasil PPP = 0,57x vs EUA
   → Preço Brasil = $99 x 0,57 = R$317

2. IMPOSTOS LOCAIS
   → VAT na Europa (17-27%)
   → Sales Tax nos EUA (0-10%)
   → IVA na LATAM (16-19%)
   → Stripe Tax calcula automaticamente

3. CONCORRÊNCIA LOCAL
   → Há alternativas locais mais baratas?
   → Quanto cobram os concorrentes?
   → Ajuste para ser competitivo

4. CUSTO DE AQUISIÇÃO DE CLIENTE (CAC)
   → CAC nos EUA vs LATAM vs Europa
   → Ajuste preços conforme custo de vender em cada país

5. MÉTODO DE PAGAMENTO
   → Pix no Brasil = 0% chargeback, +35% conversão
   → Cartão na LATAM = 2-5% chargeback
   → Ofereça desconto por Pix/SPEI (2-5%)
```

### Exemplo de Matriz de Preços

```
SAAS PLAN: $99/mês base

PAÍS     | MOEDA  | PREÇO LOCAL | FATOR | TAX   | PREÇO FINAL
─────────┼────────┼─────────────┼───────┼───────┼─────────────
US       | USD    | $99,00      | 1,00x | 0%    | $99,00
DE       | EUR    | €99,00      | 1,00x | 19%   | €117,81
UK       | GBP    | £85,00      | 0,86x | 20%   | £102,00
BR       | BRL    | R$317,00    | 0,57x | 0%*   | R$317,00
MX       | MXN    | $1.800,00   | 0,70x | 16%   | $2.088,00
CO       | COP    | $180.000    | 0,55x | 19%   | $214.200
CL       | CLP    | $55.000     | 0,60x | 19%   | $65.450

*Serviços digitais de empresa estrangeira para consumidor
brasileiro podem ter IOF ou outros impostos
```

## 10. Erros Comuns ao Cobrar Globalmente

### O que NÃO Fazer

| Erro | Consequência | Solução |
|------|-------------|---------|
| **Preço único em USD** | Baixas conversões (70% abandono) | Preços locais por país |
| **Ignorar métodos de pagamento locais** | Perde 35-50% do mercado | Pix, OXXO, iDEAL, PSE |
| **Não configurar Stripe Tax** | Multas por VAT/GST não cobrado | Stripe Tax automático |
| **Má conversão FX** | Perde 2-5% em cada transação | Stripe + Wise |
| **Sem gerenciamento de dunning** | Perde 30-50% das assinaturas | Stripe Smart Retries |
| **Misturar moedas em faturas** | Confusão, atrasos em pagamentos | Uma moeda por fatura |
| **Ignorar chargebacks** | Perdas, conta em risco | Stripe Radar + 3D Secure |
| **Sem termos de serviço por país** | Risco legal | Termos multi-idioma |

## 11. Stack Tecnológico Recomendado

### Seu Stack para Cobrar Globalmente

```
┌──────────────────────────────────────┐
│         STRIPE PAYMENTS               │
│  Aceita +135 moedas, +40 métodos      │
│  Pix, OXXO, iDEAL, PSE, SEPA, ACH    │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE BILLING                │
│  Assinaturas globais, dunning         │
│  Preços por país, Smart Retries       │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         STRIPE TAX                    │
│  VAT, GST, Sales Tax automáticos      │
│  Relatórios por jurisdição            │
└──────────────┬───────────────────────┘
               │
┌──────────────┴───────────────────────┐
│         WISE / MERCURY                │
│  Conversão FX ótima                   │
│  Saque para banco local               │
└──────────────────────────────────────┘

TUDO INTEGRADO:
Stripe → Wise → Seu banco local
Sem mover um dedo
```

## 12. Checklist para Cobrar Globalmente

### INFRAESTRUTURA DE PAGAMENTOS:
- [ ] Stripe Payments ativado (multimoeda)
- [ ] Métodos de pagamento locais ativados (Pix, OXXO, iDEAL, PSE, SEPA)
- [ ] Preços com currency_options por país
- [ ] Stripe Tax configurado
- [ ] Stripe Radar ativo

### FATURAMENTO:
- [ ] Stripe Invoicing configurado
- [ ] Modelos de fatura por moeda
- [ ] Stripe Billing para assinaturas
- [ ] Dunning automático configurado
- [ ] Email de fatura no idioma do cliente

### FX E CONVERSÃO:
- [ ] Wise Business configurado
- [ ] Estratégia de conversão definida
- [ ] Stripe Treasury (se aplicável)
- [ ] Política de preços por país documentada

### COMPLIANCE:
- [ ] Stripe Tax ativo para impostos
- [ ] Registros VAT/GST nos países onde vende
- [ ] Termos de serviço multi-idioma
- [ ] Política de privacidade GDPR
- [ ] CPA internacional revisando estrutura

## Conclusão

**Cobrar clientes em diferentes países** em 2026 é mais simples do que nunca graças ao Stripe. Com configuração multimoeda, métodos de pagamento locais, Stripe Tax para impostos e Wise para conversão FX, você pode oferecer uma experiência de pagamento local em cada país sem ter presença física lá.

A chave está em três pilares:
1. **Preços locais**: cada país vê o preço na sua moeda
2. **Métodos locais**: Pix, OXXO, iDEAL, PSE segundo o país
3. **Impostos automáticos**: Stripe Tax calcula VAT, GST, sales tax

Você não precisa de um banco em cada país nem de uma empresa em cada mercado. Com Stripe, seu checkout se adapta automaticamente a cada cliente, não importa onde ele esteja.

Na **Sotomayor Consulting International**, ajudamos você a configurar sua infraestrutura de cobranças globais: desde Stripe multimoeda e métodos de pagamento locais até estratégia de preços por país e compliance fiscal internacional. Contate-nos para uma consultoria personalizada.
