export type UserType = 'private' | 'author' | 'corporate' | 'institutional';
export type Theme = 'light' | 'dark';

export interface SettingsState {
	userLoggedIn: boolean;
	userType: UserType;
	theme: Theme;
	themeSwitcher: boolean;
}