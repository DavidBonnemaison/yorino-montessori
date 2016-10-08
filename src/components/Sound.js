import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SoundActions from '../actions/SoundActions';
import RSound from 'react-sound';

class Sound extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {actions, sound} = this.props;

    function stopPlaying() {
      actions.stopPlaying();
    }

    return (
      <RSound
        url={sound.url}
        playStatus={sound.status}
        onFinishedPlaying={stopPlaying}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SoundActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    sound: state.sound
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sound);
