import {TailwindMediaQuery} from "../../../type/framework";

/**
 * Default Breakpoint Foundation Version 3
 * @const
 * @typedef { [ key : TailwindMediaQuery ] : string }
 * @default
 * @description Default definition of media query with tailwind framework. For key is @see {@link TailwindMediaQuery}
 */
const DEFAULT_BREAKPOINT_TAILWIND_v3: { [key in TailwindMediaQuery]: string } = {
    sm: 'min-width: 640px',
    md: 'min-width: 768px',
    lg: 'min-width: 1024px',
    xl: 'min-width: 1280px',
    '2xl': 'min-width: 1536px',
};

export default DEFAULT_BREAKPOINT_TAILWIND_v3;