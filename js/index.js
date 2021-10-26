let dataset = fetch("../data.json")
  .then((result) => result.json())
  .then((data) => {
    // log de data naar de console
    // console.log(data);

    // function deCap(str) {
    //   let lowercase = str.toLowerCase();
    // }

    // voor elk object laten we alleen de value zien van de onderstaande key
    data.forEach((obj) => {
      console.log(obj["Wat is je favoriete soort huisdier?"].toLowerCase());
    });
  });
