import React, {memo} from 'react';

import {ButtonType} from '../../types/common';

import s from './button.module.scss';

interface Props {
    btype?: ButtonType;
    children: React.ReactNode;
    onClick: () => void;
}

export const Button = memo<Props>(function Button({
    children,
    onClick,
    btype = ButtonType.Default,
}: Props) {
    return (
        <button 
            className={s.button}
            onClick={onClick}
            data-btype={btype}
        >
            {children}
        </button>
    );
});
