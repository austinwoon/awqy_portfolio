import { v4 as uuidv4 } from 'uuid';
import {
    AiFillLock,
    AiFillNotification,
    AiFillCustomerService,
} from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/Bs';

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
                header: 'Summary',
                content: [
                    `Our team of six developed a DevOps enabled web platform acted as a CRM and ERP system for our Final Year Project. ` +
                        `FAEDAS is an Events Matching platform that serves to automate the beneficiary-volunteer pairing process for the Singapore Deaf Association (SADeaf).`,
                    `It also serves as a single-source of truth for SADeaf’s administrative needs such as tracking of invoices, feedbacks and event history. I was mainly involved in the developement of full-stack product features`,
                ],
            },
            {
                header: 'Github Pipeline',
                content: [
                    `Our team of six developed a DevOps enabled web platform acted as a CRM and ERP system for our Final Year Project.` +
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
