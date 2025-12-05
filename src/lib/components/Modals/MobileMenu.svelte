<script lang="ts">
	import { base } from '$app/paths';
	import NavLink from '$lib/components/NavLink.svelte';
	import { settings } from '$lib';

	function logOut() {
		settings.update(s => ({ ...s, userLoggedIn: false }));
	}
</script>

<div class="mobile-menu offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="mobileMenuOffcanvas" aria-labelledby="mobileMenuOffcanvas">
	<div class="offcanvas-header border-bottom">
		<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menü</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>
	<div class="offcanvas-body">
		<nav class="mobil-navbar">
			{#if $settings.userLoggedIn}
				<ul class="nav gap-3 flex-column">
					<li class="nav-item collapse-nav-text"><NavLink href="{base}/library" title="Library" icon="filled-book-open" /></li>
					<li class="nav-item collapse-nav-text"><NavLink href="{base}/favorites" title="Favorites" icon="filled-heart" /></li>
					<li class="nav-item collapse-nav-text"><NavLink href="{base}/folders" title="Folders" icon="filled-folder" /></li>
					<li class="nav-item collapse-nav-text"><NavLink href="{base}/downloads" title="Downloads" icon="download-line" /></li>
				</ul>
				<hr>
				<ul class="nav gap-3 flex-column">
					<li class="nav-item"><NavLink href="{base}/#" title="Profile" icon="filled-user"/></li>
					{#if $settings.userSubscription}
						<li class="nav-item"><NavLink href="{base}/#" title="My subscriptions" icon="filled-document-signed" /></li>
					{/if}
					<li class="nav-item"><NavLink href="{base}/#" title="Log out" icon="filled-document-signed" onclick={logOut} /></li>
				</ul>
			{:else}
				<ul class="nav gap-3 flex-column">
					<li class="nav-item"><NavLink title="Login" icon="filled-user" data-bs-toggle="modal" data-bs-target="#loginModal"/></li>
					<li class="nav-item"><NavLink href="{base}/registration" title="Register" icon="filled-document-signed" /></li>
				</ul>
			{/if}
			{#if !$settings.userSubscription}
				<hr>
				<a href="{base}/subscribe" class="btn btn-primary ms-3">Subscribe</a>
			{/if}
		</nav>
	</div>
</div>
