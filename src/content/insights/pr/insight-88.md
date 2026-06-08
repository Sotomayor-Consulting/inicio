---
title: "O que Revisar Antes de Investir nos EUA sendo Estrangeiro: Guia 2026"
description: "O que revisar antes de investir nos EUA sendo estrangeiro"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Lista de verificação pré-investimento para estrangeiros nos EUA: estrutura legal, impostos, financiamento, localização, seguros, Stripe"
---

**Investir nos EUA sendo estrangeiro** requer revisar uma série de fatores críticos antes de comprometer capital: desde a estrutura legal e fiscal até o financiamento, a localização, os seguros, as restrições locais e a estratégia de saída. Um erro em qualquer destes pontos pode custar milhares de dólares.

Neste guia, apresentamos **o que revisar antes de investir nos EUA sendo estrangeiro** em 2026: uma checklist completa com 10 áreas críticas que todo investidor deve avaliar antes de comprar.

## 1. Revisar seu Perfil como Investidor

### Autoavaliação Inicial

| Pergunta | Por Que é Importante |
|----------|---------------------|
| **Tem SSN ou ITIN?** | Determina opções de financiamento e formulários fiscais |
| **Tem histórico de crédito nos EUA?** | Afeta taxa e tipo de empréstimo |
| **Qual é seu orçamento total?** | Define faixa de propriedades e down payment |
| **Prazo de investimento?** | Curto (flip) vs. longo (aluguel) muda tudo |
| **De qual país investe?** | Afeta tratados fiscais, estrutura e banking |
| **Tem experiência em real estate?** | Determina se precisa de sócio ou property manager |
| **Objetivo: renda, valorização ou ambos?** | Define localização, tipo de propriedade e financiamento |

### Calcule sua Capacidade Real

```
DINHEIRO DISPONÍVEL:
- Economias para down payment: $__________
- Closing costs (3-5% do preço): $__________
- Reservas (3-12 meses): $__________
- Reparos/renovações: $__________
- Total necessário: $__________

RECEITA MENSAL PROJETADA:
- Aluguel estimado: $__________
- Vacância (5-10%): -$__________
- Aluguel líquido: $__________

DESPESAS MENSAIS PROJETADAS:
- Hipoteca (P&I): $__________
- Property tax: $__________
- Seguro: $__________
- HOA: $__________
- Property management (8-12%): $__________
- Manutenção (10% aluguel): $__________
- Total despesas: $__________

DSCR = Aluguel líquido / Despesas totais (com hipoteca)
DSCR = $__________ / $__________ = __________
✓ Precisa de DSCR ≥ 1,0, ideal ≥ 1,25
```

```javascript
// Stripe: Use Stripe para projetar receitas
// se já tiver propriedades similares operando

// Analise transações históricas
const transactions = await stripe.checkout.sessions.list({
  limit: 100,
  created: { gte: Math.floor(Date.now() / 1000) - 31536000 },
});

const totalIncome = transactions.data
  .filter(t => t.payment_status === 'paid')
  .reduce((sum, t) => sum + t.amount_total, 0);

const avgMonthly = (totalIncome / 100) / 12;
console.log(`Renda mensal média: $${avgMonthly.toFixed(2)}`);
```

## 2. Revisar a Estrutura Legal

### Opções de Estrutura

| Estrutura | Proteção | Privacidade | Estate Tax | Custo Anual | Complexidade |
|-----------|---------|-----------|-----------|-------------|-------------|
| **Nome pessoal** | ❌ Nenhuma | ❌ Pública | ✅ Exposto | $0 | Mínima |
| **LLC sozinha** | ✅ Limitada | ✅ LLC é proprietária | ⚠️ Exposto (> $60K) | $500-1.000 | Baixa |
| **LLC + Holding internacional** | ✅ Alta | ✅ Alta | ❌ Protegido | $2.000-4.000 | Média |
| **LLC + Holding + Trust** | ✅ Máxima | ✅ Máxima | ❌ Protegido | $4.000-8.000 | Alta |

### Checklist Legal Pré-Compra

```
Antes de fazer uma oferta, revise:

ESTRUTURA:
- [ ] Preciso de LLC neste estado?
- [ ] Formo a LLC antes ou depois de comprar?
- [ ] Preciso de holding internacional para estate tax?
- [ ] O que diz o tratado fiscal com meu país?

DOCUMENTAÇÃO:
- [ ] Tenho EIN do IRS?
- [ ] Tenho ITIN ou SSN?
- [ ] Tenho conta bancária nos EUA?
- [ ] Tenho um registered agent para a LLC?
```

## 3. Revisar o Estado e a Localização

### Comparação por Estado

| Fator | Flórida | Texas | Nova York | Califórnia |
|-------|---------|-------|-----------|------------|
| **State income tax** | 0% | 0% | 4-10,9% | 1-13,3% |
| **Property tax** | 0,8-1,2% | 1,6-2,2% | 1,4% | 0,77% |
| **Transfer tax (compra)** | 0,7% | 0,5-1,5% | 1,825% | 0,11% |
| **Short-term rental** | ✅ Permitido* | ✅ Permitido* | ⚠️ Restrito | ⚠️ Restrito |
| **Proteção LLC** | ✅ Boa | ✅ Boa | ✅ Boa | ⚠️ Média |
| **Seguro furacão** | Alto | Médio | Baixo | Baixo |
| **Custo de vida** | Médio | Baixo | Alto | Muito alto |

### Micro-Localização: o que Revisar na Vizinhança

```
Ao avaliar uma propriedade específica, revise:

1. ZONEAMENTO (ZONING)
   - Uso residencial, comercial ou misto?
   - Permite short-term rental?
   - Há restrições de HOA?

2. DEMANDA DE ALUGUEL
   - Taxa de vacância na área
   - Aluguel médio por tipo de propriedade
   - Ocupação em short-term rental (AirDNA, Mashvisor)
   - Proximidade a empregadores, escolas, transporte

3. RISCOS NATURAIS
   - Flood zone? (mapa FEMA)
   - Zona de furacão?
   - Histórico de desastres naturais?

4. INFRAESTRUTURA
   - Idade da propriedade (telhado, HVAC, encanamento, elétrica)
   - Qualidade das escolas (afeta valor de revenda)
   - Desenvolvimento futuro (novas construções, empregadores)
```

```javascript
// Stripe: Para validar demanda, pode criar
// uma landing page com Stripe para medir interesse

// Mas mais prático: use Stripe com dados de propriedades existentes
// Relatório de receita por código postal
const report = await stripe.reporting.reportRuns.create({
  report_type: 'itemized_transactions',
  parameters: {
    columns: ['created', 'amount', 'description', 'customer'],
    interval_start: Math.floor(Date.now() / 1000) - 7776000,
    interval_end: Math.floor(Date.now() / 1000),
  },
});
```

## 4. Revisar o Financiamento

### Opções de Empréstimo por Perfil

| Seu Perfil | Melhor Opção | Down Payment | Taxa (2026) |
|-----------|-------------|-------------|-------------|
| **Sem SSN/ITIN, sem crédito US** | DSCR Loan | 25-35% | 7-9% |
| **Com ITIN, sem crédito US** | DSCR Loan / ITIN Mortgage | 20-30% | 7-10% |
| **Com SSN, bom crédito US** | Conventional / DSCR | 20-25% | 6-8% |
| **Dinheiro disponível** | Cash (depois refinancia) | 100% | 0% |
| **Flip/curto prazo** | Hard Money | 20-30% | 10-15% |

### Perguntas Chave ao Credor

```
Antes de aceitar um empréstimo, pergunte:

1. TAXA E CUSTOS
   - Qual a taxa fixa vs. ajustável?
   - Quantos pontos de origination?
   - APR completo (inclui todas as taxas)?

2. REQUISITOS
   - Aceitam ITIN ou só SSN?
   - Qual o DSCR mínimo exigido?
   - Quantas reservas exigem (meses)?

3. RESTRIÇÕES
   - Há prepayment penalty? Por quanto tempo?
   - Permite cash-out refinance?
   - Permite short-term rental?

4. PRAZOS
   - Quanto tempo até o fechamento?
   - Quanto tempo leva o pre-approval?
```

### Calculadora de Pagamento Mensal

```
Para uma propriedade de $400.000 com DSCR loan:

Preço: $400.000
Down payment (30%): $120.000
Valor do empréstimo: $280.000
Taxa: 8%
Prazo: 30 anos

Pagamento mensal (P&I): $2.055
Property tax (1%): $333/mês
Seguro: $333/mês
Total PITI: $2.721/mês

Aluguel necessário para DSCR 1,25:
$2.721 x 1,25 = $3.401/mês em aluguel

Se a propriedade aluga por $3.500/mês:
DSCR = $3.500 / $2.721 = 1,29 ✓
```

## 5. Revisar os Impostos

### Impostos que Afetam seu Investimento

| Imposto | Quando | Taxa | Quem |
|---------|--------|------|------|
| **Property tax** | Anual | 0,8-2,2% (por estado) | Todos os proprietários |
| **Income tax (aluguéis)** | Anual (1040-NR) | 10-37% | Estrangeiros com aluguéis |
| **FIRPTA** | Ao vender | 15% retenção | Estrangeiros |
| **Capital gains** | Ao vender | 0-20% | Todos |
| **Depreciation recapture** | Ao vender | Até 25% | Todos |
| **Estate tax** | Ao falecer | 18-40% | Estrangeiros > $60K |

### Perguntas Fiscais Chave

```
Antes de investir, revise com seu CPA:

1. ESTRUTURA FISCAL
   - Devo apresentar W-8ECI para evitar retenção de 30%?
   - Quais deduções aplicam (depreciação, repairs, interest)?
   - Devo pagar estimated taxes trimestrais?

2. TRATADO FISCAL
   - Meu país tem tratado com os EUA?
   - O tratado reduz FIRPTA ou capital gains?
   - Posso creditar impostos pagos nos EUA?

3. ESTATE TAX
   - Meus ativos nos EUA excedem $60.000?
   - Preciso de holding internacional ou trust?
   - O que acontece com meus herdeiros?

4. PLANEJAMENTO
   - Devo fazer cost segregation?
   - É melhor 1031 exchange ao vender?
   - Quando devo começar a declarar?
```

## 6. Revisar os Seguros

### Seguros Mínimos Exigidos

| Tipo de Seguro | Obrigatório | Custo Anual |
|---------------|------------|-------------|
| **Property insurance (moradia)** | ✅ Sim (se houver hipoteca) | $1.500-8.000 |
| **Hurricane/windstorm** | ✅ Sim (em zonas de risco) | $1.000-5.000 adicional |
| **Flood insurance** | ⚠️ Se estiver em flood zone (FEMA) | $400-2.000 |
| **Liability insurance** | ✅ Muito recomendado | $500-2.000 |
| **Umbrella policy** | ⚠️ Recomendado (2+ propriedades) | $300-1.000 |

### Cobertura Recomendada por Tipo de Propriedade

```
CASA UNIFAMILIAR (LTR):
- Property insurance: Valor de reconstrução
- Liability: $1-2M
- Dedutível de furacão: 2% (não mais de 5%)

CONDOMÍNIO:
- Walls-in coverage (interior)
- Master policy do HOA cobre exterior
- Liability: $500K-1M
- Loss assessment coverage

SHORT-TERM RENTAL (Airbnb):
- Property insurance: Cobertura especial para STR
- Liability: $2M+ (maior risco)
- Loss of income: Cobre cancelamentos
- Furacão: Obrigatório

PROPRIEDADE COMERCIAL:
- Property insurance: Valor de reconstrução
- Liability: $2-5M
- Business interruption
- Workers comp (se tiver funcionários)
```

```javascript
// Stripe: Automatize o pagamento de seguros
// para que sua apólice nunca vença

const insuranceSubscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}',
  items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Property Insurance - Florida LLC',
        description: 'Apólice anual paga mensalmente',
      },
      unit_amount: 35000, // $350/mês
      recurring: { interval: 'month' },
    },
  }],
});
```

## 7. Revisar as Restrições Legais Locais

### O que Você Deve Investigar

| Restrição | Onde Verificar | Por Que é Importante |
|-----------|---------------|---------------------|
| **Zoneamento (zoning)** | County zoning department | Determina uso permitido |
| **Restrições de HOA** | CC&Rs da comunidade | Pode proibir aluguéis |
| **Leis de short-term rental** | Ordenanças da cidade/condado | Algumas áreas proíbem Airbnb |
| **Rent control** | Leis locais | Limita aumentos de aluguel |
| **Business license** | City/county | Exigido para alugar |
| **Homestead exemption** | Property appraiser | Só para residência, não investimento |

### Exemplo: Restrições de Short-Term Rental na Flórida

```
CIDADES COM RESTRIÇÕES NA FLÓRIDA 2026:

Miami Beach:
- Proibido em zonas residenciais (menos de 6 meses + 1 dia)
- Multas de até $20.000 por infração
- Registro obrigatório

Orlando:
- Permitido com registro
- Limite de 2 unidades por proprietário em áreas residenciais
- Tourist Development Tax: 6%

Tampa:
- Permitido com registro
- Sem limite de dias
- Inspeção de segurança exigida

Fort Lauderdale:
- Permitido apenas em zonas comerciais
- Proibido na maioria das zonas residenciais

Key West:
- Mínimo de 28 dias de aluguel por estadia
- Registro obrigatório
- Limite de licenças
```

## 8. Revisar o Property Management

### Autogerenciar ou Contratar?

| Aspecto | Autogestão | Property Manager |
|---------|-----------|-----------------|
| **Custo** | 0% (seu tempo) | 8-12% do aluguel |
| **Controle** | Total | Limitado |
| **Tempo** | 5-15 horas/semana | ~1 hora/semana |
| **Idioma** | Precisa de inglês | Eles gerenciam |
| **Disponibilidade** | 24/7 (emergências) | 24/7 (profissional) |
| **Inquilinos** | Você os encontra | Eles encontram |
| **Manutenção** | Você coordena | Eles coordenam |
| **Legal** | Você gerencia despejos | Eles têm advogados |

### Perguntas para um Property Manager

```
Antes de contratar um property manager, pergunte:

EXPERIÊNCIA:
- Quantos anos de mercado?
- Quantas propriedades administram?
- Trabalham com proprietários estrangeiros?
- Têm licença de real estate na Flórida?

SERVIÇOS:
- Inclui marketing e listing?
- Como selecionam inquilinos? (background check, credit check)
- Como lidam com reparos de emergência?
- Com que frequência inspecionam a propriedade?

CUSTOS:
- Qual a porcentagem de administração?
- Cobram leasing fee (1 mês de aluguel)?
- Cobram markup em reparos?
- Há taxa por despejo?

RELATÓRIOS:
- Fornecem relatórios mensais de receitas/despesas?
- Integram com Stripe para cobranças?
- Fornecem documentação para impostos?
```

## 9. Revisar a Estratégia de Saída

### Opções de Saída

| Estratégia | Prazo | Impostos | Complexidade |
|-----------|-------|---------|-------------|
| **Vender no mercado** | 3-12 meses | FIRPTA + capital gains | Baixa |
| **1031 Exchange** | 45-180 dias | Diferir impostos | Média |
| **Vender a LLC (membership interest)** | 30-60 dias | Potencialmente sem FIRPTA | Alta |
| **Refinanciar (cash-out)** | 30-60 dias | Sem imposto (não é venda) | Baixa |
| **Alugar e manter (buy & hold)** | 5+ anos | Depreciação + valorização | Baixa |
| **Doar a herdeiros** | Ao falecer | Estate tax | Alta |

### Perguntas de Saída

```
Antes de comprar, pergunte-se:

1. Quando planeja vender?
   - Menos de 2 anos: melhor flip ou hard money
   - 2-5 anos: DSCR com plano de refinanciar
   - 5+ anos: buy & hold com depreciação

2. Como FIRPTA afeta sua saída?
   - 15% retido sobre preço de venda total
   - Pode solicitar redução (8288-B)
   - 1031 Exchange difere o imposto

3. Venderá a propriedade ou a LLC?
   - Vender propriedade: FIRPTA 15%
   - Vender LLC: pode não aplicar FIRPTA
   - Vender holding: fora de jurisdição US

4. Como a venda afeta sua estrutura?
   - Se vender uma LLC, estrutura continua intacta
   - Se vender todas, pode dissolver a estrutura
   - Se mudar de estado, precisa de nova LLC
```

## 10. Revisar a Documentação e o Cronograma

### Documentos que Precisa Ter

```
DOCUMENTAÇÃO PESSOAL:
- [ ] Passaporte válido
- [ ] ITIN ou SSN (carta do IRS)
- [ ] Comprovante de residência em seu país
- [ ] Referências bancárias
- [ ] Comprovante de renda (se aplicável)

DOCUMENTAÇÃO DA ESTRUTURA:
- [ ] Certificado de formação da LLC
- [ ] EIN do IRS (carta CP 575)
- [ ] Operating Agreement da LLC
- [ ] Registered Agent agreement
- [ ] Conta bancária da LLC
- [ ] Conta Stripe configurada

DOCUMENTAÇÃO PARA COMPRA:
- [ ] Pre-approval letter do credor
- [ ] Bank statements (fundos disponíveis)
- [ ] Prova de origem dos fundos
- [ ] Contrato de compra revisado por advogado

DOCUMENTAÇÃO FISCAL:
- [ ] W-7 (solicitação de ITIN)
- [ ] W-8ECI (para o banco/credor)
- [ ] W-9 da LLC
- [ ] Tratado fiscal (se aplicável)
```

### Cronograma Típico para um Estrangeiro

```
MÊS 1: PREPARAÇÃO
- Semana 1-2: Definir orçamento e estratégia
- Semana 2-3: Formar LLC e obter EIN
- Semana 3-4: Solicitar ITIN (se não tiver)
- Semana 4: Abrir conta bancária

MÊS 2: BUSCA E PRE-APPROVAL
- Semana 1-2: Conseguir pre-approval do credor
- Semana 2-3: Buscar propriedades com corretor local
- Semana 3-4: Visitar propriedades (virtual ou presencial)

MÊS 3: OFERTA E DEVIDA DILIGÊNCIA
- Semana 1: Fazer oferta
- Semana 2: Due diligence (inspeção, título, HOA docs)
- Semana 3: Finalizar financiamento
- Semana 4: Fechar compra

MÊS 4: PÓS-FECHAMENTO
- Semana 1: Configurar Stripe
- Semana 2: Contratar property manager (se aplicável)
- Semana 3: Listar propriedade para aluguel
- Semana 4: Primeiros inquilinos
```

## 11. Perguntas Frequentes Pré-Investimento

### Quanto dinheiro preciso para começar?

Mínimo $100.000-150.000 para uma propriedade de $400.000 (25-30% down + closing costs + reservas). Se tiver menos, considere mercados mais baratos (Midwest, interior do Texas).

### Posso investir sem visitar os EUA?

Sim, é comum. Pode fazer due diligence virtual (video tour, inspetor local, corretor de confiança). Mas é recomendável visitar pelo menos uma vez.

### Quanto tempo leva todo o processo?

2-4 meses desde decidir investir até fechar a compra. Formar LLC e ITIN leva 4-8 semanas. A busca e fechamento levam outras 4-8 semanas.

### O que acontece se não falo inglês?

Precisa de uma equipe que fale seu idioma: corretor bilíngue, CPA que fale português/espanhol, property manager bilíngue. Muitos profissionais na Flórida atendem investidores latinos.

### Stripe é obrigatório para cobrar aluguéis?

Não é obrigatório, mas é a melhor opção: aceita pagamentos de inquilinos automaticamente, gera relatórios para impostos, integra com property management, e evita misturar aluguéis com finanças pessoais.

### Qual é o erro mais comum dos iniciantes?

Comprar sem estrutura legal (sem LLC), sem entender FIRPTA, sem considerar estate tax, e sem ter reservas suficientes para imprevistos (reparos, vacância, furacões).

## 12. Checklist Definitiva Pré-Investimento

### FASE 1: PLANEJAMENTO (1 mês antes)
- [ ] Definir orçamento total (compra + custos + reservas)
- [ ] Escolher estratégia (LTR, STR, flip, buy & hold)
- [ ] Selecionar estado e cidade alvo
- [ ] Pesquisar impostos do estado (property tax, income tax)
- [ ] Consultar com CPA internacional
- [ ] Consultar com advogado imobiliário

### FASE 2: ESTRUTURA LEGAL (2 meses antes)
- [ ] Formar LLC no estado de investimento
- [ ] Obter EIN do IRS (CP 575)
- [ ] Solicitar ITIN (W-7) se não tiver
- [ ] Abrir conta bancária US em nome da LLC
- [ ] Configurar Stripe na LLC
- [ ] Avaliar necessidade de holding internacional
- [ ] Avaliar necessidade de trust

### FASE 3: FINANCIAMENTO (6 semanas antes)
- [ ] Solicitar pre-approval de 2-3 credores
- [ ] Comparar taxas, pontos e prepayment penalties
- [ ] Ter fundos prontos em conta US
- [ ] Preparar documentação de origem dos fundos

### FASE 4: BUSCA E DEVIDA DILIGÊNCIA (3-4 semanas)
- [ ] Contratar corretor imobiliário local
- [ ] Verificar zoneamento e restrições de HOA
- [ ] Solicitar inspeção da propriedade
- [ ] Verificar flood zone (mapa FEMA)
- [ ] Cotar seguros (property, hurricane, flood, liability)
- [ ] Verificar demanda de aluguel na zona
- [ ] Calcular DSCR projetado

### FASE 5: FECHAMENTO (1-2 semanas)
- [ ] Revisar contrato de compra com advogado
- [ ] Confirmar funding do credor
- [ ] Transferir fundos para título/escrow
- [ ] Assinar documentos de fechamento
- [ ] Registrar LLC como proprietária
- [ ] Ativar Stripe para cobrar aluguéis

### FASE 6: PÓS-FECHAMENTO (primeiro mês)
- [ ] Contratar property manager (ou configurar autogestão)
- [ ] Listar propriedade para aluguel
- [ ] Configurar pagamento automático da hipoteca
- [ ] Configurar pagamento automático de seguros
- [ ] Apresentar W-8ECI para evitar retenção de 30%
- [ ] Agendar lembrete de impostos (1040-NR + Schedule E)

## Conclusão

**Revisar todos estes fatores antes de investir nos EUA** marca a diferença entre um investimento bem-sucedido e uma lição cara. Um investidor preparado revisa sua estrutura legal, o financiamento disponível, os impostos aplicáveis, os seguros necessários, as restrições locais, o property management, a estratégia de saída, e tem toda a documentação em ordem.

O investimento em real estate nos EUA oferece oportunidades incríveis para estrangeiros, mas o sucesso está nos detalhes que você revisa antes de comprometer seu capital. Tome o tempo necessário para avaliar cada ponto deste guia.

Na **Sotomayor Consulting International**, acompanhamos você em cada passo do seu investimento: desde o planejamento inicial e estrutura legal até a configuração de Stripe, conexão com credores, seleção de propriedades e assessoria contínua. Contate-nos para uma consultoria personalizada.
