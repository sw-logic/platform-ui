<script lang="ts">
	import { settings } from '$lib';

	let { showModal = $bindable() } = $props();

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			showModal = false;
		}
	}

	function updateUserType(value) {
		settings.update(s => ({ ...s, userType: value }));
	}

	function updateTheme(value) {
		settings.update(s => ({ ...s, theme: value }));
	}

	function toggleUserLoggedIn() {
		settings.update(s => ({ ...s, userLoggedIn: !s.userLoggedIn }));
	}

	function toggleThemeSwitcher() {
		settings.update(s => ({ ...s, themeSwitcher: !s.themeSwitcher }));
	}
</script>

<div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Settings</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="mb-3">
					<div class="form-check">
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
				</div>

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
	</div>
</div>
