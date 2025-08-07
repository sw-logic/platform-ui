<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { title, active = $bindable(true), ...props } = $props()
</script>

{#if active}
	<a class="nav-link d-flex align-items-center {props.class}" href={props.href || '#'} {...props}>
		{#if props.icon}
			<Icon icon={props.icon} class="me-2" />
		{/if}
		{#if title}
			{title}
		{/if}
	</a>
{:else}
	<span class="text-disabled px-2 d-flex align-items-center {props.class}">
		{#if props.icon}
			<Icon icon={props.icon} class="me-2" />
		{/if}
		{#if title}
			{title}
		{/if}
	</span>
{/if}
