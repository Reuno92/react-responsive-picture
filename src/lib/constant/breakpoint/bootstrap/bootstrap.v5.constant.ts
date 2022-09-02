import {BootstrapMediaQuery} from "../../../type/framework";

/**
 * Default Breakpoint Bootstrap Version 5
 * @const
 * @typedef { [ key : BootstrapMediaQuery ] : string }
 * @default
 * @description Default definition of media query with bootstrap framework. For key is @see {@link BootstrapMediaQuery}, for subtract with .02px can see @see {@link https://getbootstrap.com/docs/5.0/layout/breakpoints/#max-width}
 */
const DEFAULT_BREAKPOINT_BOOTSTRAP_v5: { [key in BootstrapMediaQuery]: string } = {
    xs: 'max-width: 575.02px',
    sm: 'min-width: 576px && max-width: 767.98px',
    md: 'min-width: 768px && max-width: 991.98px',
    lg: 'min-width: 992px && max-width: 1199.98px',
    xl: 'min-width: 1200px && max-width: 1399.98px',
    xxl: 'min-width: 1400px',
};

export default DEFAULT_BREAKPOINT_BOOTSTRAP_v5;