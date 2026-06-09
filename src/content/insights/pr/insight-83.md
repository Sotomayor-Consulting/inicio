---
title: "Como Tributa o Aluguel nos EUA: Guia Completo 2026"
description: "Como tributa o aluguel nos EUA"
cardImage: "@/images/insights/como-tributan-los-exportadores-de-servicios.png"
cardImageAlt: "Calculadora e formul�rios de impostos IRS com �cones de propriedade de aluguel, d�lares e gr�fico de deprecia��o"
---

**O aluguel nos EUA tributa** a n�vel federal e estadual, com regras espec�ficas para investidores estrangeiros n�o residentes. Entender como funcionam os impostos sobre propriedades de aluguel � essencial para cumprir com o IRS, otimizar sua carga fiscal e evitar multas.

Neste guia, explicamos **como tributa o aluguel nos EUA** em 2026: receitas, dedu��es, deprecia��o, formul�rios para estrangeiros, FIRPTA e estrat�gias de otimiza��o fiscal com Stripe.

## 1. Quem Tributa pelo Aluguel nos EUA?

### Residente vs. N�o Residente

| Tipo | Defini��o Fiscal | Tributa��o |
|------|----------------|-----------|
| **Residente fiscal (Green Card ou 183+ dias)** | Tributa como qualquer americano | Renda mundial |
| **N�o residente (estrangeiro sem presen�a)** | S� tributa por renda de fonte americana | S� renda nos EUA |
| **N�o residente (com presen�a mas < 183 dias)** | S� tributa por renda de fonte americana | S� renda nos EUA |

### Voc� � Considerado N�o Residente?

`
Teste de Presen�a Substancial (Substantial Presence Test):

Voc� � residente fiscal se:
- Esteve nos EUA 31+ dias este ano, E
- 183+ dias nos �ltimos 3 anos (somando: ano atual x 1 + ano anterior x 1/3 + ano retrasado x 1/3)

Se n�o cumprir: � n�o residente ? s� tributa renda de fonte nos EUA

Para investidores estrangeiros:
- Se visita a Fl�rida 2-3 vezes ao ano (< 120 dias totais)
- N�o � residente fiscal
- Tributa s� por suas propriedades de aluguel nos EUA
- Usa Form 1040-NR
`

## 2. O Que � Considerado Renda de Aluguel?

### Rendas Tribut�veis

| Item | Tributa? | Nota |
|------|---------|------|
| **Aluguel mensal** | Sim | Renda principal |
| **Dep�sito de seguran�a** | N�o | At� voc� ficar com ele |
| **Multas por atraso** | Sim | Considerada renda |
| **Servi�os p�blicos pagos pelo inquilino** | Sim | Se sobre o aluguel base |
| **Aluguel de f�rias (Airbnb)** | Sim | Mesmas regras |
| **Aluguel de temporada** | Sim | Mesmas regras |
| **Subs�dios (Section 8)** | Sim | Renda tribut�vel |

### O Que N�O � Renda?

`
N�O � considerado renda tribut�vel:
- Dep�sito de seguran�a (at� usar para danos)
- Reembolsos de despesas (inquilino paga o que voc� pagou)
- Empr�stimos pessoais
- Heran�as ou doa��es (n�o relacionadas � propriedade)
`

`javascript
// Stripe: Relat�rio de receitas de aluguel para sua declara��o
// Stripe gera relat�rios por per�odo fiscal

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

## 3. Dedu��es do Aluguel

### Dedu��es Permitidas

| Dedu��o | Descri��o | Exemplo |
|---------|----------|---------|
| **Juros hipotec�rios** | Juros do empr�stimo da propriedade | .000/ano |
| **Deprecia��o** | Desgaste do edif�cio (27.5 anos) | .909/ano |
| **IPTU (Property tax)** | Imposto predial | .000/ano |
| **Seguros** | Todos os pr�mios | .500/ano |
| **Reparos e manuten��o** | Consertos, pintura, encanamento | .000/ano |
| **Property manager** | Honor�rios de gest�o (8-12%) | .600/ano |
| **Condom�nio** | Taxas de associa��o | .400/ano |
| **Servi�os p�blicos** | Se pagos pelo propriet�rio | .200/ano |
| **Viagens** | Viagens para administrar a propriedade | .000/ano |
| **Honor�rios legais e cont�beis** | Advogado, CPA | .500/ano |
| **Marketing** | Publicidade, fotos, listing | /ano |
| **Melhorias (n�o reparos)** | Depreciadas, n�o deduzidas direto | Conforme vida �til |

### Reparos vs. Melhorias

| Tipo | Defini��o | Tratamento Fiscal |
|------|----------|------------------|
| **Reparo** | Manter em condi��o operacional | Deduz 100% este ano |
| **Melhoria** | Aumenta valor, estende vida �til | Deprecia (27.5 anos ou mais) |

`
Exemplos:

REPAROS (dedu��o imediata):
- Consertar um vazamento ()
- Pintar um quarto ()
- Reparar o ar condicionado ()
- Trocar uma janela quebrada ()

MELHORIAS (deprecia��o):
- Telhado novo (.000 ? 27.5 anos)
- Cozinha nova (.000 ? 27.5 anos)
- Piscina (.000 ? 27.5 anos)
- Sistema solar (.000 ? 5 anos)
`

## 4. Deprecia��o (O Maior Benef�cio Fiscal)

### O Que � Deprecia��o?

A deprecia��o � a dedu��o mais valiosa para propriedades de aluguel. Reconhece que o edif�cio se desgasta com o tempo, permitindo deduzir uma parte a cada ano sem gastar dinheiro.

| Tipo de Propriedade | Vida �til | Deprecia��o Anual |
|-------------------|-----------|------------------|
| **Residencial (aluguel)** | 27.5 anos | 3.636% do valor do edif�cio |
| **Comercial** | 39 anos | 2.564% do valor do edif�cio |
| **Melhorias externas** | 15 anos | 6.667% |
| **Equipamentos (mobili�rio)** | 5-7 anos | 14.29-20% |

### C�lculo da Deprecia��o

`
Exemplo:
Propriedade comprada por: .000
Valor do terreno: .000 (n�o deprecia)
Valor do edif�cio: .000 (deprecia)

Deprecia��o anual:
.000 / 27.5 = .909/ano

Benef�cio fiscal:
- Sem deprecia��o: Renda l�quida .000 ? Imposto .300 (22%)
- Com deprecia��o: Renda l�quida .091 ? Imposto  (22%)
- Economia fiscal: .400/ano SEM gastar um centavo
`

`javascript
// Stripe Tax: Stripe pode ajudar com c�lculos fiscais
// mas a deprecia��o � calculada pelo seu CPA

// Stripe Dashboard ? Relat�rios ? Resumo fiscal
// Stripe gera relat�rios de receita bruta para seu CPA

// Exportar dados para seu CPA
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200, // 1 Jan 2026
    interval_end: 1704067199,   // 31 Dec 2026
  },
});
`

### Deprecia��o Recuperada (Depreciation Recapture)

`
Ao vender a propriedade:

Se depreciou .000 durante 5 anos:
- Ao vender, o IRS "recupera" a deprecia��o
- A deprecia��o recuperada tributa a 25% (m�ximo)
- O resto do ganho tributa como capital gains (0-20%)

Exemplo:
Pre�o de compra: .000
Deprecia��o tomada: .000
Pre�o de venda: .000

Ganho total: .000
  - Deprecia��o recuperada: .000 ? 25% = .500
  - Ganho de capital: .000 ? 20% = .000
  - Imposto total: .500

Sem deprecia��o:
  - Ganho de capital: .000 ? 20% = .000

Vale a pena? Sim, porque diferiu impostos por anos.
`

## 5. Regras de Atividade Passiva (PAL Rules)

### O Que � uma Atividade Passiva?

O aluguel de propriedades � considerado uma "atividade passiva" a menos que voc� seja um profissional imobili�rio (real estate professional).

| Tipo | Defini��o | Dedu��o de Perdas |
|------|----------|------------------|
| **Atividade passiva** | Aluguel (default) | S� contra renda passiva |
| **Real estate professional** | 750+ horas/ano + 50% do seu tempo | Pode deduzir contra renda ativa |

### Limita��es para Estrangeiros

`
Regra: Perdas passivas s� compensam renda passiva.

Se sua propriedade gera perda fiscal (gra�as � deprecia��o):
- N�o pode usar essa perda contra seu sal�rio no seu pa�s
- A perda � "suspensa" at� que:
  a) Tenha renda passiva de outra fonte
  b) Venda a propriedade (libera toda a perda suspensa)

Exce��o: Se qualificar como Real Estate Professional
- Deve trabalhar 750+ horas/ano em im�veis
- Deve passar no material participation test
- Dif�cil para estrangeiros sem presen�a nos EUA

Estrat�gia: N�o dependa das perdas para reduzir outras rendas.
A deprecia��o continua valiosa como diferimento de impostos.
`

## 6. Formul�rios de Impostos para Estrangeiros

### Principais Formul�rios

| Formul�rio | Quem Usa | Prop�sito |
|-----------|---------|----------|
| **1040-NR** | Estrangeiro n�o residente | Declara��o anual de imposto |
| **Schedule E** | Todos com propriedades de aluguel | Reportar receitas e despesas |
| **1042-S** | Pagador a estrangeiro | Reportar renda sujeita a reten��o |
| **W-8BEN** | Estrangeiro | Certificar status de n�o residente |
| **W-8ECI** | Estrangeiro | Renda conectada a neg�cio nos EUA |
| **8288-B** | Comprador de estrangeiro | Isen��o de reten��o FIRPTA |
| **ITIN application (W-7)** | Estrangeiro sem SSN | Solicitar ITIN |

### Form 1040-NR para Investidores Estrangeiros

`
Form 1040-NR (vers�o simplificada):

Se��o A: Renda de fonte americana
  +-- Aluguel de propriedades: Schedule E
  +-- Juros banc�rios: Se aplic�vel
  +-- Ganho de capital: Form 8949 + Schedule D

Se��o B: Dedu��es
  +-- Dedu��es relacionadas ao aluguel (Schedule E)
  +-- Dedu��o padr�o: N�O dispon�vel para NR

Se��o C: Imposto
  +-- Al�quota marginal (10-37%) para alugu�is
  +-- FIRPTA: 15% retido ao vender
  +-- Cr�ditos fiscais: Se aplic�veis

Datas importantes:
- 15 de abril: Prazo final (se esteve nos EUA)
- 15 de junho: Se n�o teve renda com reten��o
- Extens�o: 15 de outubro (Form 4868)
`

### ITIN: Como Obter

`
ITIN (Individual Taxpayer Identification Number):
- Alternativa ao SSN para estrangeiros
- Necess�rio para declarar impostos
- N�o autoriza a trabalhar nos EUA

Processo:
1. Preencha Form W-7 (IRS)
2. Anexe passaporte original ou certificado
3. Envie com sua primeira declara��o (1040-NR)
4. Espere 7-11 semanas

Op��es de envio:
- Por correio ao IRS
- Presencialmente no IRS Taxpayer Assistance Center
- Through Certifying Acceptance Agent (recomendado)

Recomenda��o: Solicite ITIN ANTES de vender uma propriedade nos EUA.
`

## 7. Reten��es para Estrangeiros N�o Residentes

### Reten��o na Fonte

| Tipo de Renda | Taxa de Reten��o | Formul�rio |
|--------------|-----------------|-----------|
| **Aluguel (bruto)** | 30% (sem W-8ECI) | 1042-S |
| **Aluguel l�quido (com W-8ECI)** | 0% (declara com 1040-NR) | W-8ECI |
| **Juros banc�rios** | 0% (portfolio interest exemption) | W-8BEN |
| **Dividendos** | 30% (ou menos com treaty) | W-8BEN |
| **Ganho de capital (venda)** | 15% (FIRPTA) | 8288-B |

### W-8ECI vs. W-8BEN: A Decis�o Chave

`
Op��o 1: W-8BEN (30% de reten��o sobre renda bruta)
+-- Stripe ret�m 30% de CADA aluguel
+-- N�o declara impostos anualmente
+-- Os 30% s�o seu imposto final (sem devolu��o)
+-- N�O pode deduzir despesas
+-- N�O pode depreciar

Op��o 2: W-8ECI (voc� declara com 1040-NR)
+-- Stripe N�O ret�m (0% na fonte)
+-- DEVE declarar impostos anualmente (1040-NR)
+-- Paga imposto s� sobre o lucro L�QUIDO
+-- Pode deduzir despesas, deprecia��o, juros
+-- Geralmente paga MENOS que com W-8BEN

RECOMENDA��O: Use W-8ECI se sua propriedade de aluguel
tem despesas significativas (hipoteca, deprecia��o).
`

`javascript
// Stripe: Configurar W-8ECI para evitar reten��o de 30%

// Stripe Dashboard ? Configura��es ? Impostos
// Adicionar W-8ECI para Stripe n�o reter 30%

// Stripe verificar� seu status fiscal
// Uma vez aprovado, Stripe n�o ret�m impostos na fonte

// Stripe Tax: Calcular impostos com sua configura��o fiscal
const taxSettings = await stripe.tax.settings.retrieve();
// Verificar se a reten��o est� configurada corretamente
`

## 8. FIRPTA: Imposto ao Vender

### O Que � FIRPTA?

FIRPTA (Foreign Investment in Real Property Tax Act) exige que o comprador retenha 15% do pre�o de venda se o vendedor for estrangeiro n�o residente.

| Conceito | Detalhe |
|---------|---------|
| **Reten��o** | 15% do pre�o TOTAL de venda |
| **Quem ret�m** | O comprador (escrow / title company) |
| **Prazo** | 20 dias ap�s o fechamento ao IRS |
| **Formul�rio** | 8288 + 8288-A |
| **Isen��o** | < .000 e comprador usa como resid�ncia |

### Como Solicitar Redu��o ou Isen��o

`
Pode solicitar um Withholding Certificate (Form 8288-B)
para reduzir ou eliminar a reten��o se:

1. A propriedade � vendida por MENOS de .000
   E o comprador a usa como resid�ncia (n�o investimento)
   ? Isen��o autom�tica

2. O ganho real � menor que 15% do pre�o
   ? Solicite redu��o (Form 8288-B)
   ? Deve enviar antes do fechamento
   ? IRS leva 30-60 dias para processar

3. Vende com preju�zo
   ? Pode solicitar reten��o de 

Exemplo:
Pre�o de venda: .000
Base de custo: .000
Ganho real: .000

Sem certificado: Reten��o de .000 (15% de )
Com certificado: Reten��o de .000 (15% de )
`

### Passo a Passo para Vender Sendo Estrangeiro

`
1. ANTES de listar:
   - Contrate CPA especializado em FIRPTA
   - Solicite ITIN (se n�o tem)
   - Revise estrutura (LLC vs pessoal)

2. AO ASSINAR CONTRATO:
   - Informe ao comprador que � estrangeiro
   - Comprador reter� 15% do pre�o
   - Solicite 8288-B se aplica redu��o

3. AO FECHAR:
   - Title company ret�m 15% e envia ao IRS
   - Recebe 8288-A como comprovante

4. AP�S O FECHAMENTO:
   - Declare a venda no 1040-NR
   - Calcule o imposto real sobre o ganho
   - Solicite reembolso do excesso retido
   - IRS devolve em 6-12 meses
`

## 9. Impostos Estaduais

### Estados Sem Imposto de Renda

| Estado | State Income Tax | Property Tax Aprox. |
|--------|----------------|-------------------|
| **Fl�rida** | 0% | 0.8-1.2% |
| **Texas** | 0% | 1.6-2.2% |
| **Wyoming** | 0% | 0.5-0.7% |
| **Nevada** | 0% | 0.6-0.9% |
| **Tennessee** | 0% | 0.6-0.9% |

### Estados com Imposto de Renda

| Estado | Al�quota M�xima | Nota |
|-------|----------------|------|
| **Calif�rnia** | 13.3% | Alto, mas valoriza��o forte |
| **Nova York** | 10.9% | Mais property tax |
| **Illinois** | 4.95% | Property tax alto (~2%) |
| **Massachusetts** | 5% | Property tax m�dio |

> Para investidores estrangeiros: Fl�rida e Texas s�o os estados mais populares porque n�o t�m state income tax. S� paga property tax (~1% do valor anual).

## 10. Estrat�gias de Otimiza��o Fiscal

### Estrat�gias Legais

| Estrat�gia | Descri��o | Economia Potencial |
|-----------|----------|------------------|
| **Deprecia��o** | Deduz 3.636% do valor do edif�cio ao ano | .000-15.000/ano |
| **Cost Segregation Study** | Acelera deprecia��o de componentes (5-15 anos) | .000-50.000 no primeiro ano |
| **1031 Exchange** | Diferir ganho de capital ao vender e reinvestir | Ilimitado |
| **Self-directed IRA** | Investir em propriedades pelo seu IRA | Diferimento total |
| **LLC + S-Corp election** | Economizar self-employment tax | .000-5.000/ano |
| **Bonus depreciation** | Deprecia��o acelerada (equipamentos) | Vari�vel |
| **Travel deductions** | Viagens para administrar propriedades | .000-10.000/ano |

### Cost Segregation Study

`
O que �? Um estudo que identifica componentes da propriedade
que podem ser depreciados mais r�pido (5, 7 ou 15 anos).

Exemplo:
Propriedade: .000 (edif�cio , terreno )

Sem cost segregation:
- Deprecia��o anual: .909 ( / 27.5)
- 10 anos: .090

Com cost segregation (.000 identificado a 5 anos):
- Componentes 5 anos (): .000/ano
- Edif�cio restante (): .818/ano
- Total anual: .818
- 10 anos: .180

Economia adicional: .090 em 10 anos
Custo do estudo: .000-8.000
`

`javascript
// Stripe: Relat�rios para seu CPA
// Stripe Dashboard ? Relat�rios ? Exportar transa��es

// Exporta��o para contabilidade (CSV)
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

| Erro | Consequ�ncia | Solu��o |
|------|-------------|---------|
| **N�o declarar receitas** | Multas, juros, IRS penhora | Declare sempre |
| **N�o usar W-8ECI** | Stripe ret�m 30% de TODAS as receitas | Apresente W-8ECI |
| **N�o depreciar** | Paga impostos a mais | Deprecie sempre |
| **Classificar melhoria como reparo** | IRS pode auditar e reclassificar | Consulte CPA |
| **N�o ter ITIN** | N�o pode declarar nem recuperar FIRPTA | Solicite ITIN |
| **Misturar contas pessoais e LLC** | Perde prote��o da LLC | Contas separadas |
| **N�o reportar venda (FIRPTA)** | Comprador reporta igual, IRS investiga | Declare a venda |
| **N�o pagar estimated taxes** | Multas por falta de pagamento | Pague estimados trimestrais |

## 12. Perguntas Frequentes

### Preciso declarar impostos nos EUA se minha propriedade d� preju�zo?

Sim, deve declarar mesmo com preju�zo. O IRS exige declara��o anual se tem renda de fonte americana. O preju�zo � suspenso para anos futuros.

### Qual al�quota de imposto pago sobre o aluguel?

O aluguel l�quido tributa a al�quotas marginais de 10-37% (igual aos americanos). Ganhos de capital de longo prazo tributa a 0-20%.

### Stripe reporta minhas receitas ao IRS?

Sim. Stripe emite Form 1099-K se suas receitas ultrapassarem .000 (ou o limite aplic�vel). Stripe reporta todas as transa��es ao IRS.

### Posso deduzir viagens do meu pa�s para a Fl�rida?

Sim, se o prop�sito principal da viagem � administrar sua propriedade. Pode deduzir voos, hotel, refei��es (50%) e transporte local.

### O que acontece se n�o declarar?

O IRS pode penhorar sua propriedade, impor multas de 25-75% do imposto n�o pago, e Stripe pode congelar sua conta.

### Preciso de um CPA nos EUA?

Sim, especialmente se � estrangeiro. Um CPA especializado em impostos internacionais pode economizar milhares de d�lares e evitar problemas com o IRS.

## 13. Checklist de Conformidade Fiscal

- [ ] Solicitar ITIN (se n�o tem SSN)
- [ ] Apresentar W-8ECI (se aplic�vel, para evitar reten��o de 30%)
- [ ] Configurar Stripe corretamente (sem reten��o)
- [ ] Manter contabilidade separada (LLC)
- [ ] Documentar todas as despesas dedut�veis
- [ ] Calcular deprecia��o anualmente
- [ ] Apresentar 1040-NR + Schedule E a cada ano
- [ ] Pagar estimated taxes (se aplic�vel)
- [ ] Reportar venda com FIRPTA
- [ ] Contratar CPA especializado
- [ ] Manter registros por 7 anos
- [ ] Revisar tratados de dupla tributa��o (se aplic�vel)

## Conclus�o

**O aluguel nos EUA tributa** de forma favor�vel para investidores estrangeiros se voc� entender as regras. A deprecia��o � seu maior aliado: permite gerar perdas fiscais sem gastar dinheiro, reduzindo drasticamente seu imposto.

A chave est� em apresentar os formul�rios corretos (W-8ECI para evitar reten��o de 30%, 1040-NR para declarar, Schedule E para detalhar receitas e despesas) e trabalhar com um CPA especializado em impostos internacionais.

Stripe, configurado com seu EIN da LLC e W-8ECI, permite cobrar alugu�is sem reten��es e gera os relat�rios que seu CPA precisa para sua declara��o anual.

Na **Sotomayor Consulting International**, ajudamos voc� com a declara��o de impostos de suas propriedades de aluguel nos EUA: desde a obten��o de ITIN e apresenta��o de W-8ECI at� a prepara��o de 1040-NR com Schedule E, deprecia��o e conformidade FIRPTA. Entre em contato para uma consultoria personalizada.
