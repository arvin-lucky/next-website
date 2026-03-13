import { useLanguage } from '@/i18n/LanguageContext';

type ILogoProps = {
	xl?: boolean;
};

const Logo = (props: ILogoProps) => {
	const size = props.xl ? 44 : 32;
	const fontStyle = props.xl
		? 'font-bold text-2xl md:text-3xl'
		: 'font-bold text-xl';
	const { t } = useLanguage();
	return (
		<span className={`inline-flex items-center ${fontStyle}`}>
			<svg
				className="mr-2 shrink-0 text-primary-500"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* BNB 风格菱形徽章 */}
				<path
					d="M12 2L22 12L12 22L2 12L12 2Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 7L17 12L12 17L7 12L12 7Z"
					fill="currentColor"
					fillOpacity="0.4"
				/>
			</svg>
			<span className="text-text-white">
				<span className="text-primary-500">{t.logo.title}</span>
			</span>
		</span>
	);
};

export { Logo };
