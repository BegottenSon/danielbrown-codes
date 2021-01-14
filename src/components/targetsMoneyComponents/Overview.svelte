<script>
    let profilePic;
    let userName = "User Name";
    let income = 0;
    let free = 0;
</script>

<section class="profile-section">
    <div class="picture-container">
        <img src={profilePic} alt="User Profile">
    </div>
    <h1>{userName}</h1>
</section>

<section class="money-overview">
    <svg></svg>
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