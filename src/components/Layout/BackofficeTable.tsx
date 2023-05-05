import { type Category } from "@prisma/client";
import { EditIcon, DeleteIcon } from "~icons";

import styles from "./Layout.module.scss";

type BackofficeTable = {
  headers: string[];
  data: Category[];
};

export const BackofficeTable: React.FC<BackofficeTable> = ({
  headers,
  data,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.gender}</td>
            <td className={styles.editCell}>
              <EditIcon className={styles.editIcon} />
              <DeleteIcon className={styles.deleteIcon} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
