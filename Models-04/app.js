// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click",()=>{

//     modal.classList.add("open-modal")
// })

// closeBtn.addEventListener("click",()=>{

//     modal.classList.remove("open-modal")
// })

const openBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-overlay")

openBtn.addEventListener("click",()=>{

    modal.classList.add("open-modal")
})

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("open-modal")
})