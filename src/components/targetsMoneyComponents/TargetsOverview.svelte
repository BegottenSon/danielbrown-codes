<script>
    import { baseMoneyBar, freeBar } from "../../routes/icons.js";
    let t1 = "target 1's Name";
    let t2 = "target 2's Name";
    let t3 = "target 3's Name";

    let baseBar = baseMoneyBar;
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
    }

    .target-bar {
        width: 10vw;
    }

    .target-bar path {
        stroke-width: 10;
    }

    .savings-bar {
        fill: var(--light-green)
    }
</style>

<main>
    <h1>Targets</h1>
    <section class="targets">
        <div class="t1">
            <svg class="target-bar" viewBox="0 0 323 323" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" >
                <path stroke-width="5" d={baseBar} fill="none" stroke="#ac8787"/>
                <path class="savings-bar" d={savingsBar}/>
            </svg>
            <h3>{t1}</h3>
        </div>
        <div class="t2">
            <svg class="target-bar" viewBox="0 0 323 323" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="4">
                <path d={baseBar} fill="#ac8787"/>
                <path class="savings-bar" d={savingsBar}/>
            </svg>
            <h3>{t2}</h3>
        </div>
        <div class="t3">
            <svg class="target-bar" viewBox="0 0 323 323" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="4">
                <path d={baseBar} fill="#ac8787"/>
                <path class="savings-bar" d={savingsBar}/>
            </svg>
            <h3>{t3}</h3>
        </div>
    </section>
</main>
