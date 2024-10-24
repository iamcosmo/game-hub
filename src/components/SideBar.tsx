import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GenereList from "./GenereList";
import { useState } from "react";
import { GameQuery } from "../App";
import { Genre } from "../hooks/useGenres";
import { BsBorderWidth } from "react-icons/bs";

interface Props{
    onSelectGenre: (genre:Genre)=>void;
}

const SideBar = ({onSelectGenre}:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  const handleGenreSelect = (genre: any) => {
    setGameQuery({ ...gameQuery, genreId:genre.id });
    onSelectGenre(genre); // Call the callback prop with the selected genre
  };
  return (
    <>
      <Button onClick={onOpen} leftIcon={<BsBorderWidth/> }>Genres</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Genre</DrawerHeader>
            <DrawerBody >
              <GenereList
                selectedGenreId={gameQuery.genreId}
                onSelectGenre={handleGenreSelect}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SideBar;
 