import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
	title: ReactNode;
	description: string;
	button?: ReactNode;
	buttons?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
	<header className="text-center">
		<div className="rounded-2xl border border-primary-500/20 bg-gradient-to-b from-primary-500/5 to-transparent px-6 py-8 md:px-12 md:py-12">
			<h1 className="whitespace-pre-line text-4xl font-extrabold leading-tight text-text-white drop-shadow-sm md:text-5xl lg:text-6xl">
				{props.title}
			</h1>
			<div className="mx-auto mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-white/90 md:mt-8 md:text-xl">
				{props.description}
			</div>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:mt-12 md:gap-6">
				{props.buttons ?? props.button}
			</div>
		</div>
	</header>
);

export { HeroOneButton };
