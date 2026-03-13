'use client';

import { AppConfig } from '@/configs/AppConfig';
import { useLanguage } from '@/i18n/LanguageContext';
import { Section } from '@/layout/Section';

const Community = () => {
	const { t } = useLanguage();
	const communityLinks = [
		{ name: t.community.links.telegram, href: AppConfig.community.telegram },
		{ name: t.community.links.twitter, href: AppConfig.community.twitter },
		{ name: t.community.links.discord, href: AppConfig.community.discord },
		{ name: t.community.links.wechat, href: AppConfig.community.wechat },
		{
			name: t.community.links.binanceSquare,
			href: AppConfig.community.binanceSquare,
		},
	];
	return (
		<Section id="community" title={t.community.title} yPadding="py-16">
			<div className="mx-auto max-w-2xl space-y-8 text-center">
				<div className="flex flex-wrap justify-center gap-4">
					{communityLinks.map(link => (
						<a
							key={link.name}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg border border-primary-500/50 bg-primary-500/10 px-6 py-3 font-medium text-text-white transition-colors duration-200 hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-500"
						>
							{link.name}
						</a>
					))}
				</div>

				<p className="text-lg text-white/90">{t.community.cta}</p>
			</div>
		</Section>
	);
};

export { Community };
