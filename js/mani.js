$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

function mostrarSurpresa() {
  alert('Ola, Mundo!!! , Meu primeiro site!');
  document.querySelector('logo').style.display ='block';
}

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordconfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit",(Event) =>{
  Event.preventDefault();
  alert("cadastrado com sucesso")
})



/*https://www.youtube.com/watch?v=k7iMlH5YyK8*/

//const mostrarSurpresa= document.getElementById('logo') .style.display = "block";


//pagina  https://www.youtube.com/watch?v=HM0qhDb0sO8

 

