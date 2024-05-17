import React, { useEffect, useState } from 'react';

import { Community, } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { commApi } from '../../api';
import { Link, } from 'react-router-dom';

import s from './comm-list.module.scss';

import classnames from 'classnames/bind';

const cn = classnames.bind(s);

type CommTableProps = {
    list: Community[]
};

function TableHeader() {
    return (
        <div className={s.commListItem}>
            <div className={cn('flex1', 'flex1-top')}>
                <Title ttype={TitleType.Title}>
                    Идентификатор-ссылка
                    
                </Title>
            </div>
            <div className={cn('flex2', 'flex2-top')}>
                <Title ttype={TitleType.Title}>
                    Название сообщества
                </Title>
            </div>
            <div className={cn('flex3', 'flex3-top')}>
                <Title ttype={TitleType.Title}>
                    Описание сообщества
                </Title>
            </div>
        </div>
    );
}

function CommTable({list}: CommTableProps) {
    return (
        <div className={s.commList}>
            <TableHeader />
            {list.map(comm => (
                <div className={s.commListItem}>
                    <div className={s.flex1}>
                        <Link to={`/community/${comm.community_id}`}>
                            {comm.community_id}
                        </Link>
                    </div>
                    <div className={s.flex2}>
                        <b>{comm.community_name}</b>
                    </div>
                    <div className={s.flex3}>
                        <p className={s.overtext}>{comm.community_description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export function CommunityListComp() {
    const [commList, stl] = useState<Community[]>([]);

    useEffect(() => {
        commApi.getComms()
            .then(data => stl(data?.body || []));
    }, []);

    return (
        <>
            {commList?.length > 0
                ? <CommTable list={commList} />
                : <Title ttype={TitleType.H2}>Что-то пошло не так и сообщества не загрузились!</Title>
            }
        </>
    )
};