import React from 'react';
import styled from 'styled-components';
import { Grid, Icon, Menu, Sidebar } from 'semantic-ui-react';

import Contents from '../Contents';

const Nav = (props) => {
    const { visible, setVisible } = props;

    return (
        <Grid columns={1}>
            <Grid.Column>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        direction="right"
                        icon="labeled"
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width="thin"
                    >
                        <Menu.Item as="a">
                            <Icon name="home" />
                            Home
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="gamepad" />
                            Games
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="camera" />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={visible}>
                        <Contents />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        </Grid>
    );
};


export default Nav;