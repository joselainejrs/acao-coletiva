import React, {useState} from 'react';

import api from '../../services/api'

//css
import './styles.css';
import '../../assets/styles/global.css';

const Modal = ({ onClose = () => {} } ) => {

    //dados pessoais
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');

    //endereco
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    async function handleCadastro(){

        api.post('data', {
            nome,
            sobrenome,
            cpf,
            data_nascimento, 
            endereco,
            cep,
            numero,
            complemento,
            cidade,
            estado
        }).then(() =>{
            alert('Cadastro realizado com sucesso!')

        }).catch(() => {
            alert('Erro no cadastro, verifique os dados!')
        });
    }

    

  return(
      <div id="modal">
        <div id="page-modal">

            <button 
                onClick={onClose}
                type="submit"
                className="btnclose"
            >
                X
            </button>

            <div id="container">

                <form onSubmit={handleCadastro}>
                    <h1 className="text-modal">Cadastro</h1>

                    <input 
                        type="text" 
                        name="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome"
                        className="input-dados"
                        required
                    />

                    <input 
                        type="text"
                        name="sobrenome" 
                        value={sobrenome}                      
                        onChange={e => setSobrenome(e.target.value)}
                        placeholder="Sobrenome"
                        className="input-dados"
                        required
                    />

                    <input 
                        type="text" 
                        name="cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        placeholder="CPF" 
                        className="input-dados"
                        required
                    />

                    <input 
                        type="text" 
                        name="data_nascimento"
                        value={data_nascimento}
                        onChange={e => setData_nascimento(e.target.value)}
                        placeholder="Data de Nascimento"
                        className="input-dados"
                        required
                    />

                <h3>Informe seu endereço</h3>

                    <input 
                        type="text" 
                        name="endereco"
                        value={endereco} 
                        onChange={e => setEndereco(e.target.value)}
                        placeholder="Endereço"
                        className="input-d-e"
                        required
                    />

                    <input 
                        type="text" 
                        name="numero"
                        value={numero} 
                        onChange={e => setNumero(e.target.value)}
                        placeholder="Nº"
                        className="input-dados"
                        required
                    />

                    <input 
                        type="text" 
                        name="complemento"
                        value={complemento} 
                        onChange={e => setComplemento(e.target.value)}
                        placeholder="Complemento"
                        className="input-dados"
                        required
                    />

                    <input 
                        type="text" 
                        name="cep"
                        value={cep} 
                        onChange={e => setCep(e.target.value)}
                        placeholder="CEP"
                        className="input-d-e-c"
                        required
                    />

                    <input 
                        type="text" 
                        name="cidade"
                        value={cidade} 
                        onChange={e => setCidade(e.target.value)}
                        placeholder="Cidade"
                        className="input-d-e-c"
                        required
                    />

                    <input 
                        type="text"
                        name="estado" 
                        value={estado}
                        onChange={e => setEstado(e.target.value)} 
                        placeholder="Estado"
                        className="input-d-e-c"
                        required
                    />

                    <button 
                        type="submit"
                        className="btnModal"
                        >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal;