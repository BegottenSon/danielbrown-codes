<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		display: grid;
		place-items: center;
		position: relative;
		/* max-width: 56em; */
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(.p-links) {
		font-weight: 700;
		color: var(--accent);
		text-decoration: none;

	}

	@media (max-width: 480px) {
		main {
			margin-bottom: 64px;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>