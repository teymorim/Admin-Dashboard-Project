function ContactItem({title , description , children}){
    return(
        <>
            <div className="ContactItemContainer BackItemStyle">
                <p className="ms-2 mt-2">{children}</p>
                <h6 className="fs-4">{title}</h6>
                <p>{description}</p>
            </div>
        </>
    )
}
export default ContactItem