import {UUID} from './common';

export type Community = {
    community_id: UUID,
    community_name: string,
    community_description: string,
};

export type FullCommunity = {
    community: Community,
    directories: Directory[],
    media: Media[],
    relations: Relation[],
};

export type Directory = {
    directory_id: UUID,
    directory_name: string,
    level: number,
    directory_parent?: UUID,
    related_community: UUID
};

export type Media = {
    media_link_id: UUID,
    grade_val: number,
    admin_grade_val: number,
    grade_count: number,
    admin_grade_count: number,
    media: UUID,
    directory_parent?: UUID,
    related_community: UUID
};

export type Relation = {
    rel_id: UUID,
    user: number,
    role: number,
    community_id: UUID
}

export type User = {
    id: UUID,
    name: string,
    bio?: string,
    is_author?: boolean,
    email?: string,
    communities: Relation[],
};
