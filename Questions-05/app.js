const questions = document.querySelectorAll(".question")

questions.forEach(function(question){

   // console.log(question)
    const btn = question.querySelector(".question-btn")

    btn.addEventListener("click",()=>{

        questions.forEach((item)=>{

            console.log(item)
            if(item !== question){

                item.classList.remove("show-text")
            }

        })
       
        question.classList.toggle("show-text")
    })
})