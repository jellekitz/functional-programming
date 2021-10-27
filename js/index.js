let dataset = fetch("../data.json")
  .then((result) => result.json())
  .then((data) => {
    // log de data naar de console
    // console.log(data);

    // voor elk object laten we alleen de value zien van de onderstaande key
    data.forEach((obj) => {
      // console.log(
      //   obj["Wat is je favoriete soort huisdier?"]
      //     .toLowerCase()
      //     .replace("of", "")
      // );

      let cleanResult = cleanString(obj["Wat is je favoriete soort huisdier?"]);

      console.log(cleanResult);
    });
  });

function cleanString(str) {
  let makeLowerCase = str.toLowerCase();
  let takeFirstWord = str.split(" ").pop();

  return makeLowerCase, takeFirstWord;
}
