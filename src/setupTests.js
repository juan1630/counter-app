// import Enzyme from 'enzyme';
// import '@testing-library/jest-dom/extend-expect';

// import  Adapter from '@wojtemaj/enzyme-adapter-react-17';
//
// import { createSerializer } from  'enzyne-to-json';
//
// Enzyme.configure({ adapter: new Adapter });
// expect.addSnapshotSerializar( createSerializer({mode:'deep' }) );
//

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createSerializer } from 'enzyme-to-json'
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );
