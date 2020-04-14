// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { render } from "@testing-library/react";

test("App renders First Name, Last Name, Email, and Message", () => {
    const render = rtl.render(<ContactForm />);
    const FirstName = render.queryByText("First Name*");
    const LastName = render.queryByText("Last Name*");
    const Email = render.queryByText("Email*");
    const Message = render.queryByText("Message");

    expect(FirstName).toBeInTheDocument();
    expect(LastName).toBeInTheDocument();
    expect(Email).toBeInTheDocument();
    expect(Message).toBeInTheDocument();
});

// test("First name gives expected result", async () => {
//     const famousWomanInHistory = "Sally";
//     const simulatedDOM = rtl.render(<App />);

//     const input = getByLabelText(simulatedDOM, "firstName");
//     input.value = famousWomanInHistory;

//     getByText(simulatedDOM, "Print Name").click();

//     await wait(() =>
//         expect(queryByTestId(simulatedDOM, "printed-name")).toBeTruthy()
//     );
//     expect(getByTestId(simulatedDOM, "printed-name")).toHaveTextContent(
//         famousWomanInHistory
//     );

//     expect(simulatedDOM).toMatchSnapshop();
// });
