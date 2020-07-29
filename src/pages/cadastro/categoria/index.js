import React, {useState} from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';

function CadastroCategoria() {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        //chave: nome, descrição, cor ....
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infoDoEvento){
        setValue(
                infoDoEvento.target.getAttribute('name'),
                infoDoEvento.target.value
            );
    }

    return(
        <PageDefault>
            <h1>Cadatro de categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infoDoEvento){
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria" 
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição" 
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                /> 

                <FormField
                    label="Cor" 
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;