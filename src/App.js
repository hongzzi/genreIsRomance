import React, { Fragment } from 'react';
// import styled from 'styled-components';
// import { Route, Switch } from 'react-router-dom';
// import { Home, About } from './pages';
import { Header, Nav, Footer } from './components/Layout';

function App() {
    const [visible, setVisible] = React.useState(false);

    return (
        <Fragment>
            <Header visible={visible} setVisible={setVisible} />
            <Nav visible={visible} setVisible={setVisible} />
            {/* <Wrapper>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:userId" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
            </Wrapper> */}
            {/* <Footer /> */}
        </Fragment>
    );
}

// const Wrapper = styled.div`
//     position: relative;
//     max-width: 960px;
//     padding: 5rem 1.5rem 10rem 1.5rem;
//     margin: auto;
// `;

export default App;
