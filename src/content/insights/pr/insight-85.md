---
title: "Como Financiar Propriedades nos EUA sendo Estrangeiro: Guia 2026"
description: "Como financiar propriedades nos EUA sendo estrangeiro"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Opções de financiamento para estrangeiros nos EUA: DSCR loan, conventional, hard money, seller financing, private lending"
---

**Financiar propriedades nos EUA sendo estrangeiro** é possível através de múltiplas opções: DSCR loans (baseados em renda de aluguel, não em renda pessoal), hard money (curto prazo, alta taxa), private lending, seller financing, e conventional loans (se tiver ITIN ou SSN com histórico de crédito).

Neste guia, explicamos **como financiar propriedades nos EUA sendo estrangeiro** em 2026: requisitos, taxas, prazos, vantagens de cada opção, e como o Stripe pode apoiar sua solicitação de empréstimo.

## 1. Panorama Geral das Opções de Financiamento

| Opção | Perfil Ideal | Taxa (2026) | Down Payment | Prazo |
|-------|-------------|------------|--------------|-------|
| **Cash (dinheiro)** | Qualquer estrangeiro | 0% (sem juros) | 100% | Imediato |
| **DSCR Loan** | Investidor com propriedade para alugar | 7-9% | 20-35% | 30 anos |
| **Conventional Loan** | Estrangeiro com ITIN/SSN + crédito US | 6-8% | 20-30% | 15-30 anos |
| **Hard Money** | Flip, reparo, curto prazo | 10-15% | 20-30% | 6-24 meses |
| **Private Lending** | Relação com credor | 8-12% | Negociável | Negociável |
| **Seller Financing** | Vendedor motivado | 5-10% | 10-30% | Negociável |
| **Portfolio Loan** | Banco local flexível | 7-10% | 25-40% | 15-30 anos |

### Você é Elegível?

```
Tem SSN ou ITIN?
├── Sim → Tem histórico de crédito nos EUA?
│   ├── Sim → Conventional / Portfolio / DSCR
│   └── Não → DSCR / Hard Money / Private
└── Não → Tem renda de aluguel?
    ├── Sim → DSCR Loan (melhor opção)
    └── Não → Hard Money / Cash / Seller Financing
```

```javascript
// Stripe não origina empréstimos, mas gera relatórios de receita
// que bancos e credores usam para aprovar DSCR loans

// Relatório de receita de aluguel para o credor
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    interval_start: Math.floor(Date.now() / 1000) - 31536000, // 12 meses
    interval_end: Math.floor(Date.now() / 1000),
    columns: ['created', 'amount', 'description', 'status'],
  },
});

// Baixe este relatório e apresente ao banco
```

## 2. DSCR Loan: A Melhor Opção para Estrangeiros

### O que é um DSCR Loan?

DSCR significa **Debt Service Coverage Ratio**. É um empréstimo baseado no fluxo de caixa da propriedade, NÃO na sua renda pessoal. O credor avalia:

```
DSCR = Renda líquida de aluguel / Pagamento mensal do empréstimo

Exemplo:
Aluguel mensal: $3.500
Pagamento mensal (hipoteca + seguros + tax): $2.800
DSCR = $3.500 / $2.800 = 1,25

Requisito típico: DSCR ≥ 1,0

Se DSCR = 1,25, o empréstimo é aprovado
Se DSCR < 1,0, precisa de mais down payment
```

### Requisitos para Estrangeiros

| Requisito | Detalhe |
|-----------|---------|
| **Residência** | Qualquer país (sem SSN/ITIN obrigatório) |
| **Down payment** | Mínimo 20-35% (maior sem histórico nos EUA) |
| **DSCR mínimo** | 1,0-1,25 (depende do credor) |
| **Contrato de locação** | Se for refinance, ter inquilinos |
| **EIN da LLC** | Necessário para abrir conta bancária |
| **ITIN** | Recomendado, não obrigatório |
| **Depósitos em conta US** | 2-12 meses de reservas |

### Taxas e Termos

| Perfil | Taxa | Down Payment | DSCR Mínimo |
|--------|------|-------------|------------|
| **Excelente (DSCR > 1,5)** | 6,5-7,5% | 20% | 1,0 |
| **Bom (DSCR 1,25-1,5)** | 7,5-8,5% | 25% | 1,1 |
| **Aceitável (DSCR 1,0-1,25)** | 8,5-9,5% | 30-35% | 1,25 |
| **Sem histórico nos EUA** | 8-10% | 30-35% | 1,25 |

### Como o Stripe Ajuda com DSCR

```
Stripe gera relatórios de receita que demonstram o DSCR:

1. Configure Stripe na sua LLC
2. Receba aluguéis pelo Stripe durante 12 meses
3. Baixe o relatório de transações
4. Apresente o relatório ao credor + tax returns

Isto é especialmente útil se:
- Você não tem W-2 nem tax returns pessoais nos EUA
- Sua renda vem de múltiplas propriedades
- Você quer demonstrar consistência de receita
```

## 3. Conventional Loan (Empréstimo Tradicional)

### Um Estrangeiro Pode Obter?

| Fator | Resposta |
|-------|----------|
| **Preciso de SSN?** | Sim, ou pelo menos ITIN com histórico |
| **Preciso de crédito US?** | Sim, mínimo 620-660 FICO |
| **Quanto down payment?** | 20-30% mínimo |
| **Quanto tempo leva?** | 30-60 dias |
| **Minha renda é avaliada?** | Sim, precisa de W-2 ou tax returns |
| **Posso usar aluguel projetado?** | Não, apenas renda pessoal comprovável |

### Desvantagens para Estrangeiros

- **Difícil de qualificar** sem histórico de crédito nos EUA
- **Requer renda nos EUA** (W-2, 1099 ou tax returns)
- **Não considera aluguel futuro** da propriedade
- **ITIN loans** existem mas com taxas mais altas e menos opções

### Alternativa: ITIN Mortgage

Alguns credores oferecem hipotecas com ITIN (sem SSN) para compradores que:

| Requisito | Detalhe |
|-----------|---------|
| **ITIN** | Obrigatório |
| **Histórico de pagamentos** | 12-24 meses de aluguel, utilities, etc. |
| **Down payment** | 20-30% |
| **Taxa** | 7-10% (maior que conventional) |
| **Documentação** | Tax returns + bank statements |
| **Disponibilidade** | Limitada (apenas certos estados e credores) |

## 4. Hard Money Loan

### O que é um Hard Money Loan?

Empréstimo de curto prazo, alta taxa, baseado no valor da propriedade (não no seu crédito). Ideal para flips, reparos, ou compras rápidas.

| Característica | Detalhe |
|---------------|---------|
| **Taxa** | 10-15% anual |
| **Pontos (origination)** | 2-5% do empréstimo |
| **Prazo** | 6-24 meses |
| **LTV** | 60-75% do ARV (after repair value) |
| **Aprovação** | 3-7 dias |
| **Crédito** | Flexível (não requer histórico nos EUA) |
| **Documentação** | Mínima |

### Quando Usar Hard Money

```
Cenário ideal:
- Compra uma propriedade por $200.000
- Precisa de $50.000 em reparos
- ARV (valor após reparo): $350.000
- Hard money loan: 70% do ARV = $245.000
- Usa $200.000 para comprar + $45.000 para reparar
- Vende em 12 meses por $350.000
- Paga o empréstimo + juros (~$220.000)
- Lucro: $130.000 antes dos custos

Cenário NÃO ideal:
- Propriedade para aluguel de longo prazo
- DSCR loan é melhor: taxa 8% vs 12%, prazo 30 anos
- Hard money apenas se temporário (flip ou bridge)
```

### Comparação Hard Money vs DSCR

| Aspecto | Hard Money | DSCR Loan |
|---------|-----------|-----------|
| **Taxa** | 10-15% | 7-9% |
| **Prazo** | 6-24 meses | 30 anos |
| **Propósito** | Flip / Bridge / Reparo | Aluguel de longo prazo |
| **Aprovação** | 3-7 dias | 2-4 semanas |
| **Down payment** | 20-30% | 20-35% |
| **Pagamento mensal** | Apenas juros (IO) | Amortizado |

```javascript
// Stripe ajuda a demonstrar receita para refinanciar
// de hard money para DSCR loan após os reparos

// Relatório de aluguéis após reforma
const rentalIncome = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 7776000 }, // últimos 90 dias
});

// Com 90 dias de aluguéis consistentes, pode refinanciar
const totalRentals = rentalIncome.data.reduce((sum, session) => {
  return session.payment_status === 'paid' ? sum + session.amount_total : sum;
}, 0);

console.log(`Total recebido em 90 dias: $${(totalRentals / 100).toFixed(2)}`);
```

## 5. Seller Financing

### Como Funciona?

O vendedor atua como banco: você paga a ele em parcelas, sem necessidade de um banco tradicional.

| Conceito | Detalhe |
|---------|---------|
| **Down payment** | 10-30% (negociável) |
| **Taxa** | 5-10% (negociável, geralmente menor que banco) |
| **Prazo** | 5-20 anos (ou balloon aos 5 anos) |
| **Aprovação** | Dias, não semanas |
| **Requisitos** | Apenas o que o vendedor pedir |
| **Propriedade** | Geralmente livre de hipoteca |

### Vantagens para Estrangeiros

| Vantagem | Explicação |
|---------|------------|
| **Sem banco** | Não precisa de crédito US, ITIN nem SSN |
| **Flexível** | Termos negociáveis diretamente com o vendedor |
| **Rápido** | Fechamento em 1-2 semanas |
| **Sem pontos** | Sem origination fees |
| **Sem prepayment penalty** | Geralmente não aplica |

### Desvantagens

- **Vendedor precisa estar motivado** (nem sempre disponível)
- **Prazo mais curto** que empréstimo tradicional
- **Balloon payment** comum (pagamento global no final)
- **Propriedade precisa ter equity** ou estar livre de hipoteca

## 6. Private Lending

### O que é Private Lending?

Investidores privados (pessoas ou fundos) que emprestam dinheiro para projetos imobiliários.

| Fonte | Taxa Típica | Prazo | LTV |
|-------|------------|-------|-----|
| **Family office** | 8-12% | 1-5 anos | 60-75% |
| **Angel investor** | 10-15% | 1-3 anos | 60-70% |
| **Peer-to-peer (crowdfunding)** | 8-11% | 1-5 anos | 65-75% |
| **Sindicato de investidores** | 9-13% | 1-5 anos | 60-70% |

### Como Encontrar Private Lenders

```
1. Grupos de real estate investing (BiggerPockets, Facebook)
2. Meetups locais de investidores
3. Indicações de corretores de imóveis
4. Advogados de imóveis (têm contatos)
5. Crowdfunding imobiliário (Fundrise, CrowdStreet)

Requisitos típicos:
- Experiência em real estate (ou sócio com experiência)
- Deal bem documentado (pro forma, ARV, orçamento)
- Exit strategy clara (venda, refinancia, aluguel)
- Contribuição pessoal (20-30% do deal)
```

## 7. Portfolio Loan

### O que é um Portfolio Loan?

Um empréstimo que o banco **não vende para Fannie Mae/Freddie Mac** mas mantém em seu próprio balanço. Isto permite mais flexibilidade.

| Benefício | Detalhe |
|-----------|---------|
| **Sem limite de valor** | Pode exceder conforming loan limits |
| **Documentação flexível** | Aceitam bank statements em vez de W-2 |
| **Múltiplas propriedades** | Um único empréstimo para várias propriedades |
| **Estrangeiros** | Alguns bancos locais oferecem |

### Requisitos Típicos

| Requisito | Detalhe |
|-----------|---------|
| **Down payment** | 25-40% |
| **Reservas** | 6-12 meses de pagamentos |
| **Relacionamento com banco** | Ajuda ter conta existente |
| **Propriedade** | Geralmente no mesmo estado do banco |
| **Taxa** | 7-10% (prêmio sobre conventional) |

## 8. Financiamento por Tipo de Propriedade

| Tipo de Propriedade | Melhor Opção | Down Payment | Taxa Estimada |
|-------------------|-------------|-------------|--------------|
| **SFR (casa unifamiliar)** | DSCR Loan | 20-30% | 7-9% |
| **Multifamiliar (2-4 units)** | DSCR / Conventional | 25-35% | 7-10% |
| **Condomínio** | DSCR / Cash | 25-35% | 7-9,5% |
| **Comercial (5+ units)** | Commercial Loan | 30-40% | 6,5-9% |
| **Terreno (land)** | Cash / Private | 50-100% | 10-15% |
| **Short-term rental (Airbnb)** | DSCR (short-term) | 30-40% | 8-11% |

### Financiamento Short-Term Rental (Airbnb/VRBO)

```
Para propriedades de aluguel temporário, o DSCR é calculado diferente:

Aluguel anual projetado: $60.000
Ocupação estimada: 70%
Aluguel ajustado: $60.000 x 70% = $42.000

Pagamento mensal (PITI): $3.500
Pagamento anual: $42.000

DSCR = $42.000 / $42.000 = 1,0

Requisitos adicionais:
- Down payment: 30-35% (maior que LTR)
- Taxa: 8-11%
- Experiência em short-term rentals (desejável)
- Pro forma com ocupação e tarifas
```

```javascript
// Stripe para short-term rental financing

// Stripe integra-se com sistemas PMS (Property Management)
// e gera relatórios de ocupação e receita

// Configurar Stripe para pagamentos Airbnb/VRBO
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});

// Stripe Connect integra-se com plataformas como:
// - Hostaway
// - Guesty
// - Lodgify
// - Uplisting

// O relatório de receita do Stripe apoia sua solicitação DSCR
```

## 9. Passo a Passo para Financiar como Estrangeiro

### Rota 1: DSCR Loan (Recomendada)

```
PASSO 1: Escolher propriedade
- Buscar propriedades com DSCR potencial ≥ 1,25
- Calcular aluguel de mercado vs. pagamento mensal estimado

PASSO 2: Formar LLC
- Criar LLC no estado da propriedade
- Obter EIN do IRS

PASSO 3: Abrir conta bancária
- Em um banco US que aceite estrangeiros
- Depositar fundos para down payment + reservas

PASSO 4: Configurar Stripe
- Conectar Stripe com a LLC
- Se já tiver inquilinos, receber aluguéis pelo Stripe

PASSO 5: Buscar credor DSCR
- Comparar pelo menos 3 credores
- Solicitar pre-approval (soft credit pull)

PASSO 6: Fechar a compra
- Fornecer documentação (bank statements, Stripe reports)
- Assinar e fechar em 2-4 semanas
```

### Rota 2: Hard Money → Refinanciar para DSCR

```
PASSO 1: Comprar com hard money
- Ideal para propriedades que precisam de reparo
- Fechamento rápido (3-7 dias)

PASSO 2: Reparar e alugar
- Usar o empréstimo para reformar
- Conseguir inquilinos rapidamente
- Configurar Stripe para receber aluguéis

PASSO 3: Gerar histórico de aluguéis
- Receber aluguéis por 3-6 meses pelo Stripe
- Demonstrar DSCR ≥ 1,0

PASSO 4: Refinanciar para DSCR
- Buscar um credor DSCR
- Usar o novo valor (ARV) para avaliação
- Sacar dinheiro ou reduzir a taxa
```

### Rota 3: Cash → Refinanciar (Delayed Financing)

```
PASSO 1: Comprar à vista
- Oferece maior poder de negociação
- Fechamento rápido, sem contingências de financiamento

PASSO 2: Alugar e gerar histórico
- Configurar Stripe para receber aluguéis
- Gerar 6-12 meses de histórico

PASSO 3: Delayed Financing Exception
- FHA permite cash-out refinance dentro de 6 meses da compra à vista
- Pode recuperar até 75% do valor de compra
- Sem período de "seasoning" obrigatório
```

## 10. Comparação de Credores para Estrangeiros

| Credor | Especialidade | Down Payment | Taxa | Processo |
|--------|-------------|-------------|------|---------|
| **Visio Lending** | DSCR (sem ITIN) | 25-35% | 7,5-9% | 100% online |
| **Lima One Capital** | DSCR + Hard Money | 20-30% | 7-10% | Rápido |
| **Asset Avenue** | DSCR + Portfolio | 25-30% | 7,5-9,5% | Online |
| **CoreVest** | DSCR (multifamiliar) | 25-30% | 7-9% | Tradicional |
| **RCN Capital** | Fix & Flip | 20-30% | 9-13% | Rápido |
| **LendingOne** | DSCR + Short-term | 25-35% | 7,5-10% | Online |
| **Kiavi** | DSCR + Fix & Flip | 20-30% | 7,5-9,5% | Online |

### Dicas para Escolher Credor

```
1. Busque credores especializados em investidores estrangeiros
2. Pergunte se aceitam ITIN (melhor que não exigir)
3. Compare APRs (inclui pontos e origination fees)
4. Verifique prepayment penalties (evite > 3 anos)
5. Pergunte sobre DSCR em short-term rentals
6. Leia reviews no BiggerPockets ou Google
7. Solicite pre-approval antes de fazer ofertas
```

## 11. Perguntas Frequentes

### Posso financiar uma propriedade nos EUA sem SSN?

Sim. A opção mais comum para estrangeiros sem SSN é o **DSCR Loan**, que não exige SSN/ITIN obrigatoriamente. Também existem **seller financing** e **hard money** sem verificação de crédito US.

### Quanto down payment um estrangeiro precisa?

Depende do tipo de empréstimo: DSCR loan (20-35%), conventional com ITIN (20-30%), hard money (20-30%), seller financing (10-30%). Em geral, espere mínimo 25-30%.

### Posso usar renda do meu país para qualificar?

Depende do credor. A maioria dos credores DSCR considera apenas o aluguel da propriedade. Para conventional loans, alguns aceitam renda internacional com documentação adicional (tradução de tax returns, cartas do empregador).

### O que é melhor: DSCR ou Conventional?

Para estrangeiros, **DSCR é quase sempre melhor**: não requer histórico de crédito US, considera apenas o aluguel da propriedade, e o processo é mais simples. Conventional é melhor apenas se tiver excelente crédito US e a taxa for menor.

### O Stripe me ajuda a conseguir um empréstimo?

Sim. Stripe gera relatórios de receita de aluguéis que credores DSCR aceitam como prova de fluxo de caixa. Você também pode usar Stripe para demonstrar 6-12 meses de histórico de aluguel antes de refinanciar.

### Posso comprar 100% financiado?

Muito difícil para estrangeiros. O máximo geralmente é 70-80% LTV (20-30% down). Alguns credores oferecem 85% LTV com DSCR alto e bom histórico, mas é a exceção.

## 12. Checklist para Financiar como Estrangeiro

- [ ] Definir orçamento e estratégia (LTR, STR, flip)
- [ ] Escolher estado e propriedade com bom potencial DSCR
- [ ] Formar LLC no estado da compra
- [ ] Obter EIN do IRS
- [ ] Abrir conta bancária nos EUA
- [ ] Configurar Stripe na LLC
- [ ] Reunir fundos para down payment (25-35%)
- [ ] Preparar reservas (3-12 meses de pagamentos)
- [ ] Solicitar pre-approval em 2-3 credores DSCR
- [ ] Comparar taxas, pontos e prepayment penalties
- [ ] Fazer oferta com pre-approval
- [ ] Fechar compra (2-4 semanas)
- [ ] Configurar recebimento de aluguéis no Stripe
- [ ] Configurar pagamento automático da hipoteca

## Conclusão

**Financiar propriedades nos EUA sendo estrangeiro** é completamente factível com a opção adequada. O **DSCR Loan** é a melhor alternativa para investidores que geram aluguéis: não requer SSN, baseia-se no fluxo de caixa da propriedade, e oferece prazos de 30 anos com taxas competitivas.

Para projetos de curto prazo (flips, reparos), o **hard money** ou **private lending** são opções rápidas. O **seller financing** e **portfolio loans** oferecem flexibilidade adicional. A combinação de LLC + Stripe + DSCR loan é a estratégia mais sólida para escalar seu portfólio imobiliário nos EUA.

Na **Sotomayor Consulting International**, assessoramos você em todo o processo de financiamento: desde a formação de LLC e obtenção de EIN, até a conexão com credores DSCR, configuração de Stripe para relatórios de receita, e preparação de documentação para empréstimos. Contate-nos para uma consultoria personalizada.
