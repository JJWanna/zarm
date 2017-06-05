import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PanelMore extends PureComponent {

  render() {
    const { prefixCls, className, children, ...others } = this.props;

    const cls = classnames({
      [`${prefixCls}-more`]: true,
      [className]: !!className,
    });

    return <div {...others} className={cls}>{children}</div>;
  }

}

PanelMore.propTypes = {
  prefixCls: PropTypes.string,
};

PanelMore.defaultProps = {
  prefixCls: 'ui-panel',
};

export default PanelMore;