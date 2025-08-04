<script>
	import ThemeToggle from '../ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import LoginModal from '$lib/components/Modals/LoginModal.svelte';
	import { settings } from '$lib';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import Logo from '$lib/components/Layout/Logo.svelte';

	function logOut() {
		settings.update(s => ({ ...s, userLoggedIn: false }));
	}
</script>

<header class="shadow-none">
	<nav class="navbar navbar-expand-md">
		<div class="container">
			<Logo />

			<div class="w-50">
				<input type="text" class="form-control" placeholder="Search..." aria-label="Search" />
			</div>

			<div class="d-flex align-items-center">
				<button class="btn btn-primary">Subscribe</button>

				{#if !$settings.userLoggedIn}
					<nav class="navbar py-0 navbar-expand-md">
						<div class="container">
							<ul class="navbar-nav gap-3">
								<li class="nav-item"><NavLink title="Login" icon="filled-user" data-bs-toggle="modal" data-bs-target="#loginModal"/></li>
								<li class="nav-item"><NavLink title="Register" icon="filled-document-signed" /></li>
							</ul>
						</div>
					</nav>


				{:else}
					<ul class="navbar-nav mx-3">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle p-0 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<span>John Doe</span>
								<picture class="avatar ms-2">
									<img src="/images/misc/avatar.jpg" alt="">
								</picture>
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Profile</a></li>
								<li><a class="dropdown-item" href="#">My subscription</a></li>
								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" href="#" on:click={logOut}>Log out</a></li>
							</ul>
						</li>
					</ul>
				{/if}

				{#if $settings.themeSwitcher}
					<ThemeToggle />
				{/if}

				<ControlIcon icon="settings" title="Show settings" data-bs-toggle="offcanvas" data-bs-target="#settingsOffcanvas" class="ms-auto" />
			</div>
		</div>
	</nav>
	<nav class="bg-dark navbar py-0 navbar-expand-md" data-bs-theme="dark">
		<div class="container d-flex align-items-center">
			<ul class="navbar-nav gap-3 align-items-center">
				<li class="nav-item"><NavLink title="Library" icon="filled-book-open" /></li>
				<li class="nav-item"><NavLink bind:active={$settings.userLoggedIn} title="Favorites" icon="filled-heart" /></li>
				<li class="nav-item"><NavLink bind:active={$settings.userLoggedIn} title="Folders" icon="filled-folder" /></li>
				<li class="nav-item"><NavLink bind:active={$settings.userLoggedIn} title="Downloads" icon="download-line" /></li>
			</ul>

			<p class="text-center text-muted m-0">Please login or register a new account to use our comprehensive toolset.</p>
		</div>
	</nav>
</header>

<LoginModal />
