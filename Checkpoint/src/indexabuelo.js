import * as components from './src/components/indexpadre.js'
class cardPre extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
    render()
    }
    
    render(){this.shadowRoot.innerHTML= 
<card-pre><?card-pre>
    }
}

customElements.define ("card-pre", cardPre)
export default cardPre