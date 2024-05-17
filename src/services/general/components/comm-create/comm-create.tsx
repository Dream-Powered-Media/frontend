import React, { useState } from 'react';

import { Title } from '../../../../core/components/title/title';
import { ButtonType, TitleType } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { useNavigate, } from 'react-router-dom';
import { commApi } from '../../api';
import { Button } from '../../../../core/components/button/button';

import s from './comm-create.module.scss';


export function CommCreateComp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const onChangeName = (e: React.ChangeEvent<any>) => setName(e.target.value);
    const onChangeDesc = (e: React.ChangeEvent<any>) => setDesc(e.target.value);
    const onSubmit = () => {
        
        navigate('/profile');
    }

    return (
        <>
            <Title ttype={TitleType.H3}>
                Название сообщества
            </Title>
            <input
                className={s.name}
                placeholder='Введите название вашего сообщество'
                value={name}
                onChange={onChangeName}
            />
            <br/>
            <br/>
            <Title ttype={TitleType.H3}>
                Описание сообщества
            </Title>
            <Panel>
                <textarea
                    className={s.desc}
                    placeholder='Опишите о чем ваше сообщество или скажите что угодно о нем, что хотите!'
                    value={desc}
                    onChange={onChangeDesc}
                />
            </Panel>
            <Button onClick={onSubmit} btype={ButtonType.Gradient}>
                <Title ttype={TitleType.Title} isbold>
                    Создать!
                </Title>
            </Button>
        </>
    );
}
