const root = document.getElementById("root")//div en html donde se imprime 

const lolData = Object.values(LOL.data); //data Lol convertida
let NewLolData = [] //variable vacia 

const btnLol = document.getElementsByClassName('btnLol');


//mostrando toda la data


 const printData = (lolData)=> {
  let champions="";
     lolData.forEach(element => {
      champions+=`<div class= "champsCard">
       <img src="${element.img}" alt="">
       <h2> ${element.name}</h2><br>
       <p><em>${element.title}</em></p>
       <p> ${element.partype}</p>
       </div>
       `
     });

root.innerHTML = champions
 }
 printData(lolData)

//filtrando data
for (let index = 0; index < btnLol.length; index++) {
   btnLol[index].addEventListener("click",()=>{
     const chooseRol = event.target.id 
     const lolFiltered = lolData.filter(champ => champ.tags[0] ==chooseRol || champ.tags[1]== chooseRol);
     NewLolData = lolFiltered
    // console.log(lolFiltered)
     printData(NewLolData);
    })
   
}



