import alt from '../alt';
import firebase from 'firebase';
import AppConfig from '../../config';
import async from 'async';
var config = {
    apiKey: AppConfig.apiKey,
    authDomain: AppConfig.authDomain,
    databaseURL: AppConfig.databaseURL,
    storageBucket: AppConfig.storageBucket,
};
firebase.initializeApp(config);


class Actions {
    constructor(){
        this.generateActions(
            'loadChannels',
            'channelsReceived',
            'channelsFailed',
            'channelsLoading',
            'messagesReceived',
            'messagesFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived'
        )
    }

    login(router){
        return (dispatch) => {
            var provider = new firebase.auth.GoogleAuthProvider();
            async.waterfall([
                function (callback) {
                    firebase.auth().signInWithPopup(provider).then(function(result) {
                        //var token = result.credential.accessToken;
                        callback(null, result.user);

                    }).catch(function(error) {

                    });
                }
            ], function (err, user) {
                dispatch(user);
                router.transitionTo('/chat');
            });

        }
    }
}

export default alt.createActions(Actions);