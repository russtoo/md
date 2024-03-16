export default function Header() {
    return (
        <header
            className=""
        >
            <span className="">musa</span>
            <nav className="">
            {[
                {
                    id: 0,
                    title: 'projects',
                    url: ''
                },
                {
                    id: 1,
                    title: 'contact',
                    url: ''
                }
            ].map((nav => (
                <a key={nav.id} href={nav.url} className="">
                {nav.title}
                </a>
            )))}
            </nav>
        </header>
    )
}