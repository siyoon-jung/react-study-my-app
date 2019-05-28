import React, { Component } from 'react';
import { element } from 'prop-types';

class ChildComponent extends Component {
  static propTypes = {
    children: element,
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {/* props로 넘어오는 children이 있는 경우에만 노출 */}
        {children && children}
      </div>
    );
  }
}

export default ChildComponent;