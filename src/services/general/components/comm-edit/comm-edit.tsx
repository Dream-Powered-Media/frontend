import React, { useState } from 'react';
import { QuestionAnswerComp } from '../directory/directory';

import s from './test-question.module.scss';
import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';

const PLACEHOLDER = 'Введите текст вопроса'


export function CommEditComp({}: {
    
}) {
    const [textQ, setTQ] = useState('');

    const hdl = (e: React.ChangeEvent<any>) => {
        setTQ(e.target.value);
    }

    return (
        <>
            <div className={s.line}>
                <div className={s.bullet}>{1}</div>
                {1 
                    ? (
                        <input
                            placeholder={PLACEHOLDER}
                            value={textQ}
                            onClick={hdl}
                        />
                    )
                    : (
                        <Title isbold ttype={TitleType.Title}>{1}</Title>
                    )
                }
            </div>
            <hr/>
            <ul>
                {[].map((a) => {
                    return <QuestionAnswerComp answer={a} key={a} />
                })}
            </ul>
        </>
    );
}