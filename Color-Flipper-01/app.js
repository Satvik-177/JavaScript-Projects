const colorList = ["red","green","rgb(25,14,223)","#F1f5f8"]

const button = document.getElementById("btn")
const colorCode = document.querySelector(".color")

button.addEventListener("click",()=>{

    const values = randomValue();

    document.body.style.backgroundColor = colorList[values];

    colorCode.textContent = colorList[values]
    console.log(values)
})

const randomValue = ()=>{

    return (Math.floor((Math.random())*4))
}