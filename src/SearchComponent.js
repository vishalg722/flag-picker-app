import { useState, useEffect } from "react";
import {
  continentsData,
  getListOfContinnets,
	getCountries,
  getSelectedFlagList,
  isChecked
} from "./utils/util";
import "./App.css";

const SearchComponent = (props) => {
  const [continnets, setContinnets] = useState([]);
  const [continnetList, setContinnetList] = useState([]);
  const [isShow, setShow] = useState(false);
  const [selectedContinnet, setSelectedContinnet] = useState('');
  const [countryList, setCountryList] = useState([]);
	const [isShowCountry, showCountry] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState([]);
	const [inputData , setInputData] = useState('');

  useEffect(() => {
    setContinnets(continentsData);
  }, []);

  const toogleContinnet = () => {
    const response = getListOfContinnets(continnets);
    setContinnetList(response);
		setShow(!isShow);
		showCountry(false);
  };

  const onChange = (event) => {
		setInputData(event.target.value);
    const selectedVal = event.target.value.toLowerCase();
    const filteredData = continnets.filter((continentData) => {
      const continentName = continentData.continent.toLowerCase();
      return continentName.includes(selectedVal);
    });
	
    if (selectedVal.length === 0) {
      setContinnetList(getListOfContinnets(continnets));
		} 
		else {
      setContinnetList(getListOfContinnets(filteredData));
    }
  };

  const selectedValue = (continnet) => {
    setSelectedContinnet(continnet);
		setShow(false);
		props.setContinentHandler(continnet);
		setInputData('');
  };

  const getListofContries = () => {
    const response = getCountries(selectedContinnet);
    if (response && response.length > 0) {
      setCountryList(response);
    }
  };

  const toogleCountry = () => {
    showCountry(!isShowCountry);
    getListofContries();
	};

	const getSelectedCountry = (event) => {
		let countryArr = [];
		const index = selectedCountry.indexOf(event.target.value);
		if(event.target.checked && index === -1) {
			countryArr.push(event.target.value);
			setSelectedCountry([...selectedCountry , event.target.value])
		}
		else {
				const data = [...selectedCountry];
				data.splice(index, 1);
			  setSelectedCountry(data)
		}	
	}

	const clearFlags = () => {
		setSelectedCountry([]);
		showCountry(false);
	}

	const listOfFlags = getSelectedFlagList(countryList,selectedCountry);
  
  return (
    <>
      <div className="step1">
        <h2> Step 1</h2>
        <p className="paraText">Select a Continent </p>
        <input
          type="text"
          className="continnet"
          onClick={toogleContinnet}
					onChange={onChange}
					value={inputData}
        />
        <div className="continnetList">
          {isShow && continnetList.length > 0 && (
            <ul className="continnetListName">
              {continnetList.map((continnet, index) => (
                <li
                  onClick={() => selectedValue(continnet)}
                  key={index}
                  className="continnetName"
                >
                  {continnet}
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedContinnet && (
          <div className="selectedText">
            <h4>You Selected</h4>
            <p>{selectedContinnet}</p>.
          </div>
        )}
      </div>
      {selectedContinnet && (
        <div className="step2">
          <h2> Step 2</h2>
          <p className="paraText">Now Select a Country </p>
          <input type="text" className="continnet" onClick={toogleCountry} />
          <div className="continnetList">
            {isShowCountry && countryList.length > 0 && (
              <ul className="continnetListName">
                {countryList[0].map((countries, index) => (
                 <li key={index} className="countryName">
                    <span> <input checked={isChecked(countries.name,selectedCountry)} onChange = {getSelectedCountry} value = {countries.name} className="countryCheckbox" type="checkbox" name = 'selectedCountry' /> </span> <span>{countries.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
			{selectedCountry.length > 0 && (
        <div className="step3">
          <h2> Selected Flags : </h2>
          
          <div className="continnetList">
            {selectedCountry.length > 0 && (
              <div className="flags">
                {listOfFlags.map((flag, index) => (
                 <span key={index} className="flag">
                    <span>{flag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
					<button onClick={clearFlags}> Clear Flags</button>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
