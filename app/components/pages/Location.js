/**
 * Created by usamaahmed on 12/29/16.
 */
import React , { Component  } from 'react';
import { Dimensions } from 'react-native';
import { Container , Content , Header , Footer ,Title,  Text , Button , Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import GoogleStaticMap from 'react-native-google-static-map'
import AppFooter from '../../components/partials/AppFooter'
import styles from '../../assets/styles/styles';
import { vars } from '../../appConstants';
import theme from '../../../Themes/theme';

let { height , width } = Dimensions.get('window');
export default class Location extends Component {
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={ () => Actions.More() }>
                        <Icon name="ios-arrow-back"/>
                    </Button>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    <GoogleStaticMap
                        style={styles.map}
                        latitude={vars.latitude}
                        longitude={vars.longitude}
                        zoom={14}
                        hasCenterMarker={true}
                        size={{ width: width , height: height }}
                    />
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>
        );
    }
}


