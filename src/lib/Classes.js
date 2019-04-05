import Fighter from "../Classes/Fighter";

export default class Classes {
        manifest = {
            "Fighter": Fighter
        };
        
        get(name){
            return new this.manifest[name]();
        }
}