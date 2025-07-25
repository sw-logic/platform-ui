<script>
	import Icon from '$lib/components/Icon.svelte';

	let props = $props();
</script>

<a class="nav-link d-flex align-items-center {props.class}" href={props.link || '#'}>
	{#if props.icon}
		<Icon icon={props.icon} class="me-2" />
	{/if}
	{#if props.title}
		{props.title}
	{/if}
</a>
