const resetBtn = document.getElementById("reset");
const counter = document.getElementById("number");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const num = document.getElementById("increment");



resetBtn.addEventListener("click", function(e) {
  // Reset the counter to zero
  e.stopPropagation();
  counter.textContent = "0";
  
});


// console.log(getValue);

addBtn.addEventListener('click',(e)=>{
  const getValue = parseFloat(num.value);
  // console.log(getValue);
  let currentValue = parseFloat(counter.textContent);
  counter.textContent=getValue+currentValue;
  e.stopPropagation();
})

subtractBtn.addEventListener('click',(e)=>{
  const getValue = parseFloat(num.value);
  // console.log(getValue);
  let currentValue = parseFloat(counter.textContent);
  counter.textContent=currentValue-getValue;
  e.stopPropagation();
})
