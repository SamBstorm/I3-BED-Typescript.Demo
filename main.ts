/*
undefined   => Quand la variable n'a pas reçu de valeur
null        => Quand la variable à reçu un null volontaire
void        => Quand il n'y a pas de valeur attendu à la fin d'une fonction
*/

let nom : string = "Samuel";
let nb : number = 42;

let variableFoureTout : any = 'Texte';
variableFoureTout = 21;
variableFoureTout = false;
variableFoureTout = function(){console.log('Hello');};

let textOuNumber : string|number = "text";
textOuNumber = 21;


class Person implements IPerson{
    public Prenom : string;
    public Nom : string;
    public Age : number;
    public Gender : boolean;
    private _email : string;

    get Email() : string{ return this._email; }

    set Email(value: string) { this._email = value; }
    
    constructor(prenom : string, nom: string, age : number, email : string){
        this.Prenom = prenom;
        this.Nom = nom;
        this.Age = age;
        this._email = email;
    }

    public Saluer() : void{
        console.log(`Bonjour, je m'appelle ${this.Nom} ${this.Prenom}, et j'ai ${this.Age} ans.`);    
    }

    public DireBonjourA(person : IPerson) : string{
        return `Heureux de vous rencontrer ${(person.Gender)?'M.':'Mme.'} ${person.Nom}!`;
    }
}

let p : Person = new Person("Samuel", "Legrain", 33, "samuel.legrain@bstorm.be");

let p2 : IPerson = {
    Nom : "Toto", 
    Prenom : "Titi", 
    Age : 20, 
    Email : "toto@titi.test", 
    Gender : true
};

p.Saluer();

interface IPerson{
    Prenom : string;
    Nom : string;
    Age: number;
    Gender: boolean;
    Email: string;
}

console.log(p.DireBonjourA(p2));

