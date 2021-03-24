import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Flex,
    Button,
} from '@chakra-ui/react';
import ImageCarousel from './ImageCarousel';
import { WorkSelectedContext } from './WorkSelectedContext';
import { works } from '../../constants/work';

const WorkModal = ({ onClose, isOpen }) => {
    const { workSelected, setWork } = React.useContext(WorkSelectedContext);
    return (
        <Modal isOpen={true} onClose={onClose} size={'full'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{workSelected.title}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <ImageCarousel images={workSelected.images} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default WorkModal;
