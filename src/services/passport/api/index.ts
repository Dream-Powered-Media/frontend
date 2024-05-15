import {SERVER_DOMAIN} from '../../../core/constants/common';
import {api} from '../../../core/models/api';
import { FullResponse } from '../../../core/types/common';
import { browserStorageWorker } from '../../../storage/browser/model';
import {SignInRequest, SignUpRequest} from './types';

const BASE_URL = `${SERVER_DOMAIN}/api/v1/auth`;

class AuthAPI {
    public async signIn(req: SignInRequest) {
        return api.post(`${BASE_URL}/sign-in`, {body: req}) as (
            Promise<FullResponse<{}>>
        );
    }

    public async signUp(req: SignUpRequest) {
        return api.post(`${BASE_URL}/sign-up`, {body: req}) as (
            Promise<FullResponse<{}>>
        );
    }

    public async refreshToken() {
        return api.post(`${BASE_URL}/refresh-token`, {}).then(data =>
            browserStorageWorker.saveJWT(
                {
                    access_token: data.headers['x-llm-checker-access-token'],
                    refresh_token: data.headers['x-llm-checker-refresh-token'],
                }
            )
        );
    }
}

export const authAPI = new AuthAPI();
