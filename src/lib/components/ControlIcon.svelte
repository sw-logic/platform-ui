<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { Snippet } from 'svelte';

	interface ControlIconProps {
		icon: string;
		iconType?: string;
		iconCSS?: string;
		title?: string;
		name?: string;
		onclick?: () => void;
		href?: string;
		active?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {icon, iconType, title, name, onclick, href, active, ...props}: ControlIconProps = $props();
	iconType = iconType || 'wk';
</script>

{#if href}
	<a href={href} {title} {...props} class="btn-control btn-control-{name} {props.class}" class:active>
		<Icon icon={icon} {iconType} class={props.iconCSS} />
	</a>
{:else}
	<button {title} {onclick} {...props} class="btn-control btn-control-{name} {props.class}" class:active>
		<Icon icon={icon} {iconType} class={props.iconCSS} />
	</button>
{/if}


