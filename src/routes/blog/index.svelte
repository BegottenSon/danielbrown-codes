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
	}
	
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		align-items: center;
		margin: 0 0 1em 0;
		padding-left: 0;
		line-height: 1.5;
		list-style: none;
		
	}

	ul li {
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
	}

	.post-picture {
		background-color: var(--dark-blue);
		border-radius: 12px;
		height: 100%;
		width: 300px;

	}

	@media (max-width: 480px) {
		.post-picture {
			height: 100%;
			width: 250px;
		}
	}


</style>

<svelte:head>
	<title>My Thoughts</title>
</svelte:head>

<Transition>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<div class="post-picture">
		<a rel='prefetch' href='blog/{post.slug}'>{@html post.picture}</a>	
		</div>
		
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

</Transition>