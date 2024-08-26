import { EditorConfigurations } from "../components/customEditor";

export const constructEditorConfiguration = (subHeading: string, customTheme?: boolean) => {
    var editorConfigurations: EditorConfigurations = {
        subHeading: subHeading,
        customTheme: customTheme ? customTheme: false
    }
    return editorConfigurations;
}