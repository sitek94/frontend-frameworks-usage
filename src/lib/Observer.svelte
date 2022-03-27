<script lang="ts">
  import { onMount } from 'svelte'

  export let onEnter

  let ref
  onMount(() => {
    const io = new IntersectionObserver(entries => {
      const [entry] = entries

      if (entry.isIntersecting) {
        onEnter()
      }
    })

    io.observe(ref)
  })
</script>

<div bind:this={ref}>
  <slot />
</div>
