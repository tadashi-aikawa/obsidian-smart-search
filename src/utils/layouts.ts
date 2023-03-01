export type LANGUAGES = {
  RUSSIAN: { [k: string]: string };
  UKRAINIAN: { [k: string]: string };
  POLISH: { [k: string]: string };
  GERMAN: { [k: string]: string };
  ROMANIAN: { [k: string]: string };
  FRENCH: { [k: string]: string };
  TURKISH: { [k: string]: string };
  PORTUGUESE: { [k: string]: string };
  SPANISH: { [k: string]: string };
  ITALIAN: { [k: string]: string };
};

export const layouts: LANGUAGES = {
  RUSSIAN: {
    й: "q",
    ц: "w",
    у: "e",
    к: "r",
    е: "t",
    н: "y",
    г: "u",
    ш: "i",
    щ: "o",
    з: "p",
    х: "[",
    ъ: "]",
    ф: "a",
    ы: "s",
    в: "d",
    а: "f",
    п: "g",
    р: "h",
    о: "j",
    л: "k",
    д: "l",
    ж: ";",
    э: "'",
    я: "z",
    ч: "x",
    с: "c",
    м: "v",
    и: "b",
    т: "n",
    ь: "m",
    б: ",",
    ю: ".",
    Ё: "~",
    ё: "`",
  },
  UKRAINIAN: {
    й: "q",
    ц: "w",
    у: "e",
    к: "r",
    е: "t",
    н: "y",
    г: "u",
    ш: "i",
    щ: "o",
    з: "p",
    х: "[",
    ї: "]",
    ф: "a",
    і: "s",
    в: "d",
    а: "f",
    п: "g",
    р: "h",
    о: "j",
    л: "k",
    д: "l",
    ж: ";",
    є: "'",
    я: "z",
    ч: "x",
    с: "c",
    м: "v",
    и: "b",
    т: "n",
    ь: "m",
    б: ",",
    ю: ".",
    Є: "~",
    І: "`",
    Г: "{",
    Ґ: "}",
    ў: "\\",
  },
  POLISH: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    z: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    ą: "[",
    ś: "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ł: ";",
    ż: "'",
    ź: "\\",
    ć: "z",
    ń: "x",
    ę: "c",
    y: "b",
    x: "n",
    c: "m",
    v: ",",
    b: ".",
    Ż: "}",
    Ź: "{",
    Ą: "]",
    Ś: "[",
    Ł: ":",
    Ć: "/",
    Ó: "-",
    Ń: ".",
    É: "'",
  },
  GERMAN: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    z: "z",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    ü: "[",
    "+": "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ö: ";",
    ä: "'",
    y: "\\",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ß: ",",
    Ü: "}",
    "*": "{",
    Ä: ":",
    Ö: '"',
  },
  ROMANIAN: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    z: "z",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    ă: "[",
    â: "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ș: ";",
    ț: "'",
    y: "\\",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    î: ",",
    Ă: "}",
    Â: "{",
    Ş: ":",
    Ţ: '"',
  },
  FRENCH: {
    a: "a",
    z: "z",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    ù: "^",
    "+": "$",
    q: "q",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    ç: "ç",
    w: "w",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    ",": ";",
    ":": ":",
    "!": "!",
    "?": "?",
  },
  TURKISH: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    ı: "i",
    o: "o",
    p: "p",
    ğ: "[",
    ü: "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ş: ";",
    i: "'",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ö: ",",
    ç: ".",
    Ğ: "{",
    Ü: "}",
    Ş: ":",
    İ: '"',
  },
  PORTUGUESE: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "+": "[",
    ã: "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ç: ";",
    õ: "'",
    z: "\\",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    á: ",",
    é: ".",
    â: "`",
    ê: "^",
    í: ":",
    ó: "/",
    ô: "]",
    ú: "[",
  },
  SPANISH: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "+": "[",
    ñ: "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    á: ";",
    é: "'",
    í: "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ó: ",",
    ú: ".",
    ü: "^",
    "¡": "!",
    "¿": "?",
  },
  ITALIAN: {
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "+": "^",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ò: "[",
    à: "]",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ù: ",",
    é: ".",
    è: ";",
    ì: ":",
  },
};
