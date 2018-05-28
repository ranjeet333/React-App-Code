import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View,Image } from 'react-native';
import { Icon , Button , Container ,Header, Content,  Left, Body, Drawer,Right,Badge } from 'native-base';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import { HomeScreen } from './screens/HomeScreen';
import {ContactScreen} from './screens/ContactScreen';
import {GalleryScreen} from './screens/GalleryScreen';
import {LoginScreen} from './screens/LoginScreen';


const CustomDrawerContentComponent = (props)=>(
    <Container>
        <Header style={{height:200, backgroundColor:'white'}}>
          < Image style = {
            styles.drawerImage
          }
          source={require('./screens/img/2015-08-02-20-19-55.jpg')}/>
           </Header>
           < Content >
            <DrawerItems {...props}/>
           </Content>
      </Container>
)

const MyApp = DrawerNavigator({
        Home:{ screen:HomeScreen },
        Contact:{ screen:ContactScreen },
        Gallery:{screen:GalleryScreen},
        Login:{screen:LoginScreen}
},{
   initialRouteName:'Home',
   contentComponent:CustomDrawerContentComponent,
   drawerOpenRoute:'DrawerOpen',
   drawerCloseRoute:'DrawerClose',
   drawerToggleRoute:'DrawerToggle'
}
)

export default class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  drawerImage:{
    height:150,
    width:150,
    borderRadius: 75,
  }
});
