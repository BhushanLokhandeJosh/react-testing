import { render, screen } from "@testing-library/react"
import Greet from "./greet"

//test is globally available in create-react-app project.
test("Greet renders correctly",()=>{
    //to create virtual Dom.
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})


//TDD Approach...first write test case before writing software development code.
test("Greet renders with name",()=>{
    render(<Greet name="Vishwas"/>);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
})