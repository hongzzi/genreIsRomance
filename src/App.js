import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './pages';
import { Header, Contents, Footer } from './components/Layout';

function App() {
    const [visible, setVisible] = React.useState(false);

    return (
        <Fragment>
            <Header visible={visible} setVisible={setVisible} />
            <Contents />
            {/* <Footer /> */}
        </Fragment>
    );
}

export default App;
