import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../../counter/CounterApp';

describe('Son las pruebas del componente <CounterApp/>', () => {

    test('Debe de hacer el match con el Snapshot', () => {
          const valor = 100;
          const wrapper = shallow(<CounterApp/>);
          expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de dar el valor de 100', ()=> {
        const value="100";
        const wrapper = shallow(<CounterApp value={100} />);
        const valorHtml = wrapper.find('h2').text();
        expect( valorHtml ).toBe(value);
        console.log( value );
    });
});
