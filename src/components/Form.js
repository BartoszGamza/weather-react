import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="City" placeholder="City"></input>
          <input type="text" name="Country" placeholder="Country"></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;