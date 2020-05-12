export function latinToIpa(text: string) {
    return text.replace(/nads([eę])/g, 'nac$1')
        .replace(/ı/g, 'i̯')
        .replace(/e/g, 'ɛ')
        .replace(/ě/g, 'ьɛ')
        .replace(/ę/g, 'ьæ')
        .replace(/ŕ/g, 'ьǝr')
        .replace(/([ščžj])ь/g, '$1')
        .replace(/y/g, 'ɪ')
        .replace(/å/g, 'ɒ')
        .replace(/o/g, 'ɔ')
        .replace(/[ŕṙ]/g, 'ər')
        .replace(/[ŀĺ]/g, 'əl')
        .replace(/[ò’]/g, 'ə')
        .replace(/ų/g, 'ʊ')
        .replace(/c/g, 't͡s')
        .replace(/č/g, 't͡ʃ')
        .replace(/šć/g, 'ɕt͡ɕ')
        .replace(/ć/g, 't͡ɕ')
        .replace(/dz/g, 'd͡z')
        .replace(/dž/g, 'd͡ʒ')
        .replace(/žđ/g, 'ʑd͡ʑ')
        .replace(/đ/g, 'd͡ʑ')
        .replace(/x/g, 'ks')
        .replace(/h/g, 'x')
        .replace(/š/g, 'ʃ')
        .replace(/ž/g, 'ʒ')
        .replace(/sť/g, 'sʲtʲ')
        .replace(/st́/g, 'sʲtʲ')
        .replace(/zď/g, 'zʲdʲ')
        .replace(/ť/g, 'tʲ')
        .replace(/t́/g, 'tʲ')
        .replace(/tь/g, 'tʲ')
        .replace(/ď/g, 'dʲ')
        .replace(/d́/g, 'dʲ')
        .replace(/dь/g, 'dʲ')
        .replace(/ś/g, 'sʲ')
        .replace(/sь/g, 'sʲ')
        .replace(/ź/g, 'zʲ')
        .replace(/zь/g, 'zʲ')
        .replace(/ř/g, 'rʲ')
        .replace(/r[ьj]/g, 'rʲ')
        .replace(/ń/g, 'ɲ')
        .replace(/n[ьj]/g, 'ɲ')
        .replace(/ľ/g, 'ʎ')
        .replace(/ĺ/g, 'ʎ')
        .replace(/l[ьj]/g, 'ʎ')
        .replace(/ь/g, 'j')
        .replace(/l/g, 'ɫ')
        .replace(/ɫ([ii̯e])/g, 'l$1')
        .replace(/t͡sj/g, 't͡sʲ')
        .replace(/d͡zj/g, 'd͡zʲ')
    ;
}
