let main = document.querySelector("#main");
let card = document.querySelector("#card");
let btn = document.querySelector("#btn");
let img = document.querySelector("#img");
let t=true;
let p =true;
let text = document.querySelector("#text");
btn.addEventListener("click",()=>{
    t = !t
    // document.documentElement.classList.toggle("Dark", t);
    btn.textContent = t ? "Light" : "Dark"
    main.classList.remove("bg-white","bg-zinc-900")
    main.classList.add(t ? "bg-white" : "bg-zinc-900");
    card.classList.remove("shadow-zinc-500","shadow-sky-500")
    card.classList.add(t ? "shadow-zinc-500" : "shadow-sky-500")
    img.classList.add(t ? "border-zinc-100" : "border-sky-500")
    
})
btn.addEventListener("click",()=>{
    p = !p
    // document.documentElement.classList.toggle("Dark", t);
    // btn.textContent = t ? "Light" : "Dark"
    card.classList.remove("bg-white","bg-zinc-900")
    card.classList.add(p ? "bg-white" : "bg-zinc-900");
    card.classList.remove("text-black","text-sky-900")
    card.classList.add(p ? "text-black" : "text-sky-900")
    text.classList.remove("text-zinc-800","text-sky-900");
    text.classList.add(p ? "text-zinc-800" : "text-sky-500");


})