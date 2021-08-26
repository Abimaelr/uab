import React,{useState, useEffect} from 'react';
import m from '../assets/m.mp3';
import '../assets/css/counter.css'
const seconds = 1000;
const minutes = seconds*60;
const hours = minutes*60;
const days = hours*24;
const music = new Audio(m);

let play = false;

function Counter() {
    const [Seconds, setSeconds] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [Hours, setHours] = useState(0);
    const [Days, setDays] = useState(0);
    const [start, setStart] = useState(false);

    const calculateTime = () => {
        const date = new Date("2021-09-20T09:00:58.000Z").getTime() - Date.now();
       
        const format = (time) => {
            const value = `${time}`;
            if(value.length < 2) return `0${value}`;
            else return value;
        }
        const time = Math.floor(date/seconds);
        const fSeconds = Math.floor(date/seconds) % 60;
        const fMinutes = Math.floor(date/minutes) % 60;
        const fHours = Math.floor(date/hours) % 24;
        const fDays = Math.floor(date/days);
        if(time > 0) {
            setStart(true);
        }
        setSeconds(format(fSeconds));
        setMinutes(format(fMinutes));
        setHours(format(fHours));
        setDays(fDays);
    }



    window.addEventListener('scroll', async function () {
       
        if(start && Days > 0 && !play){
            music.load();
            music.volume = 0.5;
            music.muted = false;
            const playPromise = music.play()
            if (playPromise !== undefined) {
                playPromise.then(_ => {

                })
                .catch(error => {
                  console.log(error);
                });
              }
            play = true;
        }
    })

    useEffect( () => {
        calculateTime();
    }, [])

    // useEffect(() => () => music.pause(), [])

    // useEffect( music.pause())
    // setInterval(()=> {
    //     music.load();
    //     console.log("carreguei")
    //     if(start && Days > 0)
    //         music.play()
    // }, 2000)
    
    setTimeout(() => {
        calculateTime();
    },1000);
    
    if(!start) return (<div></div>);

    if(start && Days > 0) return (
        <>
            <div id="counter">
                {/* <audio controls autoPlay>
                    <source src={m} type="audio/ogg"/>
                    <source src={m} type="audio/mpeg"/>
                </audio> */}
                <div className="dateItem">
                    <h2>{Days}</h2>
                    <p>DIAS</p>
                </div>
                <div className="dateItem">
                    <h2>{Hours}</h2>
                    <p>HORAS</p>
                </div>
                <div className="dateItem">
                    <h2>{Minutes}</h2>
                    <p>MINUTOS</p>
                </div>
                <div className="dateItem">
                    <h2>{Seconds}</h2>
                    <p>SEGUNDOS</p>
                </div>
            </div>
        </>
        
    )
    return (<div></div>);
}

export default Counter;
