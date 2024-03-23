import { Button } from '@mui/material-next';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Yap from '@/app/yapping/page';

export default function YapCard() {
    return (
        <Button
            variant="outlined"
            sx={{
                border: 'solid .1rem black',
                borderRadius: '1rem',
                color: 'black',
                padding: '1rem',
                margin: '1rem .5rem',
                display: 'block',
            }}
        >
            <div
                style={{
                    fontFamily: 'monospace',
                    textAlign: 'left',
                    margin: '.5rem 0',
                }}
            >
                <h2
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: '600'
                    }}
                >
                    how it started vs. how it's going
                </h2>
                <p
                
                >
                    it be like that sometime. hear me out bro
                </p>
                
            </div>
            <div
                style={{
                    border: 'solid .1rem black',
                    borderRadius: '.5rem',
                    color: 'black',
                    padding: '.5rem 1rem',
                    marginTop: '1rem',
                    position: 'relative',
                    fontFamily: 'monospace',
                    width: 'fit-content',
                    backgroundColor: 'rgb(255, 235, 205)'
                }}
            >
                read more
                <ArrowOutwardOutlinedIcon 
                    sx={{
                        fontSize: '1.3rem',
                        paddingLeft: '.4rem',
                    }}
                />
            </div>
        </Button>

    )
}