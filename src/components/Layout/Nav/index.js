import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

const Nav = (props) => {
    const { visible, setVisible } = props;

    return (
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
            <Menu.Item as="a"></Menu.Item>
            <Link to="/">
                <Menu.Item>
                    <Icon name="film" />
                    장르는로맨스
                </Menu.Item>
            </Link>
            <Link to="/login">
                <Menu.Item>
                    <Icon name="lock" />
                    카카오 로그인
                </Menu.Item>
            </Link>
            <Link to="/user/form">
                <Menu.Item>
                    <Icon name="ticket" />
                    유저폼
                </Menu.Item>
            </Link>
            <Link to="/user/info">
                <Menu.Item>
                    <Icon name="ticket" />
                    유저카드
                </Menu.Item>
            </Link>
            <Link to="/movie/form">
                <Menu.Item>
                    <Icon name="clipboard" />
                    티켓폼
                </Menu.Item>
            </Link>
            <Link to="/movie/info">
                <Menu.Item>
                    <Icon name="clipboard" />
                    티켓카드
                </Menu.Item>
            </Link>
        </Sidebar>
    );
};

export default Nav;
