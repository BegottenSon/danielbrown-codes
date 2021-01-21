<script>
    import { freeBar, baseBar, musicNote, airplane } from "../../routes/icons.js";
    let t1 = "Push 2";
    let t2 = "Trip";
    let t3 = "Plugin";

    let savingsBar = freeBar;
</script>

<style>
    main {
        background-color: var(--purple);
        border-radius: 8px;
        box-shadow: 0px 0px 4px var(--wheat);
        text-align: center;
        width: 80vw;
    }

    h1 {
        color: var(--wheat);
        font-family: Arial, Helvetica, sans-serif;
        margin: 0.5em;
    }

    .targets {
        display: flex;
        justify-content: space-around;
    }

    .target-bar {
        width: 12vw;
    }

    .target-bar path {
        stroke-width: 10;
    }

    .base-bar {
        fill: #ac8787;
    }

    .savings-bar {
        fill: var(--light-green)
    }

    .icon {
        transform: translate(32%, 32%);
    }
</style>

<main>
    <h1>Targets</h1>
    <section class="targets">
        <div class="t1">
            <svg class="target-bar" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <path d={baseBar} class="base-bar"/>
                <path d={baseBar} class="savings-bar"/>
                <path d={musicNote} class="icon" fill="#93ebbc"/>
            </svg>
            <h3>{t1}</h3>
        </div>
        <div class="t2">
            <svg class="target-bar" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <path d={baseBar} class="base-bar"/>
                <path d={baseBar} class="savings-bar"/>
                <path d={airplane} class="icon" fill="#93ebbc"/>
            </svg>
            <h3>{t2}</h3>
        </div>
        <div class="t3">
            <svg class="target-bar" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <path d={baseBar} class="base-bar"/>
                <path d={baseBar} class="savings-bar"/>
                <path d={musicNote} class="icon" fill="#93ebbc"/>
            </svg>
            <h3>{t3}</h3>
        </div>
    </section>
</main>
