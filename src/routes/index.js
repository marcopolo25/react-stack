import React from 'react';
import App from '../component/App.jsx';
import Chat from '../component/Chat.jsx';
import Login from '../component/Login.jsx';
import Router from 'react-router';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
      <DefaultRoute handler="Chat" />
      <Route path="chat" handler={Chat}/>
      <Route path="chat/:channel" handler={Chat}/>
      <Route path="login" handler={Login}/>
  </Route>  
);

Router.run(routes, Router.HashLocation, (Root) =>{
   React.render(<Root />, document.getElementById('container'));
});