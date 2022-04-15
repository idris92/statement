import React from 'react'
import {Button} from '@chakra-ui/react'

const ButtonComponent = ({buttonName}) => {
    return (
       <Button variant='action' p={8}>{buttonName}</Button>
    )
}

export default ButtonComponent
