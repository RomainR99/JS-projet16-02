function Mocktail() {
    const adresseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    fetch(adresseUrl)
        .then(res => res.json())
        .then(data => {
            const conteneurMocktail = document.querySelector('#mocktail');

            if (data.drinks && data.drinks.length > 0) {
                // Sélection aléatoire d'un mocktail
                const randomMocktail = data.drinks[Math.floor(Math.random() * data.drinks.length)];

                // Vérification de l'existence des propriétés attendues
                if (randomMocktail && randomMocktail.strDrink && randomMocktail.strDrinkThumb) {
                    conteneurMocktail.innerHTML = `                        
                        <h2>Mocktail du jour</h2>
                        <p class="drink"><strong>Nom :</strong> ${randomMocktail.strDrink}</p>
                        <img class="drink_thumb" src="${randomMocktail.strDrinkThumb}" alt="${randomMocktail.strDrink}" />
                    `;
                } else {
                    conteneurMocktail.innerText = "Erreur : les informations du mocktail sont incomplètes.";
                }
            } else {
                conteneurMocktail.innerText = "Pas de mocktail pour aujourd'hui. Revenez demain !";
            }
        })
        .catch(error => {
            console.error("Erreur : Impossible de charger le mocktail :", error);
            document.querySelector('#mocktail').innerText = "Impossible de charger le mocktail du jour.";
        });
}

//il faut regrouper toute les window au meme endroit sinon elle ne s'affiche pas
window.onload = function () {
    HistoricEvent();
    Mocktail();
    Blague();
    Recette();
};
