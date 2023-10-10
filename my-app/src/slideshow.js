var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
// autoSlidesShow();
showSlides(current);

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display ="none"; // 배열의 모든 이미지를 감춘다
    }
    slides[n].style.display = "block"; //n 번째의 이미지만 화면에 표시
}

function prevSlide(){
   if(current > 0) current -= 1; //current 값이 0보다 크면 이전으로 간다.
   else current = slides.length -1; // 첫번째 이미지라면 마지막 위치로
   showSlides(current); // 현재 위치한 이미지를 표시
}

function nextSlide(){
    if(current < slides.length -1) current += 1; //current 값이 0보다 크면 이전으로 간다.
    else current =0; // 마지막 이미지라면 첫번째 위치로
    showSlides(current); // 현재 위치한 이미지를 표시
 }

//  function autoSlidesShow(){ // 자동 슬라이드 쇼 기능
//     var slides = document.querySelectorAll("#slides > img");
//     for(var i = 0; i < slides.length; i++){
//         slides[i].style.display ="none"; // 배열의 모든 이미지를 감춘다
//     }
//     current++; // 다음 페이지로 이동
//     if(current>slides.length) // 마지막 페이지에 도달하면
//     current = 1; //

//     slides[current - 1].style.display = "block"; //현재에 해당하는 이미지를 출력
//     setTimeout(autoSlidesShow,2000); //2초마다 실행해서 사진을 넘김
// }


 
