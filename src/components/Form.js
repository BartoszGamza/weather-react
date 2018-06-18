import React from 'react';

const Form = props => (
      <div>
        <form onSubmit={props.getWeather}>
          <input type="text" name="City" placeholder="City"></input>
          <input type="text" name="Country" placeholder="Country"></input>
          <button>Search</button>
        </form>
      </div>
);

export default Form;