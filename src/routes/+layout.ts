import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const prerender = true;
export const ssr = false;
export const trailingSlash = "always";

export async function load({ url }) {
	if (browser) {
		const userAuth = localStorage.getItem('platform-userAuth') === 'true';
		const userLoggedIn = false; // This will be handled by the app's own login system
		const allowGuest = true; // Default value

		// Auth protection (development protection)
		if (!userAuth && url.pathname !== '/auth/') {
			throw redirect(302, '/auth/');
		}

		// Login protection (app's own authentication)
		if (userAuth && !userLoggedIn && !allowGuest && url.pathname !== '/login/') {
			throw redirect(302, '/login/');
		}
	}
}