import RecipeDetailPage from './index';
import { withProvider, withRouter } from '../../../../.storybook/decorators';
export default {
  title: 'RecipeDetailPage',
  component: RecipeDetailPage,
  decorators: [withProvider, withRouter],
};
export const Default = () => <RecipeDetailPage />;
