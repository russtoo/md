import { Button } from "@mui/material-next";
import Image from "next/image";
import Laptop from "@/public/icb-bg-ing.png";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';


export default function ICBCard() {
    return (
        <Button
            variant="outlined"
            sx={{
                border: 'solid .1rem black',
                borderRadius: '1rem',
                color: 'black',
                padding: '0'
            }}
        >
           <Image
                alt="Laptop Img"
                src={Laptop}
                priority
           />
            <div
                style={{
                    border: 'solid .1rem black',
                    borderRadius: '.5rem',
                    color: 'black',
                    padding: '.5rem 1rem',
                    margin: '.8rem 1rem',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    fontSize: '.8rem',
                    fontFamily: 'monospace',
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
            </div>
        </Button>
    )
}