import { v4 as uuidv4 } from 'uuid';
import {
    AiFillLock,
    AiFillNotification,
    AiFillCustomerService,
    AiFillRobot,
    AiFillApi,
} from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { GiKnapsack } from 'react-icons/gi';
import { MdSentimentSatisfied, MdComputer } from 'react-icons/md';
import { BiMapPin } from 'react-icons/bi';

export const works = [
    {
        uuid: uuidv4(),
        title: 'FAEDAS Web Platform',
        img: '/sadeaf/admin-panel.jpg',
        summary:
            'FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf). It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices,\n' +
            'feedbacks and event history.',
        description: [
            {
                header: 'About',
                content: [
                    `Our team of six developed a DevOps enabled web platform acted as a CRM and ERP system for our Final Year Project. ` +
                        `FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf).`,
                    `It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices, feedbacks and event history. I was mainly involved in the developement of full-stack product features`,
                ],
            },
        ],
        technologies: ['Vue', 'AWS', 'Terraform', 'Github Actions', 'GraphQL'],
        features: [
            {
                header: 'Authentication',
                icon: AiFillLock,
                description:
                    'Users are able to register on the portal as clients or volunteers, subject to the SADeaf administrators’ approvals. Authentication and authorization on the application is feature-complete - email verification, password resets and easily configurable role-based permissions.',
            },
            {
                header: 'Service Management Request',
                icon: AiFillCustomerService,
                description: `Handles the start-to-end service (note-taking and interpretation) request process from creation to completion. Clients and volunteers are able to keep track of their service requests easily in a simple calendar while SADeaf administrators can view the service requests of all clients on an operations dashboard.`,
            },
            {
                header: 'Notification',
                icon: AiFillNotification,
                description: `Event-based system to send critical updates to clients and volunteers via Telegram and Email. Users are able to customise notification preferences to control what types of notifications are pushed to them.`,
            },
            {
                header: 'Client and Volunteer Management',
                icon: BsPeopleFill,
                description: `Clients and Volunteers are able to create profiles. SADeaf administrators can approve or reject new client and volunteer sign-ups and view the profile information, history and activities of individual users.`,
            },
        ],
        images: [
            {
                uuid: uuidv4(),
                src: '/sadeaf/admin-panel.jpg',
                alt: '/sadeaf/admin-panel.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/admin-dashboard.jpg',
                alt: '/sadeaf/admin-dashboard.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/admin-user-management.jpg',
                alt: '/sadeaf/admin-user-management.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/client-create-assignment.jpg',
                alt: '/sadeaf/client-create-assignment.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/client-give-feedback.jpg',
                alt: '/sadeaf/client-give-feedback.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/user-profile-view.jpg',
                alt: '/sadeaf/user-profile-view.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/client-calendar-view.jpg',
                alt: '/sadeaf/client-calendar-view.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/client-blacklist.jpg',
                alt: '/sadeaf/client-blacklist.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/sadeaf/volunteer-view.jpg',
                alt: '/sadeaf/volunteer-view.jpg',
            },
        ],
        links: [
            {
                logo: 'Github',
                link: 'https://github.com/SADEAFxSMU/sadeaf-app',
            },
            {
                logo: 'Video',
                link: 'https://github.com/SADEAFxSMU/sadeaf-app',
            },
        ],
    },
    {
        uuid: uuidv4(),
        title: 'Travel Itinerary Planner',
        img: '/travel/landing-page.jpg',
        summary: `Fun project which utilized Knapsack, Graph, K-means clustering and a scoring system to automagically generate travel itineraries.`,
        description: [
            {
                header: 'About',
                content: [
                    "The travel recommender application allows a user to auto-generate a suitable set of tourist itineraries for a multi-day intra-city trip, depending on the user's preferences and their daily visiting time.\n",
                ],
            },
        ],
        technologies: ['Vue', 'Spring'],
        features: [
            {
                header: 'Personalized Scoring System',
                icon: MdSentimentSatisfied,
                description: `Users are able to select what tags match their interests and POIs which contain those tags would have higher scores.`,
            },
            {
                header: 'Knapsack + K-Means Algorithm',
                icon: GiKnapsack,
                description: `We used K-means clustering to cluster POIs in the country and selected a combination of POIs which gave the best satisfaction scores constrained by daily visiting time.`,
            },
            {
                header: 'Interactive Maps',
                icon: BiMapPin,
                description: `After their generating itinerary, users are able to interact with the maps and visualize the inter-day visiting sequence. They are also able to view photos and details (such as operating hours and cost) of the location.`,
            },
        ],
        images: [
            {
                uuid: uuidv4(),
                src: '/travel/landing-page.jpg',
                alt: '/travel/landing-page.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travel/itinerary-tokyo.jpg',
                alt: '/travel/itinerary-tokyo.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travel/itinerary-tokyo-2.jpg',
                alt: '/travel/itinerary-tokyo-2.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travel/itinerary-tokyo-3.jpg',
                alt: '/travel/itinerary-tokyo-3.jpg',
            },
        ],
        links: [
            {
                logo: 'Bitbucket',
                link:
                    'https://bitbucket.org/huanlin98_sch/travel-recommender/src/master/',
            },
            {
                logo: 'Video',
                link: 'https://youtu.be/8nxV6UmwJBU',
            },
        ],
    },
    {
        uuid: uuidv4(),
        title: 'Automated Trading Bot',
        img: '/trading/ibkr-trade.jpg',
        summary: `Automated trading bot that bought/sold based on news indicators and sentiment. Achieved 55% returns from Jan - March 2021 before the early March bond yield scare caused returns to fall 5%. Still a fun project I thought to list :)`,
        description: [
            {
                header: 'About',
                content: [
                    'Integrated with Interactive Brokers and deployed on my personal server at home. Tracked market news and bought / sold based on a few personal business rules I came up with while analyzing the market. Mainly traded SPACs. No github link cause secret sauce :)',
                ],
            },
        ],
        technologies: ['Python', 'Postgresql'],
        features: [
            {
                header: 'Automated Trades',
                icon: AiFillRobot,
                description: `Upon breaking news, the bot checks if prices have reacted to the news. This check looks at technical indicators to see if the stock is overbought during when news broke out. If not, set an IOC (immediate or cancel) order at an appropriate ask price (also determined by historical prices).`,
            },
            {
                header: 'Sentiment Analysis',
                icon: MdSentimentSatisfied,
                description: `Based on sentiment on the security, I determine if it should be added on the trade watchlist.`,
            },
        ],
        images: [
            {
                uuid: uuidv4(),
                src: '/trading/ibkr-trade.jpg',
                alt: '/trading/ibkr-trade.jpg',
            },
        ],
        links: [],
    },
    {
        uuid: uuidv4(),
        title: 'Travel Dashboard',
        img: '/travue/travue-dashboard.jpg',
        summary: `POC Travel application which helps streamline and ease the travel planning process by: (1) Aggregating frequently access Place of Interest (POI) data on a dashboard (2) Ease-free storing of said data above (3) Easy planning of itinerary with a kanban board`,
        description: [
            {
                header: 'About',
                content: [
                    'Built with a team of four when we first started learning Vue. The travel planning process was tedious and this app aims to help solve that painpoint for tourists. Purely client side app as it was a proof of concept.',
                ],
            },
        ],
        technologies: ['Vue'],
        features: [
            {
                header: 'Aggregates Critical Information',
                icon: AiFillApi,
                description: `Aggregates frequently access information like photos, videos, weather, safety, nearby places, google reviews, news articles about a venue through FourSquare, Google, News API, Open Cage, Youtube, and Weather API.`,
            },
            {
                header: 'Kanban and Dashboard views',
                icon: MdComputer,
                description: `Dashboard view intuitively presents data. Kanban planner allows for easy planning of itineraries`,
            },
        ],
        images: [
            {
                uuid: uuidv4(),
                src: '/travue/travue-dashboard.jpg',
                alt: '/travue/travue-dashboard.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travue/travue-kanban.jpg',
                alt: '/travue/travue-kanban.jpg',
            },
            {
                uuid: uuidv4(),
                src: '/travue/travue-landing.jpg',
                alt: '/travue/travue-landing.jpg',
            },
        ],
        links: [
            {
                logo: 'Github',
                link: 'https://github.com/weiyuan95/travue-buddy',
            },
            {
                logo: 'Video',
                link: 'https://youtu.be/Ctmi1kqyCas',
            },
        ],
        links: [],
    },
];
