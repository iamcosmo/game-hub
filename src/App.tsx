import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" >
        <Navbar/>
      </GridItem>
      <Show above="lg"> {/*Only shows this grid item for the devices with screen above type lg(large) */}
        <GridItem area="aside">
          <GenereList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
