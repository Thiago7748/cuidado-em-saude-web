# Projeto acadêmico: Cuidado em Saúde

## Contexto

- Curso: Análise e Desenvolvimento de Sistemas (Unisinos).
- Disciplina: Desenvolvimento Web.
- Prazo informado no enunciado: 15/11/2026, às 23h59.
- A possibilidade de entrega individual depende da resposta do professor. Estruturar o projeto para que colegas possam entrar depois.

## Objetivo e escopo

Criar um site pequeno sobre **Cuidado em Saúde**, com uma página inicial e mais três páginas. O foco é demonstrar HTML semântico, CSS básico e uma interação simples em JavaScript. Manter o código legível e fácil de explicar na apresentação.

Usar apenas HTML, CSS e JavaScript executados diretamente pelo navegador. Não introduzir framework, compilação, renderização no servidor, banco de dados ou dependências sem uma decisão explícita do aluno.

## Telas

1. **Início:** imagem de destaque e nome do projeto no cabeçalho; navegação; artigo introdutório à esquerda; `aside` com imagem e conteúdo complementar à direita; chamada para Cuidados.
2. **Cuidados:** texto curto sobre o tema e, logo abaixo, uma chamada para um vídeo do YouTube incorporado na própria página.
3. **Bem-estar:** três conteúdos apresentados um abaixo do outro. Cada conteúdo terá imagem, título e texto breve, visíveis na página. Não há necessidade de abrir outras telas ou expandir cartões.
4. **Autocuidado:** checklist de três cuidados. Os itens e caixas de seleção ficam no HTML. O JavaScript atualiza a contagem de `0 de 3` até `3 de 3` a cada marcação ou desmarcação. Quando os três estiverem marcados, mostra uma mensagem de conclusão. Um botão limpa as marcações e volta a contagem para zero. O checklist é uma reflexão simples sobre a rotina, sem avaliação clínica; não precisa salvar dados depois que a página for fechada.

Os nomes e textos finais dos conteúdos serão definidos antes da implementação de cada página, com fontes adequadas. A página inicial já usa imagens locais e CSS básico; seu texto ainda é provisório. O vídeo, as imagens das demais páginas e o nome do aluno continuam pendentes.

## Estrutura e navegação

- Repetir `header`, `nav`, `main` e `footer` nas quatro páginas.
- No `header`, manter imagem de destaque, nome do projeto e links visíveis para as quatro páginas. O menu hambúrguer fica fora do escopo inicial.
- No `footer`, identificar aluno(s), disciplina e instituição.
- Incluir navegação sequencial ao fim do conteúdo: Início → Cuidados → Bem-estar → Autocuidado. Na página 2, o link para a anterior deve ser identificado como "Voltar ao Início". Na página 3, mostrar links para a anterior, para o Início e para a seguinte. Na página 4, mostrar links para a anterior e para o Início.
- Usar links HTML para mudar de página. Reservar o JavaScript para a interação do checklist.
- A interface inicial terá cores neutras, como nos diagramas atuais; as fotografias serão exibidas em suas cores originais.

## Etapas de trabalho

1. Revisar planejamento, protótipo e UML de casos de uso.
2. Criar o esqueleto HTML das quatro páginas, sem CSS.
3. Aplicar CSS básico e conferir leitura em tela estreita.
4. Implementar o JavaScript do checklist e explicar cada função ao aluno.
5. Inserir conteúdo final, imagens e vídeo com identificação das fontes.
6. Testar links, checklist e vídeo; preparar a entrega e a apresentação.

Avançar uma etapa de cada vez. Não acrescentar funcionalidades ou tecnologias além do escopo combinado sem conversar com o aluno.

## Entrega da disciplina

- Usar GitHub para acompanhar o desenvolvimento, mas entregar o código-fonte em arquivo ZIP: o enunciado não aceita o link do repositório como substituto.
- Incluir protótipo/planejamento e vídeo MP4 de até 8 minutos, com execução e código legível.
- Identificar os integrantes no site e no vídeo. Confirmar composição do grupo e forma de entrega após resposta do professor.
