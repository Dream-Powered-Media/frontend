import React from 'react';

import { TeamComp } from '../team/team';
import { Title } from '../../../../core/components/title/title';
import { TextType, TitleType } from '../../../../core/types/common';
import { Text } from '../../../../core/components/text/text';

import AuthorAsset from '../../assets/author.png';

import s from './help.module.scss';
import { Icon } from '../../../../core/components/icon/icon';

export function HelpComp() {
    return (
        <>
            <br/>
            <Title ttype={TitleType.H3}>
                Основатель
            </Title>
            <br/>
            <Text ttype={TextType.Body}>
                Всем привет, меня зовут Станислав Клоков. Я разработчик ПО, создавший вашу любимую платформу!
            </Text>
            <br/>
            <div className={s.me}>
                <Icon src={AuthorAsset} />
                <div>
                    <br/>
                    <Title ttype={TitleType.Title}>
                        Обо мне
                    </Title>
                    <ul>
                        <li>
                            Меня зовут Стас
                        </li>
                        <li>
                            Мне 21 год
                        </li>
                        <li>
                            Работаю в компании Яндекс.Технологии
                        </li>
                        <li>
                            Люблю спорт
                        </li>
                        <li>
                            Преподаю в МФТИ
                        </li>
                    </ul>
                </div>
            </div>
            <TeamComp />
        </>
    )
}