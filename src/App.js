import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

/* OLD STUFF DONT THINK I NEED
const HomePage = props => (
  <div>
    <button onClick={() => props.history.push('/topics')}>Topics</button>
    <h1>HOMEPAGE</h1>
  </div>
);

const TopicsList = props => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
    <Link to={`${props.match.url}/1`}>TO TOPIC 1</Link><br />
    <Link to={`${props.match.url}/2`}>TO TOPIC 2</Link><br />
    <Link to={`${props.match.url}/3`}>TO TOPIC 3</Link><br />
  </div>
);

const TopicDetail = props => (
  <div>
    <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
  </div>
);*/

export default App;
