<script>
	import '../routes/global.css';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		background-color: #3c3c3c;
	}
</style>
