let dataset = fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json())
  .then((data) => {
    console.log(data);

    data.drinks.forEach((obj) => {
      const drinkName = obj["strDrink"];

      const removeCaps = makeLowerCase(drinkName);
      console.log(removeCaps);
    });
  });

function makeLowerCase(str) {
  return str.toLowerCase();
}
