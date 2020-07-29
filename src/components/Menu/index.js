//importando React
import React from 'react';
//importando a Logo
import Logo from '../../assets/img/Logo.png';
//importando o CSS
import './Menu.css'
//importando componente ButtonLink
// import ButtonLink from '../components/ButtonLink';

//importando o Link para ativação do SPA
import { Link } from 'react-router-dom';

//import componente Button
import Button from '../Button';

//Criando componente que retorna html
//function com o nome do componente e com letra maiuscula
function Menu() {
    return (
        <nav className="Menu">
            {/* tag Link -> igual tag a, mas trabalha com rotas */}
            <Link to="/">
                {/* importando imagem da logo */}
                <img className="Logo" src={Logo} alt="DevGonFlix logo" />
            </Link>
            {/* criando botao  "novo vídeo" */}
            {/* as="a" => faz a tag button se comportar como uma tag a */}
            {/* as={Link} se comporta como um Link e é dinamico */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>
        </nav>
    );
}

//Exportando o componente
export default Menu;