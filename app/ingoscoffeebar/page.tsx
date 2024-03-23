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
                In 2002 my late husband, Dirk Coetsee purchased Windsor Glen Shopping Centre and did a revamp in which my father Ingo Rehders was involved and various other business people such as my fathers cousin Dieter in Germany. In 2010 my husband passed away due to cancer and my father took over directorship, he involved my nephews Cameron and later on Carman to help in the office. Prior to that I opened  hair salon called EuroAfriChic, incorporating both Caucasian and Ethnic hair. Sadly my father passed away in 2020 and my nephew Carman offered to stand in while my sister and I were mourning the loss of my dad. A short time later he secured a dream job and I stepped into the role of Director of PMI290 Pty Ltd and centre management of Windsor Glen in 2020 October with the help of our trustee P.A. Tebogo Simanlo. But there was one very big problem, amidst all the stresses of being quite green and managing all the things a shopping centre offers one there was no place to get a DECENT CUP of COFFEE! 

                </p>
            </main>
        </>
    )
}