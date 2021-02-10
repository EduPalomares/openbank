import { fireEvent, render, screen } from 'helpers/utils/test-utils';
import Button from '../Button/index';

it('renders Button', () => {
  const handleClick = jest.fn();
  render(<Button name="Click Me" onClick={handleClick} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();

  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
