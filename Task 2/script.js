let marka =[
 "BMW",
 "Opel",
 "Toyota",
 "Mercedes"
];

let model=[
    ["X5", "M6", "X6"],
    ["Astra", "Vectra"],
    ["Camry", "Carolla"],
    ["190", "S-class"]
];

let images = [

  [ "./images/X5.jpg", "./images/M6.jpg", "./images/X6.jpg"],
  ["./images/Astra.jpg", "./images/Vectra.jpg"],
  ["./images/190.jpg", "./images/S-class.jpg", ]
  
]

let marka_s =document.getElementById("marka");
let model_s =document.getElementById("model");
let img=document.getElementById("img");
let mes = document.getElementById("message");


function markaSelect() {
    let data = `<option value="" disabled selected>Select Brand</option>`;
    for (let i = 0; i < marka.length; i++) {
      data += `<option value="${i}">${marka[i]}</option>`;
    }
    marka_s.innerHTML = data;
  }

markaSelect();

function modelSelect() {
    let value = marka_s.value;
    let data = `<option value="" disabled selected>Select Model</option>`;
    for (let i = 0; i < model[value].length; i++) {
      data += `<option value="${i}">${model[value][i]}</option>`;
    }
    model_s.innerHTML = data;
    img.src = "";
    mes.innerText="";
    img.style.display="none";
  }


  
  function print(){
    
    mes.innerText=`${marka[marka_s.value]} ${model[marka_s.value][model_s.value]}`
    img.src = images[marka_s.value][model_s.value];
    img.style.display="block";

  }
  
  
  
  