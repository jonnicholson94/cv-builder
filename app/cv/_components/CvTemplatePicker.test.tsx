
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import html2canvas from "html2canvas"

import CvTemplatePicker from "./CvTemplatePicker"

import { cv } from "@/lib/mockData"

jest.mock('html2canvas', () => jest.fn().mockResolvedValue(() => Promise.resolve()))

test("renders basic component when basic toggle is clicked", async () => {
    render(<CvTemplatePicker cv={cv} />)

    const basicButton = await screen.findByText("Basic")

    fireEvent.click(basicButton)

    const basic = await screen.findByTestId("basic-template")

    expect(basic).toBeInTheDocument()

})

test("renders modern component when modern toggle is clicked", async () => {
    render(<CvTemplatePicker cv={cv} />)

    const modernButton = await screen.findByText("Modern")

    fireEvent.click(modernButton)

    const modern = await screen.findByTestId("modern-template")

    expect(modern).toBeInTheDocument()
})



test.todo("calls export function correctly when button is clicked")