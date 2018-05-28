import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, Image} from 'react-native';
import {Form,Label,Input,Item, Icon,Button,Container,Header,Content,Left,Body,Title,Right,FooterTab,Footer,Badge} from 'native-base';
export class LoginScreen extends Component {
static navigationOptions = {
    drawerIcon:(
        <Icon type="FontAwesome" name="sign-in" active/>   
    )
}
constructor(props)
{
    super(props);
    this.state= {
        Username:'',
        Password:''
    };
    this.Login = this.Login.bind(this);
}

Login()
{
Alert.alert("Your UserName is :- " + this.state.Username +" Your Password is :- " + this.state.Password);
}

  render() { 
    return (
< View style = {{flex:1,flexDirection: 'row', padding: 20}} >
      <Container>
          <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={ ()=>this.props.navigation.navigate('DrawerOpen' )}/>
                     </Button>
                    </Left>
                    <Body>
                     <Title>Login</Title>
                    </Body>
                    <Right />
              </Header>
             <Content>
       
            <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(Username)=>{this.setState({Username})}} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(Password)=>{this.setState({Password})}} secureTextEntry={true} />
            </Item>
             </Form>
             <Button onPress={this.Login}
             full bordered success style={{margin: 10,}}>
                <Icon type="FontAwesome" name="sign-in" active/>
             <Text>Login </Text>
            </Button>
            </Content>
            <Footer>
                <FooterTab>
                    <Button transparent>
                        <Text>Design By Ranjeet</Text>
                    </Button>
                </FooterTab>
            </Footer>
     </Container>
     </ View>
    )
  }
};

export default LoginScreen;

