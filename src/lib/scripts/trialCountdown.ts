import type { Unsubscriber } from 'svelte/store';

export class TrialCountdown {
	private element: HTMLElement | null;
	private totalSeconds: number = 15;
	private intervalId: number | null = null;
	private onComplete?: () => void;
	private settingsUnsubscriber: Unsubscriber | null = null;

	constructor(selector: string, onComplete?: () => void) {
		this.element = document.querySelector(selector);
		this.totalSeconds = 15; // 10 minutes in seconds
		this.onComplete = onComplete;
	}

	private formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	}

	private updateDisplay(): void {
		if (this.element) {
			this.element.textContent = this.formatTime(this.totalSeconds);
		}
	}

	public start(): void {
		if (!this.element) {
			console.error('Trial counter element not found');
			return;
		}

		// Set initial display
		this.updateDisplay();

		// Start countdown
		this.intervalId = window.setInterval(() => {
			this.totalSeconds--;
			this.updateDisplay();

			if (this.totalSeconds <= 0) {
				this.stop();
				if (this.onComplete) {
					this.onComplete();
				}
			}
		}, 1000);
	}

	public stop(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	public reset(): void {
		this.stop();
		this.updateDisplay();
	}

	public getRemainingTime(): number {
		return this.totalSeconds;
	}

	public isRunning(): boolean {
		return this.intervalId !== null;
	}

	public destroy(): void {
		this.stop();
		if (this.settingsUnsubscriber) {
			this.settingsUnsubscriber();
			this.settingsUnsubscriber = null;
		}
	}
}
