import React from 'react'; // Variáveis sempre com letra maiuscula

/**
 * Quando for ter o comportamento como container, basta recever as variáveis
 * como parâmetro no objeto (children é uma variável padrão dentro do React)
 */

/**
 * Childen é o conteúdo filho, title é um atributo passado no tag.
 * Variáveis para serem utilizadas no JSX sempre chaves ({}), e isso inclui funções,
 * variaveis globais. Outro ponto é que o React possui a característica de ser imutável,
 * logo seus elementos só podem ser alterados por objetos encapsulados do próprio React
 */

/**
 * Por padrão, o return de um componente deve ser sempre emcapsulado dentro de apenas
 * uma tag jsx, retornando sempre um único elemento JSX
 */

export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
