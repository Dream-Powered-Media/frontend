import React from 'react';

import { Text } from '../../../../core/components/text/text';
import { TextType } from '../../../../core/types/common';
import { useLocalStorage } from '../../../../core/hooks/use-local-storage';

import s from './auth-input.module.scss';

interface Props {
    name: string,
    placeholder?: string,
    inputKey: string,
    isArea?: boolean,
    itype?: string,
}

export function AuthInput({name, inputKey, placeholder, isArea, itype}: Props) {
    const [val, setVal] = useLocalStorage(inputKey, '');

    const handle = (event: any) => {
        setVal(event.target.value);
    }

    return (
        <>
            <Text ttype={TextType.Body}>{name}</Text>
            {isArea
                ? <textarea 
                    placeholder={placeholder}
                    value={val}
                    onChange={handle}
                    className={s.input}
                />
                : <input
                    placeholder={placeholder}
                    value={val}
                    onChange={handle}
                    className={s.input}
                    type={itype}
                />
            }
        </>
    );
}
