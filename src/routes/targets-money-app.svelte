<script>
    import Overview from "../components/targetsMoneyComponents/Overview.svelte"
    import ExpensesOverview from "../components/targetsMoneyComponents/ExpensesOverview.svelte"
    import TargetsOverview from "../components/targetsMoneyComponents/TargetsOverview.svelte"

</script>

<svelte:head>
    <title>Targets Money</title>
</svelte:head>

<style>
    main {
        --main-green: #27d679;
        --light-green: #93ebbc;
        --purple: hsl(305, 89%, 15%);
        --dark-purple: hsl(305, 89%, 10%);
        --warm-blue: hsl(211, 81%, 15%);
        --wheat: hsl(29, 49%, 82%);
        --off-yellow: hsl(61, 60%, 73%);
        background-image: radial-gradient(var(--purple), var(--dark-purple));
        display: grid;
        gap: 2em;
        place-items: center;
    }
</style>
<main>
    <Overview />
    <ExpensesOverview />
    <TargetsOverview />
</main>
