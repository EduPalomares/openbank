import { render } from 'helpers/utils/test-utils';
import Icon from '../Icon/index';

it('renders Icon', () => {
  const { container } = render(<Icon name="check" />);
  expect(container.firstChild).toHaveClass('check');
});
