import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';



class Ticket extends Component {
    render() {

        const TicketBox = styled.div`
            display:flex;
            flex-flow:row wrap;
            height: 93px;
            width:300px;
            background-color:white;
            margin: 10px 0px 10px 10px;
        `;

       const TicketNum = styled.span`
            color: white;
            text-align:center;
            margin: 10px 10px 10px 10px;
            padding: .1em .6em 0px .6em;
            border-radius:10rem;
            background: #007bff;
            font-size:75%;
            font-weight:700;
            height: 18%;
        `;

        const TicketDate = styled.span`
            color: white;
            text-align:center;
            margin: 10px 10px 10px 10px;
            padding: .1em .6em 0px .6em;
            border-radius:10rem;
            background: #009933;
            font-size:75%;
            font-weight:700;
            height: 18%;
        `;


        const TicketDesc = styled.p`
            color: black;
            margin: 10px 10px 10px 10px;  
            height: 40%;
            overflow:hidden;
        `;

        const TIcketAvatarImg = styled.img`
            border-radius: 100%;
            width: 30px;
            height: 30px;
            border: 2px solid #E91E63;
            box-shadow:  0 0 10px  rgba(0,0,0,0.6);
        `;

        const TIcketAvatar = styled.div`
              margin: 10px 0px 0px 60px;
        `;

        const images = require.context('../img', true);
        let nameImg=1 +  Math.floor((Math.random() * (18-1)));

        let imgsrc = images(`./${nameImg}.png`);

        const {status, idCA, refNum, openDate, description} = this.props;
        return (
            <TicketBox>
                    <TicketNum>{refNum}</TicketNum>
                    <TicketDate>{openDate}</TicketDate>
                    <TIcketAvatar>
                        <TIcketAvatarImg src={imgsrc}></TIcketAvatarImg>
                    </TIcketAvatar>
                    <TicketDesc>{description}</TicketDesc>
            </TicketBox>
        );
    }
}

Ticket.propTypes = {
    tk: PropTypes.shape({idCA: PropTypes.string, refNum: PropTypes.string, description: PropTypes.string, openDate: PropTypes.string, status: PropTypes.string})
}

export default Ticket;