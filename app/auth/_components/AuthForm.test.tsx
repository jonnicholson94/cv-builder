
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

import AuthForm from "./AuthForm"

const mockActionFunction = jest.fn(formData => Promise.resolve('success'));

test.todo("renders children correct")

test.todo("calls mocked function with form data")