import "./EndScreen.css";

function EndScreen({status, reset}) {
    console.log(status);
    if (status === "trop") {
        return (
            <div className={"trop-screen"}>
                <h1>Trop!</h1>
                <h2>Better luck next time!</h2>
                <div className={"buttons"}>
                    <button onClick={reset}>Retry</button>
                    <button>Quit</button>
                </div>
            </div>
        );
    } else if (status === "oko") {
        return <h1>oko</h1>
    } else if (status === "stand") {
        return <h1>stand</h1>
    }
}

export default EndScreen;