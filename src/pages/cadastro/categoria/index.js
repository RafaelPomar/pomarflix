import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return(
        <PageDefault>
            <h1>Cadatro de categoria</h1>

            <form>
                <label>
                    Nome categoria:
                    <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to='/'>
                Ir para home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;