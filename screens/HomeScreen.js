import React, {Component} from 'react';
import { View , Text , StyleSheet,Image } from 'react-native';
import { Icon,Button,Container,Header,Content,Left,Body,Title,Right,FooterTab,Footer,Badge} from 'native-base';
export class HomeScreen extends Component {
static navigationOptions = {
    drawerIcon:(
        <Icon type="FontAwesome" name="home" active/>   
    )
}
  render() { 
    return (
      <Container>
          <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={ ()=>this.props.navigation.navigate('DrawerOpen' )}/>
                     </Button>
                    </Left>
                    <Body>
                     <Title>Home</Title>
                    </Body>
                    <Right />
              </Header>
             <Content contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent:'center'
          }} padder>
            <Text>  Welcome Back Ranjeet!!! </Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button transparent>
                        <Text>Design By Ranjeet</Text>
                    </Button>
                </FooterTab>
            </Footer>
     </Container>
    )
  }
};

export default HomeScreen;

