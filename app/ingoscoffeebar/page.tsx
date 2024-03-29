import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material-next';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Image from 'next/image';

export default function Yap() {
    const img = [
        {src: '/assets/logo-name.svg', alt: '', class: 'one'},
        {src: '/assets/image.svg', alt: '', class: 'two'},
        {src: '/assets/mobile-view.jpg', alt: '', class: 'three'},
        {src: '', alt: '', class: 'four'},
        {src: '/assets/desktop-view.jpg', alt: '', class: 'five'}
    ];
    return (
        <>
            <header
                style={{
                    height: '10vh',
                    position: 'static',
                }}
            >
                <Button 
                    variant="text"
                    sx={{
                        borderRadius: '50%',
                        color: 'black',
                        padding: '1rem'
                    }}

                >
                   <CloseOutlinedIcon /> 
                </Button>
            </header>
            <main
                style={{
                    borderRadius: '1rem',
                    border: 'solid .1rem black',
                    position: 'sticky',
                    display: 'flex',
                    alignItems: 'start',
                    fontFamily: 'monospace',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '1rem'
                }}
            >
                <h1
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                    }}
                >
                    Ingos Coffee Bar
                </h1>
                <p
                    style={{
                        fontSize: '1rem',
                    }}
                >
                    A speciality coffee shop website
                </p>
                <Button
                    variant="outlined" 
                    sx={{
                        border: 'solid .1rem black',
                        borderRadius: '.5rem',
                        color: 'black',
                        padding: '.5rem 1rem',
                        margin: '1rem 0',
                        fontSize: '.8rem',
                        fontFamily: 'monospace',
                        fontWeight: '600',
                        backgroundColor: 'rgb(255, 235, 205)'
                    }}
                >
                    ingoscoffeebar.com
                    <ArrowOutwardOutlinedIcon 
                        sx={{
                            fontSize: '1.3rem',
                            paddingLeft: '.4rem',
                        }}
                    />
                </Button>
                <p
                 style={{
                    maxWidth: '700px'
                 }}
                >
                    i sourced inspiration from the interior design by georgie.designs using the monochrome tone of the walls as base of my bg
                    sequenced with aesthetics pictures of the shop. i  preserved the theme font for titles and kept sans for text to keep a familiar font 
                    with visitors. icons are easily accesible and familiar
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                </p>
                <div className='center-grid'>
                    <div className='grid'>
                        {img.map(((grid, img) => (
                            <div className={grid.class} key={img}>
                                <Image 
                                    src={grid.src}
                                    alt={grid.alt}
                                    height={140}
                                    width={140}
                                    style={{
                                        border: 'solid .1rem hsl(36deg, 3%, 6%)',
                                        borderRadius: '.5rem',
                                        padding: '1rem'
                                    }}
                                    priority
                                />
                            </div>
                        )))}
                    </div>
                </div>
                
            </main>
        </>
    )
}