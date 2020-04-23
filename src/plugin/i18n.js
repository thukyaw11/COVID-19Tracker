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
            countries : "Countries",
            heading : "Global Dashboard"
        },
        localdashboard : {
            tested : "Tested",
            confirmcase : "Infected",
            newcases : "New Cases",
            recover : "Recover",
            death : "Death",
            seriouscase : "Serious Cases",
            heading : "Local Dashboard"
        },
        bottomBar : {
            local : "Local",
            global : "Global"
        },
        screening : {
            screeningContent : `This General Screening Test of Covid 19 disease contains 9 questions asking about your symptoms, contacts and travel history.
            This is just a general test and contact to emergency healthcare departments if you are suffering severe symptoms.
            Your answers will be securely kept and we will not share without your permission.`,
            screeningHeader : "Covid 19 Screening Test",
            screeningButton : "Start Screening Myself",
            screeningHistory : "View History"
        },
        donationPage : {
            donationHeader  : "Make your own support",
            donationContent : `In order to prevent, stop and cure the disease, every single one of us should pay a role by cooperating and supporting to everyone who needs our help.
            Bank accounts and contacts of the Government and Civil Service Organisations are described in this menu for any financial support.
            Let's win this Covid 19 with our unity.`,
            donationButton : "Donate Now"
        } ,
        aboutusPage : {
            heading : "Coronavirus disease Situation Dashboard",
            content : "We hope to bring an information source that rolls updates on COVID-19, especially for cases in Myanmar, to our citizens.This website is built by the University of Information Technology Students' Union. APIs below are still in development stage and later will be published for further development purposes."
        },
        casesPage : {
            confirmcase : "cases",
            recovered : "Recovered",
            newcases : "New Cases",
            death : "Death",
            serious : "Serious Cirtical",
            newDeath : "New Death",
            casepermin : "Case per 1 min"
        },
        goodHope : {
            para1 : 'Good Hope is a student organization based in Yangon University of Economics, currently operating Online Knowledge Sharing Platform and Research projects.',
            para2 : ' Here, we collaborate with UITSU to create more effective features, to help the community to be aware of COVID-19.'
        },
        newsPage : {
            latest : "Latest",
            yesterday : "Yesterday"
        },
        resultPage : {
            emergencyResponse : 'Emergency Response',
            stayhomeResponse : 'Stayhome Response',
            contactnine : 'Call 911',
            phno : 'Emergency Contacts',
            view : 'View',
            deleteall : 'Delete all history'
        },
        

    },
    'mm': {
        menutitle: 'ကိုရိုနာကူးစက်ခံရမှုပြ မာတိကာ',
        global: 'ကမ္ဘာတစ်ဝှမ်း',
        countrycase: 'နိုင်ငံအလိုက်',
        start: 'ကူးစက်ခံရမှုရှိ/မရှိ စစ်ဆေးခြင်း',
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
            countries : "နိုင်ငံပေါင်း",
            heading : "ကမ္ဘာတစ်ဝှမ်း"
        },
        localdashboard : {            
            tested : "စစ်ဆေးပြီး",
            confirmcase : "ကူးစက်ခံ လူနာ",
            newcases : "ယနေ့ ထပ်တိုးလူနာ",
            recover : "ရောဂါပျောက်ဆုံးလူနာ",
            death : "သေဆုံးလူနာ",
            seriouscase : "ပြင်းထန်လူနာ",
            heading : "မြန်မာ"
        },
        bottomBar : {
            local : "မြန်မာ",
            global : "ကမ္ဘာတစ်ဝှမ်း"
        },
        screening : {
            screeningContent : `ရောဂါကူးစက်ခံရမှု ရှိ/မရှိ ယေဘုယျ စစ်ဆေးရာတွင် သင့်အနေဖြင့် မေးခွန်း ၉ ခုဖြေဆိုရမည်ဖြစ်ပြီး ရောဂါလက္ခဏာများအကြောင်း၊ ခရီးသွားရာဇ၀င်နှင့် လူအများနှင့်ထိတွေ့မှု အကြောင်း မေးမြန်းသွားပါမည်။
            ၎င်းသည် ယေဘုယျ စစ်ဆေးခြင်းသာဖြစ်ပြီး သင့်၌ ပြင်းထန်သော ရောဂါလက္ခဏာများရှိပါက အရေးပေါ် ကျန်းမာရေးဌာနများသို့ အလျင်အမြန်ဆက်သွယ်ပါ။
            ဖြေဆိုထားသောအဖြေများအား လုံခြုံစွာ ထိန်းသိမ်းထားမည်ဖြစ်ပြီး သင်၏ခွင့်ပြုချက်မရှိပဲ မည်သူကိုမှ မျှဝေသွားမည် မဟုတ်ပါ။`,
            screeningHeader : "ကိုဗစ် ၁၉ ရောဂါယေဘုယျစစ်ဆေးခြင်း",
            screeningButton : "စတင်‌စစ်ဆေးမည်",
            screeningHistory : "စစ်ဆေးမှု မှတ်တမ်း"
        },
        donationPage : {
            donationHeader  : "သင်လည်း ကူညီနိုင်ပါတယ်။",
            donationContent : `ဤရောဂါဆိုးအား အမြစ်ဖြတ် တွန်းလှန်နိုင်ရန် မိမိတို့သည် ဘက်ပေါင်းစုံမှ ပူးပေါင်းပါ၀င်ရပါမည်။
            လိုအပ်ချက်များအား ဖြည့်ဆည်းနိုင်ရန် ဤနေရာမှ ငွေကြေးလှူဒါန်းမှုများ ပြုလုပ်နိုင်ပြီး အစိုးရနှင့် အခြားလူမှုအဖွဲ့အစည်းများ၏ ဘဏ်စာရင်းများနှင့် ဆက်သွယ်ရန်ဖုန်းနံပါတ်များအား ဖော်ပြထားပါသည်။
            စုပေါင်းအင်အားဖြင့် Covid 19 အား အနိုင်ယူကြပါစို့`,
            donationButton : "လှူဒါန်းမည်။"
        },
        aboutusPage : {
            heading : "ကိုရိုနာဗိုင်းရပ်စ်အခြေအနေပြရီပို့",
            content : "ကျွန်ုပ်တို့အနေနဲ့ကိုဗစ်19နဲ့ပတ်သက်တဲ့နောက်ဆုံးရအခြေအနေသတင်းအထူးသဖြင့်မြန်မာနိုင်ငံမှသတင်းတွေကိုဒီကနေတစ်ဆင့်မြန်မာပြည်သူတွေကိုယူဆောင်ပေးမယ်နိုင်လို့မျှော်လင့်ပါတယ် ဒီwebsite ကိုသတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်ကျောင်းသားသမဂ္ဂမှတည်ဆောက်ထားတာဖြစ်ပါတယ် အောက်တွင်ဖော်ပြထားသော data တွေဟာယခုလောလောဆယ်တွင်တည်ဆောက်ဆဲဖြစ်သော်လည်းနောက်တစ်ချိန်အသုံးပြုနိုင်ရင်ဖြန့်ဖြူးပေးနိုင်မှာဖြစ်ပါတယ်"
        },
        casesPage : {
            confirmcase : "ဖြစ်ပွား",
            recovered : "ရောဂါပျောက်ဆုံး",
            newcases : "ထပ်တိုး",
            death : "သေဆုံး",
            serious : "ပြင်းထန်",
            newDeath : "ထပ်မံ သေဆုံး",
            casepermin : "၁မိနစ် ဖြစ်ပွားမှုနှုန်း"
        },
        goodHope : {
            para1 : 'Good Hope သည် ရန်ကုန်စီးပွားရေးတက္ကသိုလ်မှ ကျောင်းသားအဖွဲ့အစည်းတစ်ခုဖြစ်ပြီး လက်ရှိတွင် အင်တာနက်အခြေပြု စီးပွားရေးဆိုင်ရာဗဟုသုတများ မျှဝေခြင်းနှင့် သုတေသနအစီအစဉ်များအား လုပ်ဆောင်လျက်ရှိသည်။',
            para2 : 'ပြည်သူများအား ကိုဗစ် - ၁၉ အကြောင်း ပိုမိုထိရောက်စွာ အသိပညာပေးနိုင်ရန်ရည်ရွယ်၍ သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ် ကျောင်းသားများသမဂ္ဂနှင့် ပူးပေါင်းဆောင်ရွက်လျက်ရှိသည်။'
        },
        newsPage : {
            latest : "နောက်ဆုံးရ",
            yesterday : "လွန်ခဲ့သောနေ့က"
        },
        resultPage : {
            emergencyResponse : 'အရေးပေါ် အခြေအနေ',
            stayhomeResponse : 'အိမ်၌သာနေရန်',
            contactnine : '၁၉၉ သို့ဆက်သွယ်ရန်',
            phno : 'အရေးပေါ်ဖုန်းနံပါတ်များ',
            view : 'ကြည့်ရန်',
            deleteall : 'အားလုံးဖျက်မည်'

        }


    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'mm', // set fallback locale
    messages, // set locale messages
});

export default i18n;
