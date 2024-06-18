import { Tarea } from "./Tarea";
type ListaTarea = {
  listaTarea: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTarea = ({ listaTarea, borrarTarea }: ListaTarea) => {
  return (
    <div className="taskList">
      {listaTarea.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          borrarTarea={() => borrarTarea(index)}
        ></Tarea>
      ))}
    </div>
  );
};
