import React from 'react';

import s from './content.module.scss';

interface Props {
    children: React.ReactNode;
}

export function Content({children}: Props) {
    return (
        <main className={s.content}>
            {children}
        </main>
    );
}
