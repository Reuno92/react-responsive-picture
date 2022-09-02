import {BootstrapMediaQuery, FoundationMediaQuery, MaterializeMediaQuery, TailwindMediaQuery, SkeletonMediaQuery} from "./framework/";
import StandardMediaQueryType from './StandardMediaQuery.type';

/**
 * @typedef  { import("./StandardMediaQuery.type") } StandardMediaQueryType
 * @typedef  { import("./type/BootstrapMediaQuery.type") } BootstrapMediaQueryType
 * @typedef  { import("./type/FoundationMediaQuery.type") } FoundationMediaQueryType
 * @typedef  { import("./type/MaterializeMediaQuery.type") } MaterializeMediaQueryType
 * @typedef  { import("./type/MaterializeMediaQuery.type") } MaterializeMediaQueryType
 * @typedef  { import("./type/SkeletonMediaQuery.type") } SkeletonMediaQueryType
 * @typedef  { import("./type/TailwindMediaQuery.type") } TailwindQueryType
 */
type MediaQueryTypes = StandardMediaQueryType | BootstrapMediaQuery | FoundationMediaQuery | MaterializeMediaQuery | SkeletonMediaQuery | TailwindMediaQuery;

export default MediaQueryTypes;