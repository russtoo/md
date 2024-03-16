import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import Button from '@mui/material-next/Button';

export default function ModeCard() {
    const time = new Date();
    const [hour, minute] = [time.getHours(), time.getMinutes()];    

    return (
        <Button 
            variant="outlined"
            sx={{
                border: 'solid .1rem black',
                borderRadius: '1rem',
                color: 'black'
            }}
        >
            <div className="mode">
                <div className="mode-icon">
                    { hour < 6 || hour >= 18?<DarkModeTwoToneIcon sx={{ fontSize: 50 }} />:<LightModeTwoToneIcon sx={{ fontSize: 50 }} />}
                </div> 
                <div className="mode-text">{hour < 6 || hour >= 18?'NIGHT MODE':'DAY MODE'}</div>
            </div>
        </Button>
    )
}