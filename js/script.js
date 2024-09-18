
async function alterarTema(){
    let tema = document.getElementById("tema");
    let div = document.getElementsByTagName("div");
    let nav = document.getElementsByTagName("nav")[0];
    let body = document.getElementsByTagName("body")[0];
    let homeTab = document.getElementById("home-tab");
    let profileTab = document.getElementById("profile-tab");
    let contactTab = document.getElementById("contact-tab");

    if(tema.innerText == "Dark"){
        await localStorage.setItem("tema", "Light");
        tema.innerText = localStorage.getItem("tema");
        tema.style.backgroundColor = "white";
        tema.style.color = "black";

        for(let i = 0;i < div.length; i++) {
            div[i].style.backgroundColor = "black";
            div[i].style.color = "white";
        }

        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        body.style.backgroundColor = "black";

        homeTab.classList.add("bg-dark");
        homeTab.classList.add("text-light");
        profileTab.classList.add("bg-dark");
        profileTab.classList.add("text-light");
        contactTab.classList.add("bg-dark");
        contactTab.classList.add("text-light");

        
    }else {
        await localStorage.setItem("tema", "Dark");
        tema.innerText = localStorage.getItem("tema");
        tema.style.backgroundColor = "black";
        tema.style.color = "white";
        
        for(let j = 0; j < div.length; j++) {
            div[j].style.backgroundColor = "white";
            div[j].style.color = "white";
            div[j].style.color = "black";
        }

        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        body.style.backgroundColor = "white";

        homeTab.classList.remove("bg-dark");
        homeTab.classList.remove("text-light");
        profileTab.classList.remove("bg-dark");
        profileTab.classList.remove("text-light");
        contactTab.classList.remove("bg-dark");
        contactTab.classList.remove("text-light");

    }
}
