import React from 'react'
import { HomeWrapper } from './HomeWrapper.styled'
import { Cards } from './Cards'

export const Home = React.memo(() => {
    return (
        <HomeWrapper>
            <Cards />
        </HomeWrapper>
    )
})
