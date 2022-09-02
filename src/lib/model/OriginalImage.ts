/**
 *
 * @param { string } src - Image source
 * @param { string } alt - Alternative information for accessibility.
 */
export default class OriginalImage {
    constructor(
        public src: string,
        public alt: string,
    ) {}
}