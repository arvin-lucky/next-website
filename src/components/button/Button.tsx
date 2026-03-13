'use client';

import className from 'classnames';

type IButtonProps = {
	xl?: boolean;
	hero?: boolean;
	children: string;
	className?: string;
};

const Button = (props: IButtonProps) => {
	const btnClass = className({
		btn: true,
		'btn-xl': props.xl,
		'btn-base': !props.xl,
		'btn-primary': true,
		'btn-hero': props.hero,
		[props.className ?? '']: props.className ?? '',
	});

	return (
		<div className={btnClass}>
			{props.children}

			<style jsx>
				{`
					.btn {
						@apply inline-block rounded-lg text-center transition-all duration-200;
					}

					.btn-base {
						@apply text-lg font-semibold py-2 px-4;
					}

					.btn-xl {
						@apply font-extrabold text-xl py-4 px-6;
					}

					.btn-primary {
						@apply text-white bg-primary-500;
					}

					.btn-primary:hover {
						@apply bg-primary-500 shadow-[0_0_20px_rgba(243,186,47,0.5)];
					}

					.btn-hero {
						@apply shadow-lg shadow-primary-500/30 ring-2 ring-primary-400/50 ring-offset-2 ring-offset-secondary;
					}

					.btn-hero:hover {
						@apply shadow-[0_0_24px_rgba(243,186,47,0.6)] ring-primary-500;
					}
				`}
			</style>
		</div>
	);
};

export { Button };
