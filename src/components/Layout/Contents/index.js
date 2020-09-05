import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import {
    About,
    UserForm,
    UserInfo,
    MovieForm,
    MovieCard,
    LandingPage,
    Login,
} from '../../../pages';

function Contents() {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/about/:userId" component={About} />
                <Route path="/about" component={About} />
                <Route exact path="/user/form" component={UserForm} />
                <Route exact path="/user/info" component={UserInfo} />
                <Route exact path="/movie/form" component={MovieForm} />
                <Route exact path="/movie/info" component={MovieCard} />
            </Switch>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    max-width: 960px;
    min-height: 80vh;
    padding: 5rem 1.5rem 7rem 1.5rem;
    margin: auto;
`;

const CustomRoute = styled(Route)`
    padding: 0;
`;
export default Contents;
