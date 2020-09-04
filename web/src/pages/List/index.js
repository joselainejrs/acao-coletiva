import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg';
import arrowImg from '../../assets/icon/Arrow.svg';

//css
import './styles.css';
import '../../assets/styles/global.css';



export default function List(){
        const [datas, setDatas] = useState([]);

        useEffect(() => {
           api.get('data').then(response =>{
                
            setDatas(response.data);
            })
        }, [datas])

    

        return(
            <div id="page-list">
                <header>
                    <Link to="/"><img src={arrowImg} alt=""/></Link>
                    <img src={logoImg} alt="Logo"/>
                </header>

                <main>
                   <div className="content">
                        <h1 className="text">Apoiadores</h1>
                        <p className="description">
                            Conheça os apoiadores e faça partes deles
                        </p>

                        <table>
                        <tr>
                            <th>Nomes</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                            <th>Endereço</th>
                        </tr>
                        
                        {datas.map( data => (
                            <tr key={data.id}>
                                <td>{data.nome} {data.sobrenome}</td>
                                <td>{data.cpf}</td>
                                <td>{data.data_nascimento}</td>
                                <td>{data.endereco}, {data.numero} {data.complemento}, {data.cidade} - {data.estado} - {data.cep}</td>
                            </tr>
                        ))}                        
                        </table>
                   </div>
                </main>
            </div>
        )
    }

