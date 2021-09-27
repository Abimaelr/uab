/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../assets/css/podcast.css'
import SpecialTitle from '../Components/SpecialTitle';
import Cover from '../Components/Cover';

function Podcast() {
    useEffect(() => {
        window.scrollTo(0, 0);

      }, []);
    return (<>
            <Cover />
        <div id="podcast">
            <Container >
            <a id="content"/>
                <SpecialTitle title="Podcast" />

                {/* <h3>1° DIA</h3> */}
                {/* <Row>
                    <div className="audio">
                        <h4>Educação emocional: Um novo paradigma pedagógico</h4>
                        <h5>Júnior Fideles</h5>
                        <iframe
                            className="Audio Player"
                            title="Palestra Junior Fideles"
                            frameborder="0"
                            // width="400"
                            // height="200"
                            src="https://drive.google.com/file/d/1tKZnqYvAxDjDfrriSFdH7Npl_6bFcO9z/preview">
                        </iframe>
                    </div>
                 
                </Row> */}
                <hr />
                {/* <h3>2° DIA</h3> */}
                <hr />
                <Row>
                {/* <div className="audio">
                        <h4>O PAPEL DA EDUCAÇÃO E O USO DAS TECNOLOGIAS DE MANEIRA CRÍTICA E REFLEXIVA NA EAD</h4>
                        <h5>Profa. Daniele Dias</h5>
                        <iframe
                            className="Audio Player"
                            title="Palestra Junior Fideles"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1tKZnqYvAxDjDfrriSFdH7Npl_6bFcO9z/preview">
                        </iframe>
                    </div> */}
                    <div className="audio">
                        <h4>O lugar das Tecnologias na educação a distância</h4>
                        <h5>Ercules Laurentino Diniz</h5>
                        <iframe
                            className="Audio Player"
                            title="Ercules Laurentino Diniz"
                            frameborder="0"
                            src="https://drive.google.com/file/d/14RFJDpBa6rDrH6OzQBmuxbiHndjoGLvB/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>Aprendizagens e Vivências: muros ou pontes? A escola na vida ou a escola da vida?</h4>
                        <h5>Psicólogo Me.Gilmar de Oliveira</h5>
                        <iframe
                            className="Audio Player"
                            title="Gilmar de Oliveira"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1AY6bA3FG-X6SBNExU71RfeS8iZCQAHD3/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>Não nasci na era digital, e agora, José?</h4>
                        <h5>Prof. Me. Verônica Fragoso</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Verônica Fragoso"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1CVL2_BJHkDDOahPTm69kKUcGfKiqoxup/preview">
                        </iframe>
                    </div>
                   
                   
                   
                
                
                </Row>
                <hr />
                <hr />
                <Row>
                {/* <div className="audio">
                        <h4>GAMIFICAÇÃO NO ENSINO E AS TECNOLOGIAS QUE AUXILIAM A APRENDIZAGEM DE MILHARES DE JOVENS</h4>
                        <h5>Prof. Me. Priscila Dias</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Priscila Dias"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1kREAgbcQZWlJr13VLsaXzhLe1kQaJxOv/preview">
                        </iframe>
                    </div> */}
                    <div className="audio">
                        <h4>EDUCAÇÃO EMOCIONAL: UM NOVO PARADIGMA PEDAGÓGICO?</h4>
                        <h5>Prof. Me. Júnior Fideles</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Júnior Fideles"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1tKZnqYvAxDjDfrriSFdH7Npl_6bFcO9z/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>O uso de tecnologia na educação com intencionalidade pedagógica</h4>
                        <h5>Prof. Me. Fernanda Gomides</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Fernanda Gomides"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1kREAgbcQZWlJr13VLsaXzhLe1kQaJxOv/preview">
                        </iframe>
                    </div>
                    {/* <div className="audio">
                        <h4>EXPOSIÇÃO 1: AS CONQUISTAS E OS DESAFIOS DOS POLOS NA PARAÍBA</h4>
                        <h5>Coordenadores de Polo</h5>
                        <iframe
                            className="Audio Player"
                            title="Coordenadores de Polo"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1kREAgbcQZWlJr13VLsaXzhLe1kQaJxOv/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>EXPOSIÇÃO 2: AS CONQUISTAS E OS DESAFIOS DOS POLOS NA PARAÍBA</h4>
                        <h5>Assistentes e Tutores dos Polos UAB-PB</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Fernanda Gomides"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1kREAgbcQZWlJr13VLsaXzhLe1kQaJxOv/preview">
                        </iframe>
                    </div> */}
                </Row>
                <br /><br />
                <Link to="/">
                    <button id="speakersBtn">Voltar</button>
                </Link>
            </Container>
        </div>
        </>
    )
}

export default Podcast;
