//slide dinamiche
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

//ciclo for
const itemsContainer = document.querySelector(".slider-items")

for (let i = 0; i < imagesArray.length; i++) {
  const currentImage = imagesArray[i];

  const sliderItem = 
    `<div class="item">
      <img src="${currentImage}" alt="">
    </div>`

  itemsContainer.innerHTML += sliderItem;
}

//stato iniziale
const itemsArray = document.getElementsByClassName("item");

//prima slide visibile
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

//nextBtn
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function() {

      prevBtn.classList.remove("hidden")
      itemsArray[activeItemIndex].classList.remove("active");
      activeItemIndex++;
      itemsArray[activeItemIndex].classList.add("active");
      if (activeItemIndex === itemsArray.length - 1) {
        nextBtn.classList.add("hidden")
      }
})

//prevBtn
const prevBtn = document.querySelector(".prev");
prevBtn.classList.add("hidden")
prevBtn.addEventListener("click", function() {
      nextBtn.classList.remove("hidden")
      itemsArray[activeItemIndex].classList.remove("active");
      activeItemIndex--;
      itemsArray[activeItemIndex].classList.add("active");
      if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden")
      }
})
