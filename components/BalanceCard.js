import styles from '../styles/Home.module.css'

export default function BalanceCard({contentType, NFTs, bal, wallet, setWalletAddress, fetchNFTs, handleSubmit}) {

    return(
        <div className={styles.card}>
            <div className={styles.walletCardTitle}>
                <h1>Wallet Data:</h1>
            </div>
            <div className={styles.walletCardContent}>
                {/* <form method="post" className={styles.interaction} onSubmit={handleSubmit}>
                    <input id="address" name="address" type="text" placeholder='Enter a Wallet Address'></input>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form> */}
                <div className={styles.interaction}>
                    <input id="address" name="address" type="text" placeholder='Enter a Wallet Address' onChange={(e) => setWalletAddress(e.target.value)} value={wallet}></input>
                    <button className={styles.submitButton} onClick={
                        () => {
                            fetchNFTs();
                        }
                    }>Submit</button>
                </div>
                <h3>Balance (ETH):</h3>
                <div className={styles.bal}>
                    <h2>{bal}</h2>
                </div>
                <h3>NFTs Owned:</h3>
                <div className={styles.nfts}>
                    {
                        contentType.length && contentType.map(nft => {
                        // NFTs.length && NFTs.map(nft => {
                                
                            if (contentType) {

                                // fetch(nft.media[0].gateway, { method: 'HEAD' })
                                // .then(response => {
                                //     console.log(nft.media[0].gateway);
                                //     console.log(response.headers.get('Content-type')); 
                                //     if(response.headers.get('Content-type') === "video/mp4") {
                                //         setIsVideo(true);
                                //     } else {
                                //         setIsVideo(false);
                                //     }
                                // console.log("isVideo: " + isVideo);

                                // });
                               

                                if (nft[1] === "image/gif"|| nft[1] === "image/jpeg"|| nft[1] === "image/png"|| nft[1] === "image/tiff" || nft[1] === "image/vnd.microsoft.icon"
                                || nft[1] === "image/x-icon"|| nft[1] === "image/vnd.djvu"|| nft[1] === "image/svg+xml" || nft[1] === "image/webp") {
                                    return (
                                        <div className={styles.nft}>
                                            <img src={nft[0]} className={styles.nftImg}></img>
                                        </div>
                                    )
                                }
                                else if (nft[1] === "video/mp4"|| nft[1] === "video/mpeg"|| nft[1] === "video/quicktime"|| nft[1] === "video/x-ms-wmv"
                                || nft[1] === "video/x-msvideo"|| nft[1] === "video/x-flv"|| nft[1] === "video/webm") {
                                    return (
                                        <div className={styles.nft}>
                                            <video className={styles.nftImg}>
                                                <source src={nft[0]}></source>
                                            </video>
                                        </div>
                                    )
                                }
                                else {
                                    console.log("Invalid Content-type",nft);
                                }
                            }
                            else {
                                console.log("No nft data available");
                            }

                        })
                    }
                </div>
            </div>
        </div>
    );


}