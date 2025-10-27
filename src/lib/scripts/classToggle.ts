export class ClassToggle {
	private element: HTMLElement;
	private targetSelector: string;
	private toggleClass: string;
	private isReverse: boolean;
	private group: HTMLElement | null = null;

	constructor(element: HTMLElement) {
		this.element = element;
		this.targetSelector = element.getAttribute('data-toggle') || '';
		this.toggleClass = element.getAttribute('data-toggle-class') || '';
		this.isReverse = element.hasAttribute('data-toggle-reverse');
		this.init();
	}

	private init(): void {
		if (!this.targetSelector || !this.toggleClass) {
			return;
		}

		// Check if element is inside a toggle group
		this.group = this.element.closest('[data-toggle-group]') as HTMLElement;

		this.setupEventListener();
	}

	private setupEventListener(): void {
		this.element.addEventListener('click', () => this.handleClick());
	}

	private handleClick(): void {
		// Handle group behavior if element is in a group
		if (this.group) {
			this.handleGroupClick();
		} else {
			this.handleSingleClick();
		}
	}

	private handleSingleClick(): void {
		const targetElement = document.querySelector(this.targetSelector);

		if (!targetElement) {
			return;
		}

		if (this.isReverse) {
			// Oppositional toggling: when element gets active, target loses class and vice versa
			const willBeActive = !this.element.classList.contains('active');
			this.element.classList.toggle('active');

			if (willBeActive) {
				targetElement.classList.remove(this.toggleClass);
			} else {
				targetElement.classList.add(this.toggleClass);
			}
		} else {
			// Normal toggling: both element and target toggle together
			this.element.classList.toggle('active');
			targetElement.classList.toggle(this.toggleClass);
		}
	}

	private handleGroupClick(): void {
		if (!this.group) {
			return;
		}

		const targetElement = document.querySelector(this.targetSelector);

		if (!targetElement) {
			return;
		}

		// Get all toggle elements in the group
		const groupToggles = Array.from(
			this.group.querySelectorAll('[data-toggle]')
		) as HTMLElement[];

		const wasActive = this.element.classList.contains('active');

		if (this.isReverse) {
			// Remove active from all siblings and add class to their targets
			groupToggles.forEach((toggle) => {
				if (toggle !== this.element) {
					const siblingTarget = toggle.getAttribute('data-toggle');
					const siblingClass = toggle.getAttribute('data-toggle-class');

					if (siblingTarget && siblingClass) {
						const siblingTargetElement = document.querySelector(siblingTarget);
						if (siblingTargetElement) {
							siblingTargetElement.classList.add(siblingClass);
						}
					}
					toggle.classList.remove('active');
				}
			});

			// Toggle clicked element
			if (wasActive) {
				// Deactivating: add class to target
				this.element.classList.remove('active');
				targetElement.classList.add(this.toggleClass);
			} else {
				// Activating: remove class from target
				this.element.classList.add('active');
				targetElement.classList.remove(this.toggleClass);
			}
		} else {
			// Remove active from all siblings and remove class from their targets
			groupToggles.forEach((toggle) => {
				if (toggle !== this.element) {
					const siblingTarget = toggle.getAttribute('data-toggle');
					const siblingClass = toggle.getAttribute('data-toggle-class');

					if (siblingTarget && siblingClass) {
						const siblingTargetElement = document.querySelector(siblingTarget);
						if (siblingTargetElement) {
							siblingTargetElement.classList.remove(siblingClass);
						}
					}
					toggle.classList.remove('active');
				}
			});

			// Toggle clicked element (or just activate it in group mode)
			if (wasActive) {
				// Allow deactivation
				this.element.classList.remove('active');
				targetElement.classList.remove(this.toggleClass);
			} else {
				// Activate
				this.element.classList.add('active');
				targetElement.classList.add(this.toggleClass);
			}
		}
	}

	public destroy(): void {
		// Clean up event listener
		const clone = this.element.cloneNode(true) as HTMLElement;
		this.element.parentNode?.replaceChild(clone, this.element);
	}

	/**
	 * Initialize all toggle elements with data-toggle attribute
	 */
	public static init(selector: string = '[data-toggle]'): ClassToggle[] {
		const elements = document.querySelectorAll(selector);
		return Array.from(elements).map((element) => new ClassToggle(element as HTMLElement));
	}
}
