'use client';

import Head from 'next/head';
import { useParams, usePathname } from 'next/navigation';
import { ArticleJsonLd } from 'next-seo';

type IMetaProps = {
	title: string;
	description: string;
	canonical?: string;
};

const Meta = (props: IMetaProps) => {
	// 获取当前域名和路径
	const pathname = usePathname();
	const domain = typeof window !== 'undefined' ? window.location.origin : '';
	const basePath = domain ? `${domain}${pathname}` : pathname;
	console.log('111:', pathname, basePath);

	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
					key="viewport"
				/>
				<link
					rel="apple-touch-icon"
					href={`${basePath}/apple-touch-icon.png`}
					key="apple"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${basePath}/favicon-32x32.png`}
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${basePath}/favicon-16x16.png`}
					key="icon16"
				/>
				<link rel="icon" href={`${basePath}/favicon.ico`} key="favicon" />
			</Head>
			<ArticleJsonLd
				headline={props.title}
				datePublished={new Date().toISOString()}
				description={props.description}
			/>
		</>
	);
};

export { Meta };
