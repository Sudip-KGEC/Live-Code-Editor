let htmlInp = document.querySelector("#html-area");
let cssInp = document.querySelector("#css-area") ;
let jsInp = document.querySelector("#js-area") ;

let saveBut = document.querySelector("#save")
let output = document.querySelector("#output-screen")

let outputContainer = document.querySelector(".output-con");
let fullscreen = document.querySelector("#fullScrn")

let copy = document.querySelectorAll(".copy")


saveBut.addEventListener("click", () => {
 output.contentDocument.body.innerHTML = htmlInp.value;
 output.contentDocument.head.innerHTML = `<style>${cssInp.value}</style>` ; 
 output.contentWindow.eval(jsInp.value)
})

fullscreen.addEventListener("click" ,() => {
 outputContainer.classList.toggle("output-fullscreen")
})

copy.forEach((e) => {
  e.addEventListener("click" , ()=>{
    if (e.classList.contains("copyhtml")){
      navigator.clipboard.writeText(htmlInp.value)
    }else if (e.classList.contains("copycss")){
      navigator.clipboard.writeText(cssInp.value)
    }else {
      navigator.clipboard.writeText(jsInp.value)
    }
  })
 
})