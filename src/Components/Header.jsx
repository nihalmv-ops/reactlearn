import React from "react";

function Header(){

var time = new Date()
var hours = time.getHours()
var mode = ""

console.log(hours)
if(hours > 18)
{
 mode = "nightmode"

} else if (hours < 18)
    {
mode = "daymode"

}



    return(
        <header className={`display-flex ${mode}`} >
            <div className="logo">LOGO</div>
            <ul className="nav display-flex">
                <li><a href="">Home</a></li>
                   <li><a href="">About</a></li>
                    <li><a href="">contact</a></li>
              
            </ul>
        </header>
    )
    
}

export default Header