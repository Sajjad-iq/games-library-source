import React, { useEffect } from 'react'
import { Card } from '../../../Components/shared/Action/GameCard'
import { Wrapper } from '../../../Components/shared/UI/Wrapper/Wrapper.styled'
import { options } from '../../../services/options'
import { GameCardType } from '../../../services/types'
import { useAxios } from '../../../services/useAxios'
import WindowsIcon from '../../../assets/icons/windows.png'
import ChromeIcon from '../../../assets/icons/chrome.png'

export const Cards = () => {
    const [loading, data, error, request] = useAxios<GameCardType[]>(options)
    useEffect(() => {
        request()
    }, [])

    return (
        <Wrapper flexDirection='row' width='95%' height='95%' padding='10px 0'>
            {
                data?.map((e) => {
                    return <Card
                        GameUrl={e.game_url}
                        key={e.id}
                        Title={e.title}
                        CardImg={e.thumbnail}
                        ShortDescription={e.short_description}
                        Genre={e.genre}
                        Platform={e.platform === "PC (Windows)" ? WindowsIcon : ChromeIcon}
                    />
                })
            }
        </Wrapper>
    )
}
