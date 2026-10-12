# Mondrian - Parte 1 

Implementei a composição com base numa grelha proporcional de 800×800 px. Posicionei as linhas estruturais pretas por percentagens exatas para replicar a geometria da obra original, a linha vertical principal a 46% da largura, a horizontal superior a 40% e a intermédia a 64% da altura.

Utilizei o espaço de cor RGB com os pigmentos exatos da obra (vermelho, amarelo, azul e preto). Para o fundo e para os painéis evitei o branco puro (#FFFFFF), optando por tons de creme (#F2F0E9) com variações subtis entre os retângulos para simular a naturalidade da tinta de óleo sobre tela.

Apliquei diferentes espessuras de linha (strokeWeight entre 12 px e 18 px) com extremidades quadradas (strokeCap(SQUARE)), replicando as dimensões exatas das linhas pretas originais.
Todas as posições dos blocos e linhas foram calculadas com base em percentagens das dimensões totais do canvas (width e height). 

O noLoop() foi aplicado no setup() restringindo o processamento gráfico a um único frame inicial, evitando ciclos de renderização contínuos desnecessários e reduzindo a carga computacional.