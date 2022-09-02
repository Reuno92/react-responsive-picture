# React Responsive Picture

> Original author: [Renaud Racinet](http://github.com/Reuno92)<br /> 
> Original source Language: Typescript<br />
> Destination Language: Javascript with definition<br />
> Original platform: NodeJs<br />
> Destination platform: ReactJS
 
## Documentation: 
* French translation (Coming soon !)
* Spanish translation (Coming soon !)
* Deutsch translation (Coming soon !)
* Chinese translation (Coming soon, one day !)
* Japanese translation (Coming soon, one day !)

## Installation
NPM

```bash
npm install react-responsive-picture
```
or
```bash
npm i react-responsive-picture
```

YARN
```bash
yarn add react-responsive_picture
```

## How to use

Import module into your Functional Component `FC`  or your Next Page `NextPage` 
```tsx
import ResponsivePicture from 'react-responsive-picture';
```

For use it, you need original image into `original` property and `multiple` for insert multiple image with different size when you use media queries. If you use a CSS Framework like **Twitter Boostrap** or another one we can use the property `withFramework` and use default shortcut.

```tsx
import OriginalImage from "./OriginalImage";
import AlternateImage from "./AlternateImage";

/* Import of Images... React... */
import OriginalImage from './public/img/original.jpg';
import AlternateXSImage from './public/img/alternate-xs.jpg'
import AlternateSMImage from './public/img/alternate-sm.jpg'
import AlternateMDImage from './public/img/alternate-md.jpg'
import AlternateLGImage from './public/img/alternate-lg.jpg'
import AlternateXLImage from './public/img/alternate-xl.jpg'
import AlternateXXLImage from './public/img/alternate-xxl.jpg'

const MyExplosedComponentOnTheGround: FC = () => {

    const OriginalImage: OriginalImage = {src: "<PATH>/<TO>/<FILE>", alt: "My original image"};
    const AlternateImages: AlternateImage = [{
	    src: {AlternateXSImage}, type: 'jpeg', media: 'xs'
    }, {
	    src: {AlternateSMImage}, type: 'jpeg', media: 'sm',
    }, {
	    src: {AlternateMDImage}, type: 'jpeg', media: 'md'
    }, {
	    src: {AlternateLGImage}, type: 'jpeg', media: 'lg'
    }, {
	    src: {AlternateXLImage}, type: 'jpeg', media: 'xl'
    }, {
	    src: {AlternateXXLImage}, type: 'jpeg', media: 'xxl'
    }];

    return (
        <>
	        <ResponsivePicture
		        original={OriginalImage}
		        multiple={AlternateImages}
		        withFramework="bootstrap"
	        />
        <>
    )
};
```

else you are a brave developer, a breed of champion and you don't use CSS Framework (you have my eternal respect).

```tsx
import OriginalImage from "./OriginalImage";
import AlternateImage from "./AlternateImage";

/*  React... Again */
import OriginalImage from './public/img/original.jpg';
import AlternateXSImage from './public/img/alternate-xs.jpg'
import AlternateSMImage from './public/img/alternate-sm.jpg'
import AlternateMDImage from './public/img/alternate-md.jpg'
import AlternateLGImage from './public/img/alternate-lg.jpg'
import AlternateXLImage from './public/img/alternate-xl.jpg'
import AlternateXXLImage from './public/img/alternate-xxl.jpg'

const MyExplosedComponentOnTheGround: FC = () => {

    /* Suggestion: Try to made files with constants for to export, for have earn line. */
    const OriginalImage: OriginalImage = {src: "<PATH>/<TO>/<FILE>", alt: "My original image"};
    const AlternateImages: AlternateImage = [{
	    src: {AlternatePhoneImage}, type: 'webp', media: { max: 520 }
    }, {
	    src: {AlternatePhabletImage}, type: 'webp', media: { min: 641, max: 768 }
    }, {
	    src: {AlternateTabletImage}, type: 'jpeg', media: { min: 768, max: 1024 }
    }, {
	    src: {AlternateDesktopImage}, type: 'jpeg', media: { min: 1025, max: 1200 }
    }, {
	    src: {AlternateDesktopHDImage}, type: 'jpeg', media: { min: 1201, max: 1400 }
    }, {
	    src: {AlternateDeskTopUHDImage}, type: 'jpeg', media: { min: 1401 }
    }];

    return (
        <>
	        <ResponsivePicture
		        original={OriginalImage}
		        multiple={AlternateImages}
	        />
        <>
    )
};
```

> In the future, I will create an object for custom grids with a framework. If you modify the Twitter Bootstrap grid, for example. 