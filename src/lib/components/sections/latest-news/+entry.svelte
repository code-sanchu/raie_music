<script lang="ts" context="module">
	import { Icon } from '$lib/components';
	import { AlbumLaunch, GalaxyStudios, RecentGigs } from './articles';
	import TitleButton from './title-button.svelte';
</script>

<script lang="ts">
	let currentNews: 'galaxy' | 'recent gigs' | 'album launch' = 'album launch';

	let albumLaunchHeight: number;
	let galaxyStudiosHeight: number;
	let recentGigsHeight: number;
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div
		class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full overflow-hidden">
		<TitleButton
			text="Album Launch"
			onClick={() => (currentNews = 'album launch')}
			isActive={currentNews === 'album launch'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Galaxy Studios"
			onClick={() => (currentNews = 'galaxy')}
			isActive={currentNews === 'galaxy'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Recent Gigs"
			onClick={() => (currentNews = 'recent gigs')}
			isActive={currentNews === 'recent gigs'} />
	</div>

	<div
		class="mt-md lg:mt-lg transition-all ease-in-out duration-300"
		style:height={`${
			currentNews === 'album launch'
				? albumLaunchHeight
				: currentNews === 'galaxy'
				? galaxyStudiosHeight
				: recentGigsHeight
		}px`}>
		{#if currentNews === 'album launch'}
			<AlbumLaunch bind:height={albumLaunchHeight} isActive={currentNews === 'album launch'} />
		{:else if currentNews === 'galaxy'}
			<GalaxyStudios bind:height={galaxyStudiosHeight} isActive={currentNews === 'galaxy'} />
		{:else}
			<RecentGigs bind:height={recentGigsHeight} isActive={currentNews === 'recent gigs'} />
		{/if}
	</div>
</div>
