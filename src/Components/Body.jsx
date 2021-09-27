// import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from 'react-bootstrap';
import HorizontalCard from './HorizontalCard';
import '../assets/css/body.css';
import Speakers from './Speakers';
import SpecialTitle from './SpecialTitle';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import img from '../assets/img/m.png';

function Body() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return (
       <div id="content">
       <Container >
           <br />
           <Row className="section">
                <SpecialTitle title="Bem vindos" subTitle="I Seminário Interpolos UAB" />
               <Col md={12}>
                    <div>
                        <br/>
                        <Fade top duration={2000}>
                            <h3>Para celebrar os 15 anos da Universidade Aberta do Brasil, estamos promovendo o <br /><span>I SEMINÁRIO INTERPOLOS: 15 anos da UAB na Paraíba</span> <br />visando instigar reflexões sobre a formação universitária de milhares de jovens, neste contexto de século XXI .  Teremos discussões em torno de temas como  Tecnologias na Educação, Gamificação  do ensino,  Cultura digital,  Ensino híbrido, Educação Emocional e o Sistema da UAB  nos Polos da Paraíba.</h3>
                        </Fade>
                        <br />
                        <Fade right duration={2000}>
                        <Link to="/about">
                            <button id="speakersBtn">Sobre</button>
                        </Link>
               </Fade>
                       
                    </div>
               </Col>

           </Row>
       </Container>
               <Fade bottom duration={2000}>
                    <div id="imageD">
                        <img src={img} alt="Foto" />
                        <a target="blank" href="https://forms.gle/KeVDSH9ivdADTEC56">
                            <button id="subscribe">Inscreva-se</button>
                        </a>
                    </div>
               </Fade>
       <SpecialTitle title="Encerramento" subTitle="22 de Setembro" />
       <div className="videoContent">
        <iframe className="homeVideo" src="https://www.youtube.com/embed/oTsL6gp3ZwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
       </div>
        <div id="features">
            <SpecialTitle title="Conteúdo" subTitle="O que você verá aqui" />
            <div>
                {/* <h2>Participe conosco</h2> */}
            </div>
            <div id="cardContainer">
                <HorizontalCard icon="la-users" title="Palestras Temáticas" description="Abordagem de conceitos e de significações ligadas às Tecnologias na Educação, gamificação do ensino, cultura digital, ensino híbrido e Educação emocional."/>
                <HorizontalCard icon="la-school" title="Exposições Interpolos" description=" Explanações das equipes de Polos sobre o sistema UAB e a relevância das ações articuladas para o processo educativo."/>
                <HorizontalCard icon="la-tools" title="Ferramentas Tecnológicas" description="Abordagens das ferramentas tecnológicas disponíveis para o processo de ensino-aprendizagem."/>
                <HorizontalCard icon="la-music" title="Apresentações Culturais" description="Apresentações culturais de músicas instrumentais, poesia e cordel com alunos de vários Polos."/>
                <HorizontalCard icon="la-history" title="Diálogos e Memórias" description=" Registros fotográficos que contam um pouco sobre a história dos Polos, eternizando momentos."/>
                <HorizontalCard icon="la-network-wired" title="Perspectivas Transdisciplinares" description="Enfoque pluralista por meio das interconexões entre os saberes, as teorias e as práticas."/>
            </div>
        </div>
        <SpecialTitle title="Palestrantes" subTitle="Quem Somos?" />
        <Speakers />
        <div id="scheduleMarker" />
        <SpecialTitle title="Agenda" subTitle="Programação do Evento" />
        <Schedule />
        <div className="event">
            <SpecialTitle title="O evento" subTitle="Participe do Seminário" />
            <div className="eventContent">
                <div className="eventBn">
                    <i class="las la-video" />
                    <Link  to="/event">
                        <button  className="Button access">
                            <p> Vídeo </p>
                        </button>
                    </Link>
                </div>
                <div className="eventBn">
                    <i class="las la-headphones" />
                    <Link  to="/podcast">
                        <button  className="Button access">
                            <p> PodCast </p>
                        </button>
                    </Link>
                </div>    
            </div>
        </div>
        <Sponsors />
       </div>
    )
}

export default Body;
