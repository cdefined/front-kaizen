/**
 * Reveal.js Timer Plugin
 * Usage: Add <div class="timer"></div> to any slide
 */
const RevealTimer = {
    id: 'timer',

    init(reveal) {
        this.injectStyles();
        reveal.on('slidechanged', () => this.initTimers());
        reveal.on('ready', () => this.initTimers());
    },

    injectStyles() {
        if (document.getElementById('reveal-timer-styles')) return;

        const style = document.createElement('style');
        style.id = 'reveal-timer-styles';
        style.textContent = `
            .reveal .timer {
                color: #667eea;
                margin: 0 auto;
                max-width: 400px;
            }

            .reveal .timer .time-container {
                font-size: 4rem;
                font-weight: bold;
                text-align: center;
                display: flex;
                align-items: flex-start;
                justify-content: center;
            }

            .reveal .timer .time-input {
                background: transparent;
                border: none;
                color: inherit;
                font: inherit;
                font-size: 4rem;
                font-weight: bold;
                width: 2ch;
                text-align: end;
                outline: none;
                -moz-appearance: textfield;
            }

            .reveal .timer .time-input::-webkit-outer-spin-button,
            .reveal .timer .time-input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            .reveal .timer .time-separator {
                font-size: 4rem;
                font-weight: bold;
            }

            .reveal .timer .timer-display {
                font-size: 4rem;
                font-weight: bold;
                transition: opacity 0.3s;
            }

            .reveal .timer .timer-controls {
                display: flex;
                gap: 15px;
                justify-content: center;
            }

            .reveal .timer button {
                width: 60px;
                height: 60px;
                border: 2px solid currentColor;
                background: transparent;
                color: inherit;
                font-family: inherit;
                font-size: 24px;
                cursor: pointer;
                border-radius: 8px;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .reveal .timer button:hover {
                background: #667eea;
                color: #fff;
            }

            .reveal .timer.expired {
                color: #f44336;
                animation: timer-pulse 1s ease-in-out infinite alternate;
            }

            @keyframes timer-pulse {
                to { opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    },

    initTimers() {
        document.querySelectorAll('.timer:not([data-timer-id])').forEach((el, idx) => {
            new Timer(el, `timer-${idx}`);
        });
    }
};

class Timer {
    constructor(element, id) {
        this.element = element;
        this.id = id;
        this.timeRemaining = 0;
        this.interval = null;
        this.isRunning = false;

        this.element.dataset.timerId = id;
        this.render();
        this.bindEvents();
    }

    render() {
        this.element.innerHTML = `
            <div class="time-container">
                <input type="number" class="time-input minutes" id="minutes-${this.id}" min="0" max="59" value="15">
                <span class="time-separator">:</span>
                <input type="number" class="time-input seconds" id="seconds-${this.id}" min="0" max="59" value="0" step="10">
                <div class="timer-display" id="display-${this.id}" hidden>05:00</div>
            </div>
            <div class="timer-controls">
                <button class="start" id="start-${this.id}">▶</button>
                <button class="pause" id="pause-${this.id}">⏸</button>
                <button class="reset" id="reset-${this.id}">⏹</button>
            </div>
        `;

        this.display = this.element.querySelector('.timer-display');
        this.minutesInput = this.element.querySelector('.minutes');
        this.secondsInput = this.element.querySelector('.seconds');
        this.inputs = this.element.querySelector('.time-container');
    }

    bindEvents() {
        this.element.querySelector('.start').onclick = () => this.start();
        this.element.querySelector('.pause').onclick = () => this.pause();
        this.element.querySelector('.reset').onclick = () => this.reset();

        [this.minutesInput, this.secondsInput].forEach(input => {
            input.oninput = () => {
                if (!this.isRunning) {
                    const val = Math.max(0, Math.min(59, parseInt(input.value) || 0));
                    input.value = val.toString().padStart(2, '0');
                }
            };

            const val = Math.max(0, Math.min(59, parseInt(input.value) || 0));
            input.value = val.toString().padStart(2, '0');
        });
    }

    formatTime(totalSeconds) {
        const mins = Math.floor(Math.abs(totalSeconds) / 60);
        const secs = Math.abs(totalSeconds) % 60;
        const sign = totalSeconds < 0 ? '-' : '';
        return `${sign}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
        this.display.textContent = this.formatTime(this.timeRemaining);
        this.element.classList.toggle('expired', this.timeRemaining < 0);
    }

    showTimer() {
        Array.from(this.inputs.children).forEach(child => {
            child.hidden = !child.classList.contains('timer-display');
        });
    }

    showInputs() {
        Array.from(this.inputs.children).forEach(child => {
            child.hidden = child.classList.contains('timer-display');
        });
    }

    start() {
        if (this.isRunning) return;

        if (this.timeRemaining <= 0) {
            const mins = parseInt(this.minutesInput.value) || 0;
            const secs = parseInt(this.secondsInput.value) || 0;
            this.timeRemaining = mins * 60 + secs;
        }

        if (this.timeRemaining <= 0) return;

        this.showTimer();
        this.updateDisplay();

        this.interval = setInterval(() => {
            this.timeRemaining--;
            this.updateDisplay();
        }, 1000);

        this.isRunning = true;
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.isRunning = false;
        }
    }

    reset() {
        this.pause();
        this.timeRemaining = 0;
        this.element.classList.remove('expired');
        this.showInputs();

        const mins = parseInt(this.minutesInput.value) || 0;
        const secs = parseInt(this.secondsInput.value) || 0;
        this.minutesInput.value = mins.toString().padStart(2, '0');
        this.secondsInput.value = secs.toString().padStart(2, '0');
    }

    destroy() {
        this.pause();
    }
}

if (typeof Reveal !== 'undefined') {
    Reveal.registerPlugin(RevealTimer);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RevealTimer;
}