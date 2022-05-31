const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
 
   let randomNumber =  getRandomInt(1,4);

   console.log(randomNumber)
    
   document.body.style.backgroundColor = colors[randomNumber];
   console.dir(  document.body)
   color.textContent = colors[randomNumber]



})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }