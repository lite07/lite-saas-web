<script>
  import { goto } from "$app/navigation";
  export let error;
</script>

<section class="h-screen grid place-items-center bg-base-100 px-6">
  <div class="text-center space-y-6 max-w-md">

    <h1 class="text-6xl font-bold">404</h1>

    <p class="text-base-content/70">
      The page you’re looking for doesn’t exist, or was moved.
    </p>

    <div class="join-horizontal py-2">
      <button
        class="btn join-item btn-primary btn-sm w-28"
        on:click={() => goto("/")}
      >
        Go home
      </button>

      <button
        class="btn join-item btn-ghost btn-sm w-28"
        on:click={() => history.back()}
      >
        Go back
      </button>
    </div>

  </div>
</section>
