import React from 'react';

import s from './icon.module.scss';

export function Icon({src}: {src: any}) {
    return (
        <img className={s.icon} src={src} alt="Картинка в DPM" />
    );
};
