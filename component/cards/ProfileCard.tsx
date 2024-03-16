import Image from "next/image";
import sticker from '@/public/sticker.png';

export default function ProfileCard() {
    return (
        <div className="profile">
            <Image 
                alt="Image sticker" 
                src={sticker}
                style={{
                    width: '78px',
                    height: '78px',
                    display: 'grid',
                }}
                priority
            />
            <div className="text-wrap grid-span-3 grid">
                I'm 
                <span className="text-2xl font-mono font-bold"> musa</span>
                , 
                I build and design ideas for myself and others
            </div>
        </div>
    )
}