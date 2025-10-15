import { Button } from '@mui/material';

// Componente sencillo de paginación
// Recibe la pagina actual, total de paginas y funciones para ir a anterior/siguiente
function Pagination({ pagina, totalPaginas, alAnterior, alSiguiente }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <Button variant="outlined" onClick={alAnterior} disabled={pagina === 1}>
        Anterior
      </Button>
      <span>Página {pagina} de {totalPaginas}</span>
      <Button variant="outlined" onClick={alSiguiente} disabled={pagina === totalPaginas}>
        Siguiente
      </Button>
    </div>
  );
}

export default Pagination;
