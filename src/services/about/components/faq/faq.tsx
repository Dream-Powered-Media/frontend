import React from 'react';

import { Title } from '../../../../core/components/title/title';
import { TextType, TitleType } from '../../../../core/types/common';
import { Text } from '../../../../core/components/text/text';

export function FAQ() {
    return (
        <div>
            <ul>
                <li>
                    <Title ttype={TitleType.Title} isbold>
                        Как зарегистрироваться в системе?
                    </Title>
                    <Text ttype={TextType.Body}>
                        Необходимо нажать кнопку войти в шапке профиля и создать аккаунт.
                        Далее можно будет настроить свой профиль также перейдя по ссылке в шапке, 
                        которая появится после авторизации.
                    </Text>
                </li>
                <li>
                    <Title ttype={TitleType.Title} isbold>
                        Как создать сообщество?
                    </Title>
                    <Text ttype={TextType.Body}>
                        Необходимо авторизоваться в системе, перейти в профиль и там 
                        нажать кнопку создать сообщество.
                    </Text>
                </li>
                <li>
                    <Title ttype={TitleType.Title} isbold>
                        Как перейти к топам?
                    </Title>
                    <Text ttype={TextType.Body}>
                        Необходимо перейти по пункту из шапки.
                    </Text>
                </li>
                <li>
                    <Title ttype={TitleType.Title} isbold>
                        Что делать, чтобы стать автором?
                    </Title>
                    <Text ttype={TextType.Body}>
                        Необходимо отправить запрос на становление автором через поддержку!
                    </Text>
                </li>
                <li>
                    <Title ttype={TitleType.Title} isbold>
                        Что делать, если не нашелся ответ на вопрос?
                    </Title>
                    <Text ttype={TextType.Body}>
                        Напишите нам в поддержку:&nbsp;
                        <a href="https://forms.gle/jCtCTTQP4tjJcUBP8" target='blank'>
                            https://forms.gle/jCtCTTQP4tjJcUBP8
                        </a>
                    </Text>
                </li>
            </ul>
        </div>
    );
};