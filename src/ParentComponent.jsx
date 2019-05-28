import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    return (
      <>
         {/* children을 넘겨주는 경우 */}
         <ChildComponent>
            <div>넘겨주고 싶은 element 혹은 Component</div>
         </ChildComponent>

         {/* children을 넘겨주지 않는 경우 */}
         <ChildComponent />
      </>
    );
  }
}

export default ParentComponent;