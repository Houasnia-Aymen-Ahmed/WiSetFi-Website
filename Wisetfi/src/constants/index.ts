import {
  service01,
  service02,
  service03,
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  about1,
  user,
  userEmail,
  userPswd,
} from "../assets";
import { layout } from "../style";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons/faFontAwesome";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "sign-in",
    title: "Sign-In",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Commitment to Innovation",
    content:
      "WiSetFi emphasizes its commitment to staying up-to-date with the latest technological advancements in the WIFI industry.\
       By continuously improving their knowledge and adopting innovative solutions, they ensure that clients have access to the \
       best WIFI technologies available.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Cost-Effective Solutions",
    content:
      "WiSetFi takes pride in offering cost-effective services without compromising quality or reliability. They understand the \
      importance of balancing affordability with high-performance WIFI solutions, allowing clients to enjoy stable connectivity \
      within their budget.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Building Lasting Relationships",
    content:
      "WiSetFi aims to build lasting relationships with their clients. They strive to exceed client expectations by providing reliable \
      and secure WIFI solutions tailored to their unique needs. By prioritizing customer satisfaction and maintaining strong connections,\
      WiSetFi fosters trust and loyalty among their clientele",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I was blown away by the quality of service from WiSetFi. Their team not only installed a flawless WiFi network in my home, but they also provided exceptional support. I'm now enjoying seamless connectivity like never before.",
    name: "Herman Jensen",
    title: "Freelancer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The team at WiSetFi transformed our office's network. Their expertise and dedication to our specific needs were impressive. Our productivity has skyrocketed thanks to the reliable WiFi they installed.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "I entrusted WiSetFi with our network overhaul, and it was a game-changer for our organization. Their expertise in WiFi installation and network optimization is unmatched. I can confidently say that investing in their services was one of the best decisions I've made for our company's growth",
    name: "Kenn Gallagher",
    title: "CEO",
    img: people03,
  },
];

export const about = [
  {
    id: "about-1",
    title: "Who are we",
    content:
      "WiSetFi specializes in providing reliable and secure WIFI installation services to homes, businesses, and organizations of all sizes. They offer tailored solutions to meet the specific needs of clients, whether it's for a small coffee shop or a large office building.",
    img: about1,
    style: layout.sectionReverse,
    styleimg: layout.sectionImgReverse,
  },
  {
    id: "about-2",
    title: "Why you should work with us",
    content:
      "WiSetFi offers network consulting services to help clients optimize their WIFI infrastructure. Their team of skilled professionals can assess the client's existing network, identify areas for improvement, and provide expert recommendations to enhance performance, security, and reliability.",
    img: about1,
    style: layout.section,
    styleimg: layout.sectionImg,
  },
  {
    id: "about-3",
    title: "Our deticated team",
    content:
      "WiSetFi is dedicated to providing exceptional customer support throughout the client's experience. They prioritize building lasting relationships with their clients and offer personalized assistance, troubleshooting, and guidance to ensure that clients receive reliable and continuous connectivity.",
    img: about1,
    style: layout.sectionReverse,
    styleimg: layout.sectionImgReverse,
  },
];

export const services = [
  {
    id: "service-1",
    content:
      "WiSetFi specializes in providing reliable and secure WIFI installation services to homes, businesses, and organizations of all sizes. They offer tailored solutions to meet the specific needs of clients, whether it's for a small coffee shop or a large office building.",
    name: "WIFI Installation Services",
    img: service01,
  },
  {
    id: "service-2",
    content:
      "WiSetFi offers network consulting services to help clients optimize their WIFI infrastructure. Their team of skilled professionals can assess the client's existing network, identify areas for improvement, and provide expert recommendations to enhance performance, security, and reliability.",
    name: "Network Consulting",
    img: service02,
  },
  {
    id: "service-3",
    content:
      "WiSetFi is dedicated to providing exceptional customer support throughout the client's experience. They prioritize building lasting relationships with their clients and offer personalized assistance, troubleshooting, and guidance to ensure that clients receive reliable and continuous connectivity.",
    name: "Customer Support",
    img: service03,
  },
];

export const info = [
  {
    id: "info-1",
    title: "Opening Hours",
    value: "08:00 - 17:00",
  },
  {
    id: "info-2",
    title: "Location",
    value: "Algeria - Batna",
  },
  {
    id: "info-3",
    title: "Phone",
    value: "+213 123 456 789",
  },
  {
    id: "info-4",
    title: "Fax",
    value: "+213 33 123 456",
  },
  {
    id: "info-5",
    title: "Contact Email",
    value: "contact@wisetfi.dz",
  },
  {
    id: "info-6",
    title: "Feedback Email",
    value: "feedback@wisetfi.dz",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const placeholders = [
  {
    id: "placeholder-1",
    img: user,
    hint: "Username",
    name: "Username",
    type: "text",
  },
  {
    id: "placeholder-2",
    img: userEmail,
    hint: "Email",
    name: "Email",
    type: "email",
  },
  {
    id: "placeholder-3",
    img: userPswd,
    hint: "Password",
    name: "Password",
    type: "password",
  },
  {
    id: "placeholder-4",
    img: userPswd,
    hint: "Password (again)",
    name: "Passwordd",
    type: "password",
  },
];

export const tracker = [
  {
    id: "tracker-1",
    img: faFontAwesome,
    description: "Desc 1",
    tooltip: "tooltip1",
    state: 1,
  },
  {
    id: "tracker-2",
    img: faFontAwesome,
    description: "Desc 2",
    tooltip: "tooltip2",
    state: 1,
  },
  {
    id: "tracker-3",
    img: faFontAwesome,
    description: "Desc 3",
    tooltip: "tooltip3",
    state: 1,
  },
  {
    id: "tracker-4",
    img: faFontAwesome,
    description: "Desc 4",
    tooltip: "tooltip4",
    state: 0,
  },
];
