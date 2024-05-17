import {UUID} from '../../../core/types/common';
import {Community, FullCommunity, Media} from '../../../core/types/definitions';

export type CommResponse = Community[];

export type FullCommResponse = FullCommunity;

export type MediaListResp = Media[];

export type TopResp = {top: Media[]};
