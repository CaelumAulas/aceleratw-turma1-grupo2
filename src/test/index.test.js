import Index from "../index.js"
import { render, screen } from '@testing-library/react'

describe("Tests", () => {
  it("Link List Vehicle link exist", () => {
    render(
      <Index />
    );
    expect(screen.getByTestId('btnIcon')).toBeInTheDocument()
  })

})

