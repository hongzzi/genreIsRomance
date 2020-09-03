import React from 'react';
import styled from 'styled-components';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import Contents from '../Contents';

const Nav = (props) => {
    const { visible, setVisible } = props;

    return (
        // <Sidebar.Pushable>
            <Sidebar dimmed={visible}
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
                    빈칸
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="film" />
                    장르는로맨스
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="ticket" />
                    예매현황
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="clipboard" />
                    후기게시판
                </Menu.Item>
            </Sidebar>
            /* <Sidebar.Pusher dimmed={visible}>
                <Contents />
            </Sidebar.Pusher>
        /* </Sidebar.Pushable> */
    );
};

export default Nav;
