<script>
    import Transition from "../components/Transition.svelte"
    import MusicAppIdea from "../components/MusicAppIdea.svelte";

</script>
<svelte:head>
   <title>My Code</title>
</svelte:head>

<Transition>
<main>
    <h2><a href="music-streaming">Music Streaming Estimator</a></h2>
    <p> 
        I created a Numbers spreadsheet for estimating music streaming payouts. 
        Decided to put my Svelte learning into practice and re-create that Music Streaming Estimator for the web.
        To all my independant musicians and artists, enjoy!
    </p>
    <h2><a href="crystals">Crystals Grid</a></h2>
    <p>As a weekend project, that is easliy turning into an ongoing populating of crystals, I
        created this crystal grid page. An easy way to lookup many crystals and view where to 
        place them and use cases. Tap on the title to check out the crystals.
    </p>

    <!-- <h2>My Music App Idea</h2> -->
    <!-- <MusicAppIdea /> -->

    <h2>Array Reduce Practice</h2>
    <iframe height="480" scrolling="no" title="Array Reduce Practice" src="https://codepen.io/BegottenSon/embed/wvGaGGO?height=441&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/BegottenSon/pen/wvGaGGO'>Array Reduce Practice</a> by Daniel Brown
        (<a href='https://codepen.io/BegottenSon'>@BegottenSon</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
    
    <h2>Modal Practice</h2>
    <iframe height="480"  scrolling="no" title="Modal Learning" src="https://codepen.io/BegottenSon/embed/OKbbEo?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/BegottenSon/pen/OKbbEo'>Modal Learning</a> by Daniel Brown
        (<a href='https://codepen.io/BegottenSon'>@BegottenSon</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
</main>
</Transition>

<style>
    main {
        max-width: 56em;
    }
    
    iframe {
        width: 100%;
        margin-bottom: 3em;
    }

    h2 {
        text-align: center;
        color: var(--blue);
    }

    @media (max-width: 530px) {
        main {
            padding: 0 1em;
        }
    }
</style>