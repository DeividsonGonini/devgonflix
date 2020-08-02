import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// Criado pagina como Componente
function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    // criando State para guardar as Categorias criadas
    const [categorias, setCategorias] = useState([]);

    // criando o State para guardar o texto das categorias
    // nomeDaCategoria = nome que estamos dando para a Categoria/  setNomedaCategoria= função para alterar / useState('Filmes') = Nome inicial
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chava: valor variavel, porde ser nome, descricao, blablabla
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        });
    }
    // função para capturar as mudanças
    function handleChange(infosDoEvento) {
        // const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );
    }

    // useEffect = chamamos quando queremos que algum "efeito colateral aconteça"
    // é uma função que teremos 2 parametros: 1º o que queremos que aconteça / 2º quando queremos que ele aconteça
    useEffect(() => {
        // 1º
        console.log('alo alo Brasil');
        //variavel para armazenar a URL do json com o cadastro de categorias
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:8000/categorias'
            : 'https://devgonflix.herokuapp.com/categorias'
        //função do browser que busca dados
        fetch(URL_TOP)
            //then (entao) => quando bater no backend fazer alguma coisa
            //async - diz que a função pode esperar o await
            .then(async (respostaDoServidor) => {
                //converte a resposta de texto para JSON
                //await para aguardar o processamento dos dados
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })

        // setTimeout(() => {
        //     setCategorias([
        //         // ... serve para manter tudo o que ja tem na lista e apenas acrescentar o novo / categorias é o nome da categoria que setamos na função CadastroCategoria
        //         ...categorias,
        //         {
        //             id: 1,
        //             nome: 'Front End',
        //             descricao: 'Desenvolvimento de Front End',
        //             cor: '#cbd1ff',
        //         },
        //         {
        //             id: 2,
        //             nome: 'Back End',
        //             descricao: 'Desenvolvimento de Back End',
        //             cor: '#cbd1ff',
        //         },
        //     ]);
        // }, 4 * 1000);
    },
        // 2º Array que fala quando quais coisas atualizem queremos que o evento aconteça
        // nesse caso caso ficara vazio para acontecer apenas uma vez (carregar os dados iniciais)
        // se nao tiver esse array vazio, ira ocorrer a cada atualização de qualquer coisa na pagina
        []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.nome}
            </h1>

            {/* onSubmit -> para nao submeter da forma padrao os inputs mantendo o conceito de SPA */}
            <form onSubmit={function handleSubmit(infosDoEvento) {
                // previne que seja inserido o valor Default
                infosDoEvento.preventDefault();
                // setando a Categoria
                setCategorias([
                    // ... serve para manter tudo o que ja tem na lista e apenas acrescentar o novo / categorias é o nome da categoria que setamos na função CadastroCategoria
                    ...categorias,
                    values,
                ]);

                setValues(valoresIniciais);
            }}
            >

                {/* Pegando o nome pelo FormFiel (componente criado) */}
                <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    name="descricao"
                    type="textarea"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    name="cor"
                    type="color"
                    value={values.cor}
                    onChange={handleChange}
                />
                <Button>
                    Cadastrar
        </Button>
            </form>
            {/* Loading fara um timer para quando a pagina carregar, fazer uma ação que ocorre um pouco depois */}
            {categorias.length === 0 && (
                <div>
                    {/* Cargando */}
        Loading...
                </div>
            )}

            <ul>
                {/* indice utilizado para poder duplicar os dados */}
                {categorias.map((categorias) => (
                    <li key={`${categorias.nome}`}>
                        {categorias.nome}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para Home
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
