import React, {Component} from 'react';
import { View , Text , StyleSheet,Image } from 'react-native';
import { Icon,Button,Container,Header,Content,Left,Body,Title,Right,FooterTab,Footer,Badge} from 'native-base';
export class GalleryScreen extends Component {
static navigationOptions = {
    drawerIcon:(
        <Icon type="FontAwesome" name="image" active/>   
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
                     <Title>Gallery</Title>
                    </Body>
                    <Right />
              </Header>
             <Content padder>
            <Text>  Welcome Back Ranjeet!!! </Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button bordered success>
                        <Text>Design By Ranjeet</Text>
                    </Button>
                </FooterTab>
            </Footer>
     </Container>
    )
  }
};

export default GalleryScreen;

