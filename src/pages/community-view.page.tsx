import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { CommunityViewComp } from '../services/general/components/comm-view/comm-view';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function CommunityView() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Страница сообщества
            </Title>
            <HRLine />
            <CommunityViewComp />
            <Bubbles hasBottomBubble />
        </>
    );
}
