// import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
// import { faHome, faAddressCard, faFolderOpen, faNewspaper, faLink } from '@fortawesome/free-solid-svg-icons';

interface NavbarLink {
    title: string;
    url: string;
}

const links: NavbarLink[] = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Experience",
        url: "/experience",
    },
    {
        title: "Projects",
        url: "/projects",
    },
    {
        title: "Music",
        url: "/music",
    },
    {
        title: "Connect",
        url: "/connect",
    },
];

export default links;
