export type Token = string;

export type JWT = {
    access_token: Token,
    refresh_token: Token,
};

export type User = {
    login: string;
    password: string;
};
