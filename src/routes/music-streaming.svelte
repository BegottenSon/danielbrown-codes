<script>
    //PAY PER STREAM AMOUNT
    let apple = 0.00735;
    let spotify = 0.00437;
    let tidal = 0.0125;
    let amazon = 0.00402;
    let youtube = 0.00069;

    let platforms = [
        {
            name: "Apple Music",
            id: "apple",
            pay: 0.00735,
            streams: 0,
            payout: 0,
        },
        {
            name: "Spotify",
            id: "spotify",
            pay: 0.00437,
            streams: 0,
            payout: 0,
        },
        {
            name: "Tidal",
            id: "tidal",
            pay: 0.0125,
            streams: 0,
            payout: 0,
        },
        {
            name: "Amazon",
            id: "amazon",
            pay: 0.00402,
            streams: 0,
            payout: 0,
        },
        {
            name: "YouTube",
            id: "youtube",
            pay: 0.00069,
            streams: 0,
            payout: 0,
        }
    ]
    
    //TOTAL STREAMS FORMULAS
    $: streamTotal = platforms.reduce(function (total, platform) {
        return total + platform.streams
    }, 0);

    //ESTIMATE PAYOUT FORMULAS
    $: payoutTotal = platforms.reduce((total, platform) => {
        let payout = platform.streams * platform.pay;
        return total + payout
    }, 0);

    //STREAMS NEEDED TO MAKE DESIRED AMOUNT
    let desiredAmount = 1500;
    let appleDesire = findDesire(apple);
    let spotifyDesire = findDesire(spotify);
    let tidalDesire = findDesire(tidal);
    let amazonDesire = findDesire(amazon)
    let youtubeDesire = findDesire(youtube);

    function findDesire(service) {
        let amount = Math.round(desiredAmount / service);
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

</script>

<style>

    /* SECTIONS */
    .payouts-services {
        display: flex;
        background-color: rgb(22, 77, 77);
        border-radius: 8px;
        padding: 1em;
    }

    .service-chart .service-names {
        margin-right: 0.8em;
    }

    .monthly-estimator {
        background-color: rgb(22, 77, 77);
        border-radius: 8px;
        padding: 1em;
        width: 70vw;
    }

    .estimator-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    .estimator-grid .streams {
        justify-self: center;
    }

    .estimator-grid .title {
        grid-column: 1/2;
    }

    #stream-total {
        grid-column: 5/6;
    }

    #payout-total {
        grid-column: 6/7;
    }

    #payout {
        justify-self: center;
        /* margin-left: 0.5em; */
    }

    .desired-amount {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        background-color: rgb(22, 77, 77);
        border-radius: 8px;
        align-content: center;
        padding: 1em;
    }

    .desired-amount .service-names {
        margin-right: 0.8em;
    }

    /* THE NUMBERS */

    .streams {
        appearance: none;
        -moz-appearance: textfield;
        background: none;
        border: none;
        border-bottom: olive;
        font-size: 1em;
        margin: 0;
        height: 1em;
        width: 3.5em;
    }

    /* COLORING NUMBERS BY STREAMING SERVICE */
    .apple {
        color: #FF3450;
    }

    .spotify {
        color: #5D9548;
    }

    .tidal {
        color: rgb(27, 27, 27);
    }

    .amazon {
        color: rgb(221, 73, 105);
    }

    .youtube {
        color: #BC2C30;
    }

</style>

<svelte:head>
   <title>Music Streaming Estimator</title>
</svelte:head>

<h1>Music Streaming Estimator</h1>
<h2>Streaming Payouts By Music Services</h2>
<section class="payouts-services">
    <div class="service-chart">
        {#each platforms as platform}
            <h3 class="service-names">{platform.name}</h3>
        {/each}
    </div>
    <div class="pay-per-stream">
        {#each platforms as platform}
            <h3 class={platform.id}>{platform.pay}</h3>
        {/each}
    </div>
    
</section>
<h2>Monthly Estimator</h2>
<section class="monthly-estimator">
    <div class="estimator-grid">
        {#each platforms as platform}
            <h3 class="service-names">{platform.name}</h3>
        {/each}
        <h3 class="title">Streams</h3>
        {#each platforms as platform}
            <input class="streams"
            type="number"
            bind:value={platform.streams}
            >
        {/each}
        <h3 class="title">Estimate Payout</h3>
        {#each platforms as platform}
            <h3 class="{platform.id}" id="payout">${(platform.pay * platform.streams).toFixed(2)}</h3>
        {/each}
        <h3 class="title">Total</h3>
        <h3 id="stream-total">{streamTotal}</h3>
        <h3 id="payout-total">${payoutTotal.toFixed(2)}</h3>
    </div>
</section>
<h2>Streams Needed to Make ${desiredAmount}</h2>
<section class="desired-amount">
    {#each platforms as platform}
        <h3 class="service-names">{platform.name}</h3>
    {/each}

    <h3 class="apple streams">{appleDesire}</h3>
    <h3 class="spotify streams">{spotifyDesire}</h3>
    <h3 class="tidal streams">{tidalDesire}</h3>
    <h3 class="amazon streams">{amazonDesire}</h3>
    <h3 class="youtube streams">{youtubeDesire}</h3>
</section>