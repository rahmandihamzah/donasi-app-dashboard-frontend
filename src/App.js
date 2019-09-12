import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Home from './pages/home';
import Donatur from './pages/donatur';
import Donasi from './pages/donasi';
import Notifikasi from './pages/notifikasi';
import AdminProfile from './pages/adminProfile';
import Setting from './pages/setting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/donatur" component={Donatur} />
          <Route path="/donasi" component={Donasi} />
          <Route path="/notifikasi" component={Notifikasi} />
          <Route path="/adminProfile" component={AdminProfile} />
          <Route path="/setting" component={Setting} />
        </Router>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route exact path="/" component={Home} />
//         <Route path="/donatur" component={Donatur} />
//         <Route path="/donasi" component={Donasi} />
//         <Route path="/notifikasi" component={Notifikasi} />
//         <Route path="/adminProfile" component={AdminProfile} />
//         <Route path="/setting" component={Setting} />
//       </Router>
//     </div>
//   );
// }

export default App;
