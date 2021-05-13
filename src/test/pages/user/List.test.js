import React from 'react';
import List from '../../../pages/user/List.js';
import { render, screen }  from '@testing-library/react'

describe("List", () => {
  it("user should exist", () => {
    render(<List />);
    expect(screen.getByTestId('user')).toBeInTheDocument();
  })
})