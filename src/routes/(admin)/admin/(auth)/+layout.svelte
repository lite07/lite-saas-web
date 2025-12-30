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

  <!-- Main content -->
  <main class="flex-1 px-6 py-20">
    <slot />
  </main>

</div>
