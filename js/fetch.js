import {
  capitalize,
  makeLowerCase,
  noSpace,
  addSpace,
  translateLabel,
} from "./sanitize.js"; // hier importeer ik alle functies uit sanitize.js

import { displayArticles } from "./render.js"; // hier importeer ik de functie displayArticles.js

let dataset = fetch(
  // hier haal ik de data van de API (theCocktailDB) op dmv fetch.
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json()) // wanneer de data is opgehaald dan zetten we het om naar een JavaScript object.
  .then((data) => {
    data.drinks.forEach((obj) => {
      // in de data staat een array genaamd drinks, voor elk object binnen deze key halen we de volgende values op:
      const drinkName = obj["strDrink"]; // de naam van het drankje, oftewel een string. Deze stoppen we in de variabele (drinkName)
      const drinkImgUrl = obj["strDrinkThumb"]; // een afbeelding, deze stoppen we in de variabele (drinkImgUrl)
      const drinkLabel = obj["strAlcoholic"]; // nog een string, deze stoppen we de variabele (drinkLabel)

      const removeTitleCaps = makeLowerCase(drinkName); // stop de makeLowerCase functie met de variabele drinkName in de variabele removeTitleCaps.
      const addTitleCaps = capitalize(removeTitleCaps);
      const removeTitleSpace = noSpace(addTitleCaps);
      const addTitleSpace = addSpace(removeTitleSpace); // Al deze functies schonen elkaar stuk voor stuk op totdat we aankomen met een schone titel.

      const removeLabelCaps = makeLowerCase(drinkLabel);
      const labelResult = translateLabel(removeLabelCaps); // Ook de label schoon ik op.

      displayArticles(addTitleSpace, drinkImgUrl, labelResult); // De opgeschoonde data geven we mee als parameter in de displayArticles functie.
    });
  })
  .catch((err) => {
    // mocht de data niet opgehaald kunnen worden throwen we een error, deze log ik hieronder
    console.log("Error:", err);
  });

export { dataset }; // hier exporteer ik dataset
