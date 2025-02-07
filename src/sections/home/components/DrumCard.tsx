import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Couples } from "../types/types";

type DataProps = {
  data?: string[];
  data_couples?: Couples;
  crosses?: [Couples, Couples][];
  title: string;
  type: number;
};
const DrumCard: React.FC<DataProps> = ({
  data,
  title,
  data_couples,
  crosses,
  type,
}) => {

   // Función para renderizar listas
   const renderList = <T,>(items: T[], renderItem: (item: T) => JSX.Element) => {
    if (!items || items.length === 0) {
      return <p>No hay datos disponibles.</p>;
    }

    if (type === 3 && Array.isArray(items[0])) {
      const values = items[0];
        return (
          <ul>
            {values.map((item, index) => (
              <li key={index}>
                {renderItem(item)}
              </li>
            ))}
          </ul>
        );
    }

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
          { renderItem(item)}
        </li>
          
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    switch (type) {
      case 1:
        return renderList<string>(data || [], (persona) => <span>{persona}</span>);
      case 2:
        return renderList<[string, string]>(data_couples || [], (pareja) => <span>{`${pareja[0]} y ${pareja[1]}`}</span>);
      case 3:
        return renderList<[Couples, Couples]>(crosses || [], (cruce) => (
          <>
            {/* <strong>Cruce:</strong> <br /> */}
            {cruce[0][0]} y {cruce[0][1]} <strong>vs</strong> {cruce[1][0]} y {cruce[1][1]}
          </>
        ));
      default:
        return null;
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
      {renderContent()}
      </CardContent>
    </Card>
  );
};

export default DrumCard;
