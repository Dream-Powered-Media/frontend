import React from 'react';

import {Title} from '../core/components/title/title';
import {ButtonType, TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { TestsListComp } from '../services/general/components/test-list/test-list';
import { Button } from '../core/components/button/button';
import { useNavigate } from 'react-router-dom';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function TestList() {
    const navigate = useNavigate();

    return (
        <>
            <Title ttype={TitleType.H1}>
                Мои тесты
            </Title>
            <HRLine/>
            <TestsListComp />
            <Button onClick={() => navigate('/test/create')} btype={ButtonType.Gradient}>
                <Title ttype={TitleType.Title}>
                    Добавить тест!
                </Title>
            </Button>
            <Bubbles hasBottomBubble />
        </>
    );
}
