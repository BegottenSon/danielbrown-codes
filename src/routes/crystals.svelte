<script>	
	const crystals = [
		{
			name: "Amethyst",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603199254/Amethyst_tir0fc.jpg",
			description: "Oh look, it's purple!",
			bkgColor: " to bottom right, hsla(295, 82%, 19%, 1), hsla(342, 82%, 63%, 1)",
			visible: false,
		},
		{
			name: "Onyx",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603199255/onyx_ufkyq7.jpg",
			description: "Oh look, it's black!",
			bkgColor: " to bottom right, hsla(360, 82%, 12%, 1), hsla(200, 87%, 22%, 1)",
			visible: false,
		},
		{
			name: "Rose Quartz",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603199255/rose-quartz_i9biui.jpg",
			description: "It's so pretty!",
			bkgColor: " to bottom right, hsla(360, 96%, 46%, 1), hsla(312, 96%, 67%, 1)",
			visible: false,
		}
	]
</script>

<section>
    {#each crystals as crystal}
    <div class="cell">
        <div class="default" style="background-image: linear-gradient({crystal.bkgColor})" >
            <input type=checkbox id="{crystal.name}" class="checkbox" bind:checked={crystal.visible}>
            <label for="{crystal.name}" class="default-title">{crystal.name}</label>
            <div class="card" 
            class:expanded="{crystal.visible}"  
            style="background-image: linear-gradient({crystal.bkgColor})" 
            on:click="{() => crystal.visible = false}">
                <img src={crystal.image} alt="{crystal.name}">
                <h2>{crystal.name}</h2>
                <p>{crystal.description}</p>
            </div>
        </div>
    </div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
        height: 100%;
	}

    .cell {
        width: 40vw;
        height: 50vh;
        position: relative;
    }

	.default {
		display: grid;
		/* position: absolute; */
		height: 50vh;
		place-items: center;
		text-align: center;
		color: whitesmoke;
	}
	
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* position: absolute; */
		top: 0;
		left: 0;
		width: 5vw;
		height: 5vh;
		filter: brightness(1.2);
		opacity: 0;
		cursor: pointer;
		transition: 200ms ease-out;
	}
	
	.default-title {
		font-size: 2em;
		background-color: #02535f;
		border-radius: 8px;
		padding: 1em;
		cursor: pointer;
	}
	
	.checkbox {
		display: none;
	}
	
	.expanded {
        position: absolute;
		height: 100vh;
		width: 100vw;
		opacity: 1;
		z-index: 100;
	}
</style>