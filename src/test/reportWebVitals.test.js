import ReportWebVitals from "../reportWebVitals.js"
import { render, screen } from '@testing-library/react'

describe("Tests", () => {
  it("Link List Vehicle link exist", () => {
    render(
      <ReportWebVitals />
    );
    expect(screen.getByTestId('btnIcon')).toBeInTheDocument()
  })

})

