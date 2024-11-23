import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import ActionAreaCard from './card';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

    const imagenParaCard ="https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png"
    const cuerpoParaCard = "Hedwig Eva Maria Kiesler, conocida como Hedy Lamarr (Viena, 9 de noviembre de 1914n 1​-Casselberry, Florida, 19 de enero de 2000),1​ fue una actriz de cine e inventora austríaca. Inventó la primera versión del espectro ensanchado que permitiría las comunicaciones inalámbricas de largas distancias."
    React.useEffect( () => {
    console.log("Componente Modal montado correctamente")
    
    return () => {
      console.log("Componente Modal desmontado correctamente")
    }

  },[] )
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titulo del modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Modal>
      <Link to="/">Inicio</Link>
      <p></p>
      <br>
      </br>
      <br></br>
      <ActionAreaCard imagen={imagenParaCard} titulo={"Hedy Lamarr"} cuerpo={cuerpoParaCard}/>
    </div>
        
   );
}