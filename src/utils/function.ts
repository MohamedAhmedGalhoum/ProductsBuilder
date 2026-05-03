/**
 * Slices a string to a maximum length and appends an ellipsis if it exceeds the limit.
 * @param text The input string to slice.
 * @param maxLength The maximum length of the string.
 * @returns The sliced string with an ellipsis if necessary.
 */
export function txtSlicer(text : string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}