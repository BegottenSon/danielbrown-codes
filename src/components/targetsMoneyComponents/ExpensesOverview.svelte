<script>
    let liabilities = 0;
    let entertainment = 0;
    let personal = 0;
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

    .expenses-list {
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
        margin: 1em 2em;
    }

    .list-item {
        display: flex;
        justify-content: space-between;
    }

    .money {
        color: var(--off-yellow);
    }
</style>

<main>
    <h1>Monthly Expenses</h1>
    <section class="expenses-list">
        <div class="liabilities list-item">
            <h3>Liabilities</h3>
            <h3 class="money">${liabilities}</h3>
        </div>
        <div class="entertainment list-item">
            <h3>Entertainment</h3>
            <h3 class="money">${entertainment}</h3>
        </div>
        <div class="personal list-item">
            <h3>Personal Care</h3>
            <h3 class="money">${personal}</h3>
        </div>
    </section>
</main>
