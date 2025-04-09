const siteurl = import.meta.env.BASE_URL
const headermenu: Record<string, string> = {
    トップ: siteurl,
    次回公演: siteurl + "notes/theatre-no3-yaginoayumi",
    公演記録: siteurl + "works",
    お問い合わせ: siteurl + "contact"
};

export default headermenu;