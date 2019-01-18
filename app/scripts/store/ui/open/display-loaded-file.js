export const type = 'ui/open/display-loaded-file';

export default function(file) {
    return { type, file };
}

export function reducer(state, action) {
    return Object.assign({}, state, { file: action.file });
}
