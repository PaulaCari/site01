//$('.slider-principal').slick();  //peguei da documentação faze o movimento horizontal da imagem nex e previous

$('.slider-principal').slick({  //https://kenwheeler.github.io/slick/ troquei responsivo pela class
  dots: true,       //são as slider
  infinite: true,  //animação infinita
  speed: 300,       //velocidade
  slidesToShow: 1,    //quantos slider por pagina vaimudar de 1 em 1 por pagina tenho 4img no html
  adaptiveHeight: true,
  autoplay: true,    //pego da documenttação autoplay
  autoplaySpeed: 2000,
}); 



