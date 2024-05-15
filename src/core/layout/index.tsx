import React from 'react';
import {Outlet} from 'react-router-dom';

import {Content} from '../components/content/content';
import { Header } from '../components/header/header';

export const Layout = () => (
    <>
        <Header />
        <Content>
            <Outlet />
        </Content>
    </>
);
