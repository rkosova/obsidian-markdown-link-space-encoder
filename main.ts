import { Editor, MarkdownView, Plugin, Notice } from 'obsidian';


export default class MarkdownLinkSpaceEncoder extends Plugin {

	async onload() {
		
		this.addCommand({
			id: 'markdown-link-space-encode',
			name: 'Encode spaces to %20',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let selection: string = editor.getSelection();
				let split = selection.match(/(\[.*\])(\(.*\))/);
				if (split) {
					let link = split[2].replace(/ /g, '%20');
					editor.replaceSelection(split[1] + link);
				} else {
					editor.replaceSelection(selection);
					new Notice("No link in selection, or incorrect formatting!");
				}
			}
		});

	}

	onunload() {

	}

}