<script>
	import Icon from '$lib/components/Icon.svelte';
	import { settings } from '$lib';
</script>

<div class="d-flex flex-column flex-grow-1">
	{#if $settings.userLoggedIn === true}
		{#if $settings.userHasContent}
			<div class="container py-5">
				Favorites...
			</div>
		{:else}
			<div class="flex-center text-center">
				<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/no-favorites.svg" alt="Add folder" />
				<h1 class="mt-3">Opps!</h1>
				<h3>You don't have any favorites yet...</h3>
				<p class="mt-3">Please select a document, image or archive<br/>and click on the favorite icon (<Icon icon="star" />)<br/>next to the item.</p>
			</div>
		{/if}
	{:else}
		<div class="flex-center text-center">
			<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/no-favorites.svg" alt="Add folder" />
			<h1 class="mt-3">Opps!</h1>
			<h3>You are not logged in...</h3>
			<p class="mt-3">You need to be logged in<br/>to use this feature!</p>
		</div>
	{/if}
</div>
