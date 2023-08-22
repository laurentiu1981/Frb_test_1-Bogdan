import Icon from './Icon';
import { withProvider } from '../../../../.storybook/decorators';
export default {
  title: 'Icon',
  component: Icon,
  decorators: [withProvider],
};
export const Default = () => <Icon />;
