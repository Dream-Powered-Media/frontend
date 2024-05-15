import {browserStorageWorker, browserStorageWorker as bsWorker} from '../../storage/browser/model';
import {ACCESS_TOKEN_H, REFRESH_TOKEN_H, TRACE_ID_H} from '../constants/headers';
import {FullResponse, Indexed, Method} from '../types/common';

export async function smartRequest(
    url: string,
    method: Method,
    body?: Indexed,
): Promise<FullResponse<any>> {
    const addBody = method === 'GET' 
        ? {} 
        : {body: JSON.stringify(body)};
    
    return fetch(url, {
        method,
        headers: {
            [TRACE_ID_H]: bsWorker.getTraceId(),
            [ACCESS_TOKEN_H]: bsWorker.getAccessToken() || '',
            [REFRESH_TOKEN_H]: bsWorker.getAccessToken() || '',
            'Content-type': 'application/json'
        },
        ...addBody,
    })
        .then(async response => {
            if (response?.ok && [200, 201].includes(response?.status)) {
                const headers: {[k: string]: string} = {};
                response.headers.forEach((val, key) => {
                    headers[key] = val;
                });
                let rbody = undefined;
                try {
                    rbody = await response.json();
                } catch (warnBody) {
                    console.warn(warnBody);
                }
                return {
                    headers: headers,
                    body: rbody,
                    error: undefined,
                };
            }
            if (response?.status === 401) {
                alert('Ваша сессия закончлась! Необходимо заново авторизоваться!');
                browserStorageWorker.clearBrowserStorage();
            }
            return {
                headers: {},
                body: undefined,
                error: {
                    status: response.status,
                    text: response.statusText,
                    message: await response.json(),
                }
            };
        })
        .catch(error => {
            console.error(`APP CATCHED: ${error}`);
            return {
                headers: {},
                body: undefined,
                error,
            };
        }) as Promise<FullResponse<any>>;
}
