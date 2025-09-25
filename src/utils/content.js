
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
    hi:[
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
    mr:[
        {
            title :"वापरकर्ता-केंद्रित",
            description : "मी प्रत्येक डिझाइन आणि विकास निर्णयामध्ये वापरकर्त्यांना प्रथम स्थान देतो.",
            ...serviceIcons.userCentric
        },
        {
            title : "परफॉर्मन्स",
            description : "फंक्शनॅलिटीशी तडजोड न करता वेग आणि कार्यक्षमतेसाठी ऑप्टिमाइझ करणे.",
            ...serviceIcons.performance
        },
        {
            title :" स्वच्छ कोड",
            description :  "काळाच्या कसोटीवर टिकणारा, देखभालयोग्य, स्केलेबल आणि कार्यक्षम कोड लिहिणे.",
            ...serviceIcons.cleanCode
        },
        {
            title : "सुंदर रचना",
            description : "सहज समजणारे इंटरफेस तयार करणे जे वापरकर्त्यांना आनंदित करतात आणि त्यांचा अनुभव सुधारतात.",
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

export const projectSec = {
    hi:{
        secHeading : "प्रोजेक्ट्स",
        secIntro : "ये प्रोजेक्ट्स मेरी क्षमता को दर्शाते हैं कि मैं उपयोगी और यूज़र-फ्रेंडली एप्लिकेशन बना सकता हूँ। मैं साफ-सुथरा, व्यवस्थित, स्केलेबल और पुन: उपयोग करने योग्य कोड लिखने पर ध्यान देता हूँ, ताकि प्रोजेक्ट के बढ़ने के साथ-साथ उसे आसानी से मेंटेन और आगे विकसित किया जा सके। ये प्रोजेक्ट्स मेरे डिजाइन, डेवलपमेंट और इम्प्लिमेंटेशन के कौशल को भी उजागर करते हैं।",  
    },
    mr:{
        secHeading :"प्रोजेक्ट्स",
        secIntro : "हे प्रोजेक्ट्स माझी क्षमता दाखवतात की मी उपयुक्त आणि युजर-फ्रेंडली अॅप्लिकेशन्स तयार करू शकतो. मी स्वच्छ, व्यवस्थित, स्केलेबल आणि पुन्हा वापरता येणारा कोड लिहिण्यावर लक्ष केंद्रित करतो,ज्यामुळे प्रोजेक्ट वाढत असताना त्याला सहजपणे मेंटेन आणि विकसित करता येईल. हे प्रोजेक्ट्स माझी डिझाईन, डेव्हलपमेंट आणि इम्प्लिमेंटेशन कौशल्ये देखील दाखवतात."
    },
    en:{
        secHeading : "projects",
        secIntro :"These projects showcase my ability to build practical and user-friendly applications. I focus on writing clean, organized, scalable, and reusable code, following best practices to ensure it is easy to maintain and grow as the project evolves. These project also highlights my skills in design, development, and implementation. ",
    }
}

export const gptDetails = {
  techStack :  [ 
    {
      tech : "react", css : 'h-[2.3rem]',
      imgSrc : "https://cdn-icons-png.flaticon.com/512/875/875209.png",
    },
    {
      tech : "tailwind", css : 'h-[2.3rem]',
      imgSrc : "https://img.icons8.com/?size=256&id=4PiNHtUJVbLs&format=png",
    },
    {
      tech : "fireBase", css : 'h-[2rem]',
      imgSrc : "https://favicons.statusgator.com/MqOvqtHCckWT6WuS.png",
    },
    {
      tech : "gpt-4", css : 'h-[2.3rem]',
      imgSrc : "src/assets/image copy.png",
    }
  ],
  en: {
    heading: "Netflix GPT feature",
    introPoints :  [
      "it is a movie recommendation app.",
      "Users can enter any query to get personalized movie suggestions.",
      "It provide movie's information of each movie.",
      "it's provides recommendations and details but not play videos.",
      "The app was created using the following tools :-"
    ],
  },
  hi: {
    heading: "Netflix GPT फीचर",
    introPoints :   [
      "यह एक मूवी सुझाव ऐप है।",
      "यूज़र कोई भी सवाल दर्ज करके व्यक्तिगत मूवी सुझाव प्राप्त कर सकते हैं।",
      "यह प्रत्येक मूवी की जानकारी प्रदान करता है।",
      "यह सुझाव और जानकारी प्रदान करता है लेकिन वीडियो प्ले नहीं होगी।",
      "यह ऐप इन टूल्स का उपयोग करके बनाया गया है :-"
    ],
  },
  mr: {
    heading: "Netflix GPT वैशिष्ट्य",
    introPoints :  [
      "हे एक चित्रपट सुझाव अॅप आहे.",
      "युजर कोणताही प्रश्न टाकून वैयक्तिक चित्रपट सुझाव मिळवू शकतात.",
      "हे प्रत्येक चित्रपटाची माहिती देते.",
      "हे सुझाव आणि तपशील देते पण व्हिडिओ प्ले होणार नाही.",
      "हे अॅप या टूल्स वापरून तयार केले आहे :-"
    ],
  }
};

export const contactSec = {
    hi:{
        secHeading : "संपर्क करें",
        secIntro  : "मैं आपसे जुड़ना पसंद करूंगा...! आपके पास कोई प्रोजेक्ट है या किसी अवसर पर चर्चा करना चाहते हैं...? चलिए मिलकर कुछ शानदार बनाते हैं। मैं हमेशा नए विचारों, सहयोग और बातचीत के लिए तैयार हूं — बस मुझे एक संदेश भेजें और मैं जल्दी ही आपको जवाब दूंगा।",
        formContent:{
            title : "अपना संदेश लिखें",
            placeHolders : {
                name:"आपका नाम", 
                email:"आपका ईमेल" ,
                message:"अपना संदेश लिखें", 
                subject:"विषय"
            },
            btn:"संदेश भेजें"
        }
    },
    mr:{
        secHeading : "आमच्याशी संपर्क साधा",
        secIntro : "मला तुमच्याशी संपर्क साधायला आवडेल...! एखादा प्रकल्प आहे की एखाद्या संधीवर चर्चा करायची आहे...? चला एकत्र काहीतरी अद्भुत बनवूया. मी नेहमीच नवीन कल्पना, सहकार्य आणि संभाषणासाठी खुला असतो—फक्त मला एक संदेश पाठवा आणि मी लवकरच प्रतिसाद देईन।",
        formContent:{
            title : "तुमचा संदेश लिहा",
            placeHolders : {
                name:"तुमचे नाव", 
                email:"तुमचा ईमेल" ,
                message:"तुमचा संदेश लिहा", 
                subject:"विषय"
            },
            btn:"संदेश पाठवा"
        }
    },
    en:{
        secHeading : "get in touch",
        secIntro : "I’d love to connect with you...! Got a project in mind or want to discuss an opportunity...? Let’s build something amazing together. I’m always open to new ideas, collaborations, and conversations — just drop me a message and I’ll get back to you quickly.",
        formContent:{
            title : "Write to Me",
            placeHolders : {
                name:"your name", 
                email:"your email" ,
                message:"type your message...", 
                subject:"subject"
            },
            btn:"send message"
        }
    },
}

export const HireMeMess = {
    hi:{
        secHeading : "काम हेतु तत्पर",
        para : "मैं वेब और सॉफ़्टवेयर डेवलपमेंट प्रोजेक्ट्स में फ्रीलांस के लिए तैयार हूँ। मुझे साफ़ ,स्केलेबल कोड लिखने का अनुभव है,"
    },
    mr:{
        secHeading : "",
        para : ""
    },
    en:{
        secHeading : " Available to Hire",
        para : "I’m also available for freelance projects in web and software development. I specialize in building clean, efficient, and scalable solutions, and I’m passionate about turning ideas into functional, high-quality products. Let’s collaborate to bring your project to life."
    }
}