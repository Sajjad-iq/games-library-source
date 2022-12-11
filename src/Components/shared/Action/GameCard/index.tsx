import React from 'react'
import { IMG } from '../../../common/img/img.styled'
import { P } from '../../../common/P/P.atyled'
import { ShortP } from '../../../common/ShortP/ShortP.styled'
import { FlexSection } from '../../UI/FlexSection/FlexSection.styled'
import { Label } from './FreeLabel.styled'
import { GameCardWrapper } from './GameCardWrapper.styled'

interface Props {
  CardImg: string | undefined
  Title: string | undefined
  ShortDescription: string | undefined
  Platform: string | undefined
  Genre: string
  GameUrl: string
}

export const Card = (props: Props) => {
  return (
    <GameCardWrapper href={props.GameUrl} target="_blank">

      <IMG width='100%' height='auto' src={props.CardImg} alt="Game" />

      <FlexSection width='100%' padding='15px' flexDirection='row' justify='space-between'>
        <P FontSize='1.4rem' FontWeight='900' >{props.Title}</P>
        <Label color='white' FontSize='0.9rem'>Free</Label>
      </FlexSection>

      <ShortP>{props.ShortDescription}</ShortP>

      <FlexSection width='100%' padding='20px' flexDirection='row' justify='space-between'>
        <IMG width='30px' height='auto' src={props.Platform} alt="Game" />
        <Label color='white' FontSize='1rem'>{props.Genre}</Label>
      </FlexSection>

    </GameCardWrapper>
  )
}
