const EXTENSION_UUID: string = 'extension--87e24d4b-5104-b7d7-b733-b22d1055d73a';
const REPLACED_CLASS_NAME: string = EXTENSION_UUID; 

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
	let imageNodeList: NodeListOf<HTMLImageElement> = document.querySelectorAll(`img[src*="://pbs.twimg.com/media/"]:not(.${REPLACED_CLASS_NAME})`);

	imageNodeList.forEach(imageElement => {
		let srcUrl: URL = new URL(imageElement.src);
		srcUrl.searchParams.set('name', 'orig');
		
		// ツイート内サムネイル仕様変更対策
		if(srcUrl.searchParams.get('format') === 'webp') {
			srcUrl.searchParams.set('format', 'jpg');
			
			imageElement.onerror = () => {
				let errorUrl: URL = new URL(imageElement.src);
				errorUrl.searchParams.set('format', 'png');
				imageElement.src = errorUrl.toString();
				imageElement.onerror = null;
			};
		}

		// img に被さってる div
		imageElement.onload = () => {
			let coveringDivElement: HTMLDivElement | null | undefined = imageElement.parentElement?.querySelector('div');
			if (coveringDivElement) {
				coveringDivElement.style.backgroundImage = `url("${imageElement.src.toString()}")`;
			}
			imageElement.onload = null;
		};

		imageElement.src = srcUrl.toString();
		imageElement.classList.add(REPLACED_CLASS_NAME);
	});
}