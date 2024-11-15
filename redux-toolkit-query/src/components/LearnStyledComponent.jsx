import styled from 'styled-components'

const Title = styled.h2`
    color: tomato
`

const Button = styled.button`
    color: white;
    padding: 0.5rem 1rem;
    background-color: tomato;
    border-radius: 5px;
`

const LearnStyledComponents = () => {
    return (
        <>
            <h1>Styled Components</h1>
            <Title>My title</Title>
            <Button>My button</Button>
            <div style={{ height: '40px', backgroundColor: 'blue' }}></div>
        </>
    )
}

export default LearnStyledComponents

