<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
		list-style: none;
		
	}

	a {
		text-decoration: none;
	}


</style>

<svelte:head>
	<title>My Thoughts</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<a rel='prefetch' href='blog/{post.slug}'>{@html post.picture}</a>
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>