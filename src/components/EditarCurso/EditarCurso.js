import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../Styles.css';

const EditarCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    ID: '',
    TITULO: '',
    DESCRIPCION: '',
    CATEGORIA: '',
    TEMA: '',
    PLATAFORMA: '',
    TIEMPO: '',
    NIVEL: '',
    PRECIO: 0,
    ENLACE: '',
    IMAGEN: ''
  });

  useEffect(() => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
    const cursoAEditar = cursosGuardados.find(c => c.ID === id);
    if (cursoAEditar) {
      setCurso(cursoAEditar);
    }
  }, [id]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setCurso(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!curso.TITULO || !curso.DESCRIPCION) {
      alert('El título y la descripción son campos obligatorios');
      return;
    }
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const cursosActualizados = cursosGuardados.map(c => c.ID === id ? curso : c);
    localStorage.setItem('cursos', JSON.stringify(cursosActualizados));
    navigate('/Cursos');
  }, [curso, id, navigate]);

  return (
    <div id="editar-curso-background">
      <div className="editar-curso-form-container">
        <div className="editar-curso-container" id='editar-curso.container'>
          <h2>Editar Curso</h2>
          <form className="editar-curso-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input type="text" className="form-control" name="TITULO" value={curso.TITULO} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea className="form-control" name="DESCRIPCION" value={curso.DESCRIPCION} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <input type="text" className="form-control" name="CATEGORIA" value={curso.CATEGORIA} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Tema</label>
              <input type="text" className="form-control" name="TEMA" value={curso.TEMA} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Plataforma</label>
              <input type="text" className="form-control" name="PLATAFORMA" value={curso.PLATAFORMA} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Duración</label>
              <input type="text" className="form-control" name="TIEMPO" value={curso.TIEMPO} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Nivel</label>
              <input type="text" className="form-control" name="NIVEL" value={curso.NIVEL} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" className="form-control" name="PRECIO" value={curso.PRECIO} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Enlace</label>
              <input type="text" className="form-control" name="ENLACE" value={curso.ENLACE} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input type="text" className="form-control" name="IMAGEN" value={curso.IMAGEN} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-accent">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarCurso;