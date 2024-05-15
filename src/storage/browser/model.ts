import {ACCESS_KEY, REFRESH_KEY, TRACE_KEY, USER_KEY} from './constants';
import {JWT, Token, User} from './types';


class BrowserStorageWorker {
    public saveUser(user: User) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public saveAccessToken(token: Token) {
        localStorage.setItem(ACCESS_KEY, token);
    }

    public saveRefreshToken(token: Token) {
        localStorage.setItem(REFRESH_KEY, token);
    }

    public saveTraceId(traceId: string) {
        localStorage.setItem(TRACE_KEY, traceId);
    }

    public saveJWT(jwt: JWT) {
        this.saveAccessToken(jwt.access_token);
        this.saveRefreshToken(jwt.refresh_token);
    }

    public getUser(): User | undefined {
        const user = localStorage.getItem(USER_KEY);
        if (!user) {
            return undefined;
        }
        return JSON.parse(user);
    }

    public getAccessToken(): Token | undefined {
        return localStorage.getItem(ACCESS_KEY) || undefined;
    }

    public getRefreshToken(): Token | undefined {
        return localStorage.getItem(REFRESH_KEY) || undefined;
    }

    public getTraceId(): string {
        return localStorage.getItem(TRACE_KEY) || '';
    }

    public clearBrowserStorage() {
        localStorage.clear();
    }
};

export const browserStorageWorker = new BrowserStorageWorker();
