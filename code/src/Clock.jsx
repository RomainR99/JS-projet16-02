import { useEffect, useState } from "react";

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const intervalid = setInterval(() =>{
            setTime(new Date());
        },1000); // code toutes les 1000ms donc ttles secondes

        return () => {
            clearInterval(intervalid); //Arrêter l'intervalle quand le composant est démonté ou avant la prochaine exécution de l'effet.

        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; //modulo 12 mais si 12%12=0 alors 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    function padZero(number){
        return (number < 10 ? "0" : "" ) + number; //Permet d'ajouter 0 devant les nombre inf à 10 :"0"+"" cad 0 ou rien + nombre
    }

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}   
export default Clock;

//La fonction new Date() est une fonction native de JavaScript fournie par l'objet global Date. Elle crée une instance de l'objet Date, qui représente une date et une heure spécifiques.

//Lorsque vous appelez new Date() sans aucun argument :

//Il crée un objet Date qui contient la date et l'heure actuelles, basées sur l'horloge du système (ordinateur ou appareil) et le fuseau horaire local.

const maintenant = new Date();
console.log(maintenant);