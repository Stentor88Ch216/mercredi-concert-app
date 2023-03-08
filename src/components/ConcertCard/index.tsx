import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';


type CardProps = {
    date: string,
    lieu: string,
    titre: string,
    description: string
    lien: string
}

export default function ConcertCard({date, lieu, titre, description, lien}: CardProps) {
    return(
        <Card sx={{ width: 1, maxWidth: 500, mx: 'auto'}}>
          <Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography color="info" level="body3">{lieu}</Typography>
              <Typography variant="soft" color="info" level="body3" fontWeight="bold">{date}</Typography>
            </Stack>
            
            <Link
            overlay
            underline="none"
            href= {lien}
            target="_blank"
            >
                <Typography level="h6" fontWeight="bold">{titre}</Typography>
            </Link>
            
            <Typography level="body2">{description}</Typography>
          </Stack>
      </Card>
    )
}