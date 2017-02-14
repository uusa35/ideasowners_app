/**
 * Created by usamaahmed on 12/25/16.
 */
import React , { Component } from 'react';
import { Image , LayoutAnimation } from 'react-native';
import { View , Text , Button , Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/styles';
import { largeImageRoute } from '../../appConstants';
import PhotoView from 'react-native-photo-view';


export default class PostImageShow extends Component {

    render() {
        return (
            <View style={styles.PostImageShowModalcontainer}>
                <Button transparent block onPress={() => Actions.pop() } style={styles.postShowBtnModal}>
                    <Icon name="md-close-circle" style={{ color : 'lightgrey'}}/>
                </Button>
                <PhotoView
                    source={{ uri : largeImageRoute + this.props.post.image }}
                    minimumZoomScale={0.5}
                    maximumZoomScale={3}
                    androidScaleType="center"
                    //onLoad={() => console.log("Image loaded!")}
                    style={styles.postShowImageModal}
                />
            </View>
        );
    }
}

//<Image style={styles.postShowImageModal}
//       source={{ uri : storageRoute + this.props.post.image }}/>
//<Container theme={theme}>
//    <Header>
//        <Button transparent onPress={ () => Actions.pop() }>
//            <Icon name="ios-arrow-back"/>
//        </Button>
//        <Title>{_.capitalize(this.props.post.title)}</Title>
//    </Header>
//    <Content>
//        <Image style={styles.postShowImage}
//               source={{ uri : 'http://ideas.app/' + this.props.post.image }}/>
//    </Content>
//</Container>