import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBox from './SearchBox'

test('loads and displays greeting', async () => {
  // Arrange
  const searchText = "night"; // fake
  const handleSubmit = jest.fn(); // spy
  render(<SearchBox onSearch={handleSubmit} />)

  // ACT
  fireEvent.click(screen.getByTestId('btn-submit'));

  // ASSERT:
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  // Extend this test and test the full functionality

})