const carousel = document.querySelector('.carousel');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
function scrollCarousel(directon){
  const carousel = document.querySelector(".carousel");
  const scrollAmount =220;
  carousel.scrollBy({
    left: directon*scrollAmount,
    behavior: 'smooth'
  });
  setTimeout(checkScrollButtons, 200);
}
  function checkScrollButtons(){
    if (carousel.scrollLeft==0){
      leftBtn.style.visibility='hidden';
    }else{
      leftBtn.style.visibility='visible';

    }
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
      rightBtn.style.visibility = 'hidden';
    } else {
      rightBtn.style.visibility = 'visible';
    }

  }
  checkScrollButtons();

  // Also run check when user scrolls manually
  carousel.addEventListener('scroll', checkScrollButtons);
