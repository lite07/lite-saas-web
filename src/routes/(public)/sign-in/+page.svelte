<script>
  export let form;
</script>

<div class="h-screen grid place-items-center bg-base-100">
  <div class="card w-[360px] bg-base-200 shadow-xl">
    <div class="card-body space-y-4">
      <h1 class="text-2xl font-bold text-center">Login</h1>

      <form method="POST" class="space-y-4">
        <input
          name="email"
          class="input input-bordered w-full"
          placeholder="Email"
          required
        />

        <input
          name="password"
          type="password"
          class="input input-bordered w-full"
          placeholder="Password"
          required
        />

        {#if form?.invalid}
          <p class="text-sm text-error text-center">
            Invalid username or password
          </p>
        {/if}

        <div class="flex justify-between pt-2">
          <button class="btn btn-primary" type="submit">
            Login
          </button>

          <button
            type="button"
            class="btn btn-secondary btn-outline"
            disabled
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
