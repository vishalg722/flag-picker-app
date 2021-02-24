import App from './App';
import SearchComponent from './SearchComponent';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let output;
  beforeEach(() => {
    output = shallow(<App />);
  });
  it('should render correctly', () => {
    expect(output.find('.pickerText').length).toBe(1);
    expect(output.find('.content').length).toBe(1);
  });

  it('should render correctly if class not found', () => {
    expect(output.find('.content2').length).toBe(0)
  });

  it('should render correctly Search Component', () => {
    expect(output.length).toBe(1);
  });

  it('App snapShot', () => {
    expect(output).toMatchSnapshot()
  });

});
