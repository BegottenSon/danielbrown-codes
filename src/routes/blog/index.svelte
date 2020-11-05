<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Transition from "../../components/Transition.svelte"
	import { flip } from "svelte/animate"
	export let posts;

//SETTINGS FOR FILTER AND POSTS STATE
	let hide = true;
	let blog = posts;

// FILTERING POST BY TAG
	function filterPosts(e) {
		blog = posts.filter(post => post.tags.includes(e.target.textContent));
		hide = false;
	}

	function reset() {
		blog = posts;
		hide = true;
	}

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
		/* padding-left: 0; */
		padding: 0.8em;
		line-height: 1.5;
		list-style: none;
		max-width: 50ch;
		border-radius: 16px;
		background-color: hsla(228, 16%, 6%, 0.7);
		box-shadow: 0 15px 25px  hsla(228, 100%, 74%, 0.15);
		box-sizing: border-box;
	}

	.picture-container {
		display: flex;
		background-color: rgb(65, 65, 102);
		border-radius: 12px;
		padding: 0.5em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0;
		gap: 2em;
	}

	ul li {
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: var(--accent);
		transition: 300ms ease;
	}

	a :global(.post-picture) {
		display: inherit;
		background-color: var(--dark-blue);
		box-shadow: var(--dark-blue) 2px 2px 10px;
		border-radius: 12px;
		height: 150px;
		width: 300px;
		object-fit: cover;
		transition: 300ms ease;
	}

	a :global(.post-picture:hover) {
		transform: scale(1.02);
		
	}

	.tags {
		display: flex;
		gap: 0.5em;
		align-self: flex-end;
	}

	.tags h5 {
		background-color: var(--dark-blue);
		border-radius: 4px;
		padding: 0.6em;
		cursor: pointer;
	}

	.reset {
		font-size: 0.8em;
		text-align: center;
		background-color: var(--dark-blue);
		border-radius: 8px;
		padding: 1em;
		width: 3em;
		cursor: pointer;
	}

	.hide {
		display: none;
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
		<h3 class="reset" class:hide on:click={reset}>Reset</h3>
		<ul>
			{#each blog as post (post.title)}
			<div class="posts" animate:flip="{{duration: 200}}">
				<div class="picture-container">
				<a rel='prefetch' href='blog/{post.slug}'>{@html post.picture}</a>	
				</div>
				<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
				<p>{post.summary}</p>
				<div class="tags">
					{#each post.tags as tag}
						<h5 on:click={filterPosts}>{tag}</h5>
					{/each}
				</div>
			</div>
			{/each}
		</ul>
	</main>
</Transition>