import React from 'react'; 

import s from './panel.module.scss';

interface Props {
    isColored?: boolean;
    children: React.ReactNode;
}

export function Panel({children, isColored}: Props) {
    return (
        <div className={s.panel} data-color={isColored}>
            {children}
        </div>
    );
}
