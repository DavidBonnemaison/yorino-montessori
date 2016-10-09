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


    if (typeof soundManager !== 'undefined')
      soundManager.fadeTo = (id, dur, toVol, callback) => {
        id = id || soundManager.soundIDs;
        dur = dur || 1000;
        toVol = toVol || 0;
        callback = typeof callback === 'function' ? callback : () => {
        };
        if (!id) {
          return;
        }
        let s = soundManager.getSoundById(id);
        if (!s) {
          return;
        }
        let k = s.volume,
          t = dur / Math.abs(k - toVol),
          i = setInterval(() => {
            k = k > toVol ? k - 1 : k + 1;
            s.setVolume(k);
            if (k === toVol) {
              callback.call(this);
              clearInterval(i);
              i = null;
            }
          }, t);
      };

    const {actions, sound} = this.props;

    function stopPlaying() {
      actions.stopPlaying();
    }

    if (sound.fadeTo === 'fadeOut') {
      if (soundManager && soundManager.fadeTo) {
        soundManager.fadeTo( undefined, 1000, 0, () => {
          actions.stopPlaying();
        })
      }
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
