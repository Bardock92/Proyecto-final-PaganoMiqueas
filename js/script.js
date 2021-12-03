const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPorfolio = document.querySelector(".img-modal-js");


$portfolio.addEventListener ("click", (e)=>{

    if (e.target.classList.contains("img-btn-modal-js")) {
        //src
        let urlImg = e.target.atributtes[0].nodeValue
        //add modal
        $modalImgPorfolio.src = urlImg
    }
});

