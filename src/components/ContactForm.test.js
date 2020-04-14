import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("inputs are rendered", () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/First Name/i);
    getByLabelText(/Last Name/i);
    getByLabelText(/Email/i);
    getByLabelText(/Message/i);
});

test("inputs are rendered", () => {
    const { getByLabelText } = render(<ContactForm />);

    const FirstNameInput = getByLabelText(/First Name/i);
    const LastNameInput = getByLabelText(/Last Name/i);
    const EmailInput = getByLabelText(/Email/i);
    const MessageInput = getByLabelText(/Message/i);

    fireEvent.change(FirstNameInput, { target: { value: "Test First Name" } });
    fireEvent.change(LastNameInput, { target: { value: "Test Last Name" } });
    fireEvent.change(EmailInput, { target: { value: "Email@email.com" } });
    fireEvent.change(MessageInput, { target: { value: "Test Message" } });

    expect(FirstNameInput.value).toBe("Test First Name");
    expect(LastNameInput.value).toBe("Test Last Name");
    expect(EmailInput.value).toBe("Email@email.com");
    expect(MessageInput.value).toBe("Test Message");
});

// test("submit button renders values that are inputed", () => {
//     const testingValues = {
//         firstName: "Test First Name",
//         lastName: "Test Last Name",
//         email: "Email@email.com",
//         message: "Test Message"
//     };

//     const { getByTestId } = render(
//         <ContactForm testingValues={testingValues} />
//     );

//     const preTag = getByTestId("pre");

//     expect(preTag).toHaveTextContent(`{
//   "firstName": "Test First Name",
//   "lastName": "Test Last Name",
//   "email": "Email@email.com",
//   "message": "Test Message"
// }`);
// });
