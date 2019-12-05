import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('子コンポーネントが存在すること', () => {
  // == 準備 ==
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />);

  // == 検証 ==
  /** 各コンポーネントの数を取得し、1であればOK */
  expect(wrapper.find(Page).length).toBe(1);
  // expect(wrapper.find(Input).length).toBe(1);
  // expect(wrapper.find(Button).length).toBe(1);
});