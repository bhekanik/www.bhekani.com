<script>
	import Header from '$lib/components/Header/Header.svelte';
	import '../global.css';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main {
		max-width: 105ch;
		align-items: center;
		margin: 0 auto;
	}
</style>
