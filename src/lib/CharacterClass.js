export default class CharacterClass {
    Character = null;
    name: '';
    level: 0;
    href: null;
    source: null;
    hitDie: null;
    hitDieAvg: null;
    
    apply(){
        
    }
    
    toString = function(){
        return this.name + " " + this.level;
    }
}