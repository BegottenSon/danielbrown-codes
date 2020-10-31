<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Transition from "../../components/Transition.svelte"
	export let posts;
</script>

<style>
	h1 {
		color: var(--blue);
		text-align: center;
	}
	
	.posts {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.5em;
		align-items: center;
		margin: 0 0 1em 0;
		padding-left: 0;
		line-height: 1.5;
		list-style: none;
		max-width: 50ch;
	}

	ul {
		padding: 0;
	}

	ul li {
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
	}

	a :global(.post-picture) {
		background-color: var(--dark-blue);
		border-radius: 12px;
		height: 150px;
		width: 300px;
		object-fit: cover;
	}

	.posts h5 {
		align-self: end;
		background-color: var(--dark-blue);
		padding: 0.5em;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 480px) {
		main {
			padding: 0 1em;
		}
	}

</style>

<svelte:head>
	<title>My Thoughts</title>
</svelte:head>

<div class="hidden">
	{#each posts as post}
		<a href='blog/{post.slug}'>links</a>
	{/each}
</div>
<Transition>
	<main>
		<h1>My Thoughts</h1>
		<ul>
			{#each posts as post}
			<div class="posts">
				<div class="post-picture">
				<a rel='prefetch' href='blog/{post.slug}'>{@html post.picture}</a>	
				</div>
				<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
				<p>{post.summary}</p>
				<h5>{post.tags}</h5>
			</div>
			{/each}
		</ul>
	</main>
</Transition>