import {PROJECT_NAME} from '../../constants/common';
import {Title} from './types';

const DEFAULT = PROJECT_NAME;

export function useWebsiteTitle(title?: Title) {
    if (!title) {
        document.title = DEFAULT;
        return;
    }

    if (typeof title === 'number') {
        document.title = title.toString();
    } else {
        document.title = title;
    }
}
