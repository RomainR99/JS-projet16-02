import Clock from './Clock.jsx';
import nuage from './assets/nuage.jpg';
import DateComponent from './Date.jsx'; //c'est la fonction qu'on importe du nom du fichier


function App() {
    return (
        <div style={{ backgroundImage: `url(${nuage})`, height: '100vh', backgroundSize: 'cover' }}>
            <Clock />  
            <DateComponent />  
        </div>     
        
    );
}

export default App