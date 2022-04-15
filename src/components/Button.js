import React from 'react'
import {Button} from '@chakra-ui/react'

const ButtonComponent = ({buttonName}) => {
    return (
       <Button variant='action' p={{base:4, md:8}}>{buttonName}</Button>
    )
}

export default ButtonComponent
