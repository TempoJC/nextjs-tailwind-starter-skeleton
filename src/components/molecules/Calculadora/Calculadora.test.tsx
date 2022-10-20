import { Calculadora } from '../Calculadora';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Calculator', () => {
	beforeEach(() => {
		render(<Calculadora />);
	});

	it('renders a calculator', () => {
		// check if all components are rendered
		expect(screen.getByTestId('result')).toBeInTheDocument();
		expect(screen.getByTestId('num1')).toBeInTheDocument();
		expect(screen.getByTestId('num2')).toBeInTheDocument();
		expect(screen.getByTestId('add')).toBeInTheDocument();
		expect(screen.getByTestId('subtract')).toBeInTheDocument();
		expect(screen.getByTestId('multiply')).toBeInTheDocument();
		expect(screen.getByTestId('divide')).toBeInTheDocument();
	});

	it('adds numbers', () => {
		// check if adds properly
		const num1input = screen.getByTestId('num1');
		const num2input = screen.getByTestId('num2');
		const addButton = screen.getByTestId('add');
		const resultArea = screen.getByTestId('result');
		fireEvent.change(num1input, { target: { value: 5 } });
		fireEvent.change(num2input, { target: { value: 8 } });
		fireEvent.click(addButton);
		expect(resultArea).toHaveTextContent('13');
	});

	it('subtracts numbers', () => {
		// check if adds properly
		const num1input = screen.getByTestId('num1');
		const num2input = screen.getByTestId('num2');
		const subtractButton = screen.getByTestId('subtract');
		const resultArea = screen.getByTestId('result');
		fireEvent.change(num1input, { target: { value: 8 } });
		fireEvent.change(num2input, { target: { value: 5 } });
		fireEvent.click(subtractButton);
		expect(resultArea).toHaveTextContent('3');
	});

	it('multiplies numbers', () => {
		// check if adds properly
		const num1input = screen.getByTestId('num1');
		const num2input = screen.getByTestId('num2');
		const multiplyButton = screen.getByTestId('multiply');
		const resultArea = screen.getByTestId('result');
		fireEvent.change(num1input, { target: { value: 5 } });
		fireEvent.change(num2input, { target: { value: 8 } });
		fireEvent.click(multiplyButton);
		expect(resultArea).toHaveTextContent('40');
	});

	it('divides numbers', () => {
		// check if adds properly
		const num1input = screen.getByTestId('num1');
		const num2input = screen.getByTestId('num2');
		const divideButton = screen.getByTestId('divide');
		const resultArea = screen.getByTestId('result');
		fireEvent.change(num1input, { target: { value: 20 } });
		fireEvent.change(num2input, { target: { value: 2 } });
		fireEvent.click(divideButton);
		expect(resultArea).toHaveTextContent('10');
	});
});
