import { render } from '@testing-library/react';

import ListWithPagination from './listWithPagination';

describe('ListWithPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListWithPagination />);
    expect(baseElement).toBeTruthy();
  });
});
