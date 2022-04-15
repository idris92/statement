import React from "react";
import SuccessModal from "./SuccessModal";
import { useDisclosure, Button } from "@chakra-ui/react";

function CallModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <SuccessModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {/* <VendorsInvitedModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <ReportIssueModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <PaymentModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <SendBindingModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <CompareModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      {/* <VendorCategoryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> */}
      <Button mt={{ base: "32px" }} size="sm" full={false} onClick={onOpen}>
        Call modal
      </Button>
    </div>
  );
}

export default CallModal;
