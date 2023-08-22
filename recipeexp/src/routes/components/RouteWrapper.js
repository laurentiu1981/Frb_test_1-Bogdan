import PropTypes from 'prop-types';
import { BasicLayout } from '../../components/layouts';
import { Homepage } from '../../components/pages';

RouteWrapper.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  layout: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  layout: BasicLayout,
  element: Homepage,
};
function RouteWrapper({  element: Element, layout: Layout }) {
  return (
    <Layout>
      <Element />
    </Layout>
  );
}

export default RouteWrapper;
