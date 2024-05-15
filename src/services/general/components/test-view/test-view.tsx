import React, { useEffect, useState } from 'react';
import { Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { TestQuestionComp } from '../test-question/test-question';
import { useNavigate, useParams } from 'react-router-dom';
import { testsApi } from '../../api';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';

import s from './test-view.module.scss';
import { HRLine } from '../../../../core/components/hrline/hrline';


const LLM_LIST = [
    'dummy',
    'gigachat',
    'gpt4',
    'llama'
]


export function TestComp() {
    const navigate = useNavigate();
    const param = useParams();
    const test_id = param.id as UUID;

    const [status, setStatus] = useState(false);
    const [llm, setLLM] = useState<string>(LLM_LIST[0]);
    const [test, setTest] = useState<Test | undefined>(undefined);

    useEffect(() => {
        testsApi.getTestById({path: {test_id}}).then(data => {
            if (data?.error || !data?.body) {
                alert(data?.error);
                return;
            }
            setTest(data?.body);
        }).then(() => setStatus(true))
    }, [test_id]);

    const startCheck = () => {
        testsApi.llmLaunchTestById({
            body: {llm_slug: llm},
            path: {test_id: test_id},
        }).then(data => {
            if (data?.error) {
                alert(JSON.stringify(data?.error));
                return;
            }
            navigate('/tests');
        })
    }

    const changeLLMOpt = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLLM(e.target.value);
    }

    if (!test_id) {
        navigate('/not-found');
        return null;
    }

    if (!status) {
        return (
            <Title ttype={TitleType.SubTitle}>
                Ищем тест...
            </Title>
        )
    }

    if (!test) {
        navigate('/not-found');
        return null;
    }

    return (
        <>
            <Title ttype={TitleType.H2}>{test.name}</Title>
            <div className={s.llms}>
                <Text ttype={TextType.Action}>
                    Выберите модель для запуска
                </Text>
                <select
                    name="llm"
                    value={llm}
                    onChange={changeLLMOpt}
                    className={s.options}
                >
                    {LLM_LIST.map(i => (
                        <option value={i} key={i}>{i}</option>
                    ))}
                </select>
                <Button onClick={startCheck} btype={ButtonType.Gradient}>
                    <Title ttype={TitleType.SubTitle}>
                        Запустить проверку теста!
                    </Title>
                </Button>
            </div>
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Описание теста
            </Title>
            <Panel>
                <Text ttype={TextType.Body}>{test.description}</Text>
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
                            <TestQuestionComp question={q} key={q.number} />
                        </Panel>
                        <br/>
                    </>
                );
            })}
        </>
    );
}
