import React, { Component, PropTypes } from 'react';

export default class Case extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="Case">
        <div className="Case-number">
          {this.props.value}
        </div>
      </div>
    );
  }
}

Case.propTypes = {
  number: PropTypes.number.isRequired
};
