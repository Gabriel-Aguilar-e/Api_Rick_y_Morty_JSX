import { useEffect, useState } from 'react'
import ActionAreaCard from './cards';
import { getAllCharacters } from '../servicios/rymService';
import { Box, Modal, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Footer from './pieDePagina';
 
const CharacterModal = ({character, open, onClose}) => {
    if(!character) return null;
 
    const boxProps = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '3px solid #0000',
        boxShadow: 24,
        p: 4
    }
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={boxProps}>
                <img src={character.image} width="100%" alt='' />
                <Typography variant='h2' component="h2">
                {character.name}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                <ul>
                    <li>Tipo: {character.type}</li>
                    <li>Origen: {character.origin.name}</li>
                    <li>Estado: {character.status}</li>
                    <li>Ubicacion: {character.location.name}</li>
                </ul>
                </Typography>
            </Box>
        </Modal>
    )
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
 
 
export default function RickAndMorty(){
    const [data, setData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [info, setInfo] = useState(null);
    const apiUrl = "https://rickandmortyapi.com/api";
    const fetchMoreData = async (url) => {
        const response = await getAllCharacters(url);
        console.log(response);
        setData(response.results);
        setInfo(response.info);
    };

    useEffect(() => {
        async function fetchData(){
            const response = await getAllCharacters(`${apiUrl}/character`);
            setData(response.results);
            setInfo(response.info);
        }
        fetchData();
    }, [])
 
    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    }
 
    const handleCloseModal = () => {
        setSelectedCharacter(null);
    }
 
    return(
        <>
            <h1>API de Rick and Morty</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                {data.map( (element) => (
                                <Grid size="auto">
                                <Item>
                                <ActionAreaCard 
                                        imagen= {element.image}
                                        titulo={element.name} 
                                        onClick = { () => handleOpenModal(element)}
                                    /> 
                                </Item>
                                </Grid>
                    ) )
                }
                </Grid>
            </Box>
            <p/>
            <div>
                <Stack spacing={"top-right"} direction="row">
                    
                    <Button variant="contained" onClick={ () => fetchMoreData(info.prev) } >Pagina Anterior</Button>
                    <Button variant="contained" onClick={ () => fetchMoreData(info.next) } >Pagina Siguiente</Button>
                </Stack>
                <Footer></Footer>
            </div>

            <CharacterModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />
        </>
    )
}