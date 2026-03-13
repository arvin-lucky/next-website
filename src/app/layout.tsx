'use client';

import '../styles/global.css';

import { AppConfig } from '@/configs/AppConfig';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={AppConfig.locale}>
			<body>{children}</body>
		</html>
	);
}
