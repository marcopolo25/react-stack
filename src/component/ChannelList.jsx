import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var {Card, List, CircularProgress} = mui;

@connectToStores
class ChannelList extends React.Component{
    constructor(props){
        super(props);
        ChatStore.getChannels();
    }

    static getStores()
    {
        return ChatStore;
    }
    static getPropsFromStores(){
        return ChatStore.getState();
    }

    render(){
        if(!this.props.channels){
            return (
              <Card style={{
                  flexGrow: 1
              }}>
                <CircularProgress mode="indeterminate" innerStyle={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    margin: '0 auto',
                    display: 'block',
                    width: 60
                }} />
              </Card>
            );
        }
        var channelNodes = _(this.props.channels)
        .map((channel)=> {
            return (
                <Channel channel={channel}/>
            );
        }).value();

        return (
            <Card style={{
               flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;