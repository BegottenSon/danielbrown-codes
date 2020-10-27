<script>
	import DropDownMenu from "../components/crystalsPage/DropDownMenu.svelte"
	import SearchBox from "../components/crystalsPage/SearchBox.svelte"
	import crystals from "./crystals.js"
	import { flip } from "svelte/animate"

	let searchTerm, energy;
	const originalList = crystals;
	let filtered = originalList;

	function filterList() {		
		if (energy !== "empty" && searchTerm === undefined || searchTerm === "") {
			filtered = originalList.filter(c => c.energy.includes(energy));
		}else if(energy === "empty") {
			filtered = originalList;
		}else {
			filtered = originalList;
		}
	}

	function searchList() {
		if(searchTerm !== "") {
			filtered = originalList.filter(c => 
			c.name.toUpperCase().includes(searchTerm.toUpperCase()))
		}else {
			filtered = originalList
		}	
	}

	function clear() {
		filtered = originalList;
		energy = "empty";
		searchTerm = "";
	}
</script>

<svelte:head>
	<title>Crystal Grid</title>
</svelte:head>

<h1>Crystal Grid</h1>
<div class="filter-field">
	<h4>Filter Crystals:</h4>
	<SearchBox bind:search={searchTerm} on:keyup={searchList}/>
	<DropDownMenu bind:selected={energy} on:change={filterList} />
	<button on:click={clear} class="clear">Clear</button>
</div>
<section>	
    {#each filtered as crystal (crystal.name)}
    <div class="cell" animate:flip="{{duration: 300}}">
        <div class="default" style="background-image: linear-gradient({crystal.bkgColor})">
            <input type=checkbox id="{crystal.name}" class="checkbox" bind:checked={crystal.visible}>
            <label for="{crystal.name}" class="default-title">{crystal.name}</label>
            <div class="card" 
            class:expanded="{crystal.visible}"  
			style="background-image: linear-gradient({crystal.bkgColor});" 
			on:click="{() => crystal.visible = false}">
                <img src={crystal.image} alt="{crystal.name}">
				<h2>{crystal.name}</h2>
				<div class="description">
					<div class="column-1">
						<h3>Energy</h3>
						<p>{crystal.energy}</p>
						<h3>Helps With</h3>
						<p>{crystal.helps}</p>
					</div>
					<div class="column-2">
						<h3>Chakras</h3>
						<p>{crystal.chakra}</p>
						<h3>Placements</h3>
						<p>{crystal.placement}</p>
					</div>
				</div>
            </div>
        </div>
    </div>
	{/each}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
	section {
		--easing: cubic-bezier(.24,.08,.5,1);
		display: grid;
		grid-template-columns: repeat( auto-fit, 400px);
        height: 100%;
		justify-self: normal;
		overflow: hidden;
	}

	.filter-field {
		display: flex;
		justify-content: space-evenly;
		margin: 1em;
		padding-bottom: 0.3em;
		gap: 0.5em;
		border-bottom: 4px solid var(--accent);
	}

	.clear {
		color: var(--soft-white);
		background-color: var(--accent);
		border: var(--accent);
		border-radius: 4px;
	}

    .cell {
        width: 400px;
        height: 400px;
        position: relative;
    }

	.default {
		display: grid;
		position: absolute;
		height: 400px;
		width: 400px;
		place-items: center;
		text-align: center;
		color: whitesmoke;
	}
	
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		width: 50%;
		height: 50%;
		filter: brightness(1.2);
		opacity: 0;
		z-index: -1;
		cursor: pointer;
		transition: 200ms var(--easing);
	}
	
	.default-title {
		font-size: 1.4em;
		background-color: #5f0253;
		border-radius: 8px;
		padding: 0.5em;
		cursor: pointer;
	}
	
	.checkbox {
		display: none;
	}
	
	.expanded {
        position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		margin: auto;
		overflow-y: scroll;
		opacity: 1;
		z-index: 100;
		transition: 200ms var(--easing), opacity 500ms;
	}

	.description {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-evenly;
		gap: 0.8em;
		width: 80vw;
	}

	h3 {
		background-color: #5f0253;
		padding: 0.5em;
		border-radius: 4px;
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-weight: lighter;
	}

	@media (max-width: 800px) {
		section {
			grid-template-columns: repeat( auto-fit, 50vw);
		}
		.filter-field {
			font-size: 0.6em;
			gap: 0.3em;
		}

		.cell {
			width: 50vw;
			height: 25vh;
		}

		.default {
			height: 100%;
			width: 100%;
		}

		.default-title {
			font-size: 1em;
		}

		h4 {
			font-size: 0.8rem;
		}
	}
</style>