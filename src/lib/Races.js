import Human from '../Races/Human';

export default class Races {
        manifest = {
            "Human": Human
        };
        
        get(name){
            return new this.manifest[name]();
        }
}