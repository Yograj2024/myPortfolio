 const baseNav = [
    { key: "home",     to: "/",         type: "link" },
    { key: "aboutMe",  to: "#aboutMe",  type: "hash" },
    { key: "projects", to: "#projects", type: "hash" },
    { key: "contact",  to: "#contact",  type: "hash" },
];

const navData = {
    hi : {
        home : "होम",
        aboutMe : "मेरे बारे में",
        projects : "प्रोजेक्ट्स",
        contact : "संपर्क"
    },
    mr : {
        home : "होम",
        aboutMe : "माझ्याबद्दल",
        projects : "प्रकल्प",
        contact : "संपर्क करा"
    },
    en:{
        home: "home",
        aboutMe: "aboutMe",
        projects: "projects",
        contact: "contact"
    }
}

function navItemsArray (lan) {
    return baseNav.map( item => {
        return {
            label : navData[lan][item.key],
            ...item
        }
    })
} 

export const navBar = {
    siteTitle : {
        hi:"पोर्टफोलियो",
        mr:"पोर्टफोलिओ",
        en:"portfolio"
    },
    navItems  : {
       hi: navItemsArray("hi"),
       mr: navItemsArray("mr"),
       en: navItemsArray("en")
    }
}

export const heroSection = {
    hi : {
        greeting    :  "नमस्ते...! मैं हूँ",
        firstName   :  "योगराज",
        lastName    :  "सिंह",
        role        :  "फ्रंटएंड डेवलपर & फुल-स्टैक डेवलपर (अभी सीख रहा हूँ)",
        currentWork :  "वर्तमान में मैं DevSoft Tech (HMS) में फुल-स्टैक डेवलपर के रूप में योगदान दे रहा हूँ, React, Laravel, TailwindCSS, और SQL के साथ।",
        viewResume  :  "रिज़्यूमे देखें"
    },
    mr : {
        greeting    :  "नमस्कार...! मी",
        firstName   :  "योगराज",
        lastName    :  "सिंग",
        role        :  "फ्रंटएंड डेव्हलपर आणि फुल-स्टॅक डेव्हलपर (प्रगतीपथावर)",
        currentWork :  "सध्या, मी DevSoft Tech (HMS) मध्ये फुल-स्टॅक डेव्हलपर म्हणून योगदान देत आहे, React, Laravel, TailwindCSS आणि SQL यांच्यासोबत कार्य करत आहे.",
        viewResume  :  "रेझ्युमे पहा"
    },
    en : {
        greeting    :  "Hello...! I'm",
        firstName   :  "Yograj",
        lastName    :  "singh",
        role        :  "Frontend Developer | Full-Stack Developer (Learning)",
        currentWork :  "Currently, I am contributing as a Full-Stack Developer at DevSoft Tech (HMS), working with React, Laravel, TailwindCSS, and SQL.",
        viewResume  :  "view resume"
    }
}