export class Toolbar {
	private element: HTMLElement;
	private items: HTMLElement[] = [];

	constructor(element: HTMLElement) {
		this.element = element;
		this.init();
	}

	private init(): void {
		this.findItems();
		this.setupEventListeners();
	}

	private findItems(): void {
		this.items = Array.from(
			this.element.querySelectorAll('.toolbar-item')
		) as HTMLElement[];
	}

	private setupEventListeners(): void {
		// Attach click handlers to all toolbar-item-header elements
		this.items.forEach((item) => {
			const header = item.querySelector('.toolbar-item-header');
			if (header) {
				header.addEventListener('click', () => this.handleItemClick(item));
			}
		});
	}

	private handleItemClick(clickedItem: HTMLElement): void {
		// If the clicked item already has active class, return early
		if (clickedItem.classList.contains('active')) {
			return;
		}

		// Remove active class from all items
		this.items.forEach((item) => {
			item.classList.remove('active');
		});

		// Add active class to the clicked item
		clickedItem.classList.add('active');
	}

	public destroy(): void {
		// Clean up event listeners if needed
		this.items.forEach((item) => {
			const header = item.querySelector('.toolbar-item-header');
			if (header) {
				const clone = header.cloneNode(true);
				header.parentNode?.replaceChild(clone, header);
			}
		});
	}

	/**
	 * Initialize all toolbars with class .toolbar
	 */
	public static init(selector: string = '.toolbar'): Toolbar[] {
		const elements = document.querySelectorAll(selector);
		return Array.from(elements).map((element) => new Toolbar(element as HTMLElement));
	}
}
