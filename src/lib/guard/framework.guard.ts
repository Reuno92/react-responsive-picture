import {MediaQueryTypes, StandardMediaQuery, SupportedFrameworks} from "../type";
import {
    BootstrapMediaQuery,
    FoundationMediaQuery,
    MaterializeMediaQuery,
    SkeletonMediaQuery,
    TailwindMediaQuery
} from "../type/framework";
import DEFAULT_BREAKPOINT_BOOTSTRAP_v5 from "../constant/breakpoint/bootstrap/bootstrap.v5.constant";
import DEFAULT_BREAKPOINT_FOUNDATION_V6 from "../constant/breakpoint/foundation/foundation.v6.constant";
import DEFAULT_BREAKPOINT_MATERIALIZE_v1 from "../constant/breakpoint/Materialize.v1.constant";
import DEFAULT_BREAKPOINT_SKELETON from "../constant/breakpoint/skeleton/skeleton.v2.constant";
import DEFAULT_BREAKPOINT_TAILWIND_v3 from "../constant/breakpoint/tailwind/tailwind.v3.constant";

/**
 * Framework Guard
 * @class
 * @description Test of Media Query according framework or not.
 */
export class FrameworkGuard {

    /**
     * @param { MediaQueryTypes } media
     * @param { [key: string]: string } defaultProps
     * @return boolean
     * @private
     */
    private executeGuard(media: MediaQueryTypes | undefined, defaultProps: { [key: string]: string } ): boolean {
        if (!media) {
            return false;
        }
        const SIZES: Array<string> = Object.keys(defaultProps);
        return SIZES?.some( (size: string) => size === media);
    };

    /**
     * If your framework declaration is supported
     * @param { string } framework
     * @return boolean
     */
    public isSupported = (framework: string): framework is SupportedFrameworks => {
        return ['bootstrap', 'foundation', 'materialize', 'skeleton', 'tailwind', 'custom'].includes(framework);
    }

    /**
     * Condition for validate if custom media queries
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isMedia = (media: MediaQueryTypes): media is StandardMediaQuery => {
        return (typeof media === 'object' && 'min' in media) || (typeof media === 'object' && 'max' in media);
    };

    /**
     * Condition for validate if bootstrap media queries shortcut
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isBootstrap = (media: MediaQueryTypes | undefined): media is BootstrapMediaQuery => {
        return this.executeGuard(media, DEFAULT_BREAKPOINT_BOOTSTRAP_v5);
    };

    /**
     * Condition for validate if foundation media queries shortcut
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isFoundation = (media: MediaQueryTypes | undefined): media is FoundationMediaQuery => {
        return this.executeGuard(media, DEFAULT_BREAKPOINT_FOUNDATION_V6);
    };

    /**
     * Condition for validate if materialize media queries shortcut
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isMaterialize = (media: MediaQueryTypes | undefined): media is MaterializeMediaQuery => {
        return this.executeGuard(media, DEFAULT_BREAKPOINT_MATERIALIZE_v1);
    };

    /**
     * Condition for validate if skeleton media queries shortcut
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isSkeleton = (media: MediaQueryTypes | undefined): media is SkeletonMediaQuery => {
        return this.executeGuard(media, DEFAULT_BREAKPOINT_SKELETON);
    };

    /**
     * Condition for validate if tailwind media queries shortcut
     * @param { MediaQueryTypes } media
     * @return boolean
     */
    public isTailwind = (media: MediaQueryTypes | undefined): media is TailwindMediaQuery => {
        return this.executeGuard(media, DEFAULT_BREAKPOINT_TAILWIND_v3);
    };
}