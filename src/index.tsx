import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsivePicture from './lib/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>
	<ResponsivePicture
		original={{
			src: '', alt: 'My original alternative'
		}}
		multiple={[{
			src: '', type: 'jpeg', media: 'xs'
		}, {
			src: '', type: 'jpeg', media: 'sm',
		}, {
			src: '', type: 'jpeg', media: 'md'
		}, {
			src: '', type: 'jpeg', media: 'lg'
		}, {
			src: '', type: 'jpeg', media: 'xl'
		}, {
			src: '', type: 'jpeg', media: 'xxl'
		}]}
		withFramework="bootstrap"
	/>
</React.StrictMode>);
