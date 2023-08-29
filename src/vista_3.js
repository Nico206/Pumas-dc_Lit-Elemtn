import { LitElement, html } from "lit-element";
import styleScss from "./vista_3Style"

export class Vista_3 extends LitElement{

    static get styles(){
        return [styleScss]
    
    }

    render(){
        return html`
        <header>
        <div class="container">
            <div class="inner-container">
                <label>Usuarios</label>
                <div class="circle"></div>
            </div>
        </div>

        
        <div class="dropdown">
            <div class="menu-icon">&#9776;</div>
            <ul class="menu">
                <li><a href="login.html">Vista 1</a></li>
                <li><a href="vista2.html">Vista 2</a></li>
                <li><a href="vista3.html">Vista 3</a></li>
                <li><a href="vista4.html">Vista 4</a></li>
                <li><a href="vista5.html">Vista 5</a></li>
            </ul>
        </div>
    </header>

    <div class="gray-box">
        <ul class="list">
            <li><img src="img/icon_football.png" alt="Icono 1">Home</li>
            <li><img src="img/icon_football.png" alt="Icono 2">Presidencia</li>
            <li><img src="img/icon_football.png" alt="Icono 3">Presidencia</li>
            <li><img src="img/icon_football.png" alt="Icono 4">Vice-presidencia</li>
            <li><img src="img/icon_football.png" alt="Icono 5">Secretaria</li>
            <li><img src="img/icon_football.png" alt="Icono 6">Tesoreria</li>
            <li><img src="img/icon_football.png" alt="Icono 7">Revisoria fiscal</li>
            <li><img src="img/icon_football.png" alt="Icono 8">Lista afiliados</li>
            <li><img src="img/icon_football.png" alt="Icono 9">Lista jugadores</li>
            <li><img src="img/icon_football.png" alt="Icono 10">Lista coach's</li>
        </ul>
        
    </div>

    <div class="row1">
        <div class="card">
            <img src="img/icon8.png" >
            <h2>Solicitudes</h2>
            <img src="img/icon7.png" >
        </div>
        <div class="card">
            <img src="img/icon8.png" >
            <h2>Actas</h2>
            <img src="img/icon7.png" >
        </div>
        <div class="card">
            <img src="img/icon9.png" >
            <h2>Pendientes</h2>
            <img src="img/icon7.png" >
        </div>
    </div>

    <div class="solicitud">
        <h1>Solicitudes</h1>
        <h3>Por favor seleccione el tipo de solicitud</h3>
            <label for="opci"></label>
            <select id="opci">
                <option value=""></option>
    
            </select>
        </div>
        <div class="contorno">
            <div class="elemento">
              <input type="text" placeholder="Elemento a comprar" required>
              
            </div>
            <div class="valor">
              <input type="text" placeholder="Valor de la compra" required>
              
            </div>
            <div class="unidades">
              <label for="opciones"></label>
              <select id="opciones">
                <option value="">Unidades a comprar</option>
                
              </select>
            </div>
            <div class="fecha">
              <input type="text" placeholder="Fecha de la compra" required>
              
            </div>
            <div class="descripcion">
              <input type="text" placeholder="Descripcion ">
              
            </div>
            <button>Gestionar</button>
          </div>
        
        `

    }
}

customElements.define("vista-3", Vista_3)