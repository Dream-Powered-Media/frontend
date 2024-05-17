import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { Bubbles } from '../core/components/bubbles/bubbles';
import { CommCreateComp } from '../services/general/components/comm-create/comm-create';

export function CommunityCreate() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Создание нового сообщества
            </Title>
            <HRLine/>
            <CommCreateComp />
            <Bubbles hasBottomBubble />
        </>
    );
}
