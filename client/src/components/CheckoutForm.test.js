import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const checkoutHeader = screen.getByText(/Form/i);
    expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const fistNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const submitButton = screen.getByTestId('testOne')
    fireEvent.change(fistNameInput, {target: {value: 'Mark'} });
    fireEvent.change(lastNameInput, {target: {value: 'Loegel'} });
    fireEvent.change(addressInput, {target: {value: '1234 West St'} });
    fireEvent.change(cityInput, {target: {value: 'Detroit'} });
    fireEvent.change(stateInput, {target: {value: 'Mi'} });
    fireEvent.change(zipInput, {target: {value: '12345'} });
    fireEvent.click(submitButton)
    const sucessName = screen.getByText(/mark/i)
    expect(sucessName).toBeInTheDocument();
    const sucessLastName = screen.getByText(/loegel/i)
    expect(sucessLastName).toBeInTheDocument();
    const sucessAddress = screen.getByText(/1234 west st/i)
    expect(sucessAddress).toBeInTheDocument();
    const sucessCity = screen.getByText(/detroit/i)
    expect(sucessCity).toBeInTheDocument();
    const sucessState = screen.getByText(/mi/i)
    expect(sucessState).toBeInTheDocument();
    const sucessZip = screen.getByText(/12345/i)
    expect(sucessZip).toBeInTheDocument();
    const sucessMessage = screen.getByText(/woo-hoo!/i)
    expect(sucessMessage).toBeInTheDocument();
});
