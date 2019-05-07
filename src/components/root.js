import React from 'react';
import PropTypes from 'prop-types'
import {BrowserRouter as Router,Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ThemeProvider } from 'react-css-themr';
import theme from '../assets/react-toolbox/theme';
import App from './App';
import SearchProfilesBox from './profile/SearchProfilesBox'
import CreateProfilesBox from './profile/CreateProfileBox'
import ShowProfileBox from './profile/ShowProfileBox'

import {Provider} from 'react-redux';

const Root = ({ store }) => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router historu={createBrowserHistory}>
                <App>
                    <Switch>
                        <Route exact={true} path={["/","/profiles"]} render={()=> <SearchProfilesBox store={store}/>} />
                        <Route path="/profiles/new" render={()=> <CreateProfilesBox store={store}/>} />
                        <Route path="/profiles/:id" render={(props)=> <ShowProfileBox {...props} store={store}/>} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    </ThemeProvider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root