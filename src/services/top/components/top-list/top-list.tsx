import React, { useEffect, useState } from 'react';
import { } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';
import { HRLine } from '../../../../core/components/hrline/hrline';

import s from './test-create.module.scss';


export function TestCreateComp() {
    const navigate = useNavigate();
    
    

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
            
        </>
    );
}
