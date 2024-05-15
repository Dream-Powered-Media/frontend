import React, { useEffect, useState } from 'react';
import { QuestionAnswer, Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { Status, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { Text } from '../../../../core/components/text/text';
import {testsApi} from '../../api';
import { TestComp } from '../test-view/test-view';
import { Link, useNavigate } from 'react-router-dom';

import s from './test-list.module.scss';

import classnames from 'classnames/bind';

const cn = classnames.bind(s);

type TestsTableProps = {
    list: Test[]
};

function TableHeader() {
    return (
        <div className={s.testsListItem}>
            <div className={cn('flex1', 'flex1-top')}>
                <Title ttype={TitleType.Title}>
                    Название теста
                </Title>
            </div>
            <div className={cn('flex2', 'flex2-top')}>
                <Title ttype={TitleType.Title}>
                    Описание теста
                </Title>
            </div>
            <div className={cn('flex3', 'flex3-top')}>
                <Title ttype={TitleType.Title}>
                    Статус проверки
                </Title>
            </div>
            <div className={cn('flex4', 'flex4-top')}>
                <Title ttype={TitleType.Title}>
                    Количество вопросов в тесте
                </Title>
            </div>
        </div>
    );
}

function TestsTable({list}: TestsTableProps) {
    const navigate = useNavigate()

    const [statusList, setStatusList] = useState<{
        [k: UUID]: {
            status: string,
            llm_slug: string | null,
        },
    }>({});

    useEffect(() => {
        list.forEach(test => {
            testsApi.llmGetTestStatusById({
                path: {test_id: test.identifier}
            }).then(data => setStatusList(old => ({
                    ...old,
                    [test.identifier]: data?.body?.statuses?.length
                        ? data.body.statuses[data.body.statuses.length - 1]
                        : {
                            status: 'UNDEFINED',
                            llm_slug: null
                        }
                }))
            );
        });
    }, []);

    return (
        <div className={s.testsList}>
            <TableHeader/>
            {list.map(test => (
                <div className={s.testsListItem}>
                    <div className={s.flex1}>
                        <Link to={`/test/${test.identifier}`}>{test.name}</Link>
                    </div>
                    <div className={s.flex2}>
                        <p className={s.overtext}>{test.description}</p>
                    </div>
                    <div className={s.flex3}>
                        <div 
                            className={cn('status', `status-${statusList[test.identifier]?.status}`)}
                            onClick={() => navigate(`/test/${test.identifier}/result`)}
                        >
                            {statusList[test.identifier]?.status}
                        </div>
                        <div>{statusList[test.identifier]?.llm_slug}</div>
                    </div>
                    <div className={s.flex4}>{test.questions.length}</div>
                </div>
            ))}
        </div>
    );
}


export function TestsListComp() {
    const [testsList, stl] = useState<Test[]>([]);

    useEffect(() => {
        testsApi.getMyTests({query:{}})
            .then(data => stl(data?.body || []))
    }, []);

    return (
        <>
            {testsList?.length > 0
                ? <TestsTable list={testsList} />
                : <Title ttype={TitleType.H2}>У вас пока нет созданных тестов!</Title>
            }
        </>
    )
};