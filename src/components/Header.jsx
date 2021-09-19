import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


export const Header = (props) => {


    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
        console.log("this is the input", input);
    }

    return (
        <Wrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>

        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`;

const SearchWrapper = styled.div`
            flex: 1;
`;

const SearchBarWrapper = styled.div`
        background-color: #efefef;
        display: flex;
       
        width: 100%;
        border-radius: 5px;
        border: none;
        padding-left: 

        form {
            display: flex;
            flex: 1;
        }

        form > input {
            background-color: transparent;
            border: none;
            height: 48px;
            width: 100vh;
            margin-left: 5px;
            font-size: 16px;
        }

        form > button {
            display: none;
        }

        input:focus {
            outline: none;
        }

`;
