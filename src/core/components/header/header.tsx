import React from 'react';

import { Button } from '../button/button';
import { Text } from '../text/text';
import { ButtonType, TextType } from '../../types/common';
import { PROJECT_NAME } from '../../constants/common';

import enter from './assets/enter.svg';

import s from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { browserStorageWorker } from '../../../storage/browser/model';

export function Header() {
    const navigate = useNavigate();
    const onAuth = () => navigate('/auth');
    const onProfile = () => navigate('/profile');
    const userLogin = browserStorageWorker.getUser()?.login;

    const checkWO = localStorage.getItem('has_user');

    return (
        <header className={s.header}>
            <div className={s.company}>
                <Text ttype={TextType.Control} isbold>{PROJECT_NAME}</Text>
            </div>
            <div className={s.controls}>
                <Link to='/' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        О проекте
                    </Text>
                </Link>
                <Link to='/community/list' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        К сообществам
                    </Text>
                </Link>
                <Link to='/media/list' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        К списку медиа
                    </Text>
                </Link>
                <Link to='/faq' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        FAQ
                    </Text>
                </Link>
                {userLogin || checkWO
                    ? (
                        <Button btype={ButtonType.Transparent} onClick={onProfile}>
                            <Text ttype={TextType.Control} isbold>
                                {userLogin || checkWO}
                            </Text>
                        </Button>
                    )
                    : (
                        <Button btype={ButtonType.Transparent} onClick={onAuth}>
                            <img src={enter} />
                            <Text ttype={TextType.Control} isbold>
                                Войти
                            </Text>
                        </Button>
                    )
                }
            </div>
        </header>
    );
}