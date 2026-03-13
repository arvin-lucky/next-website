import React, { useEffect, useRef, useState } from 'react';

type IProps = {
	id: string; // 监听的目标元素的id
	// 进入视口回调函数
	onIntersect?: () => void;
	// 退出视口回调函数
	onLeave?: () => void;
};

// 这个hook的作用是监听元素是否进入视口，可以用来实现懒加载、无限滚动等功能
const useIntersectionObserver = (props: IProps) => {
	const { id, onIntersect, onLeave } = props;
	const observerRef = useRef<IntersectionObserver | null>(null);
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);

	useEffect(() => {
		// 创建一个IntersectionObserver实例
		observerRef.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					console.log('元素进入视口');
					onIntersect?.();
				} else {
					console.log('元素退出视口');
					onLeave?.();
				}
			});
		});

		setObserver(observerRef.current);

		// 监听目标元素，这里假设目标元素的id为'target'
		const target = document.getElementById(id);

		if (target) {
			observerRef.current.observe(target);
		}

		// 组件卸载时，取消监听
		return () => {
			if (target) {
				observerRef.current?.unobserve(target);
			}
		};
	}, [id]);

	return {
		observer,
	};
};

export default useIntersectionObserver;
