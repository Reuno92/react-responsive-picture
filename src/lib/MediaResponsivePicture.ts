import {MediaQueryTypes} from "./type";
import Serialize from "./utils/Serialize";
import {FrameworkGuard} from "./guard/framework.guard";

export default class MediaResponsivePicture {

    private serialization: Serialize = new Serialize();
    private guard: FrameworkGuard = new FrameworkGuard();

    public initGuard(media: MediaQueryTypes | undefined, framework: string = 'custom'): string | undefined {
        if (!this.guard?.isSupported(framework)) {
            return undefined;
        } else {
            this.execute(media, framework);
        }
    }

    private execute(media: MediaQueryTypes | undefined, framework: string): string | undefined {
        if (!media) {
            return undefined;
        }

        if (this.guard.isMedia(media) || framework === 'custom' && this.guard.isMedia(media)) {
            return this.serialization.standardMediaQuery(media);
        }

        if (framework === 'bootstrap' && this.guard.isBootstrap(media)) {
            return this.serialization.bootstrapMediaQuery(media);
        }

        if (framework === 'foundation' && this.guard.isFoundation(media)) {
            return this.serialization.foundationMediaQuery(media);
        }

        if (framework === 'materialize' && this.guard.isMaterialize(media)) {
            return this.serialization.materializeMediaQuery(media);
        }

        if (framework === 'skeleton' && this.guard.isSkeleton(media)) {
            return this.serialization.skeletonMediaQuery(media);
        }

        if(framework === 'tailwind' && this.guard.isTailwind(media)) {
            return this.serialization.tailwindMediaQuery(media);
        }

        return undefined;
    }
}