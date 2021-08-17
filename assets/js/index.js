console.log('hi')

let searchBtns = document.getElementById("search-btns");
let searchBtns2 = document.getElementById("search-btns2");
let searchBtns3 = document.getElementById("search-btns3");

searchBtns.addEventListener("click",  myFunction => {
    searchBtns.style.backgroundColor = "rgba(224, 138, 245, 0.5)";
	searchBtns2.style.backgroundColor = "rgba(138,165,255, 0.5)";
    searchBtns3.style.backgroundColor = "rgba(138,165,255, 0.5)";
})

searchBtns2.addEventListener("click",  myFunction => {
	searchBtns.style.backgroundColor = "rgba(138,165,255, 0.5)";
    searchBtns2.style.backgroundColor = "rgba(255,122,122, 0.5)";
    searchBtns3.style.backgroundColor = "rgba(138,165,255, 0.5)";
})

searchBtns3.addEventListener("click",  myFunction => {
	searchBtns.style.backgroundColor = "rgba(138,165,255, 0.5)";
    searchBtns2.style.backgroundColor = "rgba(138,165,255, 0.5)";
    searchBtns3.style.backgroundColor = "rgba(16,97,63, 0.2)";
})


