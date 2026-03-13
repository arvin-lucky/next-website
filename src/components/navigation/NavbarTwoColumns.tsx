'use client';

import Link from 'next/link';
import { type ReactNode, useState } from 'react';

import { useLanguage } from '@/i18n/LanguageContext';

import { Button } from '../button/Button';

type INavbarProps = {
	logo: ReactNode;
	children: ReactNode;
	rightButton?: ReactNode;
	languageSwitcher?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { t } = useLanguage();

	return (
		<div className="relative flex w-full items-center justify-between gap-4">
			<Link href="/" className="shrink-0">
				{props.logo}
			</Link>

			{/* H5 菜单图标 - 仅移动端显示，最右侧对齐 */}
			<button
				type="button"
				className="menu-trigger flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-text-white transition-colors hover:bg-primary-500/20 hover:border-primary-500/50 md:hidden"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label={t.aria.openMenu}
				aria-expanded={menuOpen}
			>
				{menuOpen ? (
					<svg
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>

			{/* 移动端菜单 - 全屏滑入 */}
			{menuOpen && (
				<>
					<div
						className="fixed inset-0 top-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
						onClick={() => setMenuOpen(false)}
						aria-hidden="true"
					/>
					<div
						className="mobile-menu mobile-menu-enter fixed right-0 top-0 z-50 h-full w-[85%] max-w-[320px] border-l border-white/10 bg-secondary shadow-2xl md:hidden"
						aria-hidden={!menuOpen}
					>
						<div className="flex h-full flex-col">
							<div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
								<p className="text-sm font-medium text-white/60">
									{t.nav.menu}
								</p>
								{props.languageSwitcher && <div>{props.languageSwitcher}</div>}
							</div>
							<nav
								className="flex-1 overflow-y-auto px-4 py-6"
								onClick={() => setMenuOpen(false)}
							>
								<ul className="navbar-mobile flex flex-col gap-2">
									{props.children}
								</ul>
								{props.rightButton && (
									<div className="mt-6 rounded-xl border border-primary-500/30 bg-primary-500/10 p-4">
										{props.rightButton}
									</div>
								)}
							</nav>
						</div>
					</div>
				</>
			)}

			{/* 桌面端导航 - 隐藏于 H5 */}
			<div className="hidden items-center gap-6 md:flex">
				{props.languageSwitcher && (
					<div className="shrink-0">{props.languageSwitcher}</div>
				)}
				<nav>
					<ul className="navbar flex items-center gap-2 text-base font-medium text-text-white">
						{props.children}
					</ul>
				</nav>
				{props.rightButton && (
					<Button className="navbar-cta shrink-0 text-white border-yellow-500 border-2 px-4 py-2 rounded-md">
						{props.rightButton as string}
					</Button>
				)}
			</div>

			<style jsx>
				{`
					.navbar :global(li) {
						@apply inline-block;
					}

					.navbar :global(a) {
						@apply block rounded-lg px-5 py-2.5 text-[15px] font-medium text-text-white transition-all duration-200 hover:bg-primary-500/25 hover:text-primary-500 hover:shadow-[0_0_12px_rgba(243,186,47,0.3)];
					}

					.navbar-mobile :global(li) {
						@apply rounded-xl;
					}

					.navbar-mobile :global(a) {
						@apply block rounded-xl border border-transparent px-5 py-4 text-base font-medium text-text-white transition-all duration-200 active:scale-[0.98] hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-500 hover:shadow-[0_0_16px_rgba(243,186,47,0.25)];
					}

					.mobile-menu-enter {
						animation: slideIn 0.25s ease-out;
					}

					@keyframes slideIn {
						from {
							transform: translateX(100%);
						}
						to {
							transform: translateX(0);
						}
					}

					.navbar-cta :global(a),
					.navbar-cta :global(button) {
						@apply inline-flex items-center justify-center;
					}
				`}
			</style>
		</div>
	);
};

export { NavbarTwoColumns };
