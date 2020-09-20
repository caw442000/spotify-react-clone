export const soundInitialState = {
  audio: null,
  playing: false,
  prevVol: null,
  volume: 0.3,
  repeat: false,
  shuffle: false,
};

const soundReducer = (state, action) => {
  switch (action.type) {
      case 'SET_AUDIO':
          return {
              ...state,
              audio: action.audio
          };
      case 'SET_PLAYING':
          if(!action.playing) {
              if(state.audio) {
                  state.audio.pause();
              }
          } else {
              if(state.audio) {
                  state.audio.play();
              }
          }
          return {
              ...state,
              playing: action.playing
          };
      case 'SET_VOLUME':
        console.log("volume in set volume", action.volume)
          if(state.audio) {
              state.audio.volume = action.volume;
              return {
                ...state,
                volume: action.volume,
                
                
            };
          }

          return state;
          
      case 'SET_REPEAT':
          if(state.audio) {
              state.audio.loop = action.repeat;
          }
          return {
              ...state,
              repeat: action.repeat,
          };
      case 'SET_SHUFFLE':
          if(state.audio) {
              return {
                  ...state,
                  shuffle: action.shuffle
              };
          }
          return state;
      default:
          return state;
  }
};

export default soundReducer;