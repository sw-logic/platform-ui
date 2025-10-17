<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { Snippet } from 'svelte';

	interface ControlIconProps {
		icon: string;
		iconType?: string;
		title?: string;
		name?: string;
		onclick?: () => void;
		active?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {icon, iconType, title, name, onclick, active, ...props}: ControlIconProps = $props();
	iconType = iconType || 'wk';
</script>

<button {title} {onclick} {...props} class="btn-control btn-control-{name} {props.class}" class:active>
	<Icon icon={icon} {iconType} />
</button>
