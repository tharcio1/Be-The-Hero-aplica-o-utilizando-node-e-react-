import React from 'react';

export default function Header(props){
    return(
        //caso estivessemos usando o title seria <h1>{props.title}</h1>
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}

/**
 * caso quisessemos em vez de receber todas as propriedades em uma unica variavel podemos dividir essas propriedades
 * nos parametros e receber uma unica propriedade por exemplo da seguinte forma:
 * no lugar de props recebemos apenas o children por exemplo
 * export default function Header(children){
    return(
        //caso estivessemos usando o title seria <h1>{props.title}</h1>
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}
 */