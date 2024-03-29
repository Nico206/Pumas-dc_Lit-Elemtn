import { LitElement, html } from "lit-element";
import styleScss from "./vista_2Style"

export class Vista_2 extends LitElement{

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
                <li><a href="index.html">Vista 1</a></li>
                <li><a href="2vista.html">Vista 2</a></li>
                <li><a href="3vista.html">Vista 3</a></li>
                <li><a href="4vista.html">Vista 4</a></li>
                <li><a href="5vista.html">Vista 5</a></li>
            </ul>
        </div>
    </header>

    <div class="gray-box">
        <ul class="list">
            <!-- Elementos de la lista -->
            <li><img src="src/img/icon_football.png" alt="Icono 1">Home</li>
            <li><img src="src/img/icon_football.png" alt="Icono 2">Presidencia</li>
            <li><img src="src/img/icon_football.png" alt="Icono 3">Presidencia</li>
            <li><img src="src/img/icon_football.png" alt="Icono 4">Vice-presidencia</li>
            <li><img src="src/img/icon_football.png" alt="Icono 5">Secretaria</li>
            <li><img src="src/img/icon_football.png" alt="Icono 6">Tesoreria</li>
            <li><img src="src/img/icon_football.png" alt="Icono 7">Revisoria fiscal</li>
            <li><img src="src/img/icon_football.png" alt="Icono 8">Lista afiliados</li>
            <li><img src="src/img/icon_football.png" alt="Icono 9">Lista jugadores</li>
            <li><img src="src/img/icon_football.png" alt="Icono 10">Lista coach's</li>
        </ul>
        
    </div>

    <div class="row1">
        <div class="card">
            <h2>Actas</h2>
            
            <img src="src/img/icon1.png" >
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Certificados</h2>
            
            <img src="src/img/icon2.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Reuniones</h2>
            
            <img src="src/img/icon3.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>

    <div class="row2">
        <div class="card">
            <h2>Asistencia</h2>
            <br>
            <img src="src/img/icon4.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Comunicación</h2>
            <br>
            <img src="src/img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
        <div class="card">
            <h2>Estado de cuenta</h2>
            <br>
            <img src="src/img/icon5.png" alt="Descripción de la imagen">
            <button>Gestionar</button>
        </div>
    </div>
        `
    }
}
   
    
customElements.define("vista-2", Vista_2)
