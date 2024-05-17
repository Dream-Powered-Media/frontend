import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { Bubbles } from '../core/components/bubbles/bubbles';
import { FAQ } from '../services/about/components/faq/faq';

export function FAQPage() {

    return (
        <>
            <Title ttype={TitleType.H1}>
                Часто возникающие вопросы FAQ
            </Title>
            <HRLine/>
            <FAQ/>
            <Bubbles hasBottomBubble />
        </>
    );
}
