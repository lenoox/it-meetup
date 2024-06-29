import { router } from '../../main';

export const goToPage = (page: string): void => {
  router.navigate(page);
};
