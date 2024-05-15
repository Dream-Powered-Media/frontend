import React, { useEffect, useState } from 'react';
import { CheckResult, CheckStatus, QuestionAnswer, Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { TestQuestionComp } from '../test-question/test-question';
import { useNavigate, useParams } from 'react-router-dom';
import { testsApi } from '../../api';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';

import { HRLine } from '../../../../core/components/hrline/hrline';

import s from './test-result.module.scss';
import { QuestionAnswerComp } from '../test-question-answer/test-question-answer';


function Additional({correct, answer}: {
    correct?: boolean,
    answer: QuestionAnswer,
}) {
    return (
        <>
            <Title ttype={TitleType.Title} isbold>
                Ответ модели:
            </Title>
            <div className={s.colorful} data-corr={correct}>
                <QuestionAnswerComp answer={answer} />
            </div>
        </>
    );
}


export function TestResultComp() {
    const navigate = useNavigate();
    const param = useParams();
    const test_id = param.id as UUID;

    const [state, setState] = useState(0);
    const [test, setTest] = useState<Test | undefined>(undefined);
    const [result, setResult] = useState<CheckResult[] | undefined>(undefined);
    const [status, setStatus] = useState<CheckStatus[] | undefined>(undefined);

    useEffect(() => {
        testsApi.getTestById({path: {test_id: test_id}}).then(data => {
            if (data?.error) {
                alert(data?.error);
                return;
            }
            setTest(data?.body);
            setState(old => old + 1);
        })
        testsApi.llmGetTestResultById({path: {test_id: test_id}}).then(data => {
            if (data?.error) {
                alert(data?.error);
                return;
            }
            setResult(data?.body?.results);
            setState(old => old + 1);
        });
        testsApi.llmGetTestStatusById({path: {test_id: test_id}}).then(data => {
            if (data?.error) {
                alert(data?.error);
                return;
            }
            setStatus(data?.body?.statuses);
            setState(old => old + 1);
        });
    }, []);

    if (!test_id) {
        navigate('/not-found');
        return null;
    }

    if (state < 3) {
        return (
            <Title ttype={TitleType.SubTitle}>
                Ищем результаты...
            </Title>
        )
    }

    if (!test || !result) {
        return null;
    }


    let rcnt = 0;
    test.questions.forEach((q: TestQuestion) => {
        let right = 0;
        q.answers.forEach(item => {
            if (item?.is_correct) {
                right = item.number - 1;
            }
        });
        let model = 0;
        result?.[result.length - 1].answers.forEach(item => {
            if (item.question_number === q.number) {
                model = item.selected_answer_number;
            }
        })
        if (right === model) {
            rcnt++;
        }
    });

    if (test?.questions?.length) {

        rcnt = Math.round((rcnt / test.questions.length) * 100);
    }

    return (
        <>
            <Title ttype={TitleType.H2}>{test?.name}</Title>
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Описание теста
            </Title>
            <Panel>
                <Text ttype={TextType.Body}>{test.description}</Text>
            </Panel>
            <Title ttype={TitleType.H3}>
                Описание проверки
            </Title>
            <Panel>
                <Title ttype={TitleType.SubTitle}>
                    Статус:&nbsp;<b>{status?.[status.length - 1]?.status}</b>
                </Title>
            </Panel>
            <Panel>
                <Title ttype={TitleType.SubTitle}>
                    Модель:&nbsp;<b>{status?.[status.length - 1]?.llm_slug}</b>
                </Title>
            </Panel>
            <Panel>
                <Title ttype={TitleType.SubTitle}>
                    Процент верных ответов:&nbsp;<b>{`${rcnt}%`}</b>
                </Title>
            </Panel>
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Вопросы теста
            </Title>
            {test.questions.map((q: TestQuestion) => {
                let right = 0;
                q.answers.forEach(item => {
                    if (item?.is_correct) {
                        right = item.number - 1;
                    }
                });
                let model = 0;
                result?.[result.length - 1].answers.forEach(item => {
                    if (item.question_number === q.number) {
                        model = item.selected_answer_number;
                    }
                })

                return (
                    <>
                        <Panel>
                            <TestQuestionComp question={q} key={q.number} />
                            <Additional answer={q.answers[model]} correct={model === right}/>
                        </Panel>
                        <br/>
                    </>
                );
            })}
        </>
    );
}
