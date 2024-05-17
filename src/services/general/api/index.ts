import {SERVER_DOMAIN} from '../../../core/constants/common';
import {api} from '../../../core/models/api';
import { FullResponse, UUID } from '../../../core/types/common';
import * as T from './types';

const BASE_URL_COMM = `${SERVER_DOMAIN}/api/v1/community`;
const BASE_URL_GRADES = `${SERVER_DOMAIN}/api/v1/grade`;
const BASE_URL_MEDIA = `${SERVER_DOMAIN}/api/v1/media`;
const BASE_URL_DIR = `${SERVER_DOMAIN}/api/v1/directory`;


class CommAPI {
    public getComms() {
        return api.get(BASE_URL_COMM, {query: undefined}) as (
            Promise<FullResponse<T.CommResponse>>
        );
    }

    public getCommFullInfo(comm_id: UUID) {
        return api.get(`${BASE_URL_COMM}/${comm_id}/full_info`, {query: undefined}) as (
            Promise<FullResponse<T.FullCommResponse>>
        );
    }

    public getCommTop(comm_id: UUID) {
        return api.get(`${BASE_URL_COMM}/${comm_id}/top`, {query: undefined}) as (
            Promise<FullResponse<T.TopResp>>
        );
    }

    public getMediaList(comm_id: UUID) {
        return api.get(`${BASE_URL_MEDIA}/`, {query: undefined}) as (
            Promise<FullResponse<T.MediaListResp>>
        );
    }

    public addMedia(comm_id: UUID, req: any) {
        return api.post(`${BASE_URL_MEDIA}/add`, {query: undefined}) as (
            Promise<FullResponse<T.MediaListResp>>
        );
    }

    public commGradeMedia(media_id: UUID, grade: number, user: number) {
        return api.post(`${BASE_URL_GRADES}/grade_media/`, {body: {
            user: 1,
            role: 2,
            grade_value: grade,
            media_link: media_id,
        }}) as (
            Promise<FullResponse<T.FullCommResponse>>
        );
    }

    public follow(comm_id: UUID) {
        return api.post(`${BASE_URL_GRADES}/grade_media`, {query: undefined}) as (
            Promise<FullResponse<T.FullCommResponse>>
        );
    }

    public addDir(comm_id: UUID, req: any) {
        return api.put(`${BASE_URL_DIR}/add`, {query: undefined}) as (
            Promise<FullResponse<any>>
        );
    }

    public changeDir(comm_id: UUID, req: any) {
        return api.post(`${BASE_URL_DIR}/change`, {query: undefined}) as (
            Promise<FullResponse<any>>
        );
    }
}

export const commApi = new CommAPI();
