import { Suspense } from "react";

export default function TwitterCard() {
    return (
        <div className="twitter">
            <Suspense fallback={<span>Loading..</span>}>
                <a className="twitter-timeline" 
                    data-width="400px"
                    data-chrome="transparent noborders noheader noscrollbar nofooter"
                    data-tweet-limit="1"
                    data-aria-polite="assertive"
                    data-dnt="true"
                    href="https://twitter.com/musadub?ref_src=twsrc%5Etfw">
                </a>
                <script async src="https://platform.twitter.com/widgets.js"></script>
            </Suspense>
            
        </div>
    )
}