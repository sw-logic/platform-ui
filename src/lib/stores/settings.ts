import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { SettingsState } from './types.js';

const defaultSettings: SettingsState = {
	userAuth: false,
	userManagement: true,
	registerWithEduId: true,
	userRegistered: true,
	userType: 'private',
	userLoggedIn: true,
	userStartedTrial: false,
	userSubscription: true,
	allowGuest: true,
	showLibraryForGuests: true,
	theme: 'light',
	themeSwitcher: false
};

function getInitialSettings(): SettingsState {
	const settings = { ...defaultSettings };

	if (browser) {
		const userAuth = localStorage.getItem('platform-userAuth');
		if (userAuth === 'true') {
			settings.userAuth = true;
		}
	}

	return settings;
}

function createSettings() {
	const { subscribe, set, update } = writable<SettingsState>(getInitialSettings());

	return {
		subscribe,
		set,
		update,
		login: () => {
			update((current) => {
				const newValue = { ...current, userAuth: true };
				if (browser) {
					localStorage.setItem('platform-userAuth', 'true');
				}
				return newValue;
			});
		},
	};
}

export const settings = createSettings();
