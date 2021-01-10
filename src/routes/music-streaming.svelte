<script>
    import Transition from "../components/Transition.svelte";
    //PAY PER STREAM AMOUNT
    let platforms = [
        {
            name: "Apple Music",
            id: "apple",
            pay: 0.00735,
            streams: 0,
            payout: "204,082"
        },
        {
            name: "Spotify",
            id: "spotify",
            pay: 0.00437,
            streams: 0,
            payout: "343,249",
        },
        {
            name: "Tidal",
            id: "tidal",
            pay: 0.0125,
            streams: 0,
            payout: "120,000",
        },
        {
            name: "Amazon",
            id: "amazon",
            pay: 0.00402,
            streams: 0,
            payout: "373,134",
        },
        {
            name: "YouTube",
            id: "youtube",
            pay: 0.00069,
            streams: 0,
            payout: "2,173,913",
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

    function calculateAmount() {
        for( let platform in platforms) {
            let thePay = Math.round(desiredAmount / platforms[platform].pay);
            platforms[platform].payout = thePay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }   
    }
</script>

<style>
    .wrapper {
        --box-color: rgb(44, 31, 102);
        display: grid;
        place-items: center;
        width: 100%;
        padding-bottom: 10em;
        background-color: rgb(34, 29, 54);
    }

    /* SECTIONS */
    .payouts-services {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        background-color: var(--box-color);
        border-radius: 8px;
        width: 40vw;
        padding: 1em;
    }

    .service-chart .service-names {
        margin-right: 0.8em;
    }

    .service-chart {
        display: flex;
        justify-content: space-between;
    }

    .monthly-estimator {
        background-color: var(--box-color);
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

    .estimator-grid .apple {
        grid-column: 2/3;
    }

    .estimator-grid .service-names {
        justify-self: center;
    }

    #stream-total {
        grid-column: 5/6;
    }

    #payout-total {
        grid-column: 6/7;
    }

    #payout {
        justify-self: center;
    }

    .desired-amount {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        background-color: var(--box-color);
        border-radius: 8px;
        align-content: center;
        padding: 1em;
    }

    .desired-amount .service-names {
        margin-right: 0.8em;
    }

    .headers {
        color: var(--box-color);
        font-size: 2em;
        text-align: center;
        -webkit-text-stroke: 0.6px whitesmoke;
        margin-top: 2em;
    }

    .instructions {
        font-size: 16px;
        width: 50ch;
    }

    /* THE NUMBERS */
    .monthly-estimator .streams {
        border-bottom: 2px solid rgb(0, 128, 122);
    }

    .streams {
        appearance: none;
        -moz-appearance: textfield;
        background: none;
        border: none;
        font-size: 1em;
        margin: 0;
        height: 1em;
        width: 3.5em;
    }

    .amount-input {
        appearance: none;
        -moz-appearance: textfield;
        background: none;
        border: none;
        border-bottom: 2px solid whitesmoke;
        color: whitesmoke;
        font-size: 1em;
    }

    .money-sign{
        color: whitesmoke;
    }

    .payout-group {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* COLORING NUMBERS BY STREAMING SERVICE */
    .apple {
        color: #FF3450;
    }

    .spotify {
        color: #5D9548;
    }

    .tidal {
        color: rgb(139, 132, 132);
    }

    .amazon {
        color: rgb(221, 73, 105);
    }

    .youtube {
        color: #BC2C30;
    }

    @media(max-width: 550px) {
        .payouts-services {
            width: 70vw;
        }

        .payouts-services .service-names {
            font-size: 1.2em;
        }

        .monthly-estimator {
            width: 92vw;
        }

        .estimator-grid .streams {
            font-size: 16px;
        }

        .service-names, .title, .pay-per-stream {
            font-size: 14px;
        }

        .service-chart .pay {
            font-size: 1.2em;
        }

        .streams {
            font-size: 1.2em;
            width: 10vw;
        }

        .instructions {
        font-size: 14px;
        width: 30ch;
        }
    }
</style>

<svelte:head>
   <title>Music Streaming Estimator</title>
</svelte:head>
<!-- <Transition> -->
<div class="wrapper">
<h1>Music Streaming Estimator</h1>
<h2 class="headers">Streaming Payouts By Music Services</h2>
<p class="instructions">Amount per stream is updated from the most current data available from each streaming service</p>
<section class="payouts-services">
        {#each platforms as platform}
        <div class="service-chart">
            <h3 class="service-names">{platform.name}</h3>
            <h3 class="{platform.id} pay"><span class="money-sign">$</span>{platform.pay}</h3>
        </div>
        {/each}
</section>
<h2 class="headers">Monthly Estimator</h2>
<p class="instructions">Click on any stream number under the "Stream" section to add the amount of streams you're receiving</p>
<section class="monthly-estimator">
    <div class="estimator-grid">
        {#each platforms as platform}
            <h3 class="service-names {platform.id}">{platform.name}</h3>
        {/each}
        <h3 class="title">Streams</h3>
        {#each platforms as platform}
            <input class="streams {platform.id}"
            type="number"
            bind:value={platform.streams}
            >
        {/each}
        <h3 class="title">Estimate Payout</h3>
        {#each platforms as platform}
            <h3 class="{platform.id}" id="payout"><span class="money-sign">$</span>{platform.streams? (platform.pay * platform.streams).toFixed(2) : 0}</h3>
        {/each}
        <h3 class="title">Total</h3>
        <h3 id="stream-total">{streamTotal ? streamTotal : 0}</h3>
        <h3 id="payout-total"><span class="money-sign">$</span>{payoutTotal ? payoutTotal.toFixed(2) : 0}</h3>
    </div>
</section>
<h2 class="headers">Streams Needed to Make ${desiredAmount === undefined ? 0 : desiredAmount}</h2>
<p class="instructions">Input the desired amount of money you're looking to make in a month from streaming and the following chart will show the numbers per streaming platform: <input type="number" class="amount-input" bind:value={desiredAmount} on:keyup={calculateAmount}></p>
<section class="desired-amount">
    {#each platforms as platform}
    <div class="payout-group">
        <h3 class="service-names">{platform.name}</h3>
        <h3 class="streams {platform.id}">{desiredAmount === undefined ? 0 : platform.payout}</h3>
    </div>
    {/each}
</section>
</div>
<!-- </Transition> -->