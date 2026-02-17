import React, { useEffect } from 'react';

const AdSlot = ({
    adClient = "ca-pub-YOUR_PUBLISHER_ID",
    adSlot,
    adFormat = "auto",
    fullWidthResponsive = true,
    style = { display: 'block' }
}) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div className="ad-container" style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ins
                className="adsbygoogle"
                style={style}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            ></ins>
        </div>
    );
};

export default AdSlot;
