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
    }
</style>
<main>
    <Overview />
    <ExpensesOverview />
    <TargetsOverview />
</main>
