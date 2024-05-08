import { Container } from "components";
import { map } from "lodash-es";

const orderList = [
  {
    id: "qwse#dsfds",
    sequency: "DNA",
    date: "02-12-2023",
    price: "$399",
    status: "Unpaid",
    action: true,
  },
  {
    id: "q@DFe#dsfds",
    sequency: "Standart Sequencing",
    date: "05-02-2024",
    price: "$399",
    status: "Paid",
    action: false,
  },
  {
    id: "qwse#dsfds",
    sequency: "1 Primer / 1 Plate",
    date: "15-03-2024",
    price: "$499",
    status: "Unpaid",
    action: true,
  },
];
const Result: React.FC = () => {
  return (
    <Container className="max-w-6xl mx-auto min-w-max">
      Resultat des testes
    </Container>
  );
};

export default Result;
