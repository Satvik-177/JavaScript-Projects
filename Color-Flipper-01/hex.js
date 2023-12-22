const genList = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const hexButton = document.getElementById("btn")

const textChange = document.querySelector(".color")

hexButton.addEventListener("click",()=>{

    let genColor = "#"
    for(let i=0; i<6; i++){

        let value = randomNumber();
        genColor += genList[value]
    }

    console.log(genColor)

    document.body.style.backgroundColor = genColor;

    textChange.textContent = genColor;

})

const randomNumber = ()=> {

    return (Math.floor((Math.random())*4))
}

