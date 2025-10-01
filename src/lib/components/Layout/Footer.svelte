<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import { base } from '$app/paths';
</script>

<footer class="bg-light py-3 mt-auto border-top">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-12 col-md-6 d-flex gap-3 justify-content-center justify-content-md-start">
				<nav class="navbar navbar-expand-sm py-0">
					<div class="container">
						<ul class="navbar-nav gap-3">
							<li class="nav-item small"><NavLink href="{base}/docs/disclaimer" title="Disclaimer" /></li>
							<li class="nav-item small"><NavLink href="{base}/docs/privacy-policy" title="Privacy Policy" /></li>
							<li class="nav-item small"><NavLink href="{base}/docs/terms-and-conditions" title="Terms & conditions" /></li>
						</ul>
					</div>
				</nav>
			</div>
			<div class="col-12 col-md-6">
				<p class="text-center text-md-end text-muted mb-0 small">©{new Date().getFullYear()} Wolters Kluwer N.V. and/or its affiliates. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
