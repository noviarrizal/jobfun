import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align='center'>
                <Image src='/images/redditFace.svg' alt='logo' height='30px' />
                <Image alt='reddit' src='/images/redditText.svg' height='46px' display={{ base: 'none', md: 'unset' }} />
            </Flex>
            <SearchInput />
            {/* <Directory />
            <RightContent /> */}
        </Flex>
    )
}

export default Navbar;