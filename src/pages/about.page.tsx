import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {Button} from '../core/components/button/button';
import {ButtonType, TextType, TitleType} from '../core/types/common';
import { Modal } from '../core/components/modal/modal';
import { Panel } from '../core/components/panel/panel';
import { HRLine } from '../core/components/hrline/hrline';
import { Title } from '../core/components/title/title';
import { AuthForm } from '../services/passport/components/auth-form/auth-form';
import { Link, useNavigate } from 'react-router-dom';
import { Text } from '../core/components/text/text';
import { HelpComp } from '../services/about/components/help/help';

export function About() {
    const nv = useNavigate();

    return (
        <>
            <Title ttype={TitleType.H1}>О проекте</Title>
            <Bubbles hasBottomBubble hasSideBubbles />
            <HRLine />
            <Panel isColored>
                <Text ttype={TextType.Action}>
                    <div color="white">Dream Powered Media - медиа сервис с внутренним анализом контента.</div>
                </Text>
            </Panel>
            <Text ttype={TextType.Body}>
                На данный момент в мире существует огромное количество разнообразных систем, 
                которые позволяют реализовывать работу пользователей с медиа ресурсами для самых разнообразных целей. 
                В современном мире практически любое желание клиента по поиску интересующих его сущностей в сети 
                находит отражение в уже существующих платформах или социальных сетях. 
                Это делает жизнь людей проще и помогает им находить ответы как на свои самые простые, 
                так и сложные желания по проведению досуга. И это не может не радовать людей, 
                которые двигаются в будущее инженерии ПО, ведь каждая система, 
                дающая людям что-то новое и более удобное становится поводом для гордости одного из нас, 
                а чаще сразу многих
            </Text>
            <br/>
            <Text ttype={TextType.Body}>
                В своей работе я поставил перед собой цель попытаться вывести работу с медиа в рамках платформы 
                на новый уровень гибкости и клиентоориентированности, при этом стараясь сделать 
                это максимально лаконично. В погоне за этой целью я преследовал множество как технических, 
                так и предпринимательских задач, о которых я расскажу на страницах своей выпускной работы. 
                Результатом моего проекта я хочу получить систему <b>Dream Powered Media</b>, 
                дающую возможность видеть пользовательскую оценку контента внутри пользовательских сообществ, 
                дающую людям больше субъективности в подборе ресурсов для досуга, а также имеющую 
                настраиваемую структуру ресурсов внутри сообщества и имеющую свою безопасную систему ролей.
            </Text>
            <br/>
            <Button onClick={() => nv('/community/list')}>
                <Title ttype={TitleType.Title}>К сообществам</Title>
            </Button>
            <HelpComp />
        </>
    );
}
