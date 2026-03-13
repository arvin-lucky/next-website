import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	poweredByHeader: false,
	trailingSlash: true,
	basePath: '',
	reactStrictMode: true,

	output: 'export', // 开启静态导出 [citation:1]
	images: {
		unoptimized: true, // 禁用 Next.js 的图像优化功能，因为它需要服务器支持 [citation:2][citation:10]
	},
};

export default nextConfig;
