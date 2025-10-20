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
		this.items = Array.from(this.element.querySelectorAll(this.selector)) as HTMLElement[];
	}

	private setupEventListeners(): void {
		this.items.forEach((item) => {
			item.addEventListener('click', () => this.handleItemClick(item));
		});
	}

	private handleItemClick(clickedItem: HTMLElement): void {
		if (this.toggleOne) {
			// Single selection mode: only one item can be active at a time
			// Remove active class from all items and handle their targets
			this.items.forEach((item) => {
				const wasActive = item.classList.contains('active');
				item.classList.remove('active');
				if (wasActive) {
					this.removeTargetClass(item);
				}
			});
			// Add active class to the clicked item
			clickedItem.classList.add('active');
			this.addTargetClass(clickedItem);
		} else {
			// Multi selection mode: toggle active class on clicked item
			const willBeActive = !clickedItem.classList.contains('active');
			clickedItem.classList.toggle('active');

			if (willBeActive) {
				this.addTargetClass(clickedItem);
			} else {
				this.removeTargetClass(clickedItem);
			}
		}
	}

	private addTargetClass(item: HTMLElement): void {
		const targetSelector = item.getAttribute('data-target');
		const targetClass = item.getAttribute('data-target-class');

		if (targetSelector && targetClass) {
			const targetElement = document.querySelector(targetSelector);
			if (targetElement) {
				targetElement.classList.add(targetClass);
			}
		}
	}

	private removeTargetClass(item: HTMLElement): void {
		const targetSelector = item.getAttribute('data-target');
		const targetClass = item.getAttribute('data-target-class');

		if (targetSelector && targetClass) {
			const targetElement = document.querySelector(targetSelector);
			if (targetElement) {
				targetElement.classList.remove(targetClass);
			}
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
