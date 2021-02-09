import { render } from '@testing-library/react';
import Bullet from './index';

it('renders Bullet', () => {
  render(
    <Bullet>
      <span>text</span>
    </Bullet>
  );
  expect(screen.getByText('text')).toBeInTheDocument();
});
