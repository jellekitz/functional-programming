let dataset = fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json())
  .then((data) => {
    console.log(data);

    data.drinks.forEach((obj) => {
      const drinkName = obj["strDrink"];

      const removeCaps = makeLowerCase(drinkName);
      const addCaps = makeUpperCase(removeCaps);

      console.log(addCaps);
    });
  });

function makeUpperCase(str) {
  const firstLetter = str.charAt(0);
  const cap = firstLetter.toUpperCase();

  const full = str;
  const slice = full.slice(1);

  const together = cap + slice;

  return together;
}

function makeLowerCase(str) {
  return str.toLowerCase();
}
