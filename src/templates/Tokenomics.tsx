'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Section } from '@/layout/Section';

const Tokenomics = () => {
	const { t } = useLanguage();
	return (
		<Section id="token-economics" title={t.tokenomics.title} yPadding="py-16">
			<div className="mx-auto max-w-2xl space-y-8">
				<div>
					<p className="mb-4 text-center text-lg text-white/90">
						{t.tokenomics.intro}
					</p>
					<ul className="space-y-2 text-base leading-relaxed text-white/90">
						<li>
							• {t.tokenomics.items[0]}
							<span className="text-primary-500">1,000,000,000</span> $BNB10th
						</li>
						{t.tokenomics.items.slice(1).map(item => (
							<li key={item}>• {item}</li>
						))}
					</ul>
				</div>

				<div className="border-t border-white/10 pt-8">
					<p className="mb-4 text-lg font-semibold text-primary-500">
						{t.tokenomics.distribution}
					</p>
					<ul className="space-y-2 text-base leading-relaxed text-white/90">
						{t.tokenomics.distributionItems.map(item => (
							<li key={item}>• {item}</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export { Tokenomics };
