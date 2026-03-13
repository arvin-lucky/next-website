'use client';

import Link from 'next/link';

import { useLanguage } from '@/i18n/LanguageContext';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => {
	const { t } = useLanguage();
	return (
		<Background color="bg-secondary">
			<Section yPadding="py-6">
				<NavbarTwoColumns
					logo={<Logo xl />}
					languageSwitcher={<LanguageSwitcher />}
					rightButton={
						<a href="#purchase-guide">
							<Button>{t.hero.button}</Button>
						</a>
					}
				>
					<li>
						<a href="#">{t.nav.home}</a>
					</li>
					<li>
						<a href="#about-token">{t.nav.aboutToken}</a>
					</li>
					<li>
						<a href="#token-economics">{t.nav.tokenomics}</a>
					</li>
					<li>
						<a href="#roadmap">{t.nav.roadmap}</a>
					</li>
					<li>
						<a href="#community">{t.nav.community}</a>
					</li>
					<li>
						<a href="#purchase-guide">{t.nav.purchaseGuide}</a>
					</li>
				</NavbarTwoColumns>
			</Section>

			<Section yPadding="pt-16 pb-32 md:pt-24 md:pb-48">
				<HeroOneButton
					title={
						<>
							<span className="text-primary-500">{t.hero.title}</span>
							{` ${t.hero.titleSuffix}`}
						</>
					}
					description={t.hero.description}
					buttons={
						<>
							<Link
								href="https://www.binance.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									xl
									hero
									className="text-white border-yellow-500 border-2 px-4 py-2 rounded-md "
								>
									{t.hero.buyNow}
								</Button>
							</Link>
							<Link
								href="https://www.binance.com/en/square"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button
									xl
									hero
									className="text-white border-yellow-500 border-2 px-4 py-2 rounded-md"
								>
									{t.hero.joinCommunity}
								</Button>
							</Link>
						</>
					}
				/>
			</Section>
		</Background>
	);
};

export { Hero };
