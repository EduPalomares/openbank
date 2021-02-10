import { render } from 'helpers/utils/test-utils';
import Input from '../Input/';

it('renders Input', () => {
  const { getByPlaceholderText } = render(<Input name="name" placeholder="placeholder" value="texto" />);
  expect(getByPlaceholderText('placeholder')).toBeInTheDocument();
});
