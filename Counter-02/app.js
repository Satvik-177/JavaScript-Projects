//Naive approach

// const decreaseButton = document.getElementById("decrease")

// const resetButton = document.getElementById("reset")

// const increaseButton = document.getElementById("increase")

// const textValue = document.getElementById("value")

// let val=0;

// decreaseButton.addEventListener("click",()=>{

//   const decNum = decValue(val);
//   textValue.textContent = decNum;

// })

// increaseButton.addEventListener("click",()=>{

//     const incNum = incValue(val);
//     textValue.textContent = incNum;
  
//   })

// resetButton.addEventListener("click",()=>{

//     const incNum = resetValue(val);
//     textValue.textContent = incNum;
  
//   })


// const decValue = ()=> {

//      val -= 1;
//      return val;
// }

// const incValue = ()=> {

//     val += 1;
//     return val;
// }

// const resetValue = ()=> {

//     val = 0;
//     return val;
// }


//Better Approach

let count = 0;

const btns = document.querySelectorAll(".btn")

const values = document.querySelector("#value")

btns.forEach(function(btn){

   console.log(btn);
    btn.addEventListener("click",(e)=>{

        /*e.currentTarget->triggers the event occured like increase button clicked or other button
        .classList->returns the entire classList from HTML DOM of the current event*/
      
       const styles = e.currentTarget.classList

       if(styles.contains("decrease")){

        count--;
       }

       else if(styles.contains("increase")){

        count++;
       }

       else {

        count = 0;
       }

       if(count > 0)
       values.style.color = "green"

       if(count<0)
       values.style.color = "red"

       if(count == 0) {

        values.style.color = "#222"
       }

       values.textContent = count;
    })
})