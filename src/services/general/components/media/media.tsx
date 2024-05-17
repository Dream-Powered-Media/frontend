import React, { useEffect, useRef, useState } from 'react';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { Button} from '../../../../core/components/button/button';
import { useNavigate, useParams } from 'react-router-dom';
import { commApi } from '../../api';
import { Text } from '../../../../core/components/text/text';

import { HRLine } from '../../../../core/components/hrline/hrline';
import { Media } from '../../../../core/types/definitions';

import s from './media.module.scss';


export function MediaComp({media}: {media: Media}) {
    const ref = useRef(null);

    const [gr, stgr] = useState(9);

    const gradeMedia = () => {
        if (!ref?.current) {
            return;
        }
        //@ts-ignore
        commApi.commGradeMedia(media.media_link_id, ref.current?.value || gr);
        window.location.reload();
    }

    //@ts-ignore
    const xxx = ref?.current?.value;

    return (
        <Panel>
            <Title ttype={TitleType.H2}>{media.media_link_id}</Title>
            <HRLine/>
            <a href={media.media}>{media.media}</a>
            <Panel isColored>
                <ul>
                    <li>Оценка пользователей:&nbsp;{media.grade_val}</li>
                    <li>Оценка администрации:&nbsp;{media.admin_grade_val}</li>
                    <li>Сообщество:&nbsp;{media.related_community}</li>
                </ul>
            </Panel>
            <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                defaultValue={9}
                ref={ref}
                value={gr}
                onChange={event => stgr(Number(event.target.value))}
            ></input>
            <Button btype={ButtonType.Gradient} onClick={gradeMedia}>
                <Text ttype={TextType.Body} isbold>{`Оценить в ${gr}`} </Text>
            </Button>
        </Panel>
    );
}
