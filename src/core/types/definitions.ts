import {Status, UUID} from './common';

export type QuestionAnswer = {
    number: number,
    text: string,
    is_correct: boolean,
};

export type TestQuestion = {
    number: number,
    text: string,
    answers: QuestionAnswer[],
};

export type RawTest = {
    name: string,
    description?: string,
    questions: TestQuestion[],
};

export type Test = RawTest & {
    identifier: UUID,
};

export type CheckStatus = {
    llm_slug: string,
    status: Status,
};

export type CheckResultLLMAnswer = {
    question_number: number,
    selected_answer_number: number,
};

export type CheckResult = {
    llm_slug: string,
    answers: CheckResultLLMAnswer[],
};
