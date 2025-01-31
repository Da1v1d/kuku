import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal as NextModal,
} from "@heroui/react";

interface IProps extends Omit<ModalProps, "children"> {
  header?: React.ReactNode;
  footer?: (onClose: () => void) => React.ReactNode;
  children?: ((onClose?: () => void) => React.ReactNode) | React.ReactNode;
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
              {typeof children === "function" ? children?.(onClose) : children}
              {!!footer && <ModalFooter>{footer?.(onClose)}</ModalFooter>}
            </>
          )}
        </ModalContent>
      </NextModal>
    </>
  );
};

export default Modal;
