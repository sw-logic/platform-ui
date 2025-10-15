<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let { icon, title, active = $bindable(true), ...props } = $props()
</script>

{#if active}
	<a {...props} class="nav-link {props.class}" href={props.href || '#'} >
		{#if props.icon}
			<Icon {icon} class="nav-icon me-2" />
		{/if}
		{#if title}
			<span class="nav-text">{title}</span>
		{/if}
	</a>
{:else}
	<span class="nav-link text-disabled {props.class}">
		{#if props.icon}
			<Icon {icon} class="nav-icon me-2" />
		{/if}
		{#if title}
			<span class="nav-text">{title}</span>
		{/if}
	</span>
{/if}
