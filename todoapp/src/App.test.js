import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react';

test("render the Submit button", ()=>{
    render(<App />)
    const element = screen.getByText("Submit")
    expect(element).toBeInTheDocument()
  })

test('renders the header', () => {
    render(<App />);
    const element = screen.getByText(/SHOPPING LIST/i);
    expect(element).toBeInTheDocument();
  });


  test ("fireEvent on submit button", ()=>{
    render (<App />)
    const submitButton = screen.getByText("Submit")
    fireEvent.click(submitButton)
    const deleteButton = screen.getByText("Done")
    expect(deleteButton).toBeInTheDocument()
  })
    
  
