const REPLACED_CLASS_NAME: string = 'twitter-replace-image-with-original_is-replaced'; 

let mutationObserver: MutationObserver = new MutationObserver(replace);
let bodyElement: HTMLBodyElement | null = document.getElementsByTagName('body')[0];

if (bodyElement) {
	mutationObserver.observe(bodyElement, {
		childList: true,
		subtree: true
	});
}

replace();

function replace(): void {
	let imageNodeList: NodeListOf<HTMLImageElement> = document.querySelectorAll(`img[src*="://pbs.twimg.com/media/"]:not([${REPLACED_CLASS_NAME}])`);

	imageNodeList.forEach(imageElement => {
		let srcUrl: URL = new URL(imageElement.src);
		
		srcUrl.searchParams.set('name', 'orig');
		imageElement.src = srcUrl.toString();

		imageElement.setAttribute(REPLACED_CLASS_NAME, 'true');
	});
}