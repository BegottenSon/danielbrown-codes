<script>
    export let search;
</script>

<style>
    input[type="search"] {
		border: none;
		border-bottom: var(--blue) 2px solid;
		border-radius: 2px;
		color: var(--soft-white);
		background-color: rgb(33, 34, 54);
	}
</style>    

<input type="search" placeholder="Search for Crystals" bind:value={search} on:keyup>