<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Link } from '$lib/components/prose';

	import Image from './_image.svelte';
	import Container from './_container.svelte';
</script>

<Container styles="pt-[12px]">
	<div class="w-full md:w-1/2 md:float-right md:pl-md">
		<Image img={images.galaxy['full-band']} />
	</div>

	<p class="mt-0">
		Raie successfully raised £4000 to help pay for the trip to Belgium’s
		<Link href="https://galaxystudios.com/">Galaxy Studios</Link>.
	</p>

	<p>
		This was an opportunity of a lifetime – to record an album in six days at a world leading studio
		– that houses the quietest room in the world by the way!
	</p>

	<p>
		Without all our ‘friends of Raie’ and their generous contributions to the Crowdfunder, it’s
		doubtful we’d have been able to make the trip … but with the money raised, a really generous
		deal from Galaxy and a truly loyal, dedicated and focused band of troubadours … we managed to
		pay our rehearsal space, our Galaxy bill and feed and Eurotunnel (with gas) and fly the band …
		and sort accommodation for the string section too! So a huge thankyou to the Crowdfunders! Of
		course … you are all on the guest list for the album launch …
	</p>
	<p>
		This news bulletin can’t go out without a big shout out to
		<Link href="https://www.wesonator.com/">Wes Maebe</Link>.
	</p>
	<p>
		Wes is employed regularly by Galaxy and he convinced the studio that Raie were worth ‘a deal’ –
		he really believes in the project and is now a co-writer with Raie … plus his exquisite guitar
		playing features on the album; Raie and Wes have secured a fruitful, long lasting ‘music
		brother/sister’ bond over a decade!
	</p>
	<p>
		Galaxy couldn’t have been more welcoming – the studio hosted us with free coffees (that the band
		really needed on 10-12 hour sessions under pressure!) … and every morning we had a visit from
		CEO Wilfried-Van-Baelen – the friendliest guy who seems to have never forgotten his early
		‘chicken coop’ days of the studio’s history – he tells it with real humility - very
		entertaining!
	</p>

	<p>
		The lunch area and grounds were sublime (the band were SO happy!) and the studio sound
		(including Steinway piano and a real Hammond set up) was … well … check it out for yourself –
		the album goes on sale November 9th – see the links page…
	</p>
</Container>
