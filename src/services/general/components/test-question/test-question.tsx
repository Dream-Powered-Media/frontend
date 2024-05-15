import React, { useState } from 'react';
import { QuestionAnswer,  TestQuestion } from '../../../../core/types/definitions';
import { QuestionAnswerComp } from '../test-question-answer/test-question-answer';

import s from './test-question.module.scss';
import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';

const PLACEHOLDER = 'Введите текст вопроса'


export function TestQuestionComp({question, mode}: {
    question: TestQuestion,
    mode?: boolean,
}) {
    const [textQ, setTQ] = useState('');

    const hdl = (e: React.ChangeEvent<any>) => {
        setTQ(e.target.value);
    }

    return (
        <>
            <div className={s.line}>
                <div className={s.bullet}>{question.number}</div>
                {mode 
                    ? (
                        <input
                            placeholder={PLACEHOLDER}
                            value={textQ}
                            onClick={hdl}
                        />
                    )
                    : (
                        <Title isbold ttype={TitleType.Title}>{question.text}</Title>
                    )
                }
            </div>
            <hr/>
            <ul>
                {question.answers.map((a: QuestionAnswer) => {
                    return <QuestionAnswerComp answer={a} key={a.number} />
                })}
            </ul>
        </>
    );
}