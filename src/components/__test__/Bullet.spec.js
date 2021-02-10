import { render, screen } from 'helpers/utils/test-utils';
import Bullet from '../Bullet/index';

it('renders Bullet', () => {
  render(
    <Bullet>
      <span>text</span>
    </Bullet>
  );
  expect(screen.getByText('text')).toBeInTheDocument();
});
