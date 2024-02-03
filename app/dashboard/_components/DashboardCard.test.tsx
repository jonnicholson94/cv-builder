
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import DashboardCard from "./DashboardCard"

test("renders heading and sub heading passed in as props", () => {

    render(
        <DashboardCard title="Title" description="Description" form={<p>Form</p>} heading="Heading" subHeading="Sub heading" />
    )

    const heading = screen.getByText("Heading")
    const subHeading = screen.getByText("Sub heading")

    expect(heading).toBeInTheDocument()
    expect(subHeading).toBeInTheDocument()

})

test("renders form when clicked", () => {

    render(
        <DashboardCard title="Title" description="Description" form={<p>Form</p>} heading="Heading" subHeading="Sub heading" />
    )

    const button = screen.getByText("Heading")

    fireEvent.click(button)

    const title = screen.getByText("Title")
    const description = screen.getByText("Description")
    const form = screen.getByText("Form")

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(form).toBeInTheDocument()

})