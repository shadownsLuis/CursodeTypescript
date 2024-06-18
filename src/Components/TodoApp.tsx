import { useState } from "react";
import { ListaTarea } from "./ListaTarea";
export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTarea] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTarea((tareaAnterior) => [...tareaAnterior, nuevaTarea]);
    setNuevaTarea("");
  };
  const handleBorrarTareas = (index: number) => {
    setListaTarea((tarea) => tarea.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tarea</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ListaTarea
        listaTarea={listaTareas}
        borrarTarea={handleBorrarTareas}
      ></ListaTarea>
    </div>
  );
};
