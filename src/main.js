const btnLol = document.getElementsByClassName('btnLol');


//div root donde se imprime toda la data
const root = document.getElementById('root') 
const data = LOL.data //data de Lol


//imprime toda la data 
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

//filtra por roles, aun no funciona
 let newData= ''
const filterData = () => {
 
 
  for (let i = 0; i < btnLol.length; i++) {
    btnLol[i].addEventListener("click",() =>{

 const arr = Object.values(LOL.data);
 const newData = arr.filter(champ => champ.tags[(0,1)] == 'Assassin')
  //newData+=`<div class="champsCard">`
  console.log(newData)
  

root.innerHTML=newData
    })
  
}
}
filterData(newData)