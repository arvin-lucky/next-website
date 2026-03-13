'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Section } from '@/layout/Section';

const Roadmap = () => {
	const { t } = useLanguage();
	return (
		<Section id="roadmap" title={t.roadmap.title} yPadding="py-16">
			<div className="mx-auto max-w-3xl space-y-8">
				<div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 className="text-xl font-bold text-primary-500">
						{t.roadmap.phase1}
					</h3>
					<ul className="space-y-1.5 text-base leading-relaxed text-white/90">
						{t.roadmap.phase1Items.map(item => (
							<li key={item}>• {item}</li>
						))}
					</ul>
				</div>

				<div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 className="text-xl font-bold text-primary-500">
						{t.roadmap.phase2}
					</h3>
					<ul className="space-y-1.5 text-base leading-relaxed text-white/90">
						{t.roadmap.phase2Items.map(item => (
							<li key={item}>• {item}</li>
						))}
					</ul>
				</div>

				<div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-6">
					<h3 className="text-xl font-bold text-primary-500">
						{t.roadmap.phase3}
					</h3>
					<ul className="space-y-1.5 text-base leading-relaxed text-white/90">
						{t.roadmap.phase3Items.map(item => (
							<li key={item}>• {item}</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export { Roadmap };
