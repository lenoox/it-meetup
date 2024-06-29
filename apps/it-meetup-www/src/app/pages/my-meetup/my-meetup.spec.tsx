import { render } from '@testing-library/react';

import MyMeetup from './my-meetup';

describe('MyMeetup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyMeetup />);
    expect(baseElement).toBeTruthy();
  });
});
