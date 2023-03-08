import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { Button } from "@mui/joy";
import Link from "@mui/joy/Link";

let ggdocLink = "https://docs.google.com/spreadsheets/d/1vDRUs4xFZJfYTO6hJqE01zg45uxBouDJV13BeTg4RaE/edit#gid=0";


export default function Header() {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: 1 }}>
            
            <Typography level="h5" fontWeight="bold">MERCREDI CONCERT</Typography>

            <Link underline="none" href={ggdocLink} target="_blank">
                <Button color="info" size="sm">
                    Ajouter
                </Button>
            </Link>

        </Stack>
        
    );
}