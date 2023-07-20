import { Editor, MarkdownView, Plugin } from 'obsidian';


export default class MarkdownLinkSpaceEncoder extends Plugin {

	async onload() {
		
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'markdown-link-space-encode',
			name: 'Encode spaces to %20',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let mdLinkUnencoded: string = editor.getSelection();
				// mdLinkUnencoded.replace(/(?!\[[a-zA-Z0-9]+\]\([a-zA-Z0-9]+\))/g, '')
				// console.log(mdLinkUnencoded);
				editor.replaceSelection(mdLinkUnencoded.replace(/ /g, "%20"));
			}
		});

	}

	onunload() {

	}

}