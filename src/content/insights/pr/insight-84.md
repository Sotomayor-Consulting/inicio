---
title: "Que Impostos um Estrangeiro Paga em Real Estate: Guia 2026"
description: "Que impostos um estrangeiro paga em real estate"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Ciclo de impostos para estrangeiro em real estate: compra, posse, aluguel e venda com ícones do IRS, FIRPTA e property tax"
---

**Os impostos que um estrangeiro paga em real estate nos EUA** cobrem todo o ciclo de investimento: desde a compra (transfer taxes), posse (property tax, income tax sobre aluguéis), até a venda (FIRPTA, capital gains, depreciation recapture). Além disso, existe o estate tax para patrimônios que ultrapassem $60.000 em ativos americanos.

Neste guia, explicamos **todos os impostos que um estrangeiro paga ao investir em real estate nos EUA** em 2026: alíquotas, prazos, formulários, estratégias de redução e o papel do Stripe na declaração de receitas.

## 1. Impostos na Compra

### Transfer Tax (Imposto de Transmissão)

| Estado/County | Alíquota | Quem Paga | Exemplo ($500K) |
|--------------|---------|-----------|----------------|
| **Flórida** | 0,7% (doc stamp) + $0,35/$100 (intangíveis) | Vendedor ou negociável | $3.500-5.000 |
| **Texas** | 0,5-1,5% (state + county) | Vendedor | $2.500-7.500 |
| **Nova York** | 1,825-2,075% (city + state) | Vendedor | $9.125-10.375 |
| **Califórnia** | 0,11% (county varia) | Vendedor | $550 |
| **Delaware** | 3% (state + county) | Vendedor | $15.000 |

### Recording Fees e Outros Custos

| Item | Custo Típico |
|------|-------------|
| **Recording fee (registro)** | $50-200 |
| **Title search** | $200-400 |
| **Title insurance** | $1.500-3.000 (por $500K) |
| **Survey (topografia)** | $500-1.000 |
| **Attorney fees** | $1.000-3.000 |

> Importante: O estrangeiro não paga impostos especiais por comprar. Os custos de fechamento (closing costs) são os mesmos que para um residente, geralmente 3-5% do preço de compra.

```javascript
// Stripe: Stripe não participa na compra de propriedades
// Stripe é usado para cobrar aluguéis APÓS ser proprietário

// Mas Stripe pode ajudar a economizar para o closing:
const savingsGoal = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: { name: 'Economia para compra de propriedade' },
      unit_amount: 500000, // $5.000
    },
    quantity: 1,
  },
}]);
```

## 2. Property Tax (Imposto Predial)

### O que é o Property Tax?

É um imposto anual baseado no valor avaliado da propriedade. TODOS os proprietários pagam, sejam residentes ou estrangeiros.

| Estado | Alíquota Efetiva Média | Por $400K ao Ano |
|--------|-----------------------|-----------------|
| **Flórida** | 0,83% | $3.320 |
| **Texas** | 1,60% | $6.400 |
| **Nova York** | 1,40% | $5.600 |
| **Califórnia** | 0,77% | $3.080 |
| **Illinois** | 2,08% | $8.320 |
| **Massachusetts** | 1,12% | $4.480 |

### Como é Calculado

```
Valor avaliado (assessed value) x Taxa de millage = Property tax anual

Exemplo na Flórida:
Valor da propriedade: $400.000
Exenção de homestead: NÃO aplica (é investimento, não residência)
Valor avaliado: $400.000
Millage rate: 20 mills (2% ou 0,02)
Property tax: $400.000 x 0,02 = $8.000/ano

O property tax é pago ao county tax collector.
Geralmente pago em novembro (anual) ou em duas parcelas.

Dedução fiscal: O property tax é 100% dedutível
na sua declaração de impostos (Schedule E).
```

### O que Acontece se Não Pagar?

| Consequência | Prazo |
|-------------|-------|
| **Multa por atraso** | 3-5% adicional |
| **Juros** | 1-1,5% mensal |
| **Tax lien (penhora fiscal)** | 2 anos de inadimplência |
| **Tax deed sale (leilão)** | Após o tax lien |

## 3. Income Tax sobre Aluguéis (Para Estrangeiros)

### Alíquota do Imposto sobre a Renda

| Tipo de Renda | Alíquota | Base |
|--------------|---------|------|
| **Aluguel líquido (com W-8ECI)** | 10-37% (alíquota marginal) | Renda líquida = receitas - despesas - depreciação |
| **Aluguel bruto (sem W-8ECI)** | 30% fixo | Renda bruta (sem deduções) |

### Tabela de Alíquotas Marginais 2026 (Estrangeiro Não Residente)

| Renda Líquida Tributável | Alíquota |
|-------------------------|---------|
| $0 - $11.600 | 10% |
| $11.601 - $47.150 | 12% |
| $47.151 - $100.525 | 22% |
| $100.526 - $191.950 | 24% |
| $191.951 - $243.725 | 32% |
| $243.726 - $609.350 | 35% |
| $609.351+ | 37% |

### Exemplo de Cálculo

```
Propriedade: $400.000, 100% financiada com hipoteca DSCR
Aluguel anual: $42.000 ($3.500/mês)
Despesas operacionais: $12.000 (seguro, tax, manutenção)
Juros hipotecários: $18.000
Depreciação: $10.909

Cálculo do imposto:

Sem W-8ECI (retenção de 30% sobre o bruto):
  - Retenção: $42.000 x 30% = $12.600
  - Imposto final: $12.600 (sem reembolso)

Com W-8ECI (alíquota marginal sobre o líquido):
  - Renda bruta: $42.000
  - Despesas: -$12.000
  - Juros: -$18.000
  - Depreciação: -$10.909
  - Renda líquida: $1.091
  - Imposto (10%): $109

Economia com W-8ECI: $12.491/ano
```

```javascript
// Stripe: Calcular o imposto estimado sobre aluguéis

// Stripe Tax pode calcular impostos automaticamente
await stripe.tax.settings.update({
  defaults: {
    tax_behavior: 'exclusive',
  },
});

// Stripe Dashboard → Impostos → Relatórios
// Stripe gera relatórios de receitas brutas e líquidas

// Exemplo: Relatório de receita anual
const revenue = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: 1672531200,
    interval_end: 1704067199,
  },
});
```

## 4. Impostos na Venda

### FIRPTA (Foreign Investment in Real Property Tax Act)

| Item | Detalhe |
|------|---------|
| **Retenção obrigatória** | 15% do preço TOTAL de venda |
| **Quem retém** | Comprador (via title company) |
| **Prazo para remeter ao IRS** | 20 dias após o fechamento |
| **Formulários** | 8288 + 8288-A |
| **Isenção** | < $300.000 e comprador usa como residência |

### Detalhamento dos Impostos na Venda

```
Suponha que comprou por $400.000 e vende por $600.000
após 5 anos de aluguel.

Cálculo dos impostos:

1. DEPRECIAÇÃO RECUPERADA (25% máximo)
   Depreciação tomada em 5 anos: $10.909 x 5 = $54.545
   Imposto: $54.545 x 25% = $13.636

2. GANHO DE CAPITAL (0-20% + 3,8% NIIT se aplicável)
   Preço de venda: $600.000
   Base ajustada: $400.000 - $54.545 = $345.455
   Ganho: $600.000 - $345.455 = $254.545
   Ganho de capital: $254.545 - $54.545 = $200.000
   Imposto (20%): $40.000

3. RETENÇÃO FIRPTA (por conta)
   Retido no fechamento: $600.000 x 15% = $90.000
   Imposto real: $13.636 + $40.000 = $53.636
   Reembolso a solicitar: $90.000 - $53.636 = $36.364

4. IMPOSTO ESTADUAL (se aplicável)
   Flórida: 0% (sem state income tax)
   Califórnia: até 13,3% do ganho
```

### Como Reduzir Impostos ao Vender

| Estratégia | Como Funciona | Economia |
|-----------|--------------|---------|
| **1031 Exchange** | Reinvestir em outra propriedade | Diferir todo o imposto |
| **Installment sale** | Vender a prazo | Diferir o imposto |
| **Esperar 1+ anos** | Alíquota de capital gains menor | 20% vs 37% |
| **Vender com prejuízo** | Compensar outros ganhos | Variável |
| **Doar para charity** | Evitar imposto + dedução | 100% do imposto |

## 5. Estate Tax (Imposto sobre Herança)

### O Imposto Mais Perigoso para Estrangeiros

| Aspecto | Cidadão/Residente EUA | Estrangeiro Não Residente |
|---------|---------------------|-------------------------|
| **Isenção** | $13,61M (2026) | $60.000 |
| **Alíquota máxima** | 40% | 40% |
| **Ativos tributados** | Patrimônio mundial | Apenas ativos nos EUA |
| **Cônjuge** | Dedução marital ilimitada | Limitada |

### Como o Estate Tax é Calculado

```
Exemplo: Estrangeiro com propriedades na Flórida avaliadas em $2.000.000

Sem planejamento:
- Isenção: $60.000
- Base tributável: $1.940.000
- Estate tax: $1.940.000 x 40% = $776.000
- Seus herdeiros pagam: $776.000 ao IRS

Com planejamento (LLC + holding):
- A LLC é dona das propriedades
- A LLC é propriedade de uma holding internacional
- O estrangeiro é acionista da holding
- As ações da holding NÃO são "ativos nos EUA"
- Estate tax: $0

Outra opção: Trust irrevogável
- Os ativos no trust não são propriedade do estrangeiro
- Estate tax: $0
```

### Ativos que Disparam o Estate Tax

| Ativo nos EUA | Sujeito a Estate Tax? |
|--------------|---------------------|
| **Propriedade em nome pessoal** | ✅ Sim |
| **Propriedade em LLC** | ⚠️ Depende (se você é membro direto) |
| **Ações de LLC em holding estrangeira** | ❌ Não |
| **Conta bancária** | ❌ Não (portfolio interest) |
| **Ações de empresas americanas** | ✅ Sim (se detidas diretamente) |
| **Stripe (conta da LLC)** | ⚠️ Se a LLC é americana, sim |
| **Seguro de vida** | ❌ Não (se pago do seu país) |

> Para estrangeiros com mais de $60.000 em ativos americanos, o estate tax é o imposto mais importante a planejar. Sem estrutura, o IRS pode tomar até 40% do patrimônio.

## 6. Impostos Estaduais vs. Federais

### Resumo por Estado

| Estado | State Income Tax | Property Tax | Transfer Tax (compra) | Estate Tax Estadual |
|-------|----------------|-------------|---------------------|-------------------|
| **Flórida** | 0% | 0,8-1,2% | 0,7% | Não |
| **Texas** | 0% | 1,6-2,2% | 0,5-1,5% | Não |
| **Wyoming** | 0% | 0,5-0,7% | 0% | Não |
| **Nevada** | 0% | 0,6-0,9% | 0,5% | Não |
| **Califórnia** | 1-13,3% | 0,7-0,8% | 0,11% | Não |
| **Nova York** | 4-10,9% | 1,4% | 1,825% | Sim (até 16%) |
| **Massachusetts** | 5% | 1,1% | 0,5% | Sim (até 16%) |

### Impostos Federais (Aplicam em Todos os Estados)

| Imposto | Alíquota | Quando |
|---------|---------|--------|
| **Income tax (aluguéis)** | 10-37% | Anual |
| **Capital gains (venda)** | 0-20% + 3,8% NIIT | Ao vender |
| **Depreciation recapture** | 25% máximo | Ao vender |
| **FIRPTA** | 15% (retenção) | Ao vender |
| **Estate tax** | 18-40% | Ao falecer |

## 7. Tax Treaties (Tratados de Dupla Tributação)

### Países com Tratado com os EUA

| País | Tratado? | Artigo Relevante | Benefício Principal |
|------|---------|-----------------|-------------------|
| **Espanha** | ✅ Sim | Art. 6 (imóveis) + Art. 13 | Crédito fiscal por impostos pagos |
| **Reino Unido** | ✅ Sim | Art. 6 + Art. 13 | IRS permite deduções sem W-8ECI |
| **Canadá** | ✅ Sim | Art. 6 | Isenção de FIRPTA se venda < $1M |
| **Alemanha** | ✅ Sim | Art. 6 | Alíquota reduzida em dividendos |
| **França** | ✅ Sim | Art. 6 | Crédito fiscal |
| **Brasil** | ❌ Não | N/A | Paga alíquotas completas |
| **Argentina** | ❌ Não | N/A | Paga alíquotas completas |
| **Colômbia** | ❌ Não | N/A | Paga alíquotas completas |
| **México** | ✅ Sim | Art. 6 | Alíquota reduzida em royalties |
| **Emirados Árabes** | ❌ Não | N/A | Paga alíquotas completas |

### Como Usar um Tratado Fiscal

```
Se seu país tem tratado com os EUA:

1. Identifique o artigo do tratado que se aplica ao seu caso
   - Ganhos imobiliários: Artigo 13
   - Rendimentos imobiliários: Artigo 6
   - Juros/Dividendos: Artigos 10-11

2. Apresente Form 8833 (disclosure) com seu 1040-NR
   - Você deve informar ao IRS que está usando um tratado
   - Sem este formulário, o IRS aplica alíquotas padrão

3. Exemplo com tratado Espanha-EUA:
   - Aluguel na Flórida: Tributado nos EUA
   - Também deve declarar na Espanha (obrigação pessoal)
   - Mas pode creditar o imposto pago nos EUA
   - Sem dupla tributação

4. Isenção de FIRPTA:
   - O tratado com Canadá permite vender até $1M sem retenção
   - Outros tratados: não isentam FIRPTA
```

## 8. Impostos Segundo a Estrutura

### Comparação por Estrutura

| Estrutura | Income Tax (Aluguéis) | FIRPTA (Venda) | Estate Tax | Complexidade |
|-----------|---------------------|---------------|-----------|-------------|
| **Nome pessoal** | 10-37% | 15% retenção | ✅ Até 40% (> $60K) | Baixa |
| **LLC (single member)** | 10-37% (pass-through) | 15% retenção | ✅ Até 40% | Baixa |
| **LLC + Holding estrangeira** | 10-37% | 15% retenção | ❌ Protegido | Média |
| **Trust irrevogável** | 10-37% (trust rates) | 15% retenção | ❌ Protegido | Alta |
| **C-Corp** | 21% corporativo | 15% retenção | ❌ Protegido | Alta |

### A Estrutura Recomendada para Estrangeiros

```
Para investidores estrangeiros com mais de $60K em ativos nos EUA:

ESTRUTURA RECOMENDADA:
1. LLC na Flórida (opera a propriedade, cobra aluguéis com Stripe)
2. Holding internacional (Panamá / Países Baixos) proprietária da LLC
3. Você é acionista da holding, não da LLC

BENEFÍCIOS:
- Income tax: Pago sobre aluguéis (igual que pessoal)
- FIRPTA: Continua aplicando (a LLC vende)
- Estate tax: ❌ NÃO APLICA (ações da holding não são ativos americanos)
- Stripe: A LLC tem Stripe, a holding recebe dividendos

CUSTO ADICIONAL:
- Holding: $500-2.000/ano
- Contador internacional: $1.000-3.000/ano
```

```javascript
// Stripe em estrutura LLC + Holding
// A LLC operacional tem Stripe

const account = await stripe.accounts.create({
  type: 'standard',
  country: 'US',
  business_type: 'company',
  company: {
    name: 'Florida Properties LLC', // LLC operacional
    structure: 'llc',
    tax_id: 'XX-XXXXXXX',
  },
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// A LLC pode transferir lucros para a holding
const transfer = await stripe.transfers.create({
  amount: 1000000, // $10.000
  currency: 'usd',
  destination: '{{CONNECTED_ACCOUNT_HOLDING}}',
  description: 'Distribuição de lucros para holding',
});
```

## 9. Calendário Fiscal do Estrangeiro

### Datas Chave

| Data | Obrigação |
|------|----------|
| **15 de janeiro** | Pagamento estimado Q4 (se aplicável) |
| **15 de abril** | Prazo 1040-NR (se esteve nos EUA) |
| **15 de junho** | Prazo 1040-NR (se NÃO esteve nos EUA) |
| **15 de junho** | Pagamento estimado Q2 |
| **15 de setembro** | Pagamento estimado Q3 |
| **15 de outubro** | Extensão 1040-NR (se solicitou) |
| **Novembro** | Property tax (varia por county) |
| **Dezembro** | Revisar estrutura para o próximo ano |

### Checklist Anual

```
JANEIRO:
- [ ] Receber 1099-K do Stripe (se aplicável)
- [ ] Receber 1099 de juros bancários
- [ ] Revisar property tax

FEVEREIRO-MARÇO:
- [ ] Reunir despesas dedutíveis
- [ ] Calcular depreciação
- [ ] Preparar 1040-NR com CPA

ABRIL-JUNHO:
- [ ] Apresentar 1040-NR
- [ ] Pagar impostos
- [ ] Solicitar extensão se necessário

JULHO-DEZEMBRO:
- [ ] Pagar estimated taxes (se aplicável)
- [ ] Revisar estrutura legal
- [ ] Planejar vendas ou 1031 exchanges
```

## 10. Estratégias para Reduzir Impostos

### Resumo de Estratégias

| Estratégia | Imposto que Reduz | Economia Potencial |
|-----------|------------------|------------------|
| **Depreciação** | Income tax (aluguéis) | $2.000-10.000/ano |
| **W-8ECI** | Income tax (evita retenção de 30%) | 30% da renda bruta |
| **Cost Segregation** | Income tax (acelera depreciação) | $10.000-50.000 ano 1 |
| **1031 Exchange** | Capital gains (venda) | Ilimitado (diferido) |
| **LLC + Holding** | Estate tax | Até 40% do patrimônio |
| **Trust irrevogável** | Estate tax | Até 40% do patrimônio |
| **Tax treaty** | Income tax + FIRPTA | Variável |
| **Seguro de vida** | Estate tax | Isento |

### Exemplo de Economia Total

```
Investidor estrangeiro com:
- Propriedade na Flórida: $500.000
- Aluguel anual: $48.000
- Patrimônio total nos EUA: $2.000.000
- Planeja vender em 5 anos
- Tem herdeiros em seu país

SEM PLANEJAMENTO:
- Income tax anual (5 anos): $24.000
- FIRPTA ao vender: $75.000 retidos
- Capital gains tax: $20.000
- Estate tax ao falecer: $776.000
- TOTAL: ~$895.000 em impostos

COM PLANEJAMENTO:
- Income tax anual (com depreciação + W-8ECI): $500/ano
- FIRPTA: $75.000 retidos, $50.000 reembolsados
- Capital gains: $20.000
- Estate tax: $0 (via holding)
- TOTAL: ~$45.500 em impostos

ECONOMIA: ~$849.500
```

## 11. Perguntas Frequentes

### Quanto um estrangeiro paga de impostos por uma propriedade de aluguel?

Depende se você apresenta W-8ECI. Sem W-8ECI: 30% sobre a renda bruta. Com W-8ECI: 10-37% sobre a renda líquida (após despesas e depreciação). Na prática, com depreciação muitos estrangeiros pagam 0-5% efetivo.

### O que acontece se não pagar o property tax?

O condado pode colocar uma penhora na propriedade (tax lien) e eventualmente leiloá-la (tax deed sale). Nunca deixe de pagar o property tax.

### Estrangeiros pagam impostos em dois países?

Depende do seu país de residência. Se seu país tem tratado com os EUA, você pode creditar os impostos pagos nos EUA contra seu imposto local. Sem tratado, pode haver dupla tributação.

### Como evito o estate tax dos EUA?

A forma mais comum é estruturar o investimento através de uma holding internacional ou um trust irrevogável. As ações de uma holding estrangeira não são consideradas ativos nos EUA e não estão sujeitas a estate tax.

### O Stripe reporta meus aluguéis para o fisco do meu país?

Não. Stripe reporta apenas ao IRS dos EUA (via 1099-K). Você é responsável por declarar em seu país segundo suas obrigações fiscais locais.

### Preciso de um CPA nos EUA?

Sim, absolutamente. Um CPA especializado em tributação internacional é essencial para navegar FIRPTA, depreciação, W-8ECI, tratados fiscais e estate tax.

## 12. Checklist de Impostos para Estrangeiros

- [ ] Obter ITIN (se não tiver SSN)
- [ ] Apresentar W-8ECI (para evitar retenção de 30% em aluguéis)
- [ ] Configurar Stripe com EIN da LLC
- [ ] Pagar property tax anual
- [ ] Declarar 1040-NR + Schedule E todo ano
- [ ] Calcular e tomar depreciação anual
- [ ] Pagar estimated taxes trimestrais (se aplicável)
- [ ] Apresentar FIRPTA ao vender (forms 8288 + 8288-A)
- [ ] Solicitar 8288-B se a retenção for excessiva
- [ ] Estruturar para evitar estate tax (holding ou trust)
- [ ] Revisar tratado fiscal com seu país
- [ ] Contratar CPA especializado em tributação internacional

## Conclusão

**Os impostos que um estrangeiro paga em real estate nos EUA** são múltiplos, mas administráveis com a estrutura e planejamento adequados. O property tax é obrigatório para todos, o income tax sobre aluguéis é otimizado com depreciação e W-8ECI, o FIRPTA aplica-se ao vender, e o estate tax é o maior risco para patrimônios acima de $60.000.

A chave está em três pilares: estrutura correta (LLC + holding para estate tax), formulários adequados (W-8ECI, 1040-NR) e um CPA especializado que maximize a depreciação e navegue os tratados fiscais.

Stripe, configurado com seu EIN e W-8ECI, simplifica o recebimento de aluguéis e gera os relatórios necessários para sua declaração anual.

Na **Sotomayor Consulting International**, assessoramos você em todos os impostos que um estrangeiro paga em real estate: desde a obtenção de ITIN e apresentação de W-8ECI até a estruturação de holdings para estate tax, declaração 1040-NR e conformidade FIRPTA. Contate-nos para uma consultoria personalizada.
