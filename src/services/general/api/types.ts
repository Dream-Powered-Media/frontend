import {TestId, UUID} from '../../../core/types/common';
import {CheckResult, CheckStatus, RawTest, Test} from '../../../core/types/definitions';

export type GetMyTestsRequest = {
    query: {
        'page-number'?: number,
        'page-size'?: number,
    },
};

export type GetTestByIdRequest = {
    path: TestId,
};

export type CreateTestRequest = {
    body: RawTest,
};

export type DeleteTestByIdRequest = {
    path: TestId,
};

export type LlmLaunchTestByIdRequest = {
    path: TestId,
    body: {
        llm_slug: string,
    },
};

export type LlmGetTestStatusByIdRequest = {
    path: TestId,
};

export type LlmGetTestResultByIdRequest = {
    path: TestId,
};

export type GetMyTestsResponse = Test[];

export type GetTestByIdResponse = Test;

export type CreateTestResponse = Test;

export type DeleteTestByIdResponse = null;

export type LlmLaunchTestByIdResponse = {
    launch_identifier: UUID,
};

export type LlmGetTestStatusByIdResponse = {
    statuses: CheckStatus[]
};

export type LlmGetTestResultByIdResponse = {
    results: CheckResult[];
}
