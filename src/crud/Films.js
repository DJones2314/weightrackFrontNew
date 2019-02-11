import React from 'react';

import axios from 'axios';

export default class Films extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/films/`)
      .then(res => {
        const films = res.data;
        this.setState({ films });
      })
  }

  render() {
    return (
      <div>
        { this.state.films.map(film => <div>{film.description}</div>)}
      </div>
    )
  }
};