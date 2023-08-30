import { LitElement, html } from "lit-element";
import styleScss from "./vista_4Style"

export class Vista_4 extends LitElement{
    static get styles(){
        return [styleScss]
    } 

    render(){
        return html `
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
            <img src="src/img/icon8.png" >
            <h2>Solicitudes</h2>
            <img src="src/img/icon7.png" >
        </div>
        <div class="card">
            <img src="src/img/icon8.png" >
            <h2>Actas</h2>
            <img src="src/img/icon7.png" >
        </div>
        <div class="card">
            <img src="src/img/icon9.png" >
            <h2>Pendientes</h2>
            <img src="src/img/icon7.png" >
        </div>
    </div>

    <div class="acta">
        <h1>Acta</h1>
        <h3>Por favor seleccione el año a consultar</h3>

        <label for="opciones"></label>
        <select id="opciones">
            <option value=""></option>
           
        </select>
    </div>
    
    <div class="acta2">
        <h3>Por favor seleccione el mes a consultar</h3>
        <label for="opciones2"></label>
        <select id="opciones2">
            <option value=""></option>
            
        </select>
    </div>

    <div class="contorno">
        <div class="table-container">
            <table>
                <tr>
                    <th class="narrow-column">Nº de Referencia</th>
                    <th>Titulo</th>
                    <th>Fecha</th>
                    <th>Url detalle</th>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
        `
    }
}

customElements.define("vista-4", Vista_4)