import Image from "next/image";
import Link from 'next/link'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <h3> Lets go for a <FaBeer />? </h3>
        </div>
    );
}

