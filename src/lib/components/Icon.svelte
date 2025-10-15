<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IconProps {
		icon: string;
		iconType?: string;
		title?: string;
		onclick?: () => void;
		active?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {iconType, ...props}:IconProps = $props();
	iconType = iconType || 'wk';
</script>

{#if iconType === 'wk'}
	<span title={props.title} class="wk-icon-{props.icon} {props.class}"></span>
{:else}
	<i title={props.title} class="{iconType} fa-{props.icon} {props.class}"></i>
{/if}

