"use client";
import { useState } from "react";
import { TableGrades } from "@/components/TableGrades";
import grades from "@/data/gradesData.json";
import { validatorUser } from "../../../../hooks/useValidatorUser";
import { NeedLoginMessage } from "../../../../components/NeedLoginMessage";

export default function UPGradesAttendance() {
  const [tableGrades, setTableGrades] = useState(grades[0].notas);

  const handleSelectPeriod = (period) => {
    switch (period) {
      case 0:
        setTableGrades(grades[0].notas);
        break;
      case 1:
        setTableGrades(grades[1].notas);
        break;
      case 2:
        setTableGrades(grades[2].notas);
        break;
      case 3:
        setTableGrades(grades[3].notas);
        break;
      case 4:
        setTableGrades(grades[4].notas);
        break;
      case 5:
        setTableGrades(grades[5].notas);
        break;
      case 6:
        setTableGrades(grades[6].notas);
        break;
      case 7:
        setTableGrades(grades[7].notas);
        break;
    }
  };

  return validatorUser() ? (
    <div className="flex p-3 mb-56">
      <div className="w-full">
        <h1 className="text-UP-COLOR2 text-[26px] border-b border-UP-COLOR2 mb-4">
          NOTAS Y ASISTENCIAS
        </h1>

        <div className="bg-[#e8ecf0] rounded-t-xl pt-2 border-b-2 border-UP-COLOR3">
          <div className="flex flex-wrap">
            {grades.map((period, index) => {
              return (
                <div
                  className="text-[11px] font-bold px-7 pb-1 text-[#6699cc] clip-tab text-center hover:text-[#898989] cursor-pointer"
                  onClick={() => handleSelectPeriod(index)}
                  key={index}
                >
                  {period.periodo}
                </div>
              );
            })}
          </div>
        </div>

        <TableGrades notas={tableGrades}  />
      </div>
    </div>
  ) : <NeedLoginMessage/>;
}
