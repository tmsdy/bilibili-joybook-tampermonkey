const sleep = (time = 1): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, 1000 * time));
};

const createElement = (str: string): Element | null => {
	const el = document.createElement('div');
	el.innerHTML = str;
	return el.firstElementChild;
};

const isVideo: boolean = /(bangumi\/play\/ss\d+)|(bangumi\/play\/ep\d+)|(video\/bv\d+)/gi.test(window.location.href);

const user = {
	face: (): string => unsafeWindow.UserStatus.userInfo.face,
	isVip: (): boolean => unsafeWindow.UserStatus.userInfo.vipStatus === 1,
};

export { sleep, createElement, isVideo, user };
