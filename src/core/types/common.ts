export enum ButtonType {
    Default = 'default',
    Gradient = 'gradient',
    Transparent = 'transparent',
};

export enum TitleType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    Title = 'title',
    SubTitle = 'subtitle',
};

export enum TextType {
    Control = 'control',
    Caption = 'caption',
    Body = 'body',
    Action = 'action',
};

export type UUID = string;

export type CommId = {
    comm_id: UUID,
};

export type Method =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE';

export type Indexed = {
    [key: string]: any,
};

export type FullRequest = {
    body?: Indexed,
    query?: Indexed,
};

export type ApiError = {
    error_code: number,
    error_message: string,
};

export type FullResponse<T> = {
    headers: Indexed,
    body?: T,
    error?: ApiError,
};
