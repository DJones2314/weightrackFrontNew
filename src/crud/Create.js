import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {
  state = {
    title: '',
    category: '',
    description: '',
    price:0  
  }

    handleChange = event => {
    this.setState({ title: event.target.value,
                    });}
    handleChange1 = event => {
    this.setState({ category: event.target.value,
                    });}
    handleChange2 = event => {
    this.setState({ description: event.target.value,
                    });}
    handleChange3 = event => {
    this.setState({ price: event.target.value,
                    });
      
  }

  handleSubmit = event => {
    event.preventDefault();

    const title = {
      title: this.state.title
    }
    const category = {
      category: this.state.category
    }
    const description = {
      description: this.state.description
    }
    const price = {
      price: this.state.price
    }
    
    console.log(title,category,description, price);
    console.log(this.state.title,this.state.category,this.state.description, this.state.price);     
  
    axios.post('http://localhost:8080/api/films', {  title: this.state.title,
                                                     category: this.state.category,
                                                     description: this.state.description,
                                                     price: this.state.price
                                                   }).then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Film Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
        <label>
            Film Category:
            <input type="text" name="category" onChange={this.handleChange1} />
          </label>
        <label>
            Film Description:
            <input type="text" name="description" onChange={this.handleChange2} />
          </label>
        <label>
            Film Price:
            <input type="text" name="price" onChange={this.handleChange3} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}