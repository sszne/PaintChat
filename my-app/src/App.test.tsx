import React from 'react';
import ReactDOM from 'react-dom';
import CanvasComponent from './CanvasComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanvasComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
