import img1 from "../assets/images/adult-1850925_1280.jpg";
import img2 from "../assets/images/man-1282232_1280.jpg";
import img3 from "../assets/images/man-2264825_1280.jpg";
import img4 from "../assets/images/man-2604149_1280.jpg";
import img5 from "../assets/images/training-828741_1280.jpg";
import img6 from "../assets/images/woman-2573216_1280.jpg";
import img7 from "../assets/images/women.jpg";
import img8 from "../assets/images/yoga-3053487_1280.jpg";
import easyPaisa from '../assets/logos/easypaisa.jpg'
import JazzCash from '../assets/logos/JazzCash.png'
import Visa from '../assets/logos/Visa.png'
import Master from '../assets/logos/MasterCard.png'
import Discover from '../assets/logos/Discover.png'
import AmericanExpress from '../assets/logos/AmericanExpress.png'
import Lite from "../assets/images/lite.png";
import Standerd from "../assets/images/Standered.jpg";
import Pro from "../assets/images/Pro.png";
import Dumble from '../assets/logos/dumble.png'
import Stocks from '../assets/logos/stoks.jpeg'
import Health from '../assets/logos/health.jpeg'
import { Typography } from "@mui/material";



export const HeroHeader = (props) => {
    return (<>
        <div className={`page-hero  ${props.class}`}>
            <Typography variant="h4" className={`page-hero-title ${props.pageTitleClass}`}>
                {props.pageTitle}
            </Typography>
        </div>
    </>)
}

export const CarouselImages = [
    {
        id: 1,
        picture: img1,
        alt: "image 1"
    },
    {
        id: 2,
        picture: img2,
        alt: "image 1"
    },
    {
        id: 3,
        picture: img3,
        alt: "image 1"
    },
    {
        id: 4,
        picture: img4,
        alt: "image 1"
    },
    {
        id: 5,
        picture: img5,
        alt: "image 1"
    },
    {
        id: 6,
        picture: img6,
        alt: "image 1"
    },
    {
        id: 7,
        picture: img7,
        alt: "image 1"
    },
    {
        id: 8,
        picture: img8,
        alt: "image 1"
    }
];

export const PaymentImgs = [
    {
        id: 1,
        picture: easyPaisa,
        alt: "easyPaisa"
    },
    {
        id: 2,
        picture: JazzCash,
        alt: "JazzCash"
    },
    {
        id: 3,
        picture: Visa,
        alt: "Visa"
    },
    {
        id: 4,
        picture: Master,
        alt: "Master"
    },
    {
        id: 5,
        picture: Discover,
        alt: "Discover"
    },
    {
        id: 6,
        picture: AmericanExpress,
        alt: "AmericanExpress"
    },
]

export const MembershipPlanData = [
    {
        id: 1,
        picture: Lite,
        alt: "Lite",
        title: "HealthTechSport-Lite",
        subtitle: "NO REGISTRATION FEES! YOU PAY NOTHING TO FITNESS HUBS"
    },
    {
        id: 2,
        picture: Standerd,
        alt: "Standerd",
        title: "HealthTechSport-Standerd",
        subtitle: "NO REGISTRATION FEES! YOU PAY NOTHING TO FITNESS HUBS"
    },
    {
        id: 3,
        picture: Pro,
        alt: "Pro",
        title: "HealthTechSport-Pro",
        subtitle: "NO REGISTRATION FEES! YOU PAY NOTHING TO FITNESS HUBS"
    }
]

export const HelpCard = [
    {
        id: 1,
        img: Dumble,
        content1: "UNLIMITED ACCESS TO TRAINERS AND ",
        span: 'FITNESS CENTERS',
        content2: "ACCROSSS PAKISTAN"
    },
    {
        id: 2,
        img: Stocks,
        content1: "TRACK YOUR EMPLOYEES",
        span: 'FITNESS AND WELLNESS',
        content2: "JOURNEY."
    }, {
        id: 3,
        img: Health,
        content1: "ACCESS TO OTHER ",
        span: 'HEALTH BENEFITS',
        content2: " LIKE DOCTORS, SPECIALISTS AND NUTRITIONISTS."
    }
]