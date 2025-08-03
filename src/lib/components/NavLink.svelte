<script>
	import Icon from '$lib/components/Icon.svelte';

	let props = $props();
	let userLoggedIn = 'userLoggedIn' in props ? props.userLoggedIn : true;
	console.log('userLoggedIn: ', userLoggedIn);
</script>

{#if userLoggedIn}
	<a class="nav-link d-flex align-items-center {props.class}" href={props.link || '#'}>
		{#if props.icon}
			<Icon icon={props.icon} class="me-2" />
		{/if}
		{#if props.title}
			{props.title}
		{/if}
	</a>
{:else}
	<span class="text-muted d-flex align-items-center {props.class}">
		{#if props.icon}
			<Icon icon={props.icon} class="me-2" />
		{/if}
		{#if props.title}
			{props.title}
		{/if}
	</span>
{/if}
