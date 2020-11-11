<script context="module">
	export async function preload({ params, query }) {
		
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Transition from "../../components/Transition.svelte"
	export let post;
</script>

<style>
	article {
		width: 100vw;
		max-width: 56em;
	}

	h1 {
		color: var(--blue);
		font-size: 3em;
	}

	.content {
		display: grid;
	}

	.content :global(h2) {
		color: var(--accent);
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(p) {
		font-size: 1.2em;
	}

	.content :global(pre) {
		background-color: hsl(350, 58%, 23%);
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		justify-self: center;
		padding: 0.5em;
		overflow-x: scroll;
		width: 50vw;
	}

	.content :global(pre) :global(code) {
		color: var(--soft-white);
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content :global(a) {
		text-decoration-color: var(--accent);
		text-decoration-style: double;
		text-decoration-thickness: 6%;
	}

	.content :global(blockquote) {
		color: hsl(242, 78%, 91%);
		font-style: italic;
		background-color: var(--dark-blue);
		padding: 1em;
	}

	@media (max-width: 915px) {
		h1 {
			text-align: center;
		}

		.content {
			padding: 0 1.5em;
		}

		.content :global(pre) {
			width: 80vw;
		}
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<Transition>
<article>
	<h1>{post.title}</h1>
	<div class='content'>
		{@html post.html}
	</div>
</article>
</Transition>