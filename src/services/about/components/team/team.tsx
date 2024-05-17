import React from 'react';
import { Text } from '../../../../core/components/text/text';
import { TextType, TitleType } from '../../../../core/types/common';
import { Title } from '../../../../core/components/title/title';

export function TeamComp() {
    return (
        <div>
            <Title ttype={TitleType.H3}>
                Разработка
            </Title>
            <Text ttype={TextType.Body}>
                Разработка системы ведется в репозиториях с открытым исходным кодом:&nbsp;
                <a href='https://github.com/Dream-Powered-Media' target='blank'>
                    https://github.com/Dream-Powered-Media
                </a>
            </Text>
            <Text ttype={TextType.Body}>
                По вопросам можно обратиться к автору:&nbsp;
                <a href='https://github.com/JUSSIAR/JUSSIAR/blob/main/connection.md' target='blank'>
                    https://github.com/JUSSIAR/JUSSIAR/blob/main/connection.md
                </a>
            </Text>
        </div>
    )
}