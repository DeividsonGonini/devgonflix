//importando React
import React from 'react';
//importando a Logo
import Logo from '../../assets/img/Logo.png';
//importando o CSS
import './Menu.css'
//importando componente ButtonLink
// import ButtonLink from '../components/ButtonLink';

//import componente Button
import Button from '../Button';

//Criando componente que retorna html
//function com o nome do componente e com letra maiuscula
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                {/* importando imagem da logo */}
                <img className="Logo" src={Logo} alt="DevGonFlix logo" />
            </a>
            {/* criando botao  "novo vídeo" */}
            {/* as="a" => faz a tag button se comportar como uma tag a */}
            <Button as="a" className="ButtonLink" href="/">Novo Vídeo</Button>
        </nav>
    );
}

//Exportando o componente
export default Menu;