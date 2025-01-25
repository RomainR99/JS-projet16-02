//import du fichier CSS
import './index.css';
// On importe la fonction createRoot depuis le module client de react-dom
import { createRoot } from 'react-dom/client';
// On importe le composant App, qui contient toute l'application
import App from './App';

// On créé la racine du projet React
const root = createRoot(document.querySelector('#root'));
// Injecte le composant parent global de l'application
root.render(<App />);
