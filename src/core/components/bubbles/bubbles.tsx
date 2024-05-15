import React, {memo} from 'react';

import classnames from 'classnames/bind';

import bottom from './assets/ellipse-bottom.png';
import leftFirst from './assets/ellipse-left-first.png';
import leftSecond from './assets/ellipse-left-second.png';
import rightFirst from './assets/ellipse-right-first.png';
import rightSecond from './assets/ellipse-right-second.png';

import s from './bubbles.module.scss';

const cn = classnames.bind(s);
const bb = 'bubble';

interface Props {
    hasSideBubbles?: boolean;
    hasBottomBubble?: boolean;
}

export const Bubbles = memo<Props>(function Bubbles({hasBottomBubble, hasSideBubbles}: Props) {
    return (
        <>
            {hasSideBubbles && (
                <>
                    <img className={cn('bubble', [`${bb}-left-first`])} src={leftFirst} />
                    <img className={cn('bubble', [`${bb}-left-second`])} src={leftSecond} />
                    <img className={cn('bubble', [`${bb}-right-first`])} src={rightFirst} />
                    <img className={cn('bubble', [`${bb}-right-second`])} src={rightSecond} />
                </>
            )}
            {hasBottomBubble && (
                <img className={cn('bubble', [`${bb}-bottom`])} src={bottom} />
            )}
        </>
    );
});
