export default class CharacterClass {
    Character = null;
    name: '';
    level: 0;
    href: null;
    source: null;
    hit_die: null;
    hit_die_avg: null;
    
    apply(){
        
    }
    
    toString = function(){
        return this.name + " " + this.level;
    }
}