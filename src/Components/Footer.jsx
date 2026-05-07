

function Footer(){
    var welcommessage ='hello world'
    var mode = "hi lulu"
    var style = {
        color: "white",
        backgroundcolor: "black",
        fontsize:"30"
    }
    return(
        <div className="footer">
           <h1 style={style}>
            
            {`${welcommessage} ${mode}`}

            </h1><br />
            
        </div>
    )
}


export default Footer