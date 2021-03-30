import React from 'react';
import {
    Box,
    Heading,
    Flex,
    useDisclosure,
    Grid,
    SimpleGrid,
} from '@chakra-ui/react';
import PortfolioCard from './PortfolioCard';
import { works } from '../../constants/works';
import WorkModal from '../WorkModal/WorkModal';
import { WorkSelectedContext } from '../../contexts/WorkSelectedContext';
import { h1Sizes } from '../../utils/styles';

const gridOptions = [
    { gap: 15, width: 250 },
    { gap: 15, width: 250 },
    { gap: 20, width: 300 },
    { gap: 20, width: 400 },
];

const Portfolio = () => {
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
                <Flex direction={'column'} align={'center'}>
                    <Heading fontSize={h1Sizes} pt={10} pb={10}>
                        Portfolio
                    </Heading>

                    <SimpleGrid
                        autoRows
                        gap={gridOptions.map((o) => `${o.gap}px`)}
                        w={['85vw', '85vw', '70vw', '70vw']}
                        minChildWidth={gridOptions.map((o) => `${o.width}px`)}
                    >
                        {works.map((work) => (
                            <Box key={work.uuid}>
                                <PortfolioCard
                                    img={work.img}
                                    title={work.title}
                                    summary={work.summary}
                                    technologies={work.technologies}
                                    onOpen={() => handleViewMoreClick(work)}
                                />
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex>

                <WorkModal
                    workSelected={workSelected}
                    onClose={onClose}
                    isOpen={isOpen}
                />
            </WorkSelectedContext.Provider>
        </Box>
    );
};

export default Portfolio;
