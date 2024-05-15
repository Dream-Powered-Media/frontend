import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {TitleType} from '../core/types/common';
import { Modal } from '../core/components/modal/modal';
import { Panel } from '../core/components/panel/panel';
import { HRLine } from '../core/components/hrline/hrline';
import { Title } from '../core/components/title/title';
import { AuthForm } from '../services/passport/components/auth-form/auth-form';
import { useNavigate } from 'react-router-dom';

export function Auth() {
    const navigate = useNavigate();
        const onClose = () => navigate('/');

    return (
        <>
            <Title ttype={TitleType.H1}>Добро пожаловать!</Title>
            <Bubbles hasBottomBubble hasSideBubbles />
            <HRLine />
            <Modal onClose={onClose}>
                <AuthForm />
            </Modal>
        </>
    );
}
