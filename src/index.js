import React from 'react';
import { render } from 'react-dom';
import citations from './citations';
import './index.css';

class App extends React.Component {

  state = {
    citation: 'Bienvenue dans ce générateur de citations réalisé avec React',
    auteur: 'Eddy'
  };

  genererCitation = event => {
    //Transformation des citations en array
    const keyArray = Object.keys(citations);
    //On génère une citation au hasard
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    //On récupère la citation dans notre State
    this.setState(citations[randomKey]);
  };

  render() {
    return (
      <div>
        <p>
          {this.state.citation}
          <span>- {this.state.auteur}</span>
        </p>
        <button onClick ={e => this.genererCitation(e)} >Générer</button>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);