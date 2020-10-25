<script>	
	const crystals = [
		{
			name: "Amethyst",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603199254/Amethyst_tir0fc.jpg",
			description: "Oh look, it's purple!",
			energy: "Amplifies",
			chakra: "Third eye | Crown",
			helps: "Intuition and insight | insomnia | Safe travel | Connecting to higher self & Divine | Creativity | Manifestation | Stress & anxiety | Nightmares | Addiction",
			placement: "Place on third eye chakra | above crown of head | near your bed | under pillow",
			bkgColor: " to bottom right, hsla(295, 82%, 19%, 1), hsla(342, 82%, 63%, 1)",
			visible: false,
		},
		{
			name: "Black Tourmaline",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603593580/black-tourmaline_ok2upr.jpg",
			description: "Oh look, it's black!",
			energy: "Absorbs",
			chakra: "Root",
			helps: "Psychic Protection | Protect Against Negativity | Grounding | Stress Release | Cleansing Negative Emotions",
			placement: "Pants pocket | Near root chakra | Next to bed | Between you & source of negativity",
			bkgColor: " to bottom right, hsla(360, 82%, 12%, 1), hsla(200, 87%, 22%, 1)",
			visible: false,
		},
		{
			name: "Rose Quartz",
			image: "https://res.cloudinary.com/begottenson/image/upload/c_scale,w_400/v1603199255/rose-quartz_i9biui.jpg",
			description: "It's so pretty!",
			energy: "Amplifies",
			chakra: "Heart",
			helps: "Compassion | Kindness | Unconditional Love | Self-Love | Emotional Healing | Joy | Peace | Playfulness",
			placement: " On a necklace | Bracelet | Ring (commitment finger) | Heart chakra",
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

	@keyframes fixedEase {
		from {
			position: absolute;
		}
		to {
			position: fixed;
		}
	}
</style>