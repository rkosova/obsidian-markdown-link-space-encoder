import { Editor, MarkdownView, Plugin, Notice } from 'obsidian';


export default class MarkdownLinkSpaceEncoder extends Plugin {

	async onload() {
		
		this.addCommand({
			id: 'markdown-link-space-encode',
			name: 'Encode spaces to %20',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let selection: string = editor.getSelection();
				let replacedSel: string = selection.replace(/\[[^\]]*\]\([^\)]*\)/g, (match: string): string => {
					let split: RegExpMatchArray | null = match.match(/(\[.*\])(\(.*\))/);
					if (split) {
						return split[1] + split[2].replace(/ /g, '%20');
					}

					return match;
				});

				if (replacedSel === selection) {
					new Notice('No link in selection or incorrect link formatting!');
				}
				editor.replaceSelection(replacedSel);
			}
		});

	}

	onunload() {

	}

}