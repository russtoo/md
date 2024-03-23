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
                    padding: '.5rem'
                }}
            >
                <embed 
                    src="https://ingoscoffeebar.com"
                    style={{
                        width: '100%',
                        height: '80vh',
                        borderRadius: '.5rem',
                    }}
                />
                <br/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                </p>
            </main>
        </>
    )
}