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
		hover?: boolean;
		[key: string]: unknown;
	}

	let {icon, title, onclick, active, hover, ...props}: ControlIconProps = $props();
</script>

<button {title} {onclick} {...props} class="btn-control {hover ?? 'icon-hover'} {props.class}" class:active>
	<Icon icon={icon} {hover} />
</button>
