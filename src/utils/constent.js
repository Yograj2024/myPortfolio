
export const inputClasses = `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600`;

export const supportedLanguage = [
  { lanCode: 'hi', lanName: 'हिन्दी',    countryCode: 'IN', },
  { lanCode: 'en', lanName: 'English', countryCode: 'GB', },
  { lanCode: 'mr', lanName: 'मराठी',    countryCode: 'IN', },
];

const socialLinkCss = `inline-flex items-center justify-center aspect-square rounded-full mx-[1rem] inset-shadow-sm 
transition-all duration-300 ease-linear
`
export const socialLinks = [
    {
        href : "https://github.com/Yograj2024",
        icon : "fa-brands fa-github",
        css : socialLinkCss
    },
    {
        href : "mailto:c15387592@gmail.com",
        icon : "fa-regular fa-envelope ",
        css : socialLinkCss
    },
    {
        href : "https://www.linkedin.com/in/yograj-singh-750a07315",
        icon : "fa-brands fa-linkedin-in",
        css : socialLinkCss
    }
]

export const netflixLogo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
const phoneSvgPath = "M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.08 4.1 2 2 0 014.1 2h3a2 2 0 012 1.72c.13.95.39 1.87.78 2.73a2 2 0 01-.45 2.11L8.1 9.1a16 16 0 006 6l.54-.54a2 2 0 012.11-.45c.86.39 1.78.65 2.73.78a2 2 0 011.72 2.03z"


export const contact = [
    {
        type : "email",
        value : "c15387592@gmail.com",
        href : "mailto:",
        icon : "fa-regular fa-envelope",
    },
    {
        type : "phone",
        value : "+91 6395560244",
        href : "tel:",
        icon : phoneSvgPath
    },
    {
        type : "location",
        value : "Kashipur, Uttarakhand - 244713",
        href : null,
        icon : "fa-solid fa-location-dot"
    }
]

export const contactIcon = [
    {
        reDirectPath : "https://github.com/Yograj2024",
        iconClass : "fa-brands fa-github text-[1.5rem] "
    },
    {
        reDirectPath: "https://www.linkedin.com/in/yograj-singh-750a07315",
        iconClass : "fa-brands fa-linkedin-in text-[1.3rem]"
    }
]
