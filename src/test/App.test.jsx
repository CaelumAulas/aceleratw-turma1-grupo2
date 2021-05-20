import App from "../App"
import { render, screen } from '@testing-library/react'

describe("Tests", () => {
  it("Link List Vehicle link exist", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('btnIcon')).toBeInTheDocument()
  })
  it("Link List Vehicle link exist", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('headerDrawer')).toBeInTheDocument()
  })
  it("Link List Vehicle link exist", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('btnHeaderArrowIcon')).toBeInTheDocument()
  })
  it("Link List Vehicle link exist", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument()
  })
  it("Link List Vehicle link exist", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument()
  })

})

