import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,FooterTab,
    Footer,Card,CardItem,} from 'native-base';
export class ContactScreen extends Component {
static navigationOptions = {
    drawerIcon: (<Icon type="FontAwesome" name="phone" active/>)
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
                        <Title>Contact</Title>
                    </Body>
                    <Right />
              </Header>
             <Content>
                <Card>
                 <CardItem header  bordered>
                    <Text>Address</Text>
                 </CardItem>
                 <CardItem  bordered>
                    <Body>
                        <Text>
                         214, City Center, Rajiv Gandhi Infotech Park, Hinjawadi Phase 1,
                          Pune, Maharashtra 411057
                         </Text>
                    </Body>
                 </CardItem>
                    <CardItem footer  bordered  >
                     <Text>Phone: 020 6530 8787</Text>
                     </CardItem>
                </Card>
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

export default ContactScreen;
