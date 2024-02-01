
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AccountDetail from "./AccountDetail"

test("correctly renders detail prop on screen", () => {
    render(<AccountDetail detail="Test detail" content="Test content" />)

    expect(screen.getByText("Test detail")).toBeInTheDocument()
})

test("correctly renders content prop on screen", () => {

    render(<AccountDetail detail="Test detail" content="Test content" />)

    expect(screen.getByText("Test content")).toBeInTheDocument()
    
})