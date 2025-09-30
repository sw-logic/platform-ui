export class TreeElement {
	private element: HTMLElement;

	constructor(element: HTMLElement) {
		this.element = element;
		this.init();
	}

	private init(): void {
		this.setupEventListeners();
		this.setupInitialState();
	}

	private setupEventListeners(): void {
		this.element.addEventListener('click', this.handleClick.bind(this));
		this.element.addEventListener('keydown', this.handleKeydown.bind(this));
	}

	private setupInitialState(): void {
		const contentLists = this.element.querySelectorAll('.content-list');

		contentLists.forEach((list) => {
			const htmlList = list as HTMLElement;
			const button = htmlList.querySelector(':scope > .tree-toggle') as HTMLButtonElement;
			const childUl = htmlList.querySelector(':scope > ul');

			if (childUl && button) {
				// Add ARIA attributes for accessibility
				const isExpanded = htmlList.classList.contains('expanded');
				button.setAttribute('aria-expanded', String(isExpanded));
				button.setAttribute('aria-controls', this.generateId());
				childUl.setAttribute('id', button.getAttribute('aria-controls')!);
				childUl.setAttribute('role', 'group');
			}
		});
	}

	private generateId(): string {
		return `tree-section-${Math.random().toString(36).substr(2, 9)}`;
	}

	private handleClick(event: Event): void {
		const target = event.target as HTMLElement;
		const button = target.closest('.tree-toggle') as HTMLElement;

		if (button) {
			event.preventDefault();
			event.stopPropagation();
			this.toggleSection(button);
		}
	}

	private handleKeydown(event: KeyboardEvent): void {
		const target = event.target as HTMLElement;
		const button = target.closest('.tree-toggle') as HTMLElement;

		if (button && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			event.stopPropagation();
			this.toggleSection(button);
		}
	}

	private toggleSection(button: HTMLElement): void {
		const contentList = button.closest('.content-list') as HTMLElement;
		if (!contentList) return;

		const childUl = contentList.querySelector(':scope > ul') as HTMLElement;
		if (!childUl) return;

		const isExpanded = contentList.classList.contains('expanded');

		if (isExpanded) {
			// Collapse
			contentList.classList.remove('expanded');
			button.setAttribute('aria-expanded', 'false');
		} else {
			// Expand
			contentList.classList.add('expanded');
			button.setAttribute('aria-expanded', 'true');
		}
	}

	public expandAll(): void {
		const contentLists = this.element.querySelectorAll('.content-list');

		contentLists.forEach((list) => {
			const htmlList = list as HTMLElement;
			const button = htmlList.querySelector(':scope > .tree-toggle') as HTMLButtonElement;
			const childUl = htmlList.querySelector(':scope > ul') as HTMLElement;

			if (childUl && button && !htmlList.classList.contains('expanded')) {
				htmlList.classList.add('expanded');
				button.setAttribute('aria-expanded', 'true');
			}
		});
	}

	public collapseAll(): void {
		const contentLists = this.element.querySelectorAll('.content-list');

		contentLists.forEach((list) => {
			const htmlList = list as HTMLElement;
			const button = htmlList.querySelector(':scope > .tree-toggle') as HTMLButtonElement;
			const childUl = htmlList.querySelector(':scope > ul') as HTMLElement;

			if (childUl && button && htmlList.classList.contains('expanded')) {
				htmlList.classList.remove('expanded');
				button.setAttribute('aria-expanded', 'false');
			}
		});
	}

	public static init(selector: string = '[data-element="tree"]'): TreeElement[] {
		const elements = document.querySelectorAll(selector);
		return Array.from(elements).map(element => new TreeElement(element as HTMLElement));
	}
}
