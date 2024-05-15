import {browserStorageWorker as bsWorker} from '../../../storage/browser/model';
import { authAPI } from '../api';

export async function prepareAuthState() {
    const accessToken = bsWorker.getAccessToken();
    if (accessToken) {
        const refResponse = await authAPI.refreshToken();
        // if (refResponse)
    }
}