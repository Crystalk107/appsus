const { Link } = ReactRouterDOM


export default class Preview extends React.Component {

    strClick = (ev) => {
        ev.stopPropagation();
        const { props } = this;
        let el = document.querySelector(`.${props.email.id}.checkbox-star`);
        el.classList.toggle("starchecked")
        props.onClickStar(props.email)

    }

    envClick = (ev) => {

        ev.stopPropagation();
        const { props } = this;
        let el = document.querySelector(`.${props.email.id}.readCheckbox-envelope`);
        el.classList.toggle("envelopeOpen")
        props.onClickEnvelope(props.email)
    }



    onEmailClick = (ev) => {
        const { props } = this;
        props.onClickPreview(props.email)
    }

    onDelete = (ev) => {
        const { props } = this;
        props.onDelete(props.email)
    }

    render() {
        // const props = this.props;
        const { props } = this;



        return <React.Fragment>

     <div className={props.email.isRead ? "preview-container read" : "preview-container unread"}>

         <div className="mailOptions-container">
            <label className={props.email.id + " readCheckbox-envelope" + ((props.email.isRead) ? ' envelopeOpen' : '')} type="checkbox" htmlFor={props.email.id + " readCheckbox-envelope"} onChange={this.envClick}>
                <span className={(props.email.isRead) ? 'hidden' : ''}><i className="fas fa-envelope"></i></span>
                <span className={(props.email.isRead) ? '' : 'hidden'}><i className="fas fa-envelope-open"></i></span>
            </label>
            <input className="readcheckbox" type="checkbox" id={props.email.id + " readCheckbox-envelope"} onChange={this.envClick} />
        
            <a  onClick={this.onDelete}><i  className="fas fa-trash"></i></a>

            </div>

            <div className="emailStar-container">
                    <label className={props.email.id + " checkbox-star" + ((props.email.isStarred) ? ' starchecked' : '')} type="checkbox" htmlFor={props.email.id + " checkbox-star"} onChange={this.strClick}><i className="fas fa-star"></i></label>
            <input className="checkbox" type="checkbox" id={props.email.id + " checkbox-star"} onChange={this.strClick} />

                    </div>

            <Link to={`/email/${props.email.id}`} >
                
                <li onClick={this.onEmailClick} className={props.email.isRead ? "read clean-list textDetails" : "unread clean-list textDetails"}>
       
                    <div className="from-container">
                        {props.email.from}
                    </div>
                    <div className="previewText-container">
                        {props.email.subject} - {props.email.body.substring(0, 60 - props.email.subject.length)}...
                    </div>
                    <div className="relativeTime-container">
                       {props.email.sentAt}
                    </div>




                </li>
            </Link>
            </div>

        </React.Fragment >
    }
}


