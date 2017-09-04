import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import React from 'react';
import styled from 'styled-components';

const FIREBASE_URL = 'https://thisforthat.firebaseio.com/data/';

const ComponentStyled = styled.div`
  .button {
    border: 1px solid lightgray;
    padding: 0.5em 1em;
    background-color: #39f;
    color: white;
    display: inline-block;
  }

  .content {
    margin-top: 3em;
    text-align: center;
  }

  .separator {
    margin: 0 1em;
    font-size: 1.25rem;
    font-family: serif;
    font-style: italic;
  }

  .output {
    border: 1px solid #39f;
    padding: 0.5em 0.75em;
    font-size: 1.75em;
    font-weight: 300;
    line-height: 1.75rem;
  }
`;

const RandomizerComponent = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount() {
    const sitesRef = new Firebase(FIREBASE_URL);
    this.bindAsObject(sitesRef, 'data');
  },

  componentWillUnmount() {
    this.unbind('items');
  },

  getInitialState() {
    const data = {
      sites: ['Website'],
      things: ['Thing']
    };

    return {data};
  },

  getRandomValue(model) {
    const records = this.state.data[model];
    const record = records[Math.floor(Math.random() * records.length)];
    return record;
  },

  handleClickEvent() {
    const site = this.getRandomValue('sites');
    const thing = this.getRandomValue('things');
    this.setState({site, thing});
  },

  render() {
    const site = this.getRandomValue('sites');
    const thing = this.getRandomValue('things');

    return (
      <ComponentStyled className="container">
        <p>
          <strong className="output">{site}</strong>
          <em className="separator">for</em>
          <strong className="output">{thing}</strong>
        </p>
        <p className="content">
          <button
            className="button hitarea"
            onClick={this.handleClickEvent}
            type="button">
            Try Again
          </button>
        </p>
      </ComponentStyled>
    );
  }
});

export default RandomizerComponent;
