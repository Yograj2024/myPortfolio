import { object } from "framer-motion/client";

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
    siteTitle : { hi:"पोर्टफोलियो", mr:"पोर्टफोलिओ", en:"portfolio" },
    navItems  : { hi: navItemsArray("hi"), mr: navItemsArray("mr"), en: navItemsArray("en") }
}

export const heroSection = {
    hi : {
        greeting    :  "नमस्ते...! मैं हूँ",
        firstName   :  "योगराज",
        lastName    :  "सिंह",
        role        :  "फ्रंटएंड डेवलपर & फुल-स्टैक डेवलपर (अभी सीख रहा हूँ)",
        currentWork :  "वर्तमान में, मैं DevSoft Tech (HMS) में फुल-स्टैक डेवलपर के रूप में योगदान दे रहा हूँ। React, Laravel, TailwindCSS, और SQL के साथ।",
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

export const aboutMeSec = {
    company : "DevSoft Tech HMS",
    educationMeta  : {
        graduation : { duration : "2021 - 2024", grade : "6.2 CGPA"  },
        school     : { duration : "2020 - 2021", grade : "85%"  }
    },
    hi : {
        secTitle : "मेरे बारे में",
        secIntro : "मैं अपने काम के साथ-साथ नए चीज़ें सीखने और अनुभव करने में आनंद महसूस करता हूँ। पढ़ाई, यात्रा और नए विचारों के साथ प्रयोग करना हमेशा मुझे प्रेरित करता है, और इस आदत के कारण मैं दुनिया को अलग-अलग दृष्टिकोणों से देख पाता हूँ। मेरे लिए, काम केवल डेडलाइन तक सीमित नहीं है—यह कुछ अर्थपूर्ण बनाने, नए अवसरों की खोज करने और वास्तव में यात्रा का आनंद लेने के बारे में है। मेरा मानना है कि सीखने और विकास की यह निरंतर प्रक्रिया ही जीवन को वास्तव में अर्थपूर्ण बनाती है।",
        workExperienceData : {
            heading : "कार्य अनुभव",
            position : "फ्रंटएंड डेवलपर",
            duration : "अगस्त 2024 - वर्तमान",
            description : [
                "अगस्त 2024 से, मैं DevSoft Tech HMS में फुल-स्टैक डेवलपर के रूप में फ्रंटएंड और बैकएंड दोनों में योगदान दे रहा हूँ।",
                "मैं मुख्य रूप से React, TailwindCSS और JavaScript के साथ फ्रंटएंड एप्लिकेशन बनाता हूँ। इसके साथ ही, मैं Laravel और SQL डेवलपमेंट में भी योगदान देता हूँ ,जिससे मुझे फुल-स्टैक डेवलपमेंट में योगदान करने का अवसर मिलता है।",
                "इसके साथ ही मेने आपने  व्यक्तिगत प्रोजेक्ट्स पर भी काम किया, जैसे कि - Netflix GPT, AI आधारित मूवी रेकमेंडेशन एप और भाषा स्विचिंग बहुभाषी पोर्टफोलियो वेबसाइट।"
            ]
        },
        education : {
            heading : "शिक्षा",
            educationHistory : [
                {
                    id : "graduation",
                    institution : "एस.सी. गुरिया इंस्टीट्यूट ऑफ मैनेजमेंट एंड लॉ कॉलेज",
                    degree : "कंप्यूटर एप्लीकेशन में स्नातक",
                    university : "कुमाऊँ विश्वविद्यालय, नैनीताल से संबद्ध",
                    location : "काशीपुर , उत्तराखंड",
                },
                {
                    id : "school",
                    institution : "तुलाराम राजाराम सरस्वती विद्या मंदिर इंटर कॉलेज",
                    degree : "12वीं (वरिष्ठ माध्यमिक)",
                    university : "उत्तराखंड बोर्ड",
                    location : "काशीपुर , ऊधमसिंह नगर"
                }
            ],
        }
    },
    en : {
        secTitle : "about me",
        secIntro : "I enjoy learning and experiencing new things alongside my work. Reading, traveling, and experimenting with new ideas constantly inspire me, and this habit enables me to see the world from different perspectives. For me, work is not limited to deadlines—it is about creating something meaningful, exploring new possibilities, and truly enjoying the journey. I believe that this continuous process of learning and growth is what makes life truly meaningful.",
        workExperienceData : {
            heading : "Work Experience",
            position : "Frontend Developer",
            duration : "Aug 2024 - Present",
            description : [
                "Since August 2024, I have been working at DevSoft Tech HMS as a Full-Stack Developer, contributing to both frontend and backend development.",
                "I primarily work with React, TailwindCSS, and JavaScript to build frontend applications. Alongside this, I also contribute to Laravel and SQL development. This allows me to play a role in full-stack development process.",
                "Also worked on personal projects like a Netflix GPT website for AI-based movie recommendations and a multi-language personal portfolio website with seamless language switching."
            ],
        },
        education : {
            heading : "Education",
            educationHistory : [
                {
                    id : "graduation",
                    institution : "SC Guria Institute of Management & Law College",
                    degree : "Bachelor of Computer Application",
                    university : "Affiliated by Kumaun University, Nainital",
                    location : "Kashipur , Uttarakhand"
                },
                {
                    id : "school",
                    institution : "Tularam Rajaram Saraswati Vidya Mandir Inter College",
                    degree : "12th (Senior Secondary)",
                    university : "Uttarakhand Board",
                    location : "Kashipur , Udham Singh Nagar"
                }
            ],
        }  
    },
    mr : {
        secTitle : "माझ्याबद्दल",
        secIntro : "मला माझ्या कामासोबतच नवीन गोष्टी शिकणे आणि अनुभवणे आवडते. वाचन, प्रवास आणि नवीन कल्पनांसह प्रयोग करणे मला सतत प्रेरणा देते आणि ही सवय मला वेगवेगळ्या दृष्टिकोनातून जगाकडे पाहण्यास सक्षम करते. माझ्यासाठी, काम हे केवळ अंतिम मुदतीपुरते मर्यादित नाही - ते काहीतरी अर्थपूर्ण निर्माण करणे, नवीन शक्यतांचा शोध घेणे आणि प्रवासाचा खरा आनंद घेणे याबद्दल आहे. मला वाटते की शिकण्याची आणि वाढीची ही सतत प्रक्रिया जीवनाला खरोखर अर्थपूर्ण बनवते।",
        workExperienceData : {
            heading : "कामाचा अनुभव",
            position : "फ्रंटएंड डेव्हलपर",
            duration : "अगस्त 2024 - वर्तमान",
            description : [
                "ऑगस्ट २०२४ पासून, मी डेव्हसॉफ्ट टेक एचएमएसमध्ये फुल-स्टॅक डेव्हलपर म्हणून काम करत आहे, फ्रंटएंड आणि बॅकएंड डेव्हलपमेंटमध्ये योगदान देत आहे।",
                "मी प्रामुख्याने फ्रंटएंड अॅप्लिकेशन्स तयार करण्यासाठी React, TailwindCSS आणि JavaScript सोबत काम करतो. यासोबतच, मी Laravel आणि SQL डेव्हलपमेंटमध्ये देखील योगदान देतो. यामुळे मला फुल-स्टॅक डेव्हलपमेंट प्रक्रियेत भूमिका बजावता येते।",
                "तसेच एआय-आधारित चित्रपट शिफारसींसाठी नेटफ्लिक्स जीपीटी वेबसाइट आणि अखंड भाषा स्विचिंगसह बहु-भाषिक वैयक्तिक पोर्टफोलिओ वेबसाइट सारख्या वैयक्तिक प्रकल्पांवर काम केले।"
            ],
        },
        education : {
            heading : "शिक्षण",
            educationHistory : [
                {
                    id : "graduation",
                    institution : "एस.सी. गुरिया इंस्टीट्यूट ऑफ मैनेजमेंट एंड लॉ कॉलेज",
                    degree : "कंप्यूटर अप्लिकेशन पदवी",
                    university : "कुमाऊं विद्यापीठ, नैनीताल संलग्न",
                    location : "काशीपुर , उत्तराखंड"
                },
                {
                    id : "school",
                    institution : "तुलाराम राजाराम सरस्वती विद्या मंदिर इंटर कॉलेज",
                    degree : "12वीं (वरिष्ठ माध्यमिक)",
                    university : "उत्तराखंड बोर्ड",
                    location : "काशीपुर , ऊधमसिंह नगर"
                }
            ],
        }  
    }
}

const skillsCore = {
    frontend: {
        icon    : "https://cdn-icons-png.flaticon.com/512/11074/11074357.png",
        iconCss : "bg-blue-300/20",
        skillSet  : ["React", "ComponentBased Development", "HTML/CSS", "JavaScript", "Tailwind", "UI Design", "Redux", "Form Handling"],
    },
    backend: {
        icon    : "https://cdn-icons-png.flaticon.com/512/657/657695.png",
        iconCss : "bg-yellow-500/20",
        skillSet  : ["Laravel", "MySQL", "REST APIs" , "CRUD Operations", "MVC Architecture"],
    },
    tools: {
        icon    : "https://cdn-icons-png.flaticon.com/512/10161/10161143.png",
        iconCss : "bg-blue-300/20",
        skillSet  : ["GitHub", "VS Code", "Git" ,"MySQL Workbench", "NPM", "Postman"],
    }
}
const serviceIcons = {
    userCentric : { icon: " https://cdn-icons-png.flaticon.com/512/18743/18743455.png" },
    cleanCode   : { icon: "https://cdn-icons-png.flaticon.com/512/17365/17365478.png " },
    design      : { icon: " https://cdn-icons-png.flaticon.com/512/10982/10982562.png" },
    performance : { icon: "https://cdn-icons-png.flaticon.com/512/18882/18882511.png " }
}

export const service = {
    hi : [
        {
            title : "यूज़र-सेंट्रिक",
            description : "मैं हर डिज़ाइन और डेवलपमेंट निर्णय में उपयोगकर्ताओं को पहले स्थान पर रखता हूँ।",
            ...serviceIcons.userCentric
        },
        {
            title : "परफॉर्मेंस",
            description : "फ़ंक्शनैलिटी से समझौता किए बिना गति और दक्षता के लिए ऑप्टिमाइज़ करना।",
            ...serviceIcons.performance
        },
        {
            title : "क्लीन कोड",
            description : "समय की कसौटी पर खरा उतरने वाला, रखरखाव योग्य, स्केलेबल और कुशल कोड लिखना।",
            ...serviceIcons.cleanCode
        },
        {
            title : "सुंदर डिज़ाइन",
            description : "ऐसे सहज इंटरफेस बनाना जो उपयोगकर्ताओं को प्रसन्न करें और उनके अनुभव को बेहतर बनाएं।",
            ...serviceIcons.design
        },
    ],
    en : [
        {
            title : "User-Centric",
            description : "Putting users first in every design and development decision I make.",
            ...serviceIcons.userCentric
        },
        {
            title : "Performance",
            description : "Optimizing for speed and efficiency without compromising on functionality.",
            ...serviceIcons.performance
        },
        {
            title : "Clean Code",
            description :  "Writing maintainable, scalable, and efficient code that stands the test of time.",
            ...serviceIcons.cleanCode
        },
        {
            title : "Beautiful Design",
            description : "Creating intuitive interfaces that delight users and enhance their experience.",
            ...serviceIcons.design
        },
    ]
}

export const skillSec = {
    hi : {
        secHeading : "कौशल",
        secIntro : "React.js, Tailwind CSS और JavaScript का उपयोग करके आकर्षक और रिस्पॉन्सिव वेब इंटरफेस बनाना। बैकएंड डेवलपमेंट और डेटाबेस मैनेजमेंट के लिए Laravel और SQL से परिचित हूँ, API इंटीग्रेशन का अनुभव है और फुल-स्टैक डेवलपमेंट वर्कफ़्लोज़ की समझ है।",
        skillsData : [
            { title   : "फ्रंटएंड डेवलपमेंट",    ...skillsCore.frontend },
            { title   : "बैकएंड डेवलपमेंट",    ...skillsCore.backend },
            { title   : "टूल्स एंड टेक्नोलॉजीज", ...skillsCore.tools }
        ]
    },
    en : {
        secHeading : "slkills",
        secIntro : "Building modern and responsive web interfaces using React.js, Tailwind CSS, and JavaScript. Familiar with Laravel and SQL for backend development and database management, experienced in API integration, and having a good understanding of full-stack development workflows.",
        skillsData : [
            { title   : "frontend Ddevelopment", ...skillsCore.frontend },
            { title   : "backend development",   ...skillsCore.backend },
            { title   : "tools & technologies",  ...skillsCore.tools }
        ]
    },
    mr : {
        secHeading : "कौशल्ये",
        secIntro : "React.js, Tailwind CSS आणि JavaScript वापरून आकर्षक आणि प्रतिसादक्षम वेब इंटरफेस तयार करतो. Backend development आणि database management साठी Laravel आणि SQL मध्ये पारंगत आहे, API integration चा अनुभव आहे आणि full-stack development workflows चे चांगले ज्ञान आहे.",
        skillsData : [
            { title   : "फ्रंटएंड डेव्हलपमेंट",    ...skillsCore.frontend },
            { title   : "बॅकएंड डेव्हलपमेंट",    ...skillsCore.backend },
            { title   : "टूल्स अँड टेक्नॉलॉजीज", ...skillsCore.tools }
        ]
    }
}

