import React, { Component } from 'react';
import Axios from 'axios';

class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    Axios.post('http://localhost:8765', {
      "action": "deckNames",
      "version": 5
    })
      .then(res => {
        console.log(res.data.result);
        this.setState({
          apiData: res.data.result,
          apiDataLoaded: true,
        });
      });
  }

  showDecksOnPage() {
    return this.state.apiData.map((deck, index) => {
      return (
        <div className="deck" key={index}>
          <p>{deck}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="deck-list">
        <div>
          {(this.state.apiDataLoaded) ? this.showDecksOnPage() : <p>Loading. . .</p>}
        </div>
      </div>
    );
  }
}

export default DeckList;
