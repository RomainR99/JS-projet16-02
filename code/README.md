# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Dans le fichier mocktail
Il faut regrouper toute les windows au meme endroit sinon elle ne s'affiche pas
window.onload = function () {
    HistoricEvent();
    Mocktail();
    Blague();
    Recette();


(cd code bien sur avant)
Pour installer la librairy :
npm install -g marked

Si on peut pas : 
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
npm install -g marked

ET
npm install --save marked
PUIS on verifie que marked est dans le pakage-lock.json
 "name": "code",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "code",
      "version": "0.0.0",
      "dependencies": {
        "marked": "^15.0.6",
       