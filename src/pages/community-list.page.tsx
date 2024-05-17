import React from 'react';

import {Title} from '../core/components/title/title';
import {ButtonType, TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { CommunityListComp } from '../services/general/components/comm-list/comm-list';
import { Button } from '../core/components/button/button';
import { useNavigate } from 'react-router-dom';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function CommunityList() {
    const navigate = useNavigate();

    const can_add_new = localStorage.getItem('has_user');

    return (
        <>
            <Title ttype={TitleType.H1}>
                Сообщества
            </Title>
            <HRLine/>
            <CommunityListComp />
            <br/>
            {can_add_new && <Button onClick={() => navigate('/community/create')} btype={ButtonType.Gradient}>
                <Title ttype={TitleType.Title}>
                    Добавить свое сообщество!
                </Title>
            </Button>}
            <Bubbles hasBottomBubble />
        </>
    );
}
