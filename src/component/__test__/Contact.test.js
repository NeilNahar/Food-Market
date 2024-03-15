import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

test("check for heading",()=>{
    render(<Contact />)
    const heading=screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
})