import CharacterClass from '../lib/CharacterClass';

export default class Fighter extends CharacterClass {
        name = 'Fighter';
        href: "https://www.dndbeyond.com/classes/fighter";
        source: "phb p.70"
        level: 0;
        hit_die: "d10";
        hit_die_avg: 6;
        
        apply(){
            this.Character.addProficiency("All armor");
            this.Character.addProficiency("Shileds");
            this.Character.addProficiency("Simple weapons");
            this.Character.addProficiency("Martial weapons");
            
            this.Character.addSavingThrow("str");
        }
}