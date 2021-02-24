import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import SearchComponent  from './SearchComponent';

describe('SearchComponent Component', () => {

  it('should render correctly on initial load', () => {
    const output = shallow(<SearchComponent />)  
    expect(output.find('.step1').length).toBe(1);
    expect(output.find('.step2').length).toBe(0);
    expect(output.find('h2').text()).toBe('Step 1');
    expect(output.find('p').text()).toBe('Select a Continent');
    expect(output.find('.continnetListName').length).toBe(0);
  });

  it('should render correctly continent list on click', () => {
    const { container } = render(<SearchComponent setContinentHandler = { jest.fn() } />);
    const continent = getByTestId(container, "continent");
    fireEvent.click(continent);
    const continnetListName = getByTestId(container, "continnetListName");
    expect(continnetListName).toBeVisible();
    expect(continnetListName.firstChild.textContent).toEqual('Africa');
    fireEvent.click(continnetListName.firstChild);
    const selectedText = getByTestId(container, "selectedText");
    const selectedTextHeading = getByTestId(container, "selectedTextHeading");
    const selectedTextContent = getByTestId(container, "selectedTextContent");
    expect(selectedText).toBeVisible();
    expect(selectedTextHeading.textContent).toEqual('You Selected');
    expect(selectedTextContent.textContent).toEqual('Africa');
  });


  it('should render correctly country', () => {
    const { container, queryByTestId  } = render(<SearchComponent setContinentHandler = { jest.fn() } />);
    const continent = getByTestId(container, "continent");
    fireEvent.click(continent);
    const continnetListName = getByTestId(container, "continnetListName");
    fireEvent.click(continnetListName.firstChild);
    const step2 = getByTestId(container, "step2");
    expect(step2).toBeVisible();
    const selectCountryText = getByTestId(container, "selectCountryText");
    expect(selectCountryText.textContent).toEqual('Now Select a Country');

    const selectCountry = getByTestId(container, "selectCountry");
    fireEvent.click(selectCountry);
    expect(getByTestId(container, "countryLists")).toBeVisible();

    const inputName = getByTestId(container, "countryName-0");
    fireEvent.click(inputName, { target: { value: "Nigeria" } });

    expect(getByTestId(container, "step3")).toBeVisible();
    expect(getByTestId(container, "selected-flag").textContent).toEqual('Selected Flags :');
    expect(getByTestId(container, "flags")).toBeVisible();
    expect(getByTestId(container, "flags").childNodes.length).toBe(1);

    const btn = getByTestId(container, "clearButton");
    fireEvent.click(btn); 
    expect(queryByTestId(/flags/i)).toBeNull();
    expect(queryByTestId(/clearButton/i)).toBeNull();
  });

  it('SearchComponent snapShot', () => {
    const output = shallow(<SearchComponent />);
    expect(output).toMatchSnapshot()
  });
});