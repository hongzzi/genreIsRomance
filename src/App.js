import React, { Fragment } from 'react';
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
