import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import Ads from './pages/Ads';
import NewAd from './pages/NewAd';

export default () => {
    return  (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>

            <RouteHandler exact path="/sobre">
                <About />
            </RouteHandler>

            <RouteHandler exact path="/signin">
                <SignIn />
            </RouteHandler>

            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>

            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>

            <RouteHandler exact path="/ads">
                <Ads />
            </RouteHandler>

            <RouteHandler private exact path="/post-an-ad">
                <NewAd />
            </RouteHandler>

            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}