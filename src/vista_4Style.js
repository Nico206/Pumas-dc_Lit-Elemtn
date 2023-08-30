import { css } from "lit-element";

export default css `


.container {

    position: relative;
    background-color: red;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 32px;
    max-width: 400px;
}



.inner-container {
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    position: relative;
}

label {
    position: absolute;
    left: 70px;
    color: rgb(114, 116, 117);
    font-size: 16px;
    pointer-events: none;
    font-weight: bold;
}

.circle {
    background-color: white;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    position: absolute;
    top: -20px;
    left: -22px;
    background-size: cover;
    background-position: center;
    background-image: url("img/logo.png");
}

.gray-box {
    background-color: #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 15px;
    max-width: 270px;
}

.list {
    list-style-type:none;
    padding: 0;
}

.list li {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: rgb(79, 81, 83);
    font-weight: bold;
}


.list img {
    height: 15px;
    margin-right: 10px; /* Ajusta el espaciado entre el icono y el texto */
}


.row1 {
    display: flex; /* Alineamos los elementos horizontalmente */
    align-items: flex-end; /* Alineamos los elementos verticalmente al pie */
    margin-bottom: 10px;
    max-width: 900px;
    margin-top: -530px ;
    margin-left: 400px;
  }

  
  .card {
    flex: 1;
    width: 300px;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.7);
    margin-right: 40px;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    display: flex; 
    position: relative;
    z-index: 1; 
}


.card img {
    max-width: 47px; 
    height: 50px;
    margin-right: 10px; 
}


.card h2 {
    font-size: 18px;
    margin: 10px 0 10px 20px; 
    color:#5a5a5a;
    position: relative; 
    top: 10px; 
    right: 32px;
}

.card h2::after {
    content: "";
    display: block;
    width: 147%; /* Ajusta el ancho del subrayado (por ejemplo, 50% del ancho del título) */
    border-bottom: 2px solid #afadad; /* Ajusta el grosor y el color del subrayado */
    position: absolute;
    left: 3%; /* Ajusta la posición horizontal del subrayado */
}

.card img:nth-child(3) {
    position: absolute;
    top:45%;
    left: 215px;
    transform: translateY(-50%);
    width: 30px; /* Ajusta el ancho de la segunda imagen */
    height: auto; /* Ajusta la altura automáticamente */
}


/* Posicionar el contenedor del menú en la esquina superior derecha */
.dropdown {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 55px;
  }
  
  /* Estilos para el ícono de las tres rayas (Font Awesome) */
  .menu-icon {
    display: flex; /* Activa el contenedor flex */
    align-items: center; /* Centra verticalmente los elementos */
    justify-content: center; /* Centra horizontalmente los elementos */
    cursor: pointer;
    font-size: 30px;
    padding: 8px;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #ffffff;

  }
  
  /* Estilos para la lista desplegable */
  .menu {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;
    min-width: 150px;
    right: 20px;
    top: 20px;
    z-index: 2; /* Aumenta el z-index del menú desplegable */
}
  
  .menu li {
    list-style: none;
  }
  
  .menu a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
  }
  
/* Muestra y oculta el contenido de la lista desplegable al hacer clic en el ícono */
.menu-icon:hover + .menu,
.menu:hover {
  display: block;
}

.acta h1{
    font-size: 33px;
    color:#5a5a5a;
    position: relative; 
    top: 1.5pc;
    left: 42pc;
    text-align: center;
    border-bottom: 1px solid silver;
    max-width: 271px;
}



/* Estilos para la sección original */
.acta h3 {
    font-size: 18px;
    color: #353434;
    position: relative;
    top: 1.5pc;
    left: -19pc;
    text-align: center;
    font-family: Arial light;
}

#opciones {
    width: 265px;
    height: 31px;
    font-size: 16px;
    position: absolute;
    left: 33pc;
    top: 23pc;
    border-radius: 10px;
}

/* Estilos para la sección duplicada */
.acta2 h3 {
    font-size: 18px;
    color: #353434;
    position: absolute;
    top: 19.6pc;
    left: 54pc;
    text-align: center;
    font-family: Arial light;
}

#opciones2 {
    width: 265px;
    height: 31px;
    font-size: 16px;
    position: absolute;
    left: 55pc;
    top: 23pc;
    border-radius: 10px;
}


.contorno {
    width: 700px;
    height: 240px;
    border: 2px solid #afadad;
    border-radius: 20px;
    background-color: #ffffff;
    position: absolute;
    top: 44%;
    left: 24%;
    overflow: hidden;
    padding: 10px;
}

table{
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    position: relative; 
    color: #ffffff;
    border-radius: 15px; 
}

.table-container {
    border-radius: 15px; 
    overflow: hidden; 
}

th, td {
    border: 1px solid #aaa2a2;
    padding: 14px;
    text-align: center;
}

th.narrow-column {
    width: 90px; 
}

th:not(.narrow-column), td:not(.narrow-column) {
    width: 120px; 
}

th {
    background-color: #504e4e;
}

tr:nth-child(n+2) {
    background-color: #ffffff;
}

`