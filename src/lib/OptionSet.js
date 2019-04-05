export default class OptionSet {
    this.Character = {};
    this.options = [];
    
    constructor(Character){
        this.Character = Character;
    }
    
    addOption(){
        let Item = new OptionSetItem(this);
        this.options.push(Item);
        return Item;
    }
}

export class OptionsSetItem {
    this.OptionSet = {};
    this.text = '';
    this.apply = ();
    
    constructor(OptionSet){
        this.OptionSet = OptionSet;
    }
    
    this.setText(text){ this.text = text; }
    this.getText(text){ return this.text; }
    
    this.setApply(callback){ this.apply = callback; }
    
    this.modfiyAttribute(attr, mod){
        this.OptionSet.Character.modfiyAttribute(attr, mod);
    }
}