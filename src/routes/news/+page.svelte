<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Images, LatestNews } from '$lib/components';
	import { BodyContainer, VerticalSpacing } from '$lib/components/layout';
	import { updateGlobalFlags } from '$lib/stores';
	import ArchiveReviews from './archive-reviews.svelte';
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});
</script>

<BodyContainer>
	<VerticalSpacing sizing="1.5" />

	{#if mounted}
		<h1 class="tracking-widest text-xl text-my-black-50/70 uppercase font-medium" in:fade>News</h1>

		<VerticalSpacing sizing="1/3" />

		<p class="text-my-black tracking-wide leading-relaxed max-w-[768px]">
			Raie is about to start a blog all about the journey of the album and her experiences in the
			industry ... watch this space...
		</p>
	{/if}

	<VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div class="h-[10px] overflow-hidden" in:fade={{ delay: 200 }}>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div class="" in:fade={{ delay: 200 }}>
			<LatestNews />
		</div>
	{/if}

	<VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div class="h-[10px] overflow-hidden" in:fade={{ delay: 400 }}>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div in:fade={{ delay: 400 }}>
			<ArchiveReviews />
		</div>
	{/if}
</BodyContainer>
