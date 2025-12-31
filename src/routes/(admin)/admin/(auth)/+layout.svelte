<div class="min-h-screen bg-base-100 flex">

  <!-- Sidebar -->
  <aside class="w-64 border-r border-base-300 p-4 hidden md:block">
    <h2 class="text-lg text-center font-bold mb-6">Admin</h2>

    <nav class="space-y-2">
      <a
        href="/admin/users"
        class="block bg-base-200 px-3 py-2 rounded"
      >
        Users
      </a>
    </nav>
  </aside>

  <!-- Main area -->
  <div class="flex-1 flex flex-col">

    <!-- Top bar -->
    <header class="h-16 border-b border-base-300 px-6 flex items-center justify-end">
      <form method="POST" action="/logout">
        <button class="btn btn-sm btn-outline">
          Logout
        </button>
      </form>
    </header>

    <!-- Content -->
    <main class="flex-1 px-6 py-6">
      <slot />
    </main>

  </div>

</div>
