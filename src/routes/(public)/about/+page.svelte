<script>
  import { Github, Linkedin } from "lucide-svelte";
</script>

<section class="min-h-screen bg-base-100 px-6 py-20 pt-32">
  <div class="mx-auto max-w-3xl space-y-12">

    <!-- Title -->
    <header class="space-y-4">
      <h1 class="text-3xl font-bold">About This Site</h1>
      <p class="text-base-content/70">
        This is a personal side project where I build small web applications,
        experiment with ideas, and occasionally ship things that are useful.
      </p>
    </header>

    <!-- Main content -->
    <div class="space-y-6 text-base-content leading-relaxed">
      <p>
        I’m a software engineer by day, mostly working on backend systems,
        cloud infrastructure, and security-related problems. Outside of work,
        I like having a place where I can build things that caught my interest 
        or helps me make my life a little bit easier
      </p>

      <p>
        This platform is that place. Some projects here are experiments,
        some are tools I built for myself, and some are just explorations of
        ideas.
      </p>

      <p>
        The focus is simple: keep things small, understandable, and reasonably
        well-built. No over-engineering, no pretending every feature needs to
        scale to millions of users.
      </p>
    </div>

    <!-- What you'll find -->
    <div class="card bg-base-200 shadow">
      <div class="card-body space-y-4">
        <h2 class="card-title text-xl">What you’ll find here</h2>
        <ul class="list-disc list-inside space-y-2 text-sm">
          <li>Small web apps and utilities</li>
          <li>Projects built mainly for learning or personal use</li>
        </ul>
      </div>
    </div>

    <!-- Contact -->
    <div class="card bg-base-200 shadow">
      <div class="card-body space-y-4">
        <h2 class="card-title text-xl">Contact</h2>
        <p class="text-sm text-base-content/70">
          If you’re curious about the projects here or about the person behind this website, these are the easiest places
          to find me.
        </p>

        <div class="flex gap-4">
          <a
            href="https://github.com/lite07"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-outline"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github class="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/zakyyudhar"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-outline"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Closing -->
    <footer class="text-sm text-base-content/60">
      <p>
        Nothing here is meant to be perfect or permanent. If something breaks,
        it probably means I’m experimenting again.
      </p>
    </footer>

  </div>
</section>
