{

class BracketsE {

	static codePointA = 65;
	static codePointZero = 48;
	static letterlike = {
	 '\u{1D53A}': '\u2102', '\u{1D4BC}': '\u210A', '\u{1D4A3}': '\u210B',
	 '\u{1D50B}': '\u210C', '\u{1D53F}': '\u210D', '\u{1D455}': '\u210E',
	 '\u{1D4A4}': '\u2110', '\u{1D50C}': '\u2111', '\u{1D4A7}': '\u2112',
	 '\u{1D545}': '\u2115', '\u{1D547}': '\u2119', '\u{1D548}': '\u211A',
	 '\u{1D4AD}': '\u211B', '\u{1D515}': '\u211C', '\u{1D549}': '\u211D',
	 '\u{1D551}': '\u2124', '\u{1D51D}': '\u2128', '\u{1D49D}': '\u212C',
	 '\u{1D506}': '\u212D', '\u{1D4BA}': '\u212F', '\u{1D4A0}': '\u2130',
	 '\u{1D4A1}': '\u2131', '\u{1D4A8}': '\u2133', '\u{1D4C4}': '\u2134'
	};

	get container() {

		return document.querySelector('main');

	}

	constructor(A0) {

		const [A, zero] = [...A0];
		this.A = A;
		this.zero = zero;
		this.shiftA = A.codePointAt() - BracketsE.codePointA;
		this.shiftZero = zero ? zero.codePointAt() - BracketsE.codePointZero : 0;
		this.copyButton = this.addElement(this.container, 'button', {
		 disabled: 'disabled'
		}, {
		 click: this.copy
		});

	}

	addElement(parentNode, name, prop = {}, events = {}) {

		const node = parentNode.appendChild(
		 Object.assign(document.createElement(name), prop)
		);
		for (let trigger of Object.keys(events))
		 node.addEventListener(trigger, events[trigger]);

		return node;

	}

	conv(str) {

		this.copyButton.textContent = str.replace(
		 /([0-9])|([A-Z])|([a-z])/g, (c, zero, A, a) => {
			const chr = String.fromCodePoint(
			 c.codePointAt() + (++zero ? this.shiftZero : this.shiftA) - !!a * 6
			);
			return(BracketsE.letterlike[chr] || chr);
		});
		this.copyButton.disabled = !this.copyButton.textContent.length;

	}

	copy(e) {

		navigator.clipboard.writeText(e.target.textContent);

	}

}

const bracketsEs = [
 '𝐀𝟎', '𝐴', '𝑨', '𝒜', '𝓐', '𝔄', '𝔸𝟘', '𝕬', '𝖠𝟢', '𝗔𝟬', '𝘈', '𝘼', '𝙰𝟶'
].map(A0 => new BracketsE(A0));
document.getElementById('in').addEventListener('change',
 e => bracketsEs.forEach(E => E.conv(e.target.value))
);

}
