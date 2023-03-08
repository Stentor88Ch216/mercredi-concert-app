import { useEffect, useState } from "react";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from "@mui/joy/Sheet";
import ListSubheader from '@mui/joy/ListSubheader';
import ConcertCard from "../ConcertCard";
import Header from "../Header";
import { downloadCsv, makeArray} from "../../scripts/loadData";
import { mockData, loadingData } from "./mockData";
import formatDate from "../../scripts/formatDate";



function filterPastConcerts(concerts: string[][]) {
    return concerts.filter(concert => {
        const dateString = concert[0];
        const date = new Date(dateString.split('/').reverse().join('/'));
        return date > new Date(); //new Date() = today
    })
}


export default function Concertslist() {

    const [data, setData] = useState(loadingData);

    useEffect(()=>{
        async function loadData() {
            let stringData = await downloadCsv();
            if (stringData) {
                let arrayData = makeArray(stringData);
                setData(arrayData);
            }
        }
        loadData();
    },[]);

    return(
        <Sheet>
            <List aria-label="basic-list">

                <ListSubheader sticky><Header /></ListSubheader>

                {filterPastConcerts(data).map((concert) => (
                    <div key={concert[1]}>
                        <ListItem>
                            <ConcertCard date={formatDate(concert[0])} lieu={concert[2]} titre={concert[1]} description={concert[3]} lien={concert[4]}/>
                        </ListItem>
                    </div>
                ))}
            </List>
        </Sheet>
        
    );
}