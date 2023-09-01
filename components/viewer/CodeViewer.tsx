import styles from './CodeViewer.module.scss';
import Editor from '@monaco-editor/react';

//TODO iframe or video tag depending on content

export default function CodeViewer() {
    return <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
}
