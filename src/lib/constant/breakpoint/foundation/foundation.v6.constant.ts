import {FoundationMediaQuery} from "../../../type/framework";

/**
 * Default Breakpoint Foundation Version 6
 * @const
 * @typedef { [ key : FoundationMediaQuery ] : string }
 * @default
 * @description Default definition of media query with foundation framework. For key is @see {@link FoundationMediaQuery}
 */
const DEFAULT_BREAKPOINT_FOUNDATION_V6: { [key in FoundationMediaQuery ]: string } = {
    small: 'max-width: 639px',
    medium: 'min-width: 640px && max-width: 1023px',
    large: 'min-width: 1024px && max-width: 1199px',
    xlarge: 'min-width: 1200px && max-width: 1439px',
    xxlarge: 'min-width: 1440px',
}

export default DEFAULT_BREAKPOINT_FOUNDATION_V6;