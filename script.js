let currPokemon = window.location.pathname.split("/").pop().split(".").shift();

// Finds what page you are on and pulls the information from the json file.

fetch(`${currPokemon}.json`)
  .then((response) => response.json())
  .then((json) => init(json))
  .catch((err) => console.log(err));

function init(obj) {
  console.log(obj);
  console.log(obj.name);
  createStuff(obj);
}

function createStuff(obj) {
  let section = document.getElementById(`${currPokemon}Section`);

  // Creates header
  const _h1 = document.createElement("h1"); // Header with pokemon name
  _h1.textContent = obj["name"].charAt(0).toUpperCase() + obj["name"].slice(1);
  section.appendChild(_h1);

  // Adds an image :TODO
  const _img = document.createElement("img")
  _img.src = obj["image"]
  section.appendChild(_img)


  // Create all of the stats/attributes
  const _mainContainer = document.createElement("div")
  _mainContainer.setAttribute("class", "mainContainer")

  const _h2 = document.createElement("h2"); // Smaller header that says stats
  const _leftContainer = document.createElement("div") // Left container div
  _leftContainer.setAttribute("class", "leftContainer")
  _h2.textContent = "Stats";
  section.appendChild(_h2);

  // Create the types of the pokemon
  const _typeContainer = document.createElement("div")
  _typeContainer.setAttribute("class", "typeContainer")
  for (i of obj.types) {
    const _typeDiv = document.createElement("div")
    _typeDiv.setAttribute(`class`, `${i["type"]["name"]} type`)
    _typeDiv.textContent = i["type"]["name"].charAt(0).toUpperCase() + i["type"]["name"].slice(1);
    _typeContainer.appendChild(_typeDiv)
  }
  section.appendChild(_typeContainer)

  for (i of obj.stats) {
    // Loops through all of the stats
    const _div2 = document.createElement("div")

    const _div3 = document.createElement("div"); // Contains the name of value on the left side
    const _div4 = document.createElement("div"); // Contains the value on the left side
    const _p1 = document.createElement("p");
    const _p2 = document.createElement("p");

    _p1.textContent = i["stat"]["name"].charAt(0).toUpperCase() + i["stat"]["name"].slice(1);
    _p2.textContent = i["base_stat"];
    _div4.setAttribute("class", "statVal")

    _div3.appendChild(_p1);
    _div4.appendChild(_p2);
    _div2.appendChild(_div3);
    _div2.appendChild(_div4);
    _leftContainer.appendChild(_div2)
  }

  const _rightContainer = document.createElement("div") // Right container div
  _rightContainer.setAttribute("class", "rightContainer")
  // Base experience
  const _div6 = document.createElement("div")

  const _baseExp = document.createElement("div")
  const _baseExpVal = document.createElement("div")
  const _p3 = document.createElement("p")
  const _p4 = document.createElement("p")

  _p3.textContent = "Base Exp."
  _p4.textContent = obj["base_experience"]
  _baseExpVal.setAttribute("class", "statVal")

  _baseExp.appendChild(_p3)
  _baseExpVal.appendChild(_p4)
  _div6.appendChild(_baseExp)
  _div6.appendChild(_baseExpVal)
  _rightContainer.appendChild(_div6)

  // Height
  const _div7 = document.createElement("div")

  const _height = document.createElement("div")
  const _heightVal = document.createElement("div")
  const _p5 = document.createElement("p")
  const _p6 = document.createElement("p")

  const height = obj["height"]

  _p5.textContent = "Height"
  _p6.textContent = `${(height*0.1).toFixed(1)}m`
  _heightVal.setAttribute("class", "statVal")

  _height.appendChild(_p5)
  _heightVal.appendChild(_p6)
  _div7.appendChild(_height)
  _div7.appendChild(_heightVal)
  _rightContainer.appendChild(_div7)

  // ID
  const _div8 = document.createElement("div")

  const _id = document.createElement("div")
  const _idVal = document.createElement("div")
  const _p7 = document.createElement("p")
  const _p8 = document.createElement("p")

  _p7.textContent = "ID"
  _p8.textContent = obj['id']
  _idVal.setAttribute("class", "statVal")

  _id.appendChild(_p7)
  _idVal.appendChild(_p8)
  _div8.appendChild(_id)
  _div8.appendChild(_idVal)
  _rightContainer.appendChild(_div8)

  // Weight
  const _mainWeightDiv = document.createElement("div")
  const _weightName = document.createElement("div")
  const _weightValueDiv = document.createElement("div")
  const _weightValueText = document.createElement("p")

  _weightName.textContent = "Weight"
  _weightValueText.textContent = (obj["weight"] * 0.1).toFixed(1) + "kg"
  _weightValueDiv.setAttribute("class", "statVal")

  _weightValueDiv.appendChild(_weightValueText)
  _mainWeightDiv.appendChild(_weightName)
  _mainWeightDiv.appendChild(_weightValueDiv)

  _rightContainer.appendChild(_mainWeightDiv)

  // Abilities
  const _div9 = document.createElement("div")
  const _ul1 = document.createElement("ul")

  _ul1.textContent = "Abilities: "
  for (i of obj["abilities"]) {
    const _li1 = document.createElement("li")
    _li1.textContent = "-" + i["name"].charAt(0).toUpperCase() + i["name"].slice(1);
    _ul1.appendChild(_li1)
  }
  _div9.appendChild(_ul1)
  _rightContainer.appendChild(_div9)


  _mainContainer.appendChild(_leftContainer)
  _mainContainer.appendChild(_rightContainer)
  section.appendChild(_mainContainer)




}

