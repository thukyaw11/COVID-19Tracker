import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        menutitle: 'Coronavirus disease Situation Menu',
        global: 'Global',
        local: 'Local',
        countrycase : ' Countries By Cases',
        start : 'Screening Kit',
        donation : 'Donation',
        news : 'News',
        aboutus : 'About Us',
        contants : 'Emergency'
    },
    'mm': {
        menutitle: 'ကိုရိုနာကူးစက်ခံရမှုပြ မာတိကာ',
        global: 'ကမ္ဘာတစ်ဝှမ်း',
        local: 'မြန်မာနိုင်ငံ',
        countrycase : 'နိုင်ငံအလိုက်',
        start : 'ကျန်းမာရေးစစ်',
        donation : 'အလှူစာရင်း',
        news : 'သတင်းများ',
        aboutus : 'App အကြောင်း',
        contants : 'အရေးပေါ်ဖုန်းနံပါတ်များ'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'mm', // set fallback locale
    messages, // set locale messages
});

export default i18n;
