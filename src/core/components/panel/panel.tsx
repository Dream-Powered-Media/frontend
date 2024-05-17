import React from 'react'; 

import s from './panel.module.scss';

interface Props {
    isColored?: boolean;
    children: React.ReactNode;
    level?: number;
}

export function Panel({children, isColored, level}: Props) {
    return (
        <div className={s.panel} data-color={isColored} data-level={level}>
            {children}
        </div>
    );
}
