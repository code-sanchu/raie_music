import {
	AppleLogo,
	CircleNotch,
	Equalizer,
	FacebookLogo,
	Headphones,
	InstagramLogo,
	MusicNotesSimple,
	Parallelogram,
	Pause,
	Play,
	ShoppingCartSimple,
	SkipForward,
	SoundcloudLogo,
	SpeakerSimpleHigh,
	SpeakerSimpleSlash,
	SpotifyLogo,
	Stop,
	TwitterLogo,
	YoutubeLogo,
	Video,
	MusicNotes,
	CaretDown,
	X,
	DotsSix,
	ArrowRight,
	Quotes
} from 'phosphor-svelte';
import type { ComponentProps } from 'svelte';

export type IconProps = ComponentProps<Play>;

export const Icon = {
	Play,
	Next: SkipForward,
	Volume: SpeakerSimpleHigh,
	Mute: SpeakerSimpleSlash,
	Pause,
	Stop,
	Listen: Headphones,
	Shop: ShoppingCartSimple,
	Instagram: InstagramLogo,
	Facebook: FacebookLogo,
	Soundcloud: SoundcloudLogo,
	Youtube: YoutubeLogo,
	Twitter: TwitterLogo,
	AudioPlayer: Equalizer,
	Apple: AppleLogo,
	Spotify: SpotifyLogo,
	Itunes: MusicNotesSimple,
	Bandcamp: Parallelogram,
	Album: CircleNotch,
	Video,
	Lyrics: MusicNotes,
	CaretDown,
	X,
	Handle: DotsSix,
	ArrowRight,
	Quotes
};
