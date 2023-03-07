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
        "Jag tar ofta eget initiativ, är väldigt driven och hittar gärna på nya projekt att göra på min fritid.",
        skills: "Skickligheter:",
        competence: "Kompetens",
        javascript_desc: 
        "Jag har jobbat en hel del med javascript förut, allt från att använda mig av javascript biblotek som react.js för arbetsprojekt, till att skapa webb appar i skolan inom våra webbutvecklings kurser. " +
        "Jag är rätt så bekväm att koda i javascript och andra javascript biblotek, och jag är snabb på att lära mig nya javascript koncept som jag inte har hunnit lära mig ännu.",
        html_desc: 
        "Html var det första kodspråket jag började koda i, jag har använt det så mycket nu så att det mesta jag gör i det blir automatiskt. " +
        "Snart därefter html så började lära mig koda i CSS, vilket är alltid ett roligt språk att leka runt med! " +
        "Båda dessa språk kommer naturligt för mig och jag kan koda bra i dem. ",
        java_desc: 
        "Jag har kodat mycket med java nyligen på min fritid, mestadels privata hobby projekt.  " +
        "De flesta av mina projekt har jag dock använt API's och andra externa biblotek för att få projekten att fungera för andra appar. "+
        "Min kunskap med java är rätt så välgrundad och jag tycker om att arbeta med java. ",
        c_desc: 
        "Förr i tiden så kodade jag egna datorspel i C#, i skolan använda jag mig också av C# för att testa anti-virus program för att se hur säkra de var. " +
        "Det var ett tag sedan jag kodade i C# eller C så jag skulle kunna tänka mig att det tar ungefär en vecka tills jag kommer in i ett bra arbetsflöde. ",
        node_desc: 
        "Jag har använt node.js för att installera och köra kod och appar inom all möjliga projekt, jag vet grunderna för att installera och köra kod med node.js. ",
        react_desc: 
        "Jag har kodat en del i projekt hos Ericsson men också egna projekt som denna hemsida i react.js. " +
        "Jag är rätt så bekväm med och tycker det är roligt att koda inom react.js och skapa olika komponenter etc. ",
        git_desc: "Jag är rätt så erfaren att använda git och github, dock så har jag en liten brist på erfarenhet att jobb med/i olika branches (grenar).",
        linux_desc: 
        "Under det föregående året har jag arbetat en del med linux programvara, främst i ubuntu 20.04. " +
        "På denna linux maskin har jag kört spelserver mjukvara och en webbserver/sida, och skapat skript och kod för att göra det möjligt för att andra människor att använda sig av servern. " +
        "Jag har även pysslat med att säkra linux servern med hjälp av program som fail2ban och IPTables för att skydda portarna etc. " +
        "Skript/program skrevs i både shell och java. Jag känner mig ganska säker på att använda linux och dess kommandopanel. ",
        dotdotdot_desc: 
        "Jag är alltid glad och angelägen att lära mig nya saker. " +
        "Om det krävs en ny färdighet för att lösa ett problem, lär jag mig gärna den. " +
        "För mig finns det inga gränser när det kommer till att lösa problem. ",
    }

    const work = {
        job1_title: "Sommarpraktik på IT-avdelning, Vallentuna Kommun (2016)",
        job1_desc: "Arbetsuppgifterna jag hade var nyinstallation av PC, rengöring av dessa, stöd vid felsökning inom PC-och Windows-miljö m.m.",
        job2_title: "Programmerare, Ericsson (2019)",
        job2_desc: "Under min tid på Ericsson utvecklade vi två projekt. Första projektet var en WebRTC baserad delnings applikation skrivet i Javascript biblioteket react.js. Andra projektet var en samtals system applikation för Android skrivet i Kotlin. Jobbet på Ericsson ECCC team gav mig goda kunskaper hur en IT-arbetsplats fungerar.",
        job3_title: "Konsult, Academic Work (2020)",
        job3_desc: "Arbetade med Flir Systems AB, ett högteknologiskt företag som montör vid tillverkning och testning av IR-kameror. Arbetsområdet var mer specifikt, produktion och testning av mindre kamera komponenter och sensorer.",
        job4_title: "Kock, Senior Bob (2022 - Nuvarande)",
        job4_desc: "Arbetsuppgifter omfattar tillagning och förberedelser av mat samt servering av denna. Har vid behov arbetat inom bar och dryck.",
    }

    const lang = {
        root: "sv",
        categories: categories,
        home: home,
        work: work,

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
        "I oftentimes take initiative, am driven and happily create new fun projects on my free time.",
        skills: "Skills:",
        competence: "Competence",
        javascript_desc: 
        "I've worked a fair bit with javascript in the past, all from using javascript libraries such as react.js for work projects, to creating web apps in school for our web development courses. " +
        "I'm quite comfortable to code in javascript and other javascript libraries, and I am quick to learn new javascript concepts I have yet to learn. ",
        html_desc: 
        "Html was the first coding languages I started coding in, I've used it so much that working in it always comes automatically to me. " +
        "Soon therafter knowing about html I got to know how to code with CSS, which is always fun to play around with! " +
        "Both of these languages comes naturally to me and I know it well. ",
        java_desc: 
        "I've coded a lot with java recently in my spare time, mostly private hobby projects. " +
        "Most of my projects I've used API's and other external libraries to make the projects work for other applications. "+
        "I'm pretty well rounded when it comes to my knowledge with java and I like working with it. ",
        c_desc: 
        "In the past I've coded in C# when creating my own games, in school I also used this language to test security software protection. " +
        "It's been a while since I've coded with C# or C so I would imagine it would take about a week to get back into a good workflow. ",
        node_desc: 
        "I've used node.js to install and run code and apps in my various projects, I know the basics of installing packages and running code with node.js. ",
        react_desc: 
        "I've coded a fair bit with react.js in projects at Ericsson but also in hobby projects such as this website. " +
        "I'm quite comfortable and think it's fun to code with react.js and create new various components etc. ",
        git_desc: "I'm fairly experienced using git and github though I lack some experience working with/in different branches.",
        linux_desc: 
        "In the previous year I've been working a fair bit with linux software, primarily ubuntu 20.04. " +
        "On this linux machine I've been running game server software and a web server/page, and been creating scripts and code to make it able to run for the public to use. " +
        "I've also tinkered with securing the linux server using programs such as fail2ban and IPTables to protect the ports etc. " +
        "Scripts/programs was written in both shell and java. I feel fairly confident in using linux and it's commandpanel. ",
        dotdotdot_desc: 
        "I'm always happy and eager to learn new things. " +
        "If there's a new skill required to solve a problem, I'm happy to learn it. " +
        "For me, there are no limits when it comes to solving problems. ",
    }

    const work = {
        job1_title: "Summer internship at IT department, Vallentuna Municipality (2016)",
        job1_desc: "The tasks I had were new installation of PCs, cleaning of these, support in troubleshooting within PC and Windows environment, etc.",
        job2_title: "Developer, Ericsson (2019)",
        job2_desc: "During my time at Ericsson, we developed two projects. The first project was a WebRTC based sharing application written in the Javascript library react.js. The second project was a call system application for Android written in Kotlin. The job at the Ericsson ECCC team gave me good knowledge of how an IT workplace works.",
        job3_title: "Consultant, Academic Work (2020)",
        job3_desc: "Worked with Flir Systems AB, a high-tech company as an assembler in the manufacture and testing of IR cameras. The work area was to be more specific, production and testing of smaller camera components and sensors.",
        job4_title: "Chef, Senior Bob (2022 - Current)",
        job4_desc: "Duties include cooking and preparing food as well as serving it. Has, if necessary, worked in the bar with drinks.",
    }

    const lang = {
        root: "en",
        categories: categories,
        home: home,
        work: work,

    }
    return lang;
}