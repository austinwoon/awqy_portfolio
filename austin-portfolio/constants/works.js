import { v4 as uuidv4 } from 'uuid';

export const works = [
    {
        uuid: uuidv4(),
        title: 'FAEDAS Web Platform',
        img: '/sadeaf/admin.png',
        summary:
            'FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf). It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices,\n' +
            'feedbacks and event history.',
        description: [
            {
                header: 'Summary',
                content:
                    `Our team of six developed a DevOps enabled web platform acted as a CRM and ERP system for our Final Year Project.` +
                    'FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf). It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices,\n' +
                    'feedbacks and event history.' +
                    `I was mainly involved in the developement of full-stack product features`,
            },
            {
                header: 'Github Pipeline',
                content:
                    'FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf). It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices,\n' +
                    'feedbacks and event history.',
            },
        ],
        technologies: ['Vue', 'AWS', 'Terraform', 'Github Actions', 'GraphQL'],
        images: [
            {
                uuid: uuidv4(),
                src: '/sadeaf/admin.png',
                alt: '/sadeaf/admin.png',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/Rocky_balboa.jpeg',
                alt: '/sadeaf/Rocky_balboa.jpeg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/download.jpeg',
                alt: '/sadeaf/download.jpeg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/1800.jpeg',
                alt: '/sadeaf/1800.jpeg',
            },
        ],
        links: [
            {
                logo: 'Github',
                link: 'https://github.com/SADEAFxSMU/sadeaf-app',
            },
            {
                logo: 'External',
                link: 'https://github.com/SADEAFxSMU/sadeaf-app',
            },
        ],
    },
    {
        uuid: uuidv4(),
        title: 'Travel Itinerary Planner',
        img: '/sadeaf/admin.png',
        summary: `Fun project which utilized Knapsack, Graph, K-means clustering and a scoring system to automagically generate travel itineraries. Developed during peak COVID season where would be useful.`,
        description: [
            {
                header: 'Summary',
                content:
                    "The travel recommender application allows a user to auto-generate a suitable set of tourist itineraries for a multi-day intra-city trip, depending on the user's preferences.\n",
            },
            {
                header: 'Algorithm Process',
                content: `We prompt our users for their desired destination, maximum visiting time per day and important traits for places of interests (POI). The traits help contribute to the satisfaction scores of each POI. We then used K-means clustering to cluster POIs in the country and selected a combination of POIs which gave the best satisfaction scores constrained by daily visiting time.`,
            },
        ],
        technologies: ['Vue', 'Spring'],
        images: [
            {
                uuid: uuidv4(),
                src: '/travel/travel-planner-first.jpg',
                alt: '/travel/travel-planner-first.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travel/travel-planner-second.jpg',
                alt: '/travel/travel-planner-second.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travel/travel-planner-third.jpg',
                alt: '/travel/travel-planner-third.jpg',
            },
        ],
        links: [
            {
                logo: 'Github',
                link:
                    'https://bitbucket.org/huanlin98_sch/travel-recommender/src/master/',
            },
        ],
    },
];
