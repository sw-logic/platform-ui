import { writable } from 'svelte/store';
import type { SettingsState } from './types.js';

const defaultSettings: SettingsState = {
	userLoggedIn: false,
	userType: 'private',
	theme: 'light',
	themeSwitcher: false
};

export const settings = writable<SettingsState>(defaultSettings);