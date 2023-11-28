export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
           <li className="active">
           <a href="/pricing">Pricing</a>
           </li>
           <li>
           <a href="/about">About</a>
           </li>
        </ul>

    </nav>
    );
}