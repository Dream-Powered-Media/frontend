import {FullRequest} from '../types/common';
import {makeQueryParams} from '../utils/make-query-params';
import {smartRequest} from '../utils/request-layer-di';

class API {
    public async get(url: string, req: FullRequest) {
        return smartRequest(`${url}${makeQueryParams(req.query)}`, 'GET');
    }

    public async post(url: string, req: FullRequest) {
        return smartRequest(`${url}${makeQueryParams(req.query)}`, 'POST', req?.body);
    }

    public async put(url: string, req: FullRequest) {
        return smartRequest(`${url}${makeQueryParams(req.query)}`, 'PUT', req?.body);
    }

    public async patch(url: string, req: FullRequest) {
        return smartRequest(`${url}${makeQueryParams(req.query)}`, 'PATCH', req?.body);
    }

    public async delete(url: string, req: FullRequest) {
        return smartRequest(`${url}${makeQueryParams(req.query)}`, 'DELETE', req?.body);
    }
};

export const api = new API();
