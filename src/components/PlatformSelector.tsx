import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platforms } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props{
    onSelectPlatform: (platform:Platforms)=>void;
    selectedPlatformId?: number;
}
const PlatformSelector = ({onSelectPlatform,selectedPlatformId}:Props) => {
    const {data,error} =  usePlatforms();

    const selectedPlatform = usePlatform(selectedPlatformId)

    if(error) return null;


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name||'Platform'}
      </MenuButton>
      <MenuList>
            {data?.results.map(platform=>(<MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
