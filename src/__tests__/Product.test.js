import { render, screen } from '@testing-library/react'
import Product from '../components/Product';

test("Product component renders successfully", () => {
    render(<Product />);

    const element = screen.getByText(/Semaglutide/i);

    expect(element).toBeInTheDocument();
})