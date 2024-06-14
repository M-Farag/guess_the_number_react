function StatisticsComponent({props}) {
    return (
        <>
        <ul>
            <li>last guess is: {props.userNumber}</li>
            <li style={
               {
                color:props.attempts?.length > 5 ? 'red':'green'
               } 
            }
            >Attempts so far: {props.attempts?.length}</li>
            <li>you tried: {props.attempts?.join(',')}</li>
        </ul>
        </>
    );
}
export default StatisticsComponent