import { EditorConfigurations } from "../components/customEditor";
import { Buffer } from "buffer";
import * as monaco from 'monaco-editor';

export const constructEditorConfiguration = (subHeading: string, isCustomTheme?: boolean, customTheme?: string, customLanguage?: string, tokenizerRoot?: [string, string][], themeRule?: monaco.editor.ITokenThemeRule[], editorOptions?: monaco.editor.IStandaloneEditorConstructionOptions, defaultValue?: string) : EditorConfigurations => {
    var editorConfigurations: EditorConfigurations = {
        subHeading: subHeading,
        isCustomTheme: isCustomTheme || false,
        customTheme: customTheme || '',
        customLanguage: customLanguage || '',
        tokenizerRoot: tokenizerRoot || [],
        themeRules: themeRule || [],
        options: editorOptions,
        defaultValue: defaultValue
    }
    return editorConfigurations;
}

export const base64Decode = (token: string) : string => {
    return Buffer.from(token, 'base64').toString('binary');
}

export const isValidJson = (input: string) => {
    let isValid = false;

    if(typeof input !== 'string' || (typeof input === 'string' && input.length === 0)){
        return isValid;
    }

    try{
        JSON.parse(input);
        isValid=true;
    }catch(e)
    {
        console.error('Invalid JSON in bearer token')
    }
    return isValid;
}