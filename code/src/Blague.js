function Blague() {
    const adresseUrl = 'https://official-joke-api.appspot.com/random_joke';

    fetch(adresseUrl)
        .then(res => res.json())
        .then(data => {
            const conteneurBlague = document.querySelector('#blague');
            conteneurBlague.innerHTML = `
                <p class="setup">${data.setup}</p>
                <p class="punchline">${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error("Erreur : Impossible de charger la blague :", error);
            document.querySelector('#blague').innerText = "Impossible de charger une blague";
        });
}
