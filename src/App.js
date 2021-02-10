import { useState } from 'react'
import SearchComponent from './SearchComponent';
import { getCountries } from './utils/util'

import './App.css';

function App() {

  const [ continent , setContinent] = useState(false);
  
  const setContinentHandler = (continent) => {
    setContinent(continent)
  }



  return (
    <div className="App">
      <div className="container">
        <h1> Flag Picker</h1>
        <p className="pickerText"> This app will help to learn flags arround the world in <span className="steps">3 steps</span>.</p>
      </div>
      <div className='content'>
          <SearchComponent setContinentHandler={ setContinentHandler }  />
      </div>
    </div>
  );
}

export default App;
