const buttons = document.querySelectorAll('button');
buttons.forEach(button => button
    .addEventListener('click', (e)=>addInput(e)));

const display = document.getElementById('display');

let calculationData = '' ;

document.addEventListener('keypress', (e)=>{
    if(e.key=="Enter" && display.value !=''){
        display.value = eval(display.value.replaceAll('x', '*'));
    }
})
function addInput(e){
    let userInput = e.target.innerHTML;

    if(e.target.innerHTML == 'AC'){
        calculationData = "";
    }
    else if(e.target.innerHTML == 'DEL'){
        calculationData = calculationData.substring(0, calculationData.length-1);
    }
    else if(e.target.innerHTML == "="){
        if(calculationData !='')
        calculationData = eval(calculationData.replaceAll('x','*'));
    }
    else{
        calculationData += e.target.innerHTML;
    }

    display.value = calculationData;
}
