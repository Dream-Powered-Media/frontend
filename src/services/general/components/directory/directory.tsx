import React from 'react';
// import { QuestionAnswer} from '../../../../core/types/definitions';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';
import { TextType } from '../../../../core/types/common';

import s from './test-question-answer.module.scss';
 
export function QuestionAnswerComp({answer}: {answer: any}) {
    const B = String.fromCharCode(answer.number + 64)
    return (
        <div className={s.line} data-corr={answer.is_correct}>
            <div className={s.bullet}>{B}</div>
            <Text ttype={TextType.Body} isbold>{answer.text}</Text>
        </div>
    );         
}