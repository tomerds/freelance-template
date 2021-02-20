import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar, { NavBarProvider } from './components/navbar/Navbar';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import Topic from './components/topic/Topic';

export default function App() {

  return (
    <Router>
      <div id="outer-container">
        <NavBarProvider>
          <NavBar />
        </NavBarProvider>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const loremHalf = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac leo non dolor posuere facilisis non aliquet massa. Integer placerat metus ut tincidunt ullamcorper. Phasellus interdum feugiat orci, nec egestas magna convallis ut. Quisque tincidunt diam eu sem volutpat, vestibulum imperdiet nulla elementum."

function Home() {
  return (
    <Layout>
      <Banner title='Home' imageUrl="_MG_1908.JPG" />
      <Topic title='Topic 1' imageUrl="_MG_1908.JPG" body={loremHalf} />
      <Topic title='Topic 2' imageUrl="_MG_1908.JPG" body={loremHalf} imageRight={true} />

    </Layout>);
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

