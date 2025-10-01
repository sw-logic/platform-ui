<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { title, active = $bindable(true), ...props } = $props()
</script>

{#if active}
	<a class="nav-link flex-row-center {props.class}" href={props.href || '#'} {...props}>
		{#if props.icon}
			<Icon icon={props.icon} class="nav-icon me-2" />
		{/if}
		{#if title}
			<span class="nav-text">{title}</span>
		{/if}
	</a>
{:else}
	<span class="text-disabled px-2 flex-row-center {props.class}">
		{#if props.icon}
			<Icon icon={props.icon} class="nav-icon me-2" />
		{/if}
		{#if title}
			<span class="nav-text">{title}</span>
		{/if}
	</span>
{/if}
