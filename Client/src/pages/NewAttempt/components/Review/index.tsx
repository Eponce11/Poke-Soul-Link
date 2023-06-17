
const Review = (props:any) => {

    const { setCurrentStep, selectedGen, gameVersion, players } = props;


    return (
        <>
            <p>{selectedGen}</p>
            <p>{gameVersion}</p>
            { players.map( (player:any, idx:number) => (
                <p>{player}</p>
            )) }
            <button onClick={ () => setCurrentStep((prev:number) => prev - 1)}>Back</button>
        </>
    )
}

export default Review;