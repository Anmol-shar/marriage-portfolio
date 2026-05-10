import {
  Dialog,
  Portal,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

interface UserEntryPopupProps {
  onNext: () => void;
}

const UserEntryPopup = ({
  onNext,
}: UserEntryPopupProps) => {

  return (
    <Dialog.Root
      defaultOpen
      placement="center"
    >

      <Portal>

        <Dialog.Backdrop />

        <Dialog.Positioner>

          <Dialog.Content p={8}>

            <Heading mb={6}>
              Welcome ❤️
            </Heading>

            <Stack gap={4}>

              <Input placeholder="Your Name" />

              <Input placeholder="Email" />

              <Input placeholder="Phone Number" />

              <Button
                colorScheme="pink"
                onClick={onNext}
              >
                Continue
              </Button>

            </Stack>

          </Dialog.Content>

        </Dialog.Positioner>

      </Portal>

    </Dialog.Root>
  );
};

export default UserEntryPopup;