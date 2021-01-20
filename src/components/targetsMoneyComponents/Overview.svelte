<script>
    import { baseMoneyBar, freeBar, incomeBar, moneySymbol } from "../../routes/icons.js";

    let profilePic = "danb-codes.jpg";
    let userName = "User Name";
    let income = 0;
    let free = 0;
</script>

<style>

    main {
        background-color: var(--warm-blue);
        display: flex;
        place-items: center;
        justify-content: center;
        margin-top: 5em;
        text-align: center;
        width: 100%;
    }

    .profile-section {
        margin-right: 1em;

    }

    img {
        height: 15vh;
        clip-path: circle(50% at 50%);
    }

    h1 {
        color: whitesmoke;
        font-family: League Gothic;
    }

    .money-overview {
        margin-top: 1.6em;
    }

    .money-section {
        display: flex;
        justify-content: space-between;
        width: 40vw;
    }

    .money-bar {
        height: 15vh;
    }

    .freeBar{
        fill: var(--light-green);
    }

    .incomeBar{
        fill: var(--main-green);
    }

    .moneySymbol{
        fill: var(--light-green);
    }

    .income {
        color: var(--main-green);
    }

    .free {
        color: var(--light-green);
    }

</style>

<main>
    <section class="profile-section">
        <div class="picture-container">
            <img src={profilePic} alt="User Profile">
        </div>
        <h1>{userName}</h1>
    </section>
    
    <section class="money-overview">
        <svg class="money-bar" viewBox="0 0 323 323" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
            <path d={baseMoneyBar} fill="#ac8787"/>
            <path class="freeBar" d={freeBar}/>
            <path class="incomeBar" d={incomeBar} />
            <path class="moneySymbol" d={moneySymbol} fill-rule="nonzero"/>
        </svg>
        <div class="money-section">
            <div class="income-section">
                <h2>Income</h2>
                <h2 class="income money">${income}</h2>
            </div>
            <div class="free-section">
                <h2>Ballin</h2>
                <h2 class="free money">${free}</h2>
            </div>
        </div>
    </section>
</main>