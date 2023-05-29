import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    // faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export enum ConnectType {
    Link,
    Copy,
}

export interface SocialType {
    name: string;
    connectType: ConnectType;
    link: string;
    icon: IconDefinition;
    color: string;
    bgColor: string;
}

const socials: SocialType[] = [
    {
        name: "Email",
        connectType: ConnectType.Copy,
        link: "connor.tsui20@gmail.com",
        icon: faEnvelope,
        color: "#FFFFFF",
        bgColor: "#7700FF",
    },
    {
        name: "LinkedIn",
        connectType: ConnectType.Link,
        link: "https://www.linkedin.com/in/connortsui/",
        icon: faLinkedin,
        color: "#FFFFFF",
        bgColor: "#00A2FF",
    },
    {
        name: "Github",
        connectType: ConnectType.Link,
        link: "https://github.com/Connortsui20",
        icon: faGithub,
        color: "#FFFFFF",
        bgColor: "#000000",
    },
];

export default socials;
