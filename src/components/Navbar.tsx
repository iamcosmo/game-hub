import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import gamehubvlogo from '../assets/game-hub-logo.jpg';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={gamehubvlogo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
