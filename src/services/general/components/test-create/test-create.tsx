import React, { useEffect, useState } from 'react';
import { QuestionAnswer, RawTest, Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { TestQuestionComp } from '../test-question/test-question';
import { useNavigate, useParams } from 'react-router-dom';
import { testsApi } from '../../api';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';
import { HRLine } from '../../../../core/components/hrline/hrline';

import s from './test-create.module.scss';


const LLM_LIST = [
    'Dummy',
    'YandexGPT2',
    'GPT3'
]


const BASE_ANSWER: QuestionAnswer = {
    number: 1,
    text: '',
    is_correct: false,
}

const BASE_QUESTION: TestQuestion = {
    text: '',
    number: 1,
    answers: [
        BASE_ANSWER,
    ],
}

const BASE_TEST: RawTest = {
    name: '',
    description: '',
    questions: [
        BASE_QUESTION,
    ],
}


export function TestCreateComp() {
    const navigate = useNavigate();
    const [test, setTest] = useState<RawTest>(BASE_TEST);

    const addQ = () => {
        setTest(old => ({
            ...old,
            questions: [
                ...old.questions, {
                    ...BASE_QUESTION,
                    number: old.questions.length + 1,
                    answers: [
                        {
                            ...BASE_ANSWER,
                        }
                    ]
                }
            ]
        }))
    }

    const addA = (q_num: number) => {
        setTest(old => {
            const new_qs = old.questions.map(item => {
                if (item.number === q_num) {
                    return {
                        ...item,
                        answers: [...item.answers, {
                            ...BASE_ANSWER,
                            number: item.answers.length + 1,
                        }]
                    }
                }
                return item;
            })
            return {
                ...old,
                questions: [
                    ...old.questions, {
                        ...BASE_QUESTION,
                        number: old.questions.length + 1,
                        answers: [
                            {
                                ...BASE_ANSWER,
                            }
                        ]
                    }
                ]
            }
        })
    }


    return (
        <>
            <Title ttype={TitleType.H3}>
                Заголовок теста
            </Title>
            <input
                className={s.name}
                placeholder='Введите название вашего теста'
            />
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Описание теста
            </Title>
            <Panel>
                <textarea
                    className={s.desc}
                    placeholder='Опишите о чем ваш тест или скажите что угодно о нем, что хотите!'
                />
            </Panel>
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Вопросы теста
            </Title>
            {test.questions.map((q: TestQuestion) => {
                return (
                    <>
                        <Panel>
                            <TestQuestionComp question={q} key={q.number} mode />
                        </Panel>
                        <br/>
                    </>
                );
            })}
        </>
    );
}
