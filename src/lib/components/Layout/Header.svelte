<script lang="ts">
	import ThemeToggle from '../ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import LoginModal from '$lib/components/Modals/LoginModal.svelte';
	import TrialEndModal from '$lib/components/Modals/TrialEndModal.svelte';
	import { settings } from '$lib';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import Logo from '$lib/components/Layout/Logo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { base } from '$app/paths';
	import { TrialCountdown } from '$lib/scripts/trialCountdown';
	import { onMount, onDestroy } from 'svelte';
	import MobileMenu from '$lib/components/Modals/MobileMenu.svelte';

	let trialEndModal: HTMLDivElement;
	let countdown: TrialCountdown | null = null;

	let searchInput: HTMLInputElement;
	let searchResults: HTMLDivElement;

	function logOut() {
		settings.update(s => ({ ...s, userLoggedIn: false }));
	}

	function initCountdown() {
		if (countdown) {
			console.log("Destroy countdown");
			countdown.destroy()
		}
		console.log("Defining countdown");
		countdown = new TrialCountdown('.trial-counter', () => {
			if (trialEndModal) {
				trialEndModal.show();
				settings.update(s => ({ ...s, userStartedTrial: false}));
			}
		});
		countdown.start();
	}

	function showSearchResults() {
		if (searchInput.value !== '') {
			searchResults.classList.add("show");
		} else {
			searchResults.classList.remove("show");
		}
	}


	$effect(() => {
		if ($settings.userStartedTrial && countdown) {
			setTimeout(() => {
				initCountdown();
			}, 300);
		}
	});

	onMount(() => {
		initCountdown()
	});

	onDestroy(() => {
		if (countdown) {
			countdown.destroy();
		}
	});
</script>

<header class="shadow-none sticky-top bg-white">
	<nav class="navbar navbar-expand-md">
		<div class="container flex-nowrap">
			<Logo />

			<!-- Search bar -->
			<div class="search-bar w-50" id="searchBar">
				<form>
					<div class="input-group input-group-sm">
						<input bind:this={searchInput} oninput={showSearchResults} type="text" class="form-control border-dark"
									 placeholder="Search" id="searchBarInput" aria-label="Search" aria-describedby="searchButton">
						<a href="{base}/search" class="btn btn-outline-dark" type="button" id="searchButton">
							<Icon icon="filled-search" />
						</a>
					</div>
				</form>
				<div bind:this={searchResults} class="search-results shadow" id="searchResults">
					<div class="search-results-header">Search phrases</div>
					<ul class="search-items">
						<li class="search-item text-truncate"><em>Seach</em> result line 1</li>
						<li class="search-item text-truncate">Seach result line 2</li>
						<li class="search-item text-truncate">This is a very long search result line 3</li>
						<li class="search-item text-truncate">Seach result line 4</li>
						<li class="search-item text-truncate">Seach result line 5</li>
					</ul>
					<div class="search-results-header">Table of content elements</div>
					<ul class="search-items">
						<li class="search-item text-truncate">Seach result line 1</li>
						<li class="search-item text-truncate">Seach result line 2</li>
						<li class="search-item text-truncate">Seach result line 3</li>
						<li class="search-item text-truncate">Seach result line 4</li>
						<li class="search-item text-truncate">Seach result line 5</li>
					</ul>
					<div class="search-results-header">Books</div>
					<div class="content scroll">
						<ul class="search-items ps-2 gap-3">
							<li class="search-item d-flex gap-3 align-items-center">
								<picture class="item-cover">
									<img src="{base}/images/book/book-1.webp" alt="Book cover">
								</picture>
								<div class="item-info">
									<div class="book-author text-truncate">Author name</div>
									<div class="book-title text-truncate">This is the ridiculously long book title</div>
								</div>
							</li>
							<li class="search-item d-flex gap-3 align-items-center">
								<picture class="item-cover">
									<img src="{base}/images/book/book-1.webp" alt="Book cover">
								</picture>
								<div class="item-info">
									<div class="book-author text-truncate">Author name</div>
									<div class="book-title text-truncate">This is the ridiculously long book title</div>
								</div>
							</li>
							<li class="search-item d-flex gap-3 align-items-center">
								<picture class="item-cover">
									<img src="{base}/images/book/book-1.webp" alt="Book cover">
								</picture>
								<div class="item-info">
									<div class="book-author text-truncate">Author name</div>
									<div class="book-title text-truncate">This is the ridiculously long book title</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- User controls -->
			<div class="d-none d-md-flex align-items-center">
				{#if !$settings.userSubscription}
					<a href="{base}/subscribe" class="btn btn-primary ms-3">Subscribe</a>
				{/if}

				{#if $settings.userManagement && !$settings.userLoggedIn}
					<nav class="navbar py-0 ms-3 navbar-expand-md">
							<ul class="navbar-nav gap-3">
								<li class="nav-item"><NavLink title="Login" icon="filled-user" data-bs-toggle="modal" data-bs-target="#loginModal"/></li>
								<li class="nav-item"><NavLink href="{base}/registration" title="Register" icon="filled-document-signed" /></li>
							</ul>
					</nav>


				{:else if $settings.userManagement && $settings.userLoggedIn}
					<ul class="navbar-nav ms-3">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle p-0 d-flex align-items-center" href="{base}/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<span class="d-none d-sm-inline">John Doe</span>
								<picture class="avatar ms-2">
									<img src="{base}/images/misc/avatar.jpg" alt="">
								</picture>
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="{base}/profile">Profile</a></li>
								{#if $settings.userSubscription}
									<li><a class="dropdown-item" href="{base}/my-subscriptions">My subscriptions</a></li>
								{:else}
									<li><a class="dropdown-item" href="{base}/subscribe">Subscribe</a></li>
								{/if}

								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" href="{base}/#" onclick={logOut}>Log out</a></li>
							</ul>
						</li>
					</ul>
				{:else}
					<a href="{base}/portal" class="btn btn-outline-primary ms-3"><Icon icon="arrow-left" /> Back to Portal</a>
				{/if}

				{#if $settings.themeSwitcher}
					<ThemeToggle />
				{/if}

				<div class="settings-button">
					<ControlIcon icon="settings" title="Show settings" class="no-hover" data-bs-toggle="offcanvas" data-bs-target="#settingsOffcanvas" />
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="flex-row-center d-md-none ms-3">
				<ControlIcon icon="menu" title="Show menu" data-bs-toggle="offcanvas" data-bs-target="#mobileMenuOffcanvas" />
			</div>
		</div>
	</nav>

	<nav id="main-navbar" class="bg-dark navbar py-0 navbar-expand-md" data-bs-theme="dark">
		<div class="container d-flex align-items-center">
			<ul class="navbar-nav gap-3 flex-row-center">
				<li class="nav-item collapse-nav-text"><NavLink href="{base}/library" title="Library" icon="filled-book-open" /></li>
				<li class="nav-item collapse-nav-text"><NavLink href="{base}/favorites" title="Favorites" icon="filled-heart" /></li>
				<li class="nav-item collapse-nav-text"><NavLink href="{base}/folders" title="Folders" icon="filled-folder" /></li>
				<li class="nav-item collapse-nav-text"><NavLink href="{base}/downloads" title="Downloads" icon="download-line" /></li>
			</ul>

			<div class="info-container d-md-flex">
				{#if !$settings.userLoggedIn}
					<p class="text-center text-muted m-0">Please login or register a new account to use our comprehensive toolset.</p>
				{:else if $settings.userStartedTrial}
					<div class="trial-box">Time left of trial period:<span class="trial-counter">00:00</span></div>
				{/if}
			</div>
		</div>
	</nav>
</header>

<LoginModal />
<TrialEndModal bind:this={trialEndModal} />
<MobileMenu />
