function ResultsComponent({userNumber,machineNumber}) {
    if (userNumber > machineNumber)
        {
            return (
                <div>
                    <b> High :( </b>
                </div>
            );
        }
    if(userNumber <  machineNumber)
        {
            return (
                <div>
                   <b>Low :( </b>
                </div>
            );
        }

        if(userNumber ==  machineNumber)
            {
                return (
                    <div>
                        <h3>Amazing, you won !!</h3>
                    </div>
                );
            }
        
        
}
export default ResultsComponent