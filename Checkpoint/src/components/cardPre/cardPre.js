class cardPre extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes(){
        return ["title","description","value","inStock","image"]
    }

    connectedCallback(){
    render()
    }
    attributeChangedCallback(propName,oldValue,newValue){
    this[propName]=newValue
    }
    
    render(){ `
        <h1 ${this.title}></h1>
        <h3 ${this.description}></h3>
        <p ${this.value}></p>
        <p ${this.inStock}></p>
        <img ${this.image}></img>
    }`;

    }
}
customElements.define ("card-pre", cardPre)
export default cardPre