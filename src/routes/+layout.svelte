<script lang="ts">
  import '../app.css';
  import { themeClass } from './../styles/theme.css';

  let { children } = $props();
</script>

<div class={themeClass}>
  {@render children()}
</div>
