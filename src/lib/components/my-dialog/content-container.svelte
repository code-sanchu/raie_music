<script lang="ts" context="module">
	import { TransitionChild } from '@rgossiaux/svelte-headlessui';
</script>

<script lang="ts">
	export let classes: string;
</script>

<TransitionChild
	as="div"
	class={classes}
	enter="ease-out duration-300"
	enterFrom="opacity-0 scale-95"
	enterTo="opacity-100 scale-100"
	leave="ease-in duration-200"
	leaveFrom="opacity-100 scale-100"
	leaveTo="opacity-0 scale-95">
	<slot />
</TransitionChild>
