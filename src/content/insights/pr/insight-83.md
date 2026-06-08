---
title: "Como Tributa o Aluguel nos EUA: Guia Completo 2026"
description: "Como tributa o aluguel nos EUA"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Calculadora e formulários de impostos IRS com ícones de propriedade de aluguel, dólares e gráfico de depreciação"
---

**O aluguel nos EUA tributa** a nível federal e estadual, com regras específicas para investidores estrangeiros não residentes. Entender como funcionam os impostos sobre propriedades de aluguel é essencial para cumprir com o IRS, otimizar sua carga fiscal e evitar multas.

Neste guia, explicamos **como tributa o aluguel nos EUA** em 2026: receitas, deduções, depreciação, formulários para estrangeiros, FIRPTA e estratégias de otimização fiscal com Stripe.

## 1. Quem Tributa pelo Aluguel nos EUA?

### Residente vs. Não Residente

| Tipo | Definição Fiscal | Tributação |
|------|----------------|-----------|
| **Residente fiscal (Green Card ou 183+ dias)** | Tributa como qualquer americano | Renda mundial |
| **Não residente (estrangeiro sem presença)** | Só tributa por renda de fonte americana | Só renda nos EUA |
| **Não residente (com presença mas < 183 dias)** | Só tributa por renda de fonte americana | Só renda nos EUA |

### Você é Considerado Não Residente?

`
Teste de Presença Substancial (Substantial Presence Test):

Você é residente fiscal se:
- Esteve nos EUA 31+ dias este ano, E
- 183+ dias nos últimos 3 anos (somando: ano atual x 1 + ano anterior x 1/3 + ano retrasado x 1/3)

Se não cumprir: é não residente → só tributa renda de fonte nos EUA

Para investidores estrangeiros:
- Se visita a Flórida 2-3 vezes ao ano (< 120 dias totais)
- Não é residente fiscal
- Tributa só por suas propriedades de aluguel nos EUA
- Usa Form 1040-NR
`

## 2. O Que é Considerado Renda de Aluguel?

### Rendas Tributáveis

| Item | Tributa? | Nota |
|------|---------|------|
| **Aluguel mensal** | Sim | Renda principal |
| **Depósito de segurança** | Não | Até você ficar com ele |
| **Multas por atraso** | Sim | Considerada renda |
| **Serviços públicos pagos pelo inquilino** | Sim | Se sobre o aluguel base |
| **Aluguel de férias (Airbnb)** | Sim | Mesmas regras |
| **Aluguel de temporada** | Sim | Mesmas regras |
| **Subsídios (Section 8)** | Sim | Renda tributável |

### O Que NÃO é Renda?

`
NÃO é considerado renda tributável:
- Depósito de segurança (até usar para danos)
- Reembolsos de despesas (inquilino paga o que você pagou)
- Empréstimos pessoais
- Heranças ou doações (não relacionadas à propriedade)
`

`javascript
// Stripe: Relatório de receitas de aluguel para sua declaração
// Stripe gera relatórios por período fiscal

// Obter receita total do ano fiscal
const balanceTransactions = await stripe.balanceTransactions.list({
  created: {
    gte: 1672531200, // 1 Jan 2026
    lte: 1704067199, // 31 Dec 2026
  },
});

// Calcular receita bruta de aluguel
const grossRent = balanceTransactions.data
  .filter(t => t.type === 'payment')
  .reduce((sum, t) => sum + t.amount, 0);

console.log(Receita bruta de aluguel 2026: {grossRent / 100});
`

## 3. Deduções do Aluguel

### Deduções Permitidas

| Dedução | Descrição | Exemplo |
|---------|----------|---------|
| **Juros hipotecários** | Juros do empréstimo da propriedade | .000/ano |
| **Depreciação** | Desgaste do edifício (27.5 anos) | .909/ano |
| **IPTU (Property tax)** | Imposto predial | .000/ano |
| **Seguros** | Todos os prêmios | .500/ano |
| **Reparos e manutenção** | Consertos, pintura, encanamento | .000/ano |
| **Property manager** | Honorários de gestão (8-12%) | .600/ano |
| **Condomínio** | Taxas de associação | .400/ano |
| **Serviços públicos** | Se pagos pelo proprietário | .200/ano |
| **Viagens** | Viagens para administrar a propriedade | .000/ano |
| **Honorários legais e contábeis** | Advogado, CPA | .500/ano |
| **Marketing** | Publicidade, fotos, listing | /ano |
| **Melhorias (não reparos)** | Depreciadas, não deduzidas direto | Conforme vida útil |

### Reparos vs. Melhorias

| Tipo | Definição | Tratamento Fiscal |
|------|----------|------------------|
| **Reparo** | Manter em condição operacional | Deduz 100% este ano |
| **Melhoria** | Aumenta valor, estende vida útil | Deprecia (27.5 anos ou mais) |

`
Exemplos:

REPAROS (dedução imediata):
- Consertar um vazamento ()
- Pintar um quarto ()
- Reparar o ar condicionado ()
- Trocar uma janela quebrada ()

MELHORIAS (depreciação):
- Telhado novo (.000 → 27.5 anos)
- Cozinha nova (.000 → 27.5 anos)
- Piscina (.000 → 27.5 anos)
- Sistema solar (.000 → 5 anos)
`

## 4. Depreciação (O Maior Benefício Fiscal)

### O Que é Depreciação?

A depreciação é a dedução mais valiosa para propriedades de aluguel. Reconhece que o edifício se desgasta com o tempo, permitindo deduzir uma parte a cada ano sem gastar dinheiro.

| Tipo de Propriedade | Vida Útil | Depreciação Anual |
|-------------------|-----------|------------------|
| **Residencial (aluguel)** | 27.5 anos | 3.636% do valor do edifício |
| **Comercial** | 39 anos | 2.564% do valor do edifício |
| **Melhorias externas** | 15 anos | 6.667% |
| **Equipamentos (mobiliário)** | 5-7 anos | 14.29-20% |

### Cálculo da Depreciação

`
Exemplo:
Propriedade comprada por: .000
Valor do terreno: .000 (não deprecia)
Valor do edifício: .000 (deprecia)

Depreciação anual:
.000 / 27.5 = .909/ano

Benefício fiscal:
- Sem depreciação: Renda líquida .000 → Imposto .300 (22%)
- Com depreciação: Renda líquida .091 → Imposto  (22%)
- Economia fiscal: .400/ano SEM gastar um centavo
`

`javascript
// Stripe Tax: Stripe pode ajudar com cálculos fiscais
// mas a depreciação é calculada pelo seu CPA

// Stripe Dashboard → Relatórios → Resumo fiscal
// Stripe gera relatórios de receita bruta para seu CPA

// Exportar dados para seu CPA
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200, // 1 Jan 2026
    interval_end: 1704067199,   // 31 Dec 2026
  },
});
`

### Depreciação Recuperada (Depreciation Recapture)

`
Ao vender a propriedade:

Se depreciou .000 durante 5 anos:
- Ao vender, o IRS "recupera" a depreciação
- A depreciação recuperada tributa a 25% (máximo)
- O resto do ganho tributa como capital gains (0-20%)

Exemplo:
Preço de compra: .000
Depreciação tomada: .000
Preço de venda: .000

Ganho total: .000
  - Depreciação recuperada: .000 → 25% = .500
  - Ganho de capital: .000 → 20% = .000
  - Imposto total: .500

Sem depreciação:
  - Ganho de capital: .000 → 20% = .000

Vale a pena? Sim, porque diferiu impostos por anos.
`

## 5. Regras de Atividade Passiva (PAL Rules)

### O Que é uma Atividade Passiva?

O aluguel de propriedades é considerado uma "atividade passiva" a menos que você seja um profissional imobiliário (real estate professional).

| Tipo | Definição | Dedução de Perdas |
|------|----------|------------------|
| **Atividade passiva** | Aluguel (default) | Só contra renda passiva |
| **Real estate professional** | 750+ horas/ano + 50% do seu tempo | Pode deduzir contra renda ativa |

### Limitações para Estrangeiros

`
Regra: Perdas passivas só compensam renda passiva.

Se sua propriedade gera perda fiscal (graças à depreciação):
- Não pode usar essa perda contra seu salário no seu país
- A perda é "suspensa" até que:
  a) Tenha renda passiva de outra fonte
  b) Venda a propriedade (libera toda a perda suspensa)

Exceção: Se qualificar como Real Estate Professional
- Deve trabalhar 750+ horas/ano em imóveis
- Deve passar no material participation test
- Difícil para estrangeiros sem presença nos EUA

Estratégia: Não dependa das perdas para reduzir outras rendas.
A depreciação continua valiosa como diferimento de impostos.
`

## 6. Formulários de Impostos para Estrangeiros

### Principais Formulários

| Formulário | Quem Usa | Propósito |
|-----------|---------|----------|
| **1040-NR** | Estrangeiro não residente | Declaração anual de imposto |
| **Schedule E** | Todos com propriedades de aluguel | Reportar receitas e despesas |
| **1042-S** | Pagador a estrangeiro | Reportar renda sujeita a retenção |
| **W-8BEN** | Estrangeiro | Certificar status de não residente |
| **W-8ECI** | Estrangeiro | Renda conectada a negócio nos EUA |
| **8288-B** | Comprador de estrangeiro | Isenção de retenção FIRPTA |
| **ITIN application (W-7)** | Estrangeiro sem SSN | Solicitar ITIN |

### Form 1040-NR para Investidores Estrangeiros

`
Form 1040-NR (versão simplificada):

Seção A: Renda de fonte americana
  ├── Aluguel de propriedades: Schedule E
  ├── Juros bancários: Se aplicável
  └── Ganho de capital: Form 8949 + Schedule D

Seção B: Deduções
  ├── Deduções relacionadas ao aluguel (Schedule E)
  └── Dedução padrão: NÃO disponível para NR

Seção C: Imposto
  ├── Alíquota marginal (10-37%) para aluguéis
  ├── FIRPTA: 15% retido ao vender
  └── Créditos fiscais: Se aplicáveis

Datas importantes:
- 15 de abril: Prazo final (se esteve nos EUA)
- 15 de junho: Se não teve renda com retenção
- Extensão: 15 de outubro (Form 4868)
`

### ITIN: Como Obter

`
ITIN (Individual Taxpayer Identification Number):
- Alternativa ao SSN para estrangeiros
- Necessário para declarar impostos
- Não autoriza a trabalhar nos EUA

Processo:
1. Preencha Form W-7 (IRS)
2. Anexe passaporte original ou certificado
3. Envie com sua primeira declaração (1040-NR)
4. Espere 7-11 semanas

Opções de envio:
- Por correio ao IRS
- Presencialmente no IRS Taxpayer Assistance Center
- Through Certifying Acceptance Agent (recomendado)

Recomendação: Solicite ITIN ANTES de vender uma propriedade nos EUA.
`

## 7. Retenções para Estrangeiros Não Residentes

### Retenção na Fonte

| Tipo de Renda | Taxa de Retenção | Formulário |
|--------------|-----------------|-----------|
| **Aluguel (bruto)** | 30% (sem W-8ECI) | 1042-S |
| **Aluguel líquido (com W-8ECI)** | 0% (declara com 1040-NR) | W-8ECI |
| **Juros bancários** | 0% (portfolio interest exemption) | W-8BEN |
| **Dividendos** | 30% (ou menos com treaty) | W-8BEN |
| **Ganho de capital (venda)** | 15% (FIRPTA) | 8288-B |

### W-8ECI vs. W-8BEN: A Decisão Chave

`
Opção 1: W-8BEN (30% de retenção sobre renda bruta)
├── Stripe retém 30% de CADA aluguel
├── Não declara impostos anualmente
├── Os 30% são seu imposto final (sem devolução)
├── NÃO pode deduzir despesas
└── NÃO pode depreciar

Opção 2: W-8ECI (você declara com 1040-NR)
├── Stripe NÃO retém (0% na fonte)
├── DEVE declarar impostos anualmente (1040-NR)
├── Paga imposto só sobre o lucro LÍQUIDO
├── Pode deduzir despesas, depreciação, juros
└── Geralmente paga MENOS que com W-8BEN

RECOMENDAÇÃO: Use W-8ECI se sua propriedade de aluguel
tem despesas significativas (hipoteca, depreciação).
`

`javascript
// Stripe: Configurar W-8ECI para evitar retenção de 30%

// Stripe Dashboard → Configurações → Impostos
// Adicionar W-8ECI para Stripe não reter 30%

// Stripe verificará seu status fiscal
// Uma vez aprovado, Stripe não retém impostos na fonte

// Stripe Tax: Calcular impostos com sua configuração fiscal
const taxSettings = await stripe.tax.settings.retrieve();
// Verificar se a retenção está configurada corretamente
`

## 8. FIRPTA: Imposto ao Vender

### O Que é FIRPTA?

FIRPTA (Foreign Investment in Real Property Tax Act) exige que o comprador retenha 15% do preço de venda se o vendedor for estrangeiro não residente.

| Conceito | Detalhe |
|---------|---------|
| **Retenção** | 15% do preço TOTAL de venda |
| **Quem retém** | O comprador (escrow / title company) |
| **Prazo** | 20 dias após o fechamento ao IRS |
| **Formulário** | 8288 + 8288-A |
| **Isenção** | < .000 e comprador usa como residência |

### Como Solicitar Redução ou Isenção

`
Pode solicitar um Withholding Certificate (Form 8288-B)
para reduzir ou eliminar a retenção se:

1. A propriedade é vendida por MENOS de .000
   E o comprador a usa como residência (não investimento)
   → Isenção automática

2. O ganho real é menor que 15% do preço
   → Solicite redução (Form 8288-B)
   → Deve enviar antes do fechamento
   → IRS leva 30-60 dias para processar

3. Vende com prejuízo
   → Pode solicitar retenção de 

Exemplo:
Preço de venda: .000
Base de custo: .000
Ganho real: .000

Sem certificado: Retenção de .000 (15% de )
Com certificado: Retenção de .000 (15% de )
`

### Passo a Passo para Vender Sendo Estrangeiro

`
1. ANTES de listar:
   - Contrate CPA especializado em FIRPTA
   - Solicite ITIN (se não tem)
   - Revise estrutura (LLC vs pessoal)

2. AO ASSINAR CONTRATO:
   - Informe ao comprador que é estrangeiro
   - Comprador reterá 15% do preço
   - Solicite 8288-B se aplica redução

3. AO FECHAR:
   - Title company retém 15% e envia ao IRS
   - Recebe 8288-A como comprovante

4. APÓS O FECHAMENTO:
   - Declare a venda no 1040-NR
   - Calcule o imposto real sobre o ganho
   - Solicite reembolso do excesso retido
   - IRS devolve em 6-12 meses
`

## 9. Impostos Estaduais

### Estados Sem Imposto de Renda

| Estado | State Income Tax | Property Tax Aprox. |
|--------|----------------|-------------------|
| **Flórida** | 0% | 0.8-1.2% |
| **Texas** | 0% | 1.6-2.2% |
| **Wyoming** | 0% | 0.5-0.7% |
| **Nevada** | 0% | 0.6-0.9% |
| **Tennessee** | 0% | 0.6-0.9% |

### Estados com Imposto de Renda

| Estado | Alíquota Máxima | Nota |
|-------|----------------|------|
| **Califórnia** | 13.3% | Alto, mas valorização forte |
| **Nova York** | 10.9% | Mais property tax |
| **Illinois** | 4.95% | Property tax alto (~2%) |
| **Massachusetts** | 5% | Property tax médio |

> Para investidores estrangeiros: Flórida e Texas são os estados mais populares porque não têm state income tax. Só paga property tax (~1% do valor anual).

## 10. Estratégias de Otimização Fiscal

### Estratégias Legais

| Estratégia | Descrição | Economia Potencial |
|-----------|----------|------------------|
| **Depreciação** | Deduz 3.636% do valor do edifício ao ano | .000-15.000/ano |
| **Cost Segregation Study** | Acelera depreciação de componentes (5-15 anos) | .000-50.000 no primeiro ano |
| **1031 Exchange** | Diferir ganho de capital ao vender e reinvestir | Ilimitado |
| **Self-directed IRA** | Investir em propriedades pelo seu IRA | Diferimento total |
| **LLC + S-Corp election** | Economizar self-employment tax | .000-5.000/ano |
| **Bonus depreciation** | Depreciação acelerada (equipamentos) | Variável |
| **Travel deductions** | Viagens para administrar propriedades | .000-10.000/ano |

### Cost Segregation Study

`
O que é? Um estudo que identifica componentes da propriedade
que podem ser depreciados mais rápido (5, 7 ou 15 anos).

Exemplo:
Propriedade: .000 (edifício , terreno )

Sem cost segregation:
- Depreciação anual: .909 ( / 27.5)
- 10 anos: .090

Com cost segregation (.000 identificado a 5 anos):
- Componentes 5 anos (): .000/ano
- Edifício restante (): .818/ano
- Total anual: .818
- 10 anos: .180

Economia adicional: .090 em 10 anos
Custo do estudo: .000-8.000
`

`javascript
// Stripe: Relatórios para seu CPA
// Stripe Dashboard → Relatórios → Exportar transações

// Exportação para contabilidade (CSV)
const reportRun = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(new Date('2026-01-01').getTime() / 1000),
    interval_end: Math.floor(new Date('2026-12-31').getTime() / 1000),
    columns: [
      'created',
      'amount',
      'fee',
      'net',
      'description',
      'customer_id',
    ],
  },
});
`

## 11. Erros Comuns em Impostos de Aluguel

| Erro | Consequência | Solução |
|------|-------------|---------|
| **Não declarar receitas** | Multas, juros, IRS penhora | Declare sempre |
| **Não usar W-8ECI** | Stripe retém 30% de TODAS as receitas | Apresente W-8ECI |
| **Não depreciar** | Paga impostos a mais | Deprecie sempre |
| **Classificar melhoria como reparo** | IRS pode auditar e reclassificar | Consulte CPA |
| **Não ter ITIN** | Não pode declarar nem recuperar FIRPTA | Solicite ITIN |
| **Misturar contas pessoais e LLC** | Perde proteção da LLC | Contas separadas |
| **Não reportar venda (FIRPTA)** | Comprador reporta igual, IRS investiga | Declare a venda |
| **Não pagar estimated taxes** | Multas por falta de pagamento | Pague estimados trimestrais |

## 12. Perguntas Frequentes

### Preciso declarar impostos nos EUA se minha propriedade dá prejuízo?

Sim, deve declarar mesmo com prejuízo. O IRS exige declaração anual se tem renda de fonte americana. O prejuízo é suspenso para anos futuros.

### Qual alíquota de imposto pago sobre o aluguel?

O aluguel líquido tributa a alíquotas marginais de 10-37% (igual aos americanos). Ganhos de capital de longo prazo tributa a 0-20%.

### Stripe reporta minhas receitas ao IRS?

Sim. Stripe emite Form 1099-K se suas receitas ultrapassarem .000 (ou o limite aplicável). Stripe reporta todas as transações ao IRS.

### Posso deduzir viagens do meu país para a Flórida?

Sim, se o propósito principal da viagem é administrar sua propriedade. Pode deduzir voos, hotel, refeições (50%) e transporte local.

### O que acontece se não declarar?

O IRS pode penhorar sua propriedade, impor multas de 25-75% do imposto não pago, e Stripe pode congelar sua conta.

### Preciso de um CPA nos EUA?

Sim, especialmente se é estrangeiro. Um CPA especializado em impostos internacionais pode economizar milhares de dólares e evitar problemas com o IRS.

## 13. Checklist de Conformidade Fiscal

- [ ] Solicitar ITIN (se não tem SSN)
- [ ] Apresentar W-8ECI (se aplicável, para evitar retenção de 30%)
- [ ] Configurar Stripe corretamente (sem retenção)
- [ ] Manter contabilidade separada (LLC)
- [ ] Documentar todas as despesas dedutíveis
- [ ] Calcular depreciação anualmente
- [ ] Apresentar 1040-NR + Schedule E a cada ano
- [ ] Pagar estimated taxes (se aplicável)
- [ ] Reportar venda com FIRPTA
- [ ] Contratar CPA especializado
- [ ] Manter registros por 7 anos
- [ ] Revisar tratados de dupla tributação (se aplicável)

## Conclusão

**O aluguel nos EUA tributa** de forma favorável para investidores estrangeiros se você entender as regras. A depreciação é seu maior aliado: permite gerar perdas fiscais sem gastar dinheiro, reduzindo drasticamente seu imposto.

A chave está em apresentar os formulários corretos (W-8ECI para evitar retenção de 30%, 1040-NR para declarar, Schedule E para detalhar receitas e despesas) e trabalhar com um CPA especializado em impostos internacionais.

Stripe, configurado com seu EIN da LLC e W-8ECI, permite cobrar aluguéis sem retenções e gera os relatórios que seu CPA precisa para sua declaração anual.

Na **Sotomayor Consulting International**, ajudamos você com a declaração de impostos de suas propriedades de aluguel nos EUA: desde a obtenção de ITIN e apresentação de W-8ECI até a preparação de 1040-NR com Schedule E, depreciação e conformidade FIRPTA. Entre em contato para uma consultoria personalizada.
