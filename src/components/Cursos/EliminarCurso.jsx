import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Card, ListGroup, InputGroup } from 'react-bootstrap';

const EliminarCurso = () => {
  const [idBusqueda, setIdBusqueda] = useState('');
  const [cursoEncontrado, setCursoEncontrado] = useState(null);
  const [mostrarAlert, setMostrarAlert] = useState(false);
  const [mensajeAlert, setMensajeAlert] = useState('');
  const [tipoAlert, setTipoAlert] = useState('danger'); // 'danger', 'success', 'warning'
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false); // Estado para mostrar la alerta de confirmación
  const navigate = useNavigate();

  // Función para buscar el curso por ID
  const buscarCurso = (e) => {
    e.preventDefault();
    setCursoEncontrado(null);
    setMostrarAlert(false);
    setMostrarConfirmacion(false); // Oculta la alerta de confirmación al iniciar una nueva búsqueda

    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const curso = cursosGuardados.find(c => c.ID === idBusqueda);

    if (curso) {
      setCursoEncontrado(curso);
    } else {
      setMensajeAlert('No se encontró ningún curso con ese ID.');
      setTipoAlert('danger');
      setMostrarAlert(true);
    }
  };

  // Función para eliminar el curso encontrado
  const eliminarCurso = () => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const cursosActualizados = cursosGuardados.filter(curso => curso.ID !== cursoEncontrado.ID);

    localStorage.setItem('cursos', JSON.stringify(cursosActualizados));
    setMensajeAlert('Curso eliminado correctamente.');
    setTipoAlert('success');
    setMostrarAlert(true);
    setCursoEncontrado(null);
    setIdBusqueda('');
    setMostrarConfirmacion(false); // Oculta la alerta de confirmación después de eliminar
    setTimeout(() => navigate('/Cursos'), 1500); // Pequeño delay antes de redirigir
  };

  return (
    <main className="container my-5">
      <h2 className="mb-4">Eliminar Curso</h2>

      {/* Formulario de búsqueda */}
      <Form onSubmit={buscarCurso} className="mb-4">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="ID del curso a buscar"
            value={idBusqueda}
            onChange={(e) => setIdBusqueda(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            Buscar Curso
          </Button>
        </InputGroup>
      </Form>

      {/* Alerta de Bootstrap */}
      {mostrarAlert && (
        <Alert variant={tipoAlert} className="mt-3" dismissible onClose={() => setMostrarAlert(false)}>
          {mensajeAlert}
        </Alert>
      )}

      {/* Alerta de Confirmación */}
      {mostrarConfirmacion && (
        <Alert variant="warning" className="mt-3">
          <p>¿Estás seguro de que deseas eliminar este curso?</p>
          <div className="d-flex gap-2">
            <Button variant="danger" onClick={eliminarCurso}>
              Eliminar
            </Button>
            <Button variant="secondary" onClick={() => setMostrarConfirmacion(false)}>
              Cancelar
            </Button>
          </div>
        </Alert>
      )}

      {/* Mostrar el curso encontrado */}
      {cursoEncontrado && (
        <section className="container my-5">
          <div className="row">
            <div className="col-md-4 mb-4" key={cursoEncontrado.ID}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={cursoEncontrado.IMAGEN || 'https://via.placeholder.com/300x200'}
                  alt={cursoEncontrado.TITULO}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cursoEncontrado.TITULO}</Card.Title>
                  <Card.Text>{cursoEncontrado.DESCRIPCION}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>Categoría:</strong> {cursoEncontrado.CATEGORIA}</ListGroup.Item>
                    <ListGroup.Item><strong>Tema:</strong> {cursoEncontrado.TEMA}</ListGroup.Item>
                    <ListGroup.Item><strong>Plataforma:</strong> {cursoEncontrado.PLATAFORMA}</ListGroup.Item>
                    <ListGroup.Item><strong>Duración:</strong> {cursoEncontrado.TIEMPO}</ListGroup.Item>
                    <ListGroup.Item><strong>Nivel:</strong> {cursoEncontrado.NIVEL}</ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Precio:</strong> {cursoEncontrado.PRECIO === 0 ? 'Gratis' : `$${cursoEncontrado.PRECIO}`}
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="primary"
                    href={cursoEncontrado.ENLACE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    Más Información
                  </Button>
                  <Button
                    variant="danger"
                    className="mt-3"
                    onClick={() => setMostrarConfirmacion(true)} // Muestra la alerta de confirmación
                  >
                    Confirmar Eliminación
                  </Button>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => setCursoEncontrado(null)}
                  >
                    Cancelar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default EliminarCurso;