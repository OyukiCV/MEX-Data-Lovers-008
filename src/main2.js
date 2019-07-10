const filterData = () => {
  const arr = Object.values(LOL.data);
  const newData = arr.filter(champ => champ.tags[0] == 'Support' )
  console.log(newData)
}
filterData()


const root = document.getElementById('root')
const data = LOL.data
const printData= () => {
let string = ''

for (const key in data) {
  if (data.hasOwnProperty(key)) {
    const element = data[key];
    const name = element.name
    const rol = element.tags[0]
    const attack = element.info.attack
    const bestPower = element.stats.mp
    const bestPower2 = element.stats.armor
    const img = element.img
    string += `<div class="champsCard">
  <img src="${img}" alt="">
  <h3>${name}</h3>
  <p>${rol}</p>
  <p>Ataque: ${attack}</p>
</div>`
  }
}
root.innerHTML = string //imprime en navegador
}
printData()
/* intentando filtrar  si quito esto de abajo muestra toda la data*/
/*
const string=Object.values(LOL.data);
const filterRolArray=string.filter(champ =>champ.tags["Support"])
console.log(filterRolArray);
*/
