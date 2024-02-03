
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import DashboardAddButton from "./DashboardAddButton"


test("when clicked, displays form passed in as a prop", () => {

    render(
        <DashboardAddButton title="Hello world" description="Hello description" content="Example content" form={<p>Hello form</p>} />
    )

    const button = screen.getByText("Example content")

    fireEvent.click(button)

    const form = screen.getByText("Hello form")

    expect(form).toBeInTheDocument()

})

test("displays passed in title and description passed in as a prop once clicked", () => {

    render(
        <DashboardAddButton title="Hello world" description="Hello description" content="Example content" form={<p>Hello form</p>} />
    )

    const button = screen.getByText("Example content")

    fireEvent.click(button)

    const title = screen.getByText("Hello world")
    const description = screen.getByText("Hello description")

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()

})

test("displays content passed in as a prop inside of button", () => {

    render(
        <DashboardAddButton title="Hello world" description="Hello description" content="Example content" form={<p>Hello form</p>} />
    )

    const button = screen.getByText("Example content")

    expect(button).toBeInTheDocument()

})