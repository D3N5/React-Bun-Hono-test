import { useState } from "react";
import styled from "@emotion/styled";
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
  const [totalSpent, setTotalSpent] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total spent</CardTitle>
        <CardDescription>The total amount you've spent</CardDescription>
      </CardHeader>
      <CardContent>{totalSpent}</CardContent>
    </Card>
  );
}

export default App;
