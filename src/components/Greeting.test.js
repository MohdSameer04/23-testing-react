import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

// we can group test together with test suites, like inside the describe function you can write so many test cases
describe('Greeting component', () => {

    // we can create our own test case 
    test('renders Hello World as a text', () => {
        // Arrange
        // with the help of that we can tell the compiler which component should me test
        render(<Greeting />)
    
        // in this (exact : true) second component with the help of that if we pass true then our first component value is exactly match with the first argument and if we pass false if our value is matched some words then the test case was passed but in true case test case was failed 
        const helloWorldElement = screen.getByText('Hello World', {exact : false});
        
        // Assert
        // passing that component
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was not clicked', () => {

        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', {exact : false});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        // with the help of these we can test user clicked button and text (Basically a State we can test in this)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    
    test('does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        // with the help of these we can test user clicked button and text (Basically a State we can test in this)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        // with the help of that if the conditioned checked was not met then they will show the error
        const outputElement = screen.queryByText('good to see you', {exact : false});
        expect(outputElement).toBeNull();
    });
})
