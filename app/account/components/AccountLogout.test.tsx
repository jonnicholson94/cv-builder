
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { useRouter } from "next/navigation"
import "@testing-library/jest-dom"

import AccountLogout from "./AccountLogout"

jest.mock("next/navigation", () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }))

test("renders button on screen", () => {

    render(<AccountLogout />)

    expect(screen.getByText("Sign out")).toBeInTheDocument()
})

test.todo("calls logout function when button is clicked")