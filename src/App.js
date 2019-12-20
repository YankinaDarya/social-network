import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() { //do side-effects вызывается только 1 раз
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/sidebar" render={() => <Sidebar state={this.props.appState.sidebarPage}/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);


