export function sv(){
    const categories = {
        education: "Utbildning",
        work: "Arbetslivserfarenhet",
        hobbies: "Hobby projekt",
        links: "Länkar",
        home: "Hem",
    }

    const home = {
        welcome_title: "Hej och välkommen till min portfolio hemsida!",
        welcome_desc: 
        "Jag heter Kevin och på denna hemsida har jag försökt samla och visa upp allt som jag har erfarit och lärt mig när det kommer till teknik och IT. " + 
        "Personligen har jag alltid tyckt om att programmera, lösa problem som uppstår och arbeta med datorer osv. " +
        "Jag tar ofta eget initiativ, är väldigt driven och ser gärna till att arbetet/projektet blir klart i tid som planerat.",
    }

    const lang = {
        root: "sv",
        categories: categories,
        home: home,

    }
    return lang;
}

export function en(){
    const categories = {
        education: "Education",
        work: "Work experience",
        hobbies: "Hobby projects",
        links: "Links",
        home: "Home",
    }

    const home = {
        welcome_title: "Hello and welcome to my portfolio website!",
        welcome_desc: 
        "My name is Kevin and on this website I have tried to gather and showcase everything I have experienced and learnt when it comes to technology and IT. " +
        "I personally have always liked to code, solve problems and generally work with computers etc. " + 
        "I oftentimes take initiative, am driven and will gladly see to it that the work/project gets done on time as planned.",
    }

    const lang = {
        root: "en",
        categories: categories,
        home: home,
    }
    return lang;
}