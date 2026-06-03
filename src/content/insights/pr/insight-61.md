---
title: "Erros que Fazem o Stripe Rejeitar Contas: Guia 2026"
description: "Erros que fazem o Stripe rejeitar contas"
cardImage: "@/images/insights/blog-2.avif"
cardImageAlt: "Tela de rejeição do Stripe com lista de erros comuns e documentos"
---

**Stripe** rejeita aproximadamente 30% das contas que tentam se registrar. A maioria dessas rejeições ocorre por erros evitáveis: documentos ilegíveis, informações inconsistentes, sites incompletos ou negócios não suportados.

Neste guia, explicamos **os erros mais comuns que fazem o Stripe rejeitar contas** em 2026 e como evitá-los para ser aprovado em menos de 48 horas.

## 1. Erro #1: Documento de Identidade Ilegível ou Inválido

### O Erro Mais Frequente (30% das rejeições)

| Problema | Descrição |
|----------|-----------|
| **Foto borrada** | A imagem do documento não tem resolução suficiente |
| **Reflexo ou brilho** | O flash ou a luz criam reflexos que escondem informações |
| **Documento cortado** | Faltam bordas, cantos ou código de barras |
| **Documento vencido** | A data de validade expirou |
| **Documento errado** | Não é um documento de identidade oficial |

### Como Evitar

| Boa Prática | Como Fazer |
|-------------|------------|
| **Use scanner** | Digitalize o documento a 300 DPI mínimo |
| **Boa iluminação** | Luz natural difusa, sem flash direto |
| **Documento completo** | Mostre os 4 cantos e o código de barras |
| **Documento válido** | Verifique a data de validade antes de fotografar |
| **Formato aceito** | Stripe aceita: passaporte, RG, CNH, carteira de identidade |

> **Dica:** Se fotografar com o celular, apoie o documento sobre uma superfície escura e use luz natural. Evite o flash.

## 2. Erro #2: Informação Inconsistente

### O Segundo Erro Mais Comum (25% das rejeições)

Stripe compara automaticamente as informações que você insere com seus documentos:

| Campo Inconsistente | Exemplo de Erro |
|--------------------|-----------------|
| **Nome** | "João Silva" no formulário, "Joao Silva" no documento (sem acento) |
| **Endereço** | "Rua 123" no cadastro, "Rua 123, Apto 4" no comprovante |
| **Data de nascimento** | 15/03/1985 vs 15-03-1985 (formato diferente) |
| **Nome da empresa** | "Sotomayor Consulting LLC" vs "Sotomayor Consulting LLC." |

### Como Evitar

| Regra | Explicação |
|-------|------------|
| **Cópia exata** | Digite os dados exatamente como aparecem em seus documentos |
| **Mesmos acentos** | Respeite acentos, hífens e espaços |
| **Endereço idêntico** | O comprovante de residência deve mostrar o endereço cadastrado |
| **Revise 3 vezes** | Antes de enviar, compare formulário vs documentos |
| **Consistência entre docs** | Todos os documentos devem mostrar a mesma informação |

## 3. Erro #3: Site Incompleto ou Inadequado

### Terceira Causa de Rejeição (20%)

Stripe revisa seu site como parte do processo de aprovação:

| Elemento Ausente | Percentual de Sites que Omitem |
|------------------|-------------------------------|
| **Política de privacidade** | 35% |
| **Termos e condições** | 40% |
| **Política de reembolso** | 50% |
| **Informações de contato** | 25% |
| **Descrição do produto/serviço** | 15% |

### Checklist do Site

- [ ] Página principal funcionando (não "em construção")
- [ ] Política de privacidade visível
- [ ] Termos e condições claros
- [ ] Política de reembolso definida
- [ ] Informações de contato (email, telefone ou formulário)
- [ ] Descrição clara do produto ou serviço
- [ ] Certificado SSL/HTTPS ativo
- [ ] Design profissional e coerente

### Requisitos Mínimos por Tipo de Negócio

| Tipo de Negócio | Páginas Mínimas Requeridas |
|----------------|---------------------------|
| **E-commerce** | Início, Produtos, Carrinho, Checkout, Políticas, Contato |
| **SaaS** | Landing page, Preços, Funcionalidades, Termos, Privacidade |
| **Consultoria** | Início, Serviços, Sobre, Contato, Termos |
| **Cursos online** | Landing, Conteúdo, Preços, Políticas, Contato |

## 4. Erro #4: Negócio Não Suportado ou Restrito

### Causa de Rejeição em 15% dos Casos

Stripe tem uma lista de negócios proibidos e restritos:

| Categoria | Exemplos |
|-----------|----------|
| **Proibidos sempre** | Drogas, armas, apostas não regulamentadas, pornografia, criptomoedas (certos casos) |
| **Alto risco** | CBD, suplementos, viagens, saúde, eventos, doações |
| **Exigem licença** | Serviços financeiros, consultoria jurídica, saúde regulamentada |
| **Restritos por país** | O que é permitido em um país pode ser proibido em outro |

### Como Verificar se seu Negócio é Aceito

1. Revise a lista oficial de negócios proibidos do Stripe
2. Se seu negócio está na zona cinzenta, contate o suporte do Stripe antes de se registrar
3. Considere alternativas como PayPal, Mercado Pago ou Square se Stripe não aceitar seu negócio

### Negócios que o Stripe Aceita (Baixo Risco)

| Tipo de Negócio | Probabilidade de Aprovação |
|----------------|---------------------------|
| **E-commerce geral** | 95% |
| **SaaS / Software** | 95% |
| **Consultoria / Serviços** | 90% |
| **Educação / Cursos** | 95% |
| **Assinaturas / Membresias** | 90% |

## 5. Erro #5: País ou Localização Não Suportada

### Causa de Rejeição em 10% dos Casos

Stripe está disponível em 45+ países, mas muitos países ainda não são suportados:

| Região | Situação |
|--------|----------|
| **América Latina** | Disponível no Brasil, México, Colômbia, Chile, Argentina, Peru |
| **Latam não suportada** | Venezuela, Bolívia, Paraguai, Nicarágua, Honduras, El Salvador |
| **Europa** | Disponível na maioria dos países da UE + Reino Unido, Suíça, Noruega |
| **Ásia** | Singapura, Japão, Hong Kong, Malásia, Filipinas, Tailândia |
| **África** | África do Sul, Nigéria, Quênia, Egito, Gana, Costa do Marfim |

### Soluções se seu País Não For Suportado

| Solução | Descrição | Complexidade |
|---------|-----------|--------------|
| **LLC nos EUA** | Constitua uma empresa nos EUA e abra Stripe com ela | Média |
| **Stripe Atlas** | Stripe ajuda você a constituir uma empresa em Delaware | Baixa |
| **Plataforma alternativa** | Use PayPal, Mercado Pago, Payoneer ou outros | Baixa |
| **Parceiro Stripe** | Processadores que usam Stripe por baixo | Média |

> **Solução recomendada:** Constituir uma LLC nos EUA (Wyoming, Delaware ou Novo México) é a forma mais confiável de acessar o Stripe de qualquer país.

## 6. Erro #6: Informação Bancária Incorreta

### Causas Comuns

| Erro | Problema |
|------|----------|
| **Conta poupança** | Stripe requer conta corrente na maioria dos países |
| **Titular diferente** | O nome da conta não coincide com o do Stripe |
| **País incorreto** | A conta bancária deve estar no mesmo país que a conta Stripe |
| **Número de conta inválido** | Erro ao digitar o número da conta ou agência |

### Soluções

| Problema | Solução |
|----------|---------|
| **Conta poupança** | Abra uma conta corrente em seu banco |
| **Titular diferente** | A conta deve estar em nome do titular do Stripe (pessoa ou empresa) |
| **País incorreto** | Abra uma conta no mesmo país onde registrou o Stripe |
| **Número inválido** | Verifique o número com seu banco antes de digitá-lo |

## 7. Erro #7: Múltiplas Contas ou Suspeita de Fraude

### Comportamentos que Ativam Alertas

| Ação | Risco |
|------|-------|
| **Criar múltiplas contas** | Stripe pode marcar como atividade fraudulenta |
| **VPN ou proxy ao se registrar** | Stripe detecta localizações falsas |
| **IP de país não suportado** | Tentativa de registro de um país bloqueado |
| **Dados falsos** | Informações que não correspondem à realidade |

### Como Evitar

- Crie uma única conta Stripe
- Não use VPN durante o registro
- Use seu endereço real e documentos válidos
- Se sua conta for rejeitada, recorra em vez de criar uma nova

## 8. Erro #8: Não Completar a Verificação de Identidade

### O Erro Que Mais Custa Tempo

Muitos usuários iniciam o registro mas não completam a verificação de identidade:

| Etapa de Verificação | O que o Stripe Faz |
|---------------------|-------------------|
| **Selfie ou vídeo** | Confirma que você é a pessoa do documento |
| **Documento ao vivo** | Tira uma foto do documento em tempo real |
| **Perguntas de segurança** | Verifica informações pessoais adicionais |

### Dicas para Passar na Verificação

1. **Iluminação:** Luz natural ou ambiente bem iluminado
2. **Fundo neutro:** Parede lisa, sem distrações
3. **Documento visível:** Sem reflexos, mostrando os 4 cantos
4. **Rosto descoberto:** Sem óculos escuros, boné ou máscara
5. **Estabilidade:** Não mova o celular durante a captura

## 9. Erro #9: Não Responder às Solicitações do Stripe

### Consequências de Ignorar os Emails

Stripe envia emails durante o processo de revisão:

| Email do Stripe | Se Você Não Responder |
|-----------------|----------------------|
| "Precisamos de documentos adicionais" | A conta fica pendente indefinidamente |
| "Verifique suas informações" | Stripe pode rejeitar a conta |
| "Atualize seu método de pagamento" | Os pagamentos não serão processados |

### Como se Manter Atualizado

- Verifique sua caixa de entrada (e spam) regularmente
- Responda em menos de 48 horas
- Mantenha o dashboard do Stripe aberto durante o processo
- Adicione o email do Stripe aos seus contatos

## 10. Checklist de Pré-Registro

### Antes de Criar sua Conta Stripe

- [ ] Verifique se o Stripe está disponível em seu país
- [ ] Se não, considere constituir uma LLC nos EUA
- [ ] Prepare seu documento de identidade válido
- [ ] Prepare um comprovante de residência (menos de 3 meses)
- [ ] Tenha um site completo com políticas
- [ ] Defina as informações do seu negócio
- [ ] Tenha uma conta bancária pronta (corrente, em seu nome)
- [ ] Verifique se seu negócio é permitido pelo Stripe

### Durante o Registro

- [ ] Insira os dados exatamente como nos documentos
- [ ] Use o mesmo nome, endereço e data de nascimento
- [ ] Escolha a categoria de negócio correta
- [ ] Complete a verificação de identidade no mesmo dia
- [ ] Verifique os emails do Stripe nas 48 horas seguintes

### Erros Específicos por País

| País | Erro Comum | Solução |
|------|------------|---------|
| **Brasil** | CPF não confere com o nome | Verifique dados na Receita Federal |
| **México** | INE com endereço desatualizado | Use passaporte ou atualize seu INE |
| **Colômbia** | Cédula digitalizada incompleta | Digitalize ambos os lados |
| **Argentina** | DNI ilegível por design | Use passaporte como alternativa |
| **EUA (LLC)** | EIN não verificado | Aguarde 24-48 horas após obtê-lo |

## Conclusão

**Os erros que fazem o Stripe rejeitar contas** são quase sempre evitáveis. Documentos claros, informações consistentes e um site profissional são os três pilares para uma aprovação rápida. A maioria das rejeições ocorre por descuidos que você pode evitar com preparação adequada.

Na **Sotomayor Consulting International**, ajudamos empreendedores a preparar sua documentação para o Stripe, incluindo a constituição de empresas nos EUA para acessar o Stripe de qualquer país. Entre em contato para uma consultoria personalizada.
