<script>
    import { baseMoneyBar, freeBar, incomeBar, moneySymbol } from "../../routes/icons.js";

    let profilePic;
    let userName = "User Name";
    let income = 0;
    let free = 0;
</script>
<main>
    <section class="profile-section">
        <div class="picture-container">
            <img src={profilePic} alt="User Profile">
        </div>
        <h1>{userName}</h1>
    </section>
    
    <section class="money-overview">
        <svg viewBox="0 0 323 323" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
            <path d={baseMoneyBar} fill="#ac8787"/>
            <path d={freeBar} fill="#93ebbc"/>
            <path d={incomeBar} fill="#27d679"/>
            <path d={moneySymbol} fill="#93ebbc" fill-rule="nonzero"/>
        </svg>
        <div class="money-section">
            <div class="income-section">
                <h2>Income</h2>
                <h2 class="income money">${income}</h2>
            </div>
            <div class="free-section">
                <h2>Free</h2>
                <h2 class="free money">${free}</h2>
            </div>
        </div>
    </section>
</main>
