<script>
	import Icon from '$lib/components/Icon.svelte';

	let { title, icon, link, class: className, active = $bindable(true), ...props } = $props()
</script>

{#if active}
	<a class="nav-link d-flex align-items-center {className}" href={link || '#'} {...props}>
		{#if icon}
			<Icon icon={icon} class="me-2" />
		{/if}
		{#if title}
			{title}
		{/if}
	</a>
{:else}
	<span class="text-disabled px-2 d-flex align-items-center {className}">
		{#if icon}
			<Icon icon={icon} class="me-2" />
		{/if}
		{#if title}
			{title}
		{/if}
	</span>
{/if}
