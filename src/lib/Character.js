import Races from './Races';
import Classes from './Classes';

export default class Character {
        _log = [];
        name = '';
        Race = {};
        classes = [];
        speed = 30;
        xp = 0;
        
        abilityScores = {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        }
        
        savingThrows = {
            str: false,
            dex: false,
            con: false,
            int: false,
            wis: false,
            cha: false
        }
        
        proficiencies = [];
        
        options = [];
        
        setRace(name){
            this.Race = (new Races()).get(name);
            this.Race.Character = this;
        }
        
        addClass(name, level = 1){
            var NewClass =(new Classes()).get(name);
            NewClass.Character = this;
            NewClass.level = level;
            this.classes.push(NewClass);
            NewClass.apply();
        }
        
        addProficiency(name){
            this.proficiencies.push(name);
        }
        
        addSavingThrow(name){
            this.savingThrows[name] = true;
        }
        
        adjustAbilityScore(name, mod){
            this.abilityScores[name] += mod;
        }
        
        getAbilityScore(name){
            return this.abilityScores[name];
        }
        
        getAbilityScoreMod(name){
            return Math.floor((this.getAbilityScore(name)-10)/2);
        }
        
        getAbilityScoreModStr(name){
            const mod = this.getAbilityScoreMod(name);
            return mod > -1 ? "+" + mod : mod;
        }
        
        log(text){
            this._log.push(text);
        }
        
        getAbilityScoreName(name){
            return this.manifest.abilityScores[name].name;
        }
        
        getAbilityScoreNameCode(name){
            return this.manifest.abilityScores[name].code;
        }
        
        getLevels(){
            var levels = 0;
            for(var l in this.manifest.levels){
                console.log(this.manifest.levels[l], this.xp)
                var min_xp = this.manifest.levels[l].xp;
                if(this.xp > min_xp){
                    levels = this.manifest.levels[l].level;
                }
            }
            return levels;
        }
        
        manifest = {
            abilityScores: {
                str: {name: "Stength", code: "STR"},
                dex: {name: "Dexterity", code: "DEX"},
                con: {name: "Constitution", code: "CON"},
                int: {name: "Intelligence", code: "INT"},
                wis: {name: "Wisdom", code: "WIS"},
                cha: {name: "Charisma", code: "CHA"}
            },
            levels: {
                1: {"xp": 0, "level": 1, "proficiencyBonus": 2},
                2: {"xp": 300, "level": 2, "proficiencyBonus": 2},
                3: {"xp": 900, "level": 3, "proficiencyBonus": 2},
                4: {"xp": 2700, "level": 4, "proficiencyBonus": 2},
                5: {"xp": 6500, "level": 5, "proficiencyBonus": 3},
                6: {"xp": 14000, "level": 6, "proficiencyBonus": 3},
                7: {"xp": 23000, "level": 7, "proficiencyBonus": 3},
                8: {"xp": 34000, "level": 8, "proficiencyBonus": 3},
                9: {"xp": 48000, "level": 9, "proficiencyBonus": 4},
                10: {"xp": 64000, "level": 10, "proficiencyBonus": 4},
                11: {"xp": 85000, "level": 11, "proficiencyBonus": 4},
                12: {"xp": 100000, "level": 12, "proficiencyBonus": 4},
                13: {"xp": 120000, "level": 13, "proficiencyBonus": 5},
                14: {"xp": 140000, "level": 14, "proficiencyBonus": 5},
                15: {"xp": 165000, "level": 15, "proficiencyBonus": 5},
                16: {"xp": 195000, "level": 16, "proficiencyBonus": 5},
                17: {"xp": 225000, "level": 17, "proficiencyBonus": 6},
                18: {"xp": 265000, "level": 18, "proficiencyBonus": 6},
                19: {"xp": 305000, "level": 19, "proficiencyBonus": 6},
                20: {"xp": 355000, "level": 20, "proficiencyBonus": 6}
            }
        }
}