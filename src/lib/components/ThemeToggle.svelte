<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export const theme = writable('light');

	let currentTheme = 'light';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		currentTheme = savedTheme;
		theme.set(savedTheme);
		document.documentElement.setAttribute('data-theme', savedTheme);
	});

	function toggleTheme() {
		currentTheme = currentTheme === 'light' ? 'dark' : 'light';
		theme.set(currentTheme);
		localStorage.setItem('theme', currentTheme);
		document.documentElement.setAttribute('data-theme', currentTheme);
	}
</script>

<button 
	class="theme-toggle btn btn-outline-secondary" 
	on:click={toggleTheme}
	aria-label="Toggle theme"
	title="Toggle {currentTheme === 'light' ? 'dark' : 'light'} mode"
>
	{#if currentTheme === 'light'}
		<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
			<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"/>
		</svg>
	{:else}
		<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		border: none;
		padding: 0.5rem;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		background: transparent;
	}

	.theme-toggle:hover {
		background-color: rgba(255, 255, 255, 0.1);
		transform: scale(1.05);
	}

	.theme-toggle:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.5);
	}

	.theme-toggle svg {
		transition: transform 0.3s ease;
	}

	.theme-toggle:hover svg {
		transform: rotate(15deg);
	}

	:global([data-theme="dark"]) .theme-toggle {
		color: #ffffff;
	}

	:global([data-theme="dark"]) .theme-toggle:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>