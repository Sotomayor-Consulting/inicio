---
title: "Como Tributa o Aluguel nos EUA: Guia Completo 2026"
description: "Como tributa o aluguel nos EUA"
cardImage: "@/images/insights/como-tributa-el-alquiler-en-eeuu.avif"
cardImageAlt: "Calculadora e formulrios de impostos IRS com cones de propriedade de aluguel, dlares e gráfico de depreciao"
---

**O aluguel nos EUA tributa** a nvel federal e estadual, com regras especficas para investidores estrangeiros não residentes. Entender como funcionam os impostos sobre propriedades de aluguel  essencial para cumprir com o IRS, otimizar sua carga fiscal e evitar multas.

Neste guia, explicamos **como tributa o aluguel nos EUA** em 2026: receitas, dedues, depreciao, formulrios para estrangeiros, FIRPTA e estratgias de otimizao fiscal com Stripe.

## 1. Quem Tributa pelo Aluguel nos EUA?

### Residente vs. Não Residente

- **Residente fiscal (Green Card ou 183+ dias):** Tributa como qualquer americano -- Renda mundial
- **Não residente (estrangeiro sem presena):** S tributa por renda de fonte americana -- S renda nos EUA
- **Não residente (com presena mas < 183 dias):** S tributa por renda de fonte americana -- S renda nos EUA
### Voc  Considerado Não Residente?

`
Teste de Presena Substancial (Substantial Presence Test):

Voc  residente fiscal se:
- Esteve nos EUA 31+ dias este ano, E
- 183+ dias nos ltimos 3 anos (somando: ano atual x 1 + ano anterior x 1/3 + ano retrasado x 1/3)

Se não cumprir:  não residente → s tributa renda de fonte nos EUA

Para investidores estrangeiros:
- Se visita a Flrida 2-3 vezes ao ano (< 120 dias totais)
- Não  residente fiscal
- Tributa s por suas propriedades de aluguel nos EUA
- Usa Form 1040-NR
`

## 2. O Que  Considerado Renda de Aluguel?

### Rendas Tributveis

- **Aluguel mensal:** Sim -- Renda principal
- **Depsito de segurana:** Não -- At você ficar com ele
- **Multas por atraso:** Sim -- Considerada renda
- **Servios pblicos pagos pelo inquilino:** Sim -- Se sobre o aluguel base
- **Aluguel de frias (Airbnb):** Sim -- Mesmas regras
- **Aluguel de temporada:** Sim -- Mesmas regras
- **Subsdios (Section 8):** Sim -- Renda tributvel
### O Que NÃO  Renda?

`
NÃO  considerado renda tributvel:
- Depsito de segurana (at usar para danos)
- Reembolsos de despesas (inquilino paga o que você pagou)
- Emprstimos pessoais
- Heranas ou doaes (não relacionadas  propriedade)
`

`javascript
// Stripe: Relatrio de receitas de aluguel para sua declarao
// Stripe gera relatrios por perodo fiscal

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

## 3. Dedues do Aluguel

### Dedues Permitidas

- **Juros hipotecrios:** Juros do emprstimo da propriedade -- .000/ano
- **Depreciao:** Desgaste do edifcio (27.5 anos) -- .909/ano
- **IPTU (Property tax):** Imposto predial -- .000/ano
- **Seguros:** Todos os prmios -- .500/ano
- **Reparos e manuteno:** Consertos, pintura, encanamento -- .000/ano
- **Property manager:** Honorrios de gestáo (8-12%) -- .600/ano
- **Condomnio:** Taxas de associao -- .400/ano
- **Servios pblicos:** Se pagos pelo proprietrio -- .200/ano
- **Viagens:** Viagens para administrar a propriedade -- .000/ano
- **Honorrios legais e contbeis:** Advogado, CPA -- .500/ano
- **Marketing:** Publicidade, fotos, listing -- /ano
- **Melhorias (não reparos):** Depreciadas, não deduzidas direto -- Conforme vida til
### Reparos vs. Melhorias

- **Reparo:** Manter em condio operacional -- Deduz 100% este ano
- **Melhoria:** Aumenta valor, estende vida til -- Deprecia (27.5 anos ou mais)
`
Exemplos:

REPAROS (deduo imediata):
- Consertar um vazamento ()
- Pintar um quarto ()
- Reparar o ar condicionado ()
- Trocar uma janela quebrada ()

MELHORIAS (depreciao):
- Telhado novo (.000 → 27.5 anos)
- Cozinha nova (.000 → 27.5 anos)
- Piscina (.000 → 27.5 anos)
- Sistema solar (.000 → 5 anos)
`

## 4. Depreciao (O Maior Benefcio Fiscal)

### O Que  Depreciao?

A depreciao  a deduo mais valiosa para propriedades de aluguel. Reconhece que o edifcio se desgasta com o tempo, permitindo deduzir uma parte a cada ano sem gastar dinheiro.

- **Residencial (aluguel):** 27.5 anos -- 3.636% do valor do edifcio
- **Comercial:** 39 anos -- 2.564% do valor do edifcio
- **Melhorias externas:** 15 anos -- 6.667%
- **Equipamentos (mobilirio):** 5-7 anos -- 14.29-20%
### Clculo da Depreciao

`
Exemplo:
Propriedade comprada por: .000
Valor do terreno: .000 (não deprecia)
Valor do edifcio: .000 (deprecia)

Depreciao anual:
.000 / 27.5 = .909/ano

Benefcio fiscal:
- Sem depreciao: Renda lquida .000 → Imposto .300 (22%)
- Com depreciao: Renda lquida .091 → Imposto  (22%)
- Economia fiscal: .400/ano SEM gastar um centavo
`

`javascript
// Stripe Tax: Stripe pode ajudar com clculos fiscais
// mas a depreciao  calculada pelo seu CPA

// Stripe Dashboard → Relatrios → Resumo fiscal
// Stripe gera relatrios de receita bruta para seu CPA

// Exportar dados para seu CPA
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200, // 1 Jan 2026
    interval_end: 1704067199,   // 31 Dec 2026
  },
});
`

### Depreciao Recuperada (Depreciation Recapture)

`
Ao vender a propriedade:

Se depreciou .000 durante 5 anos:
- Ao vender, o IRS "recupera" a depreciao
- A depreciao recuperada tributa a 25% (mximo)
- O resto do ganho tributa como capital gains (0-20%)

Exemplo:
Preo de compra: .000
Depreciao tomada: .000
Preo de venda: .000

Ganho total: .000
  - Depreciao recuperada: .000 → 25% = .500
  - Ganho de capital: .000 → 20% = .000
  - Imposto total: .500

Sem depreciao:
  - Ganho de capital: .000 → 20% = .000

Vale a pena? Sim, porque diferiu impostos por anos.
`

## 5. Regras de Atividade Passiva (PAL Rules)

### O Que  uma Atividade Passiva?

O aluguel de propriedades  considerado uma "atividade passiva" a menos que você seja um profissional imobilirio (real estate professional).

- **Atividade passiva:** Aluguel (default) -- S contra renda passiva
- **Real estate professional:** 750+ horas/ano + 50% do seu tempo -- Pode deduzir contra renda ativa
### Limitaes para Estrangeiros

`
Regra: Perdas passivas s compensam renda passiva.

Se sua propriedade gera perda fiscal (graas  depreciao):
- Não pode usar essa perda contra seu salrio no seu pas
- A perda  "suspensa" at que:
  a) Tenha renda passiva de outra fonte
  b) Venda a propriedade (libera toda a perda suspensa)

Exceo: Se qualificar como Real Estate Professional
- Deve trabalhar 750+ horas/ano em imveis
- Deve passar no material participation test
- Difcil para estrangeiros sem presena nos EUA

Estratgia: Não dependa das perdas para reduzir outras rendas.
A depreciao continua valiosa como diferimento de impostos.
`

## 6. Formulrios de Impostos para Estrangeiros

### Principais Formulrios

- **1040-NR:** Estrangeiro não residente -- Declarao anual de imposto
- **Schedule E:** Todos com propriedades de aluguel -- Reportar receitas e despesas
- **1042-S:** Pagador a estrangeiro -- Reportar renda sujeita a reteno
- **W-8BEN:** Estrangeiro -- Certificar status de não residente
- **W-8ECI:** Estrangeiro -- Renda conectada a negcio nos EUA
- **8288-B:** Comprador de estrangeiro -- Iseno de reteno FIRPTA
- **ITIN application (W-7):** Estrangeiro sem SSN -- Solicitar ITIN
### Form 1040-NR para Investidores Estrangeiros

`
Form 1040-NR (versão simplificada):

Seo A: Renda de fonte americana
  +-- Aluguel de propriedades: Schedule E
  +-- Juros bancrios: Se aplicvel
  +-- Ganho de capital: Form 8949 + Schedule D

Seo B: Dedues
  +-- Dedues relacionadas ao aluguel (Schedule E)
  +-- Deduo padro: NÃO disponvel para NR

Seo C: Imposto
  +-- Alquota marginal (10-37%) para aluguis
  +-- FIRPTA: 15% retido ao vender
  +-- Crditos fiscais: Se aplicveis

Datas importantes:
- 15 de abril: Prazo final (se esteve nos EUA)
- 15 de junho: Se não teve renda com reteno
- Extensão: 15 de outubro (Form 4868)
`

### ITIN: Como Obter

`
ITIN (Individual Taxpayer Identification Number):
- Alternativa ao SSN para estrangeiros
- Necessrio para declarar impostos
- Não autoriza a trabalhar nos EUA

Processo:
1. Preencha Form W-7 (IRS)
2. Anexe passaporte original ou certificado
3. Envie com sua primeira declarao (1040-NR)
4. Espere 7-11 semanas

Opes de envio:
- Por correio ao IRS
- Presencialmente no IRS Taxpayer Assistance Center
- Through Certifying Acceptance Agent (recomendado)

Recomendao: Solicite ITIN ANTES de vender uma propriedade nos EUA.
`

## 7. Retenes para Estrangeiros Não Residentes

### Reteno na Fonte

- **Aluguel (bruto):** 30% (sem W-8ECI) -- 1042-S
- **Aluguel lquido (com W-8ECI):** 0% (declara com 1040-NR) -- W-8ECI
- **Juros bancrios:** 0% (portfolio interest exemption) -- W-8BEN
- **Dividendos:** 30% (ou menos com treaty) -- W-8BEN
- **Ganho de capital (venda):** 15% (FIRPTA) -- 8288-B
### W-8ECI vs. W-8BEN: A Decisão Chave

`
Opo 1: W-8BEN (30% de reteno sobre renda bruta)
+-- Stripe retm 30% de CADA aluguel
+-- Não declara impostos anualmente
+-- Os 30% são seu imposto final (sem devoluo)
+-- NÃO pode deduzir despesas
+-- NÃO pode depreciar

Opo 2: W-8ECI (você declara com 1040-NR)
+-- Stripe NÃO retm (0% na fonte)
+-- DEVE declarar impostos anualmente (1040-NR)
+-- Paga imposto s sobre o lucro LQUIDO
+-- Pode deduzir despesas, depreciao, juros
+-- Geralmente paga MENOS que com W-8BEN

RECOMENDAO: Use W-8ECI se sua propriedade de aluguel
tem despesas significativas (hipoteca, depreciao).
`

`javascript
// Stripe: Configurar W-8ECI para evitar reteno de 30%

// Stripe Dashboard → Configuraes → Impostos
// Adicionar W-8ECI para Stripe não reter 30%

// Stripe verificar seu status fiscal
// Uma vez aprovado, Stripe não retm impostos na fonte

// Stripe Tax: Calcular impostos com sua configurao fiscal
const taxSettings = await stripe.tax.settings.retrieve();
// Verificar se a reteno está configurada corretamente
`

## 8. FIRPTA: Imposto ao Vender

### O Que  FIRPTA?

FIRPTA (Foreign Investment in Real Property Tax Act) exige que o comprador retenha 15% do preo de venda se o vendedor for estrangeiro não residente.

- **Reteno:** 15% do preo TOTAL de venda
- **Quem retm:** O comprador (escrow / title company)
- **Prazo:** 20 dias aps o fechamento ao IRS
- **Formulrio:** 8288 + 8288-A
- **Iseno:** < .000 e comprador usa como residncia
### Como Solicitar Reduo ou Iseno

`
Pode solicitar um Withholding Certificate (Form 8288-B)
para reduzir ou eliminar a reteno se:

1. A propriedade  vendida por MENOS de .000
   E o comprador a usa como residncia (não investimento)
   → Iseno automtica

2. O ganho real  menor que 15% do preo
   → Solicite reduo (Form 8288-B)
   → Deve enviar antes do fechamento
   → IRS leva 30-60 dias para processar

3. Vende com prejuzo
   → Pode solicitar reteno de 

Exemplo:
Preo de venda: .000
Base de custo: .000
Ganho real: .000

Sem certificado: Reteno de .000 (15% de )
Com certificado: Reteno de .000 (15% de )
`

### Passo a Passo para Vender Sendo Estrangeiro

`
1. ANTES de listar:
   - Contrate CPA especializado em FIRPTA
   - Solicite ITIN (se não tem)
   - Revise estrutura (LLC vs pessoal)

2. AO ASSINAR CONTRATO:
   - Informe ao comprador que  estrangeiro
   - Comprador reter 15% do preo
   - Solicite 8288-B se aplica reduo

3. AO FECHAR:
   - Title company retm 15% e envia ao IRS
   - Recebe 8288-A como comprovante

4. APS O FECHAMENTO:
   - Declare a venda no 1040-NR
   - Calcule o imposto real sobre o ganho
   - Solicite reembolso do excesso retido
   - IRS devolve em 6-12 meses
`

## 9. Impostos Estaduais

### Estados Sem Imposto de Renda

- **Flrida:** 0% -- 0.8-1.2%
- **Texas:** 0% -- 1.6-2.2%
- **Wyoming:** 0% -- 0.5-0.7%
- **Nevada:** 0% -- 0.6-0.9%
- **Tennessee:** 0% -- 0.6-0.9%
### Estados com Imposto de Renda

- **Califrnia:** 13.3% -- Alto, mas valorizao forte
- **Nova York:** 10.9% -- Mais property tax
- **Illinois:** 4.95% -- Property tax alto (~2%)
- **Massachusetts:** 5% -- Property tax mdio
> Para investidores estrangeiros: Flrida e Texas são os estados mais populares porque não tm state income tax. S paga property tax (~1% do valor anual).

## 10. Estratgias de Otimizao Fiscal

### Estratgias Legais

- **Depreciao:** Deduz 3.636% do valor do edifcio ao ano -- .000-15.000/ano
- **Cost Segregation Study:** Acelera depreciao de componentes (5-15 anos) -- .000-50.000 no primeiro ano
- **1031 Exchange:** Diferir ganho de capital ao vender e reinvestir -- Ilimitado
- **Self-directed IRA:** Investir em propriedades pelo seu IRA -- Diferimento total
- **LLC + S-Corp election:** Economizar self-employment tax -- .000-5.000/ano
- **Bonus depreciation:** Depreciao acelerada (equipamentos) -- Varivel
- **Travel deductions:** Viagens para administrar propriedades -- .000-10.000/ano
### Cost Segregation Study

`
O que ? Um estudo que identifica componentes da propriedade
que podem ser depreciados mais rpido (5, 7 ou 15 anos).

Exemplo:
Propriedade: .000 (edifcio , terreno )

Sem cost segregation:
- Depreciao anual: .909 ( / 27.5)
- 10 anos: .090

Com cost segregation (.000 identificado a 5 anos):
- Componentes 5 anos (): .000/ano
- Edifcio restante (): .818/ano
- Total anual: .818
- 10 anos: .180

Economia adicional: .090 em 10 anos
Custo do estudo: .000-8.000
`

`javascript
// Stripe: Relatrios para seu CPA
// Stripe Dashboard → Relatrios → Exportar transaes

// Exportao para contabilidade (CSV)
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

- **Não declarar receitas:** Multas, juros, IRS penhora -- Declare sempre
- **Não usar W-8ECI:** Stripe retm 30% de TODAS as receitas -- Apresente W-8ECI
- **Não depreciar:** Paga impostos a mais -- Deprecie sempre
- **Classificar melhoria como reparo:** IRS pode auditar e reclassificar -- Consulte CPA
- **Não ter ITIN:** Não pode declarar nem recuperar FIRPTA -- Solicite ITIN
- **Misturar contas pessoais e LLC:** Perde proteo da LLC -- Contas separadas
- **Não reportar venda (FIRPTA):** Comprador reporta igual, IRS investiga -- Declare a venda
- **Não pagar estimated taxes:** Multas por falta de pagamento -- Pague estimados trimestrais
## 12. Perguntas Frequentes

### Preciso declarar impostos nos EUA se minha propriedade d prejuzo?

Sim, deve declarar mesmo com prejuzo. O IRS exige declarao anual se tem renda de fonte americana. O prejuzo  suspenso para anos futuros.

### Qual alquota de imposto pago sobre o aluguel?

O aluguel lquido tributa a alquotas marginais de 10-37% (igual aos americanos). Ganhos de capital de longo prazo tributa a 0-20%.

### Stripe reporta minhas receitas ao IRS?

Sim. Stripe emite Form 1099-K se suas receitas ultrapassarem .000 (ou o limite aplicvel). Stripe reporta todas as transaes ao IRS.

### Posso deduzir viagens do meu pas para a Flrida?

Sim, se o propsito principal da viagem  administrar sua propriedade. Pode deduzir voos, hotel, refeies (50%) e transporte local.

### O que acontece se não declarar?

O IRS pode penhorar sua propriedade, impor multas de 25-75% do imposto não pago, e Stripe pode congelar sua conta.

### Preciso de um CPA nos EUA?

Sim, especialmente se  estrangeiro. Um CPA especializado em impostos internacionais pode economizar milhares de dlares e evitar problemas com o IRS.

## 13. Checklist de Conformidade Fiscal

- [ ] Solicitar ITIN (se não tem SSN)
- [ ] Apresentar W-8ECI (se aplicvel, para evitar reteno de 30%)
- [ ] Configurar Stripe corretamente (sem reteno)
- [ ] Manter contabilidade separada (LLC)
- [ ] Documentar todas as despesas dedutveis
- [ ] Calcular depreciao anualmente
- [ ] Apresentar 1040-NR + Schedule E a cada ano
- [ ] Pagar estimated taxes (se aplicvel)
- [ ] Reportar venda com FIRPTA
- [ ] Contratar CPA especializado
- [ ] Manter registros por 7 anos
- [ ] Revisar tratados de dupla tributao (se aplicvel)

## Conclusão

**O aluguel nos EUA tributa** de forma favorvel para investidores estrangeiros se você entender as regras. A depreciao  seu maior aliado: permite gerar perdas fiscais sem gastar dinheiro, reduzindo drasticamente seu imposto.

A chave está em apresentar os formulrios corretos (W-8ECI para evitar reteno de 30%, 1040-NR para declarar, Schedule E para detalhar receitas e despesas) e trabalhar com um CPA especializado em impostos internacionais.

Stripe, configurado com seu EIN da LLC e W-8ECI, permite cobrar aluguis sem retenes e gera os relatrios que seu CPA precisa para sua declarao anual.

Na **Sotomayor Consulting International**, ajudamos você com a declarao de impostos de suas propriedades de aluguel nos EUA: desde a obteno de ITIN e apresentao de W-8ECI at a preparao de 1040-NR com Schedule E, depreciao e conformidade FIRPTA. Entre em contato para uma consultoria personalizada.
