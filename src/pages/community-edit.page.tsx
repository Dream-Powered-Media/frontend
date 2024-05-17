import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function CommunityEdit() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Редактирование сообщества
            </Title>
            <HRLine/>
            <p>...</p>
            <Bubbles hasBottomBubble />
        </>
    );
}
