/**
 * Created by usamaahmed on 12/27/16.
 */
import React , { Component } from 'react';
import { Image } from 'react-native';
import { Container , Header , Content , List , ListItem, InputGroup , Input,  Text , Button , Thumbnail , Icon  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import _ from 'lodash';
import styles from '../../assets/styles/styles';

export default class PostStore extends Component {
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="John" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PHONE" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                                <Item label="Other" value="key2" />
                            </Picker>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    </Button>
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>

        );
    }
}

//<ListItem key={this.props.post.id}
//          onPress={ () => Actions.PostShow({ post : this.props.post , title : this.props.post.title }) }>
//    <Thumbnail source={{ uri : this.props.post.image , isStatic : true }}/>
//    <Text>{this.props.post.title}</Text>
//    <Text note>{ this.props.post.body }</Text>
//</ListItem>