function HistoricEvent() {
    const adresseUrl = 'https://history.muffinlabs.com/date';

    fetch(adresseUrl)
        .then(res => res.json())
        .then(data => {
            const conteneurHistoricEvent = document.querySelector('#historic_event');
            
            if (data.data && data.data.Events.length > 0) {
                const event = data.data.Events[Math.floor(Math.random() * data.data.Events.length)]; //un historic_event random
                conteneurHistoricEvent.innerHTML = `
                    <p class="annee_historic_event">Année : ${event.year}</p>
                    <p class="text_historic_event">${event.text}</p>
                `;
            } else {
                conteneurHistoricEvent.innerText = "Pas d'évènement historique marquant pour aujourd'hui. Revenez demain ! "; 
            }
        })
        .catch(error => {
            console.error("Erreur : Impossible de charger l'évènement historique :", error);
            document.querySelector('#historic_event').innerText = "Impossible de charger l'évènement historique.";
        });
}

