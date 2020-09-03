import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Home, About, UserForm, UserInfo, MovieForm, MovieCard } from '../../../pages';

function Contents() {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about/:userId" component={About} />
                <Route path="/about" component={About} />
                <Route path="/user/form" component={UserForm} />
                <Route path="/user/info" component={UserInfo} />
                <Route path="/movie/form" component={MovieForm} />
                <Route path="/movie/info" component={MovieCard} />
            </Switch>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    max-width: 960px;
    padding: 5rem 1.5rem 10rem 1.5rem;
    margin: auto;
`;

export default Contents;
