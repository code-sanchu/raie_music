<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { voiceCoaching } from '$lib/data';

	import { images } from '$lib/assets';

	import { updateGlobalFlags } from '$lib/stores';

	import { Caption, ImageGalleryModal, Images, Picture } from '$lib/components';
	import { BodyContainer, VerticalSpacing } from '$lib/components/layout';
	import PersonalTestimony from './personal-testimony.svelte';
	import CompanyTestimony from './company-testimony.svelte';

	const galleryImages = [
		images.dog_carpet,
		images.crew_and_artists_red_brick_angels_GMS,
		images.jill_cumberbatch_mandolin,
		images.naz_and_nate_warmin_up,
		images.md_and_producer_chillin_GMS,
		images.crew_and_artists_red_brick_angels_GMS_2,
		images.galaxy['christiano-bass']
	];
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});

	let imageModalIsOpen = false;

	let imageModalCurrentImageIndex = 0;
</script>

<BodyContainer>
	<VerticalSpacing sizing="1.5" />

	{#if mounted}
		<div in:fade>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<VerticalSpacing sizing="half" />

	{#if mounted}
		<div class="" in:fade>
			<div>
				<div class="flex justify-between gap-xl">
					<div>
						<h1 class="text-3xl lg:text-4xl tracking-widest">Voice Coaching</h1>

						<h2 class="text-xl tracking-widest uppercase mt-lg">Vocal i.d</h2>

						<h3 class="text-lg tracking-widest mt-md italic">
							Individually designed by Rachel Bennett
						</h3>
						<p class="mt-sm prose text-my-black tracking-wide">
							Blending the personal touch with a programme designed specifically for your individual
							singing voice, Rachel will create a workout to suit your lifestyle.
						</p>

						<div class="relative self-start shrink-0 sm:hidden py-sm">
							<Picture
								imageClass={`h-[320px] sm:h-[300px] md:h-[420px]`}
								meta={images.singing_coach[1].src}
								sizes={`${images.singing_coach[1].naturalDimensions.width}px`}
								alt="" />

							<Caption extraClasses="decoration-my-black-200"
								>Portrait of Raie by <a
									class="italic"
									href="https://www.sarashamsavari.com/"
									target="_blank">Sara Samshavari</a
								></Caption>
						</div>

						<h3 class="text-lg tracking-widest mt-xs sm:mt-md italic">
							Realise and release your true potential
						</h3>

						<p class="mt-sm prose text-my-black tracking-wide">
							Let Rachel help you realise and release the natural beauty of your voice. Learn about
							breath support and body awareness, phrasing and clarity; hone performance skills,
							repertoire, and stylistic range.
						</p>
					</div>

					<div class="relative self-start shrink-0 hidden sm:block">
						<Picture
							imageClass={`h-[320px] sm:h-[300px] md:h-[420px]`}
							meta={images.singing_coach[1].src}
							sizes={`${images.singing_coach[1].naturalDimensions.width}px`}
							alt="" />

						<div class="mt-sm">
							<Caption extraClasses="decoration-my-black-200"
								>Portrait of Raie by <a
									class="italic"
									href="https://www.sarashamsavari.com/"
									target="_blank">Sara Samshavari</a
								></Caption>
						</div>

						<div class="absolute -bottom-sm right-0 w-full translate-y-full">
							<Images.BrickBg.Horizontal />
						</div>
					</div>
				</div>

				<h3 class="text-lg tracking-widest mt-md italic">Systematic & diagnostic</h3>
				<p class="mt-sm prose text-my-black tracking-wide">
					Rachel's analytical skills are honed to a level of precision that only many years of
					experience can provide. She shares her deep knowledge of both the physiology and
					psychology of the vocalists' art with sensitivity & skill. She is able to quickly correct
					technical weaknesses, but crucially, she can show you how to nurture the artist within
					yourself by employing a completely holistic approach in her practice.
				</p>

				<h3 class="text-lg tracking-widest mt-md italic">Maturity and experience</h3>
				<p class="mt-sm prose text-my-black tracking-wide">
					Rachel Bennett has been teaching singers in one-to-one and class settings with real
					success for 40 years. She has worked consistently as a singer, composer, songwriter, and
					MD for theatre, television & recording studios across London. Rachel currently teaches
					singers at Goldsmiths University for the Popular Music Degree and the Masters BMus
					Programmes where she has taught for over a decade; she has taught across Undergraduate and
					Masters programmes for almost decade at Rose Bruford College/International Drama School;
					she ran the Singing department for the Trinity accredited Diploma in Professional Musical
					Theatre at WAC Performing Arts and Media College for several years. She has taught
					regularly for the Albany Theatre and leads their Entelechy Arts Meet Me weekly choir; she
					taught on programmes for Urban Development over several years and ran workshops for The
					National Theatre. She has worked internationally as both a teacher and a course
					consultant. 'I can work with you to build your technique, increase your understanding and
					develop your confidence as a singer and a performer — in any setting' Rachel coaches
					professional actors for plays and musicals; recent work includes vocal support for: The
					ensemble at The English Touring Co. productions of Jekyll and Hyde and Cabaret; Sasha
					Frost — Black British Theatre Award winner for best Supporting Actress in Folk at
					Hampstead Theatre; Carys McQueen for Cabaret -WE; Nina Toussanint White for Etienne
					Sisters at Theatre Royal Stratford East … Rachel also supports vocalists for band work;
					recent work includes Catrin Vincent for Another Sky, Jesse James McFarlane for The
					Wisebloods, Louise MacPhail for Prima Queen, Anna Papadimitriou for HAWXX … Rachel can
					come to your school, college or group to run one or a series of workshops tailored to suit
					your needs — a Masterclass, a fun singing day, detailed skills acquisition or repertoire
					and arrangement. Rachel works with singers from varied backgrounds, skill levels and
					experience. She can facilitate material for choral ensemble and coaches theatre and
					artiste showcases as well as preparation for audition technique.
				</p>

				<div class="border p-md mt-xl grid max-w-[65ch] border-my-black-200 rounded-sm">
					<div>
						<h2
							class="text-lg tracking-widest uppercase italic border-b border-my-black-400 inline-block">
							Rates
						</h2>

						<p
							class="mt-sm border-my-black-50/20 prose text-my-black italic max-w-[500px] tracking-wide">
							Tuition rates on a sliding scale.
						</p>

						<div class="mt-xs flex items-end gap-sm italic">
							<div class="flex flex-wrap items-end gap-x-md gap-y-xs">
								<div class="flex flex-wrap gap-xs">
									<span>E:</span>
									<a class="block tracking-wide" href="mailto:rachel@raiemusic.com" target="_blank"
										>rachel@raiemusic.com</a>
								</div>

								<div class="flex gap-xs">
									<span>P:</span>
									<p class="tracking-wide">07949 876 703</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2 class="text-xl tracking-widest uppercase mt-xl">Company Testimony</h2>

				{#each voiceCoaching.companyTestimony as testimony}
					<CompanyTestimony {testimony} />
				{/each}

				<h2 class="text-xl tracking-widest uppercase mt-xl">Personal Testimony</h2>

				<div class="flex flex-col gap-sm">
					{#each voiceCoaching.personalTestimony as testimony}
						<PersonalTestimony {testimony} />
					{/each}
				</div>
			</div>

			<div class="relative self-start shrink-0 hidden">
				<Picture
					imageClass={`h-[420px]`}
					meta={images.singing_coach[1].src}
					sizes={`${images.singing_coach[1].naturalDimensions.width}px`}
					alt="" />

				<div class="absolute -bottom-sm right-0 w-full translate-y-full">
					<Images.BrickBg.Horizontal />
				</div>
			</div>
		</div>
	{/if}
</BodyContainer>

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
