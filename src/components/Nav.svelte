<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid hsl(349, 100%, 16%);
		border-top: 1px solid hsl(349, 100%, 16%);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		display: flex;
		justify-content: end;
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--accent);
		display: block;
		bottom: -1px;
		transition: ease-in-out 400ms;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	@media (max-width: 400px) {
		ul {
			justify-content: center;
		}
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">my thoughts</a></li>
		<li><a aria-current="{segment === 'my-expertise' ? 'page' : undefined}" href="my-expertise">my expertise</a></li>
		<li><a aria-current="{segment === 'my-code' ? 'page' : undefined}" href="my-code">my code</a></li>
	</ul>
</nav>
