<style>
    .login-box {
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.95);
        height: fit-content;
        width: 360px;
    }
</style>

<script>
    import Navbar from "../../components/navbar.svelte"
</script>

<Navbar />

<div class="center-content" style="flex-direction: column;">
    <div class="center-content login-box" style="flex-direction: column;">
        <h1>Login</h1>
        <input class="input my-4" type="text" placeholder="Username"  />
        <input class="input mb-4" type="password" placeholder="Password" />
        <div>
            <button class="btn btn-primary">Login</button>
            <button class="btn btn-secondary">Register</button>
        </div>
    </div>
</div>




