let todos = document.querySelector(".todos");
let add = document.querySelector(".add");
let text = document.querySelector("#inputAdd-your-new-todo");
add.addEventListener("click", (e) => {
    e.preventDefault()
    let errorMsg=document.querySelector(".error");
    if(text.value.trim()==""){

errorMsg.classList.replace("d-none","d-blok")
    }else{

        todos.innerHTML += `<li><p class="d-inline">${text.value} <button type="submit" class="btn btn-primary mb-3 hidden"><i
        class="fa-solid fa-trash-can fa-lg"></i></button></p></li>`
        text.value = "";
        errorMsg.classList.replace("d-blok","d-none")
    }
})


document.getElementsByClassName("hidden")
