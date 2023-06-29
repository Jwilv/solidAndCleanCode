

type Gender = 'M' | 'F' ;

(() => {
    class Person {
        
        //manera larga de hacer la clase
        
        // public name : string ;
        // public gender : Gender ; 
        // public birthdate: Date ;

        // constructor(name : string, gender : Gender, birthdate : Date ){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate
        // }


        //Forma corta de hacer la clase 

        constructor( public name : string, public gender : Gender, public birthdate : Date){}


    }

    const newPerson = new Person( 'Juan', 'M', new Date('2004-30-03'));
    console.log({ newPerson });
})();