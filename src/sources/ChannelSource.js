import Actions from '../actions';
import firebase from 'firebase';

let firebaseRef = firebase.database().ref('channels');

let ChannelSource = {
    getChannels: {
        remote(state, selectChannelKey){
            return new Promise((resolve, reject) => {
               firebaseRef.once('value', (dataSnapshot) => {
                   var channels = dataSnapshot.val();
                    selectChannelKey = selectChannelKey || _.keys(channels)[0];
                   var selectedChannel = channels[selectChannelKey];
                   if(selectedChannel){
                       selectedChannel.selected = true;
                   }
                   resolve(channels);
               })
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed,
        loading: Actions.channelsLoading
    }
}

export default ChannelSource;