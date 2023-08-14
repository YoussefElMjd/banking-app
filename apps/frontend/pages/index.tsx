import Button from './../../../libs/ui/components/input/button/index';
import COLORS from './../../../libs/ui/constant/colors';
import { Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Button
            bgColor={COLORS.Primary.value}
            h={'24px'}
            w={'51PX'}
            padding={'4px 12px'}
            gap={'2px'}
            handleOnClick={() => {
                console.log('test');
            }}
        >
            <Text
                color={COLORS.Secondary.T15.value}
                fontSize={'12px'}
                fontFamily={'Outfit'}
                fontWeight={'700'}
                fontStyle={'normal'}
                lineHeight={'normal'}
                textTransform={'uppercase'}
            >
                add
            </Text>
        </Button>
    );
}
