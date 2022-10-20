import { Footer } from '../Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
	it('renders footer', () => {
		render(<Footer />);
		expect(
			screen.getByText(
				/Sample text. Click to select the text box. Click again or double/i
			)
		).toBeInTheDocument();
	});
});
