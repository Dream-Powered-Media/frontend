import React from 'react';

import classnames from 'classnames/bind';

import {TextType} from '../../types/common';

import s from './text.module.scss';

const cn = classnames.bind(s);

interface Props {
    ttype: TextType;
    isbold?: boolean;
    isUnderlined?: boolean;
    children: React.ReactNode;
}

export function Text({
    ttype,
    children,
    isbold = false,
    isUnderlined = false,
}: Props) {
    return (
        <div className={cn('text', {
            [`text-${ttype}`]: true,
            'text-bold': isbold,
            'text-underlined': isUnderlined,
        })}>
            {children}
        </div>
    );
}
