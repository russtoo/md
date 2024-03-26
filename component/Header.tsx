import { Button } from '@mui/material-next';

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
                <Button 
                    key={nav.id} 
                    href={nav.url} 
                    className=""
                    sx={{
                        padding: '.5rem 1rem',
                        color: 'black',
                        fontFamily: 'monospace',
                    }}
                    variant='text'
                >
                    {nav.title}
                </Button>
            )))}
            </nav>
        </header>
    )
}