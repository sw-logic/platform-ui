<script lang="ts">
	import { settings } from '$lib';

	function toggleUserManagement() {
		settings.update(s => ({ ...s, userManagement: !s.userManagement }));
	}

	function toggleRegisterWithEduId() {
		settings.update(s => ({ ...s, registerWithEduId: !s.registerWithEduId }));
	}

	function toggleUserRegistered() {
		settings.update(s => ({ ...s, userRegistered: !s.userRegistered }));
		settings.update(s => ({ ...s, userLoggedIn: false }));
	}

	function updateUserType(value) {
		settings.update(s => ({ ...s, userType: value }));
	}

	function toggleUserLoggedIn() {
		settings.update(s => ({ ...s, userLoggedIn: !s.userLoggedIn }));
	}

	function toggleUserStartedTrial() {
		settings.update(s => ({ ...s, userStartedTrial: !s.userStartedTrial }));
	}

	function toggleUserSubscription() {
		settings.update(s => ({ ...s, userSubscription: !s.userSubscription }));
	}

	function toggleAllowGuest() {
		settings.update(s => ({ ...s, allowGuest: !s.allowGuest }));
	}

	function toggleShowLibraryForGuests() {
		settings.update(s => ({ ...s, showLibraryForGuests: !s.showLibraryForGuests }));
	}

	function updateTheme(value) {
		settings.update(s => ({ ...s, theme: value }));
	}

	function toggleThemeSwitcher() {
		settings.update(s => ({ ...s, themeSwitcher: !s.themeSwitcher }));
	}
</script>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="settingsOffcanvas" aria-labelledby="settingsOffcanvas">
	<div class="offcanvas-header border-bottom">
		<h5 class="offcanvas-title" id="offcanvasScrollingLabel">System settings</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>
	<div class="offcanvas-body">

		<!-- IF USER REGISTERED -->
		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="userManagement"
				checked={$settings.userManagement}
				on:change={toggleUserManagement}
			>
			<label class="form-check-label" for="userManagement">
				Allow User Management
			</label>
		</div>
		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="registerWithEduId"
				checked={$settings.registerWithEduId}
				on:change={toggleRegisterWithEduId}
			>
			<label class="form-check-label" for="registerWithEduId">
				Allow EduID Registration
			</label>
		</div>

		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="allowGuest"
				checked={$settings.allowGuest}
				on:change={toggleAllowGuest}
			>
			<label class="form-check-label" for="allowGuest">
				Allow Guest Access
			</label>
		</div>

		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="showLibraryForGuests"
				checked={$settings.showLibraryForGuests}
				on:change={toggleShowLibraryForGuests}
			>
			<label class="form-check-label" for="showLibraryForGuests">
				Show Library for Guests
			</label>
		</div>

		<div class="form-check mb-3">
			<input
				class="form-check-input"
				type="checkbox"
				id="userRegistered"
				checked={$settings.userRegistered}
				on:change={toggleUserRegistered}
			>
			<label class="form-check-label" for="userRegistered">
				User Registered
			</label>
		</div>

		{#if $settings.userRegistered}
			<!-- USERTYPE -->
			<div class="mb-3">
				<label for="userType" class="form-label">User Type</label>
				<select
					class="form-select"
					id="userType"
					value={$settings.userType}
					on:change={(e) => updateUserType(e.target.value)}
				>
					<option value="private">Private</option>
					<option value="author">Author</option>
					<option value="corporate">Corporate</option>
					<option value="institutional">Institutional</option>
				</select>
			</div>

			<!-- IF USER LOGGED IN -->
			<div class="form-check mb-3">
				<input
					class="form-check-input"
					type="checkbox"
					id="userLoggedIn"
					checked={$settings.userLoggedIn}
					on:change={toggleUserLoggedIn}
				>
				<label class="form-check-label" for="userLoggedIn">
					User Logged In
				</label>
			</div>
		{/if}

		<!-- SETTING FOR LOGGED IN USERS -->
		{#if $settings.userLoggedIn}
			<!-- USER STARTED TRIAL -->
			<div class="form-check mb-3">
				<input
					class="form-check-input"
					type="checkbox"
					id="userStartedTrial"
					checked={$settings.userStartedTrial}
					on:change={toggleUserStartedTrial}
				>
				<label class="form-check-label" for="userStartedTrial">
					User startred trial
				</label>
			</div>

			<div class="form-check mb-3">
				<input
					class="form-check-input"
					type="checkbox"
					id="userSubscription"
					checked={$settings.userSubscription}
					on:change={toggleUserSubscription}
				>
				<label class="form-check-label" for="userSubscription">
					User has subscription
				</label>
			</div>
		{/if}

		<hr>

		<div class="mb-3">
			<label for="theme" class="form-label">Theme</label>
			<select
				class="form-select"
				id="theme"
				value={$settings.theme}
				on:change={(e) => updateTheme(e.target.value)}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
			</select>
		</div>

		<div class="mb-3">
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					id="themeSwitcher"
					checked={$settings.themeSwitcher}
					on:change={toggleThemeSwitcher}
				>
				<label class="form-check-label" for="themeSwitcher">
					Show Theme Switcher
				</label>
			</div>
		</div>
	</div>
</div>
