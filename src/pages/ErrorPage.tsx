import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Ooops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? `This Page Doesn't Exists!`
            : `An Unexpected Error Occurred!`}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
