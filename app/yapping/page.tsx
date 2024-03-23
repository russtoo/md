import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material-next';

export default function Yap() {
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
                    padding: '1rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                    }}
                >
                    How it started vs. how its going
                </h1>
                <p
                    style={{
                        fontSize: '1rem'
                    }}
                >Brief history of my journey</p>
                <p
                    style={{
                        border: 'solid .1rem black',
                        borderRadius: '.5rem',
                        color: 'black',
                        padding: '.5rem 1rem',
                        margin: '1rem 0',
                        fontSize: '.8rem',
                        fontFamily: 'monospace',
                        backgroundColor: 'rgb(255, 235, 205)',
                        fontWeight: '600',
                    }}
                >
                    12 March 2002
                </p>
                <p
                    style={{
                        textAlign: 'left',
                        fontSize: '.8rem',

                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adiLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.piscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                </p>
            </main>
        </>
    )
}