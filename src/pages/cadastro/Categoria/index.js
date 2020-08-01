import React, { useState } from 'react';
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
