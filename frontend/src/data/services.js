import { FaUsers, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { GiTakeMyMoney } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";

const services = [
    {
        id: 1,
        title: 'Private Guide',
        description: "We understand that every traveler has different needs and interests. That's why we offer private guide services to help you create the perfect trip for you.",
        icon: FaUsers, 
    },
    {
        id: 2,
        title: 'Affordable Price',
        description: "we believe that everyone should have the opportunity to experience the world. That's why we offer a wide range of affordable travel packages and services.",
        icon: GiTakeMyMoney,
    },
    {
        id: 3,
        title: 'Great Support',
        description: "we understand that planning a trip can be a lot of work. That's why we offer our customers great support throughout the entire travel planning process.",
        icon: FcOnlineSupport,
    },
    {
        id: 4,
        title: 'Reservation Now',
        description: 'Ready to start planning your next adventure? Book your trip with Wandersquad Tours and Travels today!',
        icon: FaPaintBrush,
    },
];

export default services;