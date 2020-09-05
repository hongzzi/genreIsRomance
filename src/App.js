import React, { Fragment } from 'react';
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
} from './pages';
import { Header, Footer } from './components/Layout';

function App() {
    const [visible, setVisible] = React.useState(false);

    return (
        <Fragment>
            <Header visible={visible} setVisible={setVisible} />
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
            {/* <Footer /> */}
        </Fragment>
    );
}

const Wrapper = styled.div`
    position: relative;
    max-width: 960px;
    min-height: 80vh;
    padding: 5rem 1.5rem 7rem 1.5rem;
    margin: auto;
`;

export default App;
