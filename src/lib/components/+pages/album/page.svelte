<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import type { ImageAsset } from '$lib/assets';
	import { albums_meta, songsArr, type AlbumKey } from '$lib/data';
	import { ImageGalleryModal, Images, Tooltip, LinkIconSwitch } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { updateGlobalFlags } from '$lib/stores';
	import { BodyContainer, VerticalSpacing } from '$lib/components/layout';
</script>

<script lang="ts">
	export let images: ImageAsset[];
	export let tracksMinWidth: number;
	export let albumKey: AlbumKey;
	export let noVideos = false;

	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});

	const album = albums_meta[albumKey];

	let imageModalIsOpen = false;

	let imageModalCurrentIndex = 0;

	const onClickImage = (index: number) => {
		imageModalCurrentIndex = index;
		imageModalIsOpen = true;
	};

	let tracksContainer: HTMLDivElement;

	$: isTracksOverflow = false;

	$: {
		if (tracksContainer) {
			const scrollWidth = tracksContainer.scrollWidth;
			const offsetWidth = tracksContainer.offsetWidth;

			isTracksOverflow = scrollWidth > offsetWidth;
		}
	}

	let userHasScrolledTracks = false;
</script>

<BodyContainer>
	<VerticalSpacing sizing="1.5" />

	{#if mounted}
		<div class="flex justify-center" in:fade>
			<div class="max-w-[900px]">
				<Images.BrickBg.HorizontalThree />

				<VerticalSpacing sizing="2/3" />

				<div class="flex gap-x-xl flex-col sm:flex-row gap-y-sm sm:items-end">
					<h1 class="text-3xl lg:text-4xl tracking-widest">{album.title}</h1>

					<p class="text-my-black-300 tracking-wide italic">{album.releaseDate}</p>
				</div>

				<div class="mt-xl">
					<ImageScroller.Container>
						{#each images as image, i}
							<ImageScroller.Image data={image} onClick={() => onClickImage(i)} />
						{/each}
					</ImageScroller.Container>
				</div>

				<div
					class="prose prose-a:decoration-my-black-50/30 prose-a:font-thin prose-a:text-inherit prose-a:underline-offset-2 mt-xl text-my-black tracking-wider max-w-[650px]">
					{#each album.description as line}
						<p>{@html line}</p>
					{/each}
				</div>

				{#if album.links.buy.length}
					<div class="flex items-center gap-md text-my-black-400 mt-xl">
						<p class="tracking-wider">Buy tracks at</p>

						<div class="flex items-center gap-md text-my-black-400">
							{#each album.links.buy as link}
								<a href={link.href} target="_blank" id={`album-${link.id}`}>
									<LinkIconSwitch type={link.id} />
								</a>
								<Tooltip text={link.name} triggeredById={`album-${link.id}`} />
							{/each}
						</div>
					</div>
				{/if}

				<div class="mt-xl">
					<h3 class="italic tracking-widest text-sm">Tracklist</h3>

					<div
						class="relative flex flex-col gap-sm mt-md overflow-x-auto max-w-[calc(100vw-2rem)] pb-lg md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200"
						bind:this={tracksContainer}
						on:scroll={(e) => {
							const scrollLeft = e.currentTarget.scrollLeft;

							if (scrollLeft > 20) {
								userHasScrolledTracks = true;
							}
						}}>
						{#each songsArr[albumKey] as track}
							<Track data={track} minWidth={tracksMinWidth} {noVideos} />
						{/each}
					</div>

					{#if isTracksOverflow && !userHasScrolledTracks}
						<div class="flex justify-end" transition:fade>
							<div class="flex items-center gap-xs text-my-black-400 text-sm italic tracking-wide">
								<p>scroll right for more...</p>
							</div>
						</div>
					{/if}
				</div>

				{#if album.links.listen.length}
					<div class="flex items-center gap-md mt-lg sm:mt-xl">
						<p class="text-my-black-400 tracking-wider">Also listen on</p>

						<div class="flex items-center gap-md text-my-black-400">
							{#each album.links.listen as link}
								<a href={link.href} target="_blank" id={`album-${link.id}`}>
									<LinkIconSwitch type={link.id} />
								</a>
								<Tooltip text={link.name} triggeredById={`album-${link.id}`} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</BodyContainer>

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	{images} />
