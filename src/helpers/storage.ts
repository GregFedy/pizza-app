export const loadState = <T>(key: string): T | undefined => {
	try {
		const state = localStorage.getItem(key);
		if (state) {
			return JSON.parse(state);
		}
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

export const saveState = <T>(state: T, key: string) => {
	const stringState = JSON.stringify(state);
	localStorage.setItem(key, stringState);
};
