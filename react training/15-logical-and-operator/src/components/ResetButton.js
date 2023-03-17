function ResetButton({counter, onClick}) {
    return <div>
        {counter > 0 && (
            <button style={{backgroundColor: "lightgreen"}} onClick={onClick}>kill counter >:D</button>
        )}
    </div>
}

export default ResetButton;