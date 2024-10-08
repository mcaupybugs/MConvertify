export const BEARER_PAGE_CONSTANTS = {
    BEARER_TOKEN_THEME: "bearerTokenTheme",
    BEARER_TOKEN_LANGUAGE: "bearerTokenLanguage",
    BEARER_TOKEN_THEME_RULES: [
        { token: 'header', foreground: 'ff0000' },
        { token: 'payload', foreground: '00ff00' },
        { token: 'signature', foreground: '0000ff' }
    ]
}

export const BEARER_PAGE_TOKENIZER_ROOT: [string, string][] = [
    ['^[^.]+', 'header'],
    ['(?<=\.)[^.]+(?=\.)', 'payload'],
    ["[^.]+$", 'signature'],
]

export const BEARER_OUTPUT_RED_COLOR = '#fb015b';
export const BEARER_OUTPUT_VOILET_COLOR = "#d63aff";
export const BEARER_OUTPUT_BLUE_COLOR = '#00b9f1';

export const BEARER_HEADER_CONTENT_DEFAULT: string = JSON.stringify({
    "alg": "HS256",
    "typ": "JWT"
})

export const BEARER_PAYLOAD_CONTENT_DEFAULT = JSON.stringify({
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
})

export const BEARER_ALGO_DEFAULT = 'HS256'

export const BEARER_TOKEN_DEFAULT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";