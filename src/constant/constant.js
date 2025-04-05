/*REGEX*/
export const regexNonAlphanumericString = /^[^\w\s]+$/; // Matches strings made up of only non-alphanumeric characters
export const regexRemovePunctuationAndUnderscore = /[^\w\s]|_/g; // Matches any non-alphanumeric character or underscore

export const linebreak = /[^\n]*\n[^\n][a-z]*/gi;
export const whiteSpace = /\s+/g;

/*Limit */
export const Facebook = 63206;
export const Instagram = 2200;
