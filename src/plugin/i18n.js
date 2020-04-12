import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        menutitle: 'Coronavirus disease Situation Menu',
        global: 'Global',
        countrycase: ' Countries By Cases',
        start: 'Screening Kit',
        donation: 'Donation',
        news: 'News',
        aboutus: 'About Us',
        langswitchMyanmar: 'Myanmar',
        langswitchEnglish: 'English',
        langdesc: 'language',
        globaldashboard: {
            confirmcase: "Confirmed Cases",
            newcases : "New Cases",
            recover : "Recover",
            death : "Death",
            countries : "Countries"
        }
    },
    'mm': {
        menutitle: 'ကိုရိုနာကူးစက်ခံရမှုပြ မာတိကာ',
        global: 'ကမ္ဘာတစ်ဝှမ်း',
        countrycase: 'နိုင်ငံအလိုက်',
        start: 'ကျန်းမာရေးစစ်',
        donation: 'အလှူစာရင်း',
        news: 'သတင်းများ',
        aboutus: 'App အကြောင်း',
        langswitchMyanmar: 'မြန်မာ',
        langswitchEnglish: 'အင်္ဂလိပ်',
        langdesc: 'ဘာသာစကား',
        globaldashboard: {
            confirmcase: "အတည်ပြုလူနာ",
            newcases : "ယနေ့ ထပ်တိုးလူနာ",
            recover : "ရောဂါပျောက်ဆုံးလူနာ",
            death : "သေဆုံးလူနာ",
            countries : "နိုင်ငံပေါင်း"



        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'mm', // set fallback locale
    messages, // set locale messages
});

export default i18n;
