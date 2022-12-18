import Footer from './Footer.js'
import NavBar from './Navbar.js'

const accounts = [
    {name: "[Download Compiler]", href:"https://github.com/the-ezlang/ezl/releases"},
    {name: "[Github]", href:"https://www.github.com/the-ezlang"},

]

let links = [
    {name: "home", href:"/"},
    {name: "about", href:"/about"}
]

export default function Layout({ children }) {
    return (
        <div className="space-y-6 px-10 md:px-20 lg:px-36 py-2 md:py-6 lg:py-16">
            <NavBar links={links}/>
            {children}
            <Footer socialAccounts={accounts} />
        </div>
    )
}