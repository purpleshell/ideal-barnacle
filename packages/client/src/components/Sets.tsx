import moment from "moment";
import React from "react";
import CreateSetForm from "./forms/CreateSetForm";
import Set from "./Set";

const Sets = ({ date, exercise }: any) => {
  return (
    <>
      <CreateSetForm date={date} exercise={exercise} />

      <div className="working-sets">
        {exercise.sets
          .filter(
            (set: any) =>
              moment(set.date.substring(0, 10))
                .format()
                .substring(0, 10) ===
              moment(date)
                .format()
                .substring(0, 10)
          )
          .map((workingSet: any, i: number) => (
            <Set key={i} i={i} set={workingSet} />
          ))}
      </div>
    </>
  );
};

export default Sets;
