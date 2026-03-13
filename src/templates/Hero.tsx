'use client';

import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
	<Background color="bg-gray-100">
		<Section yPadding="py-6">
			<NavbarTwoColumns logo={<Logo xl />}>
				<li>
					<Link href="/">Overview</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
			</NavbarTwoColumns>
		</Section>

		<Section yPadding="pt-20 pb-32">
			<HeroOneButton
				title={
					<>
						{'The modern landing page for\n'}
						<span className="text-primary-500">React developers</span>
					</>
				}
				description="The easiest way to build a React landing page in seconds."
				button={
					<Link href="https://creativedesignsguru.com/category/nextjs/">
						<Button xl>Download Your Free Theme</Button>
					</Link>
				}
			/>
		</Section>
	</Background>
);

export { Hero };
