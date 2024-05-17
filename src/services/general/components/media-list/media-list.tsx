import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FullCommunity, Media } from '../../../../core/types/definitions';
import { MediaComp } from '../media/media';
import { commApi } from '../../api';
import { UUID } from '../../../../core/types/common';

export function MediaList({isTop}: {isTop: boolean}) {
    const [state, setState] = useState<Media[]>([]);

    const params = useParams();

    useEffect(() => {
        if (isTop) {
            commApi.getCommTop(params.id as UUID).then(
                data => {
                    const prom = localStorage.getItem('comm_data');
                    const meds = (JSON.parse(prom || '') as FullCommunity);
                    const red = meds.media || data?.body?.top as Media[];

                    red.sort((a, b) => b.grade_val - a.grade_val);

                    setState(red);
                }
            );
        } else {

        }
    }, []);

    return (
        <>
            {state.map(item => <MediaComp media={item}/>)}
        </>
    );

}