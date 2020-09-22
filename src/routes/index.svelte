<script>
	import Transition from "../components/Transition.svelte"
</script>

<svelte:head>
	<title>Daniel Brown Codes</title>
</svelte:head>
<Transition>

<h1>Daniel Brown</h1>
<h2>Music Producer | Artist | Audio Engineer...</h2>
<h2>Web Developer???</h2>
<section class='card'>
	<p>
		<span id='purpose-statement'><strong>To Create and Inspire</strong></span> <br>
		That's my life's purpose statement summed up in it's simplest state.
		This site is another element added to the category of <em>Create</em>.
	</p>

	<p>From <a href="https://www.begottensounds.com" class='p-links'>Music</a> to 
		<a href="https://www.begottensounds.com/begotten-experience" class="p-links"> The Podcast</a> 
		to <a href="https://codepen.io/BegottenSon" target="_blank" rel="noopener noreferrer" class="p-links">Code</a>, 
		creativity is found everywhere. Love of music translated to 
		creating more on the screen which leads here. This is my journey into code.</p>
</section>

</Transition>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: var(--accent);
	}

	p {
		margin: 1em auto;
	}

	.card {
		background-color: var(--dark-blue);
		border-radius: 8px;
		padding: 1em;
		max-width: 30em;
	}

	#purpose-statement {
		color: var(--blue);
	}

	.p-links {
		font-weight: 700;
		color: var(--accent);
		text-decoration: none;

	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

