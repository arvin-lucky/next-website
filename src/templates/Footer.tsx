'use client';

import { AppConfig } from '@/configs/AppConfig';
import { useLanguage } from '@/i18n/LanguageContext';

import { Background } from '../components/background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => {
	const { t } = useLanguage();
	return (
		<Background color="bg-secondary">
			<Section yPadding="py-12">
				<div className="mx-auto max-w-2xl space-y-8 text-center">
					<Logo />

					{AppConfig.contractAddress && (
						<div>
							<p className="mb-2 text-sm font-medium text-primary-500">
								{t.footer.contractAddress}
							</p>
							<a
								href={`https://bscscan.com/token/${AppConfig.contractAddress}`}
								target="_blank"
								rel="noopener noreferrer"
								className="break-all text-sm text-text-white underline hover:text-primary-500"
							>
								{AppConfig.contractAddress}
							</a>
						</div>
					)}

					<div className="rounded-lg border border-white/10 bg-white/5 px-4 py-6">
						<p className="text-sm font-medium text-primary-500">
							{t.footer.disclaimer}
						</p>
						<p className="mt-2 text-sm leading-relaxed text-white/80">
							{t.footer.disclaimerText}
						</p>
					</div>

					<p className="text-sm text-white/60">
						© {new Date().getFullYear()} {AppConfig.title}
					</p>
				</div>
			</Section>
		</Background>
	);
};

export { Footer };
