import React , { Component } from 'react';
import { Container , Content , Header , Footer , Grid, Col , View , Text , Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router , Scene , Actions , ActionConst, Modal, Schema } from 'react-native-router-flux';
import postActions from '../app/redux/actions/postActions';
import propertiesActions from '../app/redux/actions/propertiesActions';
import App from '../app/App';
import PostIndex from '../app/components/post/PostIndex';
import PostShow from '../app/components/post/PostShow';
import Services from '../app/components/pages/Services';
import Portfolio from '../app/components/pages/Portfolio';
import Location from '../app/components/pages/Location';
import More from '../app/components/pages/More';
import About from '../app/components/pages/About';
import Login from '../app/components/pages/Login';
import PostStore from '../app/components/post/PostStore'
import PostCreate from '../app/components/post/PostCreate'
import PostEdit from '../app/components/post/PostEdit'
import PostImageShow from '../app/components/post/PostImageShow'
import { vars } from '../app/appConstants'


class Routes extends Component {
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Router>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar={true}>

                        <Scene
                            key="Home"
                            component={App}
                            title={vars.title.news}
                            initial
                        />
                        <Scene
                            key="PostShow"
                            component={PostShow}
                            title={vars.title.postShow}
                            { ... this.props }
                        />

                        <Scene key="PostImageShow" direction="vertical">
                            <Scene key="PostImageShowModal"
                                   component={PostImageShow}
                                   schema="modal"
                                   hideNavBar={true}
                                   title={vars.title.postShow}/>
                        </Scene>

                        <Scene
                            key="Services"
                            component={Services}
                            title={vars.title.services}
                            type={ActionConst.REPLACE}
                        />
                        <Scene
                            key="Portfolio"
                            component={Portfolio}
                            title={vars.title.portfolio}
                            type={ActionConst.REPLACE}
                        />
                        <Scene
                            key="More"
                            component={More}
                            title={vars.title.more}
                            type={ActionConst.REPLACE}
                        />

                        <Scene
                            key="Location"
                            component={Location}
                            title={vars.title.location}
                        />

                        <Scene
                            key="About"
                            component={About}
                            title={vars.title.about}
                            { ... this.props }
                        />

                        <Scene
                            key="Login"
                            component={Login}
                            title={vars.title.login}
                            { ...this.props }
                        />

                        <Scene
                            key="PostCreate"
                            component={PostCreate}
                            title={vars.title.postCreate}
                            { ...this.props }
                        />

                        <Scene
                            key="PostEdit"
                            component={PostEdit}
                            title={vars.title.postEdit}
                            { ...this.props }
                        />

                    </Scene>
                </Scene>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch),
        propertiesActions: bindActionCreators(propertiesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);