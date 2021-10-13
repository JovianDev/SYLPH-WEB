<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About Sylph</title>
</svelte:head>
<section>
	<h1>about</h1>
</section>
