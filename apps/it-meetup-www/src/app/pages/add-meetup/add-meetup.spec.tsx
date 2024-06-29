import { render } from '@testing-library/react';

import AddMeetup from './add-meetup';

describe('AddMeetup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddMeetup />);
    expect(baseElement).toBeTruthy();
  });
});
