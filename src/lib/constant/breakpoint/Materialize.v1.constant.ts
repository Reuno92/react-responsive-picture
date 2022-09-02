import { MaterializeMediaQuery } from '../../type/framework';

/**
 * Default Breakpoint Materialize Version 1
 * @const
 * @typedef { [ key : MaterializeMediaQuery ] : string }
 * @default
 * @description Default definition of media query with tailwind framework. For key is @see {@link MaterializeMediaQuery}
 */
const DEFAULT_BREAKPOINT_MATERIALIZE_v1: { [key in MaterializeMediaQuery]: string } = {
    s: 'max-width: 600px',
    m: 'min-width: 601px && max-width: 991px',
    l: 'min-width: 992px && max-width: 1199px',
    xl: 'min-width: 1200px',
};

export default DEFAULT_BREAKPOINT_MATERIALIZE_v1;