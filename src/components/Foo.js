import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { withTracker } from 'meteor/react-meteor-data';

import Bar from './Bar.js';
// import { CryptocurrencyData } from '../../server/main';
import { exampleData } from '../data/example';

class Foo extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      cryptocurrencyData: []
    }
  }

  componentDidMount() { 
    Meteor.call('getData', (error, response) => {
      if (error) {
        throw err;
      }

      const data = response.data;

      this.setState({
        cryptocurrencyData: data
      });

      Meteor.call('cryptocurrencyData.insert', data);      
    });

    console.log('CryptocurrencyData:', this.props.cryptocurrencyData);
  }

  render() {
    const { cryptocurrencyData } = this.state;

    return (
      <div>
        <ul>
          <li className = 'disabled'>
            Test
          </li>
        </ul>
        {cryptocurrencyData.map((data, index) => (
          <Bar data = { data} key = { index } num = { index } />
        ))}
      </div>
    );
  };
}

export default Foo;

// export default withTracker(() => {
//   return {
//     cryptocurrencyData: CryptocurrencyData.find({}).fetch(),
//   };
// })(Foo);
