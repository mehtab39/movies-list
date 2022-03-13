import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData, IMG_URL } from "../../redux/action/dataAction";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import InfiniteScroll from "react-infinite-scroll-component";
import { Error } from "../Error/Error";
import { MainSnackBox } from "../Snackbox/Snackbox";

export const LandingPage = $ => {
    const [page, setPage] = useState(1)
    const [checked, setChecked] = useState([]);
    const { data, error } = useSelector((state) => ({
        data: state.dataState.data,
        error: state.dataState.error,
    }))
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const dispatch = useDispatch()
    useEffect($ => {      
         dispatch(fetchData(page))    
    }, [dispatch, page])
    return (<>
        <InfiniteScroll
            dataLength={data.length}
            next={$ => setPage(page + 1)}
            hasMore={true}
            loader={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}
        >
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {data?.map((el, i) => {
                    const labelId = `checkbox-list-secondary-label-${el.id}`;
                    return (
                        <ListItem
                            key={i}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(el)}
                                    checked={checked.indexOf(el) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={el.original_title}
                                        src={IMG_URL + el.poster_path}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={el.original_title}
                                    secondary={el.overview} />
                            </ListItemButton>
                        </ListItem>

                    );
                })}
            </List>
        </InfiniteScroll>
        {checked.length!==0 && <MainSnackBox checked={checked} setChecked={setChecked} />}
        {error && <Error />}
    </>
    )
}






