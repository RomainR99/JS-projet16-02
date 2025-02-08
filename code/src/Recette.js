function Recette() {
    const adresseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(adresseUrl)
        .then(res => res.json())
        .then(data => {
            const conteneurRecette = document.querySelector('#recette');
            const modalRecette = document.querySelector('#modal-recette');
            const modalContent = document.querySelector('#modal-content');
            const btnFermer = document.querySelector('#fermer-modal');

            if (data.meals && data.meals[0]) {
                const meal = data.meals[0]; 

                // 20 car ds API 20 ingredients
                let ingredients = "";
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];

                    if (ingredient && ingredient.trim() !== "") {
                        ingredients += `<li>${measure} ${ingredient}</li>`;
                    }
                }

                conteneurRecette.innerHTML = `
                    <h2>${meal.strMeal}</h2>
                    <img class="meal_thumb" src="${meal.strMealThumb}" alt="${meal.strMeal}" width="300"/>
                    <button id="voir-recette">Voir la recette</button>
                `;

                modalContent.innerHTML = `
                    <h2>${meal.strMeal}</h2>
                    <p><strong>Catégorie :</strong> ${meal.strCategory || "Non spécifié"}</p>
                    <p><strong>Origine :</strong> ${meal.strArea || "Non spécifié"}</p>
                    <h3>Ingrédients :</h3>
                    <ul>${ingredients}</ul>
                    <h3>Instructions :</h3>
                    <p>${meal.strInstructions}</p>
                    ${meal.strYoutube ? `<p><a href="${meal.strYoutube}" target="_blank">Vidéo</a></p>` : ""}
                `;

                
                document.querySelector("#voir-recette").addEventListener("click", () => {
                    modalRecette.showModal();
                });

                
                btnFermer.addEventListener("click", () => {
                    modalRecette.close();
                });
            } else {
                conteneurRecette.innerText = "Pas de recette pour aujourd'hui. Revenez demain!";
            }
        })
        .catch(error => {
            console.error("Impossible de charger la recette :", error);
            document.querySelector('#recette').innerText = "Erreur chargement.";
        });
}


// il est dans cocktail window.onload = Recette;
