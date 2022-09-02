import { FC } from 'react'
import ImageResponsiveModel from "./model/ImageResponsiveModel";
import {MediaQueryTypes} from "./type";
import MediaResponsivePicture from "./MediaResponsivePicture";
import { SupportedFrameworks } from '../lib/type';

const ResponsivePicture: FC<ImageResponsiveModel> = (props: ImageResponsiveModel): JSX.Element => {
    const { multiple, original, withFramework } = props;

    const setMediaResponsivePicture = (media: MediaQueryTypes | undefined, framework?: SupportedFrameworks): string | undefined => {
        return new MediaResponsivePicture().initGuard(media, framework);
    }

    return (
        <>
            <picture>
                {
                    multiple?.map((source: { src: string, type: string, media?: MediaQueryTypes }): JSX.Element => (
                            <source
                                srcSet={source.src}
                                type={`image/${source?.type}`}
                                media={ setMediaResponsivePicture(source?.media, withFramework ) } />
                        )
                    )
                }
                <img src={original.src} alt={original.alt} />
            </picture>
        </>
    )
}

export default ResponsivePicture;