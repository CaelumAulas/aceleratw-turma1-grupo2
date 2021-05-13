import React from 'react';
import List from '../../../pages/user/List.js';

describe("List", () => {
  it("user should exist", () => {
    render(<List />);
    expect(screen.getByTestId('user')).toBeInTheDocument();
  })
})