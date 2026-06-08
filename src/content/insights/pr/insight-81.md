---
title: "Como Investir na Flórida Sendo Estrangeiro: Guia 2026"
description: "Como investir na Flórida sendo estrangeiro"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Mapa da Flórida com ícones de propriedades, LLC, dólares, avião e bandeiras internacionais ao redor"
---

**Investir na Flórida sendo estrangeiro** é uma das estratégias mais populares de diversificação patrimonial internacional. A Flórida oferece vantagens únicas: sem imposto estadual sobre a renda, leis favoráveis ao investidor estrangeiro, um mercado imobiliário sólido e proteção de ativos com tenancy by entirety.

Neste guia, explicamos **como investir na Flórida sendo estrangeiro** em 2026: estruturas legais, financiamento, impostos, administração de propriedades, proteção patrimonial e o papel do Stripe na gestão de aluguéis.

## 1. Por Que Investir na Flórida?

### Vantagens para Investidores Estrangeiros

| Vantagem | Descrição |
|---------|-----------|
| **Sem imposto estadual sobre a renda** | Não paga income tax estadual, só federal |
| **Proteção de ativos** | Tenancy by entirety protege casais |
| **Mercado sólido** | Demanda constante, valorização histórica |
| **Sem restrições a estrangeiros** | Pode comprar como pessoa ou LLC |
| **Homestead exemption** | Protege residência principal de credores |
| **Leis favoráveis ao proprietário** | Despejo mais rápido que NY ou Califórnia |
| **Clima e qualidade de vida** | Atrai inquilinos e compradores o ano todo |
| **Conexões internacionais** | 20+ aeroportos internacionais, voos diretos |

### Cidades-Chave para Investimento

| Cidade | Preço Médio | Rentabilidade | Perfil |
|--------|------------|--------------|--------|
| **Miami** | $400-800K | 4-6% | Turismo, luxo, internacional |
| **Orlando** | $300-500K | 6-8% | Turismo, aluguel de férias |
| **Tampa** | $350-550K | 5-7% | Crescimento, empregos tech |
| **Jacksonville** | $250-400K | 6-9% | Maior rentabilidade, menor preço |
| **Fort Lauderdale** | $350-600K | 4-6% | Praias, iates, estilo de vida |
| **Naples** | $600K-1.5M | 3-5% | Luxo, aposentadoria, golfe |

> Em 2026, a Flórida continua sendo o estado #1 para investidores estrangeiros nos EUA, com mais de 20% das compras internacionais de imóveis.

## 2. Estruturas Legais para Investir na Flórida

### Opções de Titulação

| Estrutura | Uso Recomendado | Proteção | Impostos |
|-----------|----------------|---------|---------|
| **Nome pessoal** | Compra direta como estrangeiro | Sem proteção | Declara como não residente |
| **LLC da Flórida** | Propriedades de aluguel | Alta (proteção de ativos) | Pass-through |
| **LLC de Wyoming/NM** | Anonimato + proteção | Alta | Pass-through |
| **Trust revogável** | Planejamento sucessório | Média | Como pessoa |
| **Land trust** | Anonimato total | Alta | Como pessoa |
| **Corporação (C-Corp)** | Grandes volumes | Alta | Dupla tributação |

### LLC para Investidores Estrangeiros

```javascript
// Stripe: Cobrar aluguéis com LLC da Flórida
// Stripe exige EIN ou ITIN

const account = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: {
    name: 'Florida Properties LLC',
    structure: 'llc',
    tax_id: 'XX-XXXXXXX', // EIN do IRS
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

// Stripe para cobrança de aluguéis mensais
const rentPayment = await stripe.paymentIntents.create({
  amount: 300000, // $3.000
  currency: 'usd',
  payment_method_types: ['card'],
  description: 'Aluguel mensal - Apt 3B',
  metadata: {
    property_id: 'MIA-APT-3B',
    tenant_id: 'TEN-001',
    month: '2026-06',
  },
});
```

### LLC Flórida vs. LLC Delaware

| Aspecto | LLC Flórida | LLC Delaware |
|---------|------------|-------------|
| **Custo anual** | $138.75 (relatório anual) | $300 (franchise tax) + agente |
| **Anonimato** | Não (membros públicos) | Parcial |
| **Proteção** | Boa | Boa |
| **Sistema judicial** | Especializado em imóveis | Corporativo, não imobiliário |
| **Impostos** | Sem state income tax | Sem state income tax (LLCs pagam) |
| **Recomendação** | ✅ Melhor para propriedades na FL | Para holdings ou investimento VC |

### LLC por Propriedade vs. LLC Única

```
Opção 1: LLC para cada propriedade
├── LLC #1: Casa em Miami Beach
├── LLC #2: Condo em Orlando
├── LLC #3: Townhouse em Tampa
├── Custo: 3 LLCs x $139 = $417/ano
└── Vantagem: Isola o risco de cada propriedade

Opção 2: Uma LLC para todas
├── Florida Properties LLC
│   ├── Casa em Miami Beach
│   ├── Condo em Orlando
│   └── Townhouse em Tampa
├── Custo: 1 LLC = $139/ano
└── Risco: Uma ação em uma propriedade expõe todas

Recomendação: LLC por propriedade se tem 3+ propriedades
ou se alguma tem alto risco (piscina, aluguel de férias).
```

## 3. Financiamento para Estrangeiros

### Opções de Hipoteca

| Tipo de Empréstimo | Estrangeiros | Requisitos | Taxa Aprox. | Entrada |
|-------------------|------------|-----------|-------------|--------|
| **Convencional (FNMA)** | ❌ Não | Residência + crédito US | — | — |
| **Portfolio loan** | ✅ Sim | 30-50% entrada, 6-12 meses liquidez | 7-9% | 30-50% |
| **DSCR loan** | ✅ Sim | Baseado em aluguéis, não renda pessoal | 7.5-9.5% | 25-35% |
| **Hard money** | ✅ Sim | Baseado no valor da propriedade | 10-14% | 20-30% |
| **Privado / Family office** | ✅ Sim | Negociação direta | 6-10% | Variável |

### DSCR Loan para Investidores Estrangeiros

```
DSCR (Debt Service Coverage Ratio) = Receita de aluguel / Pagamento da hipoteca

DSCR > 1.0 = A propriedade se paga sozinha
DSCR > 1.2 = Aprovação fácil
DSCR < 1.0 = Precisa aportar mais capital

Vantagens para estrangeiros:
- Não precisa de SSN
- Não precisa de ITIN
- Não precisa de renda pessoal
- Só conta o potencial de aluguel
- Fecha em LLC (não em nome pessoal)

Requisitos típicos:
- 30-40% de entrada
- 6-12 meses de reservas líquidas
- Propriedade avaliada
- Conta bancária nos EUA
```

### EIN e ITIN

```
EIN (Employer Identification Number):
- Necessário para abrir conta bancária empresarial
- Necessário para Stripe
- Necessário para declarar impostos
- Gratuito, solicita-se ao IRS com SS-4
- Agente registrado pode solicitar se não tem SSN

ITIN (Individual Taxpayer Identification Number):
- Necessário se declara impostos como pessoa
- Necessário para hipotecas pessoais
- Processo: Formulário W-7 ao IRS
- Tempo: 7-11 semanas
```

## 4. Impostos para Investidores Estrangeiros na Flórida

### Impostos Federais

| Imposto | Alíquota | Aplica a |
|---------|---------|---------|
| **Aluguéis (receita de aluguel)** | Alíquota marginal (10-37%) | Estrangeiros não residentes |
| **Ganho de capital (hold < 1 ano)** | Alíquota marginal (até 37%) | Short-term |
| **Ganho de capital (hold > 1 ano)** | 0-20% + 3.8% (NIIT) | Long-term |
| **FIRPTA (venda)** | 15% de retenção sobre preço de venda | Estrangeiros não residentes |
| **Juros** | 30% (ou treaty rate) | Contas bancárias |

### FIRPTA (Foreign Investment in Real Property Tax Act)

```javascript
// FIRPTA: Ao vender, o comprador retém 15%
// do preço de venda e envia ao IRS

/*
Exemplo:
Preço de venda: $500.000
Retenção FIRPTA: $75.000 (15%)

Pode solicitar isenção (withholding certificate)
se:
- A propriedade é vendida por menos de $300.000
- O comprador usará como residência
- Não há ganho de capital real

Recomendação:
- Solicite ITIN antes de vender
- Contrate um CPA especializado em FIRPTA
- O processo de reembolso pode levar 6-12 meses
*/
```

### Impostos na Flórida

| Imposto | Aplica? | Nota |
|---------|---------|------|
| **State income tax** | ❌ Não | Flórida não tem |
| **Property tax** | ✅ Sim | ~0.8-1.2% do valor anual |
| **Sales tax** | ✅ Sim | 6-7.5% em materiais de construção |
| **Estate tax** | ❌ Não federal para estrangeiros com < $60K nos EUA | Estrutura com LLC protege |
| **Intangible tax** | ❌ Não | Eliminado em 2007 |

### 1031 Exchange

```
1031 Exchange: Diferir ganho de capital ao vender e reinvestir.

Requisitos:
- Vender uma propriedade de investimento
- Comprar outra propriedade de investimento de igual ou maior valor
- 45 dias para identificar a nova propriedade
- 180 dias para fechar
- Usar um qualified intermediary

Aplica a estrangeiros: Sim, mas FIRPTA continua aplicando.

Estratégia:
- Vender propriedade na Flórida
- Comprar propriedade de maior valor
- Diferir o imposto de ganho de capital
- Repetir até falecer (step-up in basis)
```

## 5. Administração de Propriedades

### Property Manager vs. Autogestão

| Aspecto | Property Manager | Autogestão |
|---------|----------------|-----------|
| **Custo** | 8-12% do aluguel mensal | 0% |
| **Tempo** | 0% do seu tempo | Dedicação semanal |
| **Presença local** | Não precisa estar na Flórida | Precisa presença |
| **Manutenção** | Coordenam reparos | Você coordena |
| **Inquilinos** | Buscam, verificam, contratos | Você faz tudo |
| **Legal** | Conhecem leis locais | Risco de descumprir |
| **Stripe** | Usam o Stripe deles ou o seu | Você gerencia Stripe |

### Stripe para Cobrança de Aluguéis

```javascript
// Stripe: Ideal para cobrar aluguéis mensais
// Configurar assinaturas recorrentes

// Criar assinatura de aluguel mensal
const subscription = await stripe.subscriptions.create({
  customer: 'cus_tenant_id',
  items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Aluguel Mensal - Apt 3B' },
      recurring: { interval: 'month' },
      unit_amount: 300000, // $3.000
    },
    quantity: 1,
  }],
  payment_behavior: 'default_incomplete',
  metadata: {
    property_id: 'MIA-APT-3B',
    tenant_name: 'João Silva',
  },
});

// Stripe envia o recibo automaticamente
// Stripe gerencia faturas, retrying e dunning
// Stripe Tax calcula impostos se aplicável
```

### Seguros para Propriedades na Flórida

| Seguro | Descrição | Custo Aprox. |
|--------|-----------|-------------|
| **Homeowners / Landlord** | Cobre estrutura + responsabilidade | $1.500-4.000/ano |
| **Seguro contra furacões** | Dedutível separado (2-10% do valor) | Incluído ou extra |
| **Seguro de inundação** | Obrigatório em zonas de risco (NFIP) | $700-2.000/ano |
| **Seguro de responsabilidade** | Protege de ações de inquilinos | Incluído ou $500 extra |
| **Seguro de perda de aluguel** | Se a propriedade não puder ser habitada | $200-500/ano |
| **Umbrella policy** | Cobertura adicional sobre todos | $300-500/ano por $1M |

> O seguro contra furacões na Flórida aumentou 40%+ nos últimos 2 anos. Faça orçamento de $2.000-5.000/ano para propriedades perto da costa.

## 6. Proteção de Ativos na Flórida

### Tenancy by Entirety

```
Tenancy by Entirety: Proteção disponível apenas para casais.

Como funciona:
- Ambos os cônjuges são proprietários 100%
- Um credor de um cônjuge não pode penhorar a propriedade
- Apenas uma dívida conjunta de ambos pode alcançá-la
- Automático se a propriedade está em nome de ambos casados

Requisitos:
- Devem ser legalmente casados
- A propriedade deve estar na Flórida
- Não se aplica a LLCs (só a título pessoal)
- Ao divorciar, converte-se em tenancy in common

Vantagem: É a proteção mais forte para casais nos EUA.
```

### LLC Flórida + Tenancy by Entirety

```
Estrutura recomendada para casais estrangeiros:

VOCÊ e SEU CÔNJUGE (casados)
  └── LLC da Flórida (ambos são membros)
       └── Propriedade

Tenancy by entirety não se aplica diretamente na LLC,
mas a LLC já protege:
- Ação pessoal: Não afeta a propriedade
- Ação na propriedade: Não afeta seus ativos pessoais

Além disso:
- Ambos controlam a LLC
- Proteção sucessória: Se um falecer, o outro continua
- Sem inventário na Flórida para a LLC
```

### Homestead Exemption

```
Homestead Exemption na Flórida:

Proteção de residência principal:
- Ilimitada em valor (sem teto na Flórida)
- Protege de credores (exceto hipoteca, impostos, HOA)
- Requer: ser residente da Flórida e usar como lar

Não se aplica a propriedades de investimento (só residência principal).

Para investidores estrangeiros:
- Se mudar para a Flórida, sua casa principal está protegida
- Suas propriedades de aluguel: precisam de LLC
```

## 7. Planejamento Sucessório para Propriedades na Flórida

### Inventário na Flórida para Estrangeiros

| Aspecto | Sem Plano | Com Plano |
|---------|----------|-----------|
| **Processo** | Inventário na Flórida (6-12 meses) | Sem inventário |
| **Custo** | 3-5% do valor da propriedade | $500-2.000 |
| **Tempo** | 6-18 meses | 1-2 meses |
| **Privacidade** | Público | Privado |
| **Estrangeiro** | Complexo se herdeiros moram fora | Simples |

### Estratégias de Sucessão

```
Opção 1: LLC (recomendada)
├── A LLC é proprietária do imóvel
├── Você é membro da LLC
├── Ao falecer, suas ações passam para herdeiros
├── Não há inventário da propriedade
└── Stripe: atualizar beneficial owner

Opção 2: Trust revogável
├── O trust é proprietário do imóvel
├── Você é trustee em vida
├── Ao falecer, o sucessor trustee administra
├── Evita inventário completamente
└── Stripe: a LLC dentro do trust

Opção 3: Land trust
├── Anonimato total
├── O land trust não é público
├── Beneficiário designado herda
└── Similar a trust mas específico para imóveis
```

## 8. Erros Comuns ao Investir na Flórida

| Erro | Consequência | Solução |
|------|-------------|---------|
| **Comprar em nome pessoal** | Sem proteção de ativos | Usar LLC |
| **Não orçar seguros** | Furacão sem cobertura = perda total | Seguro adequado desde o dia 1 |
| **Ignorar FIRPTA** | Retenção de 15% ao vender | Planejar com CPA |
| **Não ter EIN** | Não pode abrir conta bancária nem Stripe | Solicitar EIN (SS-4) |
| **Propriedade sem ver visita** | Comprar sem inspeção | Inspeção + video call |
| **Não considerar HOA** | Regras restritivas, taxas altas | Ler HOA antes de comprar |
| **Não planejar herança** | Inventário na Flórida para estrangeiros | LLC + trust |
| **Subestimar manutenção** | Custos maiores que em outros estados | Orçar 1-2% do valor/ano |
| **Não ter property manager** | Problemas com inquilinos a distância | Contratar PM local |

## 9. Passo a Passo para Investir na Flórida

### Passo 1: Planejamento

| Ação | Detalhe |
|------|---------|
| **Defina orçamento** | Preço + fechamento (3-5%) + reparos |
| **Escolha cidade** | Conforme rentabilidade, perfil, risco |
| **Escolha estrutura** | LLC Flórida (recomendada) |
| **Calcule impostos** | Property tax, income tax, FIRPTA |
| **Faça orçamento seguros** | Landlord + furacão + inundação |

### Passo 2: Compra

| Ação | Detalhe |
|------|---------|
| **Constitua LLC** | LLC Flórida (www.sunbiz.org) |
| **Obtenha EIN** | IRS Form SS-4 |
| **Abra conta bancária** | Mercury, Relay, Bank of America |
| **Busque propriedade** | MLS, Zillow, corretor local |
| **Financiamento** | DSCR loan ou cash |
| **Inspeção** | Geral + cupins + telhado |
| **Fechamento** | Title company + attorney |

### Passo 3: Operação

| Ação | Detalhe |
|------|---------|
| **Registre Stripe** | Com EIN da LLC |
| **Seguro** | Ativo desde o fechamento |
| **Property manager** | Contratar se não estiver na FL |
| **Cobre aluguéis** | Stripe recorrente |
| **Declare impostos** | CPA internacional (Form 1040-NR) |
| **Revise anualmente** | Seguros, impostos, estrutura |

## 10. Perguntas Frequentes

### Preciso de visto para comprar propriedades na Flórida?

Não. Qualquer estrangeiro pode comprar propriedades na Flórida sem visto. Só precisa de identificação (passaporte) para o fechamento.

### Posso abrir conta bancária na Flórida sem estar lá?

Sim, bancos como Mercury e Relay permitem abrir contas 100% online para LLCs dos EUA com EIN.

### Quanto custa manter uma LLC na Flórida?

O relatório anual custa $138.75. Mais agente registrado ($50-200/ano). Total: ~$200-350/ano.

### Posso usar Stripe para cobrar aluguéis se não moro nos EUA?

Sim. Stripe aceita LLCs dos EUA independentemente de onde o proprietário mora. Precisa de EIN e conta bancária nos EUA.

### Quanto é o property tax na Flórida?

Entre 0.8% e 1.2% do valor avaliado. Uma propriedade de $400K paga aproximadamente $3.200-4.800/ano.

### Posso comprar como pessoa e depois transferir para uma LLC?

Sim, mas pode ativar a cláusula due-on-sale da hipoteca. Melhor comprar diretamente com a LLC.

### O que acontece se não declarar impostos nos EUA?

O IRS pode penhorar a propriedade, impor multas e o inquilino pode denunciar. Stripe também reporta receitas ao IRS.

## 11. Checklist de Investimento na Flórida

- [ ] Defina orçamento e cidade-alvo
- [ ] Constitua LLC da Flórida
- [ ] Obtenha EIN do IRS (Form SS-4)
- [ ] Abra conta bancária empresarial
- [ ] Registre Stripe com EIN da LLC
- [ ] Busque propriedade com corretor local
- [ ] Solicite financiamento (DSCR) ou prepare cash
- [ ] Realize inspeção completa
- [ ] Contrate seguro: landlord + furacão + inundação
- [ ] Feche com title company
- [ ] Contrate property manager (se aplicável)
- [ ] Configure cobrança de aluguéis no Stripe
- [ ] Declare impostos anualmente (CPA internacional)
- [ ] Designe sucessor no Stripe
- [ ] Revise estrutura legal anualmente

## Conclusão

**Investir na Flórida sendo estrangeiro** é acessível, rentável e seguro se você seguir os passos corretos. A combinação de LLC da Flórida, EIN, conta bancária empresarial e Stripe permite operar completamente do seu país de origem com proteção de ativos e conformidade fiscal.

A Flórida continua sendo o destino #1 para investidores latino-americanos e europeus por sua estabilidade legal, ausência de imposto estadual e mercado imobiliário sólido. A chave do sucesso está na estrutura correta (LLC), no financiamento adequado (DSCR) e na gestão profissional (property manager + Stripe).

Na **Sotomayor Consulting International**, ajudamos você a investir na Flórida do início ao fim: desde a constituição da sua LLC e obtenção de EIN até a configuração do Stripe para cobrança de aluguéis, proteção de ativos e planejamento sucessório. Entre em contato para uma consultoria personalizada.
