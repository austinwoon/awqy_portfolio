import React from 'react';
import { Box, Heading, Flex, useDisclosure, Grid } from '@chakra-ui/react';
import PortfolioCard from './PortfolioCard';
import { works } from '../../constants/works';
import WorkModal from '../WorkModal/WorkModal';
import { WorkSelectedContext } from '../../contexts/WorkSelectedContext';
import { h1Sizes } from '../../utils/styles';

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
                <Box>
                    <Flex direction={'column'} align={'center'}>
                        <Heading fontSize={h1Sizes} pt={10} pb={10}>
                            Portfolio
                        </Heading>

                        <Grid
                            gap={['5%', '4%', '2.5%', '2.5%']}
                            w={['85vw', '85vw', '70vw', '70vw']}
                            templateColumns={[
                                'repeat(auto-fit, minmax(300px, 1fr))',
                                'repeat(auto-fit, minmax(300px, 1fr))',
                                'repeat(auto-fit, minmax(400px, 1fr))',
                                'repeat(auto-fit, minmax(500px, 1fr))',
                            ]}
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
                        </Grid>
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

export default Portfolio;
