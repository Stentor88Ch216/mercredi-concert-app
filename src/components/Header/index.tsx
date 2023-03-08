import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
//import Add from '@mui/icons-material/Add';

let ggdocLink = "https://docs.google.com/spreadsheets/d/1vDRUs4xFZJfYTO6hJqE01zg45uxBouDJV13BeTg4RaE/edit#gid=0";


export default function Header() {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: 1 }}>
            <Typography level="h5" fontWeight="bold">MERCREDI CONCERT</Typography>
            <IconButton component="a" href={ggdocLink} target="_blank" color="info">
                {/**<Add />**/}
            </IconButton>
        </Stack>
        
    );
}