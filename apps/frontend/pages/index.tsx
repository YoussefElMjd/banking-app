import Button from './../../../libs/ui/components/input/button/index';
import COLORS from './../../../libs/ui/constant/colors';
import { Text } from '@chakra-ui/react';
import Avatar from './../../../libs/ui/components/content/avatar/index';
import Card from './../../../libs/ui/components/content/card/index';

export default function Home() {
    return (
        <>
            <Avatar w={'50px'} h={'50px'} imgSrc='/assets/images/profile.png' />
            <Card />
        </>
    );
}
