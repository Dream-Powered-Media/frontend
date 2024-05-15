import {SERVER_DOMAIN} from '../../../core/constants/common';
import {api} from '../../../core/models/api';
import { FullResponse } from '../../../core/types/common';
import * as T from './types';

const URL_ALL = `${SERVER_DOMAIN}/api/v1/tests/my`;
const BASE_URL = `${SERVER_DOMAIN}/api/v1/test`;


class TestsAPI {
    public getMyTests(req: T.GetMyTestsRequest) {
        return api.get(URL_ALL, {query: req.query}) as (
            Promise<FullResponse<T.GetMyTestsResponse>>
        );
    }

    public getTestById(req: T.GetTestByIdRequest) {
        return api.get(`${BASE_URL}/${req.path.test_id}/get`, {}) as (
            Promise<FullResponse<T.GetTestByIdResponse>>
        );
    }

    public createTest(req: T.CreateTestRequest) {
        return api.put(`${BASE_URL}/create`, {body: req.body}) as (
            Promise<FullResponse<T.CreateTestResponse>>
        );
    }

    public deleteTestById(req: T.DeleteTestByIdRequest) {
        return api.delete(`${BASE_URL}/${req.path.test_id}/delete`, {}) as (
            Promise<FullResponse<T.DeleteTestByIdResponse>>
        );
    }

    public llmLaunchTestById(req: T.LlmLaunchTestByIdRequest) {
        return api.post(`${BASE_URL}/${req.path.test_id}/llm/launch`, {body: req.body}) as (
            Promise<FullResponse<T.LlmLaunchTestByIdResponse>>
        );
    }

    public llmGetTestStatusById(req: T.LlmGetTestStatusByIdRequest) {
        return api.get(`${BASE_URL}/${req.path.test_id}/llm/status`, {}) as (
            Promise<FullResponse<T.LlmGetTestStatusByIdResponse>>
        );
    }

    public llmGetTestResultById(req: T.LlmGetTestResultByIdRequest) {
        return api.get(`${BASE_URL}/${req.path.test_id}/llm/result`, {}) as (
            Promise<FullResponse<T.LlmGetTestResultByIdResponse>>
        );
    }
}

export const testsApi = new TestsAPI();
