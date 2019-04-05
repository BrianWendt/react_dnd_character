import Race from '../lib/Race';

export default class Human extends Race {
        name = 'Human';
        href: "https://www.dndbeyond.com/races/human";
        source: "phb p.29";
        
        apply(){
            this.Character.log("Human Ability Score Increase: Your ability scores each increase by 1.");
            this.Character.adjustAbilityScore("str", +1);
            this.Character.adjustAbilityScore("dex", +1);
            this.Character.adjustAbilityScore("con", +1);
            this.Character.adjustAbilityScore("int", +1);
            this.Character.adjustAbilityScore("wis", +1);
            this.Character.adjustAbilityScore("cha", +1);
            this.Character.log("Human: Your base walking speed is 30 feet.");
            this.Character.log("You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.");
        }
}