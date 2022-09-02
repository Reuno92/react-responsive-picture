import {MediaQueryTypes} from '../type';

export type AlternateType = 'jpeg' | 'gif' | 'png' | 'svg+xml' | 'webp';

/**
 * Alternate Image
 * @param { string } src - Source of alternate image.
 * @param { AlternateType } type - Second part of image type MIME.
 * @param { MediaQueryTypes } media - Name of css framework shortcut.
 */
export default class AlternateImage {

    /**
     * @param { string } src - Source of alternate image.
     * @param { AlternateType } type - Second part of image type MIME.
     * @param { MediaQueryTypes } media - Name of css framework shortcut.
     */
    constructor(
        public src: string,
        public type: AlternateType,
        public media?: MediaQueryTypes
    ) {}
}