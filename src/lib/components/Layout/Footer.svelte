<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import { base } from '$app/paths';
</script>

<footer class="bg-light py-3 mt-auto border-top">
	<div class="container">
		<div class="row gap-3 gap-sm-0">
			<div class="col-12 col-sm-4 col-md-2" id="footer_column_left_1">
				<nav class="navbar py-0">
					<ul class="navbar-nav gap-1 align-items-center align-items-sm-start mx-auto mx-sm-0">
						<li class="nav-item small"><NavLink href="{base}/docs/disclaimer" title="Disclaimer" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/privacy-policy" title="Privacy Policy" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/terms-and-conditions" title="Terms & conditions" /></li>
					</ul>
				</nav>
			</div>
			<div class="col-12 col-sm-4 col-md-2" id="footer_column_left_2">
				<nav class="navbar py-0">
					<ul class="navbar-nav gap-1 align-items-center align-items-sm-start mx-auto mx-sm-0">
						<li class="nav-item small"><NavLink href="{base}/docs/disclaimer" title="Disclaimer" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/privacy-policy" title="Privacy Policy" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/terms-and-conditions" title="Terms & conditions" /></li>
					</ul>
				</nav>
			</div>
			<div class="col-12 col-sm-4 col-md-2" id="footer_column_left_3">
				<nav class="navbar py-0">
					<ul class="navbar-nav gap-1 align-items-center align-items-sm-start mx-auto mx-sm-0">
						<li class="nav-item small"><NavLink href="{base}/docs/disclaimer" title="Disclaimer" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/privacy-policy" title="Privacy Policy" /></li>
						<li class="nav-item small"><NavLink href="{base}/docs/terms-and-conditions" title="Terms & conditions" /></li>
					</ul>
				</nav>
			</div>
			<div class="col-12 col-md-6 mt-3 mt-sm-5 mt-md-0" id="footer_column_right">
				<p class="text-center text-md-end text-muted mb-0 small">©{new Date().getFullYear()} Wolters Kluwer N.V. and/or its affiliates. All rights reserved.</p>
				<div id="footer_social_icons" class="mt-3 flex-row-center justify-content-end gap-3">
					<span class="small text-muted">Follow us on: </span>
					<a href="/" class="wk-icon-filled-facebook fs-4 text-middle-dark hover-text-dark" title="Facebook"></a>
					<a href="/" class="wk-icon-filled-instagram fs-4 text-middle-dark hover-text-dark" title="Instagram"></a>
					<a href="/" class="wk-icon-filled-linkedin fs-4 text-middle-dark hover-text-dark" title="Linked In"></a>
					<a href="/" class="wk-icon-filled-youtube fs-4 text-middle-dark hover-text-dark" title="YouTube"></a>
				</div>
			</div>
		</div>
	</div>
</footer>
