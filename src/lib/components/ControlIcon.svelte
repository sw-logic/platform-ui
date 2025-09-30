<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { Snippet } from 'svelte';

	interface ControlIconProps {
		icon: string;
		title?: string;
		onclick?: () => void;
		active?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {icon, title, onclick, active, ...props}: ControlIconProps = $props();
</script>

<button {title} {onclick} {...props} class="btn btn-control {props.class}" class:active><Icon icon={icon} /></button>
