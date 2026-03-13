const config = {
	plugins: {
		'@tailwindcss/postcss': {},
	},
};

export default config;

// module.exports = {
// 	plugins: {
// 		tailwindcss: {},
// 		autoprefixer: {},
// 		// 'postcss-plugin-px2rem': {
// 		// 	rootValue: 16, // 设计稿宽度的 100 分之一，这里假设设计稿宽度是 375px
// 		// 	// rootValue: 37.5, // 设计稿宽度的 100 分之一，这里假设设计稿宽度是 375px
// 		// 	propList: ['*'], // 需要转换的属性，这里表示全部都进行转换
// 		// },
// 		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
// 	},
// };
