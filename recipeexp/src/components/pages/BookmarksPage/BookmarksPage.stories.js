import BookmarksPage from './index';
import { withProvider, withRouter } from '../../../../.storybook/decorators';
export default {
  title: 'BookmarksPage',
  component: BookmarksPage,
  decorators: [withProvider, withRouter],
};
export const Default = () => <BookmarksPage />;
