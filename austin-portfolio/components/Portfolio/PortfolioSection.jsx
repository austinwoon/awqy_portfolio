import React from 'react';
import {
    Box,
    Heading,
    Flex,
    useDisclosure,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import PortfolioCard from './PortfolioCard';
import { works } from '../../constants/work';
import WorkModal from '../WorkModal/WorkModal';
import { WorkSelectedContext } from './WorkSelectedContext';

const PortfolioSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [workSelected, setWorkSelected] = React.useState(works[0]);

    const handleViewMoreClick = (work) => {
        setWorkSelected(work);
        onOpen();
    };

    return (
        <Box pb={10}>
            <WorkSelectedContext.Provider
                value={{
                    workSelected,
                    setWork: setWorkSelected,
                }}
            >
                <Box>
                    <Flex
                        m={'0% 10% 0% 10%'}
                        direction={'column'}
                        justify={'center'}
                        align={'center'}
                    >
                        <Heading size={'4xl'} pt={10} pb={10}>
                            Portfolio
                        </Heading>

                        <Wrap spacing={'2.5%'} justify={'center'}>
                            {works.map((work) => (
                                <WrapItem w={'500px'}>
                                    <PortfolioCard
                                        img={work.img}
                                        title={work.title}
                                        summary={work.summary}
                                        technologies={work.technologies}
                                        onOpen={() => handleViewMoreClick(work)}
                                    />
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Flex>
                </Box>

                <WorkModal
                    workSelected={workSelected}
                    onClose={onClose}
                    isOpen={isOpen}
                />
            </WorkSelectedContext.Provider>
        </Box>
    );
};

export default PortfolioSection;