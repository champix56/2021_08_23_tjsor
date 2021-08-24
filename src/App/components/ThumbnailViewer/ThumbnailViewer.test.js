import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThumbnailViewer from './ThumbnailViewer';

describe('<ThumbnailViewer />', () => {
  test('it should mount', () => {
    render(<ThumbnailViewer />);
    
    const thumbnailViewer = screen.getByTestId('ThumbnailViewer');

    expect(thumbnailViewer).toBeInTheDocument();
  });
});