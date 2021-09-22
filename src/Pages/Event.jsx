import React,  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecialTitle from '../Components/SpecialTitle';
import '../assets/css/event.css';
import { Row, Col } from 'react-bootstrap';
import Cover from '../Components/Cover';

function Event() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <Cover />
        <div id="event" >
            <a id="content"/>
            <SpecialTitle title="Dia 1" />
            <Row>
                <Col md={12}>
                    <div className="video">
                        <h4>Abertura</h4>
                        <h5>Conferência 1: 15 anos da UAB na Paraíba: Conquistas e Desafios - Dr. Lucídio dos Anjos Formiga Cabral</h5>
                        <iframe width="80%" height="80%" src="https://www.youtube.com/embed/NQQDM0mhe9Y" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>

            </Row>
            <SpecialTitle title="Dia 2" />
            <Row>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>O papel da educação e o uso das tecnologias de maneira crítica e reflexiva na EaD</h4>
                            <h5>Profa. Dra. Daniele Dias</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/eiMnPx06cZs" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>O lugar das Tecnologias na educação a distância: buscando o equilíbrio entre o otimismo ingênuo e a resistência hesitante</h4>
                            <h5>Prof. Me. Ercules Laurentino Diniz</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/bEZi9BokQds" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Aprendizagens e Vivências: muros ou pontes? A escola na vida ou a escola da vida?</h4>
                            <h5>Me. Gilmar de Oliveira</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gOLPCD0uqEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Não nasci na era digital, e agora, José?
</h4>
                            <h5>Prof. Ma. Verônica Fragoso</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/JyEkQ1emtVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
            <SpecialTitle title="Dia 3" />
            <Row>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Gamificação no ensino e as tecnologias que auxiliam a aprendizagem de milhares de jovens</h4>
                            <h5>Prof. Ma. Priscila Dias</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/lm_lj7Ow0tg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>Educação emocional: um novo paradigma pedagógico?
</h4>
                            <h5>Prof. Me. Júnior Fideles</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/0Mu5QEHatwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col md={4}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>O uso de tecnologia na educação com intencionalidade pedagógica
</h4>
                            <h5>Prof. Ma. Fernanda Gomides</h5>
                        </div>
                        <iframe width="100%" height="400px"  src="https://www.youtube.com/embed/RXIQqcoyW8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Exposição 1: As Conquistas e os desafios dos Polos na Paraíba 

</h4>
                            <h5>Coordenadores de Polo</h5>
                        </div>
                        {/* <iframe width="100%" height="400px" src="https://www.youtube.com/embed/skOn70zWncU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" /> */}
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Exposição 2: As Conquistas e os desafios dos Polos na Paraíba

</h4>
                            <h5>Assistentes e Tutores dos Polos UAB-PB</h5>
                        </div>
                        {/* <iframe width="100%" height="400px" src="https://www.youtube.com/embed/skOn70zWncU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" /> */}
                    </div>
                </Col>
                <Col  md={12}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>ENCERRAMENTO</h4>
                            <h5>Conferência 2: Relações de saber, poder e inclusão na educação à distância: uma análise sobre a UAB. - Prof. Daniel Mill</h5>
                            <h5>Apresentação Cultural e homenagem dos Polos aos 15 anos da UAB</h5>
                            <h5>Prof. Dr. Daniel Mill</h5>
                        </div>
                        <iframe  width="80%" height="80%"  src="https://www.youtube.com/embed/skOn70zWncU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                {/* <Col md={12}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>ENCERRAMENTO</h4>
                            <h5>Apresentação Cultural e homenagem dos Polos aos 15 anos da UAB</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/skOn70zWncU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col> */}
            </Row>
            <br />
            <br />
                <br />
                <br />
            <Link to="/">
                <button id="speakersBtn">Voltar</button>
            </Link>
            <br />
            <br />
            <br />
            <br />
        </div>
        </>
    )
}

export default Event
