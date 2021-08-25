import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../assets/css/schedule.css';


function OffCanvasElement(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="light" onClick={handleShow} className="me-2">
          Saiba mais
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.Title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {props.children}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

function Schedule() {
    return (
        <div id='schedule'>
            <div class="bg-image"></div>
            <div className="schedule">
                <h3>DIA 1</h3>
                <h4>20 de Setembro</h4>
                <h6>ABERTURA</h6>
                <br />
                <br />
                <OffCanvasElement> 
                    <h1>DIA 1</h1>
                    <br />
                    <h6>ABERTURA - <span><i class="las la-clock"></i>19H</span></h6>
                    <p>Conferência - 15 anos da UAB na Paraíba: conquistas e desafios
                    <br />
                    <br />
                    Palestrante - <span>Dr. Lucídio dos Anjos Formiga Cabral</span> - Professor Titular do Departamento de Computação Científica do Centro de Informática da UFPB)</p>
                </OffCanvasElement>
            </div>
            <div className="schedule">
                <h3>DIA 2</h3>
                <h4>21 de Setembro</h4>
                <h6>PALESTRAS</h6>
                <br />
                <br />
                <OffCanvasElement> 
                <h1>DIA 2</h1>
                    <br />
                    <br />
                    <h6>1ª Rodada - <span><i class="las la-clock"></i>9H ÀS 11H</span></h6>
                    <br />
                    <p><span>PALESTRA 1</span> - O papel da educação e o uso das tecnologias de maneira crítica e reflexiva na EaD
                    <br /> MINISTRANTE - Profa. Dra Daniele Dias (UFPB)
                    </p>
                    <br />
                    <p><span>PALESTRA 2</span> -  O lugar das Tecnologias na educação a distância: buscando o equilíbrio entre o otimismo ingênuo e a resistência hesitante.
                    <br /> MINISTRANTE -  Prof. Me. Ercules Laurentino Diniz (UAB/UFPB)
                    </p>
                    <hr />
                    <h6>2ª Rodada - <span><i class="las la-clock"></i>14H ÀS 16H</span></h6>
                    <br />
                    <p><span>PALESTRA 3</span> -  Aprendizagens e Vivências: muros ou pontes? A escola na vida ou a escola da vida?
                    <br /> MINISTRANTE - Psicólogo Me.Gilmar de Oliveira. (PMJP)
                    </p>
                    <br />
                    <p><span>PALESTRA 4</span> -  Não nasci na era digital, e agora, José?
                    <br /> MINISTRANTE -  Prof. Me. Verônica Fragoso
                    </p>
                </OffCanvasElement>
            </div>
            <div className="schedule">
                <h3>DIA 3</h3>
                <h4>22 de Setembro</h4>
                <h6>EXPOSIÇÕES E ENCERRAMENTO</h6>
                <br />
                <br />
                <OffCanvasElement> 
                <h1>DIA 3</h1>
                    <br />
                    <br />
                    <h6>1ª Rodada - <span><i class="las la-clock"></i>9H ÀS 11H</span></h6>
                    <br />
                    <p><span>PALESTRA 5</span> - Gamificação no ensino e as tecnologias que auxiliam a aprendizagem de milhares de jovens
                    <br /> MINISTRANTE - Prof. Me. Priscila Dias
                    </p>
                    <br />
                    <p><span>PALESTRA 6</span> -  OO uso de tecnologia na educação com intencionalidade pedagógica
                    <br /> MINISTRANTE -  Prof. Me. Fernanda Gomides
                    </p>
                    <hr />
                    <h6>2ª Rodada - <span><i class="las la-clock"></i>14H ÀS 16H</span></h6>
                    <br />
                    <p><span>EXPOSIÇÃO 1</span> -  As Conquistas e os desafios dos Polos na Paraíba 
                    <br /> MINISTRANTES - Coordenadores de Polo
                    </p>
                    <br />
                    <p><span>EXPOSIÇÃO 2</span> -  As Conquistas e os desafios dos Polos na Paraíba
                    <br /> MINISTRANTES -  Assistentes e Tutores dos Polos UAB-PB
                    </p>
                    <hr />
                    <h6>Encerramento - <span><i class="las la-clock"></i>19H</span></h6>
                    <br />
                    <p>Apresentação Cultural e homenagem dos Polos aos 15 anos da UAB.</p>
                </OffCanvasElement>
            </div>
        </div>
    )
}

export default Schedule