/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then((response) => (
        this.setState({
          products: response.data,
          currentProduct: response.data[0],
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
        <div id="main">
          <Overview product={this.state.currentProduct} />
        </div>
        <div>
          <h1>helloWorld!</h1>
          <QA />
        </div>
        <div>
          <RelatedItems products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
