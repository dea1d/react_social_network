

export const requiredField = value => {
    if (value) {
        return undefined;
    } else return 'error';

}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `max length  ${maxLength} symbols`;
    } else return undefined;
} 