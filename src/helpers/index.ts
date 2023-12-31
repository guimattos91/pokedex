export const unslugify = (slug: string): string =>
    slug
    .split('-').map((item) => `${item[0].toLocaleUpperCase()}${item.substring(1)}`)
    .join(' ')
