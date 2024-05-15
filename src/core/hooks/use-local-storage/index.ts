import {useState, useEffect} from 'react';

import {Key, Initial, Value} from './types';

function getLocalStorageValue(key: Key, initial: Initial) {
    const value = window.localStorage.getItem(key);
    if (value) {
        return value;
    }

    return initial instanceof Function
        ? initial()
        : initial;
}

function setLocalStorageValue(key: Key, value: Value) {
    window.localStorage.setItem(key, value);
}

export function useLocalStorage(key: Key, initial: Initial) {
    const [value, setValue] = useState(
        () => getLocalStorageValue(key, initial)
    );

    useEffect(() => {
        setLocalStorageValue(key, value);
    }, [value]);

    return [value, setValue];
}
