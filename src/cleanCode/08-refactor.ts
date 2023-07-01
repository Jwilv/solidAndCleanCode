(()=>{
    // aplicar el principio de responsabilidad unica 
    // Priorizar la composicioon frente a la herencia 

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio' ;

    class HtmlElement{
        constructor(
            public id : string,
            public type : HtmlType,
        ){}
    }
    
    class InputAttributes{
        constructor(
            public value : string,
            public placeholder : string,
        ){
        }
    }

    class InputEvents{

        setFocus(){};
        getValue(){};
        isActive(){};
        removeValue(){};

    }

    class InputElement{

        public inputEvents : InputEvents;
        public inputAttributes : InputAttributes;
        public htmlElement :  HtmlElement;

        constructor(value : string, placeholder : string,  id : string){
            this.inputEvents = new InputEvents();
            this.inputAttributes = new InputAttributes(value, placeholder)
            this.htmlElement = new HtmlElement(id, 'input')

        }
    }

    const nameField = new InputElement( 'juan', 'name', '123')

    console.log({nameField})
})();