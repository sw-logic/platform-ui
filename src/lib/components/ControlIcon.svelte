<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let {icon, title, onclick, ...props} = $props();
</script>

<button {title} {onclick} {...props} class="btn btn-control {props.class}"><Icon icon={icon} class="m-0" /></button>
