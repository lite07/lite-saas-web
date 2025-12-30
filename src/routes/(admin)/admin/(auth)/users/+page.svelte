<script>
  import { goto } from "$app/navigation";

  // Mock data for now
  const users = [
    {
      id: "u_001",
      username: "zaky",
      email: "zaky@example.com",
      lastLogin: "2025-02-10 09:42"
    },
    {
      id: "u_002",
      username: "admin",
      email: "admin@example.com",
      lastLogin: "2025-02-11 14:18"
    },
    {
      id: "u_003",
      username: "test.as",
      email: "test.user@example.com",
      lastLogin: "2025-02-08 21:03"
    }
  ];

  function goToDetail(id) {
    goto(`/admin/users/${id}`);
  }
</script>

<section class="min-h-screen bg-base-100 px-6 py-20 pt-32">
  <div class="mx-auto max-w-6xl space-y-8">

    <!-- Header -->
    <header class="space-y-2">
      <h1 class="text-3xl font-bold">Users</h1>
      <p class="text-sm text-base-content/70">
        Administrative user listing. Authentication and permissions not enforced yet.
      </p>
    </header>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="table table-xs w-full">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Last Login</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {#each users as user}
            <tr>
              <td class="font-mono text-sm">{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td class="text-sm">{user.lastLogin}</td>
              <td class="text-right">
                <button
                  class="btn btn-xs btn-outline"
                  on:click={() => goToDetail(user.id)}
                >
                  Details
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

  </div>
</section>
