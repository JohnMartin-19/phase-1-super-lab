// Write your classes here

class tree{
    constructor(species){
         this.species = species
    }
    static definition(){
        console.log("A tree is a perenial plant with elongated stem, trunk or leaves.")
    }
    
}

class decidious extends tree{
    constructor(species, name){
        super(species, name)
        this.name = name
    }
    static decidious(){
        console.log('decidious trees shed their leaves')
    }
}

class evergreen extends tree{
    constructor(species, name){
        super(species,name)
        this.species = species
    }
    static definition(){
        console.log('Evergreens keep their leaves all year round')
    }
}