import Header from './Header';
import {withProvider, withRouter} from "../../../../.storybook/decorators";
export default {
  title: 'Header',
  component: Header,
  decorators:[withRouter,withProvider]
};
export const Default = () => <Header />;
