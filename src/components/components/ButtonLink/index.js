import React from 'react'


//Criando componente que retorna html
//function com o nome do componente e com letra maiuscula
function ButtonLink(props) {
    //props=> {className: "o que algem passar", href:"/"} =  objeto que traz varias coisas que vamos pegar do componente
    console.log(props); //children do React pega o conteudo da Tag que esta sendo usada, nesse caso Novo Vídeo
    return (
        // props. é para pegar o valor setado onde o componente sera usado
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

//Exportando o componente
export default ButtonLink;