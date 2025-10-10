export class ActiveToggle {
	private element: HTMLElement;
	private selector: string;
	private toggleOne: boolean;
	private items: HTMLElement[] = [];

	constructor(element: HTMLElement) {
		this.element = element;
		this.selector = element.getAttribute('data-active-toggle') || '';
		this.toggleOne = element.getAttribute('data-active-toggle-one') === 'true';
		this.init();
	}

	private init(): void {
		if (!this.selector) {
			return;
		}
		this.findItems();
		this.setupEventListeners();
	}

	private findItems(): void {
		this.items = Array.from(
			this.element.querySelectorAll(this.selector)
		) as HTMLElement[];
	}

	private setupEventListeners(): void {
		this.items.forEach((item) => {
			item.addEventListener('click', () => this.handleItemClick(item));
		});
	}

	private handleItemClick(clickedItem: HTMLElement): void {
		if (this.toggleOne) {
			// Single selection mode: only one item can be active at a time
			// Remove active class from all items
			this.items.forEach((item) => {
				item.classList.remove('active');
			});
			// Add active class to the clicked item
			clickedItem.classList.add('active');
		} else {
			// Multi selection mode: toggle active class on clicked item
			clickedItem.classList.toggle('active');
		}
	}

	public destroy(): void {
		// Clean up event listeners
		this.items.forEach((item) => {
			const clone = item.cloneNode(true) as HTMLElement;
			item.parentNode?.replaceChild(clone, item);
		});
	}

	/**
	 * Initialize all active toggle groups with data-active-toggle attribute
	 */
	public static init(selector: string = '[data-active-toggle]'): ActiveToggle[] {
		const elements = document.querySelectorAll(selector);
		return Array.from(elements).map((element) => new ActiveToggle(element as HTMLElement));
	}
}
