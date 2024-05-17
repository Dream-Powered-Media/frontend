import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { CommunityTopComp } from '../services/general/components/comm-top/comm-top';
import { useNavigate } from 'react-router-dom';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function CommunityTop() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Топ сообщества
            </Title>
            <HRLine/>
            <CommunityTopComp />
            <Bubbles hasBottomBubble />
        </>
    );
}
