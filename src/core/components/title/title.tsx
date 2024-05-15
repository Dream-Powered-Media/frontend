import React from 'react';

import classnames from 'classnames/bind';

import {TitleType} from '../../types/common';

import s from './title.module.scss';

const cn = classnames.bind(s);

interface Props {
    ttype: TitleType;
    isbold?: boolean;
    children: React.ReactNode;
}

export function Title({
    ttype,
    children,
    isbold = true,
}: Props) {
    return (
        <div className={cn('title', {
            [`title-${ttype}`]: true,
            'title-bold': isbold,
        })}>
            {children}
        </div>
    );
}
