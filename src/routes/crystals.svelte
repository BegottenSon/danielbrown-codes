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
let y;
</script>

<svelte:head>
	<title>Crystal Grid</title>
</svelte:head>

<svelte:window bind:innerHeight={y}/>

<section>
    {#each crystals as crystal}
    <div class="cell">
        <div class="default" style="background-image: linear-gradient({crystal.bkgColor})" >
            <input type=checkbox id="{crystal.name}" class="checkbox" bind:checked={crystal.visible}>
            <label for="{crystal.name}" class="default-title">{crystal.name}</label>
            <div class="card" 
            class:expanded="{crystal.visible}"  
			style="background-image: linear-gradient({crystal.bkgColor});" 
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
		--easing: cubic-bezier(.24,.08,.5,1);
		display: grid;
		grid-template-columns: repeat( auto-fit, 400px);
        height: 100%;
		justify-self: normal;
		overflow: hidden;
	}

    .cell {
        width: 400px;
        height: 50vh;
        position: relative;
    }

	.default {
		display: grid;
		position: absolute;
		height: 100%;
		width: 100%;
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
		font-size: 2em;
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
		opacity: 1;
		z-index: 100;
		transition: 200ms var(--easing), opacity 500ms;
		/* animation: fixedEase 200ms forwards; */
	}

	@keyframes fixedEase {
		from {
			position: absolute;
		}
		to {
			position: fixed;
		}
	}
</style>