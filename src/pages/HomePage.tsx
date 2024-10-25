import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenereList from '../components/GenereList'
import PlatformSelector from '../components/PlatformSelector'
import SideBar from '../components/SideBar'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      
      <Show above="lg">
        {" "}
        <GridItem area="aside" paddingX={5}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <HStack justifyContent={"space-between"}>
            <GameHeading />
            <Show below="lg" breakpoint="768px">
              <SideBar />
            </Show>
          </HStack>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage