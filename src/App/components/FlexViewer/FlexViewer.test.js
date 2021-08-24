import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexViewer from './FlexViewer';

describe('<FlexViewer />', () => {
  test('it should mount', () => {
    render(<FlexViewer />);
    
    const flexViewer = screen.getByTestId('FlexViewer');

    expect(flexViewer).toBeInTheDocument();
  });
});