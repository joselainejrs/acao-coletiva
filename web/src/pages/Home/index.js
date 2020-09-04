import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import photoImg from '../../assets/images/photo.svg';

import Modal from '../../component/Modal';
import api from '../../services/api';

//css
import './styles.css';
import '../../assets/styles/global.css';


export default function Home(){

        //contagem de apoiadores
        // const [totalApoiadores, setTotalApoiadores] = useState(0);

        // useEffect(() => {
        //     api.get('apoiadores').then(response =>{

        //         return response.json(setTotalApoiadores);
        //  })
        // }, [])

        //modal
        const [isModalVisible, setIsModalVisible] = useState(false);

        return(
            <div id="container">
                <header>
                    <Link to="/list">Apoiadores</Link>
                    <img src={logoImg} alt="Logo"/>
                </header>

                <main>
                    <div className="content">
                        <section>
                            <img src={photoImg} alt=" Ação Coletiva"  align="center"  className="coletiva"/>
                        </section>
                        <span></span>
                        <section>
                            <h1 className="txt-titulo">Ação Coletiva</h1>
                            <p className="description">
                                Diga não, a todos as formas de discriminação. Você pode mudar o mundo!
                            </p>

                            <button 
                                onClick={() => setIsModalVisible(true)}
                                type="submit" 
                                className="btnHome"
                            >
                                Seja um Apoiador
                            </button>
                            {isModalVisible ? <Modal  onClose={() => setIsModalVisible(false)} /> : null}

                            <div>
                                <p className="total">
                                    Total de apoiadores {1}
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
