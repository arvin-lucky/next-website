import { useLanguage } from '@/i18n/LanguageContext';

type ILogoProps = {
	xl?: boolean;
};

const Logo = (props: ILogoProps) => {
	const size = props.xl ? 60 : 44;
	const fontStyle = props.xl
		? 'font-bold text-2xl md:text-3xl'
		: 'font-bold text-xl';
	const { t } = useLanguage();

	return (
		<span className={`inline-flex items-center gap-2 ${fontStyle}`}>
			<img
				className="mr-2 shrink-0 text-primary-500"
				src="./logo.png"
				style={{
					// width: size,
					height: size,
				}}
				alt="logo"
			/>
			<span className="text-text-white">
				<span className="text-primary-500">{t.logo.title}</span>
			</span>
		</span>
	);
};

export { Logo };
