'use client';

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import type { Locale } from './translations';
import { translations } from './translations';

type Translations = (typeof translations)['zh'] | (typeof translations)['en'];

const STORAGE_KEY = 'locale';

const LanguageContext = createContext<{
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored === 'en' || stored === 'zh' ? stored : 'en';
	});

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
		localStorage.setItem(STORAGE_KEY, next);
	};

	const value = {
		locale,
		setLocale,
		t: translations[locale],
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
	return ctx;
}
