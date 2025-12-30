<script>
  import { goto } from "$app/navigation";

  function clickLogin() {
    goto("/sign-in");
  }
</script>

<div class="h-screen grid place-items-center bg-base-100">
  <div class="text-center space-y-6">
    <h1 class="text-4xl font-bold">Welcome!</h1>

    <button
      class="btn btn-primary w-28"
      on:click={clickLogin}
    >
      Login
    </button>
  </div>
</div>
