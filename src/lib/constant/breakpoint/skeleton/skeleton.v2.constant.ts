import { SkeletonMediaQuery } from '../../../type/framework';

/**
 * Default Breakpoint Skeleton
 * @const
 * @typedef { [ key : SkeletonMediaQuery ] : string }
 * @default
 * @description Default definition of media query with skeleton framework. For key is @see {@link SkeletonMediaQuery}
 */
const DEFAULT_BREAKPOINT_SKELETON: { [key in SkeletonMediaQuery]: string } = {
    mobile: 'min-width: 400px',
    phablet: 'min-width: 550px',
    tablet: 'min-width: 750px',
    desktop: 'min-width: 1000px',
    desktopHD: 'min-width: 1200px',
};

export default DEFAULT_BREAKPOINT_SKELETON;