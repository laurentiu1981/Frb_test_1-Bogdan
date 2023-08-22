import Homepage from './index';
import { withProvider, withRouter } from '../../../../.storybook/decorators';
export default {
  title: 'Homepage',
  component: Homepage,
  decorators: [withProvider, withRouter],
};
export const Default = () => <Homepage />;
