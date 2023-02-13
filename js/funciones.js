//para manejo del nav, ocultando y mostrando la info

activaMenu('estudios');
activaMenu('experiencia');
activaMenu('habilidades');

function activaMenu(cual) {
    document.getElementById('nav_' + cual).addEventListener('click', function () {
      ocultoInformacion();
      document.getElementById('info_' + cual).removeAttribute("hidden");
      animaTitulo(cual);
    });
} 

//oculta info (despues se muestra segun click en nav)
function ocultoInformacion() {
    document.getElementById('info_estudios').setAttribute("hidden",true);
    document.getElementById('info_experiencia').setAttribute("hidden",true);
    document.getElementById('info_habilidades').setAttribute("hidden",true);
    return;
}

function animaTitulo(cual) {
  const cont = document.getElementById("div_" + cual);   
  const elem = document.getElementById("tit_" + cual);   
  let pos = (cont.offsetWidth - elem.offsetWidth - 5);
  let intervalo = null;
  intervalo = setInterval(mueve, 1);
  function mueve() {
    if (pos <= 0) {
      clearInterval(intervalo);
    } else {
       pos = pos - 5; 
       elem.style.left = pos + "px"; 
    }
  }
}

//muestra y oculta info adicional
document.getElementById('mas_info').addEventListener('click', function () {
  if (document.getElementById('info_adic').classList.contains("mostrar")) {
    document.getElementById('info_adic').className = "no_mostrar";  
    document.getElementById('mas_info').className = "fa-solid fa-caret-down";
  } else {
    document.getElementById('info_adic').className = "mostrar";
    document.getElementById('mas_info').className = "fa-solid fa-caret-up";
  }
});
