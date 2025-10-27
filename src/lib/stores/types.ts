export type UserType = 'private' | 'author' | 'corporate' | 'institutional';
export type Theme = 'light' | 'dark';

export interface SettingsState {
	userAuth: boolean;
	userManagement: boolean;
	registerWithEduId: boolean;
	userRegistered: boolean;
	userType: UserType;
	userLoggedIn: boolean;
	userStartedTrial: boolean;
	userSubscription: boolean;
	userHasContent: boolean;
	allowGuest: boolean;
	showLibraryForGuests: boolean;
	theme: Theme;
	themeSwitcher: boolean;
}
