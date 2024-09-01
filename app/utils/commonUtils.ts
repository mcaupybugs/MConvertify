import { EditorConfigurations } from "../components/customEditor";
import { Buffer } from "buffer";
import * as monaco from 'monaco-editor';

export const constructEditorConfiguration = (subHeading: string, isCustomTheme?: boolean, customTheme?: string, customLanguage?: string, tokenizerRoot?: [string, string][], themeRule?: monaco.editor.ITokenThemeRule[], editorOptions?: monaco.editor.IStandaloneEditorConstructionOptions) => {
    var editorConfigurations: EditorConfigurations = {
        subHeading: subHeading,
        isCustomTheme: isCustomTheme || false,
        customTheme: customTheme || '',
        customLanguage: customLanguage || '',
        tokenizerRoot: tokenizerRoot || [],
        themeRules: themeRule || [],
        options: editorOptions
    }
    return editorConfigurations;
}

export const base64Decode = (token: string) => {
    return Buffer.from(token, 'base64').toString('binary');
}