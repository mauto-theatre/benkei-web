const siteurl = import.meta.env.BASE_URL
const headermenu: Record<string, string> = {
    トップ: siteurl,
    つぎ: siteurl + "notes/theatre-no5-kitare",
    いままで: siteurl + "works",
    アバウト: siteurl + "#アバウト",
    ニュース: siteurl + "#ニュース",
    コンタクト: siteurl + "contact"
};

export default headermenu;