<script>
    let liabilities = 0;
    let entertainment = 0;
    let personal = 0;
</script>

<style>
    main {
        background-color: var(--purple);
        border-radius: 8px;
        box-shadow: 0px 0px 4px hsl(29, 49%, 82%);
        text-align: center;
        width: 80vw;
    }
</style>

<main>
    <h1>Monthly Expenses</h1>
    <section class="expenses-list">
        <div class="liabilities">
            <h3>Liabilities</h3>
            <h3 class="money">${liabilities}</h3>
        </div>
        <div class="entertainment">
            <h3>Entertainment</h3>
            <h3 class="money">${entertainment}</h3>
        </div>
        <div class="personal">
            <h3>Personal Care</h3>
            <h3 class="money">${personal}</h3>
        </div>
    </section>
</main>
