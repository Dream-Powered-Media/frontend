import React from 'react';

import { Text } from '../../../../core/components/text/text';
import { ButtonType, TextType, TitleType } from '../../../../core/types/common';
import { useLocalStorage } from '../../../../core/hooks/use-local-storage';

import { Link, useNavigate } from 'react-router-dom';
import { Title } from '../../../../core/components/title/title';
import { HRLine } from '../../../../core/components/hrline/hrline';
import { Panel } from '../../../../core/components/panel/panel';
import { Button } from '../../../../core/components/button/button';
import { Icon } from '../../../../core/components/icon/icon';

import FakeIcon from './smile.png';

import s from './profile.module.scss';

const EMP = 'Здесь пока что ничего нет';
const MAPPER = {
    founder: 'Мои сообщества',
    admin: 'Управляю',
    participant: 'Участвую',
    follower: 'Мои подписки'
}

export function ProfileComp() {
    const navigate = useNavigate();

    const user = localStorage.getItem('user');

    const logout = () => {
        console.log('logout')
        localStorage.removeItem('has_user');
        window.location.pathname = '/';
    }

    return (
        <>
            <div className={s.prof}>
                <Icon src={FakeIcon} />
                <div>
                    <Title ttype={TitleType.H3} isbold>
                        {user.name}
                        {user.is_author && (
                            <span>
                                <Text ttype={TextType.Control} isbold isUnderlined>
                                    Является автором в сервисе!
                                </Text>
                            </span>
                        )}
                    </Title>
                    <Panel isColored>
                        <Text ttype={TextType.Body}>
                            {user.bio}
                        </Text>
                    </Panel>
                </div>
            </div>
            <div className={s.prof}>
                {Object.entries(MAPPER).map(([item, title]) => {
                    const filtered = user.communities.filter(comm => comm.role === item);

                    return (
                        <Panel>
                            <Title ttype={TitleType.Title} isbold>
                                {title}
                            </Title>
                            {filtered?.length
                                ? (
                                    <ul>
                                        {filtered.map(comm => (
                                            <li>
                                                <Link to={`/community/${comm.uuid}`}>
                                                    {comm.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <Text ttype={TextType.Body}>
                                        {EMP}
                                    </Text>
                                )
                            }
                        </Panel>
                    );
                })}
            </div>
            <HRLine />
            <div className={s.prof}>
                <Button onClick={() => navigate('/community/list')} btype={ButtonType.Gradient}>
                    <Title ttype={TitleType.Title}>
                        К списку сообществ
                    </Title>
                </Button>
                <Button onClick={() => navigate('/community/create')} btype={ButtonType.Gradient}>
                    <Title ttype={TitleType.Title}>
                        Добавить сообщество
                    </Title>
                </Button>
                <Button onClick={logout} btype={ButtonType.Default}>
                    <Title ttype={TitleType.Title}>
                        Выйти из системы
                    </Title>
                </Button>
            </div>
        </>
    );
}
