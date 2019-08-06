$(document).on('click', '.icone', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

document.querySelector(".menu-button").addEventListener("click", function(event) {
   event.preventDefault();
   event.stopPropagation();
   document.querySelector('.menu-dropdown').classList.remove('hidden');
   document.querySelector('.menu-button').classList.add('text-black');
});

document.getElementsByTagName('body')[0].addEventListener('click', function(event){
  if(!event.target.classList.contains('.menu-button')){
    document.querySelector('.menu-dropdown').classList.add('hidden');
    document.querySelector('.menu-button').classList.remove('text-black');
  }
});

function hidden_containers(){
  document.querySelectorAll('.container').forEach(function(element){
    element.classList.add('displayNone');
  });
}

document.querySelector('.icones').addEventListener('click', function(event){
  if(event.target !== event.currentTarget){
    let container_name = event.target.dataset.container;
    hidden_containers();
    document.querySelector(`.${container_name}`).classList.remove('displayNone');
  }
});
/*função que chama o modal*/
$("#detalhe_pedido").click(function teste2(){
  document.getElementById("modal").innerHTML = swal("Write something here:", {
    content: "input",
  })
  .then((value) => {
    swal(`You typed: ${value}`);
  });``
  teste1();
/**/
})

function teste1(){
  swal({
    text: "Write something here:",
    content: el,
    buttons: {
      confirm: {
        /*
         * We need to initialize the value of the button to
         * an empty string instead of "true":
         */
        value: DEFAULT_INPUT_TEXT,
      },
    },
  })
  .then((value) => {
    swal(`You typed: ${value}`);
  });
/**/
}


