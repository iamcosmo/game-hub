import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SideBar from "./components/SideBar";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: any) => {
    setGameQuery({ ...gameQuery, genreId:genre.id });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        {" "}
        {/*Only shows this grid item for the devices with screen above type lg(large) */}
        <GridItem area="aside" paddingX={5}>
          <GenereList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId:genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <HStack justifyContent={"space-between"}>
            <GameHeading gameQuery={gameQuery} />
            <Show below="lg" breakpoint="768px">
              <SideBar onSelectGenre={handleSelectGenre} />
            </Show>
          </HStack>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId:platform.id })
                }
              />
            </Box>
            <SortSelector
              gameQuery={gameQuery}
              onSelectSortorder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
