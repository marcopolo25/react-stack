import Actions from '../actions';
import firebase from 'firebase';

let firebaseRef = firebase.database().ref('channels');

let ChannelSource = {
    getChannels: {
        remote(state){
            return new Promise((resolve, reject) => {
               firebaseRef.once('value', (dataSnapshot) => {
                   var channels = dataSnapshot.val();
                   resolve(channels);
               })
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;