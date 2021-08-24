import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeViewer from './MemeViewer';

describe('<MemeViewer />', () => {
  test('it should mount', () => {
    render(<MemeViewer />);
    
    const memeViewer = screen.getByTestId('MemeViewer');

    expect(memeViewer).toBeInTheDocument();
  });
});