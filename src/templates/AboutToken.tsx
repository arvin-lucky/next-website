'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Section } from '@/layout/Section';

const AboutToken = () => {
	const { t } = useLanguage();
	return (
		<Section
			id="about-token"
			title={t.aboutToken.title}
			yPadding="py-16 md:py-24"
		>
			<div className="mx-auto max-w-2xl">
				<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
					<div className="border-b border-white/10 bg-primary-500/10 px-6 py-5 text-center md:px-8 md:py-6">
						<h3 className="text-xl font-bold text-primary-500 md:text-2xl">
							{t.aboutToken.heading}
						</h3>
					</div>
					<div className="space-y-4 px-6 py-6 md:space-y-5 md:px-8 md:py-8">
						<ul className="space-y-3 text-base leading-relaxed text-white/90 md:text-lg">
							{t.aboutToken.points.map(point => (
								<li key={point} className="flex items-start gap-2">
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
									{point}
								</li>
							))}
						</ul>
						<div className="rounded-lg border border-primary-500/20 bg-primary-500/5 px-4 py-4 md:px-5 md:py-5">
							<p className="whitespace-pre-line text-center text-base leading-relaxed text-white/90 md:text-lg">
								{t.aboutToken.slogan}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export { AboutToken };
