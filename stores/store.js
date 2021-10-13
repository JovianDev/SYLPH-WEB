import { writable } from 'svelte/store';

const OS = () => {
	if (navigator.appVersion.indexOf('Win') != -1) return 'Windows';
	if (navigator.appVersion.indexOf('Mac') != -1) return 'MacOS';
};

const detectedOS = OS();

export const userOS = writable(detectedOS, () => console.log('userOS', userOS));
