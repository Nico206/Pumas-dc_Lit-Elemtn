import { LitElement, html } from "lit-element";
import styleScss from "./loginStyle"


export class form_login extends LitElement{

    static get styles(){
        return [styleScss]
    
    }

    render(){
        return html`
        
        <body>
            <div class="formulario">
                <h1>PUMAS DC</h1>
            <form method="post">
            <div class="username">
                <input type="text" placeholder="Usuario" required autofocus>
                
            </div>
            <div class="contraseña">
                <input type="password" placeholder="Contraseña" required>
                
            </div>
            
                <input type="submit" value="INGRESAR">
            <a href="2vista.html" class="recordar">Olvidó su contraseña?</a>
            </form>
        </div>
        </body>

        `
    }
}
   
    
customElements.define("form-login", form_login)
