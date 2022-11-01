// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';

class App extends React.Component{
  state = {
    isLoading : true,
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  render(){
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'Let there be light'}</div>
    )
  }
}

export default App;
