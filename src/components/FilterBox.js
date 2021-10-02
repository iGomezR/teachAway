import * as React from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import { loadingGallery } from "../ducks/filter";

const GridStep = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

export default function FilterBox() {
    
  const [section, setSection] = React.useState("");
  const [window, setWindow] = React.useState("");
  const [sorting, setSorting] = React.useState("");
  const [showViral, setViral] = React.useState(true);
  const dispatch = useDispatch();  
  return (
    <div>
      <GridStep>
        <FormControl fullWidth margin="normal">
          <FormGroup>
            <InputLabel id="section-select-label">Section</InputLabel>
            <Select
              labelId="section-select-label"
              id="section-selec"
              value={section}
              label="Section"
              onChange={(event) => setSection(event.target.value)}
            >
              <MenuItem value={"hot"}>Hot</MenuItem>
              <MenuItem value={"top"}>Top</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showViral}
                  onChange={(event) => setViral(event.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Show Viral?"
            />
          </FormGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormGroup>
            <InputLabel id="window-select-label">Select Window</InputLabel>
            <Select
              labelId="window-select-label"
              id="window-select"
              value={window}
              label="Window"
              onChange={(event) => setWindow(event.target.value)}
            >
              <MenuItem value={"all"}>all</MenuItem>
              <MenuItem value={"day"}>day</MenuItem>
              <MenuItem value={"week"}>week</MenuItem>
              <MenuItem value={"month"}>month</MenuItem>
              <MenuItem value={"year"}>year</MenuItem>
            </Select>
          </FormGroup>
        </FormControl>
       { section === "user" && <FormControl fullWidth margin="normal">
          <FormGroup>
            <InputLabel id="sort-select-label">Sorting by</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sorting}
              label="Sorting"
              onChange={(event) => setSorting(event.target.value)}
            >
              <MenuItem value={"viral"}>viral</MenuItem>
              <MenuItem value={"top"}>top</MenuItem>
              <MenuItem value={"time"}>time</MenuItem>
              <MenuItem value={"rising"}>rising</MenuItem>
            </Select>
          </FormGroup>
        </FormControl>}
        <Button variant="outlined" onClick={() => dispatch(loadingGallery({section,window,sorting,showViral}))}>Apply</Button>
      </GridStep>
    </div>
  );
}