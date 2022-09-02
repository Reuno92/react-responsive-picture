import { BootstrapMediaQuery, FoundationMediaQuery, MaterializeMediaQuery, SkeletonMediaQuery, TailwindMediaQuery} from "../type/framework";
import DEFAULT_BREAKPOINT_BOOTSTRAP_v5 from "../constant/breakpoint/bootstrap/bootstrap.v5.constant";
import DEFAULT_BREAKPOINT_FOUNDATION_V6 from "../constant/breakpoint/foundation/foundation.v6.constant";
import DEFAULT_BREAKPOINT_MATERIALIZE_v1 from "../constant/breakpoint/Materialize.v1.constant";
import DEFAULT_BREAKPOINT_SKELETON from "../constant/breakpoint/skeleton/skeleton.v2.constant";
import DEFAULT_BREAKPOINT_TAILWIND_v3 from "../constant/breakpoint/tailwind/tailwind.v3.constant";
import { StandardMediaQuery } from "../type/";

/**
 * Serialize
 * @class
 * @description Class for serialize Media Query according framework or Custom Media Query
 */
export default class Serialize {

    /**
     * Bootstrap Media Query
     * @param { BootstrapMediaQuery } media - @see {@link BootstrapMediaQuery}
     * @return string
     */
    public bootstrapMediaQuery = (media: BootstrapMediaQuery): string => {
        return DEFAULT_BREAKPOINT_BOOTSTRAP_v5[media];
    }

    /**
     * Foundation Media Query
     * @param { FoundationMediaQuery } media - @see {@link FoundationMediaQuery}
     * @return string
     */
    public foundationMediaQuery = (media: FoundationMediaQuery): string => {
        return DEFAULT_BREAKPOINT_FOUNDATION_V6[media];
    }

    /**
     * Materialize Media Query
     * @param { MaterializeMediaQuery } media - @see {@link MaterializeMediaQuery}
     * @return string
     */
    public materializeMediaQuery = (media: MaterializeMediaQuery): string => {
        return DEFAULT_BREAKPOINT_MATERIALIZE_v1[media];
    }

    /**
     * Skeleton Media Query
     * @param { SkeletonMediaQuery } media - @see {@link SkeletonMediaQuery}
     * @return string
     */
    public skeletonMediaQuery = (media: SkeletonMediaQuery): string => {
        return DEFAULT_BREAKPOINT_SKELETON[media];
    }

    /**
     * Tailwind Media Query
     * @param { TailwindMediaQuery } media - @see {@link TailwindMediaQuery}
     * @return string
     */
    public tailwindMediaQuery = (media: TailwindMediaQuery): string => {
        return DEFAULT_BREAKPOINT_TAILWIND_v3[media];
    }

    /**
     * Standard Media Query
     * @param { StandardMediaQuery } media - Default media query with min and/or max width only. @see {@link StandardMediaQuery}
     * @return string
     */
    public standardMediaQuery = (media: StandardMediaQuery): string => {
        return this.serializeMediaQuery(media);
    }

    /**
     * Serialize Media query for standard or custom media query
     * @param { StandardMediaQuery: { min?: number, max?: number } } media - Default properties for minimum and/or maximum width media queries.
     * @return string
     */
    private serializeMediaQuery = (media: StandardMediaQuery): string => {
        return media?.min && media?.max ? `min-width: ${media.min}px && max-width: ${media.max}px` : media?.min ? `min-width: ${media.min}px` : media?.max ? `max-width: ${media.max}px` : '';
    }
}