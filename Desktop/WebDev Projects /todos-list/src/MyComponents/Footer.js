import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light p-4 bottom-0" style={footerStyle}>
           <p className="text-center">Copyright &copy; MyToDoListManager.com</p>
        </div>
    )
}

export default Footer;