import React from 'react';
//import Header from './Header';

import Routes from './routes';
import './global.css';

/**
 * Passo a passo do react:
 * 1: joga o html em tela
 * 2: depois o javaScript executa e preenche o campo <div id="root"></div> com o restante da aplicacao, de forma basica
 * o index.html chama o app.js para executar quando chega na parte do <div id="root"></div> .
 * 
 * Um componente do react nada mais é do que uma função que retorna HTML
 * 
 * JSX = quando o html está integrado dentro do java script, JSX = Java Script Xml
 * 
 * Para usar JavaScript dentro do HTML é só colocar o que se deseja entre chaves
 */
function App() {
  /*const [counter, setCounter] = useState(0); 
                            // o useState inicia a variavel com o valor, essa funcao useState nos retorna um array de
                            // duas posições com [valor, funcaoDeAtualização] essa funcao de atualização sobrepõe o 
                            // valor antigo, com o novo valor da variavel.
  

  function increment(){
    setCounter(counter + 1); //recebe um valor que será o de counter, com isso sobrepõe o valor atual do counter com o novo valor
  }
  */

  return (
    <Routes />
  );
}

export default App;

//<Header title = "Be The Hero" /> // essa é uma forma de se fazer utilizando props
    //outra forma de fazer é utilizando o children e ai você pega tudo que estiver escrito entre a div do componente ex:
    /**
     * <Header>
        Contador: {counter}
      </Header>
      <button onClick = {increment}>Incrementar</button>
     */

