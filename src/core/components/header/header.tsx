import React from 'react';

import { Button } from '../button/button';
import { Text } from '../text/text';
import { ButtonType, TextType } from '../../types/common';
import { PROJECT_NAME } from '../../constants/common';

import logo from './assets/logo.svg';
import enter from './assets/enter.svg';

import s from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { browserStorageWorker } from '../../../storage/browser/model';

export function Header() {
    const navigate = useNavigate();
    const onAuth = () => navigate('/auth');
    const userLogin = browserStorageWorker.getUser()?.login;

    return (
        <header className={s.header}>
            <div className={s.company}>
                <img src={logo} />
                <Text ttype={TextType.Control} isbold>{PROJECT_NAME}</Text>
            </div>
            <div className={s.controls}>
                <Link to='/' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        О проекте
                    </Text>
                </Link>
                <Link to='/#guide' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        Как пользоваться
                    </Text>
                </Link>
                <Link to='/#faq' className={s.link}>
                    <Text ttype={TextType.Control} isbold isUnderlined>
                        FAQ
                    </Text>
                </Link>
                {userLogin 
                    ? (
                        <Text ttype={TextType.Control} isbold>
                            {userLogin}
                        </Text>
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