'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Section } from '@/layout/Section';

const PurchaseGuide = () => {
	const { t } = useLanguage();
	return (
		<Section id="purchase-guide" title={t.purchaseGuide.title} yPadding="py-16">
			<div className="mx-auto max-w-2xl">
				<ol className="space-y-4">
					{t.purchaseGuide.steps.map((step, index) => (
						<li
							key={index}
							className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4"
						>
							<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-secondary">
								{index + 1}
							</span>
							<span className="pt-0.5 text-base leading-relaxed text-white/90">
								{step}
							</span>
						</li>
					))}
				</ol>
			</div>
		</Section>
	);
};

export { PurchaseGuide };
