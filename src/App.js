import React, { Component } from 'react';
import './App.css';

import Character from './lib/Character';

class App extends Component {
    
    constructor(props){
        super(props);
        var Char = new Character();
        Char.name = 'Joe';
        Char.playerName = "Brian";
        Char.setRace('Human');
        Char.addClass('Fighter', 1);
        Char.Race.apply();
        console.log(Char);
        
        this.state = { Character: Char };
    }
  render() {
      let Char = this.state.Character;
    return (
      <div className="App">
          <h1>{Char.name}</h1>
          <p>{Char.Race.name} {Char.classes.join(' / ')} </p>
          <table>
            <tbody>
            {Object.keys(Char.manifest.abilityScores).map(abilityScore =>
              <tr key={abilityScore}>
                  <td>{Char.manifest.abilityScores[abilityScore].code}:</td>
                  <td>{Char.getAbilityScore(abilityScore)} ({Char.getAbilityScoreModStr(abilityScore)})</td>
              </tr>       
            )}
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
