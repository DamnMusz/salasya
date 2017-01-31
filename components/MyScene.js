import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';

export default class MyScene extends Component {
  render() {
    const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
  ];
    return (
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }
      navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (<Text style={{color: 'white'}}>Cancel</Text>); },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text style={{color: 'white'}}>Done</Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text style={{color: 'white'}}>Awesome Nav Bar</Text>); },
       }}
       style={{backgroundColor: '#2196F3'}}
     />
  }
  style={{backgroundColor: '#212121'}}
/>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
