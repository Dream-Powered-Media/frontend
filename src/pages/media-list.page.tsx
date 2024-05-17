import React from 'react';

import {Title} from '../core/components/title/title';
import {ButtonType, TextType, TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { Button } from '../core/components/button/button';
import { useNavigate } from 'react-router-dom';
import { Bubbles } from '../core/components/bubbles/bubbles';
import { Panel } from '../core/components/panel/panel';
import { Text } from '../core/components/text/text';
import { ProfileComp } from '../services/passport/components/profile/profile';

export function MediaList() {
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
