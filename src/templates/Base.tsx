'use client';

import { useLanguage } from '@/i18n/LanguageContext';

import { AppConfig } from '../configs/AppConfig';
import { Meta } from '../layout/Meta';
import { AboutToken } from './AboutToken';
import { Community } from './Community';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { PurchaseGuide } from './PurchaseGuide';
import { Roadmap } from './Roadmap';
import { Tokenomics } from './Tokenomics';

const Base = () => {
	const { t } = useLanguage();
	return (
		<div className="bg-secondary text-text-white antialiased">
			<Meta title={t.meta.title} description={t.meta.description} />
			<Hero />
			<AboutToken />
			<Tokenomics />
			<Roadmap />
			<Community />
			<PurchaseGuide />
			<Footer />
		</div>
	);
};

export { Base };
