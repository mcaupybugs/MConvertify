import { EditorConfigurations } from "../components/customEditor";
import * as monaco from 'monaco-editor';

export const constructEditorConfiguration = (subHeading: string, isCustomTheme?: boolean,customTheme?:string, customLanguage?: string, tokenizerRoot?: [string,string][], themeRule?:monaco.editor.ITokenThemeRule[]) => {
    var editorConfigurations: EditorConfigurations = {
        subHeading: subHeading,
        isCustomTheme: isCustomTheme || false,
        customTheme: customTheme || '',
        customLanguage: customLanguage || '',
        tokenizerRoot: tokenizerRoot || [],
        themeRules: themeRule || []
    }
    return editorConfigurations;
}