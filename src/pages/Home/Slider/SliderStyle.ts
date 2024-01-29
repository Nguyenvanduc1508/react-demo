import styled from "styled-components";
import slider1 from "../../../assets/bg/slide-bg-1.jpg"
import slider2 from "../../../assets/bg/slide-bg-2.jpg"


export const CarouselItem = styled.div`
    background-image: url(${slider1});
    background-position: 78% 0;
    background-size: cover;
    height: 600px;
` 

export const CarouselItem2 = styled(CarouselItem)`
background-image: url(${slider2});
`

export const BoxLeft = styled.div`
    max-width: 1200px;
    height: 100%;
    padding: 0 15px;
    margin: auto;
    position: relative;
    `
    
    export const Box = styled.div`
    max-width: 600px;
    position: absolute;
    color: #fff;
    left: 6%;
    top: 25%;
`
export const H4 = styled.h4`
    font-size: 24px;
    color: #fff
`
export const H2 = styled.h2`
    font-size: 56px;
    color: #fff;
`
export const P = styled.p`
    font-size: 16px;
    color: #fff;
`

export const Button = styled.button`
    font-size: 16px;
    margin: 20px 0;
    padding: 12px 30px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 5px;
    background-color: unset;
    font-weight: bold;
    &:hover {
        background-color: #c89979;
        cursor: pointer;
        transition: all .3s;
        border-color:  #c89979;
    }
`