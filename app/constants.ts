export const BEARER_PAGE_CONSTANTS = {
    BEARER_TOKEN_THEME : "bearerTokenTheme",
    BEARER_TOKEN_LANGUAGE: "bearerTokenLanguage",
    BEARER_TOKEN_THEME_RULES: [
        { token: 'header', foreground: 'ff0000' },
        { token: 'payload', foreground: '00ff00' },
        { token: 'signature', foreground: '0000ff' }
    ]
}

export const BEARER_PAGE_TOKENIZER_ROOT : [string,string][] = [
    ['^[^.]+', 'header'],
    ['(?<=\.)[^.]+(?=\.)', 'payload'],
    ["[^.]+$", 'signature'],
]