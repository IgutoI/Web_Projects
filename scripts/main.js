const myImage = document.querySelector("img");

myImage.addEventListener("click", ()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/terra.png"){
        myImage.setAttribute("src", "images/vegetta.webp");
    }else{
        myImage.setAttribute("src" ,"images/terra.png" );
    }
})

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");









function setUserName(){
    const myName = prompt("digite seu nome de usuario");
    localStorage.setItem("name", myName);
    myHeading.textContent("A terra não é impressioante, "+myName+"?");
}
if (!localStorage.getItem("name")){
    setUserName();

} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'A terra não é impressionante, ' + storedName +"?";
}

myButton.addEventListener("click", ()=>{
    setUserName();
})


/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";


let sorvete = "baunilha";
if (sorvete ==="baunilha") {
    alert("baunilha pra todo mundo");
} else{
    alert("sem baunilha pra gente");
}

function multiply(num1, num2){
    let mult = num1*num2;
    return mult;
}
let quadrado20  = multiply(20,20);
alert("O quadrado de 20 é "+ quadrado20);


document.querySelector("html").addEventListener("click", () => {
    alert("pare de  clicar em mim");
})

*/