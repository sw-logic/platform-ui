export class Sidebar {
	private element: HTMLElement;
	private id: string;
	private overlay: HTMLElement | null = null;
	private isOpen: boolean = false;
	private triggers: HTMLElement[] = [];
	private closeTriggers: HTMLElement[] = [];
	private breakpoint: number = 0;

	// Bootstrap breakpoints from _variables.scss
	private static readonly BREAKPOINTS: Record<string, number> = {
		sm: 600,
		md: 1024,
		lg: 1366,
		xl: 1600
	};

	constructor(element: HTMLElement) {
		this.element = element;
		this.id = element.id;
		this.detectBreakpoint();
		this.init();
	}

	private init(): void {
		this.setupSidebar();
		this.findTriggers();
		this.setupEventListeners();
		this.setupResizeHandler();
	}

	private detectBreakpoint(): void {
		// Detect sidebar-collapse-* class and set breakpoint
		for (const [size, value] of Object.entries(Sidebar.BREAKPOINTS)) {
			if (this.element.classList.contains(`sidebar-collapse-${size}`)) {
				this.breakpoint = value;
				break;
			}
		}
	}

	private setupSidebar(): void {
		// Add necessary attributes for accessibility
		this.element.setAttribute('role', 'dialog');
		this.element.setAttribute('aria-modal', 'true');
		this.element.setAttribute('aria-hidden', 'true');
	}

	private findTriggers(): void {
		// Find all trigger elements with data-sidebar-target="#id"
		this.triggers = Array.from(
			document.querySelectorAll(`[data-sidebar-target="#${this.id}"]`)
		) as HTMLElement[];

		// Find all close trigger elements with data-sidebar-close="#id"
		this.closeTriggers = Array.from(
			document.querySelectorAll(`[data-sidebar-close="#${this.id}"]`)
		) as HTMLElement[];
	}

	private setupEventListeners(): void {
		// Attach open handlers to triggers
		this.triggers.forEach((trigger) => {
			trigger.addEventListener('click', this.open.bind(this));
		});

		// Attach close handlers to close triggers
		this.closeTriggers.forEach((trigger) => {
			trigger.addEventListener('click', this.close.bind(this));
		});

		// Close on escape key
		document.addEventListener('keydown', this.handleEscape.bind(this));
	}

	private setupResizeHandler(): void {
		window.addEventListener('resize', this.handleResize.bind(this));
		this.handleResize(); // Initial check
	}

	private handleResize(): void {
		// Close sidebar if viewport is >= breakpoint and it's open
		if (this.breakpoint > 0 && window.innerWidth >= this.breakpoint && this.isOpen) {
			this.close();
		}
	}

	private handleEscape(event: KeyboardEvent): void {
		if (event.key === 'Escape' && this.isOpen) {
			this.close();
		}
	}

	private createOverlay(): HTMLElement {
		const overlay = document.createElement('div');
		overlay.className = 'sidebar-overlay';
		overlay.addEventListener('click', this.close.bind(this));
		document.body.appendChild(overlay);
		return overlay;
	}

	private open(): void {
		// Only open as offcanvas below breakpoint
		if (this.breakpoint === 0 || window.innerWidth >= this.breakpoint) return;

		this.isOpen = true;
		this.element.classList.add('sidebar-open');
		this.element.setAttribute('aria-hidden', 'false');

		// Create and show overlay
		this.overlay = this.createOverlay();

		// Prevent body scroll
		document.body.style.overflow = 'hidden';

		// Force reflow for animation
		requestAnimationFrame(() => {
			this.overlay?.classList.add('sidebar-overlay-active');
		});

		// Focus first focusable element in sidebar
		this.focusFirstElement();
	}

	private close(): void {
		if (!this.isOpen) return;

		this.isOpen = false;
		this.element.classList.remove('sidebar-open');
		this.element.setAttribute('aria-hidden', 'true');

		// Remove overlay
		if (this.overlay) {
			this.overlay.classList.remove('sidebar-overlay-active');
			setTimeout(() => {
				this.overlay?.remove();
				this.overlay = null;
			}, 300); // Match transition duration
		}

		// Restore body scroll
		document.body.style.overflow = '';
	}

	private focusFirstElement(): void {
		const focusableElements = this.element.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);

		if (focusableElements.length > 0) {
			(focusableElements[0] as HTMLElement).focus();
		}
	}

	public destroy(): void {
		// Remove event listeners
		this.triggers.forEach((trigger) => {
			trigger.removeEventListener('click', this.open.bind(this));
		});

		this.closeTriggers.forEach((trigger) => {
			trigger.removeEventListener('click', this.close.bind(this));
		});

		window.removeEventListener('resize', this.handleResize.bind(this));

		// Clean up if open
		if (this.isOpen) {
			this.close();
		}
	}

	/**
	 * Initialize all sidebars with class .sidebar
	 */
	public static init(selector: string = '.sidebar'): Sidebar[] {
		const elements = document.querySelectorAll(selector);
		return Array.from(elements)
			.filter((element) => element.id) // Only initialize elements with an id
			.map((element) => new Sidebar(element as HTMLElement));
	}

	/**
	 * Manually open a sidebar by id
	 */
	public static open(id: string): void {
		const element = document.getElementById(id);
		if (element && element.classList.contains('sidebar')) {
			const sidebar = new Sidebar(element);
			sidebar.open();
		}
	}

	/**
	 * Manually close a sidebar by id
	 */
	public static close(id: string): void {
		const element = document.getElementById(id);
		if (element && element.classList.contains('sidebar')) {
			element.classList.remove('sidebar-open');
			element.setAttribute('aria-hidden', 'true');

			const overlay = document.querySelector('.sidebar-overlay');
			if (overlay) {
				overlay.classList.remove('sidebar-overlay-active');
				setTimeout(() => overlay.remove(), 300);
			}

			document.body.style.overflow = '';
		}
	}
}
