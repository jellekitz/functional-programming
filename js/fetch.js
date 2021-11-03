import {
  capitalize,
  makeLowerCase,
  noSpace,
  addSpace,
  translateLabel,
} from "./sanitize.js";

import { displayArticles } from "./render.js";

let dataset = fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json())
  .then((data) => {
    data.drinks.forEach((obj) => {
      const drinkName = obj["strDrink"];
      const drinkImgUrl = obj["strDrinkThumb"];
      const drinkLabel = obj["strAlcoholic"];

      const removeTitleCaps = makeLowerCase(drinkName);
      const addTitleCaps = capitalize(removeTitleCaps);
      const removeTitleSpace = noSpace(addTitleCaps);
      const addTitleSpace = addSpace(removeTitleSpace);

      const removeLabelCaps = makeLowerCase(drinkLabel);
      const labelResult = translateLabel(removeLabelCaps);

      displayArticles(addTitleSpace, drinkImgUrl, labelResult);
    });
  });

export { dataset };
