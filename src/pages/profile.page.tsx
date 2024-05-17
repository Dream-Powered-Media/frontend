import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { Bubbles } from '../core/components/bubbles/bubbles';
import { ProfileComp } from '../services/passport/components/profile/profile';

export function Profile() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Профиль
            </Title>
            <HRLine/>
            <ProfileComp />
            <Bubbles hasBottomBubble />
        </>
    );
}
