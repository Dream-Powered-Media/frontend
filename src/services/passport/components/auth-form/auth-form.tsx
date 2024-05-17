import { sha512 } from 'js-sha512';
import React, { useState } from 'react';

import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { AuthInput } from '../auth-input/auth-input';
import { LOGIN_LC_KEY, PASSWORD_LC_KEY } from '../../../../core/constants/auth';

import s from './auth-form.module.scss';
import { Button } from '../../../../core/components/button/button';
import { authAPI } from '../../api';
import { browserStorageWorker } from '../../../../storage/browser/model';
import { useNavigate } from 'react-router-dom';

const SIGN_IN_TEXT = 'Авторизация';
const SIGN_UP_TEXT = 'Регистрация';

const SIGN_IN_BUTT = 'Войти';
const SIGN_UP_BUTT = 'Зарегистрироваться';

const TEXTS = [SIGN_IN_TEXT, SIGN_UP_TEXT];
const BUTTS = [SIGN_IN_BUTT, SIGN_UP_BUTT];

function authWO() {
    localStorage.setItem('has_user', 'jussiar');
}

export function AuthForm() {
    const [flow, setFlow] = useState(0);
    const navigate = useNavigate();

    const auth = () => {
        const login = localStorage.getItem(LOGIN_LC_KEY) as string;
        const password = localStorage.getItem(PASSWORD_LC_KEY) as string;

        if (!login?.length || !password?.length) {
            alert('Все поля должны быть непустыми!');
            return;
        }

        const flowApiMethod = flow === 0 ? authAPI.signIn : authAPI.signUp;

        flowApiMethod({
            user_login: login,
            user_password_hash: sha512(password),
        }).then(data => {
            if (data?.error) {
                browserStorageWorker.clearBrowserStorage();
                authWO();
                window.location.pathname = '/profile';
                // alert(JSON.stringify(data.error));
                return;
            }
            browserStorageWorker.saveJWT({
                access_token: data.headers['JWT-checker-access-token'],
                refresh_token: data.headers['JWT-checker-refresh-token'],
            });
            browserStorageWorker.saveUser({
                login,
                password
            });
            localStorage.setItem(data.body)
            navigate(-1);
        })
    }

    const changeFlow = () => setFlow(old => 1 - old);

    return (
        <>
            <fieldset className={s.auth}>
                <legend>
                    <Title ttype={TitleType.Title}>{TEXTS[flow]}</Title>
                </legend>
                {Boolean(flow) && <AuthInput inputKey={'email'} name='Почта' placeholder='example@mail.ru' />}
                <AuthInput inputKey={LOGIN_LC_KEY} name='Логин' placeholder='mylovelyusername/login' />
                <AuthInput inputKey={PASSWORD_LC_KEY} name='Пароль' placeholder='qwerty123' itype='password' />
                <Button onClick={auth}>
                    {BUTTS[flow]}
                </Button>
            </fieldset>
            <div className={s.switcher} onClick={changeFlow}>
                {TEXTS[1 - flow]}
            </div>
        </>
    );
}

