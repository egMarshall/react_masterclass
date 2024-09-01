# React MasterClass RocketSeat

## Como funciona a renderização das páginas

**Render**

Renderização (Mostrar em tela): qualquer mudança no estado de um componente, gerará uma nova renderização dele.

**Algoritmo de reconciliação**

O React utiliza do algorítmo de reconciliação para decidir o que deve ser renderizado na tela. Enquanto as funções antes do return sao todas executadas a cada render, o HTML é renderizado apenas quando o estado do componente é alterado.

1. Cria em memória a nova versão do HTML do componente;
2. Compara com a nova versão do HTML com a versão anterior (Diff);
3. Aplica as operações javascript para alterar somente o necessário.

**Fluxo de renderização:**

1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado;
2. Toda vez que o seu componente PAI renderizar;
3. Toda vez que alguma das suas propriedades mudarem.

### Diferença do forEach para o map

1. Ambos são métodos de iteração de arrays
2. forEach: não retorna nada
3. map: retorna um novo array

### Contexto no react:

É uma forma de compartilhar informações entre componentes sem precisar passar props manualmente entre eles (prop drilling).
