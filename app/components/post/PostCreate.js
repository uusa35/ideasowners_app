/**
 * Created by usamaahmed on 8/24/16.
 */
import React , { Component } from 'react';
import { Image , Platform ,NativeModules , PropTypes , Alert} from 'react-native';
import { Container , View, Content , Header , Footer , Picker, Text, H3, Button , List , ListItem , Title , InputGroup , Input , Spinner , Thumbnail , Icon  } from 'native-base';
import _ from 'lodash';
import theme from '../../../Themes/theme';
import styles from '../../assets/styles/styles';
import { Actions } from 'react-native-router-flux';
import AppFooter from '../partials/AppFooter';
import { apiRoute } from '../../appConstants';
import ImagePicker from 'react-native-image-picker';
import { isRequired } from '../../helpers/validate';

const Item = Picker.Item;
export default class PostCreate extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = ({
            imageSource: null,
            token: this.props.token,
            title: '',
            body: '',
            notification: '0',
            image: {
                imageFileName: '',
                imageFilePath: null,
                imageFileType: '',
            },
            isLoading: false,
        });
    }

    componentDidMount() {
        this.props.propertiesActions.disableLoading();
        this.setState({isLoading: this.props.properties.isError})
    }

    onValueChange(value:string) {
        this.setState({
            notification: value,
        });
    }


    fetchImage() {
        const options = {
            title: 'Select Avatar',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Take Photo...',
            chooseFromLibraryButtonTitle: 'Choose from Library...',
            customButtons: {
                'Choose Photo from Facebook': 'fb',
            },
            cameraType: 'back',
            mediaType: 'photo',
            //maxWidth: 100,
            //maxHeight: 100,
            //aspectX: 2,
            //aspectY: 1,
            quality: 1,
            angle: 0,
            allowsEditing: false
        };
        ImagePicker.launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                const imageSource = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                // or a reference to the platform specific asset location
                //if (Platform.OS === 'ios') {
                //    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                //} else {
                //    const source = {uri: response.uri, isStatic: true};
                //}

                this.setState({
                    imageSource: imageSource,
                    image: {
                        imageFilePath: response.uri,
                        imageFileName: response.fileName,
                        imageFileType: response.uri.substring(response.uri.lastIndexOf('.') + 1)
                    }
                });
            }
        });

        //// Launch Camera:
        //ImagePicker.launchCamera(options, (response)  => {
        //    if (response.didCancel) {
        //        console.log('User cancelled image picker');
        //    }
        //    else if (response.error) {
        //        console.log('ImagePicker Error: ', response.error);
        //    }
        //    else if (response.customButton) {
        //        console.log('User tapped custom button: ', response.customButton);
        //    }
        //    else {
        //
        //        const imageSource = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        //
        //        this.setState({
        //            imageSource: imageSource,
        //            image: {
        //                imageFilePath: response.uri,
        //                imageFileName: response.fileName,
        //                imageFileType: response.uri.substring(response.uri.lastIndexOf('.') + 1)
        //            }
        //        });
        //    }
        //});
    }

    _postStore() {
        if (isRequired(this.state.title) && isRequired(this.state.body) && isRequired(this.state.image.imageFileName)) {
            this.props.postActions.postStore(this.state);
        } else {
            this.props.propertiesActions.alertMessage(true, 'All fields are required');
        }

    }


    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={ () => Actions.pop() }>
                        <Icon name="ios-arrow-back"/>
                    </Button>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    { this.state.isLoading ? <Spinner color="grey" style={styles.spinner}/>
                        :
                        <List>
                            <ListItem onPress={() => this.fetchImage()}>
                                <View style={{ justifyContent : 'center', alignItems : 'center' , minHeight : 150}}>
                                    { (this.state.imageSource !== null) ?
                                        <Thumbnail source={this.state.imageSource}
                                                   style={{ width: 130, height: 130 }}/>
                                        :
                                        <Icon name="ios-images"
                                              style={{ fontSize : 100 , borderWidth: 1, borderColor : 'lightgrey', borderRadius : 30,  padding: 15 , color : 'lightblue'}}/>
                                    }
                                    <Text style={{ fontSize : 12 , marginTop : 2}}>best fit : (475*800)</Text>
                                </View>

                            </ListItem>
                            <ListItem>
                                <InputGroup >
                                    <Icon name="ios-arrow-forward-outline"/>
                                    <Input placeholder="title"
                                           onChangeText={(title) => this.setState({ title })}
                                           value={this.state.title}
                                    />
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup style={{ height : 120}}>
                                    <Icon name="ios-arrow-forward-outline"/>
                                    <Input stackedLabel label="body" placeholder="write content here .."
                                           style={{ height : 120}}
                                           onChangeText={(body) => this.setState({ body })}
                                           value={this.state.body}
                                    />
                                </InputGroup>
                            </ListItem>
                            <ListItem iconLeft>
                                <Icon name="ios-notifications-outline" style={{ color: '#b38f00' }}/>
                                <Text>Send Notification : { (this.state.notification == 1) ? 'Yes' : "No" }</Text>
                                <Picker color="red"
                                        iosHeader="Select one"
                                        selectedValue={this.state.notification}
                                        onValueChange={this.onValueChange.bind(this)}>
                                    <Item label="No" value="0"/>
                                    <Item label="Yes" value="1"/>
                                </Picker>
                            </ListItem>
                            <ListItem style={{ marginTop : 20}}>
                                <Button block primary onPress={() => this._postStore()}>
                                    <Icon name="ios-albums-outline"/>
                                    <Text>save</Text>
                                </Button>
                            </ListItem>
                        </List>
                    }
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>1
            </Container>
        );
    }

}
