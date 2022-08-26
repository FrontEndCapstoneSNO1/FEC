import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import config from '../../../config.js';

// require('dotenv').config();
// import Overview from './Overview';
// eslint-disable-next-line import/no-unresolved, import/extensions
import QA from './QA/index.jsx';
// import RatingsAndReviews from './RatingsAndReviews';
// import RelatedItems from './RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
    };
  }

  componentDidMount() {
    const options = {
      method: 'get',
      url: `${config.API_HOST}products`,
      headers: {
        Authorization: config.API_KEY,
      },
    };
    axios(options)
      .then((response) => (
        this.setState({
          products: response.data,
        })
      ))
      .catch((err) => (
        console.log('error getting', err)
      ));
  }

  render() {
    return (
      <div>
        <h1>helloWorld!</h1>
        <QA />

        {/* <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems /> */}

      </div>
    );
  }
}

export default App;
