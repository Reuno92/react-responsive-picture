import {SupportedFrameworks} from '../type';
import OriginalImage from "./OriginalImage";
import AlternateImage from "./AlternateImage";

/**
 * Image Response Data Model
 * @class
 * @description Allows you to manage the different image according media type and CSS framework (or custom Media Query)
 * @param { src: string, alt: string } original - path of original image and alternative information for accessibility
 * @param { src: string, type: string, [media]: MediaQueryTypes } multiple - Multiple way according framework you will pass.
 * @param { MediaQueryTypes } withFramework - string of framework used
 */
export default class ImageResponsiveModel {

    constructor(
        public original: OriginalImage,
        public multiple?: Array<AlternateImage>,
        public withFramework?: SupportedFrameworks
    ) {}
}