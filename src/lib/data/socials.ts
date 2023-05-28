import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    // faYoutube,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface Social {
    name: string;
    url: string;
    icon: IconDefinition;
    bgColor: string;
    color: string;
}

const socials: Social[] = [
    {
        name: "Email",
        url: "",
        icon: faEnvelope,
        bgColor: "#000000",
        color: "#8A2BE2",
    },
    {
        name: "Github",
        url: "https://github.com/Connortsui20",
        icon: faGithub,
        bgColor: "#000000",
        color: "#ffffff",
    },
    // {
    //     name: 'Youtube',
    //     url: '',
    //     icon: faYoutube,
    //     bgColor: '#ffffff',
    //     color: '#ff0000'
    // },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/connortsui/",
        icon: faLinkedin,
        bgColor: "#0a66c2",
        color: "#ffffff",
    },
];

export default socials;
