import React from 'react';

import {Title} from '../core/components/title/title';
import {ButtonType, TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { TestsListComp } from '../services/general/components/test-list/test-list';
import { Button } from '../core/components/button/button';
import { useNavigate } from 'react-router-dom';
import { Bubbles } from '../core/components/bubbles/bubbles';
import { TestComp } from '../services/general/components/test-view/test-view';
import { TestCreateComp } from '../services/general/components/test-create/test-create';

export function TestCreate() {
    const navigate = useNavigate();

    return (
        <>
            <Title ttype={TitleType.H1}>
                Создание нового теста
            </Title>
            <HRLine/>
            <TestCreateComp />
            <Bubbles hasBottomBubble />
        </>
    );
}
