import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarCurso = () => {
  const [nuevoCurso, setNuevoCurso] = useState({
    ID: '',
    CATEGORIA: '',
    TITULO: '',
    DESCRIPCION: '',
    IMAGEN: '',
    TIEMPO: '',
    NIVEL: '',
    ENLACE: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoCurso({ ...nuevoCurso, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar datos de entrada
    if (!nuevoCurso.ID || !nuevoCurso.TITULO || !nuevoCurso.CATEGORIA) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    // Obtener cursos guardados o inicializar lista
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const cursosActualizados = [...cursosGuardados, nuevoCurso];

    // Guardar en localStorage
    localStorage.setItem('cursos', JSON.stringify(cursosActualizados));

    // Redirigir en automatico a los cursos
    navigate('/Cursos');
  };

  return (
    <main className="container my-5">
      <h2 className="mb-4">Agregar Nuevo Curso</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row g-3">
          <div className="col-md-2">
            <input type="text" name="ID" placeholder="ID" className="form-control" value={nuevoCurso.ID} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <input type="text" name="CATEGORIA" placeholder="Categoría" className="form-control" value={nuevoCurso.CATEGORIA} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="text" name="TITULO" placeholder="Título" className="form-control" value={nuevoCurso.TITULO} onChange={handleChange} required />
          </div>
          <div className="col-md-12">
            <textarea name="DESCRIPCION" placeholder="Descripción" className="form-control" value={nuevoCurso.DESCRIPCION} onChange={handleChange}></textarea>
          </div>
          <div className="col-md-6">
            <input type="text" name="IMAGEN" placeholder="URL de la imagen" className="form-control" value={nuevoCurso.IMAGEN} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <input type="text" name="TIEMPO" placeholder="Duración" className="form-control" value={nuevoCurso.TIEMPO} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <input type="text" name="NIVEL" placeholder="Nivel" className="form-control" value={nuevoCurso.NIVEL} onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <input type="text" name="ENLACE" placeholder="Enlace (opcional)" className="form-control" value={nuevoCurso.ENLACE} onChange={handleChange} />
          </div>
          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-success">Guardar Curso</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AgregarCurso;
