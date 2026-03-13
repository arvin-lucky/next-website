'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();

	return (
		<button
			type="button"
			onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
			className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-text-white transition-colors hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-500"
			aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
		>
			{locale === 'zh' ? 'EN' : '中文'}
		</button>
	);
}
