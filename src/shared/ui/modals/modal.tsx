import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal as NextModal,
} from "@nextui-org/react";

interface IProps extends ModalProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({ header, footer, isOpen, children, ...props }: IProps) => {
  return (
    <>
      <NextModal isOpen={isOpen} backdrop="blur" {...props}>
        <ModalContent>
          {(onClose) => (
            <>
              {!!header && (
                <ModalHeader className="flex flex-col gap-1">
                  {header}
                </ModalHeader>
              )}
              {children}
              {!!footer && <ModalFooter>{footer}</ModalFooter>}
            </>
          )}
        </ModalContent>
      </NextModal>
    </>
  );
};

export default Modal;
