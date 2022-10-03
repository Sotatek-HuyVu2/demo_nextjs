import Link from "next/link"
import {MenuComponent} from '../styles/home'
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();

    return (
        <MenuComponent>
            <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/demo">
                <a className={router.pathname == "/demo" ? "active" : ""}>Demo</a>
            </Link>
        </MenuComponent>
    )
}