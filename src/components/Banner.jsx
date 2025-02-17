export const Banner = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-2 max-h-[230px] max-w-[680px] w-full">
        <div className="row-span-2 w-full h-full">
          <a href="">
            <img
              src="https://autoservicio2.up.edu.pe/ss/App_Themes/Default/Images/celular.jpg"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="https://autoservicio2.up.edu.pe/ss/App_Themes/Default/Images/buscar_curso.jpg"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        <div className="pt-1">
          <a href="">
            <img
              src="https://autoservicio2.up.edu.pe/ss/App_Themes/Default/Images/ver_horarios.jpg"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
