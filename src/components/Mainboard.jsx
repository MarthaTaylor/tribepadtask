import React from 'react'
import styled from 'styled-components';

const Mainboard = ({ jobs, jobsTitle, jobsRef }) => {//


    return (
        <Wrapper className="mainboard">
            <Container>

                <p> {jobsTitle} &nbsp; {' '} &nbsp; {jobsRef}</p>
            </Container>
        </Wrapper>
    )
}

export default Mainboard;

const Wrapper = styled.div`
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin-top: 15px;
 `;

const Container = styled.div`
        background-color: white;
        width: 80%;
        height: 100%;
        padding: 15px 0px 0px 30px;
        
 `;
