import React, { useEffect, useState } from 'react';
import { Community, FullCommunity, Media } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { ButtonType, TextType, TitleType, UUID } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import { useNavigate, useParams } from 'react-router-dom';
import { commApi } from '../../api';
import { Button } from '../../../../core/components/button/button';
import { Text } from '../../../../core/components/text/text';

import s from './comm-view.module.scss';
import { HRLine } from '../../../../core/components/hrline/hrline';
import { MediaComp } from '../media/media';

export function CommunityViewComp() {
    const navigate = useNavigate();
    const param = useParams();
    const comm_id = param.id as UUID;

    const [comm, setComm] = useState<FullCommunity | undefined>(undefined);

    useEffect(() => {
        commApi.getCommFullInfo(comm_id).then(data => {
            if (data?.error || !data?.body) {
                alert(data?.error);
                return;
            }
            setComm(JSON.parse(localStorage.getItem('comm_data') || '') as FullCommunity || data?.body)
        })
    }, [comm_id]);

    if (!comm_id) {
        navigate('/not-found');
        return null;
    }

    if (!comm) {
        navigate('/not-found');
        return null;
    }

    const addMedia = () => {
        commApi.addMedia(comm.community.community_id, {
            param
        })
    }

    return (
        <>
            <Title ttype={TitleType.H1}>{comm?.community?.community_name}</Title>
            <br/>

            <Title ttype={TitleType.H3}>Описание сообщества</Title>
            <Panel isColored>{comm?.community?.community_description}</Panel>
            <br/>

            <Title ttype={TitleType.H3}>Структура</Title>
            <HRLine/>
                <Panel isColored>
                    <div className={s.buttList}>
                        <Title ttype={TitleType.Title}>
                            {sub.title}
                        </Title>
                        <Button btype={ButtonType.Default} onClick={addMedia}>
                            <Text ttype={TextType.Body} isbold>Добавить подкаталог +</Text>
                        </Button>
                    </div>
                    <Panel isColored level={2}>
                        <div className={s.buttList}>
                            <Title ttype={TitleType.Title}>
                                {sub.title}
                            </Title>
                            <Button btype={ButtonType.Default} onClick={addMedia}>
                                <Text ttype={TextType.Body} isbold>Добавить подкаталог +</Text>
                            </Button>
                        </div>
                        {comm?.media[0] && <MediaComp media={comm?.media[0] as Media}/>}
                    </Panel>
                    {comm?.media.slice(1, 3).map(item => <MediaComp media={item}/>)}
                </Panel>
                {comm?.media.slice(3, 4).map(item => <MediaComp media={item}/>)}
            <HRLine/>
            <br/>

            {/* <Title ttype={TitleType.H3}>Директории сообщества</Title>
            <Panel>{JSON.stringify(comm?.directories)}</Panel>
            <br/> */}

            <Title ttype={TitleType.H2}>Участники</Title>
            <Panel>
                <ul>
                    <li><Text ttype={TextType.Action}>jussiar</Text></li>
                    <li><Text ttype={TextType.Action}>polina</Text></li>
                </ul>
            </Panel>
            <br/>

            <div className={s.buttList}>
                <Button btype={ButtonType.Gradient} onClick={() => navigate(`/community/${comm.community.community_id}/top`)}>
                    <Text ttype={TextType.Body} isbold>Отктрыть топ сообщества!</Text>
                </Button>
                <Button btype={ButtonType.Default} onClick={addMedia}>
                    <Text ttype={TextType.Body} isbold>Добавить медиа +</Text>
                </Button>
                <Button btype={ButtonType.Default} onClick={addMedia}>
                    <Text ttype={TextType.Body} isbold>Добавить каталог +</Text>
                </Button>
            </div>
        </>
    );
}
