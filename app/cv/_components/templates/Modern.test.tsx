
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Modern from "./Modern"

import { cv } from "@/lib/mockData"

test("renders name on screen", () => {

    render( <Modern cv={cv} /> )

    const name = screen.getByText("Jon Nicholson")

    expect(name).toBeInTheDocument()

})

test("renders email address on screen", () => {

    render(<Modern cv={cv} /> )
    
    const email = screen.getByText("jon.nicholson@email.com")

    expect(email).toBeInTheDocument()

})

test("renders phone number on screen", () => {

    render( <Modern cv={cv} /> )

    const phone = screen.getByText("0711")

    expect(phone).toBeInTheDocument()

})

test.todo("renders twitter on screen")

test.todo("renders linkedIn on screen")

test.todo("renders github on screen")

test("renders about on screen", () => {

    render( <Modern cv={cv} /> )

    const about = screen.getByText("Example content about me")

    expect(about).toBeInTheDocument()

})

test("skills on screen", () => {

    render(<Modern cv={cv} />)

    const react = screen.getByText("React")
    const next = screen.getByText("Next.js")

    expect(react).toBeInTheDocument()
    expect(next).toBeInTheDocument()

})

test("renders job on screen", () => {

    render(<Modern cv={cv} />)

    const jobTitle = screen.getByText("Product Manager")
    const employer = screen.getByText("LOVESPACE")

    expect(jobTitle).toBeInTheDocument()
    expect(employer).toBeInTheDocument()

})

test("renders education on screen", () => {

    render(<Modern cv={cv} />)

    const course = screen.getByText("Bla")
    const institution = screen.getByText("Example")

    expect(course).toBeInTheDocument()
    expect(institution).toBeInTheDocument()

})

test("renders side project on screen", () => {

    render(<Modern cv={cv} />)

    const project_name = screen.getByText("Cv builder")
    const link = screen.getByText("https://cv-builder.vercel.app")

    expect(project_name).toBeInTheDocument()
    expect(link).toBeInTheDocument()

})