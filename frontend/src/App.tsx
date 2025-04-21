import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getTotalSpent } from "src/client/expenses";
import "./App.css";

const Card = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "5px",
  padding: "2rem",
  minWidth: "320px",
});

const CardHeader = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const CardTitle = styled("h1")({
  margin: 0,
});

const CardDescription = styled("p")({
  margin: 0,
});

const CardContent = styled("div")({
  display: "flex",
});

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: getTotalSpent,
  });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return `An error has occured: ${error.message}`;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total spent</CardTitle>
        <CardDescription>The total amount you've spent</CardDescription>
      </CardHeader>
      <CardContent>{data.total}</CardContent>
    </Card>
  );
}

export default App;
