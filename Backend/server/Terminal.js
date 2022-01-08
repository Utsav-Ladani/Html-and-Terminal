const os = require('os');
const npty = require('node-pty');

class Terminal {
	#terminal = null;
	constructor() {
		const shell = os.platform() == 'win32' ? 'powershell.exe' : 'zsh';

		this.#terminal = npty.spawn(shell, [], {
			name: 'xterm-256color',
			cols: 80,
			rows: 20,
			cwd: process.env.HOME,
			env: process.env,
		})

	}

	write(data) {
		this.#terminal.write(data);
	}

	onData(cb) {
		this.#terminal.onData(cb);
	}

	onExit(cb) {
		this.#terminal.onExit(cb);
	}

	kill() {
		this.#terminal.kill();
	}

	resize(cols=80, rows=20) {
		this.#terminal.resize(cols, rows);
	}
}

module.exports = Terminal;