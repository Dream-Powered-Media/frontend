import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { Bubbles } from '../core/components/bubbles/bubbles';

export function NotFound() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                К сожалению такой страницы у нас нет!
            </Title>
            <Bubbles hasBottomBubble hasSideBubbles/>
        </>
    );
}
