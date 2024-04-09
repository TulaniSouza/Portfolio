import styled from "styled-components";


export const Container=styled.section`
position:absolute;
width: 60px;
height:100vh;
background-color: #202020;
overflow: hidden;
transition: .5s;
box-shadow: 3px 0 0 #FF0077;
margin-left: ${props => props.sidebarOpen ? '300px' : '60px'};

&:hover{
width: 300px;

}

.father{
    display:flex;
    white-space: nowrap;
    text-decoration: none;
   
}
.icon{
    min-width: 60px;
    height: 60px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.5rem;
    color:#ffaeff;    
}
& .titulo{
    width: 100%;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size:1rem;
    letter-spacing: 0.5rem;

& .titulo:hover{
    font-size:1.2rem;
    font-weight:500;
}}
& .logo{
    top: 55%;
    object-fit: cover;
    display:flex;
    justify-content: center;
    align-items: center;
}
& .Logo{
    width: 40%;
    height: 40%;
    object-fit: cover;
}

`
// export const Block=styled.div`

// `
// export const Box=styled.section`

// `
export const CloseSideBar=styled.div`
display:flex;
`

export const Button=styled.button`
margin-top:1rem;

`