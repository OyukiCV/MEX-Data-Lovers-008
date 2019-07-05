const root = document.getElementById('root')
const data = LOL.data
let string = ''


/*botonAz.addEventListener("click", ()=>{
const pruebaLol= window.dataLol.ordenAbc(Objet.value(name));
azChampions.value=pruebaLol
}*/

//let fichas =""
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    const element = data[key];
    const name = element.name
    const rol = element.tags[0]
    const attack = element.info.attack
    const bestPower = element.stats.mp
    const bestPower2 = element.stats.armor
    const img = element.img
    string += `<div>
      <img src="${img}" alt="">
  <h3>${name}</h3>
  <p>${rol}</p>
  <p>Ataque: ${attack}</p>
  <p>Principales caracteristicas:</p>
  <p>mp: ${bestPower2}</p>
  <p> armor: ${bestPower}</p>

</div>`
  }
}



root.innerHTML = string //imprime en navegador
