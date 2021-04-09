let currPokemon = window.location.pathname.split("/").pop().split(".").shift()

fetch(`${currPokemon}.json`)
  .then(response => response.json())
  .then(json => init(json))
  .catch(err => console.log(err))

function init(obj){
  console.log(obj);
  console.log(obj.name);
  createStuff(obj)
}

function createStuff(obj){
  let section = document.getElementById(`${currPokemon}Section`)
  
  // Creates header
  const _h1 = document.createElement("h1")
  _h1.textContent = obj["name"].charAt(0).toUpperCase() + obj["name"].slice(1)
  section.appendChild(_h1)

  // Adds an image :TODO

  // Create all of the stats/attributes
  const _h2 = document.createElement("h2")
  _h2.textContent = "Stats"
  section.appendChild(_h2)
  for(i of obj.stats){
    const _div1 = document.createElement("div")
    const _div2 = document.createElement("div")
    const _p1 = document.createElement("p")
    const _p2 = document.createElement("p")

    _p1.textContent = i["stat"]["name"].charAt(0).toUpperCase() + i["stat"]["name"].slice(1)
    _p2.textContent = i["base_stat"]
    _div1.appendChild(_p1)
    _div2.appendChild(_p2)
    section.appendChild(_div1)
    section.appendChild(_div2)
  }
}