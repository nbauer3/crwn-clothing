import React from 'react';
import './App.css';
//import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HomePage = props => (
  <div>
    <button onClick={() => props.history.push('/topics')}>Topics</button>
    <h1>HOMEPAGE</h1>
  </div>
);

const TopicsList = () => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);

const TopicDetail = props => (
  <div>
    <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicsList}/>
      <Route path='/topics/:topicId' component={TopicDetail}/>
    </div>
  );
}

export default App;
